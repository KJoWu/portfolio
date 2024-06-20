import complaint1 from "../../public/complain_customer_loss.png";
import complaint2 from "../../public/complaint_data.png";
import complaint3 from "../../public/complaint_screenshot.png";
import complaint4 from "../../public/complaint_web.png";
import airlineReviews from "../../public/airline_reviews.png";





import Image from "next/image";
import { EllipsisHorizontalIcon } from '@heroicons/react/24/solid';


export const UserStorySection = () => {
  return (
    <>
      <section className="mb-12 mt-[3em] ">
        <h1 className="font-bold text-2xl text-gray-800 leading-10 leading-[1.2em]"> User Interaction Analysis: Understanding App Engagement and Behavior
        </h1>
        <div className="font-light leading-relaxed text-base text-gray-700 mt-8 mb-8">
          Based on the initial investigation, it became evident that there were issues with the app. To validate that these issues were not isolated incidents and to mitigate potential biases, I conducted an extensive analysis of user behavior and engagement with the Flair app. This included reviewing feedback from platforms such as Facebook, Reddit, Google app reviews, and Apple App Store reviews (sorted by popularity).






        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-8">
          <div>
            <Image src={complaint1} alt="Image 1" quality={95} className="w-full object-cover mb-4 " />
            <div className="bg-white p-4 rounded-lg shadow-lg">
              <p className="text-gray-800">Users consistently express frustration with the app's tendency to redirect them to the website and caused them to question the purpose of the app</p>
            </div>
          </div>
          <div>
            <Image src={complaint2} alt="Image 2" quality={95} className="w-full  object-cover mb-4" />
            <div className="bg-white p-4 rounded-lg shadow-lg">
              <p className="text-gray-800">Users' inability to retrieve crucial data like a boarding pass resulted in financial losses and heightened stress during security checks while using the app, prompting some users to consider switching to competitors' services.</p>
            </div>
          </div>
          <div>
            <Image src={complaint3} alt="Image 3" quality={95} className="w-full object-cover mb-4" />
            <div className="bg-white p-4 rounded-lg shadow-lg">
              <p className="text-gray-800">Since users were unable to retrieve crucial data within the app, some were forced to resort to alternative methods, such as screenshotting their QR code, which should ideally be available directly within the app </p>
            </div>
          </div>
          <div>
            <Image src={complaint4} alt="Image 3" quality={95} className="w-full  object-cover mb-4 " />
            <div className="bg-white p-4 rounded-lg shadow-lg">
              <p className="text-gray-800">Users also expressed dissatisfaction with the app's design, finding it confusing and difficult to use</p>
            </div>
          </div>
        </div>


        <div className="leading-8 mt-8">
          User feedback underscores significant behavioral and emotional challenges with the app, confirming findings from the heuristic evaluation. Users encountered stress and financial losses when unable to retrieve boarding passes, affecting their confidence during security checks. Additionally, frustrations with the app's confusing design prompted consideration of switching to competitors. Addressing these issues in the UX case study will prioritize enhancing usability, restoring user confidence, and retaining loyalty amidst competitive alternatives.
        </div>

        <Image src={airlineReviews} alt="Image 3" quality={95} className="w-full py-10" />


        <div className="leading-8">

          Comparative Analysis: Benchmarking User Experience Across Airlines

          To further understand these challenges, a comparative analysis with other airlines reveals varying user satisfaction levels. Higher ratings among competitors suggest that smoother app functionality and clearer design contribute to better user experiences. This comparison highlights opportunities to learn from industry leaders and improve our app’s performance, ultimately enhancing user satisfaction and loyalty.
        </div>
      </section>
      <div className="flex justify-center items-center py-[6em]">
        <EllipsisHorizontalIcon className="h-6 w-6 text-black" />
      </div>
    </>
  )
}
