// import React, { Fragment,useState,useEffect } from 'react';

// const DivTwelve = () =>{
// //dr ka taklloz saved data shi yin saved data pya ml ma shi yin 0
//     const getinitidx = ()=>{
//         const savedidx = localStorage.getItem('mynewdb');
//         return savedidx ? parseInt(savedidx) : 0;
//     }



//     const [idxState,setIdxState] = useState(getinitidx);//function phyit p () br loz ma pay le so yin click tai lote say chin lox
//     //getinitidx will be 0 or saved value



//     //save in db after increment or decrement
//     useEffect(()=>{
//         localStorage.setItem('mynewdb',idxState);
//     },[idxState]);



//     const incClickHandler = ()=>{
//         setIdxState(idxState=>idxState + 1);
//     }

//     const decClickHandler = ()=>{
//         setIdxState(idxState=>idxState - 1);
//     }

//     const resetClickHandler = ()=>{
//         setIdxState(0);
//         localStorage.clear();
//     }


//     return(

        
//         <Fragment>
//             <p>{idxState}</p>
//             <button type="button" onClick={incClickHandler}>Click Increment</button>
//             <button type="button" onClick={decClickHandler}>Click Decrement </button>
//             <button type="button" onClick={resetClickHandler}>Reset</button>
//         </Fragment>
//     )
// }


// export default DivTwelve;



import React, { Fragment} from 'react';

class DivTwelve extends React.Component{

    constructor(){
        super();

        const saveidx = localStorage.getItem('mynewdb');
        this.state={
            idx:saveidx ? parseInt(saveidx) :0
        }
    }

   
    // componentDidMount(){

    //     console.log("I am did mount , idx = " + this.state.idx);

    //     localStorage.setItem("mynewdb",this.state.idx);

    // }

    componentDidUpdate(){
        //click tr ne update tan phyit but it does not work from the beginning
        console.log("I am did update , idx = " + this.state.idx);

        localStorage.setItem("mynewdb",this.state.idx);
    }



    render(){


    const incClickHandler = ()=>{
        this.setState({
            idx:this.state.idx + 1
        })
    }

    const decClickHandler = ()=>{
        this.setState({
            idx:this.state.idx - 1
        })
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
                <button type="button" onClick={incClickHandler}>Click Increment</button>
                <button type="button" onClick={decClickHandler}>Click Decrement </button>
                <button type="button" onClick={resetClickHandler}>Reset</button>
            </Fragment>
        )
    }
}


export default DivTwelve;