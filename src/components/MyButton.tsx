import React from 'react'

type Props = {
HandleClick:(event:React.MouseEvent<HTMLButtonElement>,id:number) => void

}

function MyButton(props: Props) {
  return (
  <>
	<button onClick={(event)=>props.HandleClick(event,33)}>MyButton</button>
  </>
  )
}

export default MyButton
