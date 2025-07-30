const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const rateLimit = require('express-rate-limit');
const nodemailer = require('nodemailer');
const mongoose = require('mongoose');
const Joi = require('joi');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Security middleware
app.use(helmet());
app.use(cors({
  origin: process.env.FRONTEND_URL || 'http://localhost:5173',
  credentials: true
}));

// Rate limiting
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 10, // limit each IP to 10 requests per windowMs
  message: 'Too many form submissions, please try again later.'
});

app.use('/api/forms', limiter);
app.use(express.json({ limit: '10mb' }));

// MongoDB connection
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/wkk-family', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Form submission schema
const submissionSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  organization: { type: String },
  message: { type: String, required: true },
  partnershipType: { 
    type: String, 
    enum: ['tech', 'church', 'ambassador', 'speakers'],
    required: true 
  },
  eventName: { type: String, default: 'WKK Family Launch Event' },
  submittedAt: { type: Date, default: Date.now },
  ipAddress: String,
  userAgent: String,
  status: { type: String, enum: ['new', 'reviewed', 'contacted'], default: 'new' }
});

const Submission = mongoose.model('Submission', submissionSchema);

// Email transporter setup
const transporter = nodemailer.createTransporter({
  service: 'gmail', // or your preferred email service
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS // Use app password for Gmail
  }
});

// Validation schema
const submissionValidation = Joi.object({
  name: Joi.string().min(2).max(100).required(),
  email: Joi.string().email().required(),
  organization: Joi.string().max(200).allow(''),
  message: Joi.string().min(10).max(2000).required(),
  partnershipType: Joi.string().valid('tech', 'church', 'ambassador', 'speakers').required()
});

// Form submission endpoint
app.post('/api/forms/submit', async (req, res) => {
  try {
    // Validate input
    const { error, value } = submissionValidation.validate(req.body);
    if (error) {
      return res.status(400).json({ 
        success: false, 
        message: error.details[0].message 
      });
    }

    // Create submission record
    const submission = new Submission({
      ...value,
      ipAddress: req.ip,
      userAgent: req.get('User-Agent')
    });

    await submission.save();

    // Send email notification
    await sendEmailNotification(submission);

    res.status(200).json({ 
      success: true, 
      message: 'Form submitted successfully!' 
    });

  } catch (error) {
    console.error('Form submission error:', error);
    res.status(500).json({ 
      success: false, 
      message: 'Internal server error. Please try again.' 
    });
  }
});

// Email notification function
async function sendEmailNotification(submission) {
  const partnershipTypeLabels = {
    tech: 'Tech Collaborator',
    church: 'Church Sponsor',
    ambassador: 'Regional Ambassador',
    speakers: 'Event Speaker'
  };

  const emailHtml = `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
      <h2 style="color: #2563eb;">New WKK Family Partnership Request</h2>
      
      <div style="background: #f8fafc; padding: 20px; border-radius: 8px; margin: 20px 0;">
        <h3 style="color: #1e40af; margin-top: 0;">Partnership Type: ${partnershipTypeLabels[submission.partnershipType]}</h3>
        
        <p><strong>Name:</strong> ${submission.name}</p>
        <p><strong>Email:</strong> ${submission.email}</p>
        ${submission.organization ? `<p><strong>Organization:</strong> ${submission.organization}</p>` : ''}
        <p><strong>Submitted:</strong> ${submission.submittedAt.toLocaleString()}</p>
      </div>
      
      <div style="background: #ffffff; padding: 20px; border: 1px solid #e5e7eb; border-radius: 8px;">
        <h4 style="color: #374151; margin-top: 0;">Message:</h4>
        <p style="white-space: pre-wrap; line-height: 1.6;">${submission.message}</p>
      </div>
      
      <div style="margin-top: 20px; padding: 15px; background: #dbeafe; border-radius: 8px;">
        <p style="margin: 0; color: #1e40af;">
          <strong>Next Steps:</strong> Review this submission and reach out to the applicant within 24-48 hours.
        </p>
      </div>
    </div>
  `;

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: process.env.NOTIFICATION_EMAIL,
    subject: `New ${partnershipTypeLabels[submission.partnershipType]} Application - WKK Family`,
    html: emailHtml
  };

  await transporter.sendMail(mailOptions);
}

// Get all submissions (admin endpoint)
app.get('/api/forms/submissions', async (req, res) => {
  try {
    const { page = 1, limit = 20, type, status } = req.query;
    
    const filter = {};
    if (type) filter.partnershipType = type;
    if (status) filter.status = status;

    const submissions = await Submission.find(filter)
      .sort({ submittedAt: -1 })
      .limit(limit * 1)
      .skip((page - 1) * limit);

    const total = await Submission.countDocuments(filter);

    res.json({
      success: true,
      data: submissions,
      pagination: {
        page: parseInt(page),
        limit: parseInt(limit),
        total,
        pages: Math.ceil(total / limit)
      }
    });
  } catch (error) {
    console.error('Error fetching submissions:', error);
    res.status(500).json({ success: false, message: 'Server error' });
  }
});

// Update submission status
app.patch('/api/forms/submissions/:id/status', async (req, res) => {
  try {
    const { status } = req.body;
    if (!['new', 'reviewed', 'contacted'].includes(status)) {
      return res.status(400).json({ success: false, message: 'Invalid status' });
    }

    const submission = await Submission.findByIdAndUpdate(
      req.params.id,
      { status },
      { new: true }
    );

    if (!submission) {
      return res.status(404).json({ success: false, message: 'Submission not found' });
    }

    res.json({ success: true, data: submission });
  } catch (error) {
    console.error('Error updating submission:', error);
    res.status(500).json({ success: false, message: 'Server error' });
  }
});

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({ 
    success: true, 
    message: 'WKK Family Backend is running!',
    timestamp: new Date().toISOString()
  });
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ 
    success: false, 
    message: 'Something went wrong!' 
  });
});

// 404 handler
app.use('*', (req, res) => {
  res.status(404).json({ 
    success: false, 
    message: 'Endpoint not found' 
  });
});

app.listen(PORT, () => {
  console.log(`🚀 WKK Family Backend running on port ${PORT}`);
  console.log(`📧 Email notifications: ${process.env.EMAIL_USER ? 'Configured' : 'Not configured'}`);
  console.log(`🗄️  Database: ${mongoose.connection.readyState === 1 ? 'Connected' : 'Connecting...'}`);
});