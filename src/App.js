import { useState } from 'react';
import './App.css';
import Home from './pages/home';

const App = () => {

  const [showAboutModal, setShowAboutModal] = useState(false)

  return (
    <>
      <header className="app-header">
        <span role="img" aria-label='globe showing europe-africa' className="header-item">🌍</span>
        <h3 className="header-item">Pan-African Vibrations</h3>
        <div className='app-header-right header-item'>
          <p role="button" onClick={() => setShowAboutModal(!showAboutModal)}>
            {showAboutModal ? <>Home</> : <>About</> }
          </p>
          <a href="https://open.spotify.com/playlist/5JP51wcYiXhLbYthWbbbWZ?si=d928042a27974006" target="_blank" rel="noopener noreferrer">
            Spotify playlist
          </a>
        </div>
      </header>
      <Home showAboutModal={showAboutModal} />
    </>
  )
}

export default App
