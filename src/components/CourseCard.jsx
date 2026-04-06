import React from 'react'
import './CourseCard.css'

function CourseCard({course}) {

  // console.log(course)
  return (
    <div className='courseCard'>
      <div className="courseCard-imgBox">
        <img height={"150px"} src={course.thumbnail} alt="" />
      </div>
      <div className="courseCard-text">
        <h3>{course.title.substring(0,25)}...</h3>
        <p className="category">{course.category}</p>
        <p>{course.description.substring(0,35)}</p>
        <p>
          <b>{course.instructor}</b>
        </p>

        <p>⭐⭐⭐{course.rating}</p>
        <span class="price">₹{course.price}</span>

        <div className="buttonsBox">
          <button>View Course</button>
          <button>Add to Cart</button>
        </div>
      </div>
    </div>
  );
}

export default CourseCard
