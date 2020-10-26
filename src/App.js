import React from 'react';

class MyCoolHeader extends React.Component {
  render() {
      return (
        <div>
          <img src="logo.png" alt="fork and knife"/>
          
          <div>
            <h2>Delicious</h2>
            <p>The best food blog on the web.</p>
          </div>
          <div className="right">
            <img src="fb-icon.png"alt="facebook" />
            <img src="twit-icon.png"alt="twitter" />
            <img src="gp-icon.png"alt="google plus" />
            <img src="insta-icon.png"alt="instagram" />
            <img src="flic-icon.png"alt="flic icon" />
            <img src="pint-icon.png"alt="pintrest icon" />
            <img src="rss-icon.png"alt="rss icon" />
            <img src="mail-icon.png"alt="mail icon" />
          </div>
          
        </div>
      );
  }
}
class MyAmazingArticle extends React.Component {
  render() {
      return (
        <div className="section-header">
        <h2>Chocolate Pizza</h2>
        <p>Posted on 15 Dec 2013 / Desserts</p>
        <img src="choco-pizza.png" alt="chocolate pizza" />
            
        <p>
            For the fig-swirl: Melt butter over medium heat in a saucepan. Add brown sugar and stir to dissolve. Have All
            of the figs and toss in the saucepan with water and lemon juice. Cook over medium heat, stirring frequently, until
            you have a chunky-jammy mixture. Add salt with one or two stirs, set aside and let cool completely.
        </p>

        <p>
            Ice cream: In a small pot over medium heat, combine milk and granulated sugar until sugar is completely dissolved and the milk is just barely lukewarm.
            Whisk in the egg yolks. Set mixture in the fridge and wait until the fig mixture in cooled.
        </p>

        <p>
            Using an ice cream machine, pour liquids into the frozen basin and process according to the manufacturer instructions, i.e. let spin and thicken for 20 minutes before adding mascrarpone, fig jam mixture, and the nuts.
            Continue to process fpr +/- 10 minutes. Pour semi-frozen mixture into a pyrex dish or glass tupperware. Freeze for at least two hours before serving.
        </p>
    </div>
      );
  }
}

class MySpecialFooter extends React.Component {
  render() {
      return (
          <div> I am the footer! Call us at {this.props.phone}</div>
      );
  }
}

export default class PutEmAllTogether extends React.Component {
  render() {
      return (
        <div>  
         <MyCoolHeader name="dani" />
  
        

          <MyAmazingArticle />
          <MySpecialFooter phone="345-456-5431" />
        </div>
      );
  }
}
