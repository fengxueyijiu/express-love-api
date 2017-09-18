import React from 'react'

class Form extends React.Component {
  handleSubmit =(e)=>{
    e.preventDefault()
    console.log('handleSubmit...')
    console.log(this.textInput)
    let content = this.textInput.value
    this.props.publishPost({content})
  }
  render () {
    return(
      <form onSubmit={this.handleSubmit}>
        <input ref={value => this.textInput = value} type='text' />
        <input  value={this.props.label} type='submit' />
      </form>
    )
  }
}

export default Form;
