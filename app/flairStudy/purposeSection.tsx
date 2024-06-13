import Image from "next/image";
import app2 from "../../public/22.jpg";


const Takeaways = () => {
  return (
    <section className="bg-white py-8">
    <div className="container mx-auto px-4 lg:px-6">

      <section className="bg-white">
        <h2 className="text-3xl font-extrabold text-blue-900 mb-4">Identifying the Pain Points</h2>
        <p className="mb-4 text-lg text-black">
          A heuristic evaluation and user feedback from various platforms revealed significant usability issues in the Flair Airlines app. Key pain points include:
        </p>
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
  </section>
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