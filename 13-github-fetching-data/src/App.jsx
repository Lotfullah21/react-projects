import { useEffect, useState, useSyncExternalStore } from "react";

import Followers from "./components/Followers";
import Loading from "./components/Loading";
import "./App.css";

function App() {
  const [isLoading, setLoading] = useState(false);
  const [followers, setFollowers] = useState([]);
  const [error, setError] = useState();
  const username = "karpathy";
  const apiUrl = `https://api.github.com/users/${username}/following`;
  const token = "Your token";

  const headers = {
    Authorization: `Bearer ${token}`,
  };

  const removePerson = (id) => {
    const newFollowers = followers.filter((person) => person.id !== id);
    setFollowers(newFollowers);
  };

  const fetchUrl = async () => {
    setLoading(true);
    try {
      const response = await fetch(apiUrl);
      if (!response) {
        console.log("response not ok");
        return;
      }
      const data = await response.json();
      console.log(typeof data);
      console.log(typeof followers);
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
    return (
      <main>
        <Loading></Loading>
      </main>
    );
  }

  if (followers.length === 0) {
    return (
      <main>
        <div className="title">
          <h1>No Followers left</h1>
        </div>
        <button className="btn-refresh" onClick={() => fetchUrl()}>
          Refresh
        </button>
      </main>
    );
  }

  return (
    <main>
      {" "}
      <Followers followers={followers} removePerson={removePerson}></Followers>
    </main>
  );
}

export default App;
