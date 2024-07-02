import designQRCode from "../../public/final_qrcode.jpg";
import userBooking from "../../public/userBooking.png"
import designNotification from "../../public/final_notificaion.png";
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



        <div className="sm:flex items-center justify-center sm:pl-[5em]">
          <VideoPlayer
            src="/booking.mp4"
            type="video/mp4"
            poster="/images/video-poster.jpg"
            className="h-[33em] overflow-hidden" // Adjust the size here
          />

          <section className="flex items-center rounded-xl sm:w-[30em] sm:pl-[5em] mt-[3em] sm:mt-[-5em]">
            <div className="text-gray-800 w-full">
              <div className="relative flex items-center mb-8">
                <h1 className="text-2xl font-semibold text-gray-900">Improved Flight Search</h1>
              </div>
              <div className="font-base leading-relaxed text-base text-gray-700 col-span-1">
              The app now boasts a modern UI with improved button functionality and streamlined access to information, enhancing the booking experience. Users can also view the latest sales at their location.
              </div>
            </div>
          </section>
        </div>

        <div className="grid grid-cols-5 gap-10 text-md h-full pt-[8em] sm:ml-[2em]">
          <section className="col-span-full sm:col-span-2 flex sm:items-center rounded-xl mt-[-1em] sm:ml-[3em]">
            <div className="text-gray-800 w-full">
              <div className="relative flex items-center mb-8">
                <h1 className="text-2xl font-semibold text-gray-900">Easily Access Booking Information</h1>
              </div>
              <div className="font-base leading-relaxed text-base text-gray-700">
              Users can now easily view their flight status and guests can easily upload their booking details</div>
            </div>
          </section>
          <div className="col-span-full sm:col-span-3 flex h-[30em] space-x-4">
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

          <div className="col-span-full sm:col-span-3 flex h-[30em] space-x-4">
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
                src={designNotification}
                alt="menu"
                quality={95}
                className="w-full h-full rounded-xl object-contain"
              />
            </div>
          </div>

          <section className="col-span-full sm:col-span-2 sm:flex sm:items-center rounded-xl mt-[-1em] sm:ml-[3em]">
            <div className="text-gray-800 w-full">
              <div className="relative flex sm:items-center mb-8">
                <h1 className="text-2xl font-semibold text-gray-900">Access Notifications About your Flight</h1>
              </div>
              <div className="font-base leading-relaxed text-base text-gray-700">
              Receive notifications about the status of your upcoming flight and check-in details right at your fingertips.
              </div>
            </div>
          </section>
        </div>


        <div className="grid grid-cols-5 gap-10 text-md h-full pt-[8em] sm:ml-[2em]">
          <section className="col-span-full sm:col-span-2 flex sm:items-center rounded-xl mt-[-1em] sm:ml-[3em]">
            <div className="text-gray-800 w-full">
              <div className="relative flex items-center mb-8">
                <h1 className="text-2xl font-semibold text-gray-900">Conveniently Access Boarding Pass</h1>
              </div>
              <div className="font-base leading-relaxed text-base text-gray-700">
              Your boarding pass is just a step away! Now easily downloadable and scrollable for all your passes.              </div>
            </div>
          </section>
          <div className="col-span-full sm:col-span-3 flex h-[30em] space-x-4">

            <div className="w-1/2 h-full">
            <Image src={designQRCode} alt="menu" quality={95} className="pt-5 sm:pt-0 block mx-auto rounded-xl h-[30em] object-contain bg-white z-1" />

            </div>

          </div>
        </div>
           
        <div className="flex justify-center items-center pb-[5em] pt-[9em]">
          <EllipsisHorizontalIcon className="h-10 w-10 text-black text-3xl" />
        </div>

      </div>
    </>
  );
};
