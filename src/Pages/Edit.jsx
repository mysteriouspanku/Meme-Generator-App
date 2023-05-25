import React, { useState, createRef } from "react";
import { useSearchParams } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Text from "../components/Text";
import { exportComponentAsJPEG } from "react-component-export-image";
const EditPage=()=>{
        const [params]= useSearchParams();
        const [count, setCount]=useState(0);
        const memeRef= createRef();
        const addText =()=>{
            setCount(count+1);
        };
        return(
            <div className="container"  >
                <div style={{width: "800px", border:"2px solid"}} ref={memeRef} className="meme ">
                <img src={params.get("url")} height="500px" />
                {
                    Array(count).fill(0).map(e => <Text/>)
                }
                </div>
                
                <Button onClick={addText} variant="outline-danger">Add Text</Button>
                <Button  variant="outline-success" onClick={(e)=>exportComponentAsJPEG(memeRef)}>Save</Button>
                
                
            </div>
        );
};

export default EditPage;