import React from 'react';
import PropTypes from 'prop-types';

const DetailCard = ({ author, excerpt }) => (
    <div className="detail-card">
        <h3 className="detail-card-author">{author}</h3>
        <p className="detail-card-excerpt">{excerpt}</p>
    </div>
);

DetailCard.propTypes = {
    author: PropTypes.string,
    excerpt: PropTypes.string,
};

DetailCard.defaultProps = {
    author: '',
    excerpt: '',
};

export default DetailCard;
