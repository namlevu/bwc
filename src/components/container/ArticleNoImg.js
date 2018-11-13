import React, { Component } from "react";
import { Link } from 'react-router-dom';
import PropTypes from "prop-types";

const ArticleNoImg = ({title, slug, content, tag, author})=> (
  <div className="article-md col-7 mb-4">
    <div className="article-md-tag mb-2">
      <a href="#">
        {tag}
      </a>
    </div>
    <div className="article-md-title">
      <a href="#">{title}</a>
    </div>
    <div className="article-md-author">
      <a href="#">{author}</a>
    </div>
    <div className="article-md-content">
      {content}
    </div>
  </div>
);

ArticleNoImg.propTypes = {
  title: PropTypes.string.isRequired,
  slug: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired
};
export default ArticleNoImg;
