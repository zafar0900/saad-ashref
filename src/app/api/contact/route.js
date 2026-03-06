import nodemailer from "nodemailer";

export async function POST(request) {
  try {
    const body = await request.json();
    const { name, phone, email, message } = body;

    console.log("ENV Email:", process.env.MY_EMAIL);
    console.log("ENV Password:", process.env.MY_EMAIL_PASSWORD ? "LOADED" : "NOT LOADED");

    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 587,
      secure: false,
      auth: {
        user: process.env.MY_EMAIL,
        pass: process.env.MY_EMAIL_PASSWORD, // MUST BE GOOGLE APP PASSWORD
      },
    });

    // Verify SMTP
    try {
      await transporter.verify();
      console.log("SMTP: CONNECTED");
    } catch (err) {
      console.log("SMTP CONNECTION ERROR:", err);
    }

    const info = await transporter.sendMail({
      from: `"Saad Design" <${process.env.MY_EMAIL}>`,
      to: `${process.env.ADMIN_EMAIL}, saad@adwebstudio.com`,
      replyTo: email,
      subject: "Inquiry - saaddesign.ae",
      html: `
        <h2>New Contact Form Message</h2>
        <p><b>Name:</b> ${name}</p>
        <p><b>Phone:</b> ${phone}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>Message:</b><br/>${message}</p>
      `,
    });

    console.log("EMAIL SENT:", info);

    return Response.json({ success: true });
  } catch (error) {
    console.log("Nodemailer ERROR:", error);
    return Response.json({ success: false, error: error.message, details: error });
  }
}
