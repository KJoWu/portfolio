import issue1 from "../../public/issue1.png";
import issue2 from "../../public/issue2.jpg";
import { ExclamationCircleIcon } from "@heroicons/react/24/solid"

import React, { useState } from 'react';


import Image from "next/image";





export const HeuristicSection = () => {
  const [currentIssue, setCurrentIssue] = useState(1); // State to track current issue

  const handleToggleIssue = (issueNumber: number) => {
    setCurrentIssue(issueNumber);
  };

  return (
    <div className="leading-8 mt-8">
      <div className="mb-8">
        <h1 className="font-bold text-4xl text-gray-800 leading-10 leading-[1.2em]"> Market Discovery: Evaluating Interface Design, User Experience, and Product Usage
        </h1>
        <hr className="border-t-4 border-[#b2ff94] my-4 w-[10em]" />
      </div>
      <div className="bg-black p-3 mt-5">
        <div className="font-light leading-relaxed  text-gray-700">
          <p className="mt-8 mb-6 text-base">
            To understand how users interact with the app, I performed a heuristic evaluation and followed my friend's user journey to fetch booking information. Here's what I found:
          </p>
          <b>User flow for retrieving a Booked FLight</b>
        </div>
      </div>

      <div className="grid grid-cols-7 gap-10 text-md h-full py-36">

        <section className="col-span-3 flex items-center rounded-xl">
          <div className="text-gray-800 w-full">
            <div className="inline-flex items-center bg-red-500 text-white text-sm px-3 py-1 rounded-full mb-5">
              <ExclamationCircleIcon className="h-5 w-5 mr-2" />
              Excessive Website Redirects
            </div>
            <div className="relative flex items-center mb-8">
              <h1 className="text-2xl font-semibold text-gray-900">  Frequent Website Redirects Compromising App Value</h1>
            </div>


            <div className="font-light leading-relaxed text-base text-gray-700 col-span-1">
              <p className="mb-8">
                90% of the main action buttons in the app redirect to the website, leading to inconsistent usability issues that disrupt the user experience and cause frustration and disengagement. This practice compromises the unique value proposition of a native app. If an app frequently redirects to a website, it fails to deliver its intended value.

              </p>
            </div>
          </div>
        </section>
        <Image src={issue1} alt={"issue 1"} quality={95} className="rounded-xl w-full h-full object-contain bg-black col-span-4" />


      </div>





      <div className="grid grid-cols-3 gap-10 text-md h-full py-36">
        <Image src={issue1} alt={"issue 1"} quality={95} className="rounded-xl w-full h-full object-contain bg-black col-span-2" />

        <section className="col-span-1 flex items-center rounded-xl">
          <div className="text-gray-800 w-full">
            <div className="inline-flex items-center bg-red-500 text-white text-sm px-3 py-1 rounded-full mb-4">
              <ExclamationCircleIcon className="h-5 w-5 mr-2" />
              Data Retention Issues
            </div>
            <div className="relative flex items-center mb-8">
              <h1 className="text-2xl font-semibold text-gray-900">  Reduced Convenience Due to No Data Retention</h1>
            </div>


            <div className="font-light leading-relaxed text-base text-gray-700 col-span-1">
              <p className="mb-8">
                When the app redirects to the website, including the login page, users are not returned to the app. This lack of data retention means users must repeatedly enter information such as flight details, QR codes, and boarding passes, making the app significantly less user-friendly. This inconvenience and potential for errors are particularly problematic for time-sensitive tasks like check-in and boarding. Disrupting the seamless experience users expect, the app becomes less efficient and reliable, driving users to seek more convenient alternatives.

              </p>
            </div>
          </div>
        </section>

      </div>


      <div className="grid grid-cols-3 gap-10 text-md h-full py-36">
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


            <div className="font-light leading-relaxed text-base text-gray-700 col-span-1">
              <p className="mb-8">
                The app features a wide array of colors, text sizes, and fonts for buttons and other elements, resulting in a disjointed visual hierarchy. This lack of a cohesive design theme makes the app appear chaotic and unprofessional. Inconsistent visual elements disrupt the user experience by complicating navigation and overwhelming users. Users may struggle to understand the visual structure and information architecture, leading to frustration and inefficiency. A unified design system is crucial for creating an intuitive and visually appealing user interface, ensuring a seamless and enjoyable user experience.



















              </p>
            </div>
          </div>
        </section>

        <Image src={issue1} alt={"issue 1"} quality={95} className="rounded-xl w-full h-full object-contain bg-black col-span-2" />
      </div>



      <div className="grid grid-cols-3 gap-10 text-md h-full py-36">
        {/* Issue Image */}
        <div className="col-span-2">
          <Image src={currentIssue === 1 ? issue1 : issue2} alt={`issue ${currentIssue}`} quality={95} className="rounded-xl w-full h-full object-contain bg-black" />
        </div>

        {/* Issue Description */}
        <section className="col-span-1 flex items-center rounded-xl">
          <div className="text-gray-800 w-full">
            {/* Issue Header */}
            <div className="inline-flex items-center bg-red-500 text-white text-sm px-3 py-1 rounded-full mb-4">
              <ExclamationCircleIcon className="h-5 w-5 mr-2" />
              {currentIssue === 1 ? 'Usability Issues due to Design' : 'Header Issue'}
            </div>
            {/* Issue Title */}
            <div className="relative flex items-center mb-8">
              <h1 className="text-2xl font-semibold text-gray-900">
                {currentIssue === 1 ? 'Confusing Usability Issues due to Design' : 'Header Issue Title'}
              </h1>
            </div>
            {/* Issue Description */}
            <div className="font-light leading-relaxed text-base text-gray-700">
              <p className="mb-8">
                {currentIssue === 1
                  ? `Flair Airlines, a Canadian budget airline, is favored for its affordable fares and convenient routes. However, when a friend deleted the app after struggling to access their boarding pass, it highlighted a significant issue. This seemingly simple task proved to be quite complicated. Intrigued by these challenges, I decided to investigate.`
                  : `Description for Header Issue`}
              </p>
            </div>
          </div>
        </section>

        {/* Toggle Buttons */}
        <div className="col-span-3 flex justify-center gap-4">
          <button onClick={() => handleToggleIssue(1)} className={`btn ${currentIssue === 1 ? 'btn-active' : ''}`}>
            Issue 1
          </button>
          <button onClick={() => handleToggleIssue(2)} className={`btn ${currentIssue === 2 ? 'btn-active' : ''}`}>
            Issue 2
          </button>
          {/* Add more buttons for additional issues */}
        </div>
      </div>



      <div className="grid grid-cols-3 gap-10 text-md h-full py-36">
        <Image src={issue1} alt={"issue 1"} quality={95} className="rounded-xl w-full h-full object-contain bg-black col-span-2" />

        <section
          className="col-span-1 flex items-center rounded-xl"
        >
          <div className="text-gray-800 w-full">

            <div className="inline-flex items-center bg-red-500 text-white text-sm px-3 py-1 rounded-full mb-2">
              <ExclamationCircleIcon className="h-5 w-5 mr-2" />
              Usability Issues due to Design
            </div>
            <div className="relative flex items-center mb-8">
              <h1 className="text-2xl font-semibold text-gray-900">Confusing Usability Issues due to Design
              </h1>
            </div>


            <div className="font-light leading-relaxed text-base text-gray-700 col-span-1">
              <p className="mb-8">
                Flair Airlines, a Canadian budget airline, is favored for its affordable fares and convenient routes. However, when a friend deleted the app after struggling to access their boarding pass, it highlighted a significant issue. This seemingly simple task proved to be quite complicated. Intrigued by these challenges, I decided to investigate.
              </p>
            </div>
          </div>
        </section>

      </div>

    </div>

  );
};