import { useEffect, useState, useSyncExternalStore } from "react";
import Follower from "./components/Follower";
import Followers from "./components/Followers";
import "./App.css";

function App() {
  const [isLoading, setLoading] = useState(false);
  const [followers, setFollowers] = useState([]);
  const [error, setError] = useState();
  const username = "Lotfullah21";
  const apiUrl = `https://api.github.com/users/${username}/following`;
  const token =
    "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";

  const headers = {
    Authorization: `Bearer ${token}`,
  };

  const fetchUrl = async () => {
    setLoading(true);
    try {
      const response = await fetch(apiUrl, { headers });
      if (!response) {
        console.log("response not ok");
        return;
      }
      const data = await response.json();
      console.log(data);
      setFollowers(data);
      setLoading(false);
    } catch (error) {
      setError(error);
      console.log(error);
      setLoading(false);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUrl();
  }, [username, apiUrl]);

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  return <Followers followers={followers}></Followers>;
}

export default App;
