const Follower = ({ login, avatar_url, url, id }) => {
  console.log(url);
  return (
    <div key={id}>
      <img src={avatar_url}></img>
      <h1>{login}</h1>
    </div>
  );
};
export default Follower;
