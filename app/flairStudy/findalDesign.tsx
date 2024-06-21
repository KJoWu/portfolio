import designHome from "../../public/design_home.png";
import designHome1 from "../../public/design_home1.png";
import designSales from "../../public/design_sales.jpg";
import designMenu from "../../public/design_menu.jpg";
import designBooking from "../../public/design_fetchBooking.png";
import designLoggedIn from "../../public/design_loggedIn.jpg";


import Image from "next/image";

export const FinalDesign = () => {
  return (
    <>


      <div className="mb-8">
        <h1 className="font-medium text-gray-800  text-3xl leading-[1.4em]"> Final Design</h1>
        <hr className="border-t-4 border-[#b2ff94] my-4 w-[10em]" />
      </div>



      <div className="space-y-4">

        <div>
          <div className="grid grid-cols-5 gap-10 text-md h-full py-30">
            <Image src={designMenu} alt="menu" quality={95} className="rounded-xl w-full h-full object-contain bg-white col-span-3" />

            <section className="col-span-2 flex items-center rounded-xl">
              <div className="text-gray-800 w-full">
                <div className="relative flex items-center mb-8">
                  <h1 className="text-2xl font-medium text-gray-900">Enhancing the Menu Options</h1>
                </div>
                <div className="font-light leading-relaxed text-base text-gray-700 col-span-3">
                  <h2 className="text-xl font-medium text-gray-800">Improving the Menu Options</h2>
                  <ul className="list-disc list-inside ml-4 text-gray-700 space-y-2">
                    <li><span className="semibold">Simplify Navigation:</span> Consolidate the top hamburger menu and bottom menu into a single bottom menu to reduce user confusion and streamline access.</li>
                    <li><span className="bold">Relocate In-Flight Page:</span> Move the in-flight suggestion page to the hamburger menu to declutter the main navigation and make the bottom menu more concise.</li>
                    <li><span className="font-medium">Track User Interactions:</span> Implement a heat map to monitor page usage, allowing for data-driven adjustments to optimize navigation based on actual user behavior.</li>
                  </ul>
                </div>
              </div>
            </section>
          </div>

         </div>

      </div>
    </>
  );
};
