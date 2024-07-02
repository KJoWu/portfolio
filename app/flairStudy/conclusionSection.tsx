import Image from "next/image";
import { CheckCircleIcon } from "@heroicons/react/24/solid";
import VideoPlayer from "./videoPlayer";
import { StaticImageData } from "next/image";

type SectionProps = {
  title: string;
  text: string;
};

type ContentWithImageProps = {
  title: string;
  subtitle: string;
  text: string;
  image: StaticImageData;
  alt: string;
  reverse?: boolean;
};

export const ConclusionSection = () => {
  return (
    <>

      <header className="mb-8">
        <h1 className="font-semibold text-3xl text-gray-800 leading-[1.4em]">
          Takeaways and Future Steps          </h1>
        <hr className="border-t-8 border-gray-800 my-2 w-[10em]" />
      </header>

      <section>
        <h2 className="text-xl font-semibold text-gray-800">How We Can Measure Success</h2>
        <p className="text-gray-700 leading-8 mt-6">While having a direct test group of users evaluate the project is most effective, some tech-related observations we can make are as follows:

        </p>
        <ul className="pt-5 list-none mt-4 text-gray-800 grid grid-cols-1 md:grid-cols-4 gap-x-8 gap-y-4 leading-8">
          <li className="flex flex-col items-start">
            <span className="font-semibold">App Store Ratings:</span>
            <span>Track user ratings and reviews on Google Play and Apple App Store. Improvements in ratings and positive feedback signal success.</span>
          </li>
          <li className="flex flex-col items-start">
            <span className="font-semibold">App Retention and QR Code Usage:</span>
            <span>Track retention through app installs and uninstalls. Also, analyze app usage duration.</span>
          </li>
          <li className="flex flex-col items-start">
            <span className="font-semibold">Conversion Rate:</span>
            <span>Monitor conversion rates for users accessing QR codes and creating accounts via the booking tab CTA.</span>
          </li>
          <li className="flex flex-col items-start">
            <span className="font-semibold">Page Impressions:</span>
            <span>Analyze button interactions and page activity to identify high-engagement areas. Extend this analysis to the website for additional insights.</span>
          </li>
        </ul>


      </section>



      <section>
        <div>
          <h2 className="text-xl font-semibold text-gray-800 pt-10">Understanding the direction of Flair's branding</h2>
          <p className="mb-6 text-gray-700 leading-8 mt-6">For this project, I experimented with various colors and themes but ultimately kept it consistent with the app's current visuals to match the website. However, Flair's branding appears inconsistent. It would be interesting to see if they will return to their original branding. Understanding the future direction and branding strategy would be beneficial.
          </p>
        </div>
        <VideoPlayer
          src="/future.mp4"
          type="video/mp4"
          poster="/images/video-poster.jpg"
          className="w-full h-[30em] rounded-xl object-cover"
        />
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-gray-800 pt-16">Final Thoughts</h2>
        <p className="mb-6 text-gray-700 leading-8 mt-6">While there were many areas that required improvement with Flair, addressing the onboarding process was particularly interesting due to the real-life consequences of a poorly designed UI. I thoroughly enjoyed identifying pain points and developing features that significantly enhance the app. <span className="bg-[#b2ff94]">Sometimes, a small feature can generate substantial returns.</span> While UI design is crucial, understanding user pain points and creating solutions is equally important. This case study provided a valuable opportunity to delve into these aspects and improve the overall user experience.


        </p>
      </section>

      <div className="flex text-4xl font-semibold justify-center items-center pb-[3em] pt-[4em]">
        Thanks for Reading!
      </div>

    </>
  )

};

