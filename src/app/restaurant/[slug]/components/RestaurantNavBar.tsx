import Link from "next/link";

export default function RestaurantNavBar(){
    return(
        <nav className="flex text-reg border-b pb-2 text-black">
            <Link href="/restaurant/fine-dine" className="mr-7">Overview</Link>
            <Link href="/restaurant/fine-dine/menu" className="mr-7">Menu</Link>
          </nav>
    )
}