import React, { Component } from "react";
import { Link } from 'react-router-dom';

export default class Footer extends Component {
  constructor() {
    super();
  }
  render() {
    return(
      <div className="footer mb-2 p-3">
        &copy; brse.work <br />
        Vui lòng liên hệ trước khi trích dẫn bài viết của chúng tôi.<br />
        Mọi đóng góp ý kiến luôn được hoan nghênh. Xin gửi email : nam@brse.work
      </div>
    );
  }
}
