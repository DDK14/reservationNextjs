import Link from "next/link";

export default function RestaurantCard(){
    return(
        <div className="border-b flex p-5">
            <img src="https://i.pinimg.com/236x/35/54/53/355453e3547b9fc7bc8450447476c92a.jpg" className="w-44 rounded" alt="" />
            <div className="pl-5">
              <h2 className="text-3xl">AlaCarte Restaurant</h2>
              <div className="flex items-start">
                <div className="flex mb-2">
                  *****
                </div>
                <p className="ml-2 text-sm">Awesome</p>
              </div>
              <div className="mb-9">
                <div className="font-light flex tet-reg">
                  <p className="mr-4">$$$</p>
                  <p className="mr-4">Mexican</p>
                  <p className="mr-4">Delhi</p>
                </div>
              </div>
              <div className="text-red-600">
                <Link href="/restaurant/fine-dine">View more information</Link>
              </div>
            </div>
          </div>
    )
}