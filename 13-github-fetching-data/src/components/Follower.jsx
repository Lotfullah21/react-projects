import { useState } from "react";

const Follower = ({ login, avatar_url, url, node_id, id, removePerson }) => {
  const [readMore, setReadMore] = useState(false);
  return (
    <article className="single-person" key={id}>
      <img src={avatar_url}></img>
      <span className="name">{login}</span>
      <div className="person-info">
        <h5>Person info</h5>
        <p>
          {" "}
          {readMore ? avatar_url : `${avatar_url.substring(0, 7)}}...`}
          <button className="btn-read" onClick={() => setReadMore(!readMore)}>
            {readMore ? "show less" : "read more"}
          </button>
        </p>
        <button className="btn btn-delete" onClick={() => removePerson(id)}>
          Remove Person
        </button>
      </div>
    </article>
  );
};
export default Follower;
