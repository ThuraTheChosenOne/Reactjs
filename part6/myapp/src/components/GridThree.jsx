// import React,{useState} from 'react';

// const GridThree=()=>{

//     const [person,setPersons] = useState([
        // {name:"mi mi",msg:"Hey what u doing ?"},
        // {name:"ki ki",msg:"Hey what u dudge ?"},
        // {name:"mo mo",msg:"Hey can u doing ?"}
//     ]);


//     const clickHandler = ()=>{
//         setPersons([
//             {name:"ko ko",msg:"Hey what u doing ?"},
//             {name:"mg mg",msg:"Hey what u dudge ?"},
//             {name:"nyi nyi",msg:"Hey can u doing ?"}
//         ])
//     }
//     return(
//         <div>
//             <h4>Thanks for helping us {person[0].name} . {person[0].msg}</h4>
//             <h4>Thanks for helping us {person[1].name}  . {person[1].msg}</h4>
//             <h4>Thanks for helping us {person[2].name}  . {person[2].msg}</h4>

//             <button type="button" onClick={clickHandler}>Click Me</button>
//         </div>
//     )
    
// }
  


// export default GridThree;

import React from 'react';

class GridThree extends React.Component{

    constructor(){
        super();
        this.state={
            persons:[
                {name:"mi mi",msg:"Hey what u doing ?"},
                {name:"ki ki",msg:"Hey what u dudge ?"},
                {name:"mo mo",msg:"Hey can u doing ?"}
            ]
        }
    }


     clickHandler = ()=>{
        this.setState({
            persons:[
                {name:"ko ko",msg:"Hey what u doing ?"},
                {name:"mg mg",msg:"Hey what u dudge ?"},
                {name:"nyi nyi",msg:"Hey can u doing ?"}
            ]
        })
      
    }
    render(){

        return(
            <div>
                <h4>Thanks for helping us {this.state.persons[0].name} . {this.state.persons[0].msg}</h4>
                <h4>Thanks for helping us {this.state.persons[1].name}  . {this.state.persons[1].msg}</h4>
                <h4>Thanks for helping us {this.state.persons[2].name}  . {this.state.persons[2].msg}</h4>
    
                <button type="button" onClick={this.clickHandler}>Click Me</button>
            </div>
        )
    }
}
  


export default GridThree;