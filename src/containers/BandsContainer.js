import React, { Component } from 'react'
import { connect } from 'react-redux'
import BandInput from '../components/BandInput'


class BandsContainer extends Component {

  renderBands = () => {return this.props.bands.map(band => <li>{band}</li>)}

  render() {
    return(
      <div>
        <BandInput />
        {this.renderBands()}
      </div>
    )
  }
}

const mapStateToProps = state => {
  return{
    bands: state.bands
  }
}

export default connect(mapStateToProps)(BandsContainer) 
