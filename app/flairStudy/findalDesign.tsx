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


      <div className="mb-8 flex flex-col items-center">
        <h1 className="font-semibold text-gray-800 text-3xl leading-[1.4em]">Final Design</h1>
        <hr className="border-t-8 border-[#b2ff94] my-2 w-[10em]" />
      </div>
      <div className="space-y-4">


          <div className="grid grid-cols-5 gap-10 text-md h-full py-30">
            <Image src={designMenu} alt="menu" quality={95} className="rounded-xl w-full h-full object-contain bg-white col-span-3" />

            <section className="col-span-2 flex items-center rounded-xl">
              <div className="text-gray-800 w-full">
                <div className="relative flex items-center mb-8">
                  <h1 className="text-2xl font-semibold text-gray-900">Improved Booking</h1>
                </div>
                <div className="font-base leading-relaxed text-base text-gray-700 col-span-3">
                App now features a modernized UI with enhanced button functionality and streamlined access to information, significantly improving the booking experience
                </div>
              </div>
            </section>
          </div>


          <div className="grid grid-cols-5 gap-10 text-md h-full py-30">
            <Image src={designMenu} alt="menu" quality={95} className="rounded-xl w-full h-full object-contain bg-white col-span-3" />

            <section className="col-span-2 flex items-center rounded-xl">
              <div className="text-gray-800 w-full">
                <div className="relative flex items-center mb-8">
                  <h1 className="text-2xl font-semibold text-gray-900">Easy access to Boarding Pass Information</h1>
                </div>
                <div className="font-base leading-relaxed text-base text-gray-700 col-span-3">
                Users can now view their boarding time, pass status, and check-in schedule.
                </div>
              </div>
            </section>
          </div>


          <div className="grid grid-cols-5 gap-10 text-md h-full py-30">
            <Image src={designMenu} alt="menu" quality={95} className="rounded-xl w-full h-full object-contain bg-white col-span-3" />

            <section className="col-span-2 flex items-center rounded-xl">
              <div className="text-gray-800 w-full">
                <div className="relative flex items-center mb-8">
                  <h1 className="text-2xl font-semibold text-gray-900">Access to Flair's Latest Deals</h1>
                </div>
                <div className="font-base leading-relaxed text-base text-gray-700 col-span-3">
                    <li>Signed in users have acess to deals near them</li>
                </div>
              </div>
            </section>
          </div>


          <div className="grid grid-cols-5 gap-10 text-md h-full py-30">
            <Image src={designMenu} alt="menu" quality={95} className="rounded-xl w-full h-full object-contain bg-white col-span-3" />

            <section className="col-span-2 flex items-center rounded-xl">
              <div className="text-gray-800 w-full">
                <div className="relative flex items-center mb-8">
                  <h1 className="text-2xl font-semibold text-gray-900">QR code convenience</h1>
                </div>
                <div className="font-base leading-relaxed text-base text-gray-700 col-span-3">
                    <li>your boarding pass is only a step away! Downloadable and scrollable for larger families</li>
                </div>
              </div>
            </section>
          </div>


      </div>
    </>
  );
};
