import React, { use } from "react";
import { useParams } from "react-router-dom";

const Product=()=>{
    // 'id' should mathc the route para name
    const {id} = useParams();
    // console.log(id);//{id:1001}
    return(
        <div>
            <h1>Product</h1>

            <p>Dynamic Routing and Route Single Parameter</p>
            <p>Route passing data is {id}</p>

            
        </div>
    )
}
export default Product;