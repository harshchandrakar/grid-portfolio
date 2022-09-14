import React from "react";
import classes from "./Style/MyProfile.module.css";
import background from "./Images/background.jpg";
import InstagramIcon from "@mui/icons-material/Instagram";
import EmailIcon from "@mui/icons-material/Email";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import { useNavigate } from "react-router-dom";
import Link from "@mui/material/Link";
import Skill from "./Utils/Skill";
import { Skills } from "../Helpers/Skills";
import Typewriter from "typewriter-effect";

function MyProfile() {
  const navigate = useNavigate();
  return (
    <div className={classes.MyProfile}>
      <img className={classes.background} src={background} alt="background" />
      <img
        className={classes.profilePic}
        src="https://codejackers.s3.ap-south-1.amazonaws.com/1663139189554.jpg"
        alt="background"
      />
      <div className={classes.Details}>
        <h1>Harsh Kumar Chandrakar</h1>
        <div>
          <Link href="https://www.instagram.com/harsh._chandrakar/">
            <InstagramIcon
              sx={{ m: "7px", color: "#707070", mt: "0", ml: "1rem" }}
              fontSize="large"
            />
          </Link>
          <Link href="mailto:harshc252@gmail.com">
            <EmailIcon
              sx={{ m: "7px", color: "#707070" }}
              fontSize="large"
              onClick={() => {
                navigate("");
              }}
            />
          </Link>
          <Link href="https://twitter.com/harshch252">
            <TwitterIcon sx={{ m: "7px", color: "#707070" }} fontSize="large" />
          </Link>
          <Link href="https://www.linkedin.com/in/harsh-kumar-chandrakar-244795179/">
            <LinkedInIcon
              sx={{ m: "7px", color: "#707070" }}
              fontSize="large"
            />
          </Link>
          <Link href="https://github.com/harshchandrakar">
            <GitHubIcon sx={{ m: "7px", color: "#707070" }} fontSize="large" />
          </Link>
        </div>
      </div>
      <div className={classes.Me}>
        <Typewriter
          options={{
            strings: [
              "Hello there,",
              "I am a Computer Science and Engineering student",
              "A Full stack developer",
              "A Freelancer",
              "A Tech Enthusiast",
            ],
            autoStart: true,
            loop: true,
            pauseFor: 2000,
          }}
        />
      </div>
      <div className={classes.skills}>
        <h1>My Skills</h1>
        {Skills.map((data) => (
          <Skill skill={data} />
        ))}
      </div>
    </div>
  );
}

export default MyProfile;
