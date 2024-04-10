import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { Context } from "../../main";

const Jobs = () => {
  const [jobs, setJobs] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const { isAuthorized } = useContext(Context);
  const navigateTo = useNavigate();

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const response = await axios.get(
          "http://localhost:4000/api/v1/job/getall",
          { withCredentials: true }
        );
        setJobs(response.data.jobs);
      } catch (error) {
        console.log(error);
      }
    };
    fetchJobs();
  }, []);

  useEffect(() => {
    if (!isAuthorized) {
      navigateTo("/");
    }
  }, [isAuthorized, navigateTo]);

  const filteredJobs = jobs.filter((job) =>
    job.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <section className="jobs page">
      <div className="container">
        <h1>ALL AVAILABLE JOBS</h1>
        <input
          type="text"
          placeholder="Search jobs"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="search-bar" // Apply the class for search bar styling
        />
        <div className="banner">
          {filteredJobs.map((element) => (
            <div className="card" key={element._id}>
              <p>{element.title}</p>
              <p>{element.category}</p>
              <p>{element.country}</p>
              <Link to={`/job/${element._id}`}>Job Details</Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Jobs;
