const nodemailer = require("nodemailer");
const mg = require("nodemailer-mailgun-transport");
const handlebars = require("handlebars");
const fs = require("fs");
const path = require("path");

/**
 * A class for sending emails with registration notifications and account actions, using Mailgun API.
 * @category Mailer
 * @class
 * @property {!string} template - Name of the template for emails with the structure of an html document. Templates are located in the 'templates' folder.
 * @property {!string} content - An object that qualifies the email template and is compiled at the time of sending.
 * @property {!string} subject - The subject that the user will see when receiving an email.
 * @property {!string} to - Recipient email address.
 * @property {!string} emailFrom - The name of the company or organization of the sender of the email.
 */
class MailGunMailer {
    /**
     * Creates a new email sender.
     * @constructor
     */
    constructor() {
        this.template = '';
        this.content = {};
        this.subject = '';
        this.to = [];
        this.emailFrom = process.env.MAIL_FROM;
    }

    /**
     * Sets the subject of the email.
     * @param {!string} subject - The subject that the user will see when receiving an email.
     * @returns {MailGunMailer}
     */
    setSubject(subject) {
        this.subject = subject;
        return this;
    }

    /**
     * Sets the name of the email template.
     * @param {!string} template - Name of the template for emails with the structure of an html document.
     * @returns {MailGunMailer}
     */
    setTemplate(template) {
        this.template = template;
        return this;
    }

    /**
     * Sets the name of a company or organization.
     * @param {!string} emailFrom - The name of the company or organization of the sender of the email.
     * @returns {MailGunMailer}
     */
    setFrom(emailFrom) {
        this.emailFrom = emailFrom;
        return this;
    }

    /**
     * Sets the object and its properties for use in the email template.
     * @param {!Object} contentObject - An object that qualifies the email template and is compiled at the time of sending.
     * @returns {MailGunMailer}
     */
    setContent(contentObject) {
        this.content = contentObject;
        return this;
    }

    /**
     * Sets the recipient's email address.
     * @param {!string} receivers - Recipient email address.
     * @returns {MailGunMailer}
     */
    setTo(receivers) {
        this.to.push(receivers);
        return this;
    }

    /**
     * Direct sending of an e-mail using the SMTP transfer protocol.
     */
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

    /**
     * The client code to control sending emails.
     * @param {!string} userName - The username to be used in the email.
     * @param {!string} userEmail - The user's email to which the email will be sent.
     */
    sendRegisterMail(userName, userEmail) {
        this.setTemplate('register');
        this.setSubject('Thank you for registering at ProjectsLab!');
        this.setContent({ name: userName });
        this.setTo(userEmail);
        this.send();
    }
}

module.exports = new MailGunMailer();