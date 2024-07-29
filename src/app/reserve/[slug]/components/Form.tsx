
export default function Form() {
  return (
    <div className="mt-10 flex flex-wrap justify-between w-[660px]">
            <input type="text" className="border rounded p-3 w-80 mb-4" placeholder="First Name"/>
            <input type="text" className="border rounded p-3 w-80 mb-4" placeholder="Lasr Name"/>
            <input type="text" className="border rounded p-3 w-80 mb-4" placeholder="Phone Number"/>
            <input type="text" className="border rounded p-3 w-80 mb-4" placeholder="Email"/>
            <input type="text" className="border rounded p-3 w-80 mb-4" placeholder="Occasion (optional)"/>
            <input type="text" className="border rounded p-3 w-80 mb-4" placeholder="Requests (optional)"/>
            <button className="bg-red-600 w-full p-3 text-white font-bold rounded disabled:bg-gray-300">Complete Reservation</button>
            <p className="mt-4 text-sm">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Optio, vitae?</p>
          </div>
  )
}
