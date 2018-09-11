import React from 'react'
import Link from 'gatsby-link'

import pic02 from '../images/pic02.jpg'
import pic03 from '../images/LowresScreenshot00003.png'
import pic04 from '../images/HighresScreenshot00004.png'
import picCastleGuard from '../images/castle_guard.png'
import picWombatCharge from '../images/wombat_charge.png'
import picWombatTrampoline from '../images/wombat_trampoline.png'
import picWombatGooglyEyes from '../images/wombat_googlyeyes.png'
import picWombatIcon from '../images/wombat1.png'
import picWombatHeartIcon from '../images/wombat1heart.png'
import picWomComField from '../images/wombatcombat_field.png'

class TeamProjectsMain extends React.Component {
  render() {

    let close = <div className="close" onClick={() => {this.props.onCloseArticle()}}></div>

    return (
      <div id="main" style={this.props.timeout ? {display: 'flex'} : {display: 'none'}}>

        <article id="tgp" className={`${this.props.article === 'tgp' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">The Gauntlet Prismatic</h2>
          <span className="image main"><img src={pic03} alt="" /></span>
          <p>A first person shooter action game where you sling spells instead of bullets. In TGP you face off against groups of enemies in procedurally generated maps. What makes TGP differ from other shooters is the way we do combat. Your loadout provides an incredible amount of variation, instead of simply choosing spells you design them yourself. TGP offers three elements to choose from and four modifiers, each spell can have upto two modifiers. Multiply, pierce, bounce, and explosion. You can also choose which element to add to your jump and dash which will significantly alter play style and gameplay.</p>
                <h3>My Work With Map Generation</h3>
                <span className="image main"><img src={pic04} alt="" /></span>
          <p>I created the procedural generation system in TGP. It is a mixture of procedural generation and creations made by our level designers. The system starts by creating an array of random 0s(empty space) and 1s(walls) that is interpreted as 2D. I used some steps to remove certain walls based on values given to me. After this map generation step I use marching squares to determine where the indices and vertices of the map should be. I also calculate the UVs and normals of the map in this stage. At this point we have a cave like mesh.</p>
          <p>The next step uses pre-made levels that we called encounters, streams them into the current level, and places them throughout the map making sure they do not overlap with other levels or the map walls. The next step is placing smaller static meshes throughout the level and on the walls to give it a more natural feel and remove the empty space between encounters. The final step is procedurally placing instanced static meshes along the top of the map, these are only aesthetic to make it seem like you are in a small part of a much larger world. Every step of the algorithm is controlled by large tables of variables for designers to edit, allowing for one level to be immensely different from another.</p>
          <h3>The Team</h3>
          <p>The Gauntlet Prismatic team was 5 designers, 7 programmers, and 8 others working on modelling, animation, audio, and UI art.</p>
          {close}
        </article>
        <article id="wombatCombat" className={`${this.props.article === 'wombatCombat' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">Wombat Combat</h2>
                <span className="image main"><img src={picWomComField} alt="" /></span>
          <p>Wombat Combat is an online multiplayer card game developed in Unity. Each match is a free-for-all and can have 2 to 4 players. Gameplay in Wombat Combat is turn-based, but you always have to be alert. The game is about action, reaction, and resource management. </p>
          <p>At the start of every turn you have 4 Action Points, and these points are spent either by playing a Defence card, playing an Attack card, merging two cards, or playing a Trap card into the Trap Zone. At the start of each player’s turn their hand is filled with new cards until they reach the current hand size limit; this limit increases by 1 every turn. Your turn starts at the Merge Phase. During this phase you can place two of the same lower power cards into the middle and merge them together to create a much more powerful card! Then comes the Play Phase. You can play Attack and Trap cards at this point. Attack cards fling Wombats at other players, Defence and Trap cards are used to stop Wombats from hitting you. Defence cards are played from hand when a Wombat is flung at you. Trap cards can be used from the Trap Zone when a Wombat is thrown at you. When you are hit by a Wombat your life total is reduced based on the power of the Attack card that threw it. The goal is to be the last player standing.</p>
          <h3>The Team</h3>
          <span className="image main"><img src={pic02} alt="" /></span>
          <p>The main members of the Wombat Combat team are Cyle Millar-Lay (Game Designer), Myself (Lead Programmer), Alex Langeerap (Programmer), and April Friesen (Artist). I spent most of my time working with Cyle and Alex when developing the game. Alex joined around half-way through production. My work consisted of Network, Gameplay, and UI programming.</p>
          {close}
        </article>
        <article id="castleGuard" className={`${this.props.article === 'castleGuard' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
                <h2 className="major">Castle Guard</h2>
                <span className="image main"><img src={picCastleGuard} alt="" /></span>
          <p>A Virtual Reality action game. In Castle Guard you defend a castle from waves of enemies with a bow and different types of arrows. I joined the project later in the production cycle. I was asked to help fix some bugs with the AI wave system and was brought on full time to completely overhaul the system. I created as easily adjustable spline pathing system and data driven wave spawning that allowed the Level Designer to quickly create levels that felt unique. The smaller things I worked on was fixing animation logic, as well as debugging and fixing various gameplay features.</p>
          <h3>The Team</h3>
          <p>When I was working on Castle Guard the team consisted of Jordan Oleksiuk (Game Designer), Myself (AI and Gameplay Programmer), and Reynald Brassard (AI Programmer).</p>
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