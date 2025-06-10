import React from "react";
import { useNavigate } from "react-router-dom";

const Newsletter=()=>{
    const navigate = useNavigate();
    const clickHandler =()=>{
        console.log("I am newsletter");
        return navigate('/home');
    };
    return(
        <div>
            <h1>Newsletter</h1>

            <p>As there are many languages in the World, you can choose from a variety of base texts so you cover not only normal letters but also accents, special characters and other alphabets.
            As there are many languages in the World, you can choose from a variety of base texts so you cover not only normal letters but also accents, special characters and other alphabets.
          
            </p>

            <p>As there are many languages in the World, you can choose from a variety of base texts so you cover not only normal letters but also accents, special characters and other alphabets.
            As there are many languages in the World, you can choose from a variety of base texts so you cover not only normal letters but also accents, special characters and other alphabets.
            
            </p>

            <p>As there are many languages in the World, you can choose from a variety of base texts so you cover not only normal letters but also accents, special characters and other alphabets.
            As there are many languages in the World, you can choose from a variety of base texts so you cover not only normal letters but also accents, special characters and other alphabets.
           
            </p>

            <button type="button" onClick={clickHandler}>Back To Home</button>
        </div>
    )
}
export default Newsletter;