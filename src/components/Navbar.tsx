export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50">

      <div className="max-w-7xl mx-auto px-6 py-5 flex justify-between">

        <h2 className="font-bold">
          Satyam
        </h2>

        <div className="flex gap-6 text-sm">

          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>

        </div>

      </div>

    </nav>
  );
}