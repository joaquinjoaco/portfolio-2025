import type { Metadata } from "next";
import "./globals.css";
import localFont from "next/font/local";

const RobotoFlex = localFont({
  src: './fonts/RobotoFlex-VariableFont_GRAD,XOPQ,XTRA,YOPQ,YTAS,YTDE,YTFI,YTLC,YTUC,opsz,slnt,wdth,wght.ttf',
})

export const metadata: Metadata = {
  title: "Joaquín Gómez @ 2025 ",
  description: "Joaquín Gómez @ 2025 My latest projects",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${RobotoFlex.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
