import './App.css';
import BuildForm from './BuildForm';
import SubmitForm from './SubmitForm';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';



function App() {
  return (
    <div>
      <BrowserRouter>

        <div className="nav-bar">
          <Link to="/builder"><button className="nav-btn">Create a new form</button></Link>
        
          <Link to="/submit"><button className="nav-btn">Submit a saved form</button></Link>
        </div>

      <h1 className="app-title">Wyzer Form Task using Form.io</h1>

        <Switch>
          <Route exact path="/builder" component={BuildForm} />

          <Route exact path="/submit" component={SubmitForm} />

        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
