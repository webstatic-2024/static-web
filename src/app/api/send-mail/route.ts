import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

interface ContactFormData {
  name: string;
  email: string;
  subject?: string;
  phone_number?: string;
  comment: string;
}

const mailTransport = nodemailer.createTransport({
  host: process.env.MAILER_HOST,
  secure: false,
  auth: {
    user: process.env.MAILER_ADDRESS,
    pass: process.env.MAILER_PASSWORD,
  },
});

export async function POST(req: NextRequest) {
  try {
    const body: ContactFormData = await req.json();

    const emailBody = `
      <!DOCTYPE html>
      <html lang="en">
      <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Email Template</title>
          <style>
              body { font-family: Arial, sans-serif; margin: 0; padding: 0; background-color: #f4f4f4; }
              .container { width: 100%; max-width: 600px; margin: 0 auto; background-color: #ffffff; padding: 20px; border-radius: 8px; box-shadow: 0 0 10px rgba(0, 0, 0, 0.1); }
              .header { background-color: #6f00eb; color: #ffffff; padding: 10px; text-align: center; border-radius: 8px 8px 0 0; }
              .content { padding: 20px; color: #333333; }
              .footer { text-align: center; padding: 10px; font-size: 12px; color: #777777; }
              .button { display: inline-block; padding: 10px 20px; margin-top: 20px; background-color: #6f00eb; color: #ffffff; text-decoration: none; border-radius: 5px; }
          </style>
      </head>
      <body>
          <div class="container">
              <div class="header">
                  <h1>Contact Form Submission</h1>
              </div>
              <div class="content">
                  <p>Hi ${body.name || 'there'},</p>
                  <p>Thank you for reaching out to us. Here is a summary of your message:</p>
                  <p><strong>Email:</strong> ${body.email}</p>
                  <p><strong>Phone:</strong> ${body.phone_number || "N/A"}</p>
                  <p><strong>Message:</strong> ${body.comment || "No message"}</p>
                  <a href="${process.env.NEXT_PUBLIC_WEBSITE_URL}" class="button">Visit Our Website</a>
              </div>
              <div class="footer">
                  <p>&copy; 2024 Your Company. All rights reserved.</p>
              </div>
          </div>
      </body>
      </html>
    `;

    const mailOptions = {
      from: process.env.MAILER_ADDRESS,
      to: body.email,
      subject: body.subject || process.env.MAILER_SUBJECT || "New Contact Form Submission",
      html: emailBody,
    };

    // Gửi email
    await mailTransport.sendMail(mailOptions);

    return NextResponse.json(
      { message: "Email sent successfully!" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json(
      { error: "Failed to send email." },
      { status: 500 }
    );
  }
}

export function GET() {
  return NextResponse.json(
    { message: "Method GET not allowed." },
    { status: 405 }
  );
}
