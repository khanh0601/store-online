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
import Image from "next/image";
import Message from "./message";

const Menu = () => {
    return (
        <div className="flex justify-end gap-3">
            <div className="hidden md:flex w-full"></div>
            <nav className="hidden w-full  gap-3 md:flex ">
                <ModeToggle />
                {/* <UserButton /> */}  
                <Message/>
                <div className="w-12 flex bg-[rgb(226,229,233)] p-3 rounded-full ">
                    <Image alt="Icon Message" src="/icons/ic-notify.svg" width={30} height={30} className="w-full"/>
                </div>
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
