import React, { Component } from "react";
import { Link } from 'react-router-dom';
import PropTypes from "prop-types";

const ArticleHot = ({title, slug, image, content, tag, author})=> (
  <div className="article-md col-7 mb-4">
    <div className="article-md-tag">
      <a href="#">
        {tag}
      </a>
    </div>
    <div className="article-md-title">
      <a href="#">{title}</a>
    </div>
    <div className="article-md-img col-12 bg-dark p-0">
      <a href="#"><img src={image} width="100%"/></a>
    </div>
    <div className="article-md-content">
      {content}
    </div>
    <div className="article-md-author">
      <a href="#">{author}</a>
    </div>
  </div>
);

ArticleHot.propTypes = {
  title: PropTypes.string.isRequired,
  slug: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired
};
export default ArticleHot;
