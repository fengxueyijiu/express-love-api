
import React from 'react'
import {Route} from 'react-router-dom'
import PostList from './PostList'
import NewPost from './NewPost'
class Main extends React.Component {
  render () {
    return(
      <div>
        <Route exact path='/' component={PostList} />
        <Route path='/post/new' component={NewPost} />
      </div>
    )
  }
}

export default Main;
