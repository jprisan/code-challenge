import React, { Component } from 'react';
import PropTypes from 'prop-types';
import DetailCard from './Detail';

class Card extends Component {
  static propTypes = {
    article: PropTypes.shape({
      id: PropTypes.string,
      author: PropTypes.string,
      excerpt: PropTypes.string,
      title: PropTypes.string
    })
  };

  static defaultProps = {
    article: {}
  };

  render() {
    const { article } = this.props;

    return (
      article && (
        <div className="card">
          <DetailCard author={article.author} excerpt={article.excerpt} />
        </div>
      )
    );
  }
}

export default Card;
