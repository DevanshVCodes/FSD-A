import { useState } from "react";
import img from "./Images/img.avif";

const ImageEditor = () => {
    const[width,setWidth] = useState(600);
    const[height,setHeight] = useState(400);
  return (
    <div>
        <img src={img} style={{width: `${width}px`, height:`${height}px`}}/>
        <button
            onClick={()=>{
                setWidth(width+10);
            }}>Increase Width</button>

        <button
            onClick={()=>{
                setHeight(height+10);
            }}>Increase Height</button>
    </div>
  );
};
export default ImageEditor;