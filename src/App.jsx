import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [count, setCount] = useState(0)
  let [star1, setStar1] = useState(false)
  let [star2, setStar2] = useState(false)
  let [star3, setStar3] = useState(false)
  let [star4, setStar4] = useState(false)
  let [star5, setStar5] = useState(false)

  function handleClick(e){
    console.log(e.dataset);
    console.log(e);
    
    setStar1((prev)=>{
        console.log(prev);
        
        return star1=!prev
        
    })
    console.log(star1);
    
  }
  
  
  return (

    < >
   
      <div className='text-center '>
        <h1 className='text-xl font-bold'>How many stars would you give to our <br/>
        online code editor</h1>
       <div className='flex  justify-center'>
       <svg style={{fill:star1 === true ? "#fbbf24":"#d1d5db"}}   onClick={handleClick} className="h-16 w-16 text-center shrink-0 " viewBox="0 0 256 256">
        <path  value = "false"
            d="M239.2 97.4A16.4 16.4.0 00224.6 86l-59.4-4.1-22-55.5A16.4 16.4.0 00128 16h0a16.4 16.4.0 00-15.2 10.4L90.4 82.2 31.4 86A16.5 16.5.0 0016.8 97.4 16.8 16.8.0 0022 115.5l45.4 38.4L53.9 207a18.5 18.5.0 007 19.6 18 18 0 0020.1.6l46.9-29.7h.2l50.5 31.9a16.1 16.1.0 008.7 2.6 16.5 16.5.0 0015.8-20.8l-14.3-58.1L234 115.5A16.8 16.8.0 00239.2 97.4z">
        </path>
    </svg>
    <svg style={{fill:star2 === true ? "#fbbf24":"#d1d5db"}} onClick={()=>{if(star1){setStar2((prev)=>{ return star2=!prev})}}}  className="h-16 w-16 shrink-0 " viewBox="0 0 256 256">
        <path
            d="M239.2 97.4A16.4 16.4.0 00224.6 86l-59.4-4.1-22-55.5A16.4 16.4.0 00128 16h0a16.4 16.4.0 00-15.2 10.4L90.4 82.2 31.4 86A16.5 16.5.0 0016.8 97.4 16.8 16.8.0 0022 115.5l45.4 38.4L53.9 207a18.5 18.5.0 007 19.6 18 18 0 0020.1.6l46.9-29.7h.2l50.5 31.9a16.1 16.1.0 008.7 2.6 16.5 16.5.0 0015.8-20.8l-14.3-58.1L234 115.5A16.8 16.8.0 00239.2 97.4z">
        </path>
    </svg>
    <svg style={{fill:star3 === true ? "#fbbf24":"#d1d5db"}} onClick={()=>{if(star1 && star2){setStar3((prev)=>{ return star3=!prev})}}}   className="h-16 w-16 shrink-0 f" viewBox="0 0 256 256">
        <path
            d="M239.2 97.4A16.4 16.4.0 00224.6 86l-59.4-4.1-22-55.5A16.4 16.4.0 00128 16h0a16.4 16.4.0 00-15.2 10.4L90.4 82.2 31.4 86A16.5 16.5.0 0016.8 97.4 16.8 16.8.0 0022 115.5l45.4 38.4L53.9 207a18.5 18.5.0 007 19.6 18 18 0 0020.1.6l46.9-29.7h.2l50.5 31.9a16.1 16.1.0 008.7 2.6 16.5 16.5.0 0015.8-20.8l-14.3-58.1L234 115.5A16.8 16.8.0 00239.2 97.4z">
        </path>
    </svg>
    <svg style={{fill:star4 === true ? "#fbbf24":"#d1d5db"}} onClick={()=>{if(star1 && star2 && star3 ){setStar4((prev)=>{ return star4=!prev})}}}  className="h-16 w-16 shrink-0 " viewBox="0 0 256 256">
        <path
            d="M239.2 97.4A16.4 16.4.0 00224.6 86l-59.4-4.1-22-55.5A16.4 16.4.0 00128 16h0a16.4 16.4.0 00-15.2 10.4L90.4 82.2 31.4 86A16.5 16.5.0 0016.8 97.4 16.8 16.8.0 0022 115.5l45.4 38.4L53.9 207a18.5 18.5.0 007 19.6 18 18 0 0020.1.6l46.9-29.7h.2l50.5 31.9a16.1 16.1.0 008.7 2.6 16.5 16.5.0 0015.8-20.8l-14.3-58.1L234 115.5A16.8 16.8.0 00239.2 97.4z">
        </path>
    </svg>
    <svg style={{fill:star5 === true ? "#fbbf24":"#d1d5db"}} onClick={()=>{if(star1 && star2 && star3 && star4){setStar5((prev)=>{ return star5=!prev})}}}   className="h-16 w-16 shrink-0 " viewBox="0 0 256 256">
        <path
            d="M239.2 97.4A16.4 16.4.0 00224.6 86l-59.4-4.1-22-55.5A16.4 16.4.0 00128 16h0a16.4 16.4.0 00-15.2 10.4L90.4 82.2 31.4 86A16.5 16.5.0 0016.8 97.4 16.8 16.8.0 0022 115.5l45.4 38.4L53.9 207a18.5 18.5.0 007 19.6 18 18 0 0020.1.6l46.9-29.7h.2l50.5 31.9a16.1 16.1.0 008.7 2.6 16.5 16.5.0 0015.8-20.8l-14.3-58.1L234 115.5A16.8 16.8.0 00239.2 97.4z">
        </path>
    </svg>
       </div>
      {p()}
   
         {/* {star2 &&  }
        
        {star1 && <p>we sorry to here that you had a bad experience. We should
            like <br/> to learn more about what happend and how we can make things right</p> }

        {star1 && <p>we sorry to here that you had a bad experience. We should
              like <br/> to learn more about what happend and how we can make things right</p> }

         {star1 && <p>we sorry to here that you had a bad experience. We should
                    like <br/> to learn more about what happend and how we can make things right</p> } */}
       {star1}
      </div>
    </>
  )
}

export default App
