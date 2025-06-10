import React, { use } from "react";
import { useSearchParams,useLocation } from "react-router-dom";

const ProductList=()=>{

    //for single query
    const [searchParams] = useSearchParams();

    // console.log(searchParams);searchParams
    // console.log(searchParams.get("q"));//reactjs
    console.log(searchParams.get("keyword"));
    console.log(searchParams.get("batch"));
    console.log(searchParams.get("fee"));


    //for multi concate search query result
    // const location = useLocation();
    // // console.log(location);
    // console.log(location.search);
    return(
        <div>
            <h1>Product List by query</h1>

            <p>Dynamic Routing and Route Query </p>
          

            
        </div>
    )
}
export default ProductList;