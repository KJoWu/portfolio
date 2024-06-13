export const IntroSection = () => {
  return (
    <div className="leading-8">
      <h1 className="text-4xl font-bold mb-8">Case Study: Improving Flair Airlines' App Boarding Process</h1>

      <section className="mb-12">
        <p className="text-gray-700">
          This case study presents a detailed UX audit of Flair Airlines' digital platforms, aiming to enhance user satisfaction and streamline the boarding process. With increasing competition in the airline industry, delivering an exceptional user experience is crucial for customer retention and brand loyalty.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Project Overview</h2>
        <div className="grid grid-cols-2 gap-4 text-gray-700">
          <div>
            <p className="font-medium">Timeline</p>
            <p className="font-light">5 days</p>
          </div>
          <div>
            <p className="font-medium">Role</p>
            <p className="font-light">Product Designer</p>
          </div>
          <div>
            <p className="font-medium">Project</p>
            <p className="font-light">Personal</p>
          </div>
          <div>
            <p className="font-medium">Tools</p>
            <p className="font-light">Figma, React</p>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl mb-4">Setting the Scene</h2>
        <div className="text-gray-700 ">
          <p>Imagine this: You've just purchased a flight with Flair Airlines from home, and the booking process was smooth. On the day of your flight, you're at the airport with your suitcase in one hand and your phone in the other. This is when the real challenge begins.
          </p>
          <blockquote className="border-l-4 border-blue-500 pl-4 my-4">
            "As you approach the check-in counter, anxiety builds. The app isn't working as you expected, so you remember your boarding pass is in your email. You open the email app, search for the pass, and hope your internet is stable. Or maybe you took a screenshot, but now you’re frantically scrolling through your crowded photo gallery. Minutes tick by, and your stress rises. This is not the seamless travel experience you envisioned.
            "
          </blockquote>
        </div>
      </section>
    </div>
  )
}