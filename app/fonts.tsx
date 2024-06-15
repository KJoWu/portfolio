import { Playfair_Display, Inter, Poppins } from "next/font/google";

export const playFair = Playfair_Display({ subsets: ["latin"] });

export const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"]
})

export const inter = Inter({
  subsets: ["latin"]
})
