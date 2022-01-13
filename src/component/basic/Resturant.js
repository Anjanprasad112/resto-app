import React,{useState} from 'react'
import './style.css'
import Menu from './menuAPI.js'
import MenuCard from './MenuCard.js'
import Navbar from './Navbar.js'

const uniqueList =[
    ...new Set(Menu.map((curElem) =>{
    return curElem.category
}
)),"All"];
console.log(uniqueList)

const Resturant = () => {
    const [state, setstate] = useState(Menu)
    const [menulist, setMenulist] = useState(uniqueList)
    console.log(setstate)
    console.log(setMenulist)

const filterItem = (category) =>{
    if(category ==='All'){
        setstate(Menu)
        return;
    }
   
const updatedList = Menu.filter((curElem)=>{
        return curElem.category === category;
    });
    setstate(updatedList)
}
    return (
    <>
    <Navbar filterItem={filterItem} menulist={menulist}/>
    <MenuCard state={state}/>
    </>
    )
}

export default Resturant
