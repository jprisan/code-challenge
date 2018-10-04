import React, { Component } from 'react';
import request from './services/request';
import { ARTICLES_QUERY } from './controller/queries';

import Header from './components/Header';
import Card from './components/Card';
import Footer from './components/Footer';

const HEADER_TITLE = 'Billin code challenge';

class App extends Component {
  state = {
    articles: []
  };

  // lifecycle
  componentDidMount() {
    request(ARTICLES_QUERY).then(response => {
      this.setState({ articles: response.data && response.data.articles });
    });
  }

  // Renders
  render() {
    return (
      <div className="App">
        <Header title={HEADER_TITLE} />
        {this.state.articles.map(article => (
          <Card article={article} />
        ))}
        <Footer />
      </div>
    );
  }
}

export default App;
