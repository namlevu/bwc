import React from 'react';
import { Link } from 'react-router-dom';

import ArticleLarger from '../container/ArticleLarger';

export default class Home extends React.Component {
  render() {
    return(
      <div>
        <h5> Home page </h5>
        <ArticleLarger />
      </div>
    );
  }
}
