import Follower from "./Follower";

const Followers = ({ followers }) => {
  return (
    <>
      {followers.map((data) => {
        return <Follower key={data.id} {...data}></Follower>;
      })}
    </>
  );
};
export default Followers;
