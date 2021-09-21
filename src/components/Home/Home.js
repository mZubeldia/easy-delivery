//import ScrollButton from "../ScrollButton/ScrollButton";
import CompletedList from "./CompletedList";
import PendingList from "./PendingList";

const Home = (props) => {
  return (
    <main className="container px-4 px-lg-5">
      <PendingList taskData={props.taskData} />
      <CompletedList taskData={props.taskData} />

      {/* done section */}
    </main>
  );
};

export default Home;
