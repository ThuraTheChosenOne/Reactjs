import React from 'react';

const DivTwo = ({name="Thomas",age=213})=>{
    return(
        <div>
            <h4>Hello I am {name} , I am {age} years old</h4>
        </div>
    )
}

//react 17+ doest not support the following so we need to use default value in paramter of function
// DivTwo.DefaultProps = {
//     name:"Thomas",
//     age:1000
// }

export default DivTwo;  
  






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






// import React from 'react';

// class DivOne extends React.Component{
//     constructor(props){
//         super(props);
//         this.state={
//             getname:props.name,
//             getage:props.age
//         }
//     }
      
    

//     render(){
//         return(
//             <div>
//                 <h4>Hello I am {this.state.getname} , I am {this.state.getage} years old</h4>
//             </div>
//         )
//     }
    
// }

// export default DivOne;