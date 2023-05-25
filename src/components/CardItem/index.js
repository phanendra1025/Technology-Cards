import './index.css'
// Write your code here.
const CardItem = props => {
  const {cardsList} = props
  const {title, description, className} = cardsList
  console.log(title)
  console.log(description)
  return (
    <li className={className}>
      <h1>{title}</h1>
      <p>{description}</p>
    </li>
  )
}

export default CardItem
