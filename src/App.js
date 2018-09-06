import React, { Component } from 'react';
import './App.css';
import { Layout, Header, Navigation, Drawer, Content } from 'react-mdl';
import Routes from './components/routes';
import { Link } from 'react-router-dom';

class App extends Component {
    render() {
        return (
            <div className="demo-big-content">
                <Layout>
                    <Header className="header-color" title={<Link style={{textDecoration: 'none', color: 'white'}} to="/">Dillon Embreus</Link>} scroll>
                        <Navigation>
                            <Link to="/resume">Resume</Link>
                            <Link to="/aboutme">About Me</Link>
                            <Link to="/projects">Projects</Link>
                            {/*<Link to="/contact">Contact</Link>*/}
                        </Navigation>
                    </Header>
                    <Drawer title={<Link style={{textDecoration: 'none', color: 'black'}} to="/">Dillon Embreus</Link>}>
                        <Navigation>
                            <Link to="/resume">Resume</Link>
                            <Link to="/aboutme">About Me</Link>
                            <Link to="/projects">Projects</Link>
                            {/*<Link to="/contact">Contact</Link>*/}
                        </Navigation>
                    </Drawer>
                    <Content>
                        <div className="page-content" />
                        <Routes/>
                    </Content>
                </Layout>
            </div>

        );
    }
}

export default App;
