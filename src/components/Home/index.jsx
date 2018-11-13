import React from 'react';
import { Link } from 'react-router-dom';

import ArticleLarger from '../container/ArticleLarger';
import ArticleMedium from '../container/ArticleMedium';


export default class Home extends React.Component {
  constructor() {
    super();
    this.state = {
      fakeArticles : [
       {
         title:"How Amazon Now Shapes What Our Stuff Looks Like",
         slug:"",
         image:"https://i.kinja-img.com/gawker-media/image/upload/s--cqSPHf-K--/c_fill,f_auto,fl_progressive,g_center,h_358,q_80,w_636/kt3gjgqdj01yjmxf9fwc.jpg",
         tag:"Design",
         author:"Adam"
       },
       {
         title:"How to Get All Your Local Media Files Streaming to a Chromebook",
         slug:"",
         image:"https://i.kinja-img.com/gawker-media/image/upload/s--7MJemaQz--/c_fill,f_auto,fl_progressive,g_center,h_358,q_80,w_636/f3lmmtc7wq43yziejj4y.jpg",
         tag:"Field guide",
         author:"Eva"
       },
       {
         title:"Here's Where the ExoMars 2020 Mission Will Likely Land, and Why",
         slug:"",
         image:"https://i.kinja-img.com/gawker-media/image/upload/s--8fdHNXzv--/c_fill,f_auto,fl_progressive,g_center,h_358,q_80,w_636/wdppxatyvbevjmzlbwsf.jpg",
         tag:"space",
         author:"Eva"
       }
      ]
    }
  }
  render() {
    return(
      <div>
        <div className="row">
          <ArticleMedium
            title={this.state.fakeArticles[0].title}
            slug={this.state.fakeArticles[0].slug}
            image={this.state.fakeArticles[0].image}
            tag={this.state.fakeArticles[0].tag}
            author={this.state.fakeArticles[0].author} />
          <ArticleMedium
            title={this.state.fakeArticles[1].title}
            slug={this.state.fakeArticles[1].slug}
            image={this.state.fakeArticles[1].image}
            tag={this.state.fakeArticles[1].tag}
            author={this.state.fakeArticles[1].author} />
          <ArticleMedium
            title={this.state.fakeArticles[2].title}
            slug={this.state.fakeArticles[2].slug}
            image={this.state.fakeArticles[2].image}
            tag={this.state.fakeArticles[2].tag}
            author={this.state.fakeArticles[2].author} />
        </div>
      </div>
    );
  }
}
