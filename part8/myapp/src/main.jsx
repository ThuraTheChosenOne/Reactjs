import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {BrowserRouter as Router} from 'react-router-dom';

import {Header,Footer} from './components/index.js';
// import {AllRoutes} from './routes/AllRoutes.jsx';//default export
import {AllRoutes} from './routes/AllRoutes.jsx';//name export


const member = true;
createRoot(document.getElementById('root')).render(
  <div>
    <section>
      <Router>
        {/* Header and footer must be in router */}
        <Header/>
        <AllRoutes member={member}/>
        <Footer />
      </Router>
    </section>
  </div>
)
