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
            padding: 10px 0;
          }
          .time {
            color: #b7b7b7;
            font-size: 12px;
            margin-right: 10px;
          }
          .title {
            font-size: 1.8em;
            color: #138b80;
            font-weight: 800;
            margin-top: 0;
            padding-top: 0;
          }
          .desc {
            color: grey;
            font-size: 1.1em;
          }
          .tag {
            background-color: #5da0a1;
            color: #fff;
            margin-right: 5px;
            padding: 1px 5px;
            border-radius: 5px;
            font-weight: 600;
          }
        `}</style>
        <Hr>My writes</Hr>
        <div className="col justify-content-center">
          {!blogs.length && `Loading...`}
          {blogs.map((blog) => <div key={blog.slug} className="row align-items-start blogItem">
            <div> 
              <span className="time">{moment(blog.created).format('MM-DD-YYYY')}</span>
              <div><a href={`${blogRelativeLink}${blog.slug}`}><strong className="title">{blog.title}</strong></a></div>
              <div>{blog.tags && blog.tags.map(tag => <span className="tag">#{tag}</span>)}</div>
              <span className="desc">{blog.description}</span>
            </div>
          </div>)}
        </div>
      </div>
    )
  }
}
