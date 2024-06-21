import React from 'react';
import Image from 'next/image';
import { ExclamationCircleIcon, EllipsisHorizontalIcon } from "@heroicons/react/24/solid";
import complaint1 from "../../public/complain_customer_loss.jpg";
import complaint2 from "../../public/complaint_data.jpg";
import complaint3 from "../../public/complaint_screenshot.jpg";
import complaint4 from "../../public/complaint_web.jpg";
import airlineReviews from "../../public/airline_reviews.jpg";

interface FeedbackCardProps {
  imageSrc: StaticImageData;
  title: string;
  description: string;
}

function FeedbackCard({ imageSrc, title, description }: FeedbackCardProps) {
  return (
    <div>
      <Image src={imageSrc} alt={title} quality={95} className="w-full object-cover mb-2" />
      <div className="bg-white rounded-lg shadow-lg border-[0.09em] border-red-600 p-5">
        <div className="inline-flex items-center bg-red-500 text-white text-sm px-3 py-1 rounded-full mb-4">
          <ExclamationCircleIcon className="h-5 w-5 mr-2" />
          {title}
        </div>
        <p className="text-gray-800 text-sm  leading-6">{description}</p>
      </div>
    </div>
  );
};

export const UserComplaintsSection = () => {
  return (
    <>
      <section className="mb-12 mt-[2em]">
        <h1 className="text-2xl font-medium text-gray-800 mb-6 border-l-8 border-purple-500 pl-3 w-[30em] leading-9">
          User Interaction Analysis: Understanding App Engagement and Behavior
        </h1>
        <p className="font-light leading-8 text-base text-gray-700">
          It became evident that the app had significant visual issues. To ensure these problems were not isolated incidents and to
          <span className="font-medium"> reduce potential biases</span>, I analyzed user behavior and engagement with the Flair app. This included <span className="bg-[#b2ff94]">identifying user pain points</span> from feedback on Facebook, Reddit, Google app reviews, and the Apple App Store.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-y-10 gap-x-6 mt-6 mx-10">
          <FeedbackCard
            imageSrc={complaint1}
            title="Dissatisfaction Fueling Customer Loss"
            description="Due to poor design and the inability to obtain necessary information, users were left highly dissatisfied. This frustration led many to cancel flights, abandon the app, and switch to competitors, resulting in a significant loss of customer loyalty and engagement."
          />
          <FeedbackCard
            imageSrc={complaint2}
            title="User Frustration with Data Retention"
            description="Users frequently expressed frustration with the app's inability to retain their login information and flight notifications, forcing them to repeatedly enter their details manually."
          />
          <FeedbackCard
            imageSrc={complaint3}
            title="Inaccessible Data Workarounds"
            description="Some users were unable to retrieve crucial data, such as their boarding pass, within the app and resorted to alternative methods like screenshotting their QR codes. Ideally, this information should be readily accessible directly within the app."
          />
          <FeedbackCard
            imageSrc={complaint4}
            title="User Frustration Due to Website Redirections"
            description="Users consistently expressed frustration with the app's frequent redirections to the website, which disrupted their experience and undermined the app's purpose and value. This repeated need to switch between platforms led users to question the app's effectiveness and reliability."
          />
        </div>

        <div className="leading-8 mt-8">
          The user feedback underscores <span className="bg-[#b2ff94]">significant behavioral and emotional challenges </span> with the app,  <span className="font-medium">confirming our findings from the heuristic evaluation.</span>
        </div>


        <div className="leading-8">
          <h1 className="text-2xl font-medium text-gray-800 mb-4 border-l-8 border-purple-500 pl-3 mt-10  w-[30em] leading-9">
            Comparative Analysis: Benchmarking User Experience Across Airlines
          </h1>
          <Image src={airlineReviews} alt="Airline Reviews" quality={95} className="w-full py-5 pb-9" />
          <p>
            <span className="font-medium">Higher ratings among Canadian and popular American competitors indicate they are succeeding where Flair is not.</span> This comparison <span className="bg-[#b2ff94]">highlights opportunities to learn from industry leaders and enhance our app's performance </span> , ultimately boosting user satisfaction and loyalty. We will reference these competitor apps during our redesign to incorporate best practices and elevate our user experience.

          </p>
        </div>
      </section>
      <div className="flex justify-center items-center py-[6em]">
        <EllipsisHorizontalIcon className="h-6 w-6 text-black" />
      </div>
    </>
  );
};
