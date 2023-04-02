import React from 'react'

type Props = {
  children: React.ReactNode;
};
function Heading1(props:Props) {
  return (
	  <div>{props.children}</div>
  )
}

export default Heading1
