import React from 'react'

const PersonalProjectsHeader = (props) => (
    <header id="header" style={props.timeout ? { display: 'none' } : {}}>
        <div className="logo">
            <span className="icon fa-diamond"></span>
        </div>
        <div className="content">
            <div className="inner">
                <h1><b>Personal Projects</b></h1>
            </div>
        </div>
        <nav>
            <ul>
                <li><a href="javascript:;" onClick={() => { props.onOpenArticle('impulse') }}>Graphics Engine</a></li>
                <li><a href="javascript:;" onClick={() => { props.onOpenArticle('tudey') }}>2D Physics Engine</a></li>
                <li><a href="/">Home</a></li>
            </ul>
        </nav>
    </header>
)

PersonalProjectsHeader.propTypes = {
    onOpenArticle: React.PropTypes.func,
    timeout: React.PropTypes.bool
}

export default PersonalProjectsHeader
