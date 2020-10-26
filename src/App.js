import React from 'react';
import './App.css';
import listImage from './list.png';

class MyCoolHeader extends React.Component {
  render() {
      return (
        <header>
          <div className="left-side-header">
            <img src="logo.png" alt="fork and knife"/>
            <div>
              <h1>Delicious</h1>
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

class MyAmazingArticle extends React.Component {
  render() {
      return (
        <section>
          <div className="section-header">
            <h2>Chocolate Pizza</h2>
            <p>Posted on 15 Dec 2013 / Desserts</p>
          </div>
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
    </section>
      );
  }
}

class RecipeList extends React.Component {
  render() {
    return (
      <article style={{backgroundImage: `url(${listImage})`}}>      <ul>
          <li><input type="checkbox" />1 1/2 cups milk</li>
          <li><input type="checkbox" />1/2 cups mascrarpone</li>
          <li><input type="checkbox" />1/2 tsp pink salt</li>
          <li><input type="checkbox" />1lb Black Mission Figs</li>
          <li><input type="checkbox" />1/2 cup brown sugar</li>
          <li><input type="checkbox" />2-4 tbsp water</li>
        </ul>
        <ul>
          <li><input type="checkbox" />1 1/2 cups heavy cream</li>
          <li><input type="checkbox" checked />1/3 granulated sugar</li>
          <li><input type="checkbox" checked />2 egg yolks</li>
          <li><input type="checkbox" />lemon, juice</li>
          <li><input type="checkbox" />2 tbsp butter</li>
          <li><input type="checkbox" />1 cup honey roaste pecans, roughly choopped</li>
        </ul>
      </article>
    )
  }
}


class MySpecialFooter extends React.Component {
  render() {
      return (
          <footer>
            <article>
              <img src="van-pic.png" alt="Vanessa Stevenson"/>
              <div>
                <p>
                    Vanessa Stevenson
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

export default class PutEmAllTogether extends React.Component {
  render() {
      return (
        <main>  
          <MyCoolHeader name="dani" />
          <MyAmazingArticle />
          <RecipeList />
          <MySpecialFooter phone="345-456-5431" />
        </main>
      );
  }
}
