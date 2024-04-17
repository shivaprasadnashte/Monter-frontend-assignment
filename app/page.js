import { CiFilter } from "react-icons/ci";
import { RxCross2 } from "react-icons/rx";
import { TbFileDownload } from "react-icons/tb";

export default function Home() {
  return (
    <>
      <div className="flex flex-col items-center w-full p-5 shadow-2xl m-5 min-h-screen">
        <div className=" flex justify-center w-full p-5 l m-5 ">
          <div className=" flex justify-evenly w-full">
            <div className=" w-3/4 flex justify-center ">
              <h1 className=" font-bold text-xl">Recently Generated Report</h1>
            </div>
            <div className=" flex gap-4 w-1/6 justify-end ">
              <div className=" border-[1px]  border-black rounded-md w-8 h-8 flex justify-center items-center">
                <CiFilter className="text-2xl" />
              </div>
              <div className=" border-[1px]  border-black rounded-md w-8 h-8 flex justify-center items-center">
                <RxCross2 className="text-2xl" />
              </div>
            </div>
          </div>
        </div>
        <div className=" flex w-full justify-evenly bg-gray-100 p-2">
          <div className=" flex flex-col justify-start w-full">Date</div>
          <div className=" flex flex-col justify-start w-full">Report Name</div>
          <div className=" flex flex-col justify-start w-full">Download</div>
        </div>
        <div className=" flex w-full justify-evenly ">
          <div className=" flex flex-col justify-start w-full">
            <p>27 07 2021</p>
            <p className="text-xs text-gray-500">16 02 PM</p>
          </div>
          <div className=" flex flex-col justify-start w-full">
            <p className="">Lorem ipsum dolor sit amet</p>
          </div>
          <div className=" flex flex-col justify-start w-full">
            <TbFileDownload className=" text-4xl text-gray-500" />
          </div>
        </div>
      </div>
    </>
  );
}
