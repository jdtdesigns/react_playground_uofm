function Image(props) {
  return (
    <div>
      <img src={props.image_url} />
      <h3>{props.title}</h3>
    </div>
  )
}

export default Image;