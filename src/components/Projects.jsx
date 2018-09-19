import React, { Component, Fragment } from "react";
import {
  Tabs,
  Tab,
  Grid,
  Cell,
  Card,
  CardTitle,
  CardActions,
  CardText,
  Button
} from "react-mdl";
import "../styles/Projects.css";

export default class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = { activeTab: 0 };
  }

  toggleCategories() {
    switch (this.state.activeTab) {
      case 0:
        return (
          <div className="projects-grid">
            <Grid>
              <Cell col={4}>
                {/* Create User Profile*/}
                <Card
                  shadow={5}
                  className="project-card"
                  style={{ minWidth: "450", margin: "auto" }}
                >
                  <CardTitle
                    className="react-project-title"
                    style={
                      {
                        // color: '#fff'
                      }
                    }
                  >
                    Create User Profile
                  </CardTitle>
                  <CardText>
                    This Project is a template to create a user profile, look up
                    all users, and view user profiles
                  </CardText>
                  <CardActions border>
                    <a
                      href="https://github.com/dembreus/create-user-profile"
                      target="_blank"
                    >
                      <Button colored>GitHub</Button>
                    </a>
                    <a
                      href="https://create-user-profile.netlify.com/"
                      target="_blank"
                    >
                      <Button colored>LiveDemo</Button>
                    </a>
                  </CardActions>
                </Card>
              </Cell>
              <Cell col={4}>
                {/* Project 2*/}
                <Card shadow={5} className="project-card">
                  <CardTitle
                    className="react-project-title"
                    style={{ color: "#fff" }}
                  >
                    Scrubble
                  </CardTitle>
                  <CardText>
                    This is a team project between myself and 5 others. This is
                    a scrabble game that connects to different dictionary APIs
                    to add a twist to the classic game.
                  </CardText>
                  <CardActions border>
                    <a
                      href="https://github.com/dembreus/scrubble"
                      target="_blank"
                    >
                      <Button colored>GitHub</Button>
                    </a>
                    <a href="https://scrubble.netlify.com/" target="_blank">
                      <Button colored>LiveDemo</Button>
                    </a>
                  </CardActions>
                </Card>
              </Cell>
              <Cell col={4}>
                {/* Project 3*/}
                <Card shadow={5} className="project-card">
                  <CardTitle
                    className="react-project-title"
                    style={{ color: "#fff" }}
                  >
                    Pot Luck App
                  </CardTitle>
                  <CardText>
                    This app uses firebase to keep track of who is bringing what
                    to a pot luck.
                  </CardText>
                  <CardActions border>
                    <a
                      href="https://github.com/dembreus/fun-food-friends"
                      target="_blank"
                    >
                      <Button colored>GitHub</Button>
                    </a>
                    <a href="https://byob.netlify.com/" target="_blank">
                      <Button colored>LiveDemo</Button>
                    </a>
                  </CardActions>
                </Card>
              </Cell>
            </Grid>
          </div>
        );
      case 1:
        return (
          <div>
            <h1>this is Angular</h1>
          </div>
        );
      case 2:
        return (
          <div>
            {/* Scrubble the backend needs to be separated*/}
            <Card shadow={5} className="project-card">
              <CardTitle
                style={{
                  color: "#fff",
                  height: "176px",
                  background:
                    "url(https://montykamath.files.wordpress.com/2018/02/graphql.png) center / cover",
                  backgroundColor: "#171e26"
                }}
              >
                Scrubble's backend
              </CardTitle>
              <CardText>
                This is the backend for my team's projects Scrubble.
              </CardText>
              <CardActions border>
                <a
                  href="https://github.com/dembreus/create-user-backend"
                  target="_blank"
                >
                  <Button colored>GitHub</Button>
                </a>
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
            <Card shadow={5} className="project-card">
              <CardTitle
                style={{
                  color: "#fff",
                  height: "176px",
                  background:
                    "url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfCjGGW51d9usHt_MQQeGss3y6tXWch9c_Tmi2NJWa7ulkCqrH) center / cover"
                }}
              >
                Create User Profile Backend
              </CardTitle>
              <CardText>
                This is the backend for my Create User Profile React App.
              </CardText>
              <CardActions border>
                <a
                  href="https://github.com/dembreus/create-user-backend"
                  target="_blank"
                >
                  <Button colored>GitHub</Button>
                </a>
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
        return <div>this page hasn't been set up yet</div>;
    }
  }

  render() {
    return (
      <div className="category-tabs">
        <Tabs
          activeTab={this.state.activeTab}
          onChange={tabID => this.setState({ activeTab: tabID })}
          ripple
        >
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
    );
  }
}
