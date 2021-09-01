import { Switch, Route } from 'react-router-dom';
import Header from './components/Header'
import HomePage from './pages/HomePage'
import MainPage from './pages/MainPage'
import './App.css';


// When we visit '/' we want to see the HomePage
// When we visit '/explore' we want to see the MainPage
function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/explore" component={MainPage} />
      </Switch>
    </div>
  );
}

export default App;
