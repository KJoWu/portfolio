import designQRCode from "../../public/final_qrcode.jpg";
import designBooking from "../../public/final_booking.jpg";
import userBooking from "../../public/userBooking.png"
import designNotification from "../../public/final_notificaion.png";
import designCheckin from "../../public/final_checkin.png";
import VideoPlayer from "./videoPlayer";
import { EllipsisHorizontalIcon } from '@heroicons/react/24/solid';


import Image from "next/image";

export const FinalDesignSection = () => {
  return (
    <>
      <div className="mb flex flex-col items-center">
        <h1 className="font-semibold text-gray-800 text-[2.6em] leading-[1.4em]">Final Design</h1>
        <hr className="border-t-8 border-[#b2ff94] my-5 pb-[10em] w-[10em]" />
      </div>
      <div className="space-y-4">



        <div className="flex items-center justify-center pl-[5em]">
          <VideoPlayer
            src="/booking.mp4"
            type="video/mp4"
            poster="/images/video-poster.jpg"
            className="h-[33em] overflow-hidden" // Adjust the size here
          />

          <section className="flex items-center rounded-xl w-[30em] pl-[5em] mt-[-5em]">
            <div className="text-gray-800 w-full">
              <div className="relative flex items-center mb-8">
                <h1 className="text-2xl font-semibold text-gray-900">Improved Booking</h1>
              </div>
              <div className="font-base leading-relaxed text-base text-gray-700 col-span-1">
                App now features a modernized UI with enhanced button functionality and streamlined access to information, significantly improving the booking experience
              </div>
            </div>
          </section>
        </div>

        <div className="grid grid-cols-5 gap-10 text-md h-full pt-[8em] ml-[2em]">
          <section className="col-span-2 flex items-center rounded-xl mt-[-1em] ml-[3em]">
            <div className="text-gray-800 w-full">
              <div className="relative flex items-center mb-8">
                <h1 className="text-2xl font-semibold text-gray-900">Easily Access Booking Information</h1>
              </div>
              <div className="font-base leading-relaxed text-base text-gray-700">
                Users can now view their boarding time, pass status, and check-in schedule.
              </div>
            </div>
          </section>
          <div className="col-span-3 flex h-[30em] space-x-4">
          <div className="w-1/2 h-full">
              <Image
                src={userBooking}
                alt="menu"
                quality={95}
                className="w-full h-full rounded-xl object-contain"
              />
            </div>
            <div className="w-1/2 h-full">
              <VideoPlayer
                src="/guestBooking.mp4"
                type="video/mp4"
                poster="/images/video-poster.jpg"
                className="w-full h-full rounded-xl object-cover"
              />
            </div>

          </div>
        </div>


        <div className="grid grid-cols-5 gap-10 text-md h-full pt-[8em] ml-[2em]">

          <div className="col-span-3 flex h-[30em] space-x-4">
            <div className="w-1/2 h-full">
              <VideoPlayer
                src="/userNotification.mp4"
                type="video/mp4"
                poster="/images/video-poster.jpg"
                className="w-full h-full rounded-xl object-cover"
              />
            </div>
            <div className="w-1/2 h-full">
              <Image
                src={userBooking}
                alt="menu"
                quality={95}
                className="w-full h-full rounded-xl object-contain"
              />
            </div>
          </div>
          <section className="col-span-2 flex items-center rounded-xl mt-[-1em] ml-[3em]">
            <div className="text-gray-800 w-full">
              <div className="relative flex items-center mb-8">
                <h1 className="text-2xl font-semibold text-gray-900">Get Personalized Notifications about your flight status</h1>
              </div>
              <div className="font-base leading-relaxed text-base text-gray-700">
              Your boarding pass is only a step away! Downloadable and scrollable for larger families.

              </div>
            </div>
          </section>
        </div>





        <div className="flex items-center justify-center pt-[7em] ml-[4em]">

          <section className="flex w-[30em] pl-[5em] ml-[3em] z-10">
            <div className="text-gray-800">
              <div className="relative flex items-center mb-8">
                <h1 className="text-2xl font-semibold text-gray-900 ">Boarding Pass Convenience</h1>
              </div>
              <div className="font-base leading-relaxed text-base text-gray-700 col-span-3">
                Your boarding pass is only a step away! Downloadable and scrollable for larger families.
              </div>
            </div>
          </section>
          <Image src={designQRCode} alt="menu" quality={95} className="rounded-xl h-[30em] object-contain bg-white  ml-[-8em] z-1" />

        </div>

        <div className="flex justify-center items-center pb-[5em] pt-[9em]">
          <EllipsisHorizontalIcon className="h-10 w-10 text-black text-3xl" />
        </div>

      </div>
    </>
  );
};
