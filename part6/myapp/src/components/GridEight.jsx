// import React,{Fragment,useState} from 'react';

// const GridEight = ()=>{

//     const [num,setNum] = useState('');

//     const [result,setResult] = useState(0);


//     function changeHandler(e){

//         const value = e.target.value;


//         setNum(value === ''  ? '' : Number(value));//change to number
//     }

//     function submitHandler(e){
//         e.preventDefault();
//         setResult(result+num);
//         setNum('');//clear input value
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

// export default GridEight;




import React,{Component, Fragment} from 'react';

class GridEight extends Component{
    constructor(){
        super();
        this.state={
            num:'',
            result:0 
        };

        this.changeHandler = this.changeHandler.bind(this);
        this.submitHandler = this.submitHandler.bind(this);

    };


    changeHandler(e){
        const value = e.target.value
        this.setState({num: value === '' ? '' : Number(value)});
       
    }

    submitHandler(e){
        e.preventDefault();
        this.setState((prevState)=>({
            result:prevState.result + Number(prevState.num),
            num:''//clear input value
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


    
export default GridEight;