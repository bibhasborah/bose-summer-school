import { FaArrowRight } from "react-icons/fa";

export default function Home() {
  return (
    <main className="bg-slate-950 text-white">

      {/* ================= HERO ================= */}

      <section
        className="relative flex min-h-screen items-center justify-center bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/SNBose.png')",
        }}
      >
        <div className="absolute inset-0 bg-black/30"></div>

        <div className="relative z-10 max-w-5xl px-6 text-center">

          <p className="mb-4 text-lg uppercase tracking-[0.3em] text-yellow-400">
            Annual Online Summer School
          </p>

          <h1 className="text-6xl font-extrabold md:text-8xl">
            S. N. BOSE
          </h1>

          <h2 className="mt-4 text-4xl font-semibold text-yellow-400 md:text-6xl">
            SUMMER SCHOOL
          </h2>

          <p className="mt-10 text-2xl text-slate-200">
            Frontiers in Physics & Chemistry
          </p>

          <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-slate-300">
            An annual online summer school introducing undergraduate students
            to modern research in Physics and Chemistry through lectures,
            discussions, and interaction with young researchers from leading
            universities around the world.
          </p>

          <div className="mt-12 flex flex-col justify-center gap-6 sm:flex-row">

            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSdsVmAyQ7Yn1hQK4sZlEqdTrRHT0iRJi3LLJ-a8XX5h3kvK1g/viewform"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-xl bg-yellow-400 px-8 py-4 text-lg font-semibold text-black transition hover:scale-105 hover:bg-yellow-300"
            >
              Register Now
            </a>

            <a
              href="#about"
              className="flex items-center justify-center gap-3 rounded-xl border border-white px-8 py-4 text-lg transition hover:bg-white hover:text-black"
            >
              Learn More
              <FaArrowRight />
            </a>

          </div>

          <p className="mt-12 text-slate-300">
            August 2026 • Online • Free Registration
          </p>

        </div>
      </section>

      {/* ================= ABOUT ================= */}

      <section
        id="about"
        className="bg-slate-950 px-8 py-24"
      >
        <div className="mx-auto max-w-5xl">

          <h2 className="mb-8 text-center text-5xl font-bold text-yellow-400">
            About the Summer School
          </h2>

          <p className="text-center text-xl leading-9 text-slate-300">
            The S. N. Bose Summer School is an annual online initiative
            organized by PhD students and young researchers with the goal of
            introducing undergraduate students to the frontiers of modern
            Physics and Chemistry. Through lectures, panel discussions,
            career guidance sessions, and interactive Q&A, participants
            gain exposure to contemporary scientific research and
            opportunities in academia.
          </p>

        </div>
      </section>

      {/* ================= RESEARCH AREAS ================= */}

      <section className="bg-slate-900 px-8 py-24">

        <h2 className="mb-16 text-center text-5xl font-bold text-yellow-400">
          Research Areas
        </h2>

        <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-2">

          <div className="rounded-2xl bg-slate-800 p-10 shadow-lg">

            <h3 className="mb-6 text-3xl font-bold text-yellow-400">
              ⚛ Physics
            </h3>

            <ul className="space-y-3 text-lg text-slate-300">
              <li>Quantum Mechanics</li>
              <li>Condensed Matter Physics</li>
              <li>Astrophysics</li>
              <li>Particle Physics</li>
              <li>Optics & Photonics</li>
            </ul>

          </div>

          <div className="rounded-2xl bg-slate-800 p-10 shadow-lg">

            <h3 className="mb-6 text-3xl font-bold text-yellow-400">
              🧪 Chemistry
            </h3>

            <ul className="space-y-3 text-lg text-slate-300">
              <li>Physical Chemistry</li>
              <li>Organic Chemistry</li>
              <li>Computational Chemistry</li>
              <li>Materials Chemistry</li>
              <li>Spectroscopy</li>
            </ul>

          </div>

        </div>

      </section>

      {/* ================= SCHEDULE ================= */}

      <section className="bg-slate-950 px-8 py-24">

        <h2 className="mb-16 text-center text-5xl font-bold text-yellow-400">
          Tentative Schedule
        </h2>

        <div className="mx-auto max-w-4xl rounded-2xl bg-slate-800 p-10">

          <div className="space-y-8">

            <div>
              <h3 className="text-2xl font-bold text-yellow-400">
                Day 1
              </h3>

              <p className="mt-2 text-slate-300">
                Physics Lectures • Career Talk • Student Interaction
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-yellow-400">
                Day 2
              </h3>

              <p className="mt-2 text-slate-300">
                Chemistry Lectures • Research Showcase • Panel Discussion
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-yellow-400">
                Day 3
              </h3>

              <p className="mt-2 text-slate-300">
                Graduate School Session • Closing Ceremony
              </p>
            </div>

          </div>

        </div>

      </section>

      {/* ================= CONTACT ================= */}

      <section className="bg-slate-900 px-8 py-24">

        <div className="mx-auto max-w-5xl text-center">

          <h2 className="mb-8 text-5xl font-bold text-yellow-400">
            Contact
          </h2>

          <p className="text-xl text-slate-300">
            Email:
          </p>

          <p className="mt-3 text-2xl font-semibold text-yellow-400">
            bosesummerschool@gmail.com
          </p>

        </div>

      </section>

      {/* ================= FOOTER ================= */}

      <footer className="bg-black py-10 text-center text-slate-500">

        © 2026 S. N. Bose Summer School

      </footer>

    </main>
  );
}
