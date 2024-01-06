import { useRef, useState } from "react";
import { BsCaretRight } from "react-icons/bs";
import { jobData } from "../data";
import styles from "../styles/Experience.module.css";
import SectionHeading from "./SectionHeading";

const Experience = () => {
  const [selectedJob, setSelectedJob] = useState("oberon");
  const scrollTabsRef = useRef();

  const handleChange = (e) => {
    let id = e.target.id;
    setSelectedJob(id);
    let windowWidth = window.innerWidth;
    let inputElement = document.getElementById(id);
    let label = inputElement.parentNode.querySelector("label");
    let rightEdge = label.getBoundingClientRect().left + label.offsetWidth;
    let leftEdge = label.getBoundingClientRect().left;

    if (rightEdge + 50 > windowWidth) {
      scrollTabsRef.current.scrollLeft =
        scrollTabsRef.current.scrollLeft + (rightEdge - windowWidth + 120);
    } else if (leftEdge < 0) {
      scrollTabsRef.current.scrollLeft =
        scrollTabsRef.current.scrollLeft - (leftEdge * -1 + 60);
    }
  };

  return (
    <section className="my-40" id="experience">
      <SectionHeading title="Where I've Worked" />
      <div className="my-20 flex gap-8 flex-col lg:flex-row">
        <div
          className={`flex lg:flex-col overflow-auto lg:overflow-visible ${styles.scrollTabsContainer}`}
          ref={scrollTabsRef}
          id="scrollTabs"
        >
          {jobData.map((job, index) => (
            <div key={job.id}>
              <input
                type="radio"
                name="jobs"
                id={job.id}
                checked={job.id == selectedJob ? true : false}
                onChange={(e) => handleChange(e)}
                hidden
              />
              <label
                className="text-slate cursor-pointer text-[13px] font-normal hover:bg-lightNavy hover:text-green duration-200 py-2 px-4 block whitespace-nowrap"
                htmlFor={job.id}
              >
                {job.company}
              </label>
            </div>
          ))}
        </div>
        <div className="overflow-scroll">
          {jobData.map((job) => (
            <div
              key={job.id}
              className={`text-slate ${selectedJob !== job.id ? "hidden" : ""}`}
              data-company={job.id}
            >
              <h3 className="text-[20px]">
                <span className="text-lightestSlate">{job.jobTitle}</span>
                <span className="text-green"> @ {job.company}</span>
              </h3>
              <p className="mb-6 mt-1 text-sm font-firaCode">
                {job.started} - {job.ended}
              </p>
              <ul className="h-[200px]">
                {job.duties.map((duty, index) => (
                  <li className="flex items-start" key={index}>
                    <div className="w-[13px] h-[13px] mr-3 mt-1">
                      <BsCaretRight className="text-green" size={13} />
                    </div>
                    {duty}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
