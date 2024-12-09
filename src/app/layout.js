import localFont from "next/font/local";
import { Nunito } from "next/font/google";
import "./style/global.css";
import "./style/app.scss";
import { AppProvider } from "./context/appContext";
import { Providers } from "./providers";
import { GoogleAnalytics } from "@next/third-parties/google";

// const geistMono = localFont({
//   src: "./fonts/GeistMonoVF.woff",
//   variable: "--font-geist-mono",
//   weight: "100 900",
// });

const nunito = localFont({
  src: [
    {
      path: "./fonts/nunito/Nunito-ExtraLight.woff",
      weight: "200",
    },
    {
      path: "./fonts/nunito/Nunito-Light.woff",
      weight: "300",
    },
    {
      path: "./fonts/nunito/Nunito-Regular.woff",
      weight: "400",
    },
    {
      path: "./fonts/nunito/Nunito-Medium.woff",
      weight: "500",
    },
    {
      path: "./fonts/nunito/Nunito-SemiBold.woff",
      weight: "600",
    },
    {
      path: "./fonts/nunito/Nunito-Bold.woff",
      weight: "700",
    },
    {
      path: "./fonts/nunito/Nunito-ExtraBold.woff",
      weight: "800",
    },
    {
      path: "./fonts/nunito/Nunito-Black.woff",
      weight: "900",
    },
  ],
  variable: "--font-nunito",
});

const merienda = localFont({
  src: [
    {
      path: "./fonts/merienda/Merienda-Light.woff",
      weight: "300",
    },
    {
      path: "./fonts/merienda/Merienda-Regular.woff",
      weight: "400",
    },
    {
      path: "./fonts/merienda/Merienda-Medium.woff",
      weight: "500",
    },
    {
      path: "./fonts/merienda/Merienda-SemiBold.woff",
      weight: "600",
    },
    {
      path: "./fonts/merienda/Merienda-Bold.woff",
      weight: "700",
    },
    {
      path: "./fonts/merienda/Merienda-ExtraBold.woff",
      weight: "800",
    },
    {
      path: "./fonts/merienda/Merienda-Black.woff",
      weight: "900",
    },
  ],
  variable: "--font-merienda",
});

const bulldog = localFont({
  src: [
    {
      path: "./fonts/bulld.woff",
      weight: "500",
    },
  ],
  variable: "--font-bulldog",
});

const herme = localFont({
  src: [
    {
      path: "./fonts/herme.woff",
      weight: "500",
    },
  ],
  variable: "--font-herme",
});
export const metadata = {
  title: "Sate House Senayan - Discover the Flavors of Indonesia",
  description:
    "Explore a new world of flavors, with Sate House Senayan as your trusted guide. Reserve Now!",
  keyword:
    "Sate House Senayan,Sate Khas Senayan,Sate Senayan Bali,Sate House Senayan Canggu,Sate House Senayan Menu,Sate House Senayan Food,Sate House Senayan Menu,Reservation Sate House Senayan,Best Satay in Bali,Bali Food Recommendation,Restaurant in Canggu,Best Indonesian Restaurant Canggu,Authentic Indonesian Cuisine Canggu,Family-Friendly Restaurant Canggu,Traditional Indonesian Food Canggu,Sarirasa Group Restaurant,Best Restaurant in Bali ,Bali Delicious Indonesian Restaurant",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${herme.className} ${bulldog.className} `}
    >
      <body>
        <AppProvider>
          <Providers>{children}</Providers>
        </AppProvider>
      </body>
      <GoogleAnalytics gaId="G-S4T24HRCFS" />
    </html>
  );
}
