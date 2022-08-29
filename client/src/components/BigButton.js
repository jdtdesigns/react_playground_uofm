function BigButton(props) {
  return (
    <button onClick={props.grabData}>{props.title}</button>
  )
}

export default BigButton;