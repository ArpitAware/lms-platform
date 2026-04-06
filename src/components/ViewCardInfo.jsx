import { useParams } from "react-router-dom";

const data = [
  {
    id: 1,
    title: "Android App Development",
    price: 1199,
    description: "Learn Android using Java & Kotlin",
  },
  {
    id: 2,
    title: "React Development",
    price: 999,
    description: "Master React from scratch",
  },
];

const ViewCardInfo = () => {
  const { id } = useParams();

  const course = data.find((item) => item.id === Number(id));

  if (!course) return <h2>Course not found</h2>;

  return (
    <div style={{ padding: "40px" }}>
      <h1>{course.title}</h1>
      <p>{course.description}</p>
      <h2>₹{course.price}</h2>

      <button>Buy Now</button>
      <button>Add to Cart</button>
    </div>
  );
};

export default ViewCardInfo;