//FUNCTIONAL COMPONENT MHA useState THONE PONE

// import React,{useState} from 'react';

// export default function CardTen(){

//     let counter = 1;

//     const counterarrs = useState(0);
//     // console.log(counterarrs);//( [0, ƒ]
//     // console.log(counterarrs[0]);//0
//     // console.log(counterarrs[1]);// function (){ {[bactive code]}}

//     // (getter,setter)
//     const counterState = counterarrs[0];//0 ya yu
//     const setCounterState = counterarrs[1];// htar
//     // console.log(counterState);//0
//     // console.log(setCounterState);//function () { [native code] }




//     const handleClick = () =>{
//         // console.log("I am working");
//         // counter++;
//         // console.log(counter);//increment in console not in ui , so need state

//         setCounterState(counterState + 1);
//     }

//     return(
//         <div>
//             <p>{counterState}</p>
//             {/* <p>{counter}</p> */}
//             <button onClick={handleClick}>Add Now</button>
//         </div>
//     )
// }



//CLASS COMPONENT MHA useState THONE PONE

import React from 'react';

class CardTen extends React.Component{
    constructor(){
        super();
        this.state = {
            counter:1
        }
    }

    //yae nii ka tutu pl render a pyin mhar yae te nii dr ka
    handleClick = () =>{
            
        this.state.counter++;

        //display changes on ui
        this.setState({
            counter:this.state.counter++
        });
    }
    
    render(){
       
    
        return(
            <div>
            
                <p>{this.state.counter}</p>
                <button onClick={this.handleClick}>Add Now</button>
            </div>
        )
    }
}
export default CardTen;