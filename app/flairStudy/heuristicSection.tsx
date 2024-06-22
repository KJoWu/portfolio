import issue1 from "../../public/issue1.png";
import issueRedirect from "../../public/issue_redirect.jpg";
import issueVisuals from "../../public/issue_visuals.jpg";
import issueData from "../../public/issue_data.jpg";

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
        <h1 className="font-semibold text-3xl text-gray-800 leading-[1.4em]"> Market Discovery: Evaluating Interface Design, User Experience, and Product Usage
        </h1>
        <hr className="border-t-8 border-gray-800 my-2 w-[10em]" /> 
      </div>
      <p className="font-base leading-8 text-base text-gray-700">
        To gain a comprehensive understanding of user interactions with the app, I conducted a <span className="bg-[#b2ff94]"> heuristic evaluation </span>on the primary pages, with a particular focus on those related to onboarding.
      </p>

      <div className="grid grid-cols-7 gap-10 text-md py-12">

        <section className="col-span-3 h-auto flex items-center rounded-xl ">
          <div className="text-gray-800 w-full">
          <div className="inline-flex items-center text-base py-1 rounded-full mb-3 text-red-500">
              <ExclamationCircleIcon className="h-6 w-6 mr-2 text-red-500 text-2xl" />
              Excessive Website Redirects
            </div>
            <div className="relative flex items-center mb-8">
              <h1 className="text-2xl font-semibold text-gray-900">
                Frequent Website Redirects Compromising App Value
              </h1>
            </div>
            <div className="font-base leading-7 text-base text-gray-700 col-span-1 mb-3">
              <p>
                <span className="bg-[#b2ff94]">Roughly 90% of the main action buttons in the app redirect to the website,</span> leading to inconsistent usability and disrupting the user experience. This practice compromises the unique value proposition of a native app.
              </p>
              <p className="pt-3 font-semibold">
                If the app frequently redirects users to a website, it diminishes the perceived value of the app itself, as it forces users to rely on another product.
              </p>
            </div>
          </div>
        </section>
        <Image src={issueRedirect} alt={"issue 1"} quality={95} className="rounded-xl w-full h-[30em] object-contain bg-white col-span-4" />

      </div>




      <div className="grid grid-cols-12 gap-10 text-md h-full py-12 ">
        <Image src={issueData} alt={"issue 1"} quality={95} className="rounded-xl w-full h-full object-contain bg-white col-span-7" />
        <section className="col-span-5 flex items-center">
          <div className="text-gray-800 w-full">
          <div className="inline-flex items-center text-base py-1 rounded-full mb-3 text-red-500">
              <ExclamationCircleIcon className="h-6 w-6 mr-2 text-red-500 text-2xl" />
              Data Retention Issues
            </div>
            <div className="relative flex items-center mb-8">
              <h1 className="text-2xl font-semibold text-gray-900 mt-2">  Reduced Convenience Due to No Data Retention</h1>
            </div>


            <div className="font-base leading-8 text-base text-gray-700  col-span-1">
              <p>
                As mentioned, main user flows, such as user login, are redirected to the website. Because of this, <span className="bg-[#b2ff94]">user information is not present on the app.</span>  This means users must repeatedly enter information like flight details, QR codes, and boarding passes, making the app less user-friendly and personalized. <span className="bg-[#b2ff94]">his is especFially problematic for time-sensitive tasks</span> like check-in and boarding, disrupting the seamless experience users expect.</p>
              <p className="pt-2 font-semibold">
                If the app cannot retain and manage user data effectively, it fails to provide the personalized and streamlined experience users anticipate from a native application.</p>
            </div>
          </div>
        </section>

      </div >

      <div className="grid grid-cols-5 gap-10 text-md h-full py-12">
        <section className="col-span-2  flex items-center">
          <div className="text-gray-800 w-full">
          <div className="inline-flex items-center text-base py-1 rounded-full mb-3 text-red-500">
              <ExclamationCircleIcon className="h-6 w-6 mr-2 text-red-500 text-2xl" />
              Disjointed Visual Branding
            </div>
        
            <div className="relative flex items-center mb-8">
              <h1 className="text-2xl font-semibold text-gray-900"> Confusing Visuals and Inconsistent Design
              </h1>
            </div>


            <div className="font-base leading-8 text-base text-gray-700  col-span-2">
              <p >
                The app's diverse colors, text sizes, and fonts <span className="bg-[#b2ff94]">create a fragmented visual hierarchy, resulting in a chaotic and unpolished appearance.</span> Inconsistent elements disrupt the user experience, complicating navigation and overwhelming users. This makes it challenging to understand the visual structure, causing frustration and inefficiency.

              </p>
              <p className="pt-2 font-semibold">

                Implementing a unified design system is essential to maintaining the company's visual branding and ensuring a seamless, enjoyable user experience.
              </p>

            </div>
          </div>
        </section>

        <Image src={issueVisuals} alt={"issue 1"} quality={95} className="rounded-xl w-full h-full object-contain bg-white col-span-3" />
      </div>
    </div >

  );
};