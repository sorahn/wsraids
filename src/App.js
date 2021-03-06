import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import logo from './logo.svg';
import './App.css';
import { Button, Panel, Modal } from 'react-bootstrap';
import RaidReport from './RaidReport.js';
import Content from './Content.js';

let playerCount = 0;
let raidedPrior = false;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contentType: 'none'
    };

    this.dismissModal = this.dismissModal.bind(this);
  }
  componentDidMount() {}

  componentWillUnmount() {}

  dismissModal() {
    this.switchContent('info');
  }

  switchContent(type) {
    this.setState({
      contentType: type
    });
  }

  render() {
    return (
      <div>
        <div className="App">
          <header className="App-header">
            West Seattle Raids <br />
            <img src={logo} className="App-logo" alt="logo" />
          </header>
        </div>
        <div className="text-center">
          <Button
            bsStyle="primary"
            onClick={() => {
              this.switchContent('info');
            }}
          >
            {' '}
            Raid Info{' '}
          </Button>
          <Button
            bsStyle="default"
            onClick={() => {
              this.switchContent('submit');
            }}
          >
            Submit Report
          </Button>
        </div>
        <br />
        <Content type={this.state.contentType} />
        <Modal show={this.state.contentType === 'none'}>
          <Modal.Body>
            <Panel bsStyle="success">
              <Panel.Heading>
                <Panel.Title componentClass="h3">Purpose</Panel.Title>
              </Panel.Heading>
              <Panel.Body>
                <p>
                  The idea is that we need roughly 60-80 unique accounts to raid at a specific gym to trigger an EX raid
                  for that gym.
                </p>
                <p> This page provides info about the currently targeted gym and stats.</p>
                <p> If you'd like to contribute to the stats, please fill out a really quick report.</p>
                <div className="text-center">
                  <Button onClick={this.dismissModal}>Dismiss</Button>{' '}
                </div>
              </Panel.Body>
            </Panel>
          </Modal.Body>
        </Modal>
      </div>
    );
  }
}

export default App;
