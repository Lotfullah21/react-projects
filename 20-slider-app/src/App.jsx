import { useState } from "react";
import pioneers from "./assets/data/Data";
import persianData from "./assets/data/Persian";
import Carousel from "./components/Carousel";

function App() {
  const [count, setCount] = useState(0);
  const [people, setPeople] = useState(pioneers);

  return (
    <main>
      <Carousel data={people} persianData={persianData}></Carousel>
    </main>
  );
}
export default App;
