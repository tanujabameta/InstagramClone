import React, { useState, useEffect } from "react";
import "./App.css";
import { collection, getDocs } from "firebase/firestore";
import { db } from "./firebase";
import Post from "./Post";
import { Button, Input, Modal, makeStyles } from "@material-ui/core";

function getModalStyle() {
  const top = 50;
  const left = 50;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles((theme) => ({
  paper: {
    position: "absolute",
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

function App() {
  const classes = useStyles();
  const [modalStyle] = useState(getModalStyle);
  const [posts, setPosts] = useState([]);
  const [open, setOpen] = useState(false);

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const getPosts = () => {
    getDocs(collection(db, "posts")).then((res) => {
      setPosts(
        res.docs.map((doc) => ({
          post: doc.data(),
          id: doc.id,
        }))
      );
    });
  };

  useEffect(() => {
    getPosts();
  }, []);

  return (
    <div className="App">
      <Modal open={open} onClose={() => setOpen(false)}>
        <div style={modalStyle} className={classes.paper}>
          <form className="app_signup">
              <img
                className="app_headerImage"
                alt=""
                src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png"
              />
              <Input
                type="text"
                placeholder="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />

              <Input
                type="email"
                placeholder="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />

              <Input
                type="password"
                placeholder="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <Button onClick={() => setOpen(true)}>Sign Up</Button>
          </form>
        </div>
      </Modal>
      <div className="app_header">
        <img
          className="app_header_img"
          src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png"
          alt=""
        />
      </div>
      <Button onClick={() => setOpen(true)}>Sign Up</Button>
      {posts.map(({ post, id }) => {
        return (
          <Post
            key={id}
            imgUrl={post.imageUrl}
            userName={post.username}
            caption={post.caption}
          />
        );
      })}
    </div>
  );
}

export default App;
