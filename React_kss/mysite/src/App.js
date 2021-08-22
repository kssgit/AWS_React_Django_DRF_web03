import logo from './logo.svg';
import './App.css';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import QuestionPage from './view/QuestionPage';


function App() {
  return (
    <Router>
      <div>
        <Route exact path="/" component={QuestionPage}/>
      </div>
    </Router>
  );
}

export default App;
