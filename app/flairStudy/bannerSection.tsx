"use client";

import React from "react";
import designMenu from "../../public/final_booking.jpg";
import designQRCode from "../../public/final_qrcode.jpg";
import designBooking from "../../public/final_booking.jpg";
import designNotification from "../../public/final_notificaion.png";
import designCheckin from "../../public/final_checkin.png";
import { EllipsisHorizontalIcon } from '@heroicons/react/24/solid';
import Image from "next/image";


export const BannerSection = () => {
  return (
    <div className="text-center pt-15">
      <div className="absolute inset-0 h-full w-full" />
      <div className="flex flex-col items-center text-center">
        <h1 className="text-5xl font-semibold  z-[10]">Flair Airlines Redesign</h1>
        <hr className="border-t-[.8em] border-[#b2ff94] mt-[.5em] w-[25em] z-[1]" />
      </div>

      <section className="mb-12 flex justify-center items-center mt-[2em]">
        <p className="text-gray-700 font-semibold leading-8 text-center max-w-[55em]">
          This case study presents a detailed UX audit of Flair Airlines' digital platforms, aiming to enhance user satisfaction and streamline the boarding process. With increasing competition in the airline industry, delivering an exceptional user experience is crucial for customer retention and brand loyalty.
        </p>
      </section>

      <section className="mb-12 px-[10em] ">
        <div className="grid grid-cols-4 gap-2 text-gray-700">
          <div>
            <p className="font-semibold">Timeline</p>
            <p className="font-base">5 days</p>
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
        <Image src={designCheckin} alt="menu" quality={95} className="rounded-xl object-contain flex-shrink-0 max-w-[20%] mr-4" />
        <Image src={designQRCode} alt="menu" quality={95} className="rounded-xl object-contain flex-shrink-0 max-w-[20%] mr-4" />
        <Image src={designBooking} alt="menu" quality={95} className="rounded-xl object-contain flex-shrink-0 max-w-[20%] mr-4" />
        <Image src={designNotification} alt="menu" quality={95} className="rounded-xl object-contain flex-shrink-0 max-w-[20%]" />
      </section>

      <div className="flex justify-center items-center pb-[7em] pt-[7em]">
      <EllipsisHorizontalIcon className="h-10 w-10 text-black text-3xl" />
      </div>


    </div>
  );
}
