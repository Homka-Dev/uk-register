import { Inter } from "next/font/google";
import "./globals.css";
import HeaderComponent from "../../src/components/HeaderComponent"
import FooterComponent from "@/components/FooterComponent";
import RightSectionComponent from "@/components/RightSectionComponent";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Ukraine Horizon",
  description: "",
};

export default function RootLayout({ children }) {
  return (
		<html lang="en">

      <body className={inter.className}>
				<HeaderComponent/>

                <div className="grid-area-[main-content]">{children}</div>
                <RightSectionComponent/>
                <FooterComponent/>
      </body>
    </html>
  );
}
