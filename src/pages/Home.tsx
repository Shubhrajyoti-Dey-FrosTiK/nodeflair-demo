import React, { useState } from "react";
import { Job } from "../types/jobs";
import { mockData } from "../constants/mockData";
import Card from "../components/Card";

function Home() {
  const [jobListing, setJobListing] = useState<Job[]>(mockData);
  const [selectedJob, setSelectedJob] = useState<number>(0);

  return (
    <div className="m-auto p-5 max-w-[1200px]">
      <div className="flex space-x-2">
        <div className="w-full lg:w-[40%] max-h-[95vh] overflow-scroll m-2 no-scrollbar">
          {jobListing.map((job: Job, jobIndex: number) => {
            return (
              <div
                key={`Job_${jobIndex}`}
                onClick={() => {
                  setSelectedJob(jobIndex);
                }}
              >
                <Card job={job} selected={selectedJob == jobIndex} />
              </div>
            );
          })}
        </div>
        <div className="w-[60%] h-20 m-2 bg-white h-[95vh] overflow-scroll border-solid border-0 border rounded-md hidden lg:block"></div>
      </div>
    </div>
  );
}

export default Home;
