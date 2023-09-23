// import Link from 'next/link'
"use client"
import '../globals.css'

// import styles from './Home.module.css';
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

   <div class="container" style={{marginLeft:"645px", marginBottom:"-390px",transform: 'translateY(30px)'}}>
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
							style={{ width: "18px", cursor: "pointer" , color:"#014F86" }}
						/>{" "} <span>Page Properities</span>
            <hr />
            
            <br></br>
           <a href="/selectcategory" >Parent</a>  
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
    
        <option selected>Open this select menu</option>
        <option value="1">One</option>
        <option value="2">Two</option>
        <option value="3">Three</option>
      </select>
      <br></br>
      <a href="/selectcategory" >Models</a>  
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
    
        <option selected value="8">Open this select menu</option>
        <option value="4">One</option>
        <option value="5">Two</option>
        <option value="6">Three</option>
      </select>
      <br></br>
<label>arrangement</label>
<br></br>
<input  type='text' style={{width:"100%",  height:"30px", border:"1px solid #014F86",color:"black",borderRadius:"5px"}}></input>
<br></br>
<a style={{fontSize:"15px"}}>Need help? Use the Help tab above the screen title.</a>
     </div> 
    </div>
      {children}</body>
    </html>
  )
}
