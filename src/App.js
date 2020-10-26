import React from 'react';
import './App.css';
import MyCoolHeader from './MyCoolHeader.js';
import MyAmazingArticle from './MyAmazingArticle.js';
import RecipeList from './RecipeList.js';
import MySpecialFooter from './MySpecialFooter.js';
import ParagraphDiv from './ParagraphDiv.js'

export default class PutEmAllTogether extends React.Component {
  render() {
      return (
        <main>  
          <MyCoolHeader title="Delicious"/>
          <MyAmazingArticle name="Chocolate Pizza"/>
          <ParagraphDiv />
          <RecipeList />
          <MySpecialFooter author="Vanessa Stevenson" />
        </main>
      );
  }
}
