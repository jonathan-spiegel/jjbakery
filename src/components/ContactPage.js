import React, { Component, Fragment } from 'react';

const emailAddress = 'jaqui.lux@gmail.com';

export default class ContactPage extends Component {
  constructor(props) {
    super(props);
    this.state ={
      name: '',
      emailSubject: '',
      emailBody: '',
    };
  }

  handleTextChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  handleSubmitClick = () => {
    const { name, emailSubject, emailBody } = this.state;
    window.location.href = `mailto:${emailAddress}?subject=${escape(`${name} - ${emailSubject}`)}&body=${escape(emailBody)}`;

    return false;
  }

  render() {
    const { name, emailSubject, emailBody } = this.state;

    return (
      <Fragment>
        <div className="contact-header-parent-container">
          <div className="contact-header-container">
            <h1 className="contact-header">Contact Us</h1>
          </div>
        </div>
        <form className="contact-us-form">
          <label htmlFor="name">
            <div>Name:</div>
            <input
              id="name"
              type="text"
              name="name"
              value={this.state.name}
              onChange={this.handleTextChange}
            />
          </label>
          <label htmlFor="emailSubject">
            <div>Subject:</div>
            <input
              id="emailSubject"
              type="text"
              name="emailSubject"
              value={this.state.emailSubject}
              onChange={this.handleTextChange}
            />
          </label>
          <label htmlFor="emailBody">
            <div>Message:</div>
            <textarea
              id="emailBody"
              wrap="hard"
              name="emailBody"
              value={this.state.emailBody}
              onChange={this.handleTextChange}
            />
          </label>
          <button
            type="button"
            className="submit-button"
            onClick={this.handleSubmitClick}
            disabled={name.length === 0 || emailSubject.length === 0 || emailBody.length === 0}
          >
            <div className="submit-button-text">Submit</div>
          </button>
        </form>
      </Fragment>
    );
  }
}
