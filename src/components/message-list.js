import React, { Component } from 'react';
import Api from '../api';
import classNames from 'classnames';

class MessageList extends Component {
  constructor(...args) {
    super(...args);
    this.state = {
      messages: []
    };
  }
  componentWillMount() {
    this.api = new Api({
      messageCallback: message => {
        this.messageCallback(message);
      }
    });
  }
  componentDidMount() {
    this.api.start();
  }
  messageCallback(message) {
    this.setState(
      {
        messages: [...this.state.messages.slice(), message]
      }
      // () => {
      //   console.log(this.state.messages);
      // }
    );
  }
  renderButton() {
    const isApiStarted = this.api.isStarted();
    return (
      <button
        onClick={() => {
          if (isApiStarted) {
            this.api.stop();
          } else {
            this.api.start();
          }
          this.forceUpdate();
        }}
      >
        {isApiStarted ? 'Stop Messages' : 'Start Messages'}
      </button>
    );
  }

  clearMessages() {
    const isApiStarted = this.api.isStarted();
    return (
      <button
        onClick={() => {
          !isApiStarted ? this.setState({ messages: [] }) : null;
        }}
      >
        Clear Messages
      </button>
    );
  }

  render() {
    let alerts = [];
    const messages = [];
    this.state.messages.filter(val =>
      val.priority !== 1
        ? messages.unshift(
            <div
              key={val.message}
              className={classNames({
                message: true,
                'message--warning': val.priority === 2,
                'message--info': val.priority === 3,
                'flip-in-hor-bottom': true
              })}
            >
              <div className="message__content">
                <p className="message__message">{val.message}</p>
              </div>
            </div>
          )
        : (alerts = (
            <div
              key={val.message}
              className={classNames({
                message: true,
                alert: true,
                'message--alert': val.priority === 1,
                'shake-vertical': true
              })}
            >
              <div className="message__content">
                <p className="message__message">
                  <span className="alert-icon">!</span>
                  {val.message}
                </p>
              </div>
            </div>
          ))
    );

    return (
      <div className="message__container">
        <div className="header box">
          <span>{this.renderButton()}</span>
          <span>{this.clearMessages()}</span>
        </div>
        <div>{alerts}</div>
        <div>{messages}</div>
      </div>
    );
  }
}

export default MessageList;
