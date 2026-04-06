import Card from "./Card";

const data = [
  { id: 1, title: "Android App Development", price: 1199 },
  { id: 2, title: "React Development", price: 999 },
];

const Home = () => {
  return (
    <div>
      {data.map((item) => (
        <Card key={item.id} item={item} />
      ))}
    </div>
  );
};

export default Home;