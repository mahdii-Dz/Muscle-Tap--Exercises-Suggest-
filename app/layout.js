import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Context from "./context/Context";
import Providers from "./providers";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Muscle Tap",
  description: "Choose The Muscle Yoy Want And Get Instant Workout",
  openGraph: {
    title: "Muscle Tap",
    description: "Choose The Muscle Yoy Want And Get Instant Workout",
    url: "https://muscle-tap.netlify.app/",
    images: [
      {
        url: "https://muscle-tap.netlify.app/Muscle-Tap.png",
        width: 1366,
        height: 768,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Muscle Tap",
    description: "Choose The Muscle Yoy Want And Get Instant Workout",
    creator: "@mahdii_Dz",
    image: ["https://muscle-tap.netlify.app/Muscle-Tap.png"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased sm:overflow-hidden`}
      >
        <Context>
          <Providers>{children}</Providers>
        </Context>
      </body>
    </html>
  );
}
