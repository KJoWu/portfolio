import scene from "../../public/airportScene.jpg";
import Image from "next/image";

export const IntroSection = () => {
  return (
    <div className="leading-8">
      <h1 className="text-4xl font-semibold mb-8">Case Study: Improving Flair Airlines' App Boarding Process</h1>

      <section className="mb-12">
        <p className="text-gray-700">
          This case study presents a detailed UX audit of Flair Airlines' digital platforms, aiming to enhance user satisfaction and streamline the boarding process. With increasing competition in the airline industry, delivering an exceptional user experience is crucial for customer retention and brand loyalty.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Project Overview</h2>
        <div className="grid grid-cols-4 gap-4 text-gray-700">
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
            <p className="font-base">Figma, React</p>
          </div>
        </div>
      </section>

      {/* <section className="mb-16 p-8 max-w-4xl mx-auto bg-white shadow-lg rounded-lg">
  <div className="text-center text-gray-800">
    <h2 className="text-3xl font-base mb-6">Setting the Scene</h2>
    <p className="mb-6 font-base max-w-2xl mx-auto leading-relaxed">
      Imagine a seamless travel experience with Flair Airlines. Your booking process was smooth, and now you're at the airport. But, the real challenge begins here.
    </p>
    <blockquote className="p-8 max-w-2xl mx-auto bg-gray-100 shadow-inner rounded-lg border-l-8 border-red-500">
      <div className="text-lg leading-7 text-gray-700">
        <p className="mb-4 font-base">As you approach the check-in counter, anxiety builds.</p>
        <p className="mb-4 font-base"><span className="underline decoration-red-500">The app isn't working.</span></p>
        <p className="mb-4 font-base">You remember your boarding pass is in your email and scramble through your messages to find the QR code.</p>
        <p className="mb-4 font-base"><span className="underline decoration-red-500">It's not there.</span></p>
        <p className="mb-4 font-base">You recall saving a screenshot, so you go through your gallery, your memes to find the photo.</p>
        <p className="mb-4 font-base">The lines build up behind you, the minutes to your flight tick by...</p>
        <p className="mb-4 font-base"><span className="underline decoration-red-500">Your stress rises.</span></p>
        <p className="mb-4 font-base">This is not the seamless travel experience you envisioned.</p>
      </div>
    </blockquote>
  </div>
</section> */}


    </div>
  )
}