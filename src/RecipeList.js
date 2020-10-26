import React from 'react'
import listImage from './list.png';

export default class RecipeList extends React.Component {
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