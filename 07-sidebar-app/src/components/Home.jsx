import { useGlobalContext } from "../context";
import { FaBars } from "react-icons/fa";
const Home = () => {
  const { openSideBar, openModal } = useGlobalContext();
  console.log(openSideBar);
  return (
    <main>
      <button className="sidebar-toggle" onClick={openSideBar}>
        <FaBars></FaBars>
      </button>
      <button onClick={openModal} className="btn">
        open modal
      </button>
    </main>
  );
};
export default Home;
