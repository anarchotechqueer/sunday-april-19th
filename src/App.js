import React from 'react';
import axios from 'axios';

import './app.scss';

import Lyrics   from './components/lyrics';
import NextDate from './components/next-date';
import Footer   from './components/footer';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      nextOccurrence: null
    };
  }

  calculateNextOccurrence = () => {
    axios.get('/api/nextOccurrence')
    .then(res => {
      const {nextOccurrence} = res.data;

      this.setState({
        nextOccurrence: nextOccurrence
      })
    })
    .catch(err => {
      console.log(err);
    })
  }

  componentDidMount() {
    this.calculateNextOccurrence();
  }

  render() {
    return (
      <>
        <div className="app">
          { this.state.nextOccurrence && (
            <>
              <Lyrics />
              <NextDate {...this.state} />
            </>
            )
          }
        </div>
        <Footer />
      </>
    );
  }
}

export default App;