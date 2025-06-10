// import react, { Fragment,useState } from 'react';

// const GridFive = ()=>{

//     const [ison,setIsOn] = useState(false);

//     const Onmsg = ()=>(<p>Lighting is ON </p>);
//     const Offmsg = ()=>(<p>Lighting is OFF </p>);

    
//     const clickHandler=()=>{
//         setIsOn(x => !x);
//         // if true it goes false ,if it false it goes true
//     }

//     //Method 1 why we capatiliz is that is component
//     // const IsOnOff = ({current})=>{
//         // if(current){
//         //     return <Onmsg />
//         // }else{
//         //     return <Offmsg />
//         // }
//     // }

//     // Method 2
//     // let message;
//     // if(ison){
//     //     message = <Onmsg/>
//     // }else{
//     //     message = <Offmsg/>
//     // }


//     //Method 3
//     const message = ()=>{
//         if(ison){
//             return <Onmsg />
//         }else{
//             return <Offmsg />
//         }
//     }

//     return(
//         <Fragment>
//             <h3>Lighting</h3>

//             {/* Method 1 by component */}
//             {/* <IsOnOff current={ison}/> */}

//             {/* Method 2 by variable*/}
//             {/* {message} */}

//             {/* Method 3 by function */}
//             {/* {message()} */}

//             {/* Method 4 by ternary operator */}
//             {ison ? <Onmsg/> : <Offmsg/>}

//             <button type='button' onClick={clickHandler}>Switch</button>
//         </Fragment>
//     )
// }

// export default GridFive;





import react, { Fragment,Component } from 'react';

class GridFive extends Component{
    constructor(props){
        super(props);
        this.state = {
            ison:false
        }
    }

    clickHandler=()=>{
        this.setState((preState) => ({
            ison: !preState.ison //toggle the ison state
        }));
    }

    Onmsg = ()=>(<p>Lighting is ON </p>);
    Offmsg = ()=>(<p>Lighting is OFF </p>);

    //    Method 1 
    // IsOnOff = ({current})=>{
    //    return current ? <this.Onmsg /> : <this.Offmsg />
    // }

   



    render(){
        
        const {ison} = this.state;
        // Method 2
        // let message;
        // if(ison){
        //     message = <this.Onmsg />
        // }else{
        //     message = <this.Offmsg />
        // }

        //Method 3
        const message=()=>{
            return ison ? <this.Onmsg /> : <this.Offmsg />
        }


        return(
            <Fragment>
                <h3>Lighting</h3>
    
                {/* Method 1 by component */}
                {/* <this.IsOnOff current={ison}/> */}
    
                {/* Method 2 by variable*/}
                {/* {message} */}
    
                {/* Method 3 by function */}
                {/* {message()} */}
    
                {/* Method 4 by ternary operator */}
                {ison ? <this.Onmsg /> : <this.Offmsg />}
    
                <button type='button' onClick={this.clickHandler}>Switch</button>
            </Fragment>
        )
    }

}

    

   
    


  


export default GridFive;