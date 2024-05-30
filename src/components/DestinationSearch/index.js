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
      'https://www.savaari.com/blog/wp-content/uploads/2023/04/Charminar.webp',
  },
  {
    uniqueNo: 3,
    name: 'New York',
    imageUrl:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/View_of_Empire_State_Building_from_Rockefeller_Center_New_York_City_dllu_%28cropped%29.jpg/800px-View_of_Empire_State_Building_from_Rockefeller_Center_New_York_City_dllu_%28cropped%29.jpg',
  },
  {
    uniqueNo: 4,
    name: 'Korea',
    imageUrl:
      'https://wise.com/imaginary-v2/6ff24704bcceb67d155a6180ccd78d8b.jpg?width=1200',
  },
  {
    uniqueNo: 5,
    name: 'Japan',
    imageUrl:
      'https://c4.wallpaperflare.com/wallpaper/50/519/649/religious-pagoda-cherry-blossom-japan-wallpaper-preview.jpg',
  },
  {
    uniqueNo: 6,
    name: 'Tower Bridge',
    imageUrl:
      'https://media1.thrillophilia.com/filestore/cf3rnb5ok33s9vdj2ixan0hekq7j_z8b9mzks6qtp1nfc36ie9zjed6xu_1580212250_london_tower2.jpg?w=400&dpr=2',
  },
  {
    uniqueNo: 7,
    name: 'Malaysia',
    imageUrl:
      'https://i.natgeofe.com/k/8dc7401d-fac9-43c5-a6d4-d056401f7779/kuala-lumpur.jpg?wp=1&w=1084.125&h=721.875',
  },
  {
    uniqueNo: 8,
    name: 'Dubai',
    imageUrl:
      'https://media.assettype.com/outlooktraveller%2F2023-12%2Ff4f1284c-37f3-495e-94d3-828514db9fc9%2Fshutterstock_2185205475.jpg',
  },
  {
    uniqueNo: 9,
    name: 'Washington DC',
    imageUrl:
      'https://media.hswstatic.com/eyJidWNrZXQiOiJjb250ZW50Lmhzd3N0YXRpYy5jb20iLCJrZXkiOiJnaWZcL2RjLXN0YXRlLmpwZyIsImVkaXRzIjp7InJlc2l6ZSI6eyJ3aWR0aCI6ODI4fX19',
  },
  {
    uniqueNo: 10,
    name: 'Riyad',
    imageUrl:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTy6Skoi8-AOg-AaPZ93m6ZJ4sErfnYXTHqw&s',
  },
  {
    uniqueNo: 11,
    name: 'Doha',
    imageUrl:
      'https://res.klook.com/images/fl_lossy.progressive,q_65/c_fill,w_1200,h_630/w_80,x_15,y_15,g_south_west,l_Klook_water_br_trans_yhcmh3/activities/utlb6dhnu1ttcmjnpq2t/Qatar%20Doha%3A%20City%20Tour%20of%20Souq%20Waqif%2C%20Katara%2C%20Pearl%20of%20Qatar%2C%20Museums.jpg',
  },
  {
    uniqueNo: 12,
    name: 'Kansas',
    imageUrl:
      'https://fox4kc.com/wp-content/uploads/sites/16/2019/07/gettyimages-134979498.jpg?w=2560&h=1440&crop=1',
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
