import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: Request) {
  try {
    const { name, phone } = await request.json();
    // Configure Nodemailer
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });
    // Email details
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: "antoniolupu77@gmail.com", // replace
      subject: "Nouă solicitare de ofertă",
      text: `De la:
      Name: ${name}
      Phone: ${phone}`,
    };
    // Send email
    await transporter.sendMail(mailOptions);
    return NextResponse.json({ message: "Email sent successfully!" });
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json({ error: "Failed to send email" });
  }
}
