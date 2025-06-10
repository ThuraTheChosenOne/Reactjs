import React, { Fragment } from 'react';
import {Routes,Route,Link,Navigate} from 'react-router-dom';

import {Home,Contact,About,Newsletter,Donate,PageNotFound} from "./../pages/index.js";
import {Language,LanguageEn,LanguageTh,LanguageSri,LanguageNone} from "./../pages/index.js";
import {Product,ProductDetail,ProductList} from "./../pages/index";

// If you use default export

// const AllRoutes = ({member})=>{
//     return(
//         <Fragment>
//             <Routes>
//                 <Route path="/home" element={ <Home/>} />
//                 <Route path="/contact" element={ <Contact/>} />
//                 <Route path="/about" element={ <About/>} />
                
//                 {/* Dynamic Routing and Route Single Parameter */}
//                 <Route path="/product/:id" element={ <Product/>} />

//                 {/* Navigation */}
//                 <Route path="/newsletter" element={ <Newsletter/>} />
//                 {/* <Route path="/donate" element={<Navigate to="/home"/>} /> */}
//                 <Route path="/donate" element={ member ? <Donate/> : <Navigate to="/home"/>} />


//                 {/* Dynamic Routing and Route Multi Parameter */}
//                 <Route path="/product/:name/:id" element={ <ProductDetail/>} />


//                 <Route path="/product" element={ <ProductList/>} />

//                 {/* http://localhost:5173/p */}
//                 {/* <Route path="*" element={ <PageNotFound/>} /> */}

//                 <Route path="*" element={ <PageNotFound title="404"/>} />

//                 {/* Nested Route */}
//                 {/* <Route  path="/language" element={<Language/>}/>
//                 <Route  path="/language/en" element={<LanguageEn />}/>
//                 <Route  path="/language/th" element={<LanguageTh />}/>
//                 <Route  path="/language/sri" element={<LanguageSri />}/> */}


//                 <Route  path="/language" element={<Language/>}>

//                     <Route  path="en" element={<LanguageEn />}/>
//                     <Route  path="th" element={<LanguageTh />}/>
//                     <Route  path="sri" element={<LanguageSri />}/>
//                     <Route  path="*" element={<LanguageNone />}/>
//                 </Route>
                
//             </Routes>
//         </Fragment>
//     );
// }

// export default AllRoutes;


// If you use name export {}


export const AllRoutes = ({member})=>{
    return(
        <Fragment>
            <Routes>
                <Route path="/home" element={ <Home/>} />
                <Route path="/contact" element={ <Contact/>} />
                <Route path="/about" element={ <About/>} />
                
                {/* Dynamic Routing and Route Single Parameter */}
                <Route path="/product/:id" element={ <Product/>} />

                {/* Navigation */}
                <Route path="/newsletter" element={ <Newsletter/>} />
                {/* <Route path="/donate" element={<Navigate to="/home"/>} /> */}
                <Route path="/donate" element={ member ? <Donate/> : <Navigate to="/home"/>} />


                {/* Dynamic Routing and Route Multi Parameter */}
                <Route path="/product/:name/:id" element={ <ProductDetail/>} />


                <Route path="/product" element={ <ProductList/>} />

                {/* http://localhost:5173/p */}
                {/* <Route path="*" element={ <PageNotFound/>} /> */}

                <Route path="*" element={ <PageNotFound title="404"/>} />

                {/* Nested Route */}
                {/* <Route  path="/language" element={<Language/>}/>
                <Route  path="/language/en" element={<LanguageEn />}/>
                <Route  path="/language/th" element={<LanguageTh />}/>
                <Route  path="/language/sri" element={<LanguageSri />}/> */}


                <Route  path="/language" element={<Language/>}>

                    <Route  path="en" element={<LanguageEn />}/>
                    <Route  path="th" element={<LanguageTh />}/>
                    <Route  path="sri" element={<LanguageSri />}/>
                    <Route  path="*" element={<LanguageNone />}/>
                </Route>
                
            </Routes>
        </Fragment>
    );
}