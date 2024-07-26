import Image from "next/image";

export default function Home() {
  return (
    <main className="w-screen min-h-screen bg-gray-100">
    <main className="max-w-screen-2xl m-auto bg-white">
      {/* navbar */}
      <nav className="bg-white p-2 flex justify-between">
        <a href="" className="font-bold text-gray-700 text-2xl">OpenTable</a>
        <div>
          <div className="flex">
            <button className="bg-blue-400 text-white border p-1 px-4 rounded mr-3">Sign in</button>
            <button className=" text-black border p-1 px-4 rounded">Sign up</button>
          </div>
        </div>
      </nav>
      {/* navbar */}
      {/* 2header */}
      <div className="h-96 overflow-hidden">
        <div className="bg-center bg-gradient-to-r from-[#0f1f47] to-[#5f6984] h-full flex justify-center items-center">
          <h1 className="text-white text-7xl text-center text-shadow capitalize">
            Fine Dine (Delhi)
          </h1>
        </div>
      </div>
      {/* 2header */}
      {/* description portion */}
      <div className=" flex m-auto w-2/3 justify-between items-start 0 -mt-11 text-black">
        <div className="bg-white w-[70%] rounded p-3 shadow">
          {/* rest nav */}
          <nav className="flex text-reg border-b pb-2 text-black">
            <a href="" className="mr-7">Overview</a>
            <a href="" className="mr-7">Menu</a>
          </nav>
          {/* rest nav */}
          {/* title */}
          <div className="mt-4 border-b pb-6 ">
            <h1 className="font-bold text-6xl">Fine Dine</h1>
          </div>
          {/* title */}
          {/* ratings */}
          <div className="flex items-end">
            <div className="ratings mt-2 flex items-center">
              <p>*****</p>
              <p className="text-reg ml-3 ">4.8</p>
            </div>
            <div>
              <p className="text-reg ml-4">600 Reveiws</p>
            </div>
          </div>
          {/* ratings */}
          {/*description  */}
          <div className="mt-4">
            <p className="text-lg font-light">Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo at repellendus ipsum quasi cum quas, deleniti porro sunt asperiores dolore quis in voluptas accusantium? Ad ipsam iusto veniam qui reprehenderit.</p>
          </div>
          {/*description  */}
          {/* Images */}
          <div >
            <h1 className="font-bold text-3xl mt-10 mb-7 border-b pb-5">5 photos</h1>
            <div className="flex flex-wrap">
            <img src="https://i.pinimg.com/236x/4e/ad/50/4ead50d3b84b3ecea791b32c43f16476.jpg" alt=""  className="w-56 h-44 mr-1 mb-1"/>
            <img src="https://i.pinimg.com/236x/7c/5a/78/7c5a787efa7538d94fa50ff93dbb2315.jpg" alt=""  className="w-56 h-44 mr-1 mb-1"/>
            <img src="https://i.pinimg.com/236x/cd/c7/86/cdc7866a98fc8bd3614038c2011859ff.jpg" alt=""  className="w-56 h-44 mr-1 mb-1"/>
            <img src="https://i.pinimg.com/236x/06/ab/9d/06ab9d411971f15ac5474615d669bc78.jpg" alt=""  className="w-56 h-44 mr-1 mb-1"/>
            <img src="https://i.pinimg.com/236x/3f/23/f3/3f23f328b8295cfdcf963556d0029207.jpg" alt=""  className="w-56 h-44 mr-1 mb-1"/>
            </div>
          </div>
          {/* Images */}
          {/* Reveiws */}
          <div>
            <h1 className="font-bold text-3xl mt-10 mb-7 border-b pb-5">
              What 100 people are saying
            </h1>
            <div>
              {/* review card */}
              <div className="border-b pb-7 mb-7">
                <div className="flex">
                  <div className="w-1/6 flex flex-col items-center">
                    <div className="rounded-full bg-blue-400 w-16 h-16 flex items-center justify-center">
                      <h2 className="text-white text-2xl">MJ</h2>
                    </div>
                    <p className="text-center">Micheal Jordan</p>
                  </div>
                  <div className="ml-10 w-5/6">
                    <div className="flex items-center">
                      <div className="flex mr-5">
                        *****
                      </div>
                    </div>
                    <div className="mt-5">
                      <p className="text-light font-light">Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident ut nam aliquid minus dicta quae maiores fugiat soluta ipsum officiis?</p>
                    </div>
                  </div>
                </div>
              </div>
              {/* review card */}
            </div>
          </div>
          {/* Reveiws */}
        </div>
      </div>
      {/* description portion*/}

      </main>
      </main>
  );
}
