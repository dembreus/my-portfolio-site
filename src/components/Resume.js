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
                        <hr style={{borderTop: '3px solid #2f94a3', width: '50%'}}/>
                        <p>lorem ipsum</p>
                        <hr style={{borderTop: '3px solid #2f94a3', width: '50%'}}/>
                        <h5>Address</h5>
                        <p>Salt Lake City, UT, 84124</p>
                        <h5>Phone</h5>
                        <p>(385) 444-6272</p>
                        <h5>Email</h5>
                        <p>dillon.embreus@gmail.com</p>
                        <h5>Web</h5>
                        <p>dillon-embreus.netlify.com</p>
                        <hr style={{borderTop: '3px solid #2f94a3', width: '50%'}}/>
                    </Cell>
                    <Cell col={8}
                          className="resume-right-col">
                        <h2>Education</h2>
                        <Education
                            startYear={'August 2014'}
                            endYear={'Present'}
                            schoolName={'Salt Lake City, UT, Salt Lake Community College, Computer Engineering'}
                            schoolDescription={"Fundamentals of Computer Programming,\n" +
                            "Object Oriented Programming,\n" +
                            "Intro to C++,\n" +
                            "Algorithms and Data Structures,"}
                        />
                        <Education
                            startYear={'May 2018'}
                            endYear={'August 2018'}
                            schoolName={' Salt Lake City, UT, Helio Training Coding Bootcamp, Full Stack Web Development '}
                            schoolDescription={"Certification of Course Completion,\n" +
                            "Certification of Skills Proficiency"}
                        />
                        <hr style={{borderTop: '3px solid #34e89e'}}/>
                        <h2>Experience</h2>

                        <Experience
                            startYear={'May 2017'}
                            endYear={'Present'}
                            jobName={'Bartender, Morris Pub Holdings Inc'}
                            jobDescription={"Bartend a high-volume bar. Providing quality drinks, ensuring customer\n" +
                            "satisfaction, and a high customer return rate. Deescalate disruptive\n" +
                            "customers and disputes between staff members. Frequently surpass daily\n" +
                            "sales goals. Account for the liquor and sales reports for all the employees\n" +
                            "at the end of the night and make sure that the numbers stay on track.\n" +
                            "Keep the bar safe from lawsuits by convincing intoxicated customers to\n" +
                            "download taxi apps to avoid customers drinking and driving. "}
                        />
                        <Experience
                            startYear={'July 2016'}
                            endYear={'May 2018'}
                            jobName={'Bar-Back, Morris Pub Holdings Inc.'}
                            jobDescription={"Responsibilities ranged from cleaning, running food and drinks, to taking\n" +
                            "orders from customers and making drinks. Was the most preferred Bar\n" +
                            "Back to work with, because my ability to anticipate the needs of the\n" +
                            "bartender to ensure the bar operated swiftly."}
                        />
                        <hr style={{borderTop: '3px solid #34e89e'}}/>
                        <h2>Skills</h2>
                        <Skills
                            skill={'JavaScript'}
                            progress={55}/>
                        <Skills
                            skill={'Java'}
                            progress={60}/>
                        <Skills
                            skill={'C++'}
                            progress={30}/>
                        <Skills
                            skill={'HTML'}
                            progress={70}/>
                        <Skills
                            skill={'CSS'}
                            progress={30}/>
                        <Skills
                            skill={'React'}
                            progress={35}/>
                        <Skills
                            skill={'Bootstrap'}
                            progress={20}/>
                        <Skills
                            skill={'Skeleton'}
                            progress={15}/>
                        <Skills
                            skill={'React MDL'}
                            progress={35}/>
                        <Skills
                            skill={'Micro'}
                            progress={20}/>
                        <Skills
                            skill={'Webstorm'}
                            progress={60}/>
                        <Skills
                            skill={'Visual Studio'}
                            progress={35}/>
                        <Skills
                            skill={'GitHub'}
                            progress={70}/>
                        <Skills
                            skill={'GitLab'}
                            progress={25}/>
                        <Skills
                            skill={'GitKraken'}
                            progress={60}/>
                        <Skills
                            skill={'MongoDB'}
                            progress={20}/>
                        <Skills
                            skill={'Node.js'}
                            progress={35}/>
                        <Skills
                            skill={'GIT'}
                            progress={35}/>
                        <Skills
                            skill={'Prisma'}
                            progress={20}/>
                        <Skills
                            skill={'GraphQL'}
                            progress={35}/>

                    </Cell>
                </Grid>
            </div>
        )
    }
}