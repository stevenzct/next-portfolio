import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "../../components/Navbar";
import localFont from "next/font/local";

const PPNeueMontrealBold = localFont({
  src: '../../public/fonts/PPNeueMontreal-Bold.otf',
  variable: '--font-NeueMontreal-bold',
});

const PPNeueMontrealBook = localFont({
  src: '../../public/fonts/PPNeueMontreal-Book.otf',
  variable: '--font-NeueMontreal-book',
});

const PPNeueMontrealMedium = localFont({
  src: '../../public/fonts/PPNeueMontreal-Medium.otf',
  variable: '--font-NeueMontreal-medium',
});


export const metadata: Metadata = {
  title: "Steven Cabugos",
  description: "Creative Software Developer & UI/UX Designer",
  icons: {
    icon: '/favicon.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`
        ${PPNeueMontrealBold.variable} 
        ${PPNeueMontrealBook.variable} 
        ${PPNeueMontrealMedium.variable}
        `}>
        <Navbar />
        <div>
          <main>
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
