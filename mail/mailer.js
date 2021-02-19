const nodemailer = require("nodemailer");
const mg = require("nodemailer-mailgun-transport");
const handlebars = require("handlebars");
const fs = require("fs");
const path = require("path");


class MailGunMailer {
    constructor() {
        this.template = '';
        this.content = {};
        this.subject = '';
        this.to = [];
        this.emailFrom = process.env.MAIL_FROM;
    }
    setSubject(subject) {
        this.subject = subject;
        return this;
    }
    setTemplate(template) {
        this.template = template;
        return this;
    }
    setFrom(emailFrom) {
        this.emailFrom = emailFrom;
        return this;
    }
    setContent(contentObject) {
        this.content = contentObject;
        return this;
    }
    setTo(receivers) {
        this.to.push(receivers);
        return this;
    }
    send() {
        const emailTemplateSource =
            fs.readFileSync(
                path.join(__dirname, `/templates/${this.template}.hbs`),
            "utf8");

        const mailgunAuth = {
            auth: {
                api_key: process.env.MAILGUN_API_KEY,
                domain: process.env.MAILGUN_DOMAIN
            }
        };

        const smtpTransport = nodemailer.createTransport(mg(mailgunAuth));

        const templateCompiled = handlebars.compile(emailTemplateSource);

        const htmlToSend = templateCompiled(this.content);

        const mailOptions = {
            from: this.emailFrom,
            to: this.to,
            subject: this.subject,
            html: htmlToSend
        };

        smtpTransport.sendMail(mailOptions, function(error, response) {
            if (error) {
                console.log(error)
            } else {
                console.log("Successfully sent email.")
            }
        });
    }
    sendRegisterMail(userName, userEmail) {
        this.setTemplate('register');
        this.setSubject('Thank you for registering at ProjectsLab!');
        this.setContent({ name: userName });
        this.setTo(userEmail);
        this.send();
    }
}

module.exports = new MailGunMailer();