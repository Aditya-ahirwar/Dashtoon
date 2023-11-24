import { useState, useEffect, useCallback } from "react";
import styled from "styled-components";
import '../style.css'



const Panel = ({val}) =>{

    const [imgURL, setUrl] = useState('');
    


    const  query = useCallback( async (data) => {
        console.log("waiting")
        const response = await fetch(
            "https://xdwvg9no7pefghrn.us-east-1.aws.endpoints.huggingface.cloud",
            {
                headers: { 
                    "Accept": "image/png",
                    "Authorization": "Bearer VknySbLLTUjbxXAXCjyfaFIPwUTCeRXbFSOjwRiCxsxFyhbnGjSFalPKrpvvDAaPVzWEevPljilLVDBiTzfIbWFdxOkYJxnOPoHhkkVGzAknaOulWggusSFewzpqsNWM", 
                    "Content-Type": "application/json" 
                },
                method: "POST",
                body: JSON.stringify(data),
            }
        );
        const result = await response.blob();
        
        return result;
    })
    

    
    
    useEffect( () => {
        query({"inputs": `${val}`}).then((response) => {
            console.log(response);
            let imageUrl = URL.createObjectURL(response)
            console.log(imageUrl);
            setUrl(imageUrl);
            // imgURL = imageUrl;
            console.log("done : " + val)
        })
    }, [])


        if(val === ''){
        return (
            <img src="https://www.gravatar.com/avatar/4d01418a8a1c0242dafc40aadc17c9a4?s=256&d=identicon&r=PG&f=y&so-version=2" alt="" />
        )
    }
    
    
    return (
        
        <div className="panel-container">
            <img src= {imgURL}/>
            {/* <img src="https://www.gravatar.com/avatar/4d01418a8a1c0242dafc40aadc17c9a4?s=256&d=identicon&r=PG&f=y&so-version=2" alt="" /> */}
        </div>
    )
}

export default Panel;