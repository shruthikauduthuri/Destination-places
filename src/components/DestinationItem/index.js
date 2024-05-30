// Write your code here
import './index.css'

const DestinationItem = props => {
  const {placeDetails} = props
  const {imageUrl, name} = placeDetails

  return (
    <li className="place-container">
      <div className="image-container">
        <div className="each-image">
          <img src={imageUrl} className="image" alt={name} />
          <p className="para">{name}</p>
        </div>
      </div>
    </li>
  )
}

export default DestinationItem
