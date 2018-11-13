import React from 'react';

import ArticleDetail from '../container/ArticleDetail';

export default class Posts extends React.Component {
  constructor() {
    super();
    this.state = {
      title:"How Amazon Now Shapes What Our Stuff Looks Like",
      published: "22 OCTOBER 2018",
      slug:"",
      image:"https://i.kinja-img.com/gawker-media/image/upload/s--cqSPHf-K--/c_fill,f_auto,fl_progressive,g_center,h_358,q_80,w_636/kt3gjgqdj01yjmxf9fwc.jpg",
      content:"Tide just announced a new alternative to the classic bottle of laundry detergent. It’s actually a glimpse into a future where Amazon is dictating what our stuff looks like. The new box of Tide is specifically designed to play nice with e-commerce. Sure, it’s good for the environment, too. But this streamlined, easy-to-ship box makes it easier for Amazon and friends to sell detergent out of their giant warehouses.",
      tags:["Design","Coding"],
      author:{name:"Berg"}
    }
  }
  render() {
    return(
      <ArticleDetail
        title={this.state.title}
        slug= {this.state.slug}
        image= {this.state.image}
        content= {this.state.content}
        tags= {this.state.tags}
        published= {this.state.published}
        author= {this.state.author} />
    );
  }
}
