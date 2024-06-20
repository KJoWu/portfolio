import React from 'react';
import Image from 'next/image';
import { ExclamationCircleIcon, EllipsisHorizontalIcon } from "@heroicons/react/24/solid";
import complaint1 from "../../public/complain_customer_loss.png";
import complaint2 from "../../public/complaint_data.png";
import complaint3 from "../../public/complaint_screenshot.png";
import complaint4 from "../../public/complaint_web.png";
import airlineReviews from "../../public/airline_reviews.png";

interface FeedbackCardProps {
  imageSrc: StaticImageData;
  title: string;
  description: string;
}

function FeedbackCard({ imageSrc, title, description }: FeedbackCardProps){
  return (
    <div>
      <Image src={imageSrc} alt={title} quality={95} className="w-full object-cover mb-4" />
      <div className="bg-white p-4 rounded-lg shadow-lg border-2 border-red-600">
        <div className="inline-flex items-center bg-red-500 text-white text-sm px-3 py-1 rounded-full mb-4">
          <ExclamationCircleIcon className="h-5 w-5 mr-2" />
          {title}
        </div>
        <p className="text-gray-800 text-sm">{description}</p>
      </div>
    </div>
  );
};

export const UserComplaintsSection = () => {
  return (
    <>
      <section className="mb-12 mt-[3em]">
        <h1 className="text-2xl font-semibold text-gray-800 mb-4 border-l-4 border-purple-500 pl-3">
          User Interaction Analysis: Understanding App Engagement and Behavior
        </h1>
        <p className="font-light leading-8 text-base text-gray-700">
          It became evident that the app had significant visual issues. To ensure these problems were not isolated incidents and to reduce potential biases, I conducted an extensive analysis of user behavior and engagement with the Flair app. This analysis included reviewing feedback from various platforms such as Facebook, Reddit, Google app reviews, and Apple App Store reviews, sorted by popularity.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-8 mt-6">
          <FeedbackCard
            imageSrc={complaint1}
            title="User Dissatisfaction Leading to Competitor Migration"
            description="Due to poor styling and the inability to obtain necessary information, users were left highly dissatisfied. This frustration led many to cancel flights, abandon the app, and switch to competitors, resulting in a significant loss of customer loyalty and engagement."
          />
          <FeedbackCard
            imageSrc={complaint2}
            title="User Frustration with Data Retention"
            description="Users frequently expressed frustration with the app's inability to retain their login information and flight notifications, forcing them to repeatedly enter their details manually."
          />
          <FeedbackCard
            imageSrc={complaint3}
            title="Inefficient Workarounds for Inaccessible Data"
            description="Some users were unable to retrieve crucial data, such as their boarding pass, within the app and resorted to alternative methods like screenshotting their QR codes. Ideally, this information should be readily accessible directly within the app."
          />
          <FeedbackCard
            imageSrc={complaint4}
            title="User Frustration Due to Website Redirections"
            description="Users consistently expressed frustration with the app's frequent redirections to the website, which disrupted their experience and undermined the app's purpose and value. This repeated need to switch between platforms led users to question the app's effectiveness and reliability."
          />
        </div>

        <div className="leading-8 mt-8">
          User feedback underscores significant behavioral and emotional challenges with the app, confirming findings from the heuristic evaluation. Users encountered stress and financial losses when unable to retrieve boarding passes, affecting their confidence during security checks. Additionally, frustrations with the app's confusing design prompted consideration of switching to competitors. Addressing these issues in the UX case study will prioritize enhancing usability, restoring user confidence, and retaining loyalty amidst competitive alternatives.
        </div>


        <div className="leading-8">
          <h1 className="text-2xl font-semibold text-gray-800 mb-4 border-l-4 border-purple-500 pl-3 mt-10">
            Comparative Analysis: Benchmarking User Experience Across Airlines
          </h1>
          <Image src={airlineReviews} alt="Airline Reviews" quality={95} className="w-full py-5" />
          <p>
            Higher ratings among Canadian and popular American competitors suggest that smoother app functionality and clearer design significantly enhance user experiences. This comparison underscores opportunities to learn from industry leaders and improve our app's performance, ultimately boosting user satisfaction and loyalty. We will reference these competitor apps during our redesign to incorporate best practices and elevate our user experience.
          </p>
        </div>
      </section>
      <div className="flex justify-center items-center py-[6em]">
        <EllipsisHorizontalIcon className="h-6 w-6 text-black" />
      </div>
    </>
  );
};
