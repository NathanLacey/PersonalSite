import React from 'react'

const TeamProjectsHeader = (props) => (
    <header id="header" style={props.timeout ? {display: 'none'} : {}}>
        <div className="logo">
            <span className="icon fa-diamond"></span>
        </div>
        <div className="content">
            <div className="inner">
                <h1><b>Team Projects</b></h1>
            </div>
        </div>
        <nav>
            <ul>
                <li><a href="javascript:;" onClick={() => {props.onOpenArticle('wombatCombat')}}>Wombat Combat</a></li>
                <li><a href="javascript:;" onClick={() => {props.onOpenArticle('tgp')}}>The Gauntlet Prismatic</a></li>
                <li><a href="javascript:;" onClick={() => {props.onOpenArticle('castleGuard')}}>Castle Guard</a></li>
            </ul>
        </nav>
    </header>
)

TeamProjectsHeader.propTypes = {
    onOpenArticle: React.PropTypes.func,
    timeout: React.PropTypes.bool
}

export default TeamProjectsHeader
