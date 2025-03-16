'use client'
import { useState } from "react"
import Image from "next/image";
const Search= () => {
  const [txtSearch , setTxtSearch] =  useState<string>('');
  const [history, setHistory]  = useState<[]>([]);
  return(
    <>
      <div className="max-w-2xl flex justify-center items-center rounded-[4.8rem] px-4 py-3 bg-[rgba(0,0,0,0.05)]  w-full">
        <div className="w-[1.6rem] flex flex-none mr-3">
          <Image src='/icons/ic-search.svg' width={16} height={16} alt="Icon Search" className="w-full"/>
        </div>
        <input type="text" className="flex-1 h-full text-black focus:none focus-visible:outline-none bg-transparent placeholder:text-bd-sf2" placeholder="Tìm kiếm theo từ khóa" />
      </div>
    </>
  )
}
export default Search;