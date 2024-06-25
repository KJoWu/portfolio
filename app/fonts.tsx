import { Playfair_Display, Inter, Poppins, Source_Serif_4, DM_Serif_Text, DM_Sans, DM_Serif_Display } from "next/font/google";

export const playFair = Playfair_Display({ subsets: ["latin"] });
import localFont from '@next/font/local';

export const TiempoBold = localFont({
  src: '../public/fonts/tiempoBold.otf',
  weight: 'bold',
  style: 'normal',
});


export const TiempoSemi = localFont({
  src: '../public/fonts/tiempoSemi.otf',
  weight: 'semi-bold',
  style: 'normal',
});


export const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"]
})

export const dmSerif = DM_Serif_Display({
  weight: ["400"],
  subsets: ['latin'], // you can include other subsets if needed
  display: 'swap',
});

export const sourceSerfif = Source_Serif_4({
  subsets:["latin"]
})

export const inter = Inter({
  subsets: ["latin"]
})
