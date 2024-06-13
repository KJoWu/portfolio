import issueScreen1 from "../../public/filler2.png";
import Image from "next/image";

export const UserStorySection = () => {
  return (
    <>
      <section className="mb-12 mt-[3em] ">
        <h2 className="text-2xl font-semibold mb-4">Identifying the user base and pain points</h2>

        <h2 className="text-2xl font-semibold mb-4"></h2>
        <div className="text-gray-700 leading-8">
          It was clear that the user flow needed optimization, as evidenced by my friend's struggles and the initial heuristic analysis. To confirm this wasn't an isolated incident and to eliminate potential bias, I conducted a comprehensive review of App Store and Play Store feedback and examined discussions on official Reddit and Facebook forums.
        </div>
        <div>
          <Image src={issueScreen1} alt={"issue 1"} quality={95} />
        </div>

        <div className="leading-8">
          The feedback above corroborated the heuristic evaluation findings, indicating that these issues are not isolated but pervasive. Users frequently reported difficulties accessing the app, questioning its purpose as it often redirected them to the website. The login process was cumbersome, and retrieving information, such as QR codes, was inefficient, requiring reliance on email rather than the app itself. These challenges significantly detract from the app's usability, highlighting critical flaws in its user experience design and overall functionality.
        </div>
      </section>
    </>
  )
}
