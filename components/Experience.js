import { useState } from "react";
import SectionHeading from "./SectionHeading";
import { jobData } from "../data";
import { BsCaretRight } from "react-icons/bs";

const Experience = () => {
  const [selectedJob, setSelectedJob] = useState("emerson");

  return (
    <div className="max-w-[700px]">
      <SectionHeading title="Where I've Worked" />
      <div className="my-20 flex gap-4 flex-col lg:flex-row">
        <div className="flex lg:flex-col">
          {jobData.map((job, index) => (
            <div key={job.id} className="lg:px-[20px]">
              <input
                type="radio"
                name="jobs"
                id={job.id}
                checked={job.id == selectedJob ? true : false}
                onChange={(e) => setSelectedJob(e.target.id)}
                hidden
              />
              <label
                className="text-slate cursor-pointer text-[13px] font-normal hover:bg-lightNavy hover:text-green duration-200  py-2 px-4 block whitespace-nowrap"
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
              <h3 className="text-[22px]">
                <span className="text-lightestSlate">{job.jobTitle}</span>
                <span className="text-green"> @ {job.company}</span>
              </h3>
              <p className="mb-6">
                {job.started} - {job.ended}
              </p>
              <ul>
                {job.duties.map((duty) => (
                  <li className="flex items-start">
                    <BsCaretRight className="text-green mr-3 text-md" /> {duty}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
