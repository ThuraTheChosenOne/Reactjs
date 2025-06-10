// import React,{useState} from 'react';

//  const  CardFourteen = ()=>{

    

//     const [firstname,setFirstName] = useState();
//     const [lastname,setLastName] = useState();



    
//     const fistnameChangeHandler = (e)=>{
        
//         setFirstName(e.target.value);
//     }

//     const lastnameChangeHandler = (e)=>{
        
//         setLastName(e.target.value);
//     }
//     return(
//         <div>


//             <form action="" method="">
//                 <div>
//                 <label htmlFor="firstname">First Name </label>
//                 <input type="text" name="firstname" id="firstname" onChange={fistnameChangeHandler}/>
//                 <span>{firstname}</span>
//                 </div>

//                 <div>
//                 <label htmlFor="lastname">Last Name </label>
//                 <input type="text" name="lastname" id="lastname" onChange={lastnameChangeHandler}/>
//                 <span>{lastname}</span>
//                 </div>
//             </form>

            
//         </div>
//     )
// }

// export default CardFourteen;









import React from 'react';

class CardFourteen extends React.Component{

    //getter
    constructor(){
        super();
        this.state ={
            firstname:'',
            lastname:''
        }
    }

   
    render(){
        //setter
       const fistnameChangeHandler = e =>{
        this.setState({
            firstname:e.target.value
        });
        }

        const lastnameChangeHandler = e =>{
            this.setState({
                lastname:e.target.value
            });
            }
    
       return(
        <div>
            <form action="" method="">
                    <div>
                        <label htmlFor="firstname">First Name </label>
                        <input type="text" name="firstname" id="firstname" onChange={fistnameChangeHandler}/>
                        <span>{this.state.firstname}</span>
                    </div>

                    <div>
                        <label htmlFor="lastname">Last Name </label>
                        <input type="text" name="lastname" id="lastname" onChange={lastnameChangeHandler}/>
                        <span>{this.state.lastname}</span>
                    </div>
            </form>
        </div>
       )
    }
   
   
}
export default CardFourteen;



