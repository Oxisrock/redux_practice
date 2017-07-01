import React, { Component } from 'react'

import Article from '../components/Article'
class Home extends Component {
  render () {
    const Articles = [
      'Some Article',
      'Some Other Article',
      'Yet Another Article',
      'Still More',
      'Zelena More Love'
    ].map((title, i) => <Article key={i} title={title} />)

    const adText = [
      'Ad spot # 1',
      'Ad spot # 2',
      'Ad spot # 3',
      'Ad spot # 4',
      'Ad spot # 5'
    ]
    const randomAd = adText[Math.round(Math.random() * (adText.length-1))]

    const containerStyle = {
      marginTop: '60px'
    }
    return (
      <div className='container' style={containerStyle}>
        <div className='row'>
          <div className='col-lg-12'>
            <div className='jumbotron text-center'>
              {randomAd}
            </div>
          </div>
        </div>

        <div className='row jumbotron'>{Articles}</div>
      </div>
    )
  }
}

export default Home
