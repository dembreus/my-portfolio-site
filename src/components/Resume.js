import React, {Component, Fragment} from 'react'
import {Grid, Cell} from 'react-mdl'
import Education from './Education'
import Experience from './Experience'
import Skills from "./Skills";
import Photo from '../images/profile-pic.jpg'

export default class Resume extends Component {
    render() {
        return (
            <div>
                <Grid>
                    <Cell col={4}>
                        <div style={{textAlign: 'center'}}>
                            <img src={Photo}
                                 alt="avatar" style={{height: 'auto',width: '100%', borderRadius: '50%'}}/>
                        </div>
                        <h2 style={{paddingTop: '2em'}}>Dillon Embreus</h2>
                        <h4 style={{color: 'grey'}}>Programmer</h4>
                        <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
                        <p>lorem ipsum</p>
                        <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
                        <h5>Address</h5>
                        <p>Salt Lake City, UT, 84124</p>
                        <h5>Phone</h5>
                        <p>(385) 444-6272</p>
                        <h5>Email</h5>
                        <p>dillon.embreus@gmail.com</p>
                        <h5>Web</h5>
                        <p>dillon-embreus.netlify.com</p>
                        <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
                    </Cell>
                    <Cell col={8}
                          className="resume-right-col">
                        <h2>Education</h2>
                        <Education
                            startYear={2014}
                            endYear={'current'}
                            schoolName={'Salt Lake Community College'}
                            schoolDescription={"lorem ipsum"}
                        />
                        <Education
                            startYear={2018}
                            endYear={'current'}
                            schoolName={'Helio Training Coding Bootcamp'}
                            schoolDescription={"lorem ipsum"}
                        />
                        <hr style={{borderTop: '3px solid #e22947'}}/>
                        <h2>Experience</h2>

                        <Experience
                            startYear={2018}
                            endYear={'current'}
                            jobName={'Piper Down Pub'}
                            jobDescription={"lorem ipsum"}
                        />
                        <Experience
                            startYear={2014}
                            endYear={2017}
                            jobName={'Tsunami Sushi Bar and Gril'}
                            jobDescription={"lorem ipsum"}
                        />
                        <hr style={{borderTop: '3px solid #e22947'}}/>
                        <h2>Skills</h2>
                        <Skills
                            skill={'JavaScript'}
                            progress={55}/>
                        <Skills
                            skill={'React'}
                            progress={35}/>
                        <Skills
                            skill={'Java'}
                            progress={60}/>
                    </Cell>
                </Grid>
            </div>
        )
    }
}