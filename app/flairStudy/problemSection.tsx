import intro from "../../public/intro.png";
import Image from "next/image";
import { EllipsisHorizontalIcon } from '@heroicons/react/24/solid';


export const ProblemSection = () => {
  return (
    <div className="">
      <div className="grid grid-cols-5 gap-20 text-md h-full py-12 ">
        <section
          className="col-span-3 rounded-xl">
          <div className="text-gray-800 w-full">

            <div className="mb-8">
              <h1 className="font-medium text-3xl text-gray-800 leading-[1.5em]"> Setting the Scene: The Challenges of Flair Airlines</h1>
              <hr className="border-t-4 border-[#b2ff94] my-4 w-[10em]" />
            </div>


            <blockquote className="text-xl italic font-base dark:text-white my-10">
              <svg className="w-8 h-8 text-gray-400 dark:text-gray-600 mb-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="purple-700" viewBox="0 0 18 14">
                <path d="M6 0H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3H2a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Zm10 0h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3h-1a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Z" />
              </svg>
              <p> Imagine you're at the airport, rushing through security, checking screens for gate changes, and feeling the pressure of time ticking down. </p>
              <p className="pt-3">Suddenly, the app you rely on for your boarding pass stops working. Desperation sets in as you frantically search your phone for a screenshot of your QR code. </p>
              <br />
              <p>This is not the seamless, stress-free experience you were hoping for.</p>

            </blockquote>


            <div className={`font-light leading-8 text-base text-gray-700`}>
              <p className="mb-8">
                Flair Airlines is a Canadian budget airline, is favored for its affordable fares and convenient routes. However, when a friend deleted the app after struggling to access their boarding pass, it highlighted a significant issue.<span className="bg-[#b2ff94]">This seemingly simple task proved to be quite complicated.</span> I decided to investigate.
              </p>
              <blockquote className="text-xl font-base dark:text-white my-10 leading-8">
                How can we redesign the digital boarding pass process to be more <b>intuitive, reliable, and stress-free</b> for Flair Airlines passengers?
              </blockquote>
            </div>
          </div>
        </section>
        <Image src={intro} alt={"issue 1"} quality={95} className="rounded-xl w-full h-full object-contain col-span-2" />
      </div>

      <div className="flex justify-center items-center py-[7em]">
        <EllipsisHorizontalIcon className="h-6 w-6 text-black" />
      </div>
    </div>
  )
}

