// import React,{useState} from 'react';

// const DivSixteen = () =>{

//     const defaultselective ="Choose A Country";

//     const init = {
//         firstname:'',
//         lastname:'',
//         country:'',
//         bio:''
//     }

//     //userstate mha pya mhr ka 3 khu phyit loz obj ne pya
//     const [formState,setFormState] = useState(init);


//     const changehandler = (e) =>{
//         // console.log(e.target);

//         // console.log(e.target.name);//firstname,lasrname,city
//         // console.log(e.target.id);//firstname,lasrname,city

//         //console.log(formState);//{firstname: '', lastname: '', city: ''}

//         setFormState({
           
//             ...formState,//spreadoperator
//             [e.target.name]:e.target.value
//         });

//         // console.log(formState);
//     }

//     const submitHadler = (e)=>{
//         console.log(formState);

//         e.preventDefault();//dont want to reload when press submit
//     }

//     const clickHandler = ()=>{
//         setFormState(init);
//     }

//     return(

//         <form action="" method="" onSubmit={submitHadler}>

//             <div>
//                 <label htmlFor="firstname">First Name : </label>
//                 <input type="text" name="firstname" id="firstname" onChange={changehandler} value={formState.firstname} />
//                 <span>{formState.firstname}</span>
//             </div>

//             <div>
//                 <label htmlFor="lastname">Last Name : </label>
//                 <input type="text" name="lastname" id="lastname" onChange={changehandler} value={formState.lastname}  />
//                 <span>{formState.lastname}</span>
//             </div>

//             <div>
//                 <label htmlFor="country">Country : </label>
//                 <select type="text" name="country" id="country" onChange={changehandler} value={formState.country} >
//                     <option disabled>{defaultselective}</option>
//                     <option value="mm">Myanmar</option>
//                     <option value="id">Indonesia</option>
//                     <option value="thai">Thailand</option>
                  
//                 </select>
//                 <span>{formState.country}</span>
//             </div>



//             <div>
//                 <label htmlFor="bio">Bio : </label>
//                 <textarea name="bio" id="bio" onChange={changehandler} value={formState.bio} ></textarea>
//                 <span>{formState.bio}</span>
//             </div>


//             <button type="button" onClick={clickHandler}>Clear</button>
//             <button type="submit">Save</button>

//         </form>
//     )
// }


// export default DivSixteen;



//===================================================================================================


import React from 'react';

class DivSixteen extends React.Component{

    constructor(){
        super();
        this.state={
            firstname:'',
            lastname:'',
            country:'',
            bio:''
        }
    }
    render(){

        const defaultselective ="Choose A Country";

        const changehandler = (e) =>{
            // console.log(e.target);
            // console.log(e.target.name);//firstname,lasrname,city
            // console.log(e.target.id);//firstname,lasrname,city
    
            this.setState({
                
                [e.target.name]:e.target.value
            });

            // console.log(this.state);
            
        }

        const clickHandler=()=>{
            this.setState({
                firstname:'',
                lastname:'',
                country:'',
                bio:''
            });
        }

        const submitHadler= (e)=>{
            console.log(this.state);
            e.preventDefault();
        }

        return(

            <form action="" method="" onSubmit={submitHadler}>
    
                <div>
                    <label htmlFor="firstname">First Name : </label>
                    <input type="text" name="firstname" id="firstname" onChange={changehandler} value={this.state.firstname}/>
                    <span>{this.state.firstname}</span>
                </div>
    
                <div>
                    <label htmlFor="lastname">Last Name : </label>
                    <input type="text" name="lastname" id="lastname" onChange={changehandler} value={this.state.lastname}/>
                    <span>{this.state.lastname}</span>
                </div>

                <div>
                <label htmlFor="country">Country : </label>
                <select type="text" name="country" id="country" onChange={changehandler} value={this.state.country} >
                    <option disabled>{defaultselective}</option>
                    <option value="mm">Myanmar</option>
                    <option value="id">Indonesia</option>
                    <option value="thai">Thailand</option>
                  
                </select>
                <span>{this.state.country}</span>
            </div>



            <div>
                <label htmlFor="bio">Bio : </label>
                <textarea name="bio" id="bio" onChange={changehandler} value={this.state.bio} ></textarea>
                <span>{this.state.bio}</span>
            </div>
    


                <button type="button" onClick={clickHandler}>Clear</button>
                <button type="submit">Save</button>
    
            </form>
        )
    }
} 


 

export default DivSixteen;