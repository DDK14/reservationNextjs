import NavBar from "@/app/components/NavBar";
import Link from "next/link";
import Header from "./components/Header";
import RestaurantNavBar from "./components/RestaurantNavBar";
import Title from "./components/Title";
import Rating from "./components/Rating";
import Description from "./components/Description";
import Images from "./components/Images";
import Reviews from "./components/Reviews";
import ReservationCard from "./components/ReservationCard";

export default function RestaurantDetails(){
    return(
        <main className="w-screen min-h-screen bg-gray-100">
    <main className="max-w-screen-2xl m-auto bg-white">
      <NavBar/>
      <Header/>
      {/* description portion */}
      <div className=" flex m-auto w-2/3 justify-between items-start 0 -mt-11 text-black">
        <div className="bg-white w-[70%] rounded p-3 shadow">
          <RestaurantNavBar/>
          <Title/>
          <Rating/>
          <Description/>
          <Images/>
          <Reviews/>
        </div>
        <div className="w-[27%] relative text-reg">
          <ReservationCard/>
        </div>

      </div>
      {/* description portion*/}
      

      </main>
      </main>
    )
}