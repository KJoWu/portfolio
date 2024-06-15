import Image from "next/image";
import app2 from "../../public/22.jpg";


const Takeaways = () => {
  return (
    <div className="pb-[10em]">

      <section className="">

        <div className="mb-8">
          <h1 className="font-bold text-4xl text-gray-800 leading-10 leading-[1.2em]"> Defining and Understanding the Critical Issues: Insights from Visual Investigation and User Study
          </h1>
          <hr className="border-t-4 border-[#b2ff94] my-4 w-[10em]" />
        </div>




        <blockquote className="text-xl italic font-semibold text-gray-900 dark:text-white my-10">
          <svg className="w-8 h-8 text-gray-400 dark:text-gray-600 mb-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 14">
            <path d="M6 0H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3H2a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Zm10 0h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3h-1a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Z" />
          </svg>
          <p>          Imagine you're at the airport, navigating through the hectic rush of security, constantly checking screens for gate changes, and feeling the weight of time ticking down to your departure. In such a high-stress environment, every piece of information becomes crucial.
          </p>
        </blockquote>
        <p>
          In our previous section, we uncovered critical issues from both visual investigation and user study. Users expressed significant stress when essential functionalities like retrieving boarding passes failed within the app. This stress is exacerbated in airports, known as some of the most stressful environments due to their time-sensitive nature and the high stakes involved in catching flights.
          </p>
          <p>

            <p>
              90% of users find airports as stressful as hospitals
            </p>

          Our findings resonate deeply with these realities. Users' frustrations with confusing app designs and unreliable functionalities directly correlate with the stress they experience in airports. Access to accurate and timely information through the app is not merely a convenience but a necessity to navigate this demanding environment smoothly.        </p>
        <ul className="list-disc pl-6 space-y-3 text-black">
          {[
            { title: 'Confusing Navigation and External Redirects', description: 'The app frequently redirects users to the website, causing confusion and decreasing retention.' },
            { title: 'Inefficient Login and Data Retrieval', description: 'The login process is cumbersome, often requiring emails for retrieving crucial information like QR codes.' },
            { title: 'Inconsistent Design and Information', description: 'Inconsistencies in terminology, color schemes, and information quantity confuse users and degrade the experience.' },
            { title: 'Redundant Information Requests and Pages', description: 'Users are asked for information that should be available within the app, leading to redundancy.' }
          ].map((point, index) => (
            <li key={index} className="flex items-start hover:bg-blue-50 p-2 rounded transition">
              <div className="text-blue-500 mr-2">&#8226;</div>
              <div><strong>{point.title}:</strong> {point.description}</div>
            </li>
          ))}
        </ul>
      </section>

      <section className="bg-white">
        <h2 className="text-3xl font-extrabold text-blue-900 mb-4">Why This Matters</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-2xl font-bold text-blue-800 mb-3">For Users:</h3>
            <ul className="list-disc pl-6 space-y-3 text-black">
              {[
                { title: 'Seamless Onboarding', description: 'Reduces stress, enhances travel experience, and builds confidence and trust.' },
                { title: 'Increased Satisfaction', description: 'Effortless task completion leads to higher satisfaction.' },
                { title: 'Higher Retention Rates', description: 'A user-friendly app fosters repeated use and loyalty.' },
                { title: 'Positive Word-of-Mouth', description: 'Satisfied users are likely to recommend the app.' }
              ].map((benefit, index) => (
                <li key={index} className="flex items-start hover:bg-blue-50 p-2 rounded transition">
                  <div className="text-blue-500 mr-2">&#8226;</div>
                  <div><strong>{benefit.title}:</strong> {benefit.description}</div>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-2xl font-bold text-blue-800 mb-3">For the Company:</h3>
            <ul className="list-disc pl-6 space-y-3 text-black">
              {[
                { title: 'Reputation Management', description: 'Maintains a positive reputation, crucial for competitiveness.' },
                { title: 'Customer Loyalty', description: 'Satisfied users return, increasing loyalty and lifetime value.' },
                { title: 'Competitive Edge', description: 'Enhanced usability improves satisfaction, retention, and fosters positive word-of-mouth.' }
              ].map((benefit, index) => (
                <li key={index} className="flex items-start hover:bg-blue-50 p-2 rounded transition">
                  <div className="text-blue-500 mr-2">&#8226;</div>
                  <div><strong>{benefit.title}:</strong> {benefit.description}</div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="bg-blue-100 border border-blue-200 rounded-lg p-4 mb-8">
        <p className="text-lg text-blue-900 font-semibold">
          "Addressing these usability issues is essential for improving the app's functionality, retaining user trust, and providing a seamless travel experience for Flair Airlines passengers."
        </p>
      </section>
    </div>
  );
}

export const PurposeSection = () => {

  return (
    <>
      <section className="mb-3">
        <Takeaways />
      </section>
    </>
  )

}