import React from "react";
import "./Team.css";

function Team() {
  return (
    <div className="container">
      <div className="row p-3 mt-5 border-top">
        <h1 className="text-center ">Developer</h1>
      </div>

      <div
        className="row p-3 text-muted"
        style={{ lineHeight: "1.8", fontSize: "1.2em" }}
      >
        <div className="col-6 p-3 text-center">
          <div className="animated-border-wrapper mx-auto mt-5">
            <img
              src="media/images/my_photo.jpg"
              className="profile-img"
              alt="Dinesh Aher"
            />
            <div className="animated-border"></div>
          </div>
          <h4 className="mt-2">Dinesh Aher</h4>
          <h6>Full Stack Developer & Competitive Programmer</h6>
        </div>
        <div className="col-6 p-3">
          <p>
            👋 Hi there! I'm Dinesh Aher, a Final year Information Technology
            Engineering student at DYPCOE PUNE , experienced in MERN stack and a
            competitive programmer.
          </p>
          <p>
            I love solving complex problems and building scalable solutions
            impacting millions of users. I am Smart India Hackathon 2024 winner.
          </p>
          <p>
            🌐 I'm always looking for opportunities to learn, grow, and
            collaborate. Let's connect and explore the endless possibilities in
            the world of technology! 🚀
          </p>
          <p>
            Socials: <br />
            <a href="https://www.linkedin.com/in/dineshaher/"><i class="fa fa-linkedin-square" aria-hidden="true"></i></a> &nbsp;&nbsp;&nbsp;
            <a href="https://github.com/Dinesh-dypcoe"><i class="fa fa-github-square" aria-hidden="true"></i></a> &nbsp;&nbsp;&nbsp;
            <a href="https://portfolio-dinesh-delta.vercel.app/" style={{textDecoration:"none"}}>portfolio</a>
            <br />
            Coding Profiles: <br />
            <a href="https://leetcode.com/u/dineshaher/" style={{textDecoration:"none"}}>Leetcode</a>&nbsp;&nbsp;&nbsp;
            <a href="https://www.codechef.com/users/dineshaher" style={{textDecoration:"none"}}>CodeChef</a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Team;
