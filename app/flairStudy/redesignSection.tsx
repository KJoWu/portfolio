import Image from "next/image";
import { CheckCircleIcon } from "@heroicons/react/24/solid";
import designHome from "../../public/design_home.jpg";
import designMenu from "../../public/design_menu.jpg";
import designSales from "../../public/design_sales.jpg";
import designLoggedIn from "../../public/design_loggedIn.jpg";
import designBoardingPass from "../../public/design_boardingpass.jpg";
import designNotification from "../../public/design_notification.jpg";

interface SectionProps {
  title: string;
  text: string;
}

interface ContentWithImageProps {
  title: string;
  subtitle: string;
  text: string;
  image: StaticImageData;
  alt: string;
  reverse?: boolean;
}

export const RedesignSection = () => {
  return (
    <>
      <div className="mb-8">
        <h1 className="font-bold text-3xl text-gray-800 leading-[1.4em]">Redesigning the App</h1>
        <hr className="border-t-4 border-[#b2ff94] my-4 w-[10em]" />
      </div>

      <div className="space-y-4">
        <Section
          title="Benchmarking Competitor Successes to Enhance UI Design"
          text="We will examine top Canadian competitors like Air Canada, as well as other airlines that have successfully implemented boarding passes, such as Delta and American Airlines, to improve the UI."
        />

        <Section
          title="Consistency in Theme and Colors"
          text="Establishing a consistent color theme across all platforms would enhance brand recognition and user experience. While promotional ads use the signature green, black, and purple, the app and web app lean more into pastel colors with images. Since the color theme is not defined for this project, we will adhere to the current design and make necessary adjustments within this framework."
        />

        <ContentWithImage
          title="Upgrading Navigation Bar"
          subtitle="Consolidating Navigational Flow"
          text={`Simplify Navigation: Consolidate the top hamburger menu and bottom menu into a single bottom menu called 'More' to reduce user confusion and streamline access.
Relocate In-Flight Page: The In-Flight page, which informs users how to access Flair online, is not directly related to booking flights. Consider moving it to the 'More' tab. Before doing so, use a heat map to analyze user interaction and determine the page's usability and frequency of use.`}
          image={designMenu}
          alt="menu"
        />

        <ContentWithImage
          title="Improving the Booking Experience"
          subtitle="Revamping the Flight Booking Form"
          text={`Airplane Icon: Icon now transformed to a toggle button to improve usability.
Traveler Info Display: Field now shows detailed traveler info for quick understanding.
Personalized Greeting (Optional): A greeting has been added making the app more welcoming.
Modernized Styling: Form style has been updated for a more modern look.`}
          image={designHome}
          alt="issue 1"
          reverse
        />

        <ContentWithImage
          title="Maximizing Value with Flair's Budget-Friendly Deals"
          subtitle="Boost Exposure for Top Deals"
          text={`Flair's top ranking in Canada is due to its cheap deals. The website provides these travel deals, but the app does not.
Include Travel Deals: Add a section for travel deals in the app to attract users.
Track User Interaction: Monitor clicks to assess interest and consider creating a dedicated tab for travel deals if engagement is high.
This ensures users get the same deals as the website, potentially increasing app usage and satisfaction.`}
          image={designSales}
          alt="issue 2"
        />

        <ContentWithImage
          title="Optimize Access to Bookings"
          subtitle="Improve Accessibility to Booking"
          text={`Guests: Flair lacks incentives for users to create an account. A compelling CTA button emphasizing a 'fast' experience can address this by showing how logging in streamlines their experience with automatic booking information display.
Logged In Users: Enhance visibility of upcoming trips by adding a widget displaying their future travel plans.`}
          image={designLoggedIn}
          alt="issue 3"
          reverse
        />

        <ContentWithImage
          title="Enhancing Data Retention and Accessibility for Logged-In Users"
          subtitle="Adding Personalization for Users"
          text={`One of the most common complaints was about data retention and users not being able to find their boarding passes. To address this, we can add a notification for their boarding pass on the main page. Additionally, on the trip page, we can prominently display their boarding information and check-in time, making it easily accessible.`}
          image={designNotification}
          alt="issue 4"
        />

        <ContentWithImage
          title="Improving QR Code Accessibility"
          subtitle="QR code design"
          text={`One of the most common complaints was about data retention and users not being able to find their boarding passes. To address this, we can add a notification for their boarding pass on the main page. Additionally, on the trip page, we can prominently display their boarding information and check-in time, making it easily accessible.`}
          image={designBoardingPass}
          alt="issue 5"
          reverse
        />
      </div>
    </>
  );
};

const Section: React.FC<SectionProps> = ({ title, text }) => (
  <div>
    <h2 className="text-xl font-semibold text-gray-800">{title}</h2>
    <p className="mb-6 text-gray-700 leading-7 mt-6">{text}</p>
  </div>
);

const ContentWithImage: React.FC<ContentWithImageProps> = ({ title, subtitle, text, image, alt, reverse }) => (
  <div className={`grid grid-cols-7 gap-5 text-md h-full py-[2em] ${reverse ? 'flex-row-reverse' : ''}`}>
    <section className="col-span-3 flex items-center rounded-xl">
      <div className="text-gray-800 w-full">
        <div className="font-light leading-relaxed text-base text-gray-700 col-span-3">
          <div className="inline-flex items-center bg-[#b2ff94] text-black text-sm px-3 py-1 rounded-full mb-5">
            <CheckCircleIcon className="h-5 w-5 mr-2" />
            {subtitle}
          </div>
          <h2 className="text-xl font-semibold text-gray-800">{title}</h2>
          <ul className="list-disc list-inside ml-4 text-gray-700 space-y-2 mb-6 leading-7 mt-6">
            {text.split('\n').map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
    <Image src={image} alt={alt} quality={95} className="rounded-xl w-full object-contain bg-white col-span-4" />
  </div>
);
