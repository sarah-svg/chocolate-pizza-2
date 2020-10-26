import React from 'react';
import './App.css';
import MyCoolHeader from './MyCoolHeader.js';
import MyAmazingArticle from './MyAmazingArticle.js';
import RecipeList from './RecipeList.js';
import MySpecialFooter from './MySpecialFooter.js';

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
