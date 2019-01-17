import React from 'react';
import Hr from './hr';
const blogRelativeLink = 'https://fozg.net/blog/';

export default class Blogs extends React.Component {
  state = {
    blogs: []
  }
  componentDidMount () {
    this.getBlog();
  }

  getBlog = async () => {
    // TODO: hard code for now
    fetch('https://fozg.net/blog/api/v1/blogs/f?username=fozg').then(res => res.json())
    .then(blogs => {
      console.log(blogs);
      this.setState({blogs})
    })
  }

  render () {
    const {blogs} = this.state;
    return (
      <div className="container">
        <style jsx>{`
          .blogItem {
            padding: 5px 0;
          }
          .time {
            color: #b7b7b7;
            font-size: 12px;
            margin-right: 10px;
          }
          .title {
            font-size: 16px;
            color: #138b80;
          }
          .desc {
            color: darkgray;
          }
        `}</style>
        <Hr>My writes</Hr>
        <div className="col justify-content-center">
          {blogs.map((blog, idx) => <div key={blog.title} className="row align-items-center blogItem">
            <span className="time">(10/10/2018)</span>
            <div> 
              <a href={`${blogRelativeLink}${blog.slug}`}><strong className="title">{blog.title}</strong></a>
              {' '}<i className="desc">- This is a short description for testing</i>
            </div>
          </div>)}
        </div>
      </div>
    )
  }
}
