import React from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import Settings from '../settings'
import '../css/post-list.css'


class PostList extends React.Component{
  constructor(){
    super()
    this.state={
      posts:[]
    }
  }
  componentWillMount(){
    axios.get(`${Settings.host}/posts`).then(
      res => {
        console.log(res.data)
      }
    )
  }
  render(){
    const postList=(
      <div className='card'>
        <div className='title'>
          文章标题
        </div>
        <div className='actions'>
          <Link className='link' to={`/post/postId`}>查看</Link>
          <Link className='link' to={`/post/postId/edit`}>编辑</Link>
          <Link className='link' to=''>删除</Link>
        </div>
      </div>
    )
    return(
      <div className='post-list'>
        <Link to='/post/new' className='button'>写文章 </Link>
        {postList}
      </div>
    )
  }
}
export default PostList
