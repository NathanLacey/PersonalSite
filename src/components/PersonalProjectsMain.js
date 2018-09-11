import React from 'react'
import Link from 'gatsby-link'

import pic01 from '../images/pic01.jpg'

const pdf = require('../assets/resources/Resume.pdf')

class PersonalProjectsMain extends React.Component {
    render() {

        let close = <div className="close" onClick={() => { this.props.onCloseArticle() }}></div>

        return (
            <div id="main" style={this.props.timeout ? { display: 'flex' } : { display: 'none' }}>

                <article id="tüdey" className={`${this.props.article === 'tüdey' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{ display: 'none' }}>
                    <h2 className="major">Tüdey Physics</h2>
                    <span className="image main"><img src={pic01} alt="" /></span>
                    <h3>Summary</h3>
                    <p>2D physics and math libraries created in C++. The initial goal of Tüdey was to have an independent 2D physics library that could be plugged into an engine and have everything the gameplay side of the engine would need for a basic 2D game. This meant efficient collision detection and resolution, a way of controlling whether certain object collide with others, and an event system that allows you to make events external to Tüdey, but have them handled by the engine. I ended up also adding some more things that are not necessary to make a 2D game with physics, but they are nice to have. </p>
                    <h3>Serialization</h3>
                    <p>Further along in the project I started working on a Networking library and because of this added serialization of the physics world to Tüdey. The majority of this process was simple enough, however serialization of the collision behaviours was tricky. The idea behind the collision behaviours is to allow programmers to inherit from the abstract class, decide what to add to it and choose which functions they would like to override; these functions were OnTriggerEnter, OnTriggerStay, OnTriggerExit, OnCollisionEnter, OnCollisionStay, and OnCollisionExit. They would then pass an instance of that class as a parameter when creating a Collider object, and the physics library would handle when these events are called. Tüdey could serialize these objects no problem, but deserializing was a different question. I wanted the entire serialization process to be encapsulated in the physics library, but the library does not know what types had been defined outside of it. I ended up creating a very lightweight reflection system that held all the CollisionBehaviour child types that was accessed by their class name.</p>
                    <h3>Collision Behaviours</h3>
                    <p>My collision behaviour system is inspired by Unity. The system is based around the idea of a collision info that is passed through certain functions the behaviour has based on what kind of collision it is and when it is happening. There are trigger events and collision events. Collision events are called when two objects go into a resolution phase and their interaction type is Block. Trigger events are called when two objects go into a resolution phase and their interaction type is Overlap. Each type has an Enter, a Stay, and an Exit. The Enter event is called when the collision happens and it was not happening the previous update loop. The Stay event is called when the collision happens and it did happen in the previous update loop. Finally, the Exit event happens when they were colliding, but no longer are.</p>
                    <h3>Collision Channels</h3>
                    <p>The collision channel system I implemented for Tüdey is inspired by Unreal Engine 4. In Unreal each object with collision had a default collision interaction, Ignore, Overlap, or Block, and each object has a large table of how it interacts with every collision channel. Although this system is good, it is far from perfect. When working with designers in Unreal I often found that they had problems with collisions because one object's table would say it is blocking another, but that object's table would say it is ignoring. To not have this problem in my system I separated the collision interactions between channels into one table. This way it is not attached to every object and there is one centralized place for determining how one channel interacts with another.</p>
                    {close}
                </article>
                <article id="impulse" className={`${this.props.article === 'impulse' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{ display: 'none' }}>
                    <h2 className="major">DirectX11 Graphics Engine</h2>
                    <span className="image main"><img src={pic01} alt="" /></span>
                    <h3>Summary</h3>
                    <p>Impulse Engine is a DirectX11 based engine. I started working on the engine in Graphics for Games, and continued working on it throughout the courses 3D Graphics & Applications, Animation for Games, Artificial Intelligence for Games, Network Programming, and Gameplay Programming. The libraries in Impulse Engine are Core, Math, Physics, Graphics, AI, Networking, Engine, Meta, Memory, and ModelImporter. It also uses the external libraries DirectXTK, TinyXML, and assimp.</p>
                    {close}
                </article>

            </div>
        )
    }
}

PersonalProjectsMain.propTypes = {
    route: React.PropTypes.object,
    article: React.PropTypes.string,
    articleTimeout: React.PropTypes.bool,
    onCloseArticle: React.PropTypes.func,
    timeout: React.PropTypes.bool
}

export default PersonalProjectsMain
