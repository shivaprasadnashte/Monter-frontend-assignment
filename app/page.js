"use client";

import { useMemo, useState } from "react";
import { CiFilter } from "react-icons/ci";
import { MdOutlineSkipNext, MdOutlineSkipPrevious } from "react-icons/md";
import { RxCross2 } from "react-icons/rx";
import { TbFileDownload } from "react-icons/tb";
import report from "../public/data";

export default function Home() {
  const [noOfRows, setNoOfRows] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);

  const startIndex = useMemo(
    () => (currentPage - 1) * noOfRows,
    [currentPage, noOfRows]
  );

  const displayedReport = useMemo(
    () => report.slice(startIndex, startIndex + parseInt(noOfRows)),
    [startIndex, noOfRows]
  );

  const totalPages = useMemo(
    () => Math.ceil(report.length / noOfRows),
    [noOfRows]
  );

  const handleNext = () => {
    if (currentPage < totalPages) {
      setCurrentPage((prevPage) => prevPage + 1);
    }
  };

  const handlePrev = () => {
    if (currentPage > 1) {
      setCurrentPage((prevPage) => prevPage - 1);
    }
  };

  const renderPageNumbers = () => {
    const pageNumbers = [];
    const maxPagesToShow = 4;
    const startPage = Math.max(1, currentPage - Math.floor(maxPagesToShow / 2));
    const endPage = Math.min(totalPages, startPage + maxPagesToShow - 1);

    for (let i = startPage; i <= endPage; i++) {
      pageNumbers.push(
        <div
          key={i}
          className={`border-2 flex hover:cursor-pointer  justify-center items-center ${
            currentPage === i ? "bg-orange-500" : ""
          } sm:w-8 w-6 h-6 sm:h-8`}
          onClick={() => setCurrentPage(i)}
        >
          <p>{i}</p>
        </div>
      );
    }
    return pageNumbers;
  };

  return (
    <>
      <div className="flex flex-col items-center sm:p-10 h-screen overflow-y-scroll  shadow-2xl  sm:mx-5 ">
        <div className="flex justify-center w-full ">
          <div className="flex mb-3 items-center justify-evenly w-full">
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
        <div className="flex w-full justify-evenly  bg-gray-100 p-2">
          <div className="flex text-xs font-bold justify-start w-full sm:w-1/4">
            Date
          </div>
          <div className="flex text-xs font-bold justify-start w-full">
            Report Name
          </div>
          <div className="flex text-xs font-bold justify-center  sm:justify-start w-full sm:w-1/4">
            Download
          </div>
        </div>
        <div className=" w-full h-full overflow-y-scroll">
          {displayedReport.map((item, index) => (
            <div
              key={index}
              className="flex w-full  justify-evenly p-2 border-t border-gray-200"
            >
              <div className="text-xs justify-start w-full sm:w-1/4">
                <div>{item.date}</div>
                <div className=" text-xs text-gray-500">{item.time}</div>
              </div>
              <div className="flex text-xs justify-start w-full">
                {item.name}
              </div>
              <div className="flex text-xs sm:justify-start justify-center w-full sm:w-1/4">
                <a href={"/energies-14-01435-v2 (1).pdf"} download={"report"}>
                  <TbFileDownload className="sm:text-2xl" />
                </a>
              </div>
            </div>
          ))}
        </div>
        <div className="flex sm:flex-row flex-col w-full items-center justify-center gap-2 mt-2 sm:gap-10">
          <div>
            <div className="flex justify-center items-center gap-4">
              <button
                className="flex gap-1 cursor-pointer items-center disabled:text-gray-500 disabled:cursor-not-allowed"
                disabled={currentPage == 1}
                onClick={handlePrev}
              >
                <MdOutlineSkipPrevious className="sm:text-2xl text-xs " />
                <p className="text-xs sm:text-sm">Prev</p>
              </button>
              {renderPageNumbers()}
              <button
                className="flex gap-1 cursor-pointer items-center disabled:text-gray-500 disabled:cursor-not-allowed"
                disabled={currentPage == 40 / noOfRows}
                onClick={handleNext}
              >
                <p className="text-xs sm:text-sm">Next</p>
                <MdOutlineSkipNext className="sm:text-2xl text-xs" />
              </button>
            </div>
          </div>
          <div className="flex gap-2">
            Rows per page
            <input
              type="number"
              placeholder="10"
              className="focus:outline-none w-12 h-6 border-2 border-gray-500 px-1"
              value={noOfRows}
              onChange={(e) => setNoOfRows(Math.abs(e.target.value % 40))}
            />
          </div>
        </div>
      </div>
    </>
  );
}
