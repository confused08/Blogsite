import { useState,useEffect
 } from "react";
import axios from 'axios'
import { useLocation } from "react-router-dom"
import { Card } from "../blog/Card";

export default function CategoryPage(props){
    const  {catPosts} = props.location.state;
    console.log('hi ',catPosts)
    return(
       <Card posts={catPosts}/>
    )
}