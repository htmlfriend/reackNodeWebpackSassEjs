import React from 'react';
import propTypes from 'prop-types';
import axios from 'axios';
import Header from './Header';
import ContestsPreviews from './ContestsPreview';

class App extends React.Component {
  state = {
    pageHeader: 'Naming Contests',
    contests: [],
  };

  componentDidMount() {
    // ajax ... using axios
    axios
      .get('/api/contests')
      .then((response) => {
        // console.log('data', response.data.contests);

        this.setState({ contests: response.data.contests });
      })
      .catch(console.error);
  }

  componentWillUnmount() {}
  render() {
    return (
      <div>
        <div>
          <Header message={this.state.pageHeader} />
        </div>
        <div>
          <ContestsPreviews previews={this.state.contests} />
        </div>
      </div>
    );
  }
}

// App.propTypes = {
//   message: propTypes.string,
// };

App.defaultProps = {
  headerMessage: 'Hello!!!',
};

export default App;
