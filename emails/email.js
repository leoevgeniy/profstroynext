import nodemailer from "nodemailer"

// Replace with your SMTP credentials
const smtpOptions = {
    host: process.env.SMTP_HOST || "smtp.yandex.ru",
    port: parseInt(process.env.SMTP_PORT || "465"),
    secure: true,
    auth: {
        user: process.env.SMTP_USER || "evgeniy.tikhonenkov@yandex.ru",
        pass: process.env.SMTP_PASSWORD || "Zareval80!",
    },
}

export const sendEmail = async (data) => {
    const transporter = nodemailer.createTransport({
        ...smtpOptions,
    })

    return await transporter.sendMail({
        from: process.env.SMTP_FROM_EMAIL,
        ...data,
    })
}
