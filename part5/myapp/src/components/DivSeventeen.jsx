// import React,{useState} from 'react';

// const DivSeventeen = () =>{

//     const defaultselective ="Choose A Country";

//     const init = {
//         firstname:'',
//         lastname:'',
//         country:'',
//         bio:'',
//         gender:'',
//         agree:false
//     };

//     const loaddata = {
//         firstname:'Kyaw',
//         lastname:'Aung',
//         country:'mm',
//         bio:'THank you for everything',
//         gender:0,
//         agree:true
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

//     const clicLoadkHandler = ()=>{
//         setFormState(loaddata);
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

//             <div>
//                 <label>Gender </label>
//                 <input type="radio" name="genderm" id="genderm" onChange={changehandler} value="1" checked={formState.gender === 1} /><label htmlFor="genderm">Male</label>
//                 <input type="radio" name="genderf" id="genderf" onChange={changehandler} value="0"  checked={formState.gender === 0}/><label htmlFor="genderf">Feale</label>
               
//             </div>


//             <div>
//                 <label htmlFor='agree'>Agree </label>
//                 <input type="checkbox" name="agree" id="agree" onChange={changehandler} value="1" checked={formState.agree} />
 
//             </div>



//             <button type="button" onClick={clickHandler}>Clear</button>
//             <button type="button" onClick={clicLoadkHandler}>Load</button>
//             <button type="submit">Save</button>

//         </form>
//     )
// }


// export default DivSeventeen;



//===================================================================================================


import React from 'react';

class DivSixteen extends React.Component{

    constructor(){
        super();
        this.state={
            firstname:'',
            lastname:'',
            country:'',
            bio:'',
            gender:'',
            agree:false
        }
    }
    render(){

        const inits ={
            firstname:'',
            lastname:'',
            country:'',
            bio:'',
            gender:'',
            agree:false
        }

        const loaddata = {
            firstname:'Thura',
            lastname:'Naing',
            country:'id',
            bio:'sdfsdf',
            gender:"1",
            agree:true
        }

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
            this.setState(inits);
        }

        const clicLoadkHandler=()=>{
            this.setState(loaddata);
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

            <div>
                <label>Gender </label>
                <input type="radio" name="genderm" id="genderm" onChange={changehandler} value="1" checked={this.state.gender === "1"} /><label htmlFor="genderm">Male</label>
                <input type="radio" name="genderf" id="genderf" onChange={changehandler} value="0"  checked={this.state.gender === "0"}/><label htmlFor="genderf">Feale</label>
               
            </div>


            <div>
                <label htmlFor='agree'>Agree </label>
                <input type="checkbox" name="agree" id="agree" onChange={changehandler} value="1" checked={this.state.agree} />
 
            </div>
    


                <button type="button" onClick={clickHandler}>Clear</button>
                <button type="button" onClick={clicLoadkHandler}>Load</button>
                <button type="submit">Save</button>
    
            </form>
        )
    }
} 


 

export default DivSixteen;