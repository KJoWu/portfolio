import Image from "next/image";
import app2 from "../../public/22.jpg";


const Takeaways = () => {
  return (
    <div className="">

      <section className="">

        <div className="mb-8">
          <h1 className="font-bold text-4xl text-gray-800  leading-[1.3em]"> Defining and Understanding the Critical Issues: Insights from Visual Investigation and User Study
          </h1>
          <hr className="border-t-4 border-[#b2ff94] my-4 w-[10em]" />
        </div>

        <blockquote className="text-xl italic font-base text-gray-900 dark:text-white my-10 w-[40em]">
          <svg className="w-8 h-8 text-gray-400 dark:text-gray-600 mb-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 14">
            <path d="M6 0H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3H2a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Zm10 0h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3h-1a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Z" />
          </svg>
          <p>     "A third of British respondents found the airport experience more stressful than the working week, and a quarter thought it even more stressful than moving.
          </p>
          <p className="mt-[.5em]">
            <cite className="text-gray-500 dark:text-gray-400">Source: <a href="https://www.finavia.fi/en/newsroom/2018/stressed-airport-three-main-causes-airport-stress-and-how-helsinki-airport-tries" className="underline text-blue-600 dark:text-blue-400">Finavia</a></cite>
          </p>
        </blockquote>


        <p className="mb-6 text-gray-700">
          Through comprehensive visual investigation and user studies, we identified critical issues within the Flair app that significantly impact user experience. Users reported high levels of stress when essential functionalities, such as retrieving boarding passes, failed. This stress is particularly pronounced in airports, which are inherently stressful due to their time-sensitive nature and the high stakes involved in catching flights. Our findings highlight the direct correlation between users' frustrations with the app's confusing design and unreliable functionalities and the stress they experience in airport settings. Access to accurate and timely information through the app is not merely a convenience but a necessity for navigating this demanding environment smoothly.

        </p>

        <div className="max-w-7xl mx-auto">

          <section className="mb-10">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Stress Reduction and User Satisfaction</h2>
            <p className="text-gray-700 mb-4">
              Airports are inherently stressful environments. A reliable app can significantly reduce user stress by providing timely and accurate information, ensuring users have a smoother travel experience. A well-functioning app can also alleviate the emotional burden of navigating air travel, providing peace of mind and a more pleasant journey. By improving navigation, login processes, design consistency, and reducing redundant information requests, we can significantly enhance the user experience and emotional well-being.
              Redirects to the website cause confusion and disrupt the user journey, increasing stress levels. Clear navigation retains users and reduces frustration. As observed, users questions the value of the app if the product intentionally redirects to the website. The lack of good UI (please reword that to make it sound better) through inconsistent styles, text and coloring was also seen by the user.
              We've also have eveidence that users had to manually make screenshots of QR codes, a feature that should not need a workaround since it already exists on the app. Furthermore, it doesn't seem like there's anything unique the app offers over the site. If we want users to continue using the site, the issues above must be addressed.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Competitive Edge and Financial Impact</h2>
            <p className="text-gray-700">
              Competitors have already addressed similar issues, providing smoother and more reliable user experiences. To remain competitive, Flair must match or exceed these standards. User frustration and dissatisfaction lead to churn, resulting in potential revenue loss. By improving the UX/UI, we can enhance user loyalty and reduce attrition rates. Simplified navigation, efficient login processes, consistent design, and optimized information handling are critical to competing effectively and protecting revenue.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Technical Challenges</h2>
            <p className="text-gray-700 mb-4">
              Addressing these issues comes with its own set of technical challenges. Ensuring seamless integration with existing backend systems for login and data retrieval can be complex, requiring robust APIs and reliable data synchronization. Implementing real-time updates for flight information and QR codes requires a strong backend infrastructure capable of handling high traffic and providing instant data. Achieving consistency across iOS, Android, and Web platforms can be challenging but is essential for a unified user experience. Careful planning and execution are necessary to overcome these technical challenges.
            </p>
          </section>
        </div>


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

      <section className="bg-blue-100 border border-blue-200 rounded-lg p-4 my-9">
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