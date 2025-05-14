// import React,{Fragment} from 'react';
// const greeting = "I am card five given by varaiable"
// export default function CardFive(){
//     return (
//     //    <div>
//     //      <h5>I am a card five fuck</h5>
//     //      <h5>I am a card five Again</h5>
//     //    </div>
    
//     // <>
//     //     <h5>I am a card five fuck</h5>
//     //     <h5>I am a card five Again</h5>
//     //     <h5>{greeting}</h5>
//     // </>

//     // <React.StrictMode>
//     //     <h5>I am a card five fuck</h5>
//     //     <h5>I am a card five Again</h5>
//     //     <h5>{greeting}</h5>
//     // </React.StrictMode>

//     <Fragment>
//         <h5>I am a card five fuck</h5>
//         <h5>I am a card five Again</h5>
//         <h5>{greeting}</h5>
//     </Fragment>

//     )
// }

import React,{Component,Fragment} from 'react';

export default class CardFive extends Component{
    render(){
        const greeting = "I am card five given by varaiable"
        return(
            // <div>
            //     <h5>I am a card five fuck</h5>
            //     <h5>I am a card five Again</h5>
            // </div>

            // <>
            //     <h5>I am a card five fuck</h5>
            //     <h5>I am a card five Again</h5>
            // </>



            // <React.StrictMode>
            //     <h5>I am a card five fuck</h5>
            //     <h5>I am a card five Again</h5>
            // </React.StrictMode>
            
            // <React.Fragment>
            //     <h5>I am a card five fuck</h5>
            //     <h5>I am a card five Again</h5>
            // </React.Fragment>

             <Fragment>
                <h5>I am a card five fuck</h5>
                <h5>I am a card five Again</h5>
                <h5>{greeting}</h5>
            </Fragment>

        )
    }
}