import React from 'react'

type Props={
Status: 'loading' | 'error' | 'success'
}
export default function Status(props: Props) {
  return (
	  <div>Current Status- {props.Status}</div>
  )
}
