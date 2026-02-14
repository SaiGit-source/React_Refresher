
import HotelBlock from "./HotelBlock";
// HotelBlock as Client component, so we can use Image component inside it.

async function getData(){
    const res = await fetch('https://snowtooth-hotel-api.fly.dev');
    return res.json();
}


export default async function Page(){
    const hotels = await getData();
    return (
        <main>
            <div>
            <h1>Hotels Details</h1>
            {/* <div>{JSON.stringify(hotels)}</div> */}
            {hotels.map((hotel) => (
                <HotelBlock 
                key={hotel.id}
                id={hotel.id} 
                name={hotel.name} 
                capacity={hotel.capacity} />
            ))}
            </div>
        </main>
    )
}