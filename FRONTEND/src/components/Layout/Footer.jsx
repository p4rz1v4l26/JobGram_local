import React, { useContext } from "react";
import { Context } from "../../main";
import { Link } from "react-router-dom";
import { FaLinkedin, FaTwitter, FaGithub, FaDiscord } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";

const Footer = () => {
  const { isAuthorized } = useContext(Context);
  return (
    <footer className={isAuthorized ? "footerShow" : "footerHide"}>
      <div>&copy; All Rights Reserved By P4RZ1V4L26.</div>
      <div>
        <Link
          to={
            "https://in.linkedin.com/in/avinash-warale-098654233?trk=public_post_follow-view-profile/u"
          }
          target="_blank"
        >
          <FaLinkedin />
        </Link>
        <Link to={"https://twitter.com/avinashwarale/"} target="_blank">
          <FaTwitter />
        </Link>
        <Link to={"https://github.com/P4RZ1V4L26"} target="_blank">
          <FaGithub />
        </Link>
        <Link
          to={"https://discordapp.com/users/896411007797325824/"}
          target="_blank"
        >
          <FaDiscord />
        </Link>
        <Link to={"https://www.instagram.com/26__avinash/"} target="_blank">
          <RiInstagramFill />
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
