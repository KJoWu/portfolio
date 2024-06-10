import issueScreen1 from "../../public/filler.png";
import Image from "next/image";





export const HeuristicSection = () => {
  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4 leading-7">Initial Discovery</h2>


      <p className="mb-4 font-light leading-8">
        To better understand this issues, I conducted a heuristic evaluation with a previous flight I had and replicated my friend's experience. Here’s what I noticed:
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 gap-y-10 text-md">
        <div>
          <Image src={issueScreen1} alt={"issue 1"} quality={95} />
          <div>
            <h2 className="text-lg font-semibold text-gray-800 mb-2 mt-3">Website Redirection</h2>
            <p className="text-gray-700 font-light text-sm">
              One the app first opens I am presented a landing page. Clicking "Book a Trip" redirects users to the website, even though the app also <b>already has the booking feature</b>
            </p>
          </div>
        </div>
        <div>
          <Image src={issueScreen1} alt={"issue 1"} quality={95} />
          <div>
            <h2 className="text-lg font-semibold text-gray-800 mb-2 mt-3">Lack of User Data on App</h2>
            <p className="text-gray-700 font-light text-sm">
              The login tab, reservation tab both take you to the website, which suggest to that the app currently does not have the capabilties to show user profile information
            </p>
          </div>
        </div>
        <div>
          <Image src={issueScreen1} alt={"issue 1"} quality={95} />
          <div>
            <h2 className="text-lg font-semibold text-gray-800 mb-2 mt-3">Redundant Information Requests</h2>
            <p className="text-gray-700 font-light text-sm">
              Alright, lets say I do log into Flair via the app. I go to the reservation Flair still asks for my reservation number even when logged in.</p>
          </div>
        </div>

        <div>
          <Image src={issueScreen1} alt={"issue 1"} quality={95} />
          <div>
            <h2 className="text-md font-semibold text-gray-800 mb-2 mt-3">Redundant Pages</h2>
            <p className="text-gray-700 font-light text-sm">
              The online check in page and the reservation both go to the same page. This also applies to the 
            </p>
          </div>
        </div>

        <div>
          <Image src={issueScreen1} alt={"issue 1"} quality={95} />
          <div>
            <h2 className="text-md font-semibold text-gray-800 mb-2 mt-3">Incorrect Information</h2>
            <p className="text-gray-700 font-light text-sm">
             I'm viewing an older ticket and the website is telling me I have data and the pay option is still open
            </p>
          </div>
        </div>

        <div>
          <Image src={issueScreen1} alt={"issue 1"} quality={95} />

          <div>
            <h2 className="text-md font-semibold text-gray-800 mb-2 mt-3">Inconsistent Information</h2>
            <p className="text-gray-700 font-light text-sm">
              The landing page on the website is much more informative compared to the app, which is quite minimal.
            </p>
          </div>
        </div>
      </div>
    </div>

  );
};