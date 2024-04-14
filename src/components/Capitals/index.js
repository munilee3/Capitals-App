import {Component} from 'react'
import './index.css'

const countryAndCapitalsList = [
  {
    id: 'NEW_DELHI',
    capitalDisplayText: 'New Delhi',
    country: 'India',
  },
  {
    id: 'LONDON',
    capitalDisplayText: 'London',
    country: 'United Kingdom',
  },
  {
    id: 'PARIS',
    capitalDisplayText: 'Paris',
    country: 'France',
  },
  {
    id: 'KATHMANDU',
    capitalDisplayText: 'Kathmandu',
    country: 'Nepal',
  },
  {
    id: 'HELSINKI',
    capitalDisplayText: 'Helsinki',
    country: 'Finland',
  },
]
class Capitals extends Component {
  state = {activeCapitalId: countryAndCapitalsList[0].id}

  onChangeCapital = event => {
    this.setState({activeCapitalId: event.target.value})
  }

  getCountry = () => {
    const {activeCapitalId} = this.state

    const activeCountryAndCapital = countryAndCapitalsList.find(
      each => each.id === activeCapitalId,
    )

    return activeCountryAndCapital.country
  }

  render() {
    const {activeCapitalId} = this.state
    const country = this.getCountry(activeCapitalId)
    return (
      <div className="app-container">
        <div className="capital-container">
          <h1>Countries And Capitals</h1>
          <select
            id="capitals"
            className="capitals"
            value={activeCapitalId}
            onChange={this.onChangeCapital}
          >
            {countryAndCapitalsList.map(eachlist => (
              <option value={eachlist.id} key={eachlist.id}>
                {eachlist.capitalDisplayText}
              </option>
            ))}
          </select>
          <label htmlFor="capitals">is capital of which country?</label>
          <p className="country">{country}</p>
        </div>
      </div>
    )
  }
}

export default Capitals
