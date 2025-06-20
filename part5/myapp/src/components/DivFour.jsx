// import React,{useState,useEffect} from 'react';

// const DivFour = ({icon})=>{
//     const [state,setState] = useState('');

//     useEffect(()=>{
//         setState(icon);
//     },[icon]);


//     return (
//         <div>
//             <img src={state} alt="img" />
//         </div>
//     )
// }



// export default DivFour;


//======================================================

// import React from 'react';

// class DivFour extends React.Component{
//     constructor(props){
//         super(props);
//         this.state={
//             icon:this.props.icon
//         }
//     }
//     render(){
//         // console.log(this.state.icon);
//         return (
//             <div>
//                 <img src={this.state.icon} alt="img" />
//             </div>
//         )
//     }
// }


// export default DivFour;

//======================================================




import React from 'react';

class DivFour extends React.Component{
    constructor(props){
        super(props);
        this.state={
            icon:this.props.icon
        }
    }
    render(){
        // console.log(this.state.icon);

        const {icon} = this.state;
        return (
            <div>
                <img src={icon} alt="img" />
            </div>
        )
    }
}


export default DivFour;

 
