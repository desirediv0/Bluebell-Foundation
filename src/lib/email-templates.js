export const getAdminEmailHTML = (type, data) => {
  const isDonation = type === 'donation';
  
  return `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <style>
        body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; line-height: 1.6; color: #1f2937; margin: 0; padding: 0; background-color: #f3f4f6; }
        .wrapper { background-color: #f3f4f6; padding: 40px 20px; }
        .container { max-width: 600px; margin: 0 auto; background: #ffffff; border-radius: 24px; overflow: hidden; shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1); border: 1px solid #e5e7eb; }
        .header { background: linear-gradient(135deg, #1E73BE 0%, #155e9d 100%); color: white; padding: 40px 30px; text-align: left; }
        .content { padding: 40px 30px; }
        .footer { background: #f9fafb; padding: 30px; text-align: center; font-size: 13px; color: #6b7280; border-top: 1px solid #f1f5f9; }
        .detail-row { margin-bottom: 24px; border-bottom: 1px solid #f1f5f9; padding-bottom: 12px; }
        .detail-label { display: block; font-size: 12px; font-weight: 700; color: #1E73BE; text-transform: uppercase; letter-spacing: 0.05em; margin-bottom: 4px; }
        .detail-value { font-size: 16px; font-weight: 500; color: #111827; }
        .badge { display: inline-block; padding: 6px 16px; background: rgba(255,255,255,0.2); color: white; border-radius: 99px; font-size: 12px; font-weight: 600; margin-bottom: 16px; border: 1px solid rgba(255,255,255,0.3); }
        .card { background: #f8fafc; border-radius: 16px; padding: 24px; margin-top: 24px; border: 1px solid #e2e8f0; }
        .amount-highlight { font-size: 32px; font-weight: 800; color: #059669; margin: 10px 0; }
      </style>
    </head>
    <body>
      <div class="wrapper">
        <div class="container">
          <div class="header">
            <div class="badge">${isDonation ? 'Contribution' : 'New Inquiry'}</div>
            <h1 style="margin:0; font-size: 28px; font-weight: 800;">Mission Submission</h1>
            <p style="margin:8px 0 0; opacity: 0.9; font-size: 15px;">New data received from Bluebell Foundation Website</p>
          </div>
          <div class="content">
            <h3 style="margin-top:0; font-size: 18px; color: #111827;">Submission Details</h3>
            
            <div class="detail-row">
              <span class="detail-label">Sender Name</span>
              <span class="detail-value">${data.name}</span>
            </div>
            
            <div class="detail-row">
              <span class="detail-label">Email Address</span>
              <span class="detail-value">${data.email}</span>
            </div>
            
            <div class="detail-row">
              <span class="detail-label">Contact Number</span>
              <span class="detail-value">${data.phoneNumber}</span>
            </div>

            ${isDonation ? `
              <div class="card">
                <span class="detail-label" style="color: #059669;">Donation Amount</span>
                <div class="amount-highlight">₹${data.amount}</div>
                <p style="margin:0; font-size: 13px; color: #64748b;">This contribution was reported via the secure donation form.</p>
              </div>
            ` : ''}

            ${data.subject ? `
              <div class="detail-row" style="margin-top: 24px;">
                <span class="detail-label">Subject</span>
                <span class="detail-value">${data.subject}</span>
              </div>
            ` : ''}

            ${data.message ? `
              <div class="detail-row">
                <span class="detail-label">Message Content</span>
                <div style="font-size: 15px; color: #4b5563; background: #f9fafb; padding: 20px; border-radius: 12px; margin-top: 8px; border-left: 4px solid #1E73BE;">
                  ${data.message}
                </div>
              </div>
            ` : ''}
          </div>
          <div class="footer">
            <p style="margin-bottom: 8px;"><b>Bluebell Foundation Dashboard</b></p>
            <p>© ${new Date().getFullYear()} Bluebell Foundation. All rights reserved.</p>
          </div>
        </div>
      </div>
    </body>
    </html>
  `;
};

export const getUserEmailHTML = (name, type) => {
  const isDonation = type === 'donation';
  
  return `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <style>
        body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; line-height: 1.6; color: #374151; margin: 0; padding: 0; background-color: #f8fafc; }
        .wrapper { background-color: #f8fafc; padding: 40px 20px; }
        .container { max-width: 600px; margin: 0 auto; background: #ffffff; border-radius: 32px; overflow: hidden; border: 1px solid #e2e8f0; box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.05); }
        .hero { background: #1E73BE; padding: 60px 40px; text-align: center; color: white; position: relative; }
        .logo-circle { width: 80px; height: 80px; background: white; border-radius: 50%; margin: 0 auto 24px; padding: 10px; box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.2); }
        .content { padding: 50px 40px; text-align: center; }
        .footer { background: #f1f5f9; padding: 40px; text-align: center; font-size: 13px; color: #64748b; }
        .button { display: inline-block; padding: 18px 40px; background: #1E73BE; color: white !important; text-decoration: none; border-radius: 16px; font-weight: 700; font-size: 16px; margin-top: 30px; box-shadow: 0 10px 15px -3px rgba(30, 115, 190, 0.3); }
        .heart-icon { font-size: 40px; display: block; margin-bottom: 20px; }
      </style>
    </head>
    <body>
      <div class="wrapper">
        <div class="container">
          <div class="hero">
            <h1 style="margin:0; font-size: 32px; font-weight: 800;">Bluebell Foundation</h1>
            <p style="margin:12px 0 0; opacity: 0.9; font-size: 17px; font-weight: 500;">Healing Hearts, Building Futures</p>
          </div>
          <div class="content">
            <span class="heart-icon">💝</span>
            <h2 style="color: #111827; font-size: 28px; font-weight: 800; margin-top: 0;">Namaste, ${name}!</h2>
            <p style="font-size: 17px; line-height: 1.8; color: #4b5563;">
              ${isDonation 
                ? 'Your incredible generosity has touched our hearts. We have received your donation report, and we are beyond grateful for your support in our mission to help those in need.'
                : 'Thank you for reaching out to the Bluebell Foundation. We have received your inquiry and our team is already looking into how we can best support you.'}
            </p>
            <p style="font-size: 15px; color: #6b7280; font-style: italic; margin-top: 24px;">
              "The best way to find yourself is to lose yourself in the service of others."
            </p>
            
            <a href="https://bluebellservice.co.in" class="button">Visit Our Community</a>
            
            <p style="margin-top: 40px; font-size: 14px; font-weight: 600; color: #94a3b8;">
              Questions? Reply to this email or call us at +91 7303249605
            </p>
          </div>
          <div class="footer">
            <p style="margin-bottom: 12px; font-weight: 700; color: #1E73BE;">Bluebell Foundation</p>
            <p style="line-height: 1.5;">DW-01, Heritage Apartments, Sector-03, Dwarka, New Delhi - 110075</p>
            <p style="margin-top: 20px;">© ${new Date().getFullYear()} Bluebell Service Foundation. All rights reserved.</p>
          </div>
        </div>
      </div>
    </body>
    </html>
  `;
};

