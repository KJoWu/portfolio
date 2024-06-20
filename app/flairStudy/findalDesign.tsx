import designHome from "../../public/design_home.png";
import designHome1 from "../../public/design_home1.png";
import designMenu from "../../public/design_menu.png";
import designBooking from "../../public/design_fetchBooking.png";
import designLoggedIn from "../../public/design_loggedIn.png";


import Image from "next/image";

export const FinalDesign = () => {
  return (
    <>


      <div className="mb-8">
        <h1 className="font-bold text-4xl text-gray-800  leading-[1.3em]"> Final Design</h1>
        <hr className="border-t-4 border-[#b2ff94] my-4 w-[10em]" />
      </div>



      <div className="space-y-4">
        <div>
          <h2 className="text-xl font-semibold text-gray-800">Consistency in Theme and Colors</h2>
          <p className="text-gray-700">
            The theme and colors used in the app play a crucial role in creating a cohesive user experience. Currently, there is a lack of consistency, with one app using green and black while the website and this app share different colors. Establishing a consistent color theme across all platforms would enhance brand recognition and user experience. However, since the color theme is not defined for this project, we will adhere to the current design and make necessary adjustments within this framework.
          </p>
        </div>

        <div>
          <div className="grid grid-cols-5 gap-10 text-md h-full py-30">
            <Image src={designMenu} alt="menu" quality={95} className="rounded-xl w-full h-full object-contain bg-white col-span-3" />

            <section className="col-span-2 flex items-center rounded-xl">
              <div className="text-gray-800 w-full">
                <div className="relative flex items-center mb-8">
                  <h1 className="text-2xl font-semibold text-gray-900">Enhancing the Menu Options</h1>
                </div>
                <div className="font-light leading-relaxed text-base text-gray-700 col-span-3">
                  <h2 className="text-xl font-semibold text-gray-800">Improving the Menu Options</h2>
                  <ul className="list-disc list-inside ml-4 text-gray-700 space-y-2">
                    <li><strong>Simplify Navigation:</strong> Consolidate the top hamburger menu and bottom menu into a single bottom menu to reduce user confusion and streamline access.</li>
                    <li><strong>Relocate In-Flight Page:</strong> Move the in-flight suggestion page to the hamburger menu to declutter the main navigation and make the bottom menu more concise.</li>
                    <li><strong>Track User Interactions:</strong> Implement a heat map to monitor page usage, allowing for data-driven adjustments to optimize navigation based on actual user behavior.</li>
                  </ul>
                </div>
              </div>
            </section>
          </div>

          <div className="grid grid-cols-5 gap-10 text-md h-full pt-36 pb-20">

            <section className="col-span-2 flex items-center rounded-xl">
              <div className="text-gray-800 w-full">
                <div className="relative flex items-center mb-8">
                  <h1 className="text-2xl font-semibold text-gray-900">Enhancing the Booking Page</h1>
                </div>
                <div className="font-light leading-relaxed text-base text-gray-700 col-span-3">
                  <ul className="list-disc list-inside ml-4 text-gray-700 space-y-2">
                    <li><strong>Toggle Functionality for Airplane Icon:</strong> The airplane icon is now a toggle button, letting users easily select start and end dates. This streamlines date selection and improves usability.</li>
                    <li><strong>Enhanced Travel Information Display:</strong> The travel box now displays detailed traveler info (e.g., "2 adults, 3 children") instead of just the number of travelers, providing clearer information at a glance.</li>
                    <li><strong>Optional Personalized Message:</strong> An optional personalized greeting (e.g., "Good morning") has been added to the homepage, making the interface more welcoming and enhancing the user experience.</li>
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
                    <li><strong>Include Travel Deals:</strong> Add a section for travel deals in the app to attract users looking for cheap rates.</li>
                    <li><strong>Track User Interaction:</strong> Monitor the number of clicks on the travel deals section to assess user interest.</li>
                    <li><strong>Consider Menu Update:</strong> If user engagement is high, create a dedicated tab in the menu for travel deals.</li>
                  </ul>
                  <p>
                    This approach ensures that customers benefit from the same deals available on the website, potentially increasing app usage and user satisfaction.
                  </p>
                </div>
              </div>
            </section>
          </div>
        </div>


        <div className="grid grid-cols-5 gap-10 text-md h-full py-30">

          <section className="col-span-2 flex items-center rounded-xl">
            <div className="text-gray-800 w-full">
              <div className="relative flex items-center mb-8">
                <h1 className="text-2xl font-semibold text-gray-900">Enhancing the Onboarding Phase</h1>
              </div>
              <div className="font-light leading-relaxed text-base text-gray-700 col-span-3">
                Flair currently lacks incentives to encourage users to create an account. Introducing a compelling CTA (call-to-action) button that emphasizes a 'fast' experience can address this. This button can highlight that logging in will streamline their experience by automatically displaying their booking information
              </div>
            </div>
          </section>
          <Image src={designBooking} alt="issue 1" quality={95} className="rounded-xl w-full h-full object-contain bg-white col-span-3" />

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
    </>
  );
};
