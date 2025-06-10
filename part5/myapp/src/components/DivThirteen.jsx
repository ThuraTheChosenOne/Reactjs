// import React,{useState} from 'react';

// const DivThirteen = () =>{

//     //userstate mha pya mhr ka 3 khu phyit loz obj ne pya
//     const [formState,setFormState] = useState({
//         firstname:'',
//         lastname:'',
//         city:''
//     });


//     const changehandler = (e) =>{
//         // console.log(e.target);

//         // console.log(e.target.name);//firstname,lasrname,city
//         // console.log(e.target.id);//firstname,lasrname,city

//         //console.log(formState);//{firstname: '', lastname: '', city: ''}

//         setFormState({
//             //1 khu chin si phyyit nay te kg tay ko object htae paung say chin yin ... thone
//             ...formState,//spreadoperator
//             [e.target.name]:e.target.value
//         });

//         // console.log(formState);
//     }

//     return(

//         <form action="" method="">

//             <div>
//                 <label htmlFor="firstname">First Name : </label>
//                 <input type="text" name="firstname" id="firstname" onChange={changehandler} />
//                 <span>{formState.firstname}</span>
//             </div>

//             <div>
//                 <label htmlFor="lastname">Last Name : </label>
//                 <input type="text" name="lastname" id="lastname" onChange={changehandler} />
//                 <span>{formState.lastname}</span>
//             </div>

//             <div>
//                 <label htmlFor="city">City : </label>
//                 <input type="text" name="city" id="city" onChange={changehandler} />
//                 <span>{formState.city}</span>
//             </div>

//         </form>
//     )
// }


// export default DivThirteen;



//===================================================================================================


import React,{useState} from 'react';

class DivThirteen extends React.Component{

    constructor(){
        super();
        this.state={
            firstname:'',
            lastname:'',
            city:''
        }
    }
    render(){
        const changehandler = (e) =>{
            // console.log(e.target);
            // console.log(e.target.name);//firstname,lasrname,city
            // console.log(e.target.id);//firstname,lasrname,city
    
            this.setState({
                
                [e.target.name]:e.target.value
            });

            console.log(this.state);
            
        }

        return(

            <form action="" method="">
    
                <div>
                    <label htmlFor="firstname">First Name : </label>
                    <input type="text" name="firstname" id="firstname" onChange={changehandler} />
                    <span>{this.state.firstname}</span>
                </div>
    
                <div>
                    <label htmlFor="lastname">Last Name : </label>
                    <input type="text" name="lastname" id="lastname" onChange={changehandler} />
                    <span>{this.state.lastname}</span>
                </div>
    
                <div>
                    <label htmlFor="city">City : </label>
                    <input type="text" name="city" id="city" onChange={changehandler} />
                    <span>{this.state.city}</span>
                </div>
    
            </form>
        )
    }
} 


 

    



export default DivThirteen;