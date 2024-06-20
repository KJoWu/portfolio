import designHome from "../../public/design_home.png";
import designHome1 from "../../public/design_home1.png";
import designMenu from "../../public/design_menu.png";
import designBooking from "../../public/design_fetchBooking.png";
import designLoggedIn from "../../public/design_loggedIn.png";
import Image from "next/image";

export const RedesignSection = () => {
  return (
    <>
      <div className="mb-8">
        <h1 className="font-bold text-4xl text-gray-800 leading-[1.3em]">Redesigning the App</h1>
        <hr className="border-t-4 border-[#b2ff94] my-4 w-[10em]" />
      </div>

      <div className="space-y-4">
        <div>
          <h2 className="text-xl font-semibold text-gray-800">Benchmarking Competitor Successes to Enhance UI Design</h2>
          <p className="mb-6 text-gray-700 leading-8 mt-6">
            We will examine top Canadian competitors like Air Canada, as well as other airlines that have successfully implemented boarding passes, such as Delta and American Airlines, to improve the UI.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-gray-800">Consistency in Theme and Colors</h2>
          <p className="mb-6 text-gray-700 leading-8 mt-6">
            Establishing a consistent color theme across all platforms would enhance brand recognition and user experience. While promotional ads use the signature green, black, and purple, the app and web app lean more into pastel colors with images. Since the color theme is not defined for this project, we will adhere to the current design and make necessary adjustments within this framework.
          </p>
        </div>

        <div>
          <div className="grid grid-cols-5 gap-10 text-md h-full py-[2em]">
            <section className="col-span-2 flex items-center rounded-xl">
              <div className="text-gray-800 w-full">
                <div className="font-light leading-relaxed text-base text-gray-700 col-span-3">
                  <h2 className="text-xl font-semibold text-gray-800">Upgrading Navigation Bar</h2>
                  <ul className="list-disc list-inside ml-4 text-gray-700 space-y-2 mb-6 text-gray-700 leading-8 mt-6">
                    <li><span className="font-semibold">Simplify Navigation:</span> Consolidate the top hamburger menu and bottom menu into a single bottom menu called "More" to reduce user confusion and streamline access.</li>
                    <li><span className="font-semibold">Relocate In-Flight Page:</span> The In-Flight page, which informs users how to access Flair online, is not directly related to booking flights. Consider moving it to the "More" tab. Before doing so, use a heat map to analyze user interaction and determine the page's usability and frequency of use.</li>
                  </ul>
                </div>
              </div>
            </section>
            <Image src={designMenu} alt="menu" quality={95} className="rounded-xl w-full object-contain bg-white col-span-3 h-[30em]" />
          </div>

          <div className="grid grid-cols-5 gap-10 text-md h-full pt-36 pb-20">
            <section className="col-span-2 flex items-center rounded-xl">
              <div className="text-gray-800 w-full">
                <div className="relative flex items-center mb-8">
                  <h1 className="text-2xl font-semibold text-gray-900">Enhancing the Booking Page</h1>
                </div>
                <div className="font-light leading-relaxed text-base text-gray-700 col-span-3">
                  <ul className="list-disc list-inside ml-4 text-gray-700 space-y-2 leading-8 ">
                    <li><span className="font-semibold">Airplane Icon Toggle:</span> The airplane icon now functions as a toggle button, simplifying the selection of start and end dates and improving usability.</li>
                    <li><span className="font-semibold">Traveler Info Display:</span> The travel box now shows detailed traveler information (e.g., "2 adults, 3 children") for clearer at-a-glance understanding.</li>
                    <li><span className="font-semibold">Optional Personalized Greeting:</span> An optional personalized greeting (e.g., "Good morning") has been added to the homepage, making the interface more welcoming.</li>
                    <li><span className="font-semibold">Modernized Styling:</span> Updated buttons and form colors while maintaining the background for a more modern look.</li>
                  </ul>
                </div>
              </div>
            </section>
            <Image src={designHome} alt="issue 1" quality={95} className="rounded-xl w-full h-full object-contain bg-white col-span-3" />
          </div>

          <div className="grid grid-cols-5 gap-10 text-md h-full pb-36">
            <Image src={designHome} alt="issue 2" quality={95} className="rounded-xl w-full h-full object-contain bg-white col-span-3" />
            <section className="col-span-2 flex items-center rounded-xl">
              <div className="text-gray-800 w-full">
                <div className="relative flex items-center mb-8">
                  <h1 className="text-2xl font-semibold text-gray-900">Additional Enhancements</h1>
                </div>
                <div className="font-light leading-relaxed text-base text-gray-700 col-span-3">
                  <p>
                    One of the key reasons Flair is among the top 5 apps in Canada is its cheap deals and affordable prices. The website provides access to these travel deals when booking flights, but the app does not.
                  </p>
                  <p><strong>Proposal:</strong></p>
                  <ul className="list-disc list-inside ml-4 text-gray-700 space-y-2">
                    <li><span className="font-semibold">Include Travel Deals:</span> Add a section for travel deals in the app to attract users looking for cheap rates.</li>
                    <li><span className="font-semibold">Track User Interaction:</span> Monitor the number of clicks on the travel deals section to assess user interest.</li>
                    <li><span className="font-semibold">Consider Menu Update:</span> If user engagement is high, create a dedicated tab in the menu for travel deals.</li>
                  </ul>
                  <p>
                    This approach ensures that customers benefit from the same deals available on the website, potentially increasing app usage and user satisfaction.
                  </p>
                </div>
              </div>
            </section>
          </div>

          <div className="grid grid-cols-5 gap-10 text-md h-full py-30">
            <section className="col-span-2 flex items-center rounded-xl">
              <div className="text-gray-800 w-full">
                <div className="relative flex items-center mb-8">
                  <h1 className="text-2xl font-semibold text-gray-900">Optimizing Access to Bookings</h1>
                </div>
                <div className="font-light leading-relaxed text-base text-gray-700 col-span-3">
                  <ul className="list-disc list-inside ml-4 text-gray-700 space-y-2  leading-8 ">
                    <li><span className="font-semibold">Guests:</span> Flair currently lacks incentives for users to create an account. Introducing a compelling CTA button emphasizing a 'fast' experience can address this by highlighting that logging in will streamline their experience with automatic booking information display.</li>
                    <li><span className="font-semibold">Logged In Users:</span>  For logged-in users, enhance visibility of upcoming trips by adding a widget displaying their future travel plans.</li>
                  </ul>
                </div>
              </div>
            </section>
            <Image src={designLoggedIn} alt="issue 1" quality={95} className="rounded-xl w-full h-full object-contain bg-white col-span-3" />
          </div>

          <div className="grid grid-cols-7 gap-10 text-md h-full py-36">
            <Image src={designLoggedIn} alt="issue 1" quality={95} className="rounded-xl w-full h-full object-contain bg-white col-span-5" />
            <section className="col-span-2 flex items-center rounded-xl">
              <div className="text-gray-800 w-full">
                <div className="relative flex items-center mb-8">
                  <h1 className="text-2xl font-semibold text-gray-900">Enhancing Data Retention and Accessibility for Logged-In Users</h1>
                </div>
                <div className="font-light leading-relaxed text-base text-gray-700 col-span-3">
                  One of the most common complaints was about data retention and users not being able to find their boarding passes. To address this, we can add a notification for their boarding pass on the main page. Additionally, on the trip page, we can prominently display their boarding information and check-in time, making it easily accessible.
                </div>
              </div>
            </section>
          </div>

          <div className="grid grid-cols-7 gap-10 text-md h-full py-36">
            <section className="col-span-2 flex items-center rounded-xl">
              <div className="text-gray-800 w-full">
                <div className="relative flex items-center mb-8">
                  <h1 className="text-2xl font-semibold text-gray-900">Enhancing Data Retention and Accessibility for Logged-In Users</h1>
                </div>
                <div className="font-light leading-relaxed text-base text-gray-700 col-span-3">
                  One of the most common complaints was about data retention and users not being able to find their boarding passes. To address this, we can add a notification for their boarding pass on the main page. Additionally, on the trip page, we can prominently display their boarding information and check-in time, making it easily accessible.
                </div>
              </div>
            </section>
            <Image src={designLoggedIn} alt="issue 1" quality={95} className="rounded-xl w-full h-full object-contain bg-white col-span-5" />
          </div>
        </div>
      </div>
    </>
  );
};
