import { useState } from "react"

function Light(){
    const [color , setColor]= useState(false)
    const handleONButton = () => {
        setColor (true)
    }
    
    const handleOFFButton =() => {
        setColor (false)
    }

    return <div className="sm:ml-[35%]">
       <div  style={{backgroundColor:color === true ? "yellow" :""}} className="border-2 border-black rounded-full sm:w-[400px]  w-full h-[400px] sm:h-[400px] mt-10">

       </div>
      <div>

        <button style={{backgroundColor:color  === true? "blue" :""}} onClick={handleONButton} className="bg-green-500  hover:bg-white hover:text-black hover:border-2  border-black px-10 py-2 text-white rounded ml-20 my-10">ON</button>
        <button style={{backgroundColor:color  === false? "yellow" :""}} onClick={handleOFFButton} className="bg-red-500 hover:bg-white hover:text-black hover:border-2  border-black px-10 py-2 text-white rounded mx-3">OFF</button>
        </div>
    </div>
}
export default Light