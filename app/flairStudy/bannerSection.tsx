"use client";

import React from "react";
import designMenu from "../../public/final_booking.jpg";
import designQRCode from "../../public/final_qrcode.jpg";
import designBooking from "../../public/final_booking.jpg";
import designNotification from "../../public/final_notificaion.png";
import designCheckin from "../../public/final_checkin.png";
import Image from "next/image";


export const BannerSection = () => {
  return (
    <div className="text-center">
      <div className="absolute inset-0 h-full w-full" />
      <h1 className="text-5xl font-semibold mb-8">Flair Airline Redesign</h1>
      

      <section className="mb-12">
        <p className="text-gray-700 font-semibold leading-8">
          This case study presents a detailed UX audit of Flair Airlines' digital platforms, aiming to enhance user satisfaction and streamline the boarding process. With increasing competition in the airline industry, delivering an exceptional user experience is crucial for customer retention and brand loyalty.
        </p>
      </section>

      <section className="mb-12">
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
        <Image src={designMenu} alt="menu" quality={95} className="rounded-xl object-contain flex-shrink-0 max-w-[20%] mr-4" />
        <Image src={designMenu} alt="menu" quality={95} className="rounded-xl object-contain flex-shrink-0 max-w-[20%] mr-4" />
        <Image src={designMenu} alt="menu" quality={95} className="rounded-xl object-contain flex-shrink-0 max-w-[20%] mr-4" />
        <Image src={designMenu} alt="menu" quality={95} className="rounded-xl object-contain flex-shrink-0 max-w-[20%]" />
      </section>



    </div>
  );
}
