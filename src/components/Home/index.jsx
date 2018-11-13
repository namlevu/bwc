import React from 'react';
import { Link } from 'react-router-dom';

import ArticleLarger from '../container/ArticleLarger';
import ArticleMedium from '../container/ArticleMedium';
import ArticleNoImg from '../container/ArticleNoImg';


export default class Home extends React.Component {
  constructor() {
    super();
    this.state = {
      fakeArticles : [
       {
         title:"How Amazon Now Shapes What Our Stuff Looks Like",
         slug:"",
         image:"https://i.kinja-img.com/gawker-media/image/upload/s--cqSPHf-K--/c_fill,f_auto,fl_progressive,g_center,h_358,q_80,w_636/kt3gjgqdj01yjmxf9fwc.jpg",
         content:"Tide just announced a new alternative to the classic bottle of laundry detergent. It’s actually a glimpse into a future where Amazon is dictating what our stuff looks like. The new box of Tide is specifically designed to play nice with e-commerce. Sure, it’s good for the environment, too. But this streamlined, easy-to-ship box makes it easier for Amazon and friends to sell detergent out of their giant warehouses.",
         tag:"Design",
         author:"Adam"
       },
       {
         title:"How to Get All Your Local Media Files Streaming to a Chromebook",
         slug:"",
         content:"Archaeologists working at a pyramid complex south of Cairo have discovered dozens of cat mummies, along with troves of wooden statues and a rare collection of mummified scarab beetles.",
         image:"https://i.kinja-img.com/gawker-media/image/upload/s--7MJemaQz--/c_fill,f_auto,fl_progressive,g_center,h_358,q_80,w_636/f3lmmtc7wq43yziejj4y.jpg",
         tag:"Field guide",
         author:"Eva"
       },
       {
         title:"Here's Where the ExoMars 2020 Mission Will Likely Land, and Why",
         slug:"",
         content:"It basically looks and works just like a box of wine, which is sort of funny because of that whole meme about teens eating Tide Pods. But the new Tide Eco-Box is no joke. ",
         image:"https://i.kinja-img.com/gawker-media/image/upload/s--8fdHNXzv--/c_fill,f_auto,fl_progressive,g_center,h_358,q_80,w_636/wdppxatyvbevjmzlbwsf.jpg",
         tag:"space",
         author:"Eva"
       },
       {
         title:"Ancient Cat Mummies and More Discovered in Egyptian Tombs",
         slug:"",
         content:"Archaeologists working at a pyramid complex south of Cairo have discovered dozens of cat mummies, along with troves of wooden statues and a rare collection of mummified scarab beetles.",
         image:"https://i.kinja-img.com/gawker-media/image/upload/s--Pecz9NEF--/c_scale,f_auto,fl_progressive,q_80,w_800/pyn5mynlvcczahblp5jo.jpg",
         tag:"ARCHAEOLOGY",
         author:"Gorge"
       }

     ],
      fakeAdvs: [
        "http://lgcdn.tibi.com/wp-content/uploads/2013/03/sample-sale-Banner-v2.jpg",
        "https://www.brighton.com/content/banner_1306_sale.png",
        "https://www.practicecafe.com/wp-content/uploads/2015/06/dental-banner-sample.jpg"
      ]
    }
  }
  render() {
    return(
      <div>
        <div className="row mt-3 mb-4">
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
        <div className="row mt-2">
          <ArticleNoImg
            title={this.state.fakeArticles[3].title}
            slug={this.state.fakeArticles[3].slug}
            content={this.state.fakeArticles[3].content}
            tag={this.state.fakeArticles[3].tag}
            author={this.state.fakeArticles[3].author} />
          <div className="col-5">
            <div className="adv-title">
              Có thể bạn quan tâm
            </div>
            <div className="">
              <img className="mb-2" src={this.state.fakeAdvs[0]} width="100%" />
            </div>
          </div>
          <ArticleNoImg
            title={this.state.fakeArticles[1].title}
            slug={this.state.fakeArticles[1].slug}
            content={this.state.fakeArticles[1].content}
            tag={this.state.fakeArticles[1].tag}
            author={this.state.fakeArticles[1].author} />
          <div className="col-5">Có thể bạn quan tâm</div>
          <ArticleNoImg
            title={this.state.fakeArticles[0].title}
            slug={this.state.fakeArticles[0].slug}
            content={this.state.fakeArticles[0].content}
            tag={this.state.fakeArticles[0].tag}
            author={this.state.fakeArticles[0].author} />
          <ArticleNoImg
            title={this.state.fakeArticles[2].title}
            slug={this.state.fakeArticles[2].slug}
            content={this.state.fakeArticles[2].content}
            tag={this.state.fakeArticles[2].tag}
            author={this.state.fakeArticles[2].author} />
        </div>
      </div>
    );
  }
}
