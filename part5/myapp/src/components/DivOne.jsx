// import React from 'react';

// const DivOne = (props) =>{
//     return(
//         <div>
//             <h4>Hello I am {props.name} , I am {props.age} years old</h4>
//         </div>
//     )
// }

// export default DivOne;






// ==================================================================================


// NOTE: this keyword needed if no constructor
// NOTE:props , this keyword no need in constructor

// import React from 'react';

// class DivOne extends React.Component{
//     render(){
//         return(
//             <div>
//                 <h4>Hello I am {this.props.name} , I am {this.props.age} years old</h4>
//             </div>
//         )
//     }
    
// }

// export default DivOne;


// ==================================================================================






import React from 'react';

class DivOne extends React.Component{
    constructor(props){
        super(props);
        this.state={
            getname:props.name,
            getage:props.age
        }
    }
      
    

    render(){
        return(
            <div>
                <h4>Hello I am {this.state.getname} , I am {this.state.getage} years old</h4>
            </div>
        )
    }
    
}

export default DivOne;