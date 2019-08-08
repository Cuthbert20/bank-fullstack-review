import React from 'react'

export default (props) => (
  <select onChange={e =>  props.changeFn(props.prop, e)} >
      {/* we are getting children obj off of props because in Transfer.js we used  <Dropdown>
                    <option value="">Deposit</option>
                    <option value="">Withdrawl</option>
                </Dropdown> and anything inside of the dropdown tags on transfer.js is on props.children obj */}
    {props.children}
  </select>
)