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
            <p className="text-gray-600 mb-4"><strong>Tech Savviness:</strong> Low</p>
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
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Planning the User Pathways
        </h2>
        <UserStories />

        <section className="bg-white py-8">
    <div className="container mx-auto px-4 lg:px-6">

      <section className="bg-white border border-gray-200 rounded-lg p-4 mb-8">
        <h2 className="text-3xl font-extrabold text-blue-900 mb-4">Why Focus on Post-Booking Experience?</h2>
        <p className="mb-4 text-lg text-black">
          Focusing on the post-booking experience is essential because it directly impacts user retention. Research indicates that users often prefer to book flights on desktop computers for a more detailed view and ease of use, but rely heavily on mobile apps for accessing boarding passes and other travel-related information during their journey. Ensuring a seamless experience in these moments is crucial for retaining users and building trust in the app.
        </p>F
        <p className="mb-4 text-lg text-black">
          Having gathered the necessary insights, I was ready to create the mockups. The context for these mockups is after the user has purchased their ticket and is preparing for their journey on the day of onboarding. Based on my findings, I focused on the following user pathways:
        </p>
        <ul className="list-disc pl-6 space-y-3 text-black">
          {[
            { title: 'Users Not Logged In', description: 'Ensuring that new or infrequent users could easily access their boarding passes without navigating through multiple screens.' },
            { title: 'Users Already Logged In', description: 'Prioritizing efficiency so that frequent travelers could quickly access their boarding passes with minimal effort.' }
          ].map((pathway, index) => (
            <li key={index} className="flex items-start hover:bg-blue-50 p-2 rounded transition">
              <div className="text-blue-500 mr-2">&#8226;</div>
              <div><strong>{pathway.title}:</strong> {pathway.description}</div>
            </li>
          ))}
        </ul>
      </section>

    </div>
  </section>

      </section>
    </>
  );
};
