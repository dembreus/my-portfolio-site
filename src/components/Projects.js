import React, {Component, Fragment} from 'react'
import {
    Tabs, Tab,
    Grid, Cell,
    Card, CardTitle, CardActions, CardMenu, CardText,
    Button, IconButton
} from 'react-mdl'

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
                        {/* Project 1*/}
                        <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                            <CardTitle style={{color: '#fff',
                                height: '176px',
                                background: 'url(https://upload.wikimedia.org/wikipedia/commons/1/18/React_Native_Logo.png) center / cover'}}>
                                React Project #1
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
                        {/* Project 2*/}
                        <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                            <CardTitle style={{color: '#fff',
                                height: '176px',
                                background: 'url(https://upload.wikimedia.org/wikipedia/commons/1/18/React_Native_Logo.png) center / cover'}}>
                                React Project #2
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
                        {/* Project 3*/}
                        <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                            <CardTitle style={{color: '#fff',
                                height: '176px',
                                background: 'url(https://upload.wikimedia.org/wikipedia/commons/1/18/React_Native_Logo.png) center / cover'}}>
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
                return (<div><h1>this is VueJS</h1></div>);
            case 3:
                return (<div><h1>this is MongoDB</h1></div>);
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
                    <Tab>VueJS</Tab>
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