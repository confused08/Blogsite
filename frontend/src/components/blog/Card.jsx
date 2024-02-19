import React from "react"
import "./blog.css"
import { blog } from "../../assets/data/data"
import { AiOutlineTags, AiOutlineClockCircle, AiOutlineComment, AiOutlineShareAlt } from "react-icons/ai"
import { Link } from "react-router-dom"
import { CardSingle } from "./CardSingle"

export const Card = ({ posts }) => {
  
  const PublicFlo = process.env.REACT_APP_API+"/images/"
  return (
    <>
      <section className='blog'>
        <div className='container grid3'>
          {posts.map((item) => (
            <CardSingle item={item}/>
          ))}
        </div>
      </section>
    </>
  )
}
