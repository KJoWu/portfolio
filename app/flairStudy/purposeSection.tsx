const Takeaways = () => {
  return (
    <div className="max-w-7xl mx-auto p-6">
      <section className="mb-8">
        <div className="mb-8">
          <h1 className="font-bold text-4xl text-gray-800 leading-[1.3em]">
            Defining and Understanding the Critical Issues
          </h1>
          <hr className="border-t-4 border-[#b2ff94] my-4 w-[10em]" />
        </div>

        <blockquote className="text-xl italic font-base text-gray-900 dark:text-white my-10 w-[40em]">
          <svg
            className="w-8 h-8 text-gray-400 dark:text-gray-600 mb-4"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 18 14"
          >
            <path d="M6 0H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3H2a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Zm10 0h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3h-1a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Z" />
          </svg>
          <p>
            "A third of British respondents found the airport experience more
            stressful than the working week, and a quarter thought it even more
            stressful than moving."
          </p>
          <p className="mt-[.5em]">
            <cite className="text-gray-500 dark:text-gray-400">
              Source:{" "}
              <a
                href="https://www.finavia.fi/en/newsroom/2018/stressed-airport-three-main-causes-airport-stress-and-how-helsinki-airport-tries"
                className="underline text-blue-600 dark:text-blue-400"
              >
                Finavia
              </a>
            </cite>
          </p>
        </blockquote>

        <p className="mb-6 text-gray-700 leading-8 mt-8">
          Through comprehensive visual investigation and user studies, we
          identified critical issues within the Flair app that significantly
          impact user experience. Users reported high stress levels when
          essential functionalities, such as retrieving boarding passes, failed.
          This stress is particularly pronounced in airports due to their
          time-sensitive nature and high stakes.
        </p>

        <div className="max-w-7xl mx-auto">
          <section className="grid grid-cols-3 gap-10">
            <div className="col-span-2">
              <h2 className="text-2xl font-semibold text-gray-800 mt-10 mb-5 border-l-4 border-purple-500 pl-3">
                Stress Reduction and User Satisfaction
              </h2>
              <p className="font-light leading-8 text-base text-gray-700">
              To remain competitive, Flair must enhance user loyalty and reduce attrition by improving navigation, login processes, design consistency, and information handling. Competitors have already addressed similar issues, offering smoother and more reliable user experiences. Airports are stressful, and a reliable app can reduce stress with timely, accurate information. Redirects to the website cause confusion and disrupt the user journey, increasing stress levels. Inconsistent UI styles and colors contribute to user frustration. Users often screenshot QR codes, indicating a need for better functionality. The app must offer unique benefits over the website to retain users and prevent revenue loss due to dissatisfaction.
              </p>
            </div>
            <div className="col-span-1 flex items-center">
              <blockquote className="border-l-4 border-blue-500 pl-4 italic text-gray-600">
                <p className="leading-8 mt-8">
                  61 percent of travelers in the U.S. have booked and paid for
                  travel through their smartphone within the past year, and 64
                  percent use their smartphones en route to their destination.
                </p>
                <p>
                  Source:
                  <a
                    href="https://www.travelmarketreport.com/articles/US-Consumers-Increasingly-Rely-on-Smartphones-to-Book-Travel"
                    className="underline text-blue-600"
                  >
                    Travel Market Report
                  </a>
                </p>
              </blockquote>
            </div>
          </section>
        </div>

        <section className="mb-2 mt-10">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4 border-l-4 border-purple-500 pl-3">
            Technical Challenges
          </h2>
          <p className="font-light leading-8 text-base text-gray-700">
            Addressing these issues involves significant technical challenges.
            Ensuring seamless integration with existing backend systems for
            login and data retrieval requires robust APIs and reliable data
            synchronization. Implementing real-time updates for flight
            information and QR codes necessitates a strong backend
            infrastructure capable of handling high traffic and providing
            instant data. Achieving consistency across iOS, Android, and Web
            platforms is essential for a unified user experience and requires
            careful planning and execution.
          </p>
        </section>
      </section>

      <section>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Benefits for Users
            </h2>
            <ul className="list-disc space-y-3 font-light leading-8 text-base text-gray-700">
              {[
                {
                  title: "Seamless Onboarding",
                  description:
                    "Reduces stress, enhances travel experience, and builds confidence and trust.",
                },
                {
                  title: "Increased Satisfaction",
                  description:
                    "Effortless task completion leads to higher satisfaction.",
                },
                {
                  title: "Higher Retention Rates",
                  description:
                    "A user-friendly app fosters repeated use and loyalty.",
                },
                {
                  title: "Positive Word-of-Mouth",
                  description:
                    "Satisfied users are likely to recommend the app.",
                },
              ].map((benefit, index) => (
                <li
                  key={index}
                  className="flex"
                >
                  <div className="text-purple-500 mr-2">&#8226;</div>
                  <div>
                    <span className="font-semibold">{benefit.title}:</span> {benefit.description}
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Benefits for the Company
            </h2>
            <ul className="list-disc space-y-3 font-light leading-8 text-base text-gray-700">
              {[
                {
                  title: "Reputation Management",
                  description:
                    "Maintains a positive reputation, crucial for competitiveness.",
                },
                {
                  title: "Customer Loyalty",
                  description:
                    "Satisfied users return, increasing loyalty and lifetime value.",
                },
                {
                  title: "Competitive Edge",
                  description:
                    "Enhanced usability improves satisfaction, retention, and fosters positive word-of-mouth.",
                },
              ].map((benefit, index) => (
                <li
                  key={index}
                  className="flex"
                >
                  <div className="text-purple-500 mr-2">&#8226;</div>
                  <div>
                  <span className="font-semibold">{benefit.title}:</span> {benefit.description}
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

export const PurposeSection = () => {
  return (
    <section className="mb-3">
      <Takeaways />
    </section>
  );
};
