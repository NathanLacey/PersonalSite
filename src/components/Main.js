import React from 'react'
import Link from 'gatsby-link'

import pic01 from '../images/pic01.jpg'
import pic02 from '../images/pic02.jpg'
import pic03 from '../images/pic03.jpg'
import picLogo from '../images/logo.png'

const pdf = require('../assets/resources/Resume.pdf')
const demoReel = require('../assets/resources/DemoReel.mp4')

class Main extends React.Component {
  render() {

    let close = <div className="close" onClick={() => {this.props.onCloseArticle()}}></div>

    return (
      <div id="main" style={this.props.timeout ? {display: 'flex'} : {display: 'none'}}>

        <article id="personalProjects" className={`${this.props.article === 'personalProjects' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">Personal Projects</h2>
          <span className="image main"><img src={pic01} alt="" /></span>
          <p>Aenean ornare velit lacus, ac varius enim ullamcorper eu. Proin aliquam facilisis ante interdum congue. Integer mollis, nisl amet convallis, porttitor magna ullamcorper, amet egestas mauris. Ut magna finibus nisi nec lacinia. Nam maximus erat id euismod egestas. By the way, check out my <a href="#projects">awesome work</a>.</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis dapibus rutrum facilisis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Etiam tristique libero eu nibh porttitor fermentum. Nullam venenatis erat id vehicula viverra. Nunc ultrices eros ut ultricies condimentum. Mauris risus lacus, blandit sit amet venenatis non, bibendum vitae dolor. Nunc lorem mauris, fringilla in aliquam at, euismod in lectus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. In non lorem sit amet elit placerat maximus. Pellentesque aliquam maximus risus, vel sed vehicula.</p>
          {close}
        </article>

        <article id="about" className={`${this.props.article === 'about' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">Demo Reel</h2>
                
                <video controls width="560" height="315" src={demoReel} preload="auto" controlsList="nodownload">
                     Your browser does not support the video tag.
                </video>
                <div>
                    <p>
          <a href={pdf} download="Resume_NathanLacey.pdf" className="button" align="left">
              Download Resume
          </a>
                  ----------------------------
          <a href={demoReel} download="DemoReel_NathanLacey.mp4" className="button" align="right">
                    Download Demo Reel
          </a>
                        </p>
                </div>
          {close} 
        </article>

        <article id="contact" className={`${this.props.article === 'contact' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
                <h2 className="major">Contact</h2>
                <h3>Email:</h3><p> nathan.lacey@hotmail.com</p>
                <h3>LinkedIn:</h3><p> www.linkedin.com/in/nathanlacey</p>
          {close}
        </article>
            
      </div>
    )
  }
}

Main.propTypes = {
  route: React.PropTypes.object,
  article: React.PropTypes.string,
  articleTimeout: React.PropTypes.bool,
  onCloseArticle: React.PropTypes.func,
  timeout: React.PropTypes.bool
}

export default Main
