import { PRICE, PrismaClient } from "@prisma/client";
import NavBar from "../components/NavBar";
import Header from "./components/Header";
import RestaurantCard from "./components/RestaurantCard";
import SearchSideBar from "./components/SearchSideBar";
import Head from "./head";
import { equal } from "assert";
import Reviews from "../restaurant/[slug]/components/Reviews";

interface SearchParams {city?: string, cuisine?: string , price?: PRICE}

const prisma = new PrismaClient();
const fetchRestauranByCity = (searchParams :SearchParams) =>{
  const where:any= {};
  if(searchParams.city){
    const location= {
      name:{
        equals: searchParams.city.toLowerCase()
      }
    }
    where.location=location
  }
  if(searchParams.cuisine){
    const cuisine= {
      name:{
        equals: searchParams.cuisine.toLowerCase()
      }
    }
    where.cuisine=cuisine
  }
  if(searchParams.price){
    const price={
      equals : searchParams.price
    }
    where.price=price
  }
  const select ={
    
      id: true,
      name:true,
      main_image:true,
      cuisine:true,
      location:true,
      slug:true,
      price:true,
      reviews:true
  };

  return prisma.restaurant.findMany({
    where,
    select,
    
  })
  
};

const fetchLocations = async () => {
  return prisma.location.findMany()
}
const fetchCusines = async () => {
  return prisma.cuisine.findMany()
}

export default async function Search({searchParams}:{searchParams:SearchParams}){
const restaurants = await fetchRestauranByCity(searchParams)
const location = await fetchLocations()
const cuisine = await fetchCusines()
    return(
      <>
      <Head/>
      <Header/>
      <div className="flex py-4 m-auto w-2/3 justify-between items-start text-black">
        <SearchSideBar
        locations={location} cuisines={cuisine} searchParams={searchParams}
        />
        <div className="w-5/6">
        {restaurants.length ? (
          <>
          {restaurants.map((restaurant)=>(
            <RestaurantCard restaurant={restaurant} key={restaurant.id} />
          ))}
          </>
        ) :( <p className="font-bold">Sorry we found no restaurants in that area </p>) }
        </div>
      </div>
    </>
    )
}