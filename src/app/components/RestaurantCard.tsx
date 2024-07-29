import Link from "next/link";

export default function RestaurantCard(){
    return(
        <div className="w-64 h-72 m-3 rounded overflow-hidden border cursor-pointer">
            <Link href="/restaurant/fine-dine">
            <img src="https://i.pinimg.com/736x/a2/96/a6/a296a615dfb868ea52ac143e31b7cc05.jpg" 
            alt="" className="w-full h-36" />
            <div className="p-1">
              <h3 className="font-bold text-2xl mb-2">Fine Dine</h3>
              <div className="flex items-start">
                <div className="flex mb-2 font ">****</div>
                <p className="ml-2">77 reviews</p>
              </div>
              <div className="flex text-reg font-light capitalize">
              <p className=" mr-3 ">Indian</p>
              <p className="mr-3">$$$</p>
              <p>Delhi</p>
              </div>
              <p className="text-sm mt-1 font-bold">Booked 3 times today</p>
            </div>
            </Link>
          </div>
    )
}