import React from "react";
import { Job } from "../types/jobs";
import { AiFillStar } from "react-icons/ai";
import { BiSolidMap } from "react-icons/bi";

function Card({ job, selected }: { job: Job; selected?: boolean }) {
  return (
    <div
      className={`text-left bg-white p-2 cursor-pointer mb-3 border-solid border ${
        selected ? "border-green-500 border-2" : "border-1 "
      } rounded-md hover:shadow-lg`}
    >
      <div className="mt-2 flex justify-between border-solid border-0 border-b pb-2 w-full">
        <div className="flex flex-col lg:flex-row lg:justify-start w-full">
          <div className="mb-1 h-[40px] lg:h-[60px] lg:pl-3 lg:pr-3 lg:pt-1">
            <div className="justify-between flex h-full justify-center">
              <img
                className="m-0 lg:m-auto object-scale-down max-w-[50px]"
                src={job.companyLogo}
              />
              <div>
                <p className="block lg:hidden bg-green-100 text-green-500 pt-1 pb-1 pr-2 pl-2 rounded-md">
                  {job.category}
                </p>
              </div>
            </div>
          </div>
          <div className="w-full">
            <div className="flex items-center">
              <p className="mr-5">{job.companyName}</p>
              <p className="mr-1">{job.rating}</p>
              <AiFillStar />
            </div>
            <div>
              <p className="text-xl font-bold">{job.role}</p>
              <div className="flex items-center">
                <p className="font-bold text-green-500 mr-5">{job.postTime}</p>
                <BiSolidMap />
                <p className="ml-1 text-gray-500">{job.location}</p>
              </div>
              {job.compensationDetails && (
                <div className="flex mt-1 items-center">
                  <p className="font-bold text-sm">
                    {job.compensationDetails?.compensation}
                  </p>
                  {job.compensationDetails.estimated && (
                    <p className="inline bg-gray-100 ml-3 pl-1 pr-1 rounded-md">
                      EST
                    </p>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
        <div className="hidden lg:block">
          <p className="bg-green-100 text-green-500 pt-1 pb-1 pr-2 pl-2 rounded-md">
            {job.category}
          </p>
        </div>
      </div>
      <div className="flex mt-1 flex-wrap">
        {job.tags.slice(0, 3).map((tag: string, tagIndex: number) => {
          return (
            <p
              key={`Job_${job.id}_Tag_${tagIndex}`}
              className="bg-gray-100 p-1 mr-1 rounded-md"
            >
              {tag}
            </p>
          );
        })}
        {job.tags.length > 3 && <p>...</p>}
      </div>
    </div>
  );
}

export default Card;
