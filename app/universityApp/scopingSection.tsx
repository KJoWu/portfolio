const UserStories = () => {
  return (
    <div className="max-w-6xl mx-auto p-6 font-light text-sm">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-white shadow-md rounded-lg p-6 flex space-x-6">
          <div>
            <div className="w-32 h-32 bg-gray-200 rounded-full flex-shrink-0"></div>
            <div>
              <h2 className="text-xl font-semibold mb-2">Sarah Johnson</h2>
              <p className="text-gray-600 mb-2"><strong>Age:</strong> 34</p>
              <p className="text-gray-600 mb-2"><strong>Occupation:</strong> Marketing Manager</p>
              <p className="text-gray-600 mb-2"><strong>Travel Frequency:</strong> Twice a month</p>
              <p className="text-gray-600 mb-4"><strong>Tech Savviness:</strong> High</p>
            </div>

            <p className="mb-4">Sarah frequently travels for work and relies on airline apps to manage her schedule. She values efficiency and clarity in the app's design to reduce stress and maximize productivity.</p>
            <blockquote className="italic text-gray-700">"I need to access my boarding pass in seconds, not minutes. My schedule is too tight for any delays."</blockquote>
          </div>
        </div>

        <div className="bg-white shadow-md rounded-lg p-6 flex space-x-6">
          <div>
            <div className="w-32 h-32 bg-gray-200 rounded-full flex-shrink-0"></div>
            <h2 className="text-xl font-semibold mb-2">David Kim</h2>
            <p className="text-gray-600 mb-2"><strong>Age:</strong> 40</p>
            <p className="text-gray-600 mb-2"><strong>Occupation:</strong> Software Engineer</p>
            <p className="text-gray-600 mb-2"><strong>Travel Frequency:</strong> Twice a year</p>
            <p className="text-gray-600 mb-4"><strong>Tech Savviness:</strong> Medium</p>
            <p className="mb-4">David plans family vacations and needs a reliable, user-friendly app to ensure smooth travel, especially with young children. He will use whatever method is easiest but prefers modern solutions.
            </p>
            <blockquote className="italic text-gray-700">"Traveling with kids is stressful enough. I need an app that makes things easier, not harder."</blockquote>
          </div>
        </div>
        <div className="bg-white shadow-md rounded-lg p-6 flex space-x-6">
          <div>
            <div className="w-32 h-32 bg-gray-200 rounded-full flex-shrink-0"></div>
            <h2 className="text-xl font-semibold mb-2">Emily Martinez</h2>
            <p className="text-gray-600 mb-2"><strong>Age:</strong> 27</p>
            <p className="text-gray-600 mb-2"><strong>Occupation:</strong> Graphic Designer</p>
            <p className="text-gray-600 mb-2"><strong>Travel Frequency:</strong> Once a year</p>
            <p className="text-gray-600 mb-4"><strong>Tech Savviness:</strong> High</p>
            <p className="mb-4">Emily enjoys vacations and seeks a stress-free travel experience. She prefers intuitive, easy-to-use apps to focus on enjoying her trip without technical issues.</p>
            <blockquote className="italic text-gray-700">"When I travel, I want everything to be simple and easy to find. I don’t want to waste time figuring out the app."</blockquote>
          </div>
        </div>
        <div className="bg-white shadow-md rounded-lg p-6 flex space-x-6">
          <div>
            <div className="w-32 h-32 bg-gray-200 rounded-full flex-shrink-0"></div>
            <h2 className="text-xl font-semibold mb-2">Tom Anderson</h2>
            <p className="text-gray-600 mb-2"><strong>Age:</strong> 45</p>
            <p className="text-gray-600 mb-2"><strong>Occupation:</strong> Retired</p>
            <p className="text-gray-600 mb-2"><strong>Travel Frequency:</strong> Rarely travels</p>
            <p className="text-gray-600 mb-4"><strong>Tech Savviness:</strong> Low</p>
            <p className="mb-4">Tom rarely travels and prefers traditional methods over apps. Designing the app for Tom might be unproductive, as he is unlikely to use it.
            </p>
            <blockquote className="italic text-gray-700">"I prefer having my tickets and information on paper. Apps just confuse me and add to my anxiety."</blockquote>
          </div>
        </div>
      </div>
    </div>
  )
}


export const ScopingSection = () => {
  return (
    <>



      <p className="text-gray-700">
        By focusing on these improvements, we aim to create a more intuitive and user-friendly experience for travelers using the Flair app on their travel day.
      </p>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Planning the User Pathways
        </h2>
        <UserStories />

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Why Focus on Post-Booking Experience?</h2>
          <div className="text-gray-700">
            <p>Focusing on the post-booking experience is essential because it directly impacts user retention. Research indicates that users often prefer to book flights on desktop computers for a more detailed view and ease of use, but rely heavily on mobile apps for accessing boarding passes and other travel-related information during their journey <a href="https://example.com" className="text-blue-500 underline">【source 1】</a>. Ensuring a seamless experience in these moments is crucial for retaining users and building trust in the app.</p>
          </div>
        </section>
        <div className="text-gray-700">
          <p>Having gathered the necessary insights, I was ready to create the mockups. The context for these mockups is after the user has purchased their ticket and is preparing for their journey on the day of onboarding. Based on my findings, I focused on the following user pathways:</p>
          <ul className="list-disc list-inside ml-4">
            <li>
              <b>Users Not Logged In:</b> Ensuring that new or infrequent users could easily access their boarding passes without navigating through multiple screens.
            </li>
            <li>
              <b>Users Already Logged In:</b> Prioritizing efficiency so that frequent travelers could quickly access their boarding passes with minimal effort.
            </li>
          </ul>
          <p>I also incorporated a complex user scenario into the design, such as a father traveling with multiple family members. Recognizing the fast-paced, high-stress environment of airports, my design prioritized efficiency and quick access to information.   Additionally, I plan to revisit the heuristic evaluation conducted at the beginning of the case study and address some of those concerns in the redesign process.
          </p>
        </div>

      </section>
    </>
  );
};
