import issue1 from "../../public/issue1.png";
import issueRedirect from "../../public/issue_redirect.jpg";
import issueVisuals from "../../public/issue_visuals.jpg";

import issue2 from "../../public/issue2.jpg";
import { ExclamationCircleIcon } from "@heroicons/react/24/solid"

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Image, { StaticImageData } from "next/image";


interface ImageProps {
  src: StaticImageData;
  alt: string;
}


export const HeuristicSection = () => {


  const images: ImageProps[] = [
    { src: issueRedirect, alt: 'Image 1' },
    { src: issueRedirect, alt: 'Image 2' },
    { src: issueRedirect, alt: 'Image 3' }
  ];

  const dotLabels = ["error1", "menu error", "error 2"];


  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    customPaging: (i: number) => (
      <div className="custom-dot">
        {dotLabels[i]}
      </div>
    ),
    appendDots: (dots: React.ReactNode) => (
      <div style={{ position: "absolute", bottom: "-50px", width: "100%" }}>
        <ul className="custom-dots">{dots}</ul>
      </div>
    ),
  };


  return (
    <div className="leading-8 mt-8">
      <div className="mb-8">
        <h1 className="font-bold text-4xl text-gray-800 leading-10 leading-[1.2em]"> Market Discovery: Evaluating Interface Design, User Experience, and Product Usage
        </h1>
        <hr className="border-t-4 border-[#b2ff94] my-4 w-[10em]" />
      </div>
      <p className="font-light leading-8 text-base text-gray-700">
        To gain a comprehensive understanding of user interactions with the app, I conducted a heuristic evaluation on the primary pages, with a particular focus on those related to onboarding.
      </p>

      <div className="grid grid-cols-7 gap-10 text-md py-12">

        <section className="col-span-3 h-auto flex items-center rounded-xl ">
          <div className="text-gray-800 w-full">
            <div className="inline-flex items-center bg-red-500 text-white text-sm px-3 py-1 rounded-full mb-5">
              <ExclamationCircleIcon className="h-5 w-5 mr-2" />
              Excessive Website Redirects
            </div>
            <div className="relative flex items-center mb-8">
              <h1 className="text-2xl font-semibold text-gray-900">
                Frequent Website Redirects Compromising App Value
              </h1>
            </div>
            <div className="font-light leading-7 text-base text-gray-700 col-span-1 mb-2">
              <p>
                <span className="font-semibold">Roughly 90% of the main action buttons in the app redirect to the website,</span> leading to inconsistent usability and disrupting the user experience. This practice compromises the unique value proposition of a native app.
              </p>
              <p className="pt-3">
                If the app frequently redirects users to a website, it diminishes the perceived value of the app itself, as it forces users to rely on another product.
              </p>
            </div>
          </div>
        </section>
        <Image src={issueRedirect} alt={"issue 1"} quality={95} className="rounded-xl w-full h-[30em] object-contain bg-white col-span-4" />

      </div>




      <div className="grid grid-cols-12 gap-10 text-md h-full py-12 ">
        <Image src={issue1} alt={"issue 1"} quality={95} className="rounded-xl w-full h-full object-contain bg-white col-span-7" />
        <section className="col-span-5 flex items-center">
          <div className="text-gray-800 w-full">
            <div className="inline-flex items-center bg-red-500 text-white text-sm px-3 py-1 rounded-full mb-4">
              <ExclamationCircleIcon className="h-5 w-5 mr-2" />
              Data Retention Issues
            </div>
            <div className="relative flex items-center mb-8">
              <h1 className="text-2xl font-semibold text-gray-900">  Reduced Convenience Due to No Data Retention</h1>
            </div>


            <div className="font-light leading-8 text-base text-gray-700  col-span-1">
              <p>
                As mentioned, main user flows, such as user login, are redirected to the website. Because of this, <span className="font-semibold">user information is not present on the app.</span>  This means users must repeatedly enter information like flight details, QR codes, and boarding passes, making the app less user-friendly and personalized. This is especially problematic for time-sensitive tasks like check-in and boarding, disrupting the seamless experience users expect.</p>
              <p className="pt-2">
                If the app cannot retain and manage user data effectively, it fails to provide the personalized and streamlined experience users anticipate from a native application.</p>
            </div>
          </div>
        </section>

      </div >

      <div className="grid grid-cols-12 gap-10 text-md h-full py-12">
        <section className="col-span-4  flex items-center">
          <div className="text-gray-800 w-full">
            <div className="inline-flex items-center bg-red-500 text-white text-sm px-3 py-1 rounded-full mb-4">
              <ExclamationCircleIcon className="h-5 w-5 mr-2" />
              Disjointed Design
            </div>
            <div className="relative flex items-center mb-8">
              <h1 className="text-2xl font-semibold text-gray-900"> Confusing Visuals and Inconsistent Design
              </h1>
            </div>


            <div className="font-light leading-8 text-base text-gray-700  col-span-2">
              <p className="mb-8">
                The app exhibits a diverse range of colors, text sizes, and fonts for buttons and other elements, leading to a fragmented visual hierarchy. <span className="font-semibold">The lack of a cohesive theme results in a chaotic and unpolished appearance.</span> Inconsistent visual elements disrupt the user experience, complicating navigation and overwhelming users. As a result, users may find it challenging to comprehend the visual structure and information architecture, causing frustration and inefficiency.
              </p>


              <p className="pt-2">
                Implementing a unified design system is essential for crafting an intuitive and visually appealing user interface, ensuring a seamless and enjoyable user experience.
              </p>

            </div>
          </div>
        </section>

        <Image src={issueVisuals} alt={"issue 1"} quality={95} className="rounded-xl w-full h-full object-contain bg-white col-span-8" />
      </div>

      <div className="font-light leading-8 text-base text-gray-700">Based on the heuristic investigation, it is clear that the app suffers from significant usability issues caused by inconsistent design, poor user retention, and frequent redirects to the website. These issues create a chaotic user experience, with a lack of cohesive design making navigation difficult and frustrating. Users are forced to repeatedly enter information, diminishing the app's personalization and convenience. Additionally, frequent redirections disrupt the seamless experience expected from a native app, leading users to question its value and ultimately seek more reliable and user-friendly alternatives.


      </div>

    </div >

  );
};