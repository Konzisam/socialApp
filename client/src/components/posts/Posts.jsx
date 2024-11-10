import "./posts.scss";
import { useQuery } from "@tanstack/react-query";
import { makeRequest } from "../../axios"

import Post from "../post/Post";

const Posts = () => {

    const { isLoading, error, data } = useQuery({
      queryKey: ['posts'],
      queryFn: () =>
        makeRequest.get("/posts").then((res) => {
          return res.data;
        })
    })

    // console.log('***', data)

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading posts</div>;

  return (
    <div className="posts">
      {error
        ? "Something went wrong!"
        : isLoading
        ? "loading"
        : data.map((post) => <Post post={post} key={post.id} />)}
    </div>
  );
};

export default Posts;