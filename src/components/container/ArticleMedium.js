import React, { Component } from "react";
import { Link } from 'react-router-dom';

export default class ArticleMedium extends Component {
  constructor() {
    super();
    this.state = {
      title: "Article (grammar)",
      slug: "article-grammar",
      published: "2018/11/12 10:00 AM",
      tags: ["article","grammar"],
      content: "An article (with the linguistic glossing abbreviation art) is a word that is used with a noun (as a standalone word or a prefix or suffix) to specify grammatical definiteness of the noun, and in some languages extending to volume or numerical scope.In languages that employ articles, every common noun, with some exceptions, is expressed with a certain definiteness, definite or indefinite, as an attribute (similar to the way many languages express every noun with a certain grammatical number—singular or plural—or a grammatical gender). Articles are among the most common words in many languages; in English, for example, the most frequent word is the",
      author:{"name":"Wikipedia", "email":"wili@brse.work"},
      created_by:{"username":"Admin"}
    };
  }
  render() {
    return(
      <div className="article-md">
        <div className="article-md-header">
          <div className="article-md-title">{this.state.title}</div>
          <div className="article-md-published">{this.state.published}</div>
          <div className="article-md-author">{this.state.author.name}</div>
        </div>
        <div className="article-md-body">
          <div className="article-md-content">{this.state.content}</div>
        </div>
        <div className="article-md-footer">
          <div className="article-md-static">
            <i className="far fa-thumbs-up"></i>25
            <i className="far fa-comment"></i>100
          </div>
        </div>
      </div>
    );
  }
}
