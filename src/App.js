import './App.css';
import Home from './pages/home';

const App = () => {
  return (
    <>
      <header className="app-header">
        <span role="img" aria-label='globe showing europe-africa'>🌍</span>
        <h3>Pan-African Vibrations</h3>
        <p role="button">About</p>
      </header>
      <Home />
    </>
  )
}

export default App
