import NavBar from "../components/NavBar";
import Header from "./components/Header";
import RestaurantCard from "./components/RestaurantCard";
import SearchSideBar from "./components/SearchSideBar";

export default function Search(){
    return(
        <main className="w-screen min-h-screen bg-gray-100">
    <main className="max-w-screen-2xl m-auto bg-white">
      <NavBar/>
      <Header/>
      <div className="flex py-4 m-auto w-2/3 justify-between items-start text-black">
        <SearchSideBar/>
        <div className="w-5/6">
        <RestaurantCard/>
        </div>
      </div>

      </main>
      </main>
    )
}