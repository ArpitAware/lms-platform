import React from 'react'
import './CoursesListing.css'

//import cardsArrayData
import {courseCardsArray} from '../data/courses.js'
import CourseCard from '../components/CourseCard.jsx';

function CoursesListing() {
  console.log(courseCardsArray);
  return (
    <div className='courselist-outer'>
      <div className="courselist-inner">
        <h1>Courselisting</h1>
        
        <div className="courseCardContainer">
          {
            courseCardsArray.map((course,index)=>{
              return (
                <CourseCard key={index} course={course}/>

              )
            })
          }

        </div>



        
      </div>
    </div>
  )
}

export default CoursesListing
