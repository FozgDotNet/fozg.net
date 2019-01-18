import React from 'react';
import Hr from './hr';
import moment from 'moment';

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
    fetch('https://fozg.net/blog/api/v1/blogs?username=fozg').then(res => res.json())
    .then(blogs => {
      this.setState({blogs: blogs.sort(function(a,b){
        return new Date(b.created) - new Date(a.created);
      })})
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
          {!blogs.length && `Loading...`}
          {blogs.map((blog, idx) => <div key={blog.title} className="row align-items-center blogItem">
            <span className="time">({moment(blog.created).format('MM-DD-YYYY')})</span>
            <div> 
              <a href={`${blogRelativeLink}${blog.slug}`}><strong className="title">{blog.title}</strong></a>
              {' '}<i className="desc">- {blog.description}</i>
            </div>
          </div>)}
        </div>
      </div>
    )
  }
}
