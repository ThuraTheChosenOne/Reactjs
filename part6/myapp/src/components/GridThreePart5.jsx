// import React,{useState,useCallback} from "react";

// const GridThreePart5 = ()=>{
//     const [loginState,setLoginState]= useState();

//     const loginHandler = useCallback(()=>{setLoginState(loginState=>true)},[loginState]);
//     const logoutHandler = useCallback(()=>{setLoginState(loginState=>false)},[loginState]);//[] means memorize in react

    
//     let button;

//     //login phyit bnay yin logout change
//     if(loginState){
//         button = <LogoutButton handler={logoutHandler}/>
//     }else{
//         button = <LoginButton handler={loginHandler}/>
//     }


//     return(
//         <div>
//             <Greeting status={loginState} />
//             {button}
//         </div>
//     )
// }




// function UserGreeting(){
//     return <h1>Welcome Back Sir, you are already login !</h1>
// }

// function GuestGreeting(){
//     return <h1>Please Login</h1>
// }

// function Greeting(props){
//     const status = props.status;//true or false

//     if(status){
//         return <UserGreeting />
//     }else{
//         return <GuestGreeting />
//     }
// }



// function LoginButton(props){
//     return(
//         <button type="button" onClick={props.handler}>Login</button>
//     )
// }


// function LogoutButton(props){
//     return(
//         <button type="button" onClick={props.handler}>Logout</button>
//     )
// }


// export default GridThreePart5;

import React from 'react';

class GridThreePart5 extends React.Component{

    constructor(props){
        super(props);
        this.state = {loginState:false};
        this.loginHandler = this.handlerloginclick.bind(this);
        this.logoutHandler = this.handlerlogoutclick.bind(this);
    }

    handlerloginclick(){
        this.setState({
            loginState:true
        })
    }

    handlerlogoutclick(){
        this.setState({
            loginState:false
        })
    }

    render(){
        let button ;

        if(this.state.loginState){
            button = <LogoutButton  handler={this. logoutHandler}/>
        }else{
            button = <LoginButton  handler={this. loginHandler}/>
        }
        
        return(
            <div>
                <Greeting status={this.state.loginState} />
                {button}
            </div>
        )
    }
}



function UserGreeting(){
    return <h1>Welcome Back Sir, you are already login !</h1>
}

function GuestGreeting(){
    return <h1>Please Login</h1>
}

function Greeting(props){
    const status = props.status;//true or false

    if(status){
        return <UserGreeting />
    }else{
        return <GuestGreeting />
    }
}


function LoginButton(props){
    return(
        <button type="button" onClick={props.handler}>Login</button>
    )
}


function LogoutButton(props){
    return(
        <button type="button" onClick={props.handler}>Logout</button>
    )
}

export default GridThreePart5;