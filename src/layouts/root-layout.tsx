import Header from "@/components/shared/header";
import Footer from "@/components/ui/footer";

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div className="flex h-screen flex-col overflow-hidden">
            <Header />
            <main className="wrapper flex-1">{children}</main>
            <Footer />
        </div>
    );
}
