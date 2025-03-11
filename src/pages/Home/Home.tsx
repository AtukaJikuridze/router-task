import BoxMain from "./components/BoxMain";

const Home = () => {
  const prom = new Promise(() => console.log("promise"));
  setTimeout(() => {
    console.log("timeouit");
  }, 0);
  console.log(prom);
  console.log("defualt");

  return (
    <div>
      <BoxMain />
    </div>
  );
};

export default Home;
