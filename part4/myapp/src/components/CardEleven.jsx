// import React,{useState} from 'react';

// export default function CardEleven(){

//     let idx = 1;

//     const idxarrs = useState(idx);

//     const idxState = idxarrs[0];
//     const setidxState = idxarrs[1];
    




//     const handleClick = () =>{
       
//         setidxState(idxState + 1);
//     }

//     return(
//         <div>
//             <p>{idxState}</p>
//             <button onClick={handleClick}>Click Here</button>
//         </div>
//     )
// }









// import React from 'react';

// class CardEleven extends React.Component{
//     // constructor(){
//     //     super();
//     //     this.state = {
//     //         idx:100
//     //     }
//     // }


//     state={
//         idx:10
//     }

   
//     handleClick = () =>{
            
//         this.state.idx++;

//         this.setState({
//             counter:this.state.idx++
//         });
//     }
    
//     render(){
       
    
//         return(
//             <div>
            
//                 <p>{this.state.idx}</p>
//                 <button onClick={this.handleClick}>Click here MF</button>
//             </div>
//         )
//     }
// }
// export default CardEleven;







import React from 'react';

class CardEleven extends React.Component{
 


    state={
        idx:10
    }

   
   
    
    render(){
       const  handleClick = () =>{
            
        this.state.idx++;

        this.setState({
            counter:this.state.idx++
        });
    }
    
        return(
            <div>
            
                <p>{this.state.idx}</p>
                <button onClick={handleClick}>Click here MF ! </button>
            </div>
        )
    }
}
export default CardEleven;
