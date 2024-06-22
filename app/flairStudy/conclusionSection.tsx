import Image from "next/image";
import { CheckCircleIcon } from "@heroicons/react/24/solid";
import designHome from "../../public/design_home.jpg";
import designMenu from "../../public/design_menu.jpg";
import designSales from "../../public/design_sales.jpg";
import designLoggedIn from "../../public/design_loggedIn.jpg";
import designBoardingPass from "../../public/design_boardingpass.jpg";
import designNotification from "../../public/design_notification.jpg";
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
            Takeaways and Future Improvements          </h1>
          <hr className="border-t-8 border-gray-800 my-2 w-[10em]" />
        </header>

        <section>
          <h2 className="text-xl font-semibold text-gray-800">How we can measure success</h2>
          <p className="mb-6 text-gray-700 leading-8 mt-6">One of the things I would want to do in the tudy is measure the hotposts of the pages. One way to measure the success is to see the conversion rate of Users Accessing their QR codes and creating accounts</p>
        </section>


        <section>
          <h2 className="text-xl font-semibold text-gray-800">Understanding the direction of Flair's branding</h2>
          <p className="mb-6 text-gray-700 leading-8 mt-6">For this scope I limited the changes to what Flair currenty has, but it would be interesting to know if they would go back to their green branding. I played around with mockup</p>
        </section>


    </>
  )

};

const Section = ({ title, text }: SectionProps) => (
  <div>
    <h2 className="text-xl font-semibold text-gray-800">{title}</h2>
    <p className="mb-6 text-gray-700 leading-8 mt-6" dangerouslySetInnerHTML={{ __html: text }}></p>
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
          <div className="list-disc text-gray-700 space-y-2 mb-6 leading-8 mt-6" dangerouslySetInnerHTML={{ __html: text }}></div>
        </div>
      </div>
    </section>
    <Image src={image} alt={alt} quality={95} className="rounded-xl w-full object-contain bg-white col-span-4" />
  </div>
);
