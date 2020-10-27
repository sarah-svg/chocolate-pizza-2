import React from 'react'
import listImage from './list.png';


import { list1, list2 } from './data.js';

const leftItems = list1.map((item) =>
<li><input type="checkbox" />{item}</li> );
const rightItems = list2.map((item) =>
<li><input type="checkbox" />{item}</li> );




export default class RecipeList extends React.Component {
    render() {
      return (
        <article style={{backgroundImage: `url(${listImage})`}}>      
         <ul>
          {leftItems}
          </ul>,
          <ul>
          {rightItems}
          </ul>,
        </article>
      )
    }
  }