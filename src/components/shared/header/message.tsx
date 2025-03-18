'use client'
import Image from "next/image"
import  Search from "./search"
type MessageProp = {
  isOpen: boolean;
  handleOpen: () => void;
}
const Message = ({isOpen, handleOpen}: MessageProp) => {
  return(
    <>
    <div className={`w-12 flex  p-3 rounded-full  hover:text-white-900 cursor-pointer transition-all  duration-500 ease hover:bg-primary  ${isOpen?'bg-primary text-white-900':'bg-[rgb(226,229,233)]'} text-black`} onClick={() => handleOpen()}>
    <svg width="100%" viewBox="0 0 123 109" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fill-rule="evenodd" clip-rule="evenodd" d="M51.46 93.8617C64.36 106.302 82.6 110.062 100.84 102.292L116.15 108.292L111.08 96.2317C128.08 82.6017 125.08 63.8817 112.52 51.1217C111.686 55.9886 110.04 60.6807 107.65 65.0017C104.133 71.2618 99.3391 76.7129 93.58 81.0017C87.6692 85.4708 81.0128 88.8565 73.92 91.0017C66.6387 93.1734 59.0541 94.1527 51.46 93.9017V93.8617ZM31.58 54.0717C30.787 54.0267 30.0412 53.6799 29.4957 53.1026C28.9502 52.5252 28.6463 51.761 28.6463 50.9667C28.6463 50.1724 28.9502 49.4082 29.4957 48.8308C30.0412 48.2535 30.787 47.9067 31.58 47.8617H61.51C62.303 47.9067 63.0488 48.2535 63.5943 48.8308C64.1398 49.4082 64.4437 50.1724 64.4437 50.9667C64.4437 51.761 64.1398 52.5252 63.5943 53.1026C63.0488 53.6799 62.303 54.0267 61.51 54.0717H31.58ZM31.58 36.8517C30.787 36.8067 30.0412 36.4599 29.4957 35.8826C28.9502 35.3052 28.6463 34.541 28.6463 33.7467C28.6463 32.9524 28.9502 32.1882 29.4957 31.6108C30.0412 31.0335 30.787 30.6867 31.58 30.6417H74.34C75.133 30.6867 75.8788 31.0335 76.4243 31.6108C76.9698 32.1882 77.2737 32.9524 77.2737 33.7467C77.2737 34.541 76.9698 35.3052 76.4243 35.8826C75.8788 36.4599 75.133 36.8067 74.34 36.8517H31.58ZM54.28 0.00169426C68.81 0.471694 81.8 5.6217 91.09 13.5917C100.58 21.7217 106.26 32.7917 105.91 44.8617C105.54 57.0017 99.19 67.7117 89.22 75.2817C79.44 82.7017 66.15 87.0717 51.66 86.6517C47.7383 86.5406 43.8352 86.0686 40 85.2417C36.6306 84.5246 33.3286 83.521 30.13 82.2417L6.69 91.4417L14.52 72.8117C10.1831 69.0995 6.61002 64.5788 4 59.5017C1.20321 54.027 -0.172285 47.937 5.2806e-07 41.7917C0.380001 29.7017 6.73 19.0017 16.7 11.4017C26.48 4.00169 39.78 -0.398306 54.26 0.00169426H54.28ZM54.13 6.18169H54.08C41 5.83169 29.14 9.72169 20.44 16.3217C11.92 22.7817 6.5 31.8417 6.2 42.0017C6.06678 47.1082 7.21871 52.1664 9.55 56.7117C12.1269 61.6821 15.75 66.0353 20.17 69.4717L22 70.9317L18.08 80.3017L30.16 75.5517L31.33 76.0517C34.5273 77.405 37.8454 78.453 41.24 79.1817C44.7234 79.9332 48.2681 80.365 51.83 80.4717C64.83 80.8517 76.83 76.9617 85.49 70.3517C94 63.8917 99.42 54.8417 99.73 44.7217C100.02 34.6117 95.17 25.2717 87.07 18.3217C78.79 11.1917 67.16 6.61169 54.15 6.21169L54.13 6.18169Z" fill="currentColor"/>
    </svg>

    </div>
    <div className={`absolute z-100  top-[calc(100%+1rem)] right-0 w-[28rem] bg-white-900 max-h-[calc(100vh-8rem)] overflow-hidden z-10 rounded-2xl shadow-lg ${isOpen?'item-active':'item-inactive'} transition-opacity duration-500 ease` }>
      <div className="flex flex-col p-4 ">
        <h3 className="text-3xl leading-[1.2em] font-semibold mb-4">Đoạn chat</h3>
        <Search/>
      {/* item */}
         <div className="mt-5 flex flex-col gap-4 max-h-[calc(100vh-19rem)] overflow-y-auto">
         <div className="flex flex-none gap-4 overflow-auto hover:bg-bg-disable transition-all duration-500 cursor-pointer ease-linear rounded-xl py-2 px-3">
            <div className="w-[4rem] rounded-full overflow-hidden">
              <Image alt="Avatar" src="/images/person-default.svg" width={40} height={40} className="w-full"/>
            </div>
            <div className="flex flex-col">
              <div className="text-[1.5rem] font-bold">John Doe</div>
              <div className="text-[1rem] text-gray-500 line-clamp-1">Hello, how are you</div>
            </div>
          </div>
         </div>
      </div>

    </div>
    </>
  )
}
export default Message;