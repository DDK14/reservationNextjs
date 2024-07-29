import NavBar from "@/app/components/NavBar";
import Link from "next/link";
import Header from "./components/Header";
import Form from "./components/Form";

export default function Reserve(){
    return(
        <main className="w-screen min-h-screen bg-gray-100">
    <main className="max-w-screen-2xl m-auto bg-white">
      <NavBar/>
      <div className="border-t h-screen">
        <div className="py-9 w-3/5 m-auto text-black">
          <Header/>
          <Form/>
        </div>
      </div>
      </main>
      </main>
    )
}