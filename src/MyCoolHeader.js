import React from 'react';

export default class MyCoolHeader extends React.Component {
    render() {
        return (
          <header>
            <div className="left-side-header">
              <img src="logo.png" alt="fork and knife"/>
              <div>
                <h1>{this.props.title}</h1>
                <p>The best food blog on the web.</p>
                </div>
            </div>
            <div className="right-side-header">
              <img src="fb-icon.png"alt="facebook" />
              <img src="twit-icon.png"alt="twitter" />
              <img src="gp-icon.png"alt="google plus" />
              <img src="insta-icon.png"alt="instagram" />
              <img src="flic-icon.png"alt="flic icon" />
              <img src="pint-icon.png"alt="pintrest icon" />
              <img src="rss-icon.png"alt="rss icon" />
              <img src="mail-icon.png"alt="mail icon" />
            </div>
          </header>
        );
    }
  }