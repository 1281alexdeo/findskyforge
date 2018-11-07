const express = require('express');
const Router = express.Router();
const keys = require('../../config/keys');
const sgMail = require('@sendgrid/mail');

const validateContactFormInput = require('../../Validation/ContactForm');
sgMail.setApiKey(keys.SGAPI);

Router.post('/send', (req, res) => {
  const { errors, isValid } = validateContactFormInput(req.body);
  if (!isValid) {
    return res.status(400).json(errors);
  }
  const msg = {
    to: '1281alexdeo@gmail.com',
    from: req.body.email,
    subject: `Alex!! You have a portfolio Message from ${req.body.name} `,
    text: req.body.message
  };
  sgMail.send(msg);
  res.json({ msg });
});

module.exports = Router;
