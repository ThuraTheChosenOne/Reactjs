import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import GridOne from './components/GridOne.jsx';
import GridTwo from './components/GridTwo.jsx';
import GridThreePart5 from './components/GridThreePart5.jsx';
import GridThree from './components/GridThree.jsx';
import GridFour from './components/GridFour.jsx';
import GridFive from './components/GridFive.jsx';
import GridSix from './components/GridSix.jsx';
import GridSeven from './components/GridSeven.jsx';
import GridEight from './components/GridEight.jsx';
// import GridNine from './components/GridNine.jsx';
import GridTen from './components/GridTen.jsx';



const contacts =["su su","yu yu","nu nu","ma ma"];
createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}

    <GridOne />
    <GridTwo status="hello"/>
    <GridThreePart5 />

    <GridThree />
    <GridFour />
    <GridFive />
    <GridSix />

    <GridSeven/>
    <GridEight/>
    {/* <GridNine data={contacts} /> */}
    <GridTen data={contacts}/>
   

  </StrictMode>
)
