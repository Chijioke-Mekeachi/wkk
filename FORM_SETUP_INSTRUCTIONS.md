# WKK Family Form Setup Instructions

## 📧 Email Notifications & Storage Setup

I've implemented form handling that will send you email notifications and store submissions. Here are your setup options:

## Option 1: Formspree (Recommended - Easy Setup)

### Step 1: Create Formspree Account
1. Go to [formspree.io](https://formspree.io)
2. Sign up for a free account
3. Create a new form project

### Step 2: Configure Your Form
1. In your Formspree dashboard, create a new form
2. Copy your form endpoint (looks like: `https://formspree.io/f/xyzabc123`)
3. Replace `YOUR_FORM_ID` in the code with your actual form ID

### Step 3: Email Setup
- Formspree automatically sends submissions to your registered email
- You can add multiple email recipients
- Customize email templates in the dashboard

### Step 4: Storage & Export
- All submissions are stored in your Formspree dashboard
- Export to CSV, Excel, or Google Sheets
- Set up automatic Google Sheets integration

## Option 2: Netlify Forms (If using Netlify hosting)

### Step 1: Update Form Attributes
Add these attributes to your form tag:
```html
<form name="wkk-partnership" method="POST" data-netlify="true">
```

### Step 2: Email Notifications
1. Go to your Netlify site dashboard
2. Navigate to Forms section
3. Set up email notifications
4. Add your email address

### Step 3: Storage
- Forms are stored in Netlify dashboard
- Export options available
- Webhook integration possible

## Option 3: Google Forms Integration

### Step 1: Create Google Form
1. Create a Google Form with matching fields
2. Get the form submission URL
3. Update the fetch URL in the code

### Step 2: Automatic Storage
- Responses automatically go to Google Sheets
- Real-time notifications via Google Apps Script
- Easy sharing and collaboration

## Option 4: Custom Backend (Advanced)

### If you want full control:
1. Set up a backend service (Node.js, Python, etc.)
2. Configure email service (SendGrid, Mailgun, etc.)
3. Set up database storage (MongoDB, PostgreSQL, etc.)
4. Update the form submission endpoint

## 🔧 Current Implementation Features

✅ **Form Validation**: Required fields and email validation
✅ **Loading States**: Shows spinner during submission
✅ **Success/Error Messages**: User feedback
✅ **Form Reset**: Clears after successful submission
✅ **Partnership Type Tracking**: Knows which tab was selected
✅ **Timestamp**: Automatic submission time tracking

## 📊 Data Collected

Each form submission includes:
- Name
- Email
- Organization (optional for speakers)
- Message/Expertise
- Partnership Type (tech/church/ambassador/speakers)
- Timestamp
- Event Name

## 🚀 Next Steps

1. Choose your preferred option above
2. Follow the setup instructions
3. Replace the form endpoint in the code
4. Test the form submission
5. Configure email notifications
6. Set up data export/storage

## 💡 Pro Tips

- **Formspree Free Plan**: 50 submissions/month
- **Paid Plans**: Unlimited submissions, advanced features
- **Backup Strategy**: Consider multiple storage options
- **Analytics**: Track form conversion rates
- **Follow-up**: Set up automated email sequences

## 🔒 Security & Privacy

- All services mentioned are GDPR compliant
- SSL encryption for data transmission
- No sensitive data stored in frontend code
- Regular data backups recommended

Choose the option that best fits your technical comfort level and budget. Formspree is recommended for quick setup with minimal technical requirements.