import './App.css';
import 'antd/dist/antd.css';
import { BrowserRouter, Route } from 'react-router-dom';
import FirstScreen from './components/FirstScreen';
import SecondScreen from './components/SecondScreen';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Route exact path='/' component={FirstScreen}/>
        <Route path='/result' component={SecondScreen}/>
      </BrowserRouter>
    </div>
  );
}

export default App;
