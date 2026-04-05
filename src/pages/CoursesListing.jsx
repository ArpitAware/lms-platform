import React from 'react'
import './CoursesListing.css'

//import cardsArrayData
import {courseCardsArray} from '../data/courses.js'
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
  console.log(courseCardsArray);
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
            disableOnInteraction: false
          }}
          speed={4000}
          
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
          className="courseCardContainer"
        >
          {courseCardsArray.map((course, index) => {
            return (
              <SwiperSlide key={index}>
                <CourseCard  course={course} />
              </SwiperSlide>
            );
          })}
        </Swiper>

        <h1>🤨Featured Courses😎</h1>
        
        <div className="myCourses">
          {courseCardsArray.map((course, index) => {
            return (
                <CourseCard key={index} course={course} />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default CoursesListing
