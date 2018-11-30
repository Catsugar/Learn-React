import React from 'react'
import { connect } from 'react-redux'
import { addTodo } from '../actions'

const AddTodo = ({ dispatch }) => {
  let input

  return (
    <div>
      <form
        onSubmit={e => {
          e.preventDefault()
          if (!input.value.trim()) {
            return
          }
          dispatch(addTodo(input.value))
          input.value = ''
        }}
      >
        <div>输入任务:</div> 
        <div className="controlbox"><input ref={node => (input = node)} className="control" placeholder="请输入任务" /></div>
        <button type="submit" className="btn">添加</button>
      </form>
    </div>
  )
}

export default connect()(AddTodo)