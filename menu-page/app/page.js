"use client"
import Navbar from "./Componets/Navbar/navbar"
import "bootstrap/dist/css/bootstrap.css"
import "bootstrap/dist/js/bootstrap.min.js"
import SelectionBar from "./Componets/SelectionBar/selectionBar"
import React, { useState, useEffect } from "react"
import ContainerOfCards from "./Componets/ItemCards/containerOfCards"
import sortMenuWithChecked from "./Componets/ApiRelated/sortMenuWithChecked"
import makeApiCall from "./Componets/ApiRelated/makeApiCall"
import styles from "./page.module.css"

export default function Home() {
  let [checkedItems, setcheckedItems] = useState([])
  let [fullMenu, setFullMenu] = useState([])
  let [currMenu, setCurrMenu] = useState([])

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await makeApiCall();
        setFullMenu(response.data); // Set data from the response to fullMenu
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  }, []);


  console.log(fullMenu)


  useEffect(() => {
    if (fullMenu != undefined){
      setCurrMenu(sortMenuWithChecked(fullMenu, checkedItems))
    }
  }, [checkedItems])




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

  // useEffect(() => {
  //   console.log("page rendered on checkedItems change")
  //   console.log(checkedItems);

  // }, [checkedItems])



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
