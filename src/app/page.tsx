
import Header from "./components/Header";
import RestaurantCard from "./components/RestaurantCard";
import Head from "./head";
import { PrismaClient, Cuisine, Location, PRICE, Review} from "@prisma/client";

export interface RestaurantCardType {
  id: number;
  name:string;
  main_image: string;
  cuisine: Cuisine,
  location:Location,
  price: PRICE, 
  slug:string;
  reviews:Review[]
}
const prisma = new PrismaClient()

const fetchRestaurants= async (): Promise<RestaurantCardType[]> => {
  const restaurants= await prisma.restaurant.findMany({
    select:{
      id:true,
      name:true,
      main_image:true,
      cuisine:true,
      slug:true,
      location:true,
      price:true,
      reviews:true
    },
  });

  return restaurants;
};
export default async function Home() {
  
  const restaurants = await fetchRestaurants();
  console.log({restaurants});
  return (
    
      <main>
        <Head/>
        <Header/>
        <div className="py-3 px-36 mt-10 flex flex-wrap text-black">
        {restaurants.map((restaurant) => (
          <RestaurantCard restaurant={restaurant}/>
        ))}
        </div>
      </main>
    
  );
}


//WtX7epE3sNSQOAg7   postgress password