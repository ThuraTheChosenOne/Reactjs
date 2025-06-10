// import React, { Fragment,useState,useEffect } from 'react';

// const DivEleven = () =>{
//     const [idxState,setIdxState] = useState(0);

//     useEffect(()=>{
//         const getlocaldb = localStorage.getItem("mydb");

//         if(getlocaldb != null){
//             setIdxState(parseInt(getlocaldb));
//         }
//     },[]);



//     const clickHandler = ()=>{
//         setIdxState(idxState=>idxState + 1);
//     }

//     const saveClickHandler = ()=>{
//         localStorage.setItem("mydb",idxState);
//     }

//     const resetClickHandler = ()=>{
//         setIdxState(0);
//         localStorage.clear();
//     }


//     return(

        
//         <Fragment>
//             <p>{idxState}</p>
//             <button type="button" onClick={clickHandler}>Click Me</button>
//             <button type="button" onClick={saveClickHandler}>Save Me</button>
//             <button type="button" onClick={resetClickHandler}>Reset</button>
//         </Fragment>
//     )
// }


// export default DivEleven;



import React, { Fragment} from 'react';

class DivEleven extends React.Component{

    constructor(){
        super();
        this.state={
            idx:0
        }
    }

    //sa lr ka te ka lote lote te function 
    componentDidMount(){
        // console.log("I am a didmount i am working from the beginning!");

        const getlocaldb = localStorage.getItem('mydb');
        if(getlocaldb !== null){
            //display  ui and +getlocaldb means string to integer convert
            this.setState({
                idx: +getlocaldb
            });
        }

    }



    render(){


    const clickHandler = ()=>{
        this.setState({
            idx:this.state.idx + 1
        })
    }

    const saveClickHandler = ()=>{
        localStorage.setItem("mydb",this.state.idx);
    }

    const resetClickHandler = ()=>{
        this.setState({
            idx:0
        });
        localStorage.clear();
    }

        return(

        
            <Fragment>
                <p>{this.state.idx}</p>
                <button type="button" onClick={clickHandler}>Click Me</button>
                <button type="button" onClick={saveClickHandler}>Save Me</button>
                <button type="button" onClick={resetClickHandler}>Reset</button>
            </Fragment>
        )
    }
}


export default DivEleven;