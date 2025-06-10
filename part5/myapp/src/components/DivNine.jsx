// import React,{useState} from 'react';

// const shortlabels = ["Name","Gender","City"];
// const longlabels = ["Full Name","Chose Gender","Enter Your Hometown"];

// const DivNine=()=>{

//     const [labelState,setLabelstate] = useState(shortlabels);

//     const clickHandler = ()=>{
//         setLabelstate(labelState === shortlabels ? longlabels : shortlabels);
//     }

//     const display = labelState.map((val,idx)=>(
//         <div className="for-group" key={idx}>
//             <label htmlFor={`info.${idx}`}>{val}</label>
//             <br />
//             <input type="text" name={`info.${idx}`} id={`info.${idx}`} className="form-control"/>
//         </div>
//     ));

//     return(
//         <section>
//             <h2>Register Form</h2>
//             <form action="">
//                 {display}
//             </form>
//             <br />
//             <button type="button" onClick={clickHandler}>{labelState === shortlabels ? "Show More" : "Hide More"}</button>
//         </section>
//     )
// }
// export default DivNine;




//===============================================================================================================


import React from 'react';

const shortlabels = ["Name","Gender","City"];
const longlabels = ["Full Name","Chose Gender","Enter Your Hometown"];

class DivNine extends React.Component{

    constructor(){
        super();
        this.state={
            labelState:shortlabels
        }
    }
    clickHandler = ()=>{
        this.setState({
            labelState:this.state.labelState === shortlabels ? longlabels : shortlabels
        });
        
    }
    render(){

    

    const display = this.state.labelState.map((val,idx)=>(
        <div className="for-group" key={idx}>
            <label htmlFor={`info.${idx}`}>{val}</label>
            <br />
            <input type="text" name={`info.${idx}`} id={`info.${idx}`} className="form-control"/>
        </div>
    ));
        return(
            <section>
                <h2>Register Form</h2>
                <form action="">
                    {display}
                </form>
                <br />
                <button type="button" onClick={this.clickHandler}>{this.state.labelState === shortlabels ? "Show More" : "Hide More"}</button>
            </section>
        )
    }
}

export default DivNine;