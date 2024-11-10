import db from "../connect.js";
import jwt from "jsonwebtoken";


export const getPosts = (req, res) => {
  const token = req.cookies.accessToken;
  if (!token) return res.status(401).json("Not logged in!");
  console.log("you are logged");

  jwt.verify(token, "secretkey", (err, userInfo) => {
    if (err) return res.status(403).json("Token  is not valid!");

    const q =
      "SELECT p.*, u.id AS userid, name, profpicurl \
            FROM posts AS p \
            JOIN users AS u \
            ON (u.id = p.userId) \
            LEFT JOIN relationships AS r \
            ON (p.userId = r.followed_userid) \
            WHERE r.follower_userid = $1 OR p.userid = $1 \
            ORDER BY p.createdat DESC";

    db.query(q, [userInfo.id], (err, data) => {
      // console.log('infos--',data)
      if (err) return res.status(500).json(err);
      return res.status(200).json(data.rows);
    });
  });
};


export const addPost = (req, res) => {
  const token = req.cookies.accessToken;
  if (!token) return res.status(401).json("Not logged in!");

  jwt.verify(token, "secretkey", (err, userInfo) => {
    if (err) return res.status(403).json("Token is not valid!");

    const q =
      "INSERT INTO posts(description, imageurl, createdat, userid) VALUES ($1, $2, NOW(), $3)";
    const values = [
      req.body.description,
      req.body.imageurl,
      userInfo.id,
    ];


    console.log(req.body.description)
    db.query(q, values, (err, data) => {
      if (err) return res.status(500).json(err);
      return res.status(200).json("Post has been created.");
    });
  });
};
