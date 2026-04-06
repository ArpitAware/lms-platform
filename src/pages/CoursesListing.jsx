import React, { useState } from 'react'
import './CoursesListing.css'

//import cardsArrayData
// import {courseCardsArray} from '../data/courses.js'
import {courseCardsArray} from '../data/courseData.js'
import CourseCard from '../components/CourseCard.jsx';

//import swiper things for slider
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

import { Navigation, Pagination, Scrollbar} from 'swiper/modules';
import { Autoplay } from 'swiper/modules';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

function CoursesListing() {
  //ab yaha category ke liye state banayege
  const [cat, setCat] = useState("all");
  const [price, setPrice] = useState(2000)


  console.log(courseCardsArray);

  const categoryArray = courseCardsArray.map((item)=>{
    return item.category;
  })

  console.log(categoryArray) //sabki category

  const uniqueCategoryArray = [...new Set(categoryArray)];
  console.log(uniqueCategoryArray)


  //category select krte hi dropdown mai
  const handleDropDown = (e) => {
      console.log(e.target)
      console.log(e.target.value)
      setCat(e.target.value)
  }

  //yaha handle hogi price range
  const handlePriceRange = (e) =>{
    console.log(e.target)
    console.log(e.target.value)
    setPrice(e.target.value);
  }


  //ab filteredCourses nikal lo and inko map karwana 
  const filteredCoursesArray = courseCardsArray.filter((course)=>{
    if((cat === "all") && (course.price <= price)) return true;
    return ((course.category === cat) && (course.price <= price));

  })

  console.log(filteredCoursesArray);

  let totalCards = filteredCoursesArray.length;
  console.log(totalCards)


  //pagination ka kaam
  


  

  


  return (
    <div className="courselist-outer">
      <div className="courselist-inner">
        <h1>😎Best Offers💸</h1>

        <Swiper
          modules={[Navigation, Pagination, Scrollbar, Autoplay]}
          spaceBetween={30}
          slidesPerView={4}
          navigation
          loop={true}
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
          }}
          speed={4000}
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
          className="courseCardContainer"
        >
          {courseCardsArray.map((course, index) => {
            return (
              <SwiperSlide key={index}>
                <CourseCard course={course} />
              </SwiperSlide>
            );
          })}
        </Swiper>

        <h1>🤨Featured Courses😎</h1>

        <div className="filterContainer">
          <div className="categoryBox">
            <label htmlFor="select_cat">Select Category :</label>
            <select
              name="select_cat"
              id="select_cat"
              onChange={(e) => {
                handleDropDown(e);
              }}
            >
              <option value="all">All categories</option>
              {uniqueCategoryArray.map((category, index) => {
                return (
                  <option key={index} value={category}>
                    {category}
                  </option>
                );
              })}
            </select>
          </div>

          <div className="priceBox">
            {/* price filter */}
            <label htmlFor="priceRange">
              Max Price :
              <input
                id="priceRange"
                type="range"
                min={0}
                max={2000}
                step={20}
                value={price}
                onChange={(e) => {
                  handlePriceRange(e);
                }}
              />
              Rs.{price}
            </label>
          </div>
        </div>

        <div className="myCourses">
          {
            filteredCoursesArray.map((course, index) => {

              return <CourseCard key={index} course={course} />;
            })

          }

        </div>

        
      </div>
    </div>
  );
}

export default CoursesListing
