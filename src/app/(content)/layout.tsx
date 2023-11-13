"use client";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import Sidebar from "../components/Sidebar/Sidebar";

const inter = Inter({ subsets: ["latin"] });

// export const metadata: Metadata = {
//     title: "Haneure",
//     description: "Generated by create next app",
// };

export default function ContentLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <body className={inter.className}>
            <main className="flex flex-col h-screen">
                <Header />
                <div className="content flex flex-row flex-1">
                    <Sidebar />
                    {children}
                </div>
                <Footer />
            </main>
        </body>
    );
}
