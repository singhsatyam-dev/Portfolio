import Image from "next/image";

export default function CareerForgeCaseStudy() {
  return (
    <main className="max-w-6xl mx-auto px-6 py-24">
      <h1 className="text-6xl font-bold">CareerForge</h1>

      <p className="text-xl text-gray-400 mt-4">
        AI Powered Full Stack Job Portal
      </p>

      <div className="flex gap-4 mt-8">
        <a
          href="https://job-portal-full-stack-jade.vercel.app/"
          target="_blank"
          className="px-6 py-3 bg-white text-black rounded-xl"
        >
          Live Demo
        </a>

        <a
          href="https://github.com/singhsatyam-dev/Job-portal-Full_Stack"
          target="_blank"
          className="px-6 py-3 border border-gray-700 rounded-xl"
        >
          GitHub
        </a>
      </div>

      <div className="relative w-full h-[550px] mt-16 rounded-3xl overflow-hidden">
        <Image
          src="/images/CareerForge/CareerForge-LandingPage.png"
          alt="CareerForge"
          fill
          className="object-cover"
        />
      </div>
    </main>
  );
}
