import { useState } from "react";
import SectionHeading from "./SectionHeading";
import { jobData } from "../data";
import { BsCaretRight } from "react-icons/bs";

const Experience = () => {
  const [selectedJob, setSelectedJob] = useState("emerson");
  const [selectedJobIndex, setSelectedJobIndex] = useState(0);

  const handleChange = (e) => {
    let inputs = document.querySelectorAll("[name='jobs']");
    let id = e.target.id;
    setSelectedJob(id);
    inputs.forEach((input, index) => {
      if (input.id == id) {
        setSelectedJobIndex(index * 35.5);
      }
    });
  };

  console.log(selectedJobIndex);

  return (
    <section className="my-40" id="experience">
      <SectionHeading title="Where I've Worked" />
      <div className="my-20 flex gap-8 flex-col lg:flex-row">
        <div className="flex lg:flex-col overflow-auto lg:overflow-visible">
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
        <div>
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
              <ul>
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
