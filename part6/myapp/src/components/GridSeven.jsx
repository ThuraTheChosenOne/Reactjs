// import React,{Fragment,useState} from 'react';

// const GridSeven = ()=>{

//     const [num,setNum] = useState(0);

//     const [result,setResult] = useState(0);


//     function changeHandler(e){
//         setNum(Number(e.target.value));//change to number
//     }

//     function submitHandler(e){
//         e.preventDefault();
//         setResult(result+num);
//     }

//     return(
    
//         <Fragment>
//             <form action="" onSubmit={submitHandler}>
//                 <input type="number" value={num} onChange={changeHandler} autoFocus />
//                 <input type="submit" value="Add" />
//                 <p>Result is {result}</p>
//             </form>
//         </Fragment>
//     )
// }

// export default GridSeven;




import React,{Component, Fragment} from 'react';

class GridSeven extends Component{
    constructor(){
        super();
        this.state={
            num:0,
            result:0
        };

        this.changeHandler = this.changeHandler.bind(this);
        this.submitHandler = this.submitHandler.bind(this);

    };


    changeHandler(e){
        this.setState({num:Number(e.target.value)});
       
    }

    submitHandler(e){
        e.preventDefault();
        this.setState((prevState)=>({
            result:prevState.result + prevState.num
        }));
    }
    render(){
        return(
            <Fragment>
                <form action="" onSubmit={this.submitHandler}>
                    <input type="number" value={this.state.num} onChange={this.changeHandler} autoFocus />
                    <input type="submit" value="Add" />
                    <p>Result is {this.state.result}</p>
                </form>
             </Fragment>
        )
    }
    
    

    

}


    
export default GridSeven;