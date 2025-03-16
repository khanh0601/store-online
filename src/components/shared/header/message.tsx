'use client'
import { useState } from "react"
import Image from "next/image"
import  Search from "./search"
const Message = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  return(
    <>
    <div className="w-12 flex bg-[rgb(226,229,233)] p-3 rounded-full ">
        <Image alt="Icon Message" src="/icons/ic-message.svg" width={30} height={30} className="w-full"/>
    </div>
    <div className="absolute top-[100%] right-0 w-[28rem] bg-white rounded-2xl">
      <div className="flex flex-col p-4">
        <h3 className="text-4xl leading-[1.2em] font-semibold mb-4">Đoạn chat</h3>
        <Search/>
      {/* item */}
          <div className="flex gap-4">
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
    </>
  )
}
export default Message;