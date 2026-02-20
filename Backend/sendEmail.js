const nodemailer = require("nodemailer");


const sendEmail = async (email, subject, message) => {
    try {
        const transporter = nodemailer.createTransport({
            host: "smtp.gmail.com",
            port: 587,
            secure: false,
            auth: {
                user: process.env.MY_EMAIL,
                pass: process.env.MY_PASSWORD,
            },
        });

        const info = await transporter.sendMail({
            from: `"Your App Name" <${process.env.MY_EMAIL}>`,
            subject: subject,
            to: email,
            text: message,
        });
        console.log("Email sent:", info.messageId);
    } catch (error) {
        console.error("Email sending failed:", error);
        throw error;
    }
};

module.exports = sendEmail;
