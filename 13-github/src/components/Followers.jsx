import Follower from "./Follower";

const Followers = ({ followers, removePerson }) => {
  return (
    <>
      <div className="title">
        <h1>
          <span> karpathy's</span> Following People
        </h1>
      </div>
      <div className="followers">
        {followers.map((data) => {
          return (
            <Follower
              removePerson={removePerson}
              key={data.id}
              {...data}
            ></Follower>
          );
        })}
      </div>
    </>
  );
};
export default Followers;
