import NavBar from "../components/NavBar";
import Header from "./components/Header";
import RestaurantCard from "./components/RestaurantCard";
import SearchSideBar from "./components/SearchSideBar";
import Head from "./head";

export default function Search(){
    return(
      <>
      <Head/>
      <Header/>
      <div className="flex py-4 m-auto w-2/3 justify-between items-start text-black">
        <SearchSideBar/>
        <div className="w-5/6">
        <RestaurantCard/>
        </div>
      </div>
    </>
    )
}