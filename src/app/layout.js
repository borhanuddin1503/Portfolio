import { Poppins, Roboto } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";


const roboto = Roboto({
  subsets: ["latin"],
  weight: ['400', '500', '900', '700']
});
export const poppins = Poppins({
  subsets: ["latin"],
  weight: ['400', '500', '900', '700']
});


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${roboto.className}  antialiased `}
      >
          <Navbar></Navbar>
          {children}
      </body>
    </html>
  );
}
