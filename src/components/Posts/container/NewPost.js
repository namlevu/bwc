import React, { Component } from "react";
import axios from 'axios';
import slugify from 'slugify';

import Input from "../../presentational/Input";

class NewPost extends Component {
  constructor() {
    super();
    this.state = {
      title:"",
      slug:"",
      tags:"",
      content:"",
      author_id:"",
      created_by:""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(event) {
    this.setState({ [event.target.id]: event.target.value });
  }
  handleSubmit(event) {
    event.preventDefault();
    const post = {
      title: this.state.title,
      slug: slugify(this.state.title),
      tags: this.state.tags.split(","),
      content: this.state.content,
      author_id: this.state.author_id,
      created_by: this.state.author_id
    };
    console.log(post);
    /**/
    axios.post(`http://127.0.0.1:9009/v1/posts`, post)
      .then(res => {
        console.log(res);
        console.log(res.data);
      })
    /**/
  }

  render() {
    const { title, slug, tags, content, author_id } = this.state;
    return (
      <form id="article-form" onSubmit={this.handleSubmit}>
        <Input
          text="Post title"
          label="Post title"
          type="text"
          id="title"
          value={title}
          handleChange={this.handleChange}
        />
        <Input
          text="Tags"
          label="tags"
          type="text"
          id="tags"
          value={tags}
          handleChange={this.handleChange}
        />
        <Input
          text="Content"
          label="Content"
          type="text"
          id="content"
          value={content}
          handleChange={this.handleChange}
        />
        <Input
          text="Author Id"
          label="Author Id"
          type="text"
          id="author_id"
          value={author_id}
          handleChange={this.handleChange}
        />
        <input className="btn btn-primary" type="submit" value="Create new post" />
      </form>
    );
  }
}
export default NewPost;
