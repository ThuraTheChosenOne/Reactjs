import React,{useState} from 'react';

const DivFifteen = () =>{

    const init = {
        firstname:'',
        lastname:'',
        city:''
    }

    //userstate mha pya mhr ka 3 khu phyit loz obj ne pya
    const [formState,setFormState] = useState(init);


    const changehandler = (e) =>{
        // console.log(e.target);

        // console.log(e.target.name);//firstname,lasrname,city
        // console.log(e.target.id);//firstname,lasrname,city

        //console.log(formState);//{firstname: '', lastname: '', city: ''}

        setFormState({
           
            ...formState,//spreadoperator
            [e.target.name]:e.target.value
        });

        // console.log(formState);
    }

    const submitHadler = (e)=>{
        console.log(formState);

        e.preventDefault();//dont want to reload when press submit
    }

    const clickHandler = ()=>{
        setFormState(init);
    }

    return(

        <form action="" method="" onSubmit={submitHadler}>

            <div>
                <label htmlFor="firstname">First Name : </label>
                <input type="text" name="firstname" id="firstname" onChange={changehandler} value={formState.firstname} />
                <span>{formState.firstname}</span>
            </div>

            <div>
                <label htmlFor="lastname">Last Name : </label>
                <input type="text" name="lastname" id="lastname" onChange={changehandler} value={formState.lastname}  />
                <span>{formState.lastname}</span>
            </div>

            <div>
                <label htmlFor="city">City : </label>
                <input type="text" name="city" id="city" onChange={changehandler} value={formState.city} />
                <span>{formState.city}</span>
            </div>

            <button type="button" onClick={clickHandler}>Clear</button>
            <button type="submit">Save</button>

        </form>
    )
}


export default DivFifteen;



//===================================================================================================


// import React from 'react';

// class DivFifteen extends React.Component{

//     constructor(){
//         super();
//         this.state={
//             firstname:'',
//             lastname:'',
//             city:''
//         }
//     }
//     render(){
//         const changehandler = (e) =>{
//             // console.log(e.target);
//             // console.log(e.target.name);//firstname,lasrname,city
//             // console.log(e.target.id);//firstname,lasrname,city
    
//             this.setState({
                
//                 [e.target.name]:e.target.value
//             });

//             console.log(this.state);
            
//         }

//         const clickHandler=()=>{
//             this.setState({
//                 firstname:'',
//                 lastname:'',
//                 city:''
//             });
//         }

//         const submitHadler= (e)=>{
//             console.log(this.state);
//             e.preventDefault();
//         }

//         return(

//             <form action="" method="" onSubmit={submitHadler}>
    
//                 <div>
//                     <label htmlFor="firstname">First Name : </label>
//                     <input type="text" name="firstname" id="firstname" onChange={changehandler} value={this.state.firstname}/>
//                     <span>{this.state.firstname}</span>
//                 </div>
    
//                 <div>
//                     <label htmlFor="lastname">Last Name : </label>
//                     <input type="text" name="lastname" id="lastname" onChange={changehandler} value={this.state.lastname}/>
//                     <span>{this.state.lastname}</span>
//                 </div>
    
//                 <div>
//                     <label htmlFor="city">City : </label>
//                     <input type="text" name="city" id="city" onChange={changehandler} value={this.state.city} />
//                     <span>{this.state.city}</span>
//                 </div>

//                 <button type="button" onClick={clickHandler}>Clear</button>
//                 <button type="submit">Save</button>
    
//             </form>
//         )
//     }
// } 


 

    



// export default DivFifteen;