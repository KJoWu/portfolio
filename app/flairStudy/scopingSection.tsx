import { EllipsisHorizontalIcon } from '@heroicons/react/24/solid';
import Image from "next/image";
import profile1 from "../../public/profile_1.jpg";
import profile2 from "../../public/profile_2.jpg";
import profile3 from "../../public/profile_3.jpg";
import profile4 from "../../public/profile_4.jpg";
import profile5 from "../../public/profile_5.jpg";



const UserStories = () => {
  return (
    <div className="font-light text-sm">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        <div className="bg-white shadow-md rounded-lg p-6 flex space-x-6">
          <div>
            <Image src={profile3} alt="Image 3" quality={95} className="w-full h-48 object-cover mb-4 rounded-lg shadow-lg" />
            <div>
              <h2 className="text-xl font-semibold mb-2">Sarah Johnson</h2>
              <p className="text-gray-600 mb-2"><strong>Age:</strong> 32</p>
              <p className="text-gray-600 mb-2"><strong>Occupation:</strong> International Business</p>
              <p className="text-gray-600 mb-2"><strong>Travel Frequency:</strong> Twice a month</p>
              <p className="text-gray-600 mb-4"><strong>Tech Savviness:</strong> High</p>
            </div>

            <p className="mb-4">Sarah frequently travels for work and relies on airline apps. She values efficiency and clarity,  <span className="bg-[#b2ff94]">likes receiving notifications, and prefers having her information, including boarding times, readily available </span> without navigating through multiple buttons.
            </p>
            <blockquote className="italic text-gray-700">"I need to access my boarding pass in seconds, not minutes. My schedule is too tight for any delays."</blockquote>
          </div>
        </div>

        <div className="bg-white shadow-md rounded-lg p-6 flex space-x-6">
          <div>
            <Image src={profile1} alt="Image 1" quality={95} className="w-full h-48 object-cover mb-4 rounded-lg shadow-lg" />
            <h2 className="text-xl font-semibold mb-2">David Loid</h2>
            <p className="text-gray-600 mb-2"><strong>Age:</strong> 40</p>
            <p className="text-gray-600 mb-2"><strong>Occupation:</strong> Industrial Manager</p>
            <p className="text-gray-600 mb-2"><strong>Travel Frequency:</strong> Twice a year</p>
            <p className="text-gray-600 mb-4"><strong>Tech Savviness:</strong> Low to Medium</p>
            <p className="mb-4">David plans family vacations and <span className="bg-[#b2ff94]">needs a reliable, user-friendly app to  ensure smooth travel for him and his large family </span> . He will use whatever method is easiest and prefers modern solutions.
            </p>
            <blockquote className="italic text-gray-700">"Traveling with kids is stressful enough. I need an app that makes things easier, not harder."</blockquote>
          </div>
        </div>
        <div className="bg-white shadow-md rounded-lg p-6 flex space-x-6">
          <div>
            <Image src={profile4} alt="Image of the Vlog Squad" quality={95} className="w-full h-48 object-cover mb-4 rounded-lg shadow-lg" />
            <h2 className="text-xl font-semibold mb-2">The Vlogging Squad</h2>
            <p className="text-gray-600 mb-2"><strong>Ages:</strong> 20-25</p>
            <p className="text-gray-600 mb-2"><strong>Occupation:</strong> Social Media Influencers</p>
            <p className="text-gray-600 mb-2"><strong>Travel Frequency:</strong> Frequently</p>
            <p className="text-gray-600 mb-4"><strong>Tech Savviness:</strong> High</p>
            <p className="mb-4">
            The squad is a dynamic group of young influencers who frequently travel to create unique content. They are tech-savvy users who <span className="bg-[#b2ff94]">prefer modern, sleek apps </span> and will quickly share their experiences, good or bad, with their large online audience.
            </p>
            <blockquote className="italic text-gray-700">"Our followers expect the best from us, and we expect the same from our travel app. If it fails, our audience will definitely hear about it"</blockquote>
          </div>
        </div>
        <div className="bg-white shadow-md rounded-lg p-6 flex space-x-6">
          <div>
            <Image src={profile5} alt="Image 2" quality={95} className="w-full h-48 object-cover mb-4 rounded-lg shadow-lg" />
            <h2 className="text-xl font-semibold mb-2">Crystal Wang</h2>
            <p className="text-gray-600 mb-2"><strong>Age:</strong> 24</p>
            <p className="text-gray-600 mb-2"><strong>Occupation:</strong> Undergrad Student</p>
            <p className="text-gray-600 mb-2"><strong>Travel Frequency:</strong> Based on travel deals</p>
            <p className="text-gray-600 mb-4"><strong>Tech Savviness:</strong>Medium</p>
            <p className="mb-4">
              Crystal loves exploring new cities and countries whenever she finds a good deal. As a student, she is mindful of her budget and  <span className="bg-[#b2ff94]">looks for affordable travel options.</span>
            </p>
            <blockquote className="italic text-gray-700">"I’m always on the lookout for great travel deals. I need an app that helps me find and book trips affordably, without interfering with my studies."</blockquote>
          </div>
        </div>
        <div className="bg-white shadow-md rounded-lg p-6 flex space-x-6">
          <div>
            <Image src={profile2} alt="Image 2" quality={95} className="w-full h-48 object-cover mb-4 rounded-lg shadow-lg" />
            <h2 className="text-xl font-semibold mb-2">Bob Anderson</h2>
            <p className="text-gray-600 mb-2"><strong>Age:</strong> 50</p>
            <p className="text-gray-600 mb-2"><strong>Occupation:</strong> Retired School Principal</p>
            <p className="text-gray-600 mb-2"><strong>Travel Frequency:</strong> Rarely travels</p>
            <p className="text-gray-600 mb-4"><strong>Tech Savviness:</strong>Low</p>
            <p className="mb-4">Bob rarely travels and prefers traditional methods over apps. Designing the app for Bob might be unproductive, as he is unlikely to use it.
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

        <p>Based on the gathered insights, we will develop detailed case studies of various user personas, such as frequent travelers, tech-savvy influencers, and casual vacation planners, to illustrate how different users interact with the app and highlight areas for improvement.






        </p>
        <UserStories />

        <div className="flex justify-center items-center py-[7em]">
          <EllipsisHorizontalIcon className="h-6 w-6 text-black" />
        </div>
      </section>
    </>
  );
};
