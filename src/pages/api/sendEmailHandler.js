import nodemailer from "nodemailer";

const sendEmailHandler = async (req, res) => {
    if (req.method !== "POST") {
        res.status(405).json({ message: "Method not allowed" });
        return;
    }

    const { name, email, message } = req.body;

    const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: process.env.GMAIL_TRANSPORTER,
            pass: process.env.PASS_TRANSPORTER,
        },
    });

    const details = {
        from: "personalWebsite@gmail.com",
        to: process.env.GMAIL_PERSONAL,
        subject: `From ${name} ~ ${email}`,
        text: `From ${name} ~ ${email}`,
        html: message,
    };

    try {
        const info = await transporter.sendMail(details);
        res.status(200).json({ success: true });
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, error });
    }
};

export default sendEmailHandler;
