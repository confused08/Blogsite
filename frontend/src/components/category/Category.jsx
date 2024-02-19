import React, { useEffect, useState } from "react"
import "./category.css"
import { category } from "../../assets/data/data"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import Slider from "react-slick"
import { GrFormPrevious } from "react-icons/gr"
import { MdNavigateNext } from "react-icons/md"
import axios from "axios"
import { useLocation } from "react-router-dom"
import { Link } from "react-router-dom"
import { useHistory } from "react-router-dom/cjs/react-router-dom.min"

const SampleNextArrow = (props) => {
  const { onClick } = props
  return (
    <div className='control-btn' onClick={onClick}>
      <button className='next'>
        <MdNavigateNext className='icon' />
      </button>
    </div>
  )
}
const SamplePrevArrow = (props) => {
  const { onClick } = props
  return (
    <div className='control-btn' onClick={onClick}>
      <button className='prev'>
        <GrFormPrevious className='icon' />
      </button>
    </div>
  )
}
export const Category = ({posts}) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 2,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
    ],
  }

  const [cats, setCat] = useState([])
  const { search } = useLocation()
  const navigate  = useHistory();
  console.log(posts)
  const handleclick = (cat) =>{
    
    const catPosts = posts?.filter((x)=> x.categories.includes(cat))
    console.log(catPosts)
    navigate.push("/category/"+cat,{catPosts})
  }
  useEffect(() => {
    const getCat = async () => {
      const res = await axios.get("/category" + search)
      setCat(res.data)
    }
    getCat()
  }, [search])
  return (
    <>
      <section className='category'>
        <div className='content'>
          <Slider {...settings}>
            {category.map((item) => (
              <div className='boxs'>
                <div className='box' key={item.id}>
                  <img src={item.cover} alt='cover' />
                  <div className='overlay'>
                    {/* <Link to={`/category/${item.category}`} className='link'> */}
                      <h4 onClick={()=>handleclick(item.category)}>{item.category}</h4>
                    {/* </Link> */}
                    <p>{item.title}</p>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </section>
    </>
  )
}
