const Takeaways = () => {
  return (
    <div className="max-w-7xl mx-auto">
      <section className="mb-8">
        <header className="mb-8">
        <h1 className="font-semibold text-3xl text-gray-800 leading-[1.4em]">
                      Defining and Understanding the Critical Issues
          </h1>
          <hr className="border-t-4 border-[#b2ff94] my-4 w-40" />
        </header>

        <blockquote className="text-xl italic text-gray-800 dark:text-white my-4 leading-9">
          <svg
            className="w-8 h-8 text-gray-400 dark:text-gray-600 mb-4"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="black"
            viewBox="0 0 18 14"
          >
            <path d="M6 0H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3H2a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Zm10 0h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3h-1a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Z" />
          </svg>
          <p className="font-semibold">
            "A third of British respondents found the airport experience more
            stressful than the working week, and a quarter thought it even more
            stressful than moving."
          </p>
          <footer className="mt-2 text-base text-gray-500 dark:text-gray-400 	">
            Source:
            <a
              href="https://www.finavia.fi/en/newsroom/2018/stressed-airport-three-main-causes-airport-stress-and-how-helsinki-airport-tries"
              className="text-blue-600 dark:text-blue-400 pl-2"
            >
              Finavia
            </a>
          </footer>
        </blockquote>

        <div className="max-w-7xl mx-auto">
          <section className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            <article className="lg:col-span-2">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4 border-l-8 border-purple-500 pl-3 mt-10 w-[30em] leading-9">
                Stress Reduction and User Satisfaction
              </h2>
              <div className="mx-auto text-gray-700 leading-8">
                <p className=" text-gray-700 leading-8">
                  Through visual analysis and user studies, we identified critical pain points in the Flair app that impact user experience. <span className="bg-[#b2ff94]">Users reported high stress when retrieving boarding passes, particularly in time-sensitive airport environments.</span>
                </p>
                <p className=" text-gray-700 leading-8 mt-4">
                  To stay competitive, Flair must enhance user loyalty by optimizing navigation, login processes, design consistency, and information handling. Competitors offer smoother experiences. <span className="bg-[#b2ff94]">A reliable app can reduce user anxiety with accurate, timely information, fostering <span className="font-semibold">customer loyalty</span> and a <span className="font-semibold">positive reputation</span>.</span>
                </p>
                <p className=" text-gray-700 leading-8 mt-4">
                  Website redirects cause confusion and disrupt the user journey. Inconsistent UI and frequent need to screenshot QR codes indicate functionality gaps. Unique benefits like <span className="font-semibold">seamless onboarding</span> that reduce stress and build trust are crucial, increasing satisfaction and positive word-of-mouth.
                </p>
                <p className=" text-gray-700 leading-8 mt-4">
                  Implementing user profiles, enhancing login reliability, and ensuring design consistency will ensure a seamless experience. These steps enhance usability, leading to <span className="font-semibold">higher retention rates</span> and a <span className="font-semibold">competitive edge</span>.  <span className="bg-[#b2ff94]">Satisfied users will likely recommend the app, increasing <span className="font-semibold">customer lifetime value</span> </span>.
                </p>
              </div>
            </article>
            <aside className="lg:col-span-1 flex items-center ">
              <blockquote className="border-l-4 border-purple-600 pl-4 italic text-gray-600 bg-slate-900 px-5 py-8 rounded-lg text-slate-100">
                <p className="leading-7 p-4 font-base">
                  "61 percent of travelers in the U.S. have booked and paid for
                  travel through their smartphone within the past year, and 64
                  percent use their smartphones en route to their destination."
                </p>
                <footer className="text-slate-100 p-3">
                  Source:{" "}
                  <a
                    href="https://www.travelmarketreport.com/articles/US-Consumers-Increasingly-Rely-on-Smartphones-to-Book-Travel"
                    className="text-blue-400"
                  >
                    Travel Market Report
                  </a>
                </footer>
              </blockquote>
            </aside>
          </section>
        </div>

        <section className="mb-2 mt-10">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4 border-l-8 border-purple-500 pl-3 mt-10  w-[30em] leading-9">
            Possible Limitations
          </h2>
          <p className="font-base leading-8 text-base text-gray-700">
            <span className="font-semibold">The current problems extend beyond visual issues;</span> a significant portion involves users experiencing login difficulties, which may be technical in nature. To enhance the app's value, we need to implement user profiles, likely requiring database integration or other technical solutions. This will be crucial and will complement the proposed design improvements.
          </p>
        </section>
      </section>

    </div>
  );
};

export const PurposeSection = () => {
  return (
    <section className="mb-12">
      <Takeaways />
    </section>
  );
};
