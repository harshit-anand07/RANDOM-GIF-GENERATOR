import Random from "./components/Random"
import Tag from "./components/Tag"
export default function App() {
  return(
    <div className="w-full  flex flex-col background relative items-center">
      <div className="bg-white w-11/12 text-center text-4xl font-bold rounded-lg mt-[40px]">RANDOM GIFS</div>
      <div className="flex flex-col w-full items-center gap-y-10 mt-[30px]">
        <Random/>
        <Tag/>
      </div>
    </div>
  ) 

}
