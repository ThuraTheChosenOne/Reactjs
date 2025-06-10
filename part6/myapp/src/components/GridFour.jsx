// import React,{useState} from 'react';

// const GridFour=()=>{

//     const [person,setPersons] = useState({
//         info:[
//             {name:"mi mi",msg:"Hey what u doing ?"},
//             {name:"ki ki",msg:"Hey what u dudge ?"},
//             {name:"mo mo",msg:"Hey can u doing ?"}
//         ]
//     });


//     const clickHandler = ()=>{
//         setPersons({
//            info: [
//                 {name:"ko ko",msg:"Hey what u doing ?"},
//                 {name:"mg mg",msg:"Hey what u dudge ?"},
//                 {name:"nyi nyi",msg:"Hey can u doing ?"}
//             ]
//         })
//     }
//     return(
//         <div>
//             <h4>Thanks for helping us {person.info[0].name} . {person.info[0].msg}</h4>
//             <h4>Thanks for helping us {person.info[1].name}  . {person.info[1].msg}</h4>
//             <h4>Thanks for helping us {person.info[2].name}  . {person.info[2].msg}</h4>

//             <button type="button" onClick={clickHandler}>Click Me</button>
//         </div>
//     )
    
// }
  


// export default GridFour;

import React from 'react';

class GridFour extends React.Component{

    constructor(){
        super();
        this.state={
            persons:{
                info:[
                    {name:"mi mi",msg:"Hey what u doing ?"},
                    {name:"ki ki",msg:"Hey what u dudge ?"},
                    {name:"mo mo",msg:"Hey can u doing ?"}
                ]
            }
        }
    }


     clickHandler = ()=>{
        this.setState({
            persons:{
                info:[
                    {name:"ko ko",msg:"Hey what u doing ?"},
                    {name:"mg mg",msg:"Hey what u dudge ?"},
                    {name:"nyi nyi",msg:"Hey can u doing ?"}
                ]
            }
        })
      
    }
    render(){

        return(
            <div>
                <h4>Thanks for helping us {this.state.persons.info[0].name} . {this.state.persons.info[0].msg}</h4>
                <h4>Thanks for helping us {this.state.persons.info[1].name}  . {this.state.persons.info[1].msg}</h4>
                <h4>Thanks for helping us {this.state.persons.info[2].name}  . {this.state.persons.info[2].msg}</h4>
    
                <button type="button" onClick={this.clickHandler}>Click Me</button>
            </div>
        )
    }
}
  


export default GridFour;