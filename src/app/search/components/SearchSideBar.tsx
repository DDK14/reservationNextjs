import { Cuisine, Location, PRICE } from "@prisma/client";
import Link from "next/link";

export default function SearchSideBar({locations , cuisines, searchParams}:{locations: Location[], cuisines : Cuisine[], searchParams:{city?:string, cuisine?:string , price?:PRICE}}){
  const prices=[{
    price:PRICE.CHEAP,
    label: "$",
    className:"border rounded-l p-2 w-full text-center text-reg font-light"
  },{price:PRICE.REGULAR,
    label: "$$", className:"border  p-2 w-full text-center text-reg font-light"} ,
  {price:PRICE.EXPENSIVE,
    label: "$$$", className:"border rounded-r text-center p-2 w-full text-reg font-light"}]  
  return(
        <div className="w-1/5">
          <div className="border-b pb-4 flex flex-col">
            <h1 className="mb-2">Region</h1>
            {locations.map(location=> (
              <Link className="font-light text-reg capitalize" key={location.id} href={{
                pathname: "/search",
                query:{
                  ...searchParams,
                  city: location.name
                }
              }}>{location.name}</Link>
            ))}
          </div>
          <div className="border-b pb-4 mt-3 flex flex-col">
            <h1 className="mb-2">Cuisine</h1>
            {cuisines.map(cuisine=> (
              <Link href={{
                pathname: "/search",
                query:{
                  ...searchParams,
                  cuisine:cuisine.name
                }
              }} className="font-light text-reg capitalize" key={cuisine.id}>{cuisine.name}</Link>
            ))}
           
          </div>
          <div className="mt-3 pb-4">
            <h1 className="mb-2">Price</h1>
            <div className="flex">
              {prices.map(({price, label,className}) =>(
                <Link href={{
                  pathname: "/search",
                  query:{
                    ...searchParams,
                    price,
                  }
                }} className={className}>
                  {label}
                </Link>
              ))}
              
            </div>
          </div>
        </div>
    )
}