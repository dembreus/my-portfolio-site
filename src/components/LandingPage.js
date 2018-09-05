import React, {Component, Fragment} from 'react'
import '../App.css'
import {Grid, Cell, Icon} from 'react-mdl';
import Photo from '../images/profile-pic.jpg'

export default class LandingPage extends Component {
    render() {
        return (
            <div style={{height: 'auto',width: "100%", margin: 'auto'}}>
                <Grid className="landing-grid">
                    <Cell col={12}>
                        <img src={Photo}
                             alt="photo-of-dillon"
                             className="avatar-img"
                        />
                        <div className="banner-text">
                            <h1>Full Stack Web Developer</h1>
                            <hr/>
                            <p>HTML/CSS | Bootstrap | JavaScript | React | NodeJS | Express | MongoDB</p>
                            <div className="social-links">
                                {/*LinkedIn*/}
                                <a href="/"
                                   rel="noopener noreferrer"
                                   target="_blank">
                                    <i className="fa fa-linkedin-square" aria-hidden="true"/>
                                </a>
                                {/*Github*/}
                                <a href="/"
                                   rel="noopener noreferrer"
                                   target="_blank">
                                    <i className="fa fa-github-square" aria-hidden="true"/>
                                </a>
                                {/*Freecodecamp*/}
                                <a href="/"
                                   rel="noopener noreferrer"
                                   target="_blank">
                                    <i className="fa fa-free-code-camp" aria-hidden="true"/>
                                </a>
                                {/*Youtube*/}
                                <a href="/"
                                   rel="noopener noreferrer"
                                   target="_blank">
                                    <i className="fa fa-youtube-square" aria-hidden="true"/>
                                </a>
                            </div>
                        </div>
                    </Cell>
                </Grid>
            </div>
        )
    }
}