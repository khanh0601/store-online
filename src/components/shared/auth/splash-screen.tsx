import ImagePlaceholder from "../image-placeholder";

export default function SplashScreen() {
    return (
        <div className="sticky top-0 h-screen overflow-hidden bg-bg-dark-main">
            <div className="flex-start relative z-20 h-full flex-col">
                <div className="mt-[8.6vh] aspect-square w-[6.875rem]">
                    <ImagePlaceholder
                        alt="Logo"
                        src={"/images/logo-full-white.png"}
                        width={440}
                        height={40}
                    />
                </div>
                <div className="my-auto pb-[3.7vh] text-center">
                    <div className="ff-decor text-5xl leading-[1.1em] text-typo-dark-primary opacity-30">
                    Chào mừng
                    </div>
                    <div className="ff-decor text-mask text-[4.5rem] leading-[1.1em] text-typo-dark-primary">
                    Đến với chúng tôi
                    </div>
                </div>
                {/* <div className="w-full max-w-[37.625rem]">
                    <ImagePlaceholder
                        alt="Barrel"
                        src={"/images/login-image.png"}
                        width={1024}
                        height={826}
                        className="aspect-[1024/826]"
                    />
                </div> */}
            </div>
            <div className="absolute inset-0 z-10">
                <ImagePlaceholder
                    alt="Background"
                    src={"/images/splash-bg.svg"}
                    style={{ objectFit: "cover" }}
                    className="absolute inset-0 z-10"
                    imgClassName="h-full"
                    width={864}
                    height={1080}
                    unoptimized={true}
                />
            </div>
        </div>
    );
}
