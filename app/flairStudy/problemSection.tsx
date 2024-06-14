import intro from "../../public/intro.png";
import Image from "next/image";

export const ProblemSection = () => {
  return (
    <div className="grid grid-cols-3 gap-10 text-md h-full py-12">
      <section
        className="col-span-2 flex items-center rounded-xl"
      >
        <div className="text-gray-800 w-full">

          <div className="relative flex items-center mb-4">
            <h1 className="text-2xl font-semibold text-gray-900 uppercase"> Context</h1>
          </div>

          <div className="font-light leading-relaxed text-sm text-gray-700">
            <p className="mb-8">
              Flair Airlines, a Canadian budget airline, is favored for its affordable fares and convenient routes. However, when a friend deleted the app after struggling to access their boarding pass, it highlighted a significant issue. This seemingly simple task proved to be quite complicated. Intrigued by these challenges, I decided to investigate.
            </p>
            <div className="font-semibold text-lg text-gray-800 ">
              How can we redesign the digital boarding pass process to be more intuitive, reliable, and stress-free for Flair Airlines passengers?
            </div>
          </div>
        </div>
      </section>

      <Image src={intro} alt={"issue 1"} quality={95} className="rounded-xl w-full h-full object-contain bg-black" />
    </div>
  )
}

