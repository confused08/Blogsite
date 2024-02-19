import "./blog.css"
import { CardSingle } from "./CardSingle"
import React, { useEffect, useState } from "react"
import axios from "axios"
import { useLocation } from "react-router-dom"
export const Blogs = () => {
      const [posts, setPosts] = useState([])

  // setp 2
  const { search } = useLocation()
  // const location = useLocation()
  //console.log(location)

  useEffect(() => {
    const fetchPost = async () => {
      const res = await axios.get(process.env.REACT_APP_API+"/posts" + search)
      setPosts(res.data)
    }
    fetchPost()
  }, [search])
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