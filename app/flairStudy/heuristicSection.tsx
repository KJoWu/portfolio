import issue1 from "../../public/issue1.png";
import issue2 from "../../public/issue2.jpg";
import { ExclamationCircleIcon } from "@heroicons/react/24/solid"


import Image from "next/image";





export const HeuristicSection = () => {

  return (
    <div className="leading-8 mt-8">
      <div className="mb-8">
        <h1 className="font-bold text-4xl text-gray-800 leading-10 leading-[1.2em]"> Market Discovery: Evaluating Interface Design, User Experience, and Product Usage
        </h1>
        <hr className="border-t-4 border-[#b2ff94] my-4 w-[10em]" />
      </div>
      <p className="font-light leading-8 text-base text-gray-700">
        To gain a comprehensive understanding of user interactions with the app, I conducted a heuristic evaluation on the primary pages, with a particular focus on those related to checking the boarding pass.
      </p>

      <div className="grid grid-cols-7 gap-10 text-md h-full py-12">

        <section className="col-span-3 flex items-center rounded-xl">
          <div className="text-gray-800 w-full">
            <div className="inline-flex items-center bg-red-500 text-white text-sm px-3 py-1 rounded-full mb-5">
              <ExclamationCircleIcon className="h-5 w-5 mr-2" />
              Excessive Website Redirects
            </div>
            <div className="relative flex items-center mb-8">
              <h1 className="text-2xl font-semibold text-gray-900">  Frequent Website Redirects Compromising App Value</h1>
            </div>


            <div className="font-light leading-8 text-base text-gray-700 col-span-1">
              <p className="mb-8">
                Roughly 90% of the main action buttons in the app redirect to the website, leading to inconsistent usability and disrupting the user experience. This practice compromises the unique value proposition of a native app.
                <p className="text-[#ff6c6c] font-medium	">
                  If the app frequently redirects users to a website, it diminishes the perceived value of the app itself, as it forces users to rely on another product.
                </p>
              </p>
            </div>
          </div>
        </section>
        <Image src={issue1} alt={"issue 1"} quality={95} className="rounded-xl w-full h-full object-contain bg-white col-span-4" />


      </div>





      <div className="grid grid-cols-3 gap-10 text-md h-full py-12">
        <Image src={issue1} alt={"issue 1"} quality={95} className="rounded-xl w-full h-full object-contain bg-white col-span-2" />

        <section className="col-span-1 flex items-center rounded-xl">
          <div className="text-gray-800 w-full">
            <div className="inline-flex items-center bg-red-500 text-white text-sm px-3 py-1 rounded-full mb-4">
              <ExclamationCircleIcon className="h-5 w-5 mr-2" />
              Data Retention Issues
            </div>
            <div className="relative flex items-center mb-8">
              <h1 className="text-2xl font-semibold text-gray-900">  Reduced Convenience Due to No Data Retention</h1>
            </div>


            <div className="font-light leading-8 text-base text-gray-700  col-span-1">
              <p className="mb-8">
                As mentioned, main user flows, such as user login, are redirected to the website and not returned to the app. This means users must repeatedly enter information like flight details, QR codes, and boarding passes, making the app less user-friendly and personalized. This is especially problematic for time-sensitive tasks like check-in and boarding, disrupting the seamless experience users expect.                 <p className="text-[#ff6c6c] font-medium">
                  If the app cannot retain and manage user data effectively, it fails to provide the personalized and streamlined experience users anticipate from a native application.</p>
              </p>
            </div>
          </div>
        </section>

      </div>


      <div className="grid grid-cols-3 gap-10 text-md h-full py-12">
        <section
          className="col-span-1 flex items-center rounded-xl"
        >
          <div className="text-gray-800 w-full">
            <div className="inline-flex items-center bg-red-500 text-white text-sm px-3 py-1 rounded-full mb-4">
              <ExclamationCircleIcon className="h-5 w-5 mr-2" />
              Disjointed Design
            </div>
            <div className="relative flex items-center mb-8">
              <h1 className="text-2xl font-semibold text-gray-900"> Confusing Visuals and Inconsistent Design Harm User Experience
              </h1>
            </div>


            <div className="font-light leading-8 text-base text-gray-700  col-span-1">
              <p className="mb-8">
                The app features a wide array of colors, text sizes, and fonts for buttons and other elements, resulting in a disjointed visual hierarchy. This lack of a cohesive design theme makes the app appear chaotic and unpolished. Inconsistent visual elements disrupt the user experience by complicating navigation and overwhelming users. Users may struggle to understand the visual structure and information architecture, leading to frustration and inefficiency. A unified design system is crucial for creating an intuitive and visually appealing user interface, ensuring a seamless and enjoyable user experience.



















              </p>
            </div>
          </div>
        </section>

        <Image src={issue1} alt={"issue 1"} quality={95} className="rounded-xl w-full h-full object-contain bg-white col-span-2" />
      </div>

      <p className="font-light leading-8 text-base text-gray-700 ">Based on the heuristic investigation, it is clear that the app suffers from significant usability issues caused by inconsistent design, poor user retention, and frequent redirects to the website. These issues create a chaotic user experience, with a lack of cohesive design making navigation difficult and frustrating. Users are forced to repeatedly enter information, diminishing the app's personalization and convenience. Additionally, frequent redirections disrupt the seamless experience expected from a native app, leading users to question its value and ultimately seek more reliable and user-friendly alternatives.


      </p>

    </div>

  );
};