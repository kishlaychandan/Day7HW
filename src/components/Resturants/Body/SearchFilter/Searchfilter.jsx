import React, { useState } from 'react'
import './Searchfilter.css'
import Cards from '../Cards/Cards';
function Searchfilter({data,setData}) {
    const[search,setSearch]=useState("");
    const[rating,setRating]=useState(0);
    
    console.log("searchfilter Data",data);
    let newData = data.filter((item) => {
        return item.name.toLowerCase().includes(search.toLowerCase()) && item.rating >= rating;
    });
    console.log("Filtered data:", newData);
    // setDatas(newData);
    // setData(newData);

  return (
    <>
    <div className="Searchfilter">
        <div className="input">
            <input className='search' type="text" placeholder="Search for restaurants" onChange={(e)=>{setSearch(e.target.value)}}/>
            <label htmlFor="rating">Minimum Rating: 
              <input className='rating' type="number" onChange={(e)=>{if(e.target.value>=0){setRating(e.target.value)}}} />
            </label>
            </div>
        <Cards data={newData}/>
    </div>
    </>
  )
}

export default Searchfilter