import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Nav from "@/app/components/Nav";
import { ThemeProvider } from "@/components/theme-provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Personal Website",
  description:
    "The website of Alazar Lema, Full Stack Nextjs Developer, located in Minnesota, USA. ",
  icons: {
    icon: {
      href: "/assets/letter-a.png",
      url: "/assets/letter-a.png",
    },
  },
};
export const revalidate = 30; //revalidate at most 30 seconds

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`bg-gray-100 dark:bg-black ${inter.className}`}>
        <ThemeProvider attribute="class" defaultTheme="system">
          <Nav />
          <main className="m-2 rounded-lg bg-white px-6 py-16 shadow-main-shadow dark:bg-[rgb(20,20,20)] md:ml-[88px] md:px-20 md:py-[120px] 2xl:ml-[288px]">
            <div className="mx-auto md:w-[600px] lg:w-[720px] xl:w-[904px]">
              {children}
            </div>
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
