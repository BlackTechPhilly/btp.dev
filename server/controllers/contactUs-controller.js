// Dependencies
//( Email client)
const sgMail = require("@sendgrid/mail");
const dotenv = require("dotenv");
dotenv.config();

exports.sendMsg = (req, res) => {
  sgMail.setApiKey(process.env.SENDGRID_API_KEY);
  let to = req.body.to.toString();
  let from = req.body.from.toString();
  let subject = req.body.subject;
  let html = req.body.text;

  let toString = to.toString();
  let fromString = from.toString();
  let subjectString = subject.toString();
  let textString = html.toString();

  const msg = {
    to: toString,
    from: fromString,
    subject: subjectString,
    html: textString,
  };

  sgMail.send(msg);
};
