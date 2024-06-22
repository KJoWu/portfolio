import designMenu from "../../public/design_menu.jpg";
import designQRCode from "../../public/final_qrcode.jpg";
import designBooking from "../../public/final_booking.jpg";
import designNotification from "../../public/final_notificaion.png";
import designCheckin from "../../public/final_checkin.png";
import VideoPlayer from "./videoPlayer";


import Image from "next/image";

export const FinalDesignSection = () => {
  return (
    <>


      <div className="mb-8 flex flex-col items-center">
        <h1 className="font-semibold text-gray-800 text-3xl leading-[1.4em]">Final Design</h1>
        <hr className="border-t-8 border-[#b2ff94] my-2 w-[10em]" />
      </div>
      <div className="space-y-4">


        <div className="grid grid-cols-5 gap-10 text-md h-full py-30">
        <VideoPlayer
        src="/bookingVideo.mp4"  
        type="video/mp4"
        poster="/images/video-poster.jpg"
        className="w-full h-[50em] object-contain col-span-3" // Adjust the size here
      />
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
          <section className="col-span-2 flex items-center rounded-xl">
            <div className="text-gray-800 w-full">
              <div className="relative flex items-center mb-8">
                <h1 className="text-2xl font-semibold text-gray-900">Easily Access Booking Information</h1>
              </div>
              <div className="font-base leading-relaxed text-base text-gray-700 col-span-3">
                Users can now view their boarding time, pass status, and check-in schedule.
              </div>
            </div>
          </section>
          <div className="col-span-3 flex h-[30em]">
            <Image src={designBooking} alt="menu" quality={95} className="rounded-xl  object-contain mr-4" />
            <Image src={designBooking} alt="menu" quality={95} className="rounded-xl object-contain" />
          </div>
        </div>

        <div className="grid grid-cols-5 gap-10 text-md h-full py-30">
          <div className="col-span-3 flex h-[30em]">
            <Image src={designNotification} alt="menu" quality={95} className="rounded-xl object-contain mr-4" />
            <Image src={designCheckin} alt="menu" quality={95} className="rounded-xl object-contain" />
          </div>
          <section className="col-span-2 flex items-center rounded-xl mt-[-2em]">
            <div className="text-gray-800 w-full">
              <div className="relative flex items-center mb-8">
                <h1 className="text-2xl font-semibold text-gray-900">Get Personalized Notifications about your flight status</h1>
              </div>
              <div className="font-base leading-relaxed text-base text-gray-700 col-span-3">
                Your boarding pass is only a step away! Downloadable and scrollable for larger families.
              </div>
            </div>
          </section>

        </div>

        <div className="grid grid-cols-5 gap-10 text-md h-full py-30">

          <section className="col-span-2 flex items-center rounded-xl mt-[-2em]">
            <div className="text-gray-800 w-full">
              <div className="relative flex items-center mb-8">
                <h1 className="text-2xl font-semibold text-gray-900">QR Code Convenience</h1>
              </div>
              <div className="font-base leading-relaxed text-base text-gray-700 col-span-3">
                Your boarding pass is only a step away! Downloadable and scrollable for larger families.
              </div>
            </div>
          </section>
          <Image src={designQRCode} alt="menu" quality={95} className="rounded-xl w-full h-[30em] object-contain bg-white col-span-3" />

        </div>



      </div>
    </>
  );
};
