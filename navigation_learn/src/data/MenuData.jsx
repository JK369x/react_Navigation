import React from 'react'
import { FaUserAlt, FaHome, FaShoppingCart } from "react-icons/fa";
export const MenuData = [
    {
        title:'Home',
        path:'/',
        icon:<FaHome/>
    },
    {
        title:'Member',
        path:'/member',
        icon:<FaUserAlt/>
    },
    {
        title:'Product',
        path:'/product',
        icon:<FaShoppingCart/>
    },
  
]