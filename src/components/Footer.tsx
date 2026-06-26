export default function Footer() {
  return (
    <footer className="border-t border-gray-800 py-8">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-gray-500">
          © 2026 Satyam Singh. All rights reserved.
        </p>

        <div className="flex gap-6">
          <a href="https://github.com/singhsatyam-dev" className="text-gray-400 hover:text-white transition">
            GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/satyam-kumar-singh-25087b291/?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BRJvxfmJzTdmn2RwEWBZDhA%3D%3D"
            className="text-gray-400 hover:text-white transition"
          >
            LinkedIn
          </a>

          <a href="#" className="text-gray-400 hover:text-white transition">
            Resume
          </a>
        </div>
      </div>
    </footer>
  );
}
