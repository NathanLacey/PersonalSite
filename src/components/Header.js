import React from 'react'

const Header = (props) => (
    <header id="header" style={props.timeout ? {display: 'none'} : {}}>
        <div className="logo">
            <span className="icon fa-diamond"></span>
        </div>
        <div className="content">
            <div className="inner">
                <h1>Nathan Lacey</h1>
                <h2>Game Programmer</h2>
            </div>
        </div>
        <nav>
            <ul>
                <li><a href="personal-project-page">Personal Projects</a></li>
                <li><a href="team-project-page">Team Projects</a></li>
                <li><a href="javascript:;" onClick={() => {props.onOpenArticle('about')}}>Demo Reel</a></li>
                <li><a href="javascript:;" onClick={() => {props.onOpenArticle('contact')}}>Contact</a></li>
            </ul>
        </nav>
    </header>
)

Header.propTypes = {
    onOpenArticle: React.PropTypes.func,
    timeout: React.PropTypes.bool
}

export default Header
