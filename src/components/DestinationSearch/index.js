// Write your code here
import {Component} from 'react'
import DestinationItem from '../DestinationItem'
import './index.css'

const destinationsList = [
  {
    uniqueNo: 1,
    name: 'Melaka Mosque',
    imageUrl:
      'https://www.mustseespots.com/malaysia/img/melaka-straits-mosque.jpg',
  },
  {
    uniqueNo: 2,
    name: 'Hyderabad',
    imageUrl:
      'https://www.mustseespots.com/malaysia/img/melaka-straits-mosque.jpg',
  },
  {
    uniqueNo: 3,
    name: 'Singapore',
    imageUrl:
      'https://www.mustseespots.com/malaysia/img/melaka-straits-mosque.jpg',
  },
  {
    uniqueNo: 4,
    name: 'Korea',
    imageUrl:
      'https://www.mustseespots.com/malaysia/img/melaka-straits-mosque.jpg',
  },
  {
    uniqueNo: 5,
    name: 'Japan',
    imageUrl:
      'https://www.mustseespots.com/malaysia/img/melaka-straits-mosque.jpg',
  },
  {
    uniqueNo: 6,
    name: 'Thailand',
    imageUrl:
      'https://www.mustseespots.com/malaysia/img/melaka-straits-mosque.jpg',
  },
  {
    uniqueNo: 7,
    name: 'Malaysia',
    imageUrl:
      'https://www.mustseespots.com/malaysia/img/melaka-straits-mosque.jpg',
  },
  {
    uniqueNo: 8,
    name: 'Dubai',
    imageUrl:
      'https://www.mustseespots.com/malaysia/img/melaka-straits-mosque.jpg',
  },
  {
    uniqueNo: 9,
    name: 'Washington DC',
    imageUrl:
      'https://www.mustseespots.com/malaysia/img/melaka-straits-mosque.jpg',
  },
  {
    uniqueNo: 10,
    name: 'Riyad',
    imageUrl:
      'https://www.mustseespots.com/malaysia/img/melaka-straits-mosque.jpg',
  },
  {
    uniqueNo: 11,
    name: 'Doha',
    imageUrl:
      'https://www.mustseespots.com/malaysia/img/melaka-straits-mosque.jpg',
  },
  {
    uniqueNo: 12,
    name: 'Kansas',
    imageUrl:
      'https://www.mustseespots.com/malaysia/img/melaka-straits-mosque.jpg',
  },
]

class DestinationSearch extends Component {
  state = {
    searchInput: '',
    placesDetailsList: destinationsList,
  }

  onChangeSearchInput = event => {
    this.setState({
      searchInput: event.target.value,
    })
  }

  render() {
    const {searchInput, placesDetailsList} = this.state
    const searchResults = placesDetailsList.filter(eachPlace =>
      eachPlace.name.toLowerCase().includes(searchInput),
    )
    return (
      <div className="search-container">
        <h1 className="title">Destination Search</h1>
        <div className="container">
          <div className="search-bar">
            <input
              type="search"
              onChange={this.onChangeSearchInput}
              value={searchInput}
              className="search-tab"
              placeholder="Search"
            />
            <img
              src="https://assets.ccbp.in/frontend/react-js/destinations-search-icon-img.png"
              alt="search icon"
              className="search-image"
            />
          </div>
        </div>

        <ul className="list-container">
          {searchResults.map(eachPlace => (
            <DestinationItem
              placeDetails={eachPlace}
              key={eachPlace.uniqueNo}
            />
          ))}
        </ul>
      </div>
    )
  }
}

export default DestinationSearch
