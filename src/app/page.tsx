
import Header from "./components/Header";
import RestaurantCard from "./components/RestaurantCard";
import Head from "./head";
export default function Home() {
  return (
    
      <main>
        <Head/>
        <Header/>
        <div className="py-3 px-36 mt-10 flex flex-wrap text-black">
        <RestaurantCard/>
        </div>
      </main>
    
  );
}
