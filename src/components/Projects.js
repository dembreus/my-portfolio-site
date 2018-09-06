import React, {Component, Fragment} from 'react'
import {
    Tabs, Tab,
    Grid, Cell,
    Card, CardTitle, CardActions, CardMenu, CardText,
    Button, IconButton
} from 'react-mdl'
import Link from 'react-router-dom'

export default class Projects extends Component {
    constructor(props) {
        super(props);
        this.state = {activeTab: 0}
    }

    toggleCategories() {
        switch (this.state.activeTab) {
            case 0:
                return (
                    <div className="projects-grid">
                        {/* Create User Profile*/}
                        <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                            <CardTitle style={{
                                color: '#fff',
                                height: '176px',
                                background: 'url(https://upload.wikimedia.org/wikipedia/commons/1/18/React_Native_Logo.png) center / cover'
                            }}>
                                Create User Profile
                            </CardTitle>
                            <CardText>
                                This Project is a template to create a user profile, look up all users, and view user
                                profiles
                            </CardText>
                            <CardActions border>
                                <a href="https://github.com/dembreus/create-user-profile" target="_blank"><Button
                                    colored>GitHub
                                </Button></a>
                                {/*<Button colored>CodePen</Button>*/}
                                {/*<Button colored>LiveDemo</Button>*/}
                            </CardActions>
                            {/*<CardMenu style={{color: '#fff'}}>*/}
                            {/*/!*<IconButton name="share"/>*!/*/}
                            {/*</CardMenu>*/}
                        </Card>
                        {/* Project 2*/}
                        <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                            <CardTitle style={{
                                color: '#fff',
                                height: '176px',
                                background: 'url(https://upload.wikimedia.org/wikipedia/commons/1/18/React_Native_Logo.png) center / cover'
                            }}>
                                Scrubble
                            </CardTitle>
                            <CardText>
                                This is a team project between myself and 5 others. This is a scrabble game that
                                connects to different dictionary APIs to add a twist to the classic game.
                            </CardText>
                            <CardActions border>
                                <a href="https://github.com/dembreus/scrubble" target="_blank"><Button colored>GitHub
                                </Button></a>
                                {/*<Button colored>CodePen</Button>*/}
                                {/*<Button colored>LiveDemo</Button>*/}
                            </CardActions>
                            {/*<CardMenu style={{color: '#fff'}}>*/}
                            {/*<IconButton name="share"/>*/}
                            {/*</CardMenu>*/}
                        </Card>
                        {/* Project 3*/}
                        <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                            <CardTitle style={{
                                color: '#fff',
                                height: '176px',
                                background: 'url(https://upload.wikimedia.org/wikipedia/commons/1/18/React_Native_Logo.png) center / cover'
                            }}>
                                React Project #3
                            </CardTitle>
                            <CardText>
                                Lorem Ipsum
                            </CardText>
                            <CardActions border>
                                <Button colored>GitHub</Button>
                                <Button colored>CodePen</Button>
                                <Button colored>LiveDemo</Button>
                            </CardActions>
                            <CardMenu style={{color: '#fff'}}>
                                <IconButton name="share"/>
                            </CardMenu>
                        </Card>
                    </div>
                );
            case 1:
                return (<div><h1>this is Angular</h1></div>);
            case 2:
                return (<div>
                        {/* Scrubble the backend needs to be separated*/}
                        <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                            <CardTitle style={{
                                color: '#fff',
                                height: '176px',
                                background: 'url(https://montykamath.files.wordpress.com/2018/02/graphql.png) center / cover',
                                backgroundColor: '#171e26'
                            }}>
                                Scrubble's backend
                            </CardTitle>
                            <CardText>
                                This is the backend for my team's projects Scrubble.
                            </CardText>
                            <CardActions border>
                                <a href="https://github.com/dembreus/create-user-backend" target="_blank"><Button
                                    colored>GitHub
                                </Button></a>
                                {/*<Button colored>CodePen</Button>*/}
                                {/*<Button colored>LiveDemo</Button>*/}
                            </CardActions>
                        </Card>
                    </div>
                );

            // these are the MongoDB Projects
            case 3:
                return (
                    <div>
                        {/* Create user profile backend*/}
                        <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                            <CardTitle style={{
                                color: '#fff',
                                height: '176px',
                                background: 'url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfCjGGW51d9usHt_MQQeGss3y6tXWch9c_Tmi2NJWa7ulkCqrH) center / cover'
                            }}>
                                Create User Profile Backend
                            </CardTitle>
                            <CardText>
                                This is the backend for my Create User Profile React App.
                            </CardText>
                            <CardActions border>
                                <a href="https://github.com/dembreus/create-user-backend" target="_blank"><Button
                                    colored>GitHub
                                </Button></a>
                                {/*<Button colored>CodePen</Button>*/}
                                {/*<Button colored>LiveDemo</Button>*/}
                            </CardActions>
                            {/*<CardMenu style={{color: '#fff'}}>*/}
                            {/*/!*<IconButton name="share"/>*!/*/}
                            {/*</CardMenu>*/}
                        </Card>
                    </div>
                );
            default:
                return (<div>this page hasn't been set up yet</div>);
        }
    }

    render() {
        return (
            <div className="category-tabs">
                <Tabs activeTab={this.state.activeTab}
                      onChange={tabID => this.setState({activeTab: tabID})}
                      ripple>
                    <Tab>React</Tab>
                    <Tab>Angular</Tab>
                    <Tab>GraphQL</Tab>
                    <Tab>MongoDB</Tab>
                </Tabs>
                <Grid>
                    <Cell col={12}>
                        <div className="content">{this.toggleCategories()}</div>
                    </Cell>
                </Grid>


            </div>
        )
    }
}