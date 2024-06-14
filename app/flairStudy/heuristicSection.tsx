import issueScreen1 from "../../public/filler.png";
import issue1 from "../../public/issue1.png";
import issue2 from "../../public/issue2.jpg";

import Image from "next/image";





export const HeuristicSection = () => {
  return (
    <div className="leading-8 mt-">
      <h1 className="text-3xl font-semibold text-gray-900 mt-20 uppercase"> Initial Evaluation</h1>


      <div className="font-light leading-relaxed  text-gray-700">
        <p className="mt-8 mb-6">
          To understand how users interact with the app, I performed a heuristic evaluation and followed my friend's user journey to fetch booking information. Here's what I found:
        </p>
        <b>User flow for retrieving a Booked FLight</b>
      </div>


      <div className="w-full overflow-x-scroll relative  rounded-lg shadow-lg mb-10">
        <div className="w-max">
          <Image src={issue2} alt={"issue 1"} quality={95} className="max-h-[650px] w-auto p-3" />
        </div>
      </div>


      <b className="mt-10">Issues uncovered:</b>


      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 gap-y-10 text-md mt-5 mb-5">
        <div className="relative pl-10 flex items-start">
          <div className="absolute left-0 top-0 flex items-center justify-center w-8 h-8 text-lg font-bold text-gray-500">1</div>
          <div>
            <h2 className="text-lg font-semibold text-gray-800 mb-2 mt-3">Website Redirection</h2>
            <p className="text-gray-700 font-light text-sm leading-6">
              One the app first opens I am presented a landing page. Clicking "Book a Trip" redirects users to the website, even though the app also <b>already has the booking feature</b>
            </p>
          </div>
        </div>
        <div className="relative pl-10 flex items-start">
          <div className="absolute left-0 top-0 flex items-center justify-center w-8 h-8 text-lg font-bold text-gray-500">2</div>
          <div>
            <h2 className="text-lg font-semibold text-gray-800 mb-2 mt-3">Lack of User Data on App</h2>
            <p className="text-gray-700 font-light text-sm leading-6">
              The login tab, reservation tab both take you to the website, which suggest to that the app currently does not have the capabilties to show user profile information
            </p>
          </div>
        </div>
        <div className="relative pl-10 flex items-start">
          <div className="absolute left-0 top-0 flex items-center justify-center w-8 h-8 text-lg font-bold text-gray-500">3</div>
          <div>
            <h2 className="text-lg font-semibold text-gray-800 mb-2 mt-3">Redundant Information Requests</h2>
            <p className="text-gray-700 font-light text-sm leading-6">
              Alright, lets say I do log into Flair via the app. I go to the reservation Flair still asks for my reservation number even when logged in.
            </p>
          </div>
        </div>
        <div className="relative pl-10 flex items-start">
          <div className="absolute left-0 top-0 flex items-center justify-center w-8 h-8 text-lg font-bold text-gray-500">4</div>
          <div>
            <h2 className="text-md font-semibold text-gray-800 mb-2 mt-3">Redundant Pages</h2>
            <p className="text-gray-700 font-light text-sm leading-6">
              The online check in page and the reservation both go to the same page. This also applies to the
            </p>
          </div>
        </div>
        <div className="relative pl-10 flex items-start">
          <div className="absolute left-0 top-0 flex items-center justify-center w-8 h-8 text-lg font-bold text-gray-500">5</div>
          <div>
            <h2 className="text-md font-semibold text-gray-800 mb-2 mt-3">Incorrect Information</h2>
            <p className="text-gray-700 font-light text-sm leading-7">
              I'm viewing an older ticket and the website is telling me I have data and the pay option is still open
            </p>
          </div>
        </div>
        <div>

          <div>
            <h2 className="text-md font-semibold text-gray-800 mb-2 mt-3">Inconsistent Information</h2>
            <p className="text-gray-700 font-light text-sm leading-7">
              The landing page on the website is much more informative compared to the app, which is quite minimal.
            </p>
          </div>
        </div>
      </div>



    <p>I've highlighted other issues notieced (We will revist these on the redesign)</p>


    <div className="grid grid-cols-3 gap-10 text-md h-full py-12">
      <section
        className="col-span-2 flex items-center rounded-xl"
      >
        <div className="text-gray-800 w-full">

          <div className="relative flex items-center mb-8">
            <h1 className="text-3xl font-semibold text-gray-900 uppercase"> Context</h1>
          </div>
          

          <div className="font-light leading-relaxed text-base text-gray-700">
            <p className="mb-8">
              Flair Airlines, a Canadian budget airline, is favored for its affordable fares and convenient routes. However, when a friend deleted the app after struggling to access their boarding pass, it highlighted a significant issue. This seemingly simple task proved to be quite complicated. Intrigued by these challenges, I decided to investigate.
            </p>
            <div className="text-xl text-gray-800 ">
              How can we redesign the digital boarding pass process to be more intuitive, reliable, and stress-free for Flair Airlines passengers?
            </div>
          </div>
        </div>
      </section>

      <Image src={issue1} alt={"issue 1"} quality={95} className="rounded-xl w-full h-full object-contain bg-black" />
    </div>


    </div>

  );
};