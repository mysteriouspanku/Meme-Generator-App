import React, { useEffect, useState } from "react";
import MemeCard from "../components/Card";
import { getAllMemes } from "../api/meme";
const Homepage=()=>{
    const [data,setdata]=useState([])
    useEffect(()=>{
        getAllMemes().then((memes)=>setdata(memes.data.memes))
    },[])
    return(
        <div className="row" >
            {
                data.map((e)=> <MemeCard img={e.url} title={e.name} />)
            }
        </div>
    );
}

export default Homepage;