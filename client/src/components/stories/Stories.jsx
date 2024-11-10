import { useContext } from "react";
import "./stories.scss"
import { AuthContext } from "../../context/AuthContext";

const Stories = () => {

  const {currentUser} = useContext(AuthContext);


    // to be fetched from api
    const stories = [
      {
        id: 1,
        name: "John Doe",
        img: "https://images.pexels.com/photos/13916254/pexels-photo-13916254.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
      },
      {
        id: 2,
        name: "John Doe",
        img: "https://images.pexels.com/photos/13916254/pexels-photo-13916254.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
      },
      {
        id: 3,
        name: "John Doe",
        img: "https://images.pexels.com/photos/13916254/pexels-photo-13916254.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
      },
      {
        id: 4,
        name: "John Doe",
        img: "https://images.pexels.com/photos/13916254/pexels-photo-13916254.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
      },
    ];


  return (
    <div className="stories">
        <div className="story" >
          <img src="https://images.pexels.com/photos/210922/pexels-photo-210922.jpeg?auto=compress&cs=tinysrgb&w=600"
           alt=""/>
          <span>{currentUser.name}</span>
          <button>+</button>
        </div>

      {stories.map(story => (
        <div className="story" key={story.id}>
          <img src={story.img} alt=""/>
          <span>{story.name}</span>
        </div>
      ))}
    </div>
  )
}

export default Stories