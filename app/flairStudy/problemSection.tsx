import intro from "../../public/intro.png";
import Image from "next/image";

export const ProblemSection = () => {
  return (
    <div className="grid grid-cols-3 gap-10 text-md h-full py-12">
      <section
        className="col-span-2 flex items-center p-10 shadow-2xl rounded-xl"
      >
        <div className="text-gray-800 w-full">
          <div className="relative inline-block w-full mb-8">
          <div className="absolute left-0 right-0 bg-green-300 rounded-full w-[9em]" style={{ top: '75%', height: '5px', marginTop: '-1px' }}></div>
            <h1 className="relative text-3xl font-extrabold pb-4 z-10  uppercase text-gray-900">Context</h1>
          </div>
          <div className="font-light leading-relaxed text-base text-gray-700">
            <p className="mb-8">
              Flair Airlines is a Canadian budget airline and a popular choice among travelers for its affordable fares and convenient routes. When a friend deleted the app after struggling to access their boarding pass in a scenario similar to the one described above, it piqued my interest. What seemed like a simple task turned out to be quite complicated. Intrigued by these issues, I decided to investigate.
            </p>
            <div className="font-semibold text-lg text-gray-800">
              How can we redesign the digital boarding pass process to be more intuitive, reliable, and stress-free for Flair Airlines passengers?
            </div>
          </div>
        </div>
      </section>

      <Image src={intro} alt={"issue 1"} quality={95} className="rounded-xl w-full h-full object-contain bg-black" />



    </div>
  )
}

