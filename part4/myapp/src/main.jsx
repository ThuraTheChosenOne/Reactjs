import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import CardOne from './components/CardOne.jsx';
import CardTwo from './components/CardTwo.jsx';
import CardThree from './components/CardThree.jsx';
import CardFour from './components/CardFour.jsx';
import CardFive from './components/CardFive.jsx';
import CardSix from './components/CardSix.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    <CardOne />
    <CardTwo />
    <CardThree />
    <CardFour />
    <CardFive />
    <CardSix />



  </StrictMode>,
)
