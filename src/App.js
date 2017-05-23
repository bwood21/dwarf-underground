import React, { Component } from 'react';
import Header from './Header'
import Article from './Article'
import Clickbait from './Clickbait'
import Ad from './Ad'
import ArticleHeader from './ArticleHeader'
import Footer from './Footer'
import Comments from './Comments'
import './App.css';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />

        <main className="expanded row">
          <ArticleHeader/>
          <Article/>
          <Ad/>
          <Clickbait/>
          </main>
          <Footer/>
      </div>
    );
  }
}

export default App;
