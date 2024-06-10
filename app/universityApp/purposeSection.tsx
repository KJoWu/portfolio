const Takeaways = () => {
  return (
    <section>
      <h2 className="text-2xl font-bold mb-4">Identifying the Pain Points</h2>
      <p className="mb-4">
        The heuristic evaluation and user feedback from various platforms, including Reddit, the Play Store, the App Store, and the official Facebook page, revealed several pervasive usability issues with the Flair Airlines app. Key pain points include:
      </p>
      <ul className="list-disc list-inside mb-4">
        <li className="mb-2">
          <span className="font-semibold">Confusing Navigation and External Redirects:</span> The app frequently redirects users to the website, making them question its purpose. Except for the flight status and in-flight pages, most functionalities are handled via external links. THis causes a loss of user retention on the App. 
        </li>
        <li className="mb-2">
          <span className="font-semibold">Inefficient Login and Data Retrieval:</span> The app's login process is cumbersome, and users often need to rely on emails to retrieve important information like QR codes, leading to a fragmented experience and defeats the purpose of logging in.
        </li>
        <li className="mb-2">
          <span className="font-semibold">Inconsistent Design and Information:</span> There are inconsistencies in terminology, color schemes, and the amount of information provided, which can confuse users and degrade the overall user experience and reduces its good lookgs and visual quality. 
        </li>
        <li className="mb-2">
          <span className="font-semibold">Redundant Information Requests and Pages:</span> Users are asked for information that should already be available within the app, and there are redundant pages that do not enhance functionality.
        </li>
      </ul>
      Tap in all these things combined during take off during an airplane envirionment, you will result in unsatisfaging customers as evident from the app store ratings. 

      <h3 className="text-xl font-bold mb-4">Why This Matters</h3>
      <div className="mb-4">
        <h4 className="text-lg font-semibold">For Users:</h4>
        <ul className="list-disc list-inside mb-4">
          <li className="mb-2">
            <span className="font-semibold">Seamless Onboarding:</span> A streamlined onboarding process reduces stress and enhances the travel experience. Easy access to vital information builds confidence and trust, encouraging users to rely on the app for future trips.
          </li>
          <li className="mb-2">
            <span className="font-semibold">Increased Satisfaction:</span> When users can effortlessly complete their tasks, they are more likely to have a positive impression of the app, leading to higher satisfaction.
          </li>
          <li className="mb-2">
            <span className="font-semibold">Higher Retention Rates:</span> A user-friendly app encourages repeated use, fostering loyalty.
          </li>
          <li className="mb-2">
            <span className="font-semibold">Positive Word-of-Mouth:</span> Satisfied users are more likely to recommend the app to others, spreading positive feedback.
          </li>
        </ul>
      </div>
      <div className="mb-4">
        <h4 className="text-lg font-semibold">For the Company:</h4>
        <ul className="list-disc list-inside mb-4">
          <li className="mb-2">
            <span className="font-semibold">Reputation Management:</span> Providing a seamless experience helps maintain a positive reputation, crucial for staying competitive in the airline industry.
          </li>
          <li className="mb-2">
            <span className="font-semibold">Customer Loyalty:</span> Satisfied users are more likely to return, increasing customer loyalty and lifetime value.
          </li>
          <li className="mb-2">
            <span className="font-semibold">Competitive Edge:</span> Enhancing the app's usability improves customer satisfaction, retention rates, and fosters positive word-of-mouth, which is essential for maintaining a competitive edge in the market.
          </li>
        </ul>
      </div>
      <p>
        Addressing these usability issues is essential for improving the app's functionality, retaining user trust, and providing a seamless travel experience for Flair Airlines passengers.
      </p>
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