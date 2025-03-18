import { APP_NAME } from "@/lib/constants";
import Link from "next/link";
import ImagePlaceholder from "../image-placeholder";
import Menu from "./menu";
import Search from "./search";
const Header = () => {
    return (
        <header className="w-full  shadow-md relative z-10">
            <div className="wrapper flex-between relative">
                <div className="flex-start">
                    <Link href="/" className="flex-start">
                        <ImagePlaceholder
                            alt={`${APP_NAME} logo`}
                            src="/images/logo.png"
                            height={48}
                            width={48}
                            priority
                            className="h-9 w-9"
                        />
                    </Link>
                </div>
                <Search />
                <Menu />
                
            </div>
        </header>
    );
};

export default Header;
