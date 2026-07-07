import Image from "next/image";
import { FaArrowRight } from "react-icons/fa";

type PersonDetailsProps = {
  affiliation: string;
  field: string;
  role?: string;
  accent: "gold" | "blue" | "emerald";
};

const detailStyles = {
  gold: {
    affiliation: "text-yellow-300",
    divider: "border-yellow-400/40",
    role: "bg-yellow-400/10 text-yellow-200 ring-yellow-300/20",
  },
  blue: {
    affiliation: "text-sky-300",
    divider: "border-sky-400/40",
    role: "bg-sky-400/10 text-sky-200 ring-sky-300/20",
  },
  emerald: {
    affiliation: "text-emerald-300",
    divider: "border-emerald-400/40",
    role: "bg-emerald-400/10 text-emerald-200 ring-emerald-300/20",
  },
};

function PersonDetails({ affiliation, field, role, accent }: PersonDetailsProps) {
  const styles = detailStyles[accent];

  return (
    <div className={`mt-5 space-y-3 border-t pt-5 ${styles.divider}`}>
      <p className={`text-sm font-semibold leading-6 ${styles.affiliation}`}>
        {affiliation}
      </p>

      <p className="text-base font-medium leading-7 text-slate-100">
        {field}
      </p>

      {role ? (
        <p className={`inline-flex rounded-full px-3 py-1 text-sm font-semibold ring-1 ${styles.role}`}>
          {role}
        </p>
      ) : null}
    </div>
  );
}

const hosts = [
  {
    name: "Bibhas Borah",
    affiliation: "Graduate Student, University of Southern California",
    field: "Theoretical Chemistry",
    role: "Host",
    image: "/hosts/bibhas.jpg",
  },
  {
    name: "Sumit Sahu",
    affiliation: "PhD Candidate, University of Southern California",
    field: "Molecular Spectroscopy and Electrochemistry",
    role: "Co-Host",
    image: "/speakers/Sumit.jpeg",
  }
];
const chemistrySpeakers = [
  {
    name: "Shashank Sahu",
    affiliation: "Graduate Student, University of Texas, Austin",
    field: "Electrostatic interaction at protein-protein Interfaces",
    image: "/speakers/Shashank.jpeg",
  },
  {
    name: "Sarang S",
    affiliation: "Graduate Student, University of Southern California",
    field: "Studying carbocation in Helium nanodroplets",
    image: "/speakers/Sarang.jpg",
  },
  {
    name: "Katyayini Mishra",
    affiliation: "Graduate Student, Ruhr University, Germany",
    field: "Halogen and chalcogen bonding based organocatalysis",
    image: "/speakers/Katyayini.png",
  },
  {
    name: "Aditya Gupta",
    affiliation: "Graduate Student, Rice University, USA",
    field: "Nitric oxide in tumor modulation: From discovery to therapy",
    image: "/speakers/Aditya.png",
  },
];
const materialsSpeakers = [
  {
    name: "Debashrita Kundu",
    affiliation: "Graduate Student, University of Illinois Urbana Champaign",
    field: "Biomaterials: Biological synapses",
    image: "/speakers/Debashrita.png",
  },
  {
    name: "Krishna Agrawal",
    affiliation: "Graduate Student, Indian Institute of Science",
    field: "...",
    image: "/speakers/Krishna.jpg",
  },
  {
    name: "TBD",
    affiliation: "Graduate Student",
    field: "...",
    image: "/speakers/TBD1.png",
  },
  {
    name: "TBD",
    affiliation: "Graduate Student",
    field: "...",
    image: "/speakers/TBD.png",
  },
];
const physicsSpeakers = [
  {
    name: "Quoc Tuan",
    affiliation: "Graduate Student, University of Southern California",
    field: "Quantum sensing and spin dynamics",
    image: "/speakers/Tuan.png",
  },
  {
    name: "Sagar Gowala",
    affiliation: "Graduate Student, IIT Bombay",
    field: "Gravitational Wave Astronomy",
    image: "/speakers/Sagar.png",
  },
  {
    name: "Brenjit Hazarika",
    affiliation: "Graduate Student, IIT Tirupati (Founder of Curiouz)",
    field: "Observational Astrophysics and Data Analysis",
    image: "/speakers/Brenjit.jpeg",
  },
  {
    name: "TBD",
    affiliation: "Graduate Student",
    field: "Condensed Matter Physics",
    image: "/speakers/physics4.png",
  },
];
export default function Home() {
  return (
    <main className="overflow-x-hidden bg-slate-950 text-white">

      {/* ================= HERO ================= */}

      <section
        className="relative flex min-h-screen items-center justify-center bg-cover bg-center bg-no-repeat px-4 py-20 sm:px-6"
        style={{
          backgroundImage: "url('/SNBose.png')",
        }}
      >
        <div className="absolute inset-0 bg-black/30"></div>

        <div className="relative z-10 mx-auto max-w-5xl text-center">

          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.22em] text-yellow-400 sm:text-lg sm:tracking-[0.3em]">
            Annual Online Summer School
          </p>

          <h1 className="text-5xl font-extrabold leading-tight sm:text-6xl md:text-8xl">
            S. N. BOSE
          </h1>

          <h2 className="mt-3 text-3xl font-semibold leading-tight text-yellow-400 sm:text-4xl md:text-6xl">
            SUMMER SCHOOL
          </h2>

          <p className="mt-8 text-xl text-slate-200 sm:mt-10 sm:text-2xl">
            Frontiers in Physics, Chemistry and Materials Science.
          </p>

          <p className="mx-auto mt-6 max-w-3xl text-base leading-7 text-slate-300 sm:mt-8 sm:text-lg sm:leading-8">
            An annual online summer school introducing undergraduate students
            to modern research in Physics, Chemistry and Materials Science through lectures,
            discussions, and interaction with young researchers from leading
            universities around the world.
          </p>

          <div className="mt-10 flex flex-col justify-center gap-4 sm:mt-12 sm:flex-row sm:gap-6">

            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSdsVmAyQ7Yn1hQK4sZlEqdTrRHT0iRJi3LLJ-a8XX5h3kvK1g/viewform"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full rounded-xl bg-yellow-400 px-8 py-4 text-center text-base font-semibold text-black transition hover:scale-105 hover:bg-yellow-300 sm:w-auto sm:text-lg"
            >
              Register Now
            </a>

            <a
              href="#about"
              className="flex w-full items-center justify-center gap-3 rounded-xl border border-white px-8 py-4 text-base transition hover:bg-white hover:text-black sm:w-auto sm:text-lg"
            >
              Learn More
              <FaArrowRight />
            </a>

          </div>

          <p className="mt-10 text-sm text-slate-300 sm:mt-12 sm:text-base">
            August 2026 • Online • Free Registration
          </p>

        </div>
      </section>
{/* ================= HOST ================= */}

<section className="bg-slate-950 px-4 py-16 sm:px-8 sm:py-24">

  <div className="mx-auto max-w-5xl">

    <h2 className="mb-4 text-center text-4xl font-bold text-yellow-400 sm:text-5xl">
      Host
    </h2>

    <p className="mb-10 text-center text-base leading-7 text-slate-300 sm:mb-16 sm:text-xl">
      Guiding the sessions and facilitating discussions throughout the summer school.
    </p>

    <div className="flex flex-col items-center justify-center gap-8 md:flex-row md:gap-12">

      {hosts.map((host) => (
        <div
          key={host.name}
          className="w-full max-w-sm overflow-hidden rounded-2xl bg-slate-800 shadow-lg transition duration-300 hover:-translate-y-2 hover:shadow-2xl"
        >
          <Image
            src={host.image}
            alt={host.name}
            width={384}
            height={384}
            sizes="(min-width: 640px) 384px, 100vw"
            className="h-80 w-full object-cover sm:h-96"
          />

          <div className="p-5 text-center sm:p-6">

            <h3 className="text-2xl font-bold text-white sm:text-3xl">
              {host.name}
            </h3>

            <PersonDetails
              affiliation={host.affiliation}
              field={host.field}
              role={host.role}
              accent="gold"
            />

          </div>

        </div>
      ))}

    </div>

  </div>

</section>
      {/* ================= ABOUT ================= */}

      <section
        id="about"
        className="bg-slate-950 px-4 py-16 sm:px-8 sm:py-24"
      >
        <div className="mx-auto max-w-5xl">

          <h2 className="mb-6 text-center text-4xl font-bold leading-tight text-yellow-400 sm:mb-8 sm:text-5xl">
            About the Summer School
          </h2>

          <p className="text-center text-base leading-8 text-slate-300 sm:text-xl sm:leading-9">
            The S. N. Bose Summer School is an annual online initiative
            organized by PhD students and young researchers with the goal of
            introducing undergraduate students to the frontiers of modern
            Physics, Chemistry and Materials Science. Through lectures, panel discussions,
            career guidance sessions, and interactive Q&A, participants
            gain exposure to contemporary scientific research and
            opportunities in academia.
          </p>

        </div>
      </section>

      {/* ================= RESEARCH AREAS ================= */}

      <section className="bg-slate-900 px-4 py-16 sm:px-8 sm:py-24">

        <h2 className="mb-10 text-center text-4xl font-bold text-yellow-400 sm:mb-16 sm:text-5xl">
          Research Areas
        </h2>

        <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-3">

          <div className="rounded-2xl bg-slate-800 p-6 shadow-lg sm:p-10">

            <h3 className="mb-5 text-2xl font-bold text-yellow-400 sm:mb-6 sm:text-3xl">
              ⚛ Physics
            </h3>

            <ul className="space-y-3 text-base text-slate-300 sm:text-lg">
              <li>Quantum Mechanics</li>
              <li>Condensed Matter Physics</li>
              <li>Astrophysics</li>
              <li>Particle Physics</li>
              <li>Optics & Photonics</li>
            </ul>

          </div>

          <div className="rounded-2xl bg-slate-800 p-6 shadow-lg sm:p-10">

            <h3 className="mb-5 text-2xl font-bold text-yellow-400 sm:mb-6 sm:text-3xl">
              🧪 Chemistry
            </h3>

            <ul className="space-y-3 text-base text-slate-300 sm:text-lg">
              <li>Physical Chemistry</li>
              <li>Organic Chemistry</li>
              <li>Computational Chemistry</li>
              <li>Materials Chemistry</li>
              <li>Spectroscopy</li>
            </ul>

          </div>

          <div className="rounded-2xl bg-slate-800 p-6 shadow-lg sm:p-10">

            <h3 className="mb-5 text-2xl font-bold text-emerald-400 sm:mb-6 sm:text-3xl">
              Materials Science
            </h3>

            <ul className="space-y-3 text-base text-slate-300 sm:text-lg">
              <li>Biomaterials</li>
              <li>Nanomaterials</li>
              <li>Energy Materials</li>
              <li>Electronic Materials</li>
              <li>Soft Matter</li>
            </ul>

          </div>

        </div>


      </section>
{/* ================= CHEMISTRY PANEL ================= */}

<section className="bg-slate-900 px-8 py-24">

  <div className="mx-auto max-w-7xl">

    <h2 className="mb-4 text-center text-5xl font-bold text-yellow-400">
      Chemistry Panel
    </h2>

    <p className="mb-16 text-center text-xl text-slate-300">
      Distinguished researchers sharing their work and experiences.
    </p>

    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">

      {chemistrySpeakers.map((speaker) => (
        <div
          key={speaker.name}
          className="overflow-hidden rounded-2xl bg-slate-800 shadow-lg transition duration-300 hover:-translate-y-2 hover:shadow-2xl"
        >

          <Image
            src={speaker.image}
            alt={speaker.name}
            width={320}
            height={320}
            sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
            className="h-80 w-full object-cover"
          />

          <div className="p-6">

            <h3 className="text-2xl font-bold text-white">
              {speaker.name}
            </h3>

            <PersonDetails
              affiliation={speaker.affiliation}
              field={speaker.field}
              accent="gold"
            />

          </div>

        </div>
      ))}

    </div>

  </div>

</section>

{/* ================= PHYSICS PANEL ================= */}

<section className="bg-slate-900 px-8 py-24">

  <div className="mx-auto max-w-7xl">

    <h2 className="mb-4 text-center text-5xl font-bold text-blue-400">
      Physics Panel
    </h2>

    <p className="mb-16 text-center text-xl text-slate-300">
      Distinguished researchers sharing their work and experiences.
    </p>

    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">

      {physicsSpeakers.map((speaker) => (
        <div
          key={speaker.name}
          className="overflow-hidden rounded-2xl bg-slate-800 shadow-lg transition duration-300 hover:-translate-y-2 hover:shadow-2xl"
        >

          <Image
            src={speaker.image}
            alt={speaker.name}
            width={320}
            height={256}
            sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
            className="h-64 w-full object-cover"
          />

          <div className="p-6">

            <h3 className="text-2xl font-bold text-white">
              {speaker.name}
            </h3>

            <PersonDetails
              affiliation={speaker.affiliation}
              field={speaker.field}
              accent="blue"
            />

          </div>

        </div>
      ))}

    </div>

  </div>

</section>

{/* ================= MATERIALS SCIENCE PANEL ================= */}

<section className="bg-slate-900 px-8 py-24">

  <div className="mx-auto max-w-7xl">

    <h2 className="mb-4 text-center text-5xl font-bold text-emerald-400">
      Materials Science Panel
    </h2>

    <p className="mb-16 text-center text-xl text-slate-300">
      Distinguished researchers sharing their work and experiences.
    </p>

    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">

      {materialsSpeakers.map((speaker) => (
        <div
          key={speaker.name}
          className="overflow-hidden rounded-2xl bg-slate-800 shadow-lg transition duration-300 hover:-translate-y-2 hover:shadow-2xl"
        >

          <Image
            src={speaker.image}
            alt={speaker.name}
            width={320}
            height={256}
            sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
            className="h-64 w-full object-cover"
          />

          <div className="p-6">

            <h3 className="text-2xl font-bold text-white">
              {speaker.name}
            </h3>

            <PersonDetails
              affiliation={speaker.affiliation}
              field={speaker.field}
              accent="emerald"
            />

          </div>

        </div>
      ))}

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
                TBD
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-yellow-400">
                Day 2
              </h3>

              <p className="mt-2 text-slate-300">
                TBD
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-yellow-400">
                Day 3
              </h3>

              <p className="mt-2 text-slate-300">
                TBD
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
