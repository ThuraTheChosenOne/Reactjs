import {Fragment, StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './mystyle.css'
import App from './App.jsx'
import Banner from './components/Banner.jsx';
import PhotoPost from './components/PhotoPost.jsx';
import AllPosts from './components/AllPosts';


// import icon1 from "./assets/icons/icon1.png";
// import icon2 from "./assets/icons/icon2.png";
// import icon3 from "./assets/icons/icon3.png";
// import icon4 from "./assets/icons/icon4.png";
// import icon5 from "./assets/icons/icon5.png";
// import icon6 from "./assets/icons/icon6.png";

createRoot(document.getElementById('root')).render(
  <Fragment>
    <header>
      <Banner/>
    </header>
    
    <div>
      <h1>Welcome to Our Site</h1>
      <h3>This is my First Project</h3>

      {/* <PhotoPost title="This is new post 1" caption="New Post" src={icon1}/>
      <PhotoPost title="This is new post 2" caption="Sport Post" src={icon2} />
      <PhotoPost title="This is new post 3" caption="Weather Post" src={icon3} />
      <PhotoPost title="This is new post 4" caption="New Post" src={icon4} />
      <PhotoPost title="This is new post 5" caption="New Post" src={icon5} />
      <PhotoPost title="This is new post 6" caption="New Post" src={icon6} /> */}

     <AllPosts />

    </div>
  </Fragment>,
)
