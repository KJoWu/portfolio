import Image from "next/image";
import { CheckCircleIcon } from "@heroicons/react/24/solid";
import designHome from "../../public/design_home.jpg";
import designMenu from "../../public/design_menu.jpg";
import designSales from "../../public/design_sales.jpg";
import designLoggedIn from "../../public/design_loggedIn.jpg";
import designBoardingPass from "../../public/design_boardingpass.jpg";
import designNotification from "../../public/design_notification.jpg";

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

export const RedesignSection = () => {
  return (
    <>
      <div className="mb-8">
        <h1 className="font-semibold text-3xl text-gray-800 leading-[1.4em]">Redesigning the App</h1>
        <hr className="border-t-4 border-[#b2ff94] my-4 w-[10em]" />
      </div>

      <div className="space-y-4">
        <Section
          title="Benchmarking Competitor Successes to Enhance UI Design"
          text="We will examine top Canadian competitors like Air Canada, as well as other airlines that have successfully implemented boarding passes, such as Delta and American Airlines, to improve the UI."
        />

        <Section
          title="Consistency in Theme and Colors"
          text={`Establishing a <span class="bg-[#b2ff94]">consistent color theme across all platforms would improve brand recognition and user experience.</span> While promotional ads use the signature green, black, and purple, the app and web app lean more into pastel colors with images. Since the color theme is not defined for this project, we will adhere to the current design and make necessary adjustments within this framework.`}
        />

        <ContentWithImage
          title="Revamping Navigation Bar"
          subtitle="Consolidating Navigational Flow"
          text={`<span class="font-bold mt-4 block">Simplify Navigation:</span>Move the hamburger menu to the bottom in a column called 'More' to streamline access and consolidate all actions in one place.
          <br/><span class="font-bold mt-4 block">Relocate In-Flight Page:</span> The In-Flight page, which informs users how to access Flair online, is not directly related to booking flights. Consider moving it to the 'more' tab. Before doing so, use a heat map to analyze user interaction and determine the page's usability and frequency of use.`}
          image={designMenu}
          alt="menu"
        />

        <ContentWithImage
          title="Modernizing the Booking Experience"
          subtitle="Revamping the Flight Booking Form"
          text={`<span class="font-bold mt-4 block">Airplane Icon:</span> Icon now transformed to a toggle button to improve usability.
          <br/><span class="font-bold mt-4 block">Traveler Info Display:</span> Field now shows detailed traveler info for quick comprehension.
          <br/><span class="font-bold mt-4 block">Personalized Greeting (Optional):</span> A greeting has been added making the app more welcoming.
          <br/><span class="font-bold mt-4 block">Modernized Styling:</span> Form style has been updated for a more modern look.`}
          image={designHome}
          alt="issue 1"
          reverse
        />

        <ContentWithImage
          title="Maximizing Value with Flair's Budget-Friendly Deals"
          subtitle="Boost Exposure for Top Deals"
          text={`Flair's <span class="bg-[#b2ff94]"> top ranking in Canada is due to its budget-friendly deals.</span> While the website offers these travel deals, the app does not.
          <br/><span class="font-bold mt-4 block">Include Travel Deals:</span> Add a section for travel deals in the app to attract users. This ensures users <span class="bg-[#b2ff94]">get access to the same deals as the website</span>, potentially increasing app usage and satisfaction.
          <br/><span class="font-bold mt-4 block">Track User Interaction:</span> Monitor clicks to assess interest and consider creating a dedicated tab for travel deals if engagement is high.`}
          image={designSales}
          alt="issue 2"
        />

        <ContentWithImage
          title="Transforming Access to Bookings"
          subtitle="Improve Accessibility to Booking"
          text={`<span class="font-bold mt-4 block">Guests:</span> Flair lacks incentives for users to create an account. <span class="bg-[#b2ff94]">A compelling CTA button emphasizing a 'fast' experience can address this</span> by showing how logging in streamlines their experience with automatic booking information display.
  <br/><span class="font-bold mt-4 block">Signed-in Users:</span> If a user is already signed in, <span class="font-semibold">we should display their upcoming reservations without requiring them to input information.</span> This addresses one of the common pain points users mentioned earlier about the product.`}
          image={designLoggedIn}
          alt="issue 3"
          reverse
        />


        <ContentWithImage
          title="Implementing More Personalization"
          subtitle="Introducing Personalized Notifications"
          text={`<span class="font-bold mt-4 block">Data Retention:</span> Building on the personalized widget mentioned earlier, we can further enhance the user experience by incorporating notifications that provide detailed flight information. <p className="mt-2"/>By adding these notifications to the main page, we will <span class="bg-[#b2ff94]">increase user convenience</span> by displaying <span class="bg-[#b2ff94]">relevant, up-to-date information such as the time left until check-in and boarding status</span>.</p>`}
          image={designNotification}
          alt="issue 4"
        />

        <ContentWithImage
          title="Refining the Boarding Pass"
          subtitle="Elevating onboarding experience"
          text={`<span class="font-bold mt-4 block">Accessible Boarding Information:</span> Users reported issues with manually screenshotting QR codes. <span class="bg-[#b2ff94]">We've added a download button for easy access.</span> <p className="mt-2"/>For larger families, we implemented a <span class="bg-[#b2ff94]">carousel feature</span> for seamless navigation of multiple items.</p> <p className="pt-1">Additionally, we enhanced the boarding pass by strategically placing information in convenient locations, improving the overall user experience.</p>`}
          image={designBoardingPass}
          alt="issue 5"
          reverse
        />
      </div>
    </>
  );
};

const Section = ({ title, text }: SectionProps) => (
  <div>
    <h2 className="text-xl font-semibold text-gray-800">{title}</h2>
    <p className="mb-6 text-gray-700 leading-7 mt-6" dangerouslySetInnerHTML={{ __html: text }}></p>
  </div>
);

const ContentWithImage = ({ title, subtitle, text, image, alt, reverse }: ContentWithImageProps) => (
  <div className={`grid grid-cols-7 gap-5 text-md h-full py-[2em] ${reverse ? 'flex-row-reverse' : ''}`}>
    <section className="col-span-3 flex items-center rounded-xl">
      <div className="text-gray-800 w-full">
        <div className="font-base leading-relaxed text-base text-gray-700 col-span-3">
          <div className="inline-flex items-center bg-[#b2ff94] text-black text-sm px-3 py-1 rounded-full mb-5">
            <CheckCircleIcon className="h-5 w-5 mr-2" />
            {subtitle}
          </div>
          <h2 className="text-xl font-semibold text-gray-800">{title}</h2>
          <div className="list-disc text-gray-700 space-y-2 mb-6 leading-7 mt-6" dangerouslySetInnerHTML={{ __html: text }}></div>
        </div>
      </div>
    </section>
    <Image src={image} alt={alt} quality={95} className="rounded-xl w-full object-contain bg-white col-span-4" />
  </div>
);
