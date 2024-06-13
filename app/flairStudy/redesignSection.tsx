
export const RedesignSection = () => {
  return (
    <>

      <h1 className="text-2xl font-bold text-gray-900">Designing the Travel Day User Pathway</h1>

      <div className="space-y-4">
        <div>
          <h2 className="text-xl font-semibold text-gray-800">Consistency in Theme and Colors</h2>
          <p className="text-gray-700">
            The theme and colors used in the app play a crucial role in creating a cohesive user experience. Currently, there is a lack of consistency, with one app using green and black while the website and this app share different colors. Establishing a consistent color theme across all platforms would enhance brand recognition and user experience. However, since the color theme is not defined for this project, we will adhere to the current design and make necessary adjustments within this framework.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-gray-800">Improving the Menu Options</h2>
          <p className="text-gray-700">
            Upon evaluation, the current menu structure reveals several inefficiencies. Notably, there is a login option for the Flair Air app that lacks a hamburger menu (sandwich menu). This option seems redundant as it does not redirect to the other Flair app or serve a clear purpose. To address this, I recommend the following steps:
          </p>
          <ul className="list-disc list-inside ml-4 text-gray-700 space-y-2">
            <li><b>User Interaction Metrics:</b> Request the software team to implement metrics to track how frequently users interact with this login section. If data shows minimal usage, consider relocating this option to the sidebar menu to declutter the main interface.</li>
            <li><b>Optimizing Navigation:</b> Hamburger menus are more common in web applications. To make this app feel more native, replace the in-flight menu item with a "More" option, consolidating the less frequently used features. This redesign places essential menu items at the bottom of the screen, making them easily accessible to users.</li>
          </ul>
          <div className="space-y-4 text-gray-700">

            <h2 className="text-xl font-semibold text-gray-800">  Enhancing the Booking Page </h2>
            At the top of the page, I included a prominent section encouraging users to log in or create an account for faster access to their information. This prompt reads, "For faster access to your trip details, please log in or create an account." This strategy, known as a call-to-action (CTA), is vital in guiding users towards actions that improve their overall experience.

            Improved Readability:
            To make the content more readable, I applied additional styling, increased the font size, and reduced the length of the descriptions. This adjustment is crucial because research shows that users on mobile devices tend to skip reading small font text, especially when presented in long paragraphs. (Include the specific statistic here, such as "According to a study by [Source], 57% of mobile users are more likely to engage with content that is concise and easy to read.")




            As part of the redesign, I focused on improving the homepage, which directly impacts the onboarding user interface. Key updates include:

            <ul className="list-disc list-inside ml-4 space-y-4">
              <li>
                <div>
                  <h3 className="text-xl font-semibold text-gray-800">Toggle Functionality for Airplane Icon</h3>
                  <p>
                    Previously, the airplane icon did not function as a toggle. I converted it to a toggle button, allowing users to easily select their start and end dates. This enhancement streamlines the date selection process and improves overall usability.
                  </p>
                </div>
              </li>

              <li>
                <div>
                  <h3 className="text-xl font-semibold text-gray-800">Enhanced Travel Information Display</h3>
                  <p>
                    The travel box initially displayed only the number of travelers (e.g., "5 travelers"). I updated this to a more descriptive string that includes the types of travelers (e.g., "2 adults, 3 children"). This change provides clearer information at a glance, reducing the need for users to expand the travel details dropdown.
                  </p>
                </div>
              </li>

              <li>
                <div>
                  <h3 className="text-xl font-semibold text-gray-800">Optional Personalized Message</h3>
                  <p>
                    To create a more engaging and pleasant user experience, I added an optional personalized greeting at the top of the homepage. For example, a "Good morning" message can make the interface feel more welcoming and friendly. This personal touch aims to make flights feel more enjoyable and relaxing for users.
                  </p>
                </div>
              </li>
            </ul>

            <p>
              These improvements are designed to address some of the concerns identified during the initial heuristic evaluation and enhance the overall user experience on the Flair app. By focusing on clarity, usability, and personalization, we aim to create a more intuitive and enjoyable interface for travelers.
            </p>
          </div>

          <ul className="list-disc list-inside ml-4 text-gray-700 space-y-2">

          </ul>
        </div>

      </div>
    </>
  );
};
