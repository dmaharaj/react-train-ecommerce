import React from 'react';
import { Switch, Route, Link, withRouter} from 'react-router-dom';

import './App.css';

import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import { auth } from './firebase/firebase.utils';


const HatsPage = props => {
  console.log(props);
  return(
  <div>
    <h1>Hats Page</h1>
    <div>
      <button onClick={()=> props.history.push('/topics')}>Topics</button>
    </div>
  </div>
  );
};

const TopicsList = (props) => {
  return (
    <div>
      <h1>Topic List Page</h1>
      <Link to={`${props.match.url}/13`}>To Topic 13</Link>
      <Link to={`${props.match.url}/17`}>To Topic 17</Link>
    </div>
  );
};

const TopicDetails = (props) => {
  console.log(props);
  return (
    <div>
      <h1>Topic Detail Page { props.match.params.topicId }</h1>
      <Link to='/topics'>Topics List</Link>
    </div>
  );
};

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentUser: null
    }
  }
  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
      this.setState({ currentUser: user});

      console.log(user);
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();

  }

  render() {
    return (
      <div>
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path='/' component={HomePage}/>
          <Route path='/shop' component={ShopPage} />
          <Route path='/signin' component={SignInAndSignUpPage}/>
          <Route exact={true} path='/hats' component={HatsPage}/>
          <Route exact={true} path='/topics' component={TopicsList}/>
          <Route path='/topics/:topicId' component={TopicDetails}/>
        </Switch>
      </div>
    );
  }
}

export default App;
