import React from "react";
import { FaMicrosoft, FaApple, FaGoogle, FaTwitter, FaInstagram } from "react-icons/fa";

const PopularCompanies = () => {
  const companies = [
    {
      id: 1,
      title: "Microsoft",
      location: "IT park, Hadapsar , Pune , India",
      openPositions: 10,
      icon: <FaMicrosoft />,
    },
    {
      id: 2,
      title: "Google",
      location: "IT park ,Bengaluru, India",
      openPositions: 5,
      icon: <FaGoogle />,
    },
    {
      id: 3,
      title: "Apple",
      location: "Bandra, Mumbai, India",
      openPositions: 20,
      icon: <FaApple />,
    },
    
    {
      id: 4,
      title: "Instagram",
      location: "Dadar, Mumbai, India",
      openPositions: 117,
      icon: <FaInstagram />,
    },
  ];
  return (
    <div className="companies">
      <div className="container">
        <h3>TOP COMPANIES</h3>
        <div className="banner">
          {companies.map((element) => {
            return (
              <div className="card" key={element.id}>
                <div className="content">
                  <div className="icon">{element.icon}</div>
                  <div className="text">
                    <p>{element.title}</p>
                    <p>{element.location}</p>
                  </div>
                </div>
                <button>Open Positions {element.openPositions}</button>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default PopularCompanies;