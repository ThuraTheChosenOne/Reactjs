// import React from "react";
// import {Link} from "react-router-dom";

// const Home=()=>{
//     return(
//         <div>
//             <h1>Home</h1>

//             <p>As there are many languages in the World, you can choose from a variety of base texts so you cover not only normal letters but also accents, special characters and other alphabets.
//             As there are many languages in the World, you can choose from a variety of base texts so you cover not only normal letters but also accents, special characters and other alphabets.
//             As there are many languages in the World, you can choose from a variety of base texts so you cover not only normal letters but also accents, special characters and other alphabets.
//             As there are many languages in the World, you can choose from a variety of base texts so you cover not only normal letters but also accents, special characters and other alphabets.
//             As there are many languages in the World, you can choose from a variety of base texts so you cover not only normal letters but also accents, special characters and other alphabets.
//             </p>

//             <p>As there are many languages linked to <Link to={'/product/1002'}>Joey</Link> in the World, you can choose from <Link to={'/product/10023'}>Khan</Link> a variety of base texts so you cover not only normal letters but also accents, special characters and other alphabets.</p>

           
//         </div>
//     )
// }
// export default Home;




import React,{Component} from "react";
import {Link} from "react-router-dom";

class Home extends Component{
        render(){
            return(
                <div>
                    <h1>Home</h1>
        
                    <p>As there are many languages in the World, you can choose from a variety of base texts so you cover not only normal letters but also accents, special characters and other alphabets.
                    As there are many languages in the World, you can choose from a variety of base texts so you cover not only normal letters but also accents, special characters and other alphabets.
                    As there are many languages in the World, you can choose from a variety of base texts so you cover not only normal letters but also accents, special characters and other alphabets.
                    As there are many languages in the World, you can choose from a variety of base texts so you cover not only normal letters but also accents, special characters and other alphabets.
                    As there are many languages in the World, you can choose from a variety of base texts so you cover not only normal letters but also accents, special characters and other alphabets.
                    </p>
        
                    <p>As there are many languages linked to <Link to={'/product/1002'}>Joey</Link> in the World, you can choose from <Link to={'/product/10023'}>Khan</Link> a variety of base texts so you cover not only normal letters but also accents, special characters and other alphabets.</p>
        
                   
                </div>
            )
        }

}

export default Home;