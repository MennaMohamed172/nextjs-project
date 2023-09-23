// import Link from 'next/link'
"use client"
import '../globals.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { Inter } from 'next/font/google'
import Sidebar from '../Sidebar'
import {
	 faCaretDown,
   faMapPin,
   faEye,
   faCalendar,
} from "@fortawesome/free-solid-svg-icons";
import React,{useState} from 'react';
const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'مقالات مركز مشهور خبراء العيون',
  description: 'مركز مشهور خبراء العيون',
}

export default function RootLayout({ children }) {
  const [selectedVegs, setSelectedVegs] = useState(['corn', 'tomato']);

  return (
    <html lang="en">
      <body className={inter.className}>
      <Sidebar />

      <div class="container" style={{marginLeft:"645px", transform: 'translateY(30px)'}}>
        <div class="square1" style={{ border:"1px solid #014F86",borderRadius:"5px", width:" 350px",padding:"10px",backgroundColor: "white",color:"#014F86",marginBottom:"20px",marginLeft:"340px"}}>
        <FontAwesomeIcon
							icon={faCaretDown}
							style={{ width: "18px", cursor: "pointer" , color:"#014F86" }}
						/>{" "} <span>Pubblish</span>
            <hr />
          
           <button style={{ border:"1px solid white",width:"100px",height:"20px",backgroundColor:"#014F86",color:"white",borderRadius:"5px", cursor: "pointer", border:"1px solid white" }}>Draft</button>        
           <button style={{ border:"1px solid white",width:"100px",height:"20px",backgroundColor:"#014F86",color:"white",borderRadius:"5px", cursor: "pointer" ,border:"1px solid white" }}><a href='https://mshhor.com/'>Preview</a></button>
           <br></br>
           <FontAwesomeIcon
							icon={faMapPin}
							style={{ width: "18px", cursor: "pointer" , color:"#014F86" }}
						/>{" "} <span>status: draft Release</span>
            <br></br>
            <FontAwesomeIcon
							icon={faEye}
							style={{ width: "18px", cursor: "pointer" , color:"#014F86" }}
						/>{" "} <span>appear	public Release</span>
            <br></br>
             <FontAwesomeIcon
							icon={faCalendar}
							style={{ width: "18px", cursor: "pointer" , color:"#014F86" }}
						/>{" "} <span>Publishing immediately	Release</span>
            <hr></hr>
            <button style={{ border:"1px solid white",width:"100px",height:"20px",backgroundColor:"#014F86",color:"white",borderRadius:"5px", cursor: "pointer" , border:"1px solid white",}}>Publish</button>        
            <a href='#' style={{textDecoration:"underline"}}>Move To Trash</a>        



        </div>
      
        <div class="square2" style={{ border:"1px solid #014F86",borderRadius:"5px", width:" 350px",padding:"10px",backgroundColor: "white",color:"#014F86",marginBottom:"20px",marginLeft:"340px"}}>
        <FontAwesomeIcon
							icon={faCaretDown}
							style={{ width: "10px", cursor: "pointer" , color:"#014F86" }}
						/>{" "} <span>Tags</span>
            <hr />
            <input style={{ border:"1px solid #014F86",color:"black",borderRadius:"5px"}}></input>
            <button style={{ border:"1px solid white",width:"100px",height:"20px",backgroundColor:"#014F86",color:"white",borderRadius:"5px", cursor: "pointer" , border:"1px solid white"}}>Add</button>        
           <br></br>
           <span>seprate between tags </span>
            <br></br>
           <a href="#">choose from most used tags</a>
            


        </div>

         <div class="square3"  style={{ border:"1px solid #014F86",borderRadius:"5px", width:" 350px",padding:"10px",backgroundColor: "white",color:"#014F86",marginBottom:"20px",marginLeft:"340px"}}>
        <FontAwesomeIcon
							icon={faCaretDown}
							style={{ width: "10px", cursor: "pointer" , color:"#014F86" }}
						/>{" "} <span>Categories</span>
            <hr />
            <input type='text' style={{ border:"1px solid #014F86",borderRadius:"5px"}}></input>
            <button style={{ border:"1px solid white",width:"100px",height:"20px",backgroundColor:"#014F86",color:"white",borderRadius:"5px", cursor: "pointer" }}>Add</button>        
            <br></br>
           <a href="/selectcategory" >All Categories</a>        <a href="#" style={{marginLeft:"40px"}}>Most Used</a> 
           <br></br>
        <select 
          className='selectcategory'
          multiple={true}
          style={{width:"320px",margin:"5px"}}
          value={selectedVegs}
          onChange={e => {
            const options = [...e.target.selectedOptions];
            const values = options.map(option => option.value);
            setSelectedVegs(values);
          }}
        >
          <option value="cucumber">Cucumber</option>
          <option value="corn">Corn</option>
          <option value="tomato">Tomato</option>
        </select>

            


        </div> 
        
    </div>

   
    
      {children}</body>
    </html>
  )
}
