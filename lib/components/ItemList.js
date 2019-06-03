import React from 'react';
import PropTypes from 'prop-types';
import Article from './Article';

const ItemList = (props) => {
  const { articles } = props;
  return (
    <div>
      {Object.values(articles).map(article => (
        <Article
          key={article.id}
          article={article}
        />
      ))}
    </div>
  );
};

ItemList.propTypes = {
  articles: PropTypes.shape({}).isRequired,
};

export default ItemList;
