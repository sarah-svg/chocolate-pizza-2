import React from 'react';

export default class MySpecialFooter extends React.Component {
    render() {
        return (
            <footer>
              <article>
                <img src="van-pic.png" alt="Vanessa Stevenson"/>
                <div>
                  <p>
                  {this.props.author}
                  </p>
                  <p>
                      Food enthusiast, photopgraphy fan. Add a pinch of raw foodism and that's pretty much who I am.
                  </p>
                </div>
                <button>Share Recipe</button>
              </article>
              <p className="copyright-info">
                  Delicious &#169; 2013 &middot; All Rights Reserved.
                  Proudly published with Ghost.
              </p>
            </footer>
        );
    }
}