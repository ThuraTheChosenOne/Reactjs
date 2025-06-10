// import React from "react";
// import { useParams } from "react-router-dom";//to call parameter from route

// const ProductDetail=()=>{
//     // 'id' should mathc the route para name
//     const {name,id} = useParams();
//     // console.log(id);//{name: 'redbull', id: '1001'}
//     return(
//         <div>
//             <h1>Product Detail</h1>

//             <p>Dynamic Routing and Route Single Parameter</p>
//             <p>Route passing data product name is {name} and id is {id}</p>

            
//         </div>
//     )
// }
// export default ProductDetail;








// import React from "react";
// import { useParams } from "react-router-dom";//to call parameter from route

// const ProductDetail=()=>{
//     // 'id' should mathc the route para name
//     const param = useParams();//{name: 'redbull', id: '1001'}
    
//     return(
//         <div>
//             <h1>Product Detail</h1>

//             <p>Dynamic Routing and Route Single Parameter</p>
//             <p>Route passing data product name is {param.name} 
//             and id is {param.id}</p>

            
//         </div>
//     )
// }
// export default ProductDetail;


import React from "react";
import { useParams } from "react-router-dom";//to call parameter from route

function ProductShow({name,id}){
    console.log("name =>" ,name);
    console.log("id =>" ,id);

    return(
            <div>
                <h1>Product Detail</h1>

                <p>Dynamic Routing and Route Single Parameter</p>
                <p>Route passing data product name is {name} 
                and id is {id}</p>

                
            </div>
    )
}
const ProductDetail=(props)=>{
    
    const {name,id} = useParams();//{name: 'redbull', id: '1001'}
    
    return <ProductShow name={name} id={id}/>
}
export default ProductDetail;