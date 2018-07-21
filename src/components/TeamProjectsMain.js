import React from 'react'
import Link from 'gatsby-link'

import pic01 from '../images/HighresScreenshot00001.png'
import pic02 from '../images/HighresScreenshot00002.png'
import pic03 from '../images/HighresScreenshot00003.png'
import pic04 from '../images/HighresScreenshot00004.png'
import pic05 from '../images/HighresScreenshot00000.png'

class TeamProjectsMain extends React.Component {
  render() {

    let close = <div className="close" onClick={() => {this.props.onCloseArticle()}}></div>

    return (
      <div id="main" style={this.props.timeout ? {display: 'flex'} : {display: 'none'}}>

        <article id="tgp" className={`${this.props.article === 'tgp' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">The Gauntlet Prismatic</h2>
          <span className="image main"><img src={pic03} alt="" /></span>
          {close}
        </article>

      </div>
    )
  }
}

TeamProjectsMain.propTypes = {
  route: React.PropTypes.object,
  article: React.PropTypes.string,
  articleTimeout: React.PropTypes.bool,
  onCloseArticle: React.PropTypes.func,
  timeout: React.PropTypes.bool
}

export default TeamProjectsMain