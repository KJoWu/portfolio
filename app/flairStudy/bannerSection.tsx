"use client";

import React from "react";
import designQRCode from "../../public/final_qrcode.jpg";
import { EllipsisHorizontalIcon } from '@heroicons/react/24/solid';
import VideoPlayer from "./videoPlayer";
import Image from "next/image";


export const BannerSection = () => {
  return (
    <div className="text-center pt-15">
      <div className="flex flex-col items-center text-center">
        <h1 className="text-5xl font-semibold  z-[10]">Flair Airlines Redesign</h1>
        <hr className="border-t-[.8em] border-[#b2ff94] mt-[.9em] w-[21em] z-[1]" />
      </div>

      <section className="mb-[5em] flex justify-center items-center mt-[3em]">
        <p className="text-gray-700  leading-8 text-center max-w-[55em]">
          This case study presents a detailed UX audit of Flair Airlines' digital platforms, aiming to enhance user satisfaction and streamline the boarding process. With increasing competition in the airline industry, delivering an exceptional user experience is crucial for customer retention and brand loyalty.
        </p>
      </section>

      <section className="mb-12 px-4 md:px-[10em]">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-2 text-gray-700">
          <div>
            <p className="font-semibold">Timeline</p>
            <p className="font-base">1 week</p>
          </div>
          <div>
            <p className="font-semibold">Possible Client</p>
            <p className="font-base">Flair Airlines</p>
          </div>
          <div>
            <p className="font-semibold">Role</p>
            <p className="font-base">Product Designer</p>
          </div>
          <div>
            <p className="font-semibold">Project</p>
            <p className="font-base">Personal</p>
          </div>
          <div>
            <p className="font-semibold">Tools</p>
            <p className="font-base">Figma, Miro</p>
          </div>
        </div>
      </section>


      <section className="col-span-4 flex items-center justify-center flex-nowrap">
        <VideoPlayer
          src="/booking.mp4"
          type="video/mp4"
          poster="/images/video-poster.jpg"
          className="rounded-xl object-contain flex-shrink-0 max-w-[20%] pt-[.9em]" // Adjust the size here
        />
        <VideoPlayer
          src="/guestBooking.mp4"
          type="video/mp4"
          poster="/images/video-poster.jpg"
          className="h-[33em] overflow-hidden" // Adjust the size here
        />
        <VideoPlayer
          src="/userNotification.mp4"
          type="video/mp4"
          poster="/images/video-poster.jpg"
          className="h-[33em] overflow-hidden" // Adjust the size here
        />
        <Image src={designQRCode} alt="menu" quality={95} className="rounded-xl object-contain flex-shrink-0 max-w-[20%] mr-4" />
      </section>

      <div className="flex justify-center items-center pb-[7em] pt-[7em]">
        <EllipsisHorizontalIcon className="h-10 w-10 text-black text-3xl" />
      </div>


    </div>
  );
}
