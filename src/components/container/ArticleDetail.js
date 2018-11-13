import React, { Component } from "react";
import { Link } from 'react-router-dom';
import PropTypes from "prop-types";

const ArticleDetail = ({title, slug, image, content, tags, published, author})=> (
  <div className="article-lg col-12 mb-4 mt-4">
    <div className="article-lg-top">
      <a href="#">
        {published} / {tags[0]}
      </a>
    </div>
    <div className="article-lg-title">
      {title}
    </div>
    <div className="article-lg-img col-12 bg-dark p-0">
      <a href="#"><img src={image} width="100%"/></a>
    </div>
    <div className="article-lg-content">
      {content}
    </div>
    <div className="article-lg-author">
      <a href="#">{author.name}</a>
    </div>
    <div className="article-lg-comments">
    <div className="container">
      <div className="row">
        <div className="col-6">Comments | (2) </div>
        <div className="col-6"><button className="btn btn-success">Add comment</button></div>
      </div>
      <div className="row" id="addcomment">
        <form>
          <textarea className="form-control" placeholder="Comment content..." width="100%"></textarea><br/>
          <button className="btn btn-primary">Send</button>
        </form>
      </div>
      <hr />
      <div className="row comment">
        <div className="head">
            <small><strong className='user'>Diablo25</strong> 30.10.2017 12:13</small>
        </div>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin non lorem elementum, accumsan magna sed, faucibus mauris. Nulla pellentesque ante nibh, ac hendrerit ante fermentum sed. Nunc in libero dictum, porta nibh pellentesque, ultrices dolor. Curabitur nunc ipsum, blandit vel aliquam id, aliquam vel velit. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Sed sit amet mi dignissim, pretium justo non, lacinia libero. Nulla facilisi. Donec id sem velit. </p>
      </div>
      <div className="row comment">
        <div className="head">
            <small><strong className='user'>Giesche</strong> 30.10.2017 12:13</small>
        </div>
        <p>Praesent molestie ante nec metus convallis aliquam. Ut aliquam tincidunt mollis. Maecenas et ex sit amet est vehicula ultrices sed sit amet elit. Suspendisse potenti. Aenean et quam ut purus convallis porttitor. Mauris porttitor pretium elementum. Duis blandit elit tincidunt ipsum ultricies, ut faucibus lorem facilisis. Proin ipsum turpis, pharetra in lorem ac, porta ullamcorper velit. Proin gravida odio eget elit ultricies sodales. Vivamus vel tincidunt ligula. Proin pulvinar pellentesque velit eget luctus. Aliquam vitae enim ut purus vestibulum sollicitudin sit amet eget lacus. Nunc tempus fringilla tincidunt. </p>
      </div>
      <hr />
      </div>
    </div>
  </div>
);

ArticleDetail.propTypes = {
  title: PropTypes.string.isRequired,
  slug: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  tag: PropTypes.array.isRequired,
  published: PropTypes.string.isRequired,
  author: PropTypes.object.isRequired
};
export default ArticleDetail;
