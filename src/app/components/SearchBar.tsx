"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function SearchBar() {
    const router=useRouter();
    const [location, setLocaiton]=useState("");
  return (
    <div className="text-left  text-lg py-3 m-auto flex justify-center text-black">
              <input className="rounded mr-3  p-2 w-[450px]"
                type="text" 
                placeholder="State, city or town" 
                value={location}
                onChange={(e)=>setLocaiton(e.target.value)}  
              />
              <button className=" rounded bg-red-600 px-9 py-2 text-white" 
                onClick={()=> {
                  if(location=== "") return;
                  router.push(`/search?city=${location}`);
                  setLocaiton("");
                }}>
                Lets's go
              </button>
            </div>
  )
}
