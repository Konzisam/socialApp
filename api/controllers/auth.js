import db from "../connect.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export const register = (req, res) => {
  //CHECK USER IF EXISTS

  const query = "SELECT * FROM users WHERE username = $1";

  db.query(query, [req.body.username], (err, data) => {
    if (err) return res.status(500).json(err);
    if (data.rows.length) return res.status(409).json("User with this already exists!");
    //CREATE A NEW USER
    //Hash the password
    const salt = bcrypt.genSaltSync(10);
    const hashedPassword = bcrypt.hashSync(req.body.password, salt);

    const insertUser = "INSERT INTO users (username, email, password, name) VALUES ($1, $2, $3, $4)";

    const values = [
      req.body.username,
      req.body.email,
      hashedPassword,
      req.body.name,
    ];
    
    db.query(insertUser, values, (err, data) => {
      if (err) return res.status(500).json(err);
      return res.status(200).json("User has been created.");
    });
  });
};

export const login = (req, res) => {
  const q = "SELECT * FROM users WHERE username = $1";

  db.query(q, [req.body.username], (err, data) => {
    if (err) return res.status(500).json(err);
    
    if (data.rowCount === 0) return res.status(404).json("User not found!");
    
    const checkPassword = bcrypt.compareSync(
      req.body.password,
      data.rows[0].password
    );

    if (!checkPassword)
      return res.status(400).json("Wrong password or username!");
    const token = jwt.sign({ id: data.rows[0].id }, "secretkey");

    const { password, ...others } = data.rows[0];

    res
      .cookie("accessToken", token, {
        httpOnly: true,
      })
      .status(200)
      .json(others);
  });
};

export const logout = (req, res) => {
  res.clearCookie("accessToken",{
    secure:true,
    sameSite:"none"
  }).status(200).json("User has been logged out.")
};
