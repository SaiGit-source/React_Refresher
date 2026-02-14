"use client";
import Image from "next/image";
// HotelBlock as Client component, so we can use Image component inside it.

export default function HotelBlock({id, name, capacity}){
    const imageLoader = ({src}) => {
        return `./hotels/${src}.jpeg`;
    }

    return (
        <div> 
            <h2>{name}</h2>
            <p>{capacity}</p>
            <Image 
            src={id} 
            width={300} 
            height={300} 
            alt={name}
            loader={imageLoader} 
            />
        </div>
    );
}      