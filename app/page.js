"use client"
import { CiFilter } from "react-icons/ci";
import { RxCross2 } from "react-icons/rx";
import { TbFileDownload } from "react-icons/tb";
import { MdOutlineSkipPrevious, MdOutlineSkipNext } from "react-icons/md";
import { useState, useEffect } from "react";
import report from "../public/data";

export default function Home() {
  const [noOfRows, setNoOfRows] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);
  const [displayedReport, setDisplayedReport] = useState([]);

  useEffect(() => {
    const startIndex = (currentPage - 1) * noOfRows;
    const endIndex = Math.min(startIndex + parseInt(noOfRows), report.length);
    console.log(endIndex)
    setDisplayedReport(report.slice(startIndex, endIndex));
  }, [noOfRows, currentPage]);




  const totalPages = Math.ceil(report.length / noOfRows);

  const handleNext = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrev = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <>
      <div className="flex flex-col items-center sm:p-10 shadow-2xl m-1 sm:my-5 sm:mx-5 min-h-screen">
        <div className="flex justify-center w-full">
          <div className="flex justify-evenly w-full">
            <div className="w-3/4 flex sm:justify-center">
              <h1 className="font-bold text-sm sm:text-xl">
                Recently Generated Report
              </h1>
            </div>
            <div className="flex gap-4 w-1/6 justify-end">
              <div className="border-[1px] border-black rounded-md h-6 sm:w-8 sm:h-8 flex justify-center items-center">
                <CiFilter className="sm:text-2xl" />
              </div>
              <div className="border-[1px] border-black rounded-md sm:w-8 h-6 sm:h-8 flex justify-center items-center">
                <RxCross2 className="sm:text-2xl" />
              </div>
            </div>
          </div>
        </div>
        <div className="flex w-full justify-evenly bg-gray-100 p-2">
          <div className="flex text-xs font-bold justify-start w-full sm:w-1/4">
            Date
          </div>
          <div className="flex text-xs font-bold justify-start w-full">
            Report Name
          </div>
          <div className="flex text-xs font-bold justify-start w-full sm:w-1/4">
            Download
          </div>
        </div>
        {displayedReport.map((item, index) => (
          <div
            key={index}
            className="flex w-full justify-evenly p-2 border-t border-gray-200"
          >
            <div className="text-xs justify-start w-full sm:w-1/4">
              <div>{item.date}</div>
              <div>{item.time}</div>
            </div>
            <div className="flex text-xs justify-start w-full">
              {item.name}
            </div>
            <div className="flex text-xs justify-start w-full sm:w-1/4">
              <div className="border-[1px] border-black rounded-md h-6 w-8 flex justify-center items-center">
                <TbFileDownload className="sm:text-2xl" />
              </div>
            </div>
          </div>
        ))}
        <div className="flex w-full items-center justify-center gap-10">
          <div>
            <div className="flex justify-center items-center gap-4">
              <div className="flex gap-1">
                <MdOutlineSkipPrevious
                  className="sm:text-2xl cursor-pointer"
                  onClick={handlePrev}
                />
                <p>Prev</p>
              </div>
              <div className="border-2 flex justify-center items-center bg-orange-500 w-8 h-8">
                <p>{currentPage}</p>
              </div>
              <div className="flex gap-1 cursor-pointer" onClick={handleNext}>
                <p>Next</p>
                <MdOutlineSkipNext className="sm:text-2xl" />
              </div>
            </div>
          </div>
          <div className="flex gap-2">
            Rows per page
            <input
              type="number"
              placeholder="10"
              className="focus:outline-none w-12 h-6 border-2 border-gray-500 px-1"
              value={noOfRows}
              onChange={(e) => setNoOfRows(e.target.value)}
            />
          </div>
        </div>
      </div>
    </>
  );
}
