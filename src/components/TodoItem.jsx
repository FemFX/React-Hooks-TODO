import React, {useContext} from 'react'
import {Context} from '../context'

export default function TodoItem({title, id, completed}) {
  const {dispatch} = useContext(Context)

  const cls = ['todo']

  if (completed) {
    cls.push('completed')
  }

  return (
    <li className={cls.join(' ')}>
      <label>
        <input
          type="checkbox"
          className="checkbox"
          checked={completed}
          onChange={() => dispatch({
            type: 'toggle',
            payload: id
          })}
        />
        <span>{title}</span>

        <button
          className="btn btn-lg btn-danger"
          onClick={() => dispatch({
            type: 'remove',
            payload: id
          })}
        >
          Remove
        </button>
      </label>
    </li>
  )
}