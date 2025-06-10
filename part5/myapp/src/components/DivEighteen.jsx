// import React,{useState} from 'react';

// const DivEighteen=()=>{
//     const [email,setEmail] = useState("");
//     const [password,setPassword] = useState("");
//     const [age,setAge] = useState("");
//     const [bio,setBio] = useState("");

//     const [emailErr,setEmailErr] = useState("");
//     const [passwordErr,setPasswordErr] = useState("");
//     const [ageErr,setAgeErr] = useState("");
//     const [bioErr,setBioErr] = useState("");

//     const validate = ()=>{

//         let isvalid = true;
//         let emailError = '',passError = '',ageError = '',bioError = '';

//         //email.trim().length === 0 means no input
//         if(email.trim().length === 0){
//             emailError = "Email Required";
//             isvalid = false;
//         }

//         if(password.trim().length === 0){
//             passError = "Password Required";
//             isvalid = false;
//         }


//         if(age.trim().length === 0){
//             ageError = "Age Required";
//             isvalid = false;
//         }

//         if(bio.trim().length === 0){
//             bioError = "Bio Required";
//             isvalid = false;
//         }

//         setEmailErr(emailError);
//         setPasswordErr(passError);
//         setAgeErr(ageError);
//         setBioErr(bioError);

//         return isvalid;
//     }

//     const submitHandler = (e)=>{
//         e.preventDefault();



//         if(validate()){
//             window.alert("Form Submitted");
           
//         }
//     }


//     const changehandler = (e)=>{
//         const {name,value} = e.target;

//         if(name === "email") setEmail(value);
//         if(name === "password") setPassword(value);
//         if(name === "age") setAge(value);
//         if(name === "bio") setBio(value);
//     }
//     return(
//         <div>
//             <h4>Form Elements</h4>
//             <p>{email}</p>
//             <p>{password}</p>
//             <p>{age}</p>
//             <p>{bio}</p>


//             <form action="" method="" onSubmit={submitHandler}>
    
//                 <div>
//                     <label htmlFor="email">Email : </label>
//                     <input type="email" name="email" id="email" onChange={changehandler} />
//                     <strong style={{color:'red',display:'block'}}>{emailErr}</strong>
//                 </div>
    
//                 <div>
//                     <label htmlFor="password">Password : </label>
//                     <input type="password" name="password" id="password" onChange={changehandler} />
//                     <strong style={{color:'red',display:'block'}}>{passwordErr}</strong>
//                 </div>

//                 <div>
//                 <label htmlFor="age">Age : </label>
//                 <select name="age" id="age" onChange={changehandler}>
//                     <option disabled>Choose</option>
//                     <option value="18">18</option>
//                     <option value="20">20</option>
//                     <option value="30">30</option>
                  
//                 </select>
//                 <strong style={{color:'red',display:'block'}}>{ageErr}</strong>
//             </div>

//             <div>
//                 <label htmlFor="bio">Bio : </label>
//                 <textarea name="bio" id="bio" onChange={changehandler}></textarea>
//                 <strong style={{color:'red',display:'block'}}>{bioErr}</strong>
//             </div>

               
//                 <button type="submit">Submit</button>
    
//             </form>
//         </div>
//     )
// }

// export default DivEighteen;



import React from 'react';

class  DivEighteen extends React.Component{

    constructor(){
        super();
        this.state={
            email:'',
            password:'',
            age:'',
            bio:'',

            emailErr:'',
            passErr:'',
            ageErr:'',
            bioErr:''
        }
    }

    validate = ()=>{

        let isvalid = true;
        let emailErr = '',passErr = '',ageErr = '',bioErr = '';

        //email.trim().length === 0 means no input
        if(this.state.email.trim().length === 0){
            emailErr = "Email Required";
            isvalid = false;
        }

        if(this.state.password.trim().length === 0){
            passErr = "Password Required";
            isvalid = false;
        }


        if(this.state.age.trim().length === 0){
            ageErr = "Age Required";
            isvalid = false;
        }

        if(this.state.bio.trim().length === 0){
            bioErr = "Bio Required";
            isvalid = false;
        }

        this.setState({emailErr,passErr,ageErr,bioErr})


        return isvalid;
    }


     changehandler = (e)=>{


        this.setState({
            [e.target.name]:e.target.value
        });

    }

    render(){
        const submitHandler = (e)=>{
            e.preventDefault();
    
    
    
            if(this.validate()){
                window.alert("Form Submitted");
               
            }
        }
        return(
            <div>
                <h4>Form Elements</h4>
                <p>{this.state.email}</p>
                <p>{this.state.password}</p>
                <p>{this.state.age}</p>
                <p>{this.state.bio}</p>
    
    
                <form action="" method="" onSubmit={submitHandler}>
        
                    <div>
                        <label htmlFor="email">Email : </label>
                        <input type="email" name="email" id="email" onChange={this.changehandler} />
                        <strong style={{color:'red',display:'block'}}>{this.state.emailErr}</strong>
                    </div>
        
                    <div>
                        <label htmlFor="password">Password : </label>
                        <input type="password" name="password" id="password" onChange={this.changehandler} />
                        <strong style={{color:'red',display:'block'}}>{this.state.passErr}</strong>
                    </div>
    
                    <div>
                    <label htmlFor="age">Age : </label>
                    <select name="age" id="age" onChange={this.changehandler}>
                        <option disabled>Choose</option>
                        <option value="18">18</option>
                        <option value="20">20</option>
                        <option value="30">30</option>
                      
                    </select>
                    <strong style={{color:'red',display:'block'}}>{this.state.ageErr}</strong>
                </div>
    
                <div>
                    <label htmlFor="bio">Bio : </label>
                    <textarea name="bio" id="bio" onChange={this.changehandler}></textarea>
                    <strong style={{color:'red',display:'block'}}>{this.state.bioErr}</strong>
                </div>
    
                   
                    <button type="submit">Submit</button>
        
                </form>
            </div>
        )
    }
}
    

     
   


export default DivEighteen;