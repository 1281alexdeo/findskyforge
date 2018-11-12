import React, { Component } from 'react';
import './contact.scss';
import axios from 'axios';
import Fade from 'react-reveal/Fade';

import Heading from '../Common/Heading';
export class Contact extends Component {
  state = {
    name: '',
    email: '',
    message: '',
    errors: {},
    success: ''
  };
  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  onSubmit = e => {
    e.preventDefault();
    const { name, email, message } = this.state;
    const formData = {
      name,
      email,
      message
    };
    axios
      .post('/api/email/send', formData)
      .then(res => {
        console.log(res.data);
        this.setState({
          errors: {},
          name: '',
          email: '',
          message: '',
          success: 'Your message has been sent '
        });
        setTimeout(() => {
          this.setState({ success: '' });
        }, 3000);
      })
      .catch(err => this.setState({ errors: err.response.data }));

    console.log('sending message');
  };

  render() {
    const { errors, email, message, name, success } = this.state;
    return (
      <section className="contact" id="contact">
        <Fade left>
          <Heading title="Contact" color={{ color: '#fff' }} />
        </Fade>
        <div className="container mx-auto text-center">
          <h2 className="contact_greetings">
            Have a question or want to work together?
          </h2>
          {success && <h3 className="contact_confirmation">{success}</h3>}

          <form onSubmit={this.onSubmit} className="contact_form">
            <label htmlFor="name" />
            <input
              className="contact_email form_field"
              type="text"
              name="name"
              value={name}
              placeholder="Name"
              onChange={this.onChange}
            />
            <label htmlFor="email" />
            <input
              className="contact_email form_field"
              type="text"
              required
              value={email}
              name="email"
              placeholder="Your email"
              onChange={this.onChange}
            />
            {errors && (
              <small style={{ color: 'red', textAlign: 'left' }}>
                {errors.email}
              </small>
            )}
            <label htmlFor="message" />
            <textarea
              className="contact_message form_field"
              type="text"
              required
              value={message}
              name="message"
              placeholder="Your message..."
              onChange={this.onChange}
            />
            {errors && (
              <small style={{ color: 'red', textAlign: 'left' }}>
                {errors.message}
              </small>
            )}
            <input
              className="contact_submit form_field"
              type="submit"
              value={'SEND'}
            />
          </form>
        </div>
      </section>
    );
  }
}

export default Contact;
