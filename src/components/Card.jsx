import { useNavigate } from "react-router-dom";

const Card = ({ item }) => {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(`/course/${item.id}`)}
      style={{
        border: "1px solid #ccc",
        padding: "20px",
        cursor: "pointer",
      }}
    >
      <h3>{item.title}</h3>
      <p>₹{item.price}</p>
    </div>
  );
};

export default Card;    