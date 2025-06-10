// import React,{useState} from 'react';

// const students = [
//     {id:1,name:"aung aung",result:"pass"},
//     {id:2,name:"kyaw kyaw",result:"fail"},
//     {id:3,name:"zaw zaw",result:"pass"},
//     {id:4,name:"aung kyaw",result:"pass"},
//     {id:5,name:"zaw aung",result:"fail"},
//     {id:6,name:"hla hla",result:"fail"},
//     {id:7,name:"zaw kyaw",result:"pass"},
//     {id:8,name:"may aung",result:"fail"},
//     {id:9,name:"hla aung",result:"pass"},
//     {id:10,name:"aung hla",result:"fail"},

// ]

// const DivTen = ()=>{


//     const [studentState,setStudentState] = useState("all");


//     const allclickHandler = ()=>{
//         setStudentState("all");
//     }

//     const passclickHandler = ()=>{
//         setStudentState("pass");
//     }

//     const failclickHandler = ()=>{
//         setStudentState("fail");
//     }

//     //in this case filter is used to know pass,fail
//     const display = students
//         .filter(student=>(studentState === "all" ? student : studentState === "pass" ? student.result !== "fail" : student.result !== "pass"))
//         .map(student=>(<li key={student.id.toString()}>{student.name} = {student.result}</li>));
// //in this case why we dont use idx as key is there is alreadt id in object student
//     return(

//         <section>
//             <h2>Exam Result</h2>
//             <ul>
//                 {display}
//             </ul>
//             <button type="buton" onClick={allclickHandler}>All Students</button>
//             <button type="buton" onClick={passclickHandler}>Pass Students</button>
//             <button type="buton" onClick={failclickHandler}>Fail Students</button>
//         </section>
//     )

// }


// export default DivTen;



//===============================================================================================
import React from 'react';

const students = [
    {id:1,name:"aung aung",result:"pass"},
    {id:2,name:"kyaw kyaw",result:"fail"},
    {id:3,name:"zaw zaw",result:"pass"},
    {id:4,name:"aung kyaw",result:"pass"},
    {id:5,name:"zaw aung",result:"fail"},
    {id:6,name:"hla hla",result:"fail"},
    {id:7,name:"zaw kyaw",result:"pass"},
    {id:8,name:"may aung",result:"fail"},
    {id:9,name:"hla aung",result:"pass"},
    {id:10,name:"aung hla",result:"fail"},

]

class DivTen extends React.Component{
    constructor(){
        super();
        this.state={
            show:"all"
        }
    }

     allclickHandler = ()=>{
        this.setState({
            show:"all"
        })
    }

     passclickHandler = ()=>{
        this.setState({
            show:"pass"
        })
    }

     failclickHandler = ()=>{
        this.setState({
            show:"fail"
        })
    }
    render(){

     


        
    
        
        const display = students
            .filter(student=>(this.state.show === "all" ? student : this.state.show === "pass" ? student.result !== "fail" : student.result !== "pass"))
            .map(student=>(<li key={student.id.toString()}>{student.name} = {student.result}</li>));
   
        return(

            <section>
                <h2>Exam Result</h2>
                <ul>
                    {display}
                </ul>
                <button type="buton" onClick={this.allclickHandler}>All Students</button>
                <button type="buton" onClick={this.passclickHandler}>Pass Students</button>
                <button type="buton" onClick={this.failclickHandler}>Fail Students</button>
            </section>
        )
    }
}


export default DivTen;