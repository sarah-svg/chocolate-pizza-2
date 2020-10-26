import React from 'react'

export default class MyAmazingArticle extends React.Component {
    render() {
        return (
          <section>
            <div className="section-header">
              <h2>{this.props.name}</h2>
              <p>Posted on 15 Dec 2013 / Desserts</p>
            </div>
            <img src="choco-pizza.png" alt="chocolate pizza" />   
      </section>
        );
    }
  }
