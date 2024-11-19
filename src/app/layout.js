import localFont from "next/font/local";
import { Nunito } from "next/font/google";
import "./style/global.css";
import "./style/app.scss";


// const geistMono = localFont({
//   src: "./fonts/GeistMonoVF.woff",
//   variable: "--font-geist-mono",
//   weight: "100 900",
// });



const nunito = localFont({
  src:[
    {
      path : "./fonts/nunito/Nunito-ExtraLight.woff",
      weight: "200"
    },
    {
      path : "./fonts/nunito/Nunito-Light.woff",
      weight: "300"
    },
    {
      path : "./fonts/nunito/Nunito-Regular.woff",
      weight: "400"
    },
    {
      path : "./fonts/nunito/Nunito-Medium.woff",
      weight: "500"
    },
    {
      path : "./fonts/nunito/Nunito-SemiBold.woff",
      weight: "600"
    },
    {
      path : "./fonts/nunito/Nunito-Bold.woff",
      weight: "700"
    },
    {
      path : "./fonts/nunito/Nunito-ExtraBold.woff",
      weight: "800"
    },
    {
      path : "./fonts/nunito/Nunito-Black.woff",
      weight: "900"
    },
  ],
  variable :"--font-nunito"
});

const merienda = localFont({
  src:[
    {
      path : "./fonts/merienda/Merienda-Light.woff",
      weight: "300"
    },
    {
      path : "./fonts/merienda/Merienda-Regular.woff",
      weight: "400"
    },
    {
      path : "./fonts/merienda/Merienda-Medium.woff",
      weight: "500"
    },
    {
      path : "./fonts/merienda/Merienda-SemiBold.woff",
      weight: "600"
    },
    {
      path : "./fonts/merienda/Merienda-Bold.woff",
      weight: "700"
    },
    {
      path : "./fonts/merienda/Merienda-ExtraBold.woff",
      weight: "800"
    },
    {
      path : "./fonts/merienda/Merienda-Black.woff",
      weight: "900"
    },
  ],
  variable :"--font-merienda"
});
export const metadata = {
  title: "Sari Rasa",
  description: "Under Construction",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning className={`${merienda.className} ${nunito.className} `}>
      <body
      >
        {children}
      </body>
    </html>
  );
}
