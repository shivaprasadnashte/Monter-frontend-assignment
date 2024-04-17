"use client";
import { CiFilter } from "react-icons/ci";
import { RxCross2 } from "react-icons/rx";
import { TbFileDownload } from "react-icons/tb";
import { MdOutlineSkipPrevious } from "react-icons/md";
import { MdOutlineSkipNext } from "react-icons/md";
import { useState } from "react";

export default function Home() {
  const report = [
    {
      date: "27 07 2021",
      time: "16 02 PM",
      name: "Lorem ipsummkrl; edne; l3dne; 3dnej; 3ndje n3c; dolor sit amet",
    },
    {
      date: "27 07 2021",
      time: "16 02 PM",
      name: "Lorem ipsummkrl; edne; l3dne; 3dnej; 3ndje n3c; dolor sit amet",
    },
    {
      date: "27 07 2021",
      time: "16 02 PM",
      name: "Lorem ipsummkrl; edne; l3dne; 3dnej; 3ndje n3c; dolor sit amet",
    },
    {
      date: "27 07 2021",
      time: "16 02 PM",
      name: "Lorem ipsummkrl; edne; l3dne; 3dnej; 3ndje n3c; dolor sit amet",
    },
    {
      date: "27 07 2021",
      time: "16 02 PM",
      name: "Lorem ipsummkrl; edne; l3dne; 3dnej; 3ndje n3c; dolor sit amet",
    },
    {
      date: "27 07 2021",
      time: "16 02 PM",
      name: "Lorem ipsummkrl; edne; l3dne; 3dnej; 3ndje n3c; dolor sit amet",
    },
    {
      date: "27 07 2021",
      time: "16 02 PM",
      name: "Lorem ipsummkrl; edne; l3dne; 3dnej; 3ndje n3c; dolor sit amet",
    },
    {
      date: "27 07 2021",
      time: "16 02 PM",
      name: "Lorem ipsummkrl; edne; l3dne; 3dnej; 3ndje n3c; dolor sit amet",
    },
    {
      date: "27 07 2021",
      time: "16 02 PM",
      name: "Lorem ipsummkrl; edne; l3dne; 3dnej; 3ndje n3c; dolor sit amet",
    },
    {
      date: "27 07 2021",
      time: "16 02 PM",
      name: "Lorem ipsummkrl; edne; l3dne; 3dnej; 3ndje n3c; dolor sit amet",
    },
  ];
  const [noOfRows, setNoOfRows] = useState(1);
  const [start, setStart] = useState(0);
  const [end, setEnd] = useState();
  const handleNext = () => {
    setStart(start + noOfRows);
    setEnd(start + noOfRows);
   
  };
  const handlePrev = () => {
    setStart(start - noOfRows);
    setEnd(start - noOfRows);
   
  };

  return (
    <>
      <div className="flex flex-col items-center sm:p-10 shadow-2xl m-1 sm:my-5 sm:mx-5 min-h-screen">
        <div className=" flex justify-center  w-full ">
          <div className=" flex justify-evenly w-full">
            <div className=" w-3/4 flex sm:justify-center ">
              <h1 className=" font-bold text-sm  sm:text-xl">
                Recently Generated Report
              </h1>
            </div>
            <div className=" flex gap-4 w-1/6 justify-end ">
              <div className=" border-[1px]  border-black rounded-md h-6 sm:w-8 sm:h-8 flex justify-center items-center">
                <CiFilter className="sm:text-2xl" />
              </div>
              <div className=" border-[1px]  border-black rounded-md sm:w-8 h-6 sm:h-8 flex justify-center items-center">
                <RxCross2 className="sm:text-2xl" />
              </div>
            </div>
          </div>
        </div>
        <div className=" flex w-full justify-evenly bg-gray-100 p-2">
          <div className=" flex text-xs font-bold justify-start w-full sm:w-1/4">
            Date
          </div>
          <div className=" flex text-xs font-bold justify-start w-full">
            Report Name
          </div>
          <div className=" flex text-xs font-bold justify-start w-full sm:w-1/4">
            Download
          </div>
        </div>
        {report.slice(start, end).map((item, index) => (
          <div
            key={index}
            className=" flex w-full justify-evenly p-2 border-t border-gray-200"
          >
            <div className="  text-xs justify-start w-full sm:w-1/4">
              <div>{item.date}</div>
              <div>{item.time}</div>
            </div>
            <div className=" flex text-xs justify-start w-full">
              {item.name}
            </div>
            <div className=" flex text-xs justify-start w-full sm:w-1/4">
              <div className=" border-[1px]  border-black rounded-md h-6 w-8 flex justify-center items-center">
                <TbFileDownload className="sm:text-2xl" />
              </div>
            </div>
          </div>
        ))}
        <div className=" flex w-full items-center justify-center gap-10">
          <div>
            <div className=" flex justify-center items-center gap-4">
              <div className=" flex gap-1">
                <MdOutlineSkipPrevious className="sm:text-2xl" onClick={handlePrev} />
                <p>Prev</p>
              </div>
              <div className="border-2 flex justify-center items-center bg-orange-500 w-8 h-8">
                <p>1</p>
              </div>

              <div className=" flex gap-1" onClick={handleNext}>
                <p>Next</p>
                <MdOutlineSkipNext className="sm:text-2xl" />
              </div>
            </div>
          </div>

          <div className=" flex gap-2">
            Rows per page
            <input
              type="number"
              placeholder="10"
              className=" focus:outline-none w-12 h-6 border-2 border-gray-500 px-1"
              value={noOfRows}
              onChange={(e) => setNoOfRows(e.target.value)}
              onClick={() => {
                setEnd(start + noOfRows);
              }}
            />
          </div>
        </div>
      </div>
    </>
  );
}
