import { EllipsisHorizontalIcon } from '@heroicons/react/24/solid';
import Image from "next/image";
import profile1 from "../../public/profile_1.jpg";
import profile2 from "../../public/profile_2.webp";
import profile3 from "../../public/profile_3.webp";
import profile4 from "../../public/profile_4.webp";
import profile5 from "../../public/profile_5.jpg";
import { StaticImageData } from 'next/image';

interface UserProfileProps {
  image: StaticImageData;
  name: string;
  age: string;
  occupation: string;
  travelFrequency: string;
  techSavviness: string;
  description: string;
  quote: string;
}


const UserProfile = ({ image, name, age, occupation, travelFrequency, techSavviness, description, quote }: UserProfileProps) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-6 flex space-x-6">
      <div className="text-gray-700 leading-6">
        <Image src={image} alt={`Image of ${name}`} quality={95} className="w-full h-48 object-cover mb-4 rounded-lg shadow-lg" />
        <h2 className="text-xl font-semibold mb-2">{name}</h2>
        <p className="text-gray-600 mb-2"><strong>Age:</strong> {age}</p>
        <p className="text-gray-600 mb-2"><strong>Occupation:</strong> {occupation}</p>
        <p className="text-gray-600 mb-2"><strong>Travel Frequency:</strong> {travelFrequency}</p>
        <p className="text-gray-600 mb-4"><strong>Tech Savviness:</strong> {techSavviness}</p>
        <p className="mb-4" dangerouslySetInnerHTML={{ __html: description }}></p>
        <blockquote className="italic text-gray-700 font-semibold">"{quote}"</blockquote>
      </div>
    </div>
  );
};

const UserStories = () => {
  const users = [
    {
      image: profile5,
      name: "Crystal Wang",
      age: "24",
      occupation: "Undergrad Student",
      travelFrequency: "Based on travel deals",
      techSavviness: "Medium",
      description: `Crystal loves exploring new cities and countries whenever she finds a good deal. As a student, she is mindful of her budget and 
                    <span class="bg-[#b2ff94]">looks for affordable travel options.</span>`,
      quote: "I’m always on the lookout for great travel deals. I need an app that helps me find and book trips affordably, without interfering with my studies."
    },

    {
      image: profile1,
      name: "Jacob Loid",
      age: "40",
      occupation: "Industrial Manager",
      travelFrequency: "Twice a year",
      techSavviness: "Low to Medium",
      description: `David plans family vacations and 
                    <span class="bg-[#b2ff94]">needs a reliable, user-friendly app to ensure smooth travel for him and his large family </span>. 
                    He will use whatever method is easiest and prefers modern solutions.`,
      quote: "Traveling with kids is stressful enough. I need an app that makes things easier, not harder."
    },
    {
      image: profile3,
      name: "Sarah Johnson",
      age: "32",
      occupation: "International Business",
      travelFrequency: "Twice a month",
      techSavviness: "High",
      description: `Sarah frequently travels for work and relies on airline apps. She values efficiency and clarity, 
                    <span class="bg-[#b2ff94]">likes receiving notifications, and prefers having her information, including boarding times, readily available </span> 
                    without navigating through multiple buttons.`,
      quote: "I need to access my boarding pass in seconds, not minutes. My schedule is too tight for any delays."
    },

    {
      image: profile4,
      name: "The Vlogging Squad",
      age: "21-25",
      occupation: "Social Media Influencers",
      travelFrequency: "Frequently",
      techSavviness: "High",
      description: `The squad is a dynamic group of young influencers who frequently travel to create content. They are tech-savvy, 
                    <span class="bg-[#b2ff94]">prefer modern, sleek apps </span> 
                    and will share their experiences, good or bad, with their online audience.`,
      quote: "Our followers expect the best from us. If we run into trouble with the app, our audience will definitely hear about it."
    },
    {
      image: profile2,
      name: "Bob Anderson",
      age: "67",
      occupation: "Retired School Principal",
      travelFrequency: "Rarely travels",
      techSavviness: "Low",
      description: `Bob rarely travels and prefers traditional methods over apps. Designing the app for Bob might be unproductive, as he is unlikely to use it.`,
      quote: "I prefer having my tickets and information on paper. Apps just confuse me and add to my anxiety."
    },
  ];

  return (
    <div className="font-base text-sm">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3 ">
        {users.map((user, index) => (
          <UserProfile key={index} {...user} />
        ))}
      </div>
    </div>
  );
};

export const ScopingSection = () => {
  return (
    <section className="mb-3  mt-[-5em]">
      <h2 className="text-2xl font-semibold text-gray-800 mb-4 border-l-8 border-slate-900 pl-3 w-[30em] leading-8">
        Creating the User Personas</h2>
      <p className="mb-6 text-gray-700 leading-8 mt-8">
        Leveraging our gathered insights, I developed a detailed case studies for various user personas, including frequent travelers, tech-savvy influencers, and casual vacation planners. These case studies will illustrate how different users interact with the app and identify key areas for improvement.


      </p>
      <UserStories />
      <div className="flex justify-center items-center pt-[7em]">
        <EllipsisHorizontalIcon className="h-10 w-10 text-black text-3xl" />
      </div>
    </section>
  );
};
