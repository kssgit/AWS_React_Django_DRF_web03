import logo from './logo.svg';
import './App.css';
import { Route, BrowserRouter as Router } from 'react-router-dom';

import QuestionDetailPage from './page/QuestionDetailPage';
import QuestionCreatePage from './page/QuestionCreatePage';
import QuestionListPage from './page/QuestionListPage';


function App() {
  return (
    <Router>
      <div>
        <Route exact path="/" component={QuestionListPage}/>
        <Route exact path="/detail/:id" component={QuestionDetailPage}/>
        <Route exact path="/create" component={QuestionCreatePage}/>


      </div>
    </Router>
  );
}

export default App;
