import { Playfair_Display, Inter, Poppins} from "next/font/google";

export const playFair = Playfair_Display({ subsets: ["latin"] });
export const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  weight: ["200", "300", "500"],
  variable: "--font-poppins",
});
