import React from "react";

interface ModalProps {
  isOpen: boolean;
  message: string;
  type: "success" | "error";
}

export default function Modal({
  isOpen,
  message,
  type = "success",
}: ModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-xl max-w-[300px] relative">
        <div className="py-[2.5rem] px-[3.5rem]">
          <div className="text-center mb-4">
            <h3 className="text-gray-600 text-xl font-semibold mt-1">
              {type === "success" ? "Success!" : "Error!"}
            </h3>
            <h4 className="text-gray-600">
              {message}
            </h4>
          </div>
          <div className="flex justify-center">
            {type === "success" ? (
              <div className="relative w-[150px] h-[150px] inline-block">
                <div className="absolute w-[150px] h-[150px] rounded-full bg-[#1ab394]"></div>
                <div className="absolute left-[75%] top-[35%] w-[75px] h-[37.5px] border-r-[15px] border-t-[15px] border-white rounded-[2.5px] origin-top-left animate-checkmark transform rotate-130"></div>
              </div>
            ) : (
              <div className="relative w-[150px] h-[150px] inline-block">
                <div className="absolute w-[150px] h-[150px] rounded-full bg-red-500"></div>
                <div className="absolute left-[50%] top-[50%] -translate-x-1/2 -translate-y-1/2">
                  <div className="w-[80px] h-[80px] relative flex justify-center items-center">
                    <div className="absolute w-[15px] h-[80px] bg-white rotate-45 rounded-sm"></div>
                    <div className="absolute w-[15px] h-[80px] bg-white -rotate-45 rounded-sm"></div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
