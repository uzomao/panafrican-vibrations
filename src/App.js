import { useState } from 'react';
import './App.css';
import Home from './pages/home';

const App = () => {

  const [showAboutModal, setShowAboutModal] = useState(false)

  return (
    <>
      <header className="app-header">
        <span role="img" aria-label='globe showing europe-africa'>🌍</span>
        <h3>Pan-African Vibrations</h3>
        <p role="button" onClick={() => setShowAboutModal(!showAboutModal)}>
          {showAboutModal ? <>Home</> : <>About</> }
        </p>
      </header>
      <Home showAboutModal={showAboutModal} />
    </>
  )
}

export default App
