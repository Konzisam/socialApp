import "./share.scss";
import Image from "../../assets/img.png";
import Map from "../../assets/map.png";
import Friend from "../../assets/friend.png";
import { useContext, useState } from "react";
import { AuthContext } from "../../context/AuthContext";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { makeRequest } from "../../axios";

const Share = () => {
  const [file, setFile] = useState(null);
  const [description, setDescription] = useState("");
  const { currentUser } = useContext(AuthContext);
  const queryClient = useQueryClient();

  // Upload file function
  const upload = async () => {
    try {
      const formData = new FormData();
      formData.append("file", file);
      const res = await makeRequest.post("/upload", formData);
      return res.data; // returns image URL
    } catch (err) {
      console.log(err);
    }
  };

  // useMutation for creating a new post
  const mutation = useMutation({
    mutationFn: async (newPost) => {
      return await makeRequest.post("/posts", newPost); // sending the new post
    },
    onSuccess: () => {
      queryClient.invalidateQueries(["posts"]); // refetch the posts after success
    },
    onError: (error) => {
      console.log("Error creating post:", error);
    }
  });

  const handleClick = async (e) => {
    e.preventDefault();
    // let imgUrl = "";
    // if (file) imgUrl = await upload(); // upload file if there is one
    // mutation.mutate({ desc, img: imgUrl }); // trigger the mutation
    // setDesc(""); // reset description
    // setFile(null); // reset file
    mutation.mutate({ description })
  };

  return (
    <div className="share">
      <div className="container">
        <div className="top">
          <div className="left">
            <img src={"/upload/" + currentUser.profilePic} alt="" />
            <input
              type="text"
              placeholder={`What's on your mind ${currentUser.name}?`}
              onChange={(e) => setDescription(e.target.value)}
              value={description}
            />
          </div>
          <div className="right">
            {file && <img className="file" alt="" src={URL.createObjectURL(file)} />}
          </div>
        </div>
        <hr />
        <div className="bottom">
          <div className="left">
            <input
              type="file"
              id="file"
              style={{ display: "none" }}
              onChange={(e) => setFile(e.target.files[0])}
            />
            <label htmlFor="file">
              <div className="item">
                <img src={Image} alt="" />
                <span>Add Image</span>
              </div>
            </label>
            <div className="item">
              <img src={Map} alt="" />
              <span>Add Place</span>
            </div>
            <div className="item">
              <img src={Friend} alt="" />
              <span>Tag Friends</span>
            </div>
          </div>
          <div className="right">
            <button onClick={handleClick} disabled={mutation.isLoading}>
              Share
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Share;
