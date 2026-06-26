export default function Contact() {
  return (
    <section id="contact" className="py-32">
      <div className="max-w-5xl mx-auto px-6">
        <div className="border border-gray-800 rounded-3xl p-10 bg-white/5 backdrop-blur">
          <h2 className="text-4xl font-bold mb-4">Let's Connect</h2>

          <p className="text-gray-400 mb-10 max-w-2xl">
            I'm currently looking for Frontend Development opportunities and
            exciting projects where I can continue learning and contribute as a
            developer.
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <p className="text-gray-500 text-sm">Email</p>

              <p className="mt-2 text-lg">sinhgsatyam1@gmail.com</p>
            </div>

            <div>
              <p className="text-gray-500 text-sm">GitHub</p>

              <p className="mt-2 text-lg">github.com/singhsatyam-dev</p>
            </div>

            <div>
              <p className="text-gray-500 text-sm">LinkedIn</p>

              <p className="mt-2 text-lg">
                https://www.linkedin.com/in/satyam-kumar-singh
              </p>
            </div>

            <div>
              <p className="text-gray-500 text-sm">Location</p>

              <p className="mt-2 text-lg">Uttar Pradesh, India</p>
            </div>
          </div>

          <div className="flex flex-wrap gap-4 mt-10">
            <a href="#" className="px-6 py-3 bg-white text-black rounded-xl">
              Download Resume
            </a>

            <a
              href="https://github.com/singhsatyam-dev"
              className="px-6 py-3 border border-gray-700 rounded-xl"
            >
              View GitHub
            </a>

            <a
              href="https://www.linkedin.com/in/satyam-kumar-singh-25087b291/?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BRJvxfmJzTdmn2RwEWBZDhA%3D%3D"
              className="px-6 py-3 border border-gray-700 rounded-xl"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
