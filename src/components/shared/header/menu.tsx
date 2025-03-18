'use client'
import { EllipsisVertical, ShoppingCart } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import ModeToggle from "./mode-toggle";
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet";
import UserButton from "./user-button";
import {useState} from 'react'
import Message from "./message";
import Notify from "./notify";
import Image from "next/image";

const Menu = () => {
    const [isOpenNotify,setIsOpenNotify] = useState<boolean>(false);
    const [isOpenMessage,setIsOpenMessage] = useState<boolean>(false);
    const handleOpenNotify = () => {
        setIsOpenNotify((prev) => !prev);
        if (isOpenMessage) setIsOpenMessage(false); // Đảm bảo Message đóng khi Notify mở
    };

    const handleOpenMessage = () => {
        setIsOpenMessage((prev) => !prev);
        if (isOpenNotify) setIsOpenNotify(false); // Đảm bảo Notify đóng khi Message mở
    };
    return (
        <div className="flex justify-end gap-3">
            <div className="hidden md:flex w-full"></div>
            <nav className="hidden w-full  gap-3 md:flex ">
                <ModeToggle />
                {/* <UserButton /> */}  
                <Message isOpen={isOpenMessage} handleOpen={handleOpenMessage}/>
                <Notify isNotify = {isOpenNotify} handleOpen={handleOpenNotify}/>
                <Link href='#' className="w-12 rounded-full">
                    <Image src='/images/person-default.svg' alt="Avatar User" width={40} height={40} className="w-full h-full"/>
                </Link>
            </nav>
            <nav className="md:hidden">
                <Sheet>
                    <SheetTrigger className="align-middle">
                        <EllipsisVertical />
                    </SheetTrigger>
                    <SheetContent className="flex flex-col items-start">
                        <SheetTitle>Menu</SheetTitle>
                        <ModeToggle />
                        <Button asChild variant={"ghost"}>
                            <Link href="/cart">
                                <ShoppingCart /> Cart
                            </Link>
                        </Button>
                        <UserButton />
                        <SheetDescription></SheetDescription>
                    </SheetContent>
                </Sheet>
            </nav>
        </div>
    );
};

export default Menu;
