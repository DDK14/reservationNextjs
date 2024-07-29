export default function SearchSideBar(){
    return(
        <div className="w-1/5">
          <div className="border-b pb-4">
            <h1 className="mb-2">Region</h1>
            <p className="font-light text-reg">Delhi</p>
            <p className="font-light text-reg">Punjab</p>
            <p className="font-light text-reg">Kerala</p>
            <p className="font-light text-reg">Bihar</p>
            <p className="font-light text-reg">Assam</p>
          </div>
          <div className="border-b pb-4 mt-3">
            <h1 className="mb-2">Cuisine</h1>
            <p className="font-light text-reg">South</p>
            <p className="font-light text-reg">Chinese</p>
            <p className="font-light text-reg">Mexican</p>
          </div>
          <div className="mt-3 pb-4">
            <h1 className="mb-2">Price</h1>
            <div className="flex">
              <button className="border rounded-l p-2 w-full text-reg font-light">$</button>
              <button className="border-r border-t border-b p-2 w-full text-reg font-light">$$</button>
              <button className="border-r rounded-r border-t border-b p-2 w-full text-reg font-light">$$$</button>
            </div>
          </div>
        </div>
    )
}