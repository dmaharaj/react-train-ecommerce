import React from 'react';
import { Switch, Route, Link, withRouter} from 'react-router-dom';

import './App.css';

import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';

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

function App() {
  return (
    <div>
      <Header/>
      <Switch>
        <Route exact path='/' component={HomePage}/>
        <Route path='/shop' component={ShopPage} />
        <Route exact={true} path='/hats' component={HatsPage}/>
        <Route exact={true} path='/topics' component={TopicsList}/>
        <Route path='/topics/:topicId' component={TopicDetails}/>
      </Switch>
    </div>
  );
}

export default App;
