import React, { useEffect } from "react"
import "./create.css"
import { IoIosAddCircleOutline } from "react-icons/io"
import { useState } from "react"
import { useContext } from "react"
import { Context } from "../../context/Context"
import axios from "axios"
import { useLocation } from "react-router-dom"
import { category } from "../../assets/data/data"

export const Create = () => {
  const [title, setTitle] = useState("")
  const [desc, setDesc] = useState("")
  const [file, setFile] = useState(null)
  const { user } = useContext(Context)
  const [categories,setCategories] = useState([]);
  const handleClick = (category)=>{
     if(categories.includes(category)){
      setCategories((prevcat) => prevcat.filter((x)=> x != category));
     }
     else{
      setCategories((prevcat)=>[...prevcat,category]);
     }
     console.log("hi")
  }
  const handleSubmit = async (e) => {
    e.preventDefault()

    const newPost = {
      username: user.username,
      categories: categories,
      title,
      desc,
      file,
    }

    if (file) {
      const data = new FormData()
      
      const filename = Date.now() + file.name
      data.append("name", filename)
      data.append("file", file)
      newPost.photo = filename

      try {
        console.log(data)
        await axios.post(process.env.REACT_APP_API+"/upload", data)
      } catch (error) {
        console.log(error)
      }
    }
    try {
      const res = await axios.post(process.env.REACT_APP_API+"/posts", newPost)
      window.location.replace("/post/" + res.data._id)
    } catch (error) {}
  }
  
  return (
    <>
      <section className='newPost'>
        <div className='container boxItems'>
          <div className='img '>{file && <img src={URL.createObjectURL(file)} alt='images' />}</div>
          <form onSubmit={handleSubmit}>
            <div className='inputfile flexCenter'>
              <label htmlFor='inputfile'>
                <IoIosAddCircleOutline />
              </label>
              <input type='file' id='inputfile' style={{ display: "none" }} onChange={(e) => setFile(e.target.files[0])} />
            </div>
            <input type='text' placeholder='Title' onChange={(e) => setTitle(e.target.value)} />
            
            <textarea name='' id='' cols='30' rows='10' onChange={(e) => setDesc(e.target.value)}></textarea>
            <div class='cat-div'>
              {
                (category.map(item=>{
                  return(
                  <button className={(categories.includes(item.category))? 'sel-cat':'non-sel-cat'} key={item.id} onClick={()=>handleClick(item.category)}>
                        <p>{item.category}</p>
                    </button>)
                }))
              }
            </div>
            <button className='button'>Create Post</button>
          </form>
          
        </div>
      </section>
    </>
  )
}
