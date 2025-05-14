// import React from 'react';
// import "./CardSix.css";

// export default function CardSix(){

//     const internalstyle = {
//         backgroundColor:"gray",
//         color:"orange",
//         padding:"10px"
//     };

//     const objectstyle = {
//         skb:{backgroundColor:"skyblue"},
//         vlt:{backgroundColor:"violet"},
//         org:{backgroundColor:"orange"}
//     }

//     const getorangecolor = "org";
//     return(
//         //css ko object lo yae ya tl
//        <div>
//          <h4 style={{color:"steelblue"}}>Hello world, welcome to our app</h4>
//          <button style={{color:"steelblue",fontStyle:"italic"}} >Click Me</button>

//          <h4 style={internalstyle}>Hello Earth, welcome to our app</h4>
//          <button style={internalstyle}>Click Me</button>

//          <h3>Hello Mann, welcome to our app</h3>
//          <h5>Hello Gays, welcome to our app</h5>
//          <h6>Hello Girls, welcome to our app</h6>

//          <p style={objectstyle.skb}>Thank you</p>
//          <p style={objectstyle.vlt}>Regard</p>
//          <p style={objectstyle[getorangecolor]}>Bye bye</p>

//          <button className="mytextstyle">Click Me</button>
//        </div>
//     );
// }

import React from 'react';
import "./CardSix.css";

export default class CardSix extends React.Component{
    render(){
        const internalstyle = {
                   backgroundColor:"gray",
                   color:"orange",
                    padding:"10px"
        };

        const objectstyle = {
                skb:{backgroundColor:"skyblue"},
                vlt:{backgroundColor:"violet"},
                org:{backgroundColor:"orange"}
        };

            const getorangecolor = "org";

        return(
            <div>
            <h4 style={{color:"steelblue"}}>Hello world, welcome to our app</h4>
            <button style={{color:"steelblue",fontStyle:"italic"}} >Click Me</button>

            <h4 style={internalstyle}>Hello Earth, welcome to our app</h4>
            <button style={internalstyle}>Click Me</button>

            <h3>Hello Mann, welcome to our app</h3>
            <h5>Hello Gays, welcome to our app</h5>
            <h6>Hello Girls, welcome to our app</h6>

            <p style={objectstyle.skb}>Thank you</p>
            <p style={objectstyle.vlt}>Regard</p>
            <p style={objectstyle[getorangecolor]}>Bye bye</p>

            <button className="mytextstyle">Click Me</button>
       </div>
        );
    }
}