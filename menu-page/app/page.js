"use client"
import Navbar from "./Componets/Navbar/navbar"
import "bootstrap/dist/css/bootstrap.css"
import "bootstrap/dist/js/bootstrap.min.js"
import SelectionBar from "./Componets/SelectionBar/selectionBar"
import React, { useState } from "react"
import ItemCard from "./Componets/ItemCards/itemCard"

export default function Home() {
  const [checkedItems, setcheckedItems] = useState([])

  console.log(checkedItems)



  


  function checkCallback(e){
    let temp = checkedItems;
    if (temp.includes(e.target.id)){
      for(let item in temp){ 
        if (temp[item] === e.target.id) { 
          temp.splice(item, 1); 
        }
      }
    } else {
      temp.push(e.target.id)
    }
    // if the temp array contains a duplicate of the item we wish to enter
    // remove the item
    // else push into the array the new item
    console.log(temp)
    setcheckedItems(temp)
  }
  
  return (
    <>
    <Navbar />
    <SelectionBar
      checkHandler={checkCallback}
      checkedItems={checkedItems}
    />
    </>
  )
}
