import React, { Component } from 'react';
import { Provider } from 'react-redux';
import store from './store';

import './App.css';
import Posts from './components/Posts';
import PostForm from './components/PostForm';
import SideNav from './components/SideNav';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <SideNav />
          <div id="content">
            <PostForm />
            <br />
            <Posts />
          </div>
        </div>
      </Provider>
    );
  }
}

export default App;
