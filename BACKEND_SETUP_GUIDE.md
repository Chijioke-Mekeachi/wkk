# WKK Family Custom Backend Setup Guide

## 🚀 Complete Backend Solution

I've created a full-featured custom backend for your WKK Family form submissions with:

- ✅ **Email Notifications** - Instant notifications to your inbox
- ✅ **Database Storage** - MongoDB for reliable data storage
- ✅ **Admin Dashboard** - Web interface to view and manage submissions
- ✅ **Security Features** - Rate limiting, validation, and protection
- ✅ **Export Capabilities** - CSV export for your records

## 📁 Files Created

```
server/
├── package.json          # Backend dependencies
├── server.js             # Main server file
├── .env.example          # Environment variables template
├── admin-dashboard.html  # Admin interface
└── BACKEND_SETUP_GUIDE.md # This guide
```

## 🛠️ Setup Instructions

### Step 1: Install Dependencies

```bash
cd server
npm install
```

### Step 2: Environment Configuration

1. Copy `.env.example` to `.env`:
```bash
cp .env.example .env
```

2. Configure your `.env` file:

```env
# Database Configuration
MONGODB_URI=mongodb://localhost:27017/wkk-family

# Email Configuration (Gmail example)
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-gmail-app-password
NOTIFICATION_EMAIL=henry@wkkfamily.com

# Frontend URL (for CORS)
FRONTEND_URL=https://your-netlify-site.netlify.app

# Server Configuration
PORT=5000
```

### Step 3: Database Setup

**Option A: Local MongoDB**
1. Install MongoDB locally
2. Start MongoDB service
3. Use default connection string

**Option B: MongoDB Atlas (Recommended)**
1. Create free account at [mongodb.com/atlas](https://mongodb.com/atlas)
2. Create a cluster
3. Get connection string
4. Update `MONGODB_URI` in `.env`

### Step 4: Email Setup (Gmail)

1. Enable 2-factor authentication on your Gmail account
2. Generate an App Password:
   - Go to Google Account settings
   - Security → 2-Step Verification → App passwords
   - Generate password for "Mail"
3. Use this app password in `EMAIL_PASS`

### Step 5: Start the Server

```bash
npm run dev  # Development mode with auto-restart
# or
npm start    # Production mode
```

### Step 6: Update Frontend

The frontend is already configured to use your backend at `http://localhost:5000`

For production, update the fetch URL in `SponsorshipForm.tsx` to your deployed backend URL.

## 🎯 Features Overview

### 📧 Email Notifications
- **Instant alerts** when forms are submitted
- **Beautiful HTML emails** with all submission details
- **Partnership type identification** in subject line
- **Professional formatting** for easy reading

### 🗄️ Database Storage
- **Secure MongoDB storage** with validation
- **Automatic timestamps** and metadata
- **Status tracking** (new, reviewed, contacted)
- **IP address logging** for security

### 🖥️ Admin Dashboard
- **Web-based interface** at `http://localhost:5000/admin-dashboard.html`
- **Filter by partnership type** and status
- **Update submission status** with dropdown
- **Export to CSV** functionality
- **Pagination** for large datasets
- **Direct email links** for quick contact

### 🔒 Security Features
- **Rate limiting** - 10 submissions per 15 minutes per IP
- **Input validation** with Joi schema
- **CORS protection** for your domain only
- **Helmet.js** for security headers
- **Request logging** for monitoring

## 🚀 Deployment Options

### Option 1: Heroku (Recommended)
1. Create Heroku account
2. Install Heroku CLI
3. Deploy:
```bash
git init
git add .
git commit -m "Initial commit"
heroku create wkk-family-backend
git push heroku main
```

### Option 2: Railway
1. Connect GitHub repo to Railway
2. Set environment variables
3. Deploy automatically

### Option 3: DigitalOcean App Platform
1. Create app from GitHub
2. Configure environment variables
3. Deploy

### Option 4: VPS (Advanced)
1. Set up Ubuntu server
2. Install Node.js and MongoDB
3. Use PM2 for process management
4. Configure Nginx reverse proxy

## 📊 Admin Dashboard Usage

### Accessing the Dashboard
1. Open `http://localhost:5000/admin-dashboard.html`
2. View all form submissions in real-time
3. Filter by partnership type or status
4. Update statuses as you process applications

### Managing Submissions
- **New**: Fresh submissions needing review
- **Reviewed**: Submissions you've looked at
- **Contacted**: Applicants you've reached out to

### Exporting Data
- Click "Export CSV" to download all filtered data
- Import into Google Sheets or Excel for analysis
- Share with team members as needed

## 🔧 Customization Options

### Adding New Fields
1. Update the Joi validation schema in `server.js`
2. Add fields to the MongoDB schema
3. Update the frontend form
4. Modify email template

### Custom Email Templates
Edit the `emailHtml` variable in the `sendEmailNotification` function to customize the email format.

### Additional Endpoints
Add new API endpoints for features like:
- Bulk status updates
- Advanced filtering
- Analytics and reporting
- Integration with CRM systems

## 🆘 Troubleshooting

### Common Issues

**"Cannot connect to MongoDB"**
- Check if MongoDB is running
- Verify connection string in `.env`
- Check network connectivity

**"Email not sending"**
- Verify Gmail app password
- Check email credentials in `.env`
- Ensure 2FA is enabled on Gmail

**"CORS errors"**
- Update `FRONTEND_URL` in `.env`
- Check if frontend URL matches exactly

**"Rate limit exceeded"**
- Normal security feature
- Wait 15 minutes or adjust limits in code

### Getting Help
- Check server logs for detailed error messages
- Verify all environment variables are set
- Test each component individually

## 📈 Next Steps

1. **Test the complete flow** - Submit a form and verify email/storage
2. **Set up monitoring** - Use tools like Uptime Robot
3. **Configure backups** - Regular database backups
4. **Scale as needed** - Add load balancing for high traffic
5. **Add analytics** - Track submission patterns and trends

Your custom backend is now ready to handle all WKK Family form submissions with professional-grade features!