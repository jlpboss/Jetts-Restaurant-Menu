"use client"
import Navbar from "./Componets/Navbar/navbar"
import "bootstrap/dist/css/bootstrap.css"
import "bootstrap/dist/js/bootstrap.min.js"
import SelectionBar from "./Componets/SelectionBar/selectionBar"
import React, { useState, useEffect } from "react"
import ContainerOfCards from "./Componets/ItemCards/containerOfCards"
import sortMenuWithChecked from "./Componets/ApiRelated/sortMenuWithChecked"
import makeApiCall from "./Componets/ApiRelated/makeApiCall"

export default function Home() {
  let [checkedItems, setcheckedItems] = useState([])

  //console.log(checkedItems)

  let fullMenu = makeApiCall()

  console.log(fullMenu)

  let currMenu = []
  
  useEffect(() => {
  currMenu = sortMenuWithChecked(fullMenu.data, checkedItems)
  }, [fullMenu])



  function checkCallback(e){
    let temp = [...checkedItems];
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

  useEffect(() => {
    console.log("page rendered on checkedItems change")
    console.log(checkedItems);

  }, [checkedItems])

  useEffect(() => {
    console.log("page rendered on load")
    console.log(checkedItems);

  }, [])
  
  function componentDidUpdate(p){
    console.log(p);
  }

  return (
    <>
    <Navbar />
    <SelectionBar
      checkHandler={checkCallback}
      checkedItems={checkedItems}
    />
    <ContainerOfCards 
      goodItems={currMenu}
    />
    </>
  )
}
