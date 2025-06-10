// import React,{useState} from 'react';

// const GridOne = () =>{

//     const students = {
//         data:[
//             {
//                 "id":1,
//                 "name":"aung aung",
//                 "city":"yangon"
//             },
//             {
//                 "id":2,
//                 "name":"maung maung",
//                 "city":"mandalay"
//             },
//             {
//                 "id":3,
//                 "name":"khin aung",
//                 "city":"Taungyi"
//             },
//             {
//                 "id":4,
//                 "name":"thura naing",
//                 "city":"mandalay"
//             },
//             {
//                 "id":5,
//                 "name":"myint aung",
//                 "city":"yangon"
//             }
//         ]
//     };

//     const [dataState,setDataState] = useState(students);


    
//     return(

//         <div>
//             <Article />
//             <ul>
//                 {
//                     dataState.data.map((student,idx)=><Post key={idx.toString()} senddata={student}/>)
//                 }
                
//             </ul>
//         </div>

//     ) 
// }

// const Article = ()=>{
//     return(
//         <div>
//             <h3>This is Article Functional Component</h3>
//             <p>Hello World!</p>
//         </div>
//     )
// }

// class Post extends React.Component{
//     render(){

//         return(
//             <div>
//                 <li>{this.props.senddata.id} . {this.props.senddata.name} , {this.props.senddata.city}</li>
//             </div>
//         )
//     }
// }

// export default GridOne;



import React from 'react';

class GridOne extends React.Component{


    constructor(){
        super();
        this.students = {
            data:[
                {
                    "id":1,
                    "name":"aung aung",
                    "city":"yangon"
                },
                {
                    "id":2,
                    "name":"maung maung",
                    "city":"mandalay"
                },
                {
                    "id":3,
                    "name":"khin aung",
                    "city":"Taungyi"
                },
                {
                    "id":4,
                    "name":"thura naing",
                    "city":"mandalay"
                },
                {
                    "id":5,
                    "name":"myint aung",
                    "city":"yangon"
                }
            ]
        };
    }
    render(){


        return(

            <div>
                <Article />
                <ul>
                    {
                        this.students.data.map((student,idx)=><Post key={idx.toString()} senddata={student}/>)
                    }
                    
                </ul>
            </div>
    
        ) 
    }
}


const Article = ()=>{
    return(
        <div>
            <h3>This is Article Functional Component</h3>
            <p>Hello World!</p>
        </div>
    )
}

class Post extends React.Component{
    render(){

        return(
            <div>
                <li>{this.props.senddata.id} . {this.props.senddata.name} , {this.props.senddata.city}</li>
            </div>
        )
    }
}

export default GridOne;