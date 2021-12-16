import logo from './logo.svg';
import './App.css';
import './styles/stylus/index.css';
import Button from './components/button/button';
import { render } from '@testing-library/react';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p className="App_intro">
          Visual Regression Testing is pretty awesome!
        </p>
        <Button label ="I am button component rendered for demo" />
        <p className="hello">Hello</p>
      </header>
    </div>
  );
}

export default App;
