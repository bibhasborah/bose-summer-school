import Image from "next/image";
import { FaArrowRight, FaInstagram } from "react-icons/fa";

type PersonDetailsProps = {
  affiliation: string;
  field: string;
  role?: string;
  accent: "gold" | "blue" | "emerald";
};

const detailStyles = {
  gold: {
    affiliation: "text-amber-700",
    divider: "border-yellow-400/40",
    role: "bg-yellow-400/10 text-amber-800 ring-yellow-300/20",
  },
  blue: {
    affiliation: "text-sky-700",
    divider: "border-sky-400/40",
    role: "bg-sky-400/10 text-sky-800 ring-sky-300/20",
  },
  emerald: {
    affiliation: "text-emerald-700",
    divider: "border-emerald-400/40",
    role: "bg-emerald-400/10 text-emerald-800 ring-emerald-300/20",
  },
};

function PersonDetails({ affiliation, field, role, accent }: PersonDetailsProps) {
  const styles = detailStyles[accent];

  return (
    <div className={`mt-5 space-y-3 border-t pt-5 ${styles.divider}`}>
      <p className={`text-sm font-semibold leading-6 ${styles.affiliation}`}>
        {affiliation}
      </p>

      <p className="text-base font-medium leading-7 text-slate-800">
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
    name: "Katyayani Mishra",
    affiliation: "Graduate Student, Ruhr University, Germany",
    field: "Halogen and chalcogen bonding based organocatalysis",
    image: "/speakers/Katyayani.png",
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
    field: "Polymer recycling and upcycling",
    image: "/speakers/Krishna.jpeg",
  },
  {
    name: "Bhawna Choudhary",
    affiliation: "Graduate Student, University of Groningen, Netherlands",
    field: "Degradation in Organic Redox Flow Batteries",
    image: "/speakers/Bhawna.jpg",
  },
  {
    name: "Quoc Tuan",
    affiliation: "Graduate Student, University of Southern California",
    field: "Quantum Materials and Quantum Sensing",
    image: "/speakers/Tuan.png",
  },
];
const physicsSpeakers = [
  {
    name: "Harshvardhan Singh Deora",
    affiliation: "Graduate Student, Cornell University",
    field: "Machine Learning Interatomic Potentials for Molecular Dynamics Simulations",
    image: "/speakers/Harshwardhan.jpeg",
  },
  {
    name: "Hriday Sabharwal",
    affiliation: "Graduate Student, University of Southern California",
    field: "Quantum Computing",
    image: "/speakers/Hriday.jpeg",
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
];
const technicalTeam = [
  {
    name: "Bibhas Borah",
    affiliation: "Graduate Student, University of Southern California",
    field: "Website and technical coordination",
    role: "Technical Team",
    image: "/hosts/bibhas.jpg",
  },
  {
    name: "Brenjit Hazarika",
    affiliation: "Graduate Student, IIT Tirupati (Founder of Curiouz)",
    field: "Technical support",
    role: "Technical Team",
    image: "/speakers/Brenjit.jpeg",
  },
];
export default function Home() {
  return (
    <main className="overflow-x-hidden bg-white text-slate-950">

      {/* ================= HERO ================= */}

      <section
        className="relative flex min-h-screen items-center justify-center bg-cover bg-center bg-no-repeat px-4 py-20 text-white sm:px-6"
        style={{
          backgroundImage: "url('/SNBose.png')",
        }}
      >
        <div className="absolute inset-0 bg-black/40"></div>

        <div className="relative z-10 mx-auto max-w-5xl text-center">

          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.22em] text-yellow-300 sm:text-lg sm:tracking-[0.3em]">
            Annual Online Summer School
          </p>

          <h1 className="text-5xl font-extrabold leading-tight sm:text-6xl md:text-8xl">
            S. N. BOSE
          </h1>

          <h2 className="mt-3 text-3xl font-semibold leading-tight text-yellow-300 sm:text-4xl md:text-6xl">
            SUMMER SCHOOL
          </h2>

          <p className="mt-8 text-xl text-slate-100 sm:mt-10 sm:text-2xl">
            Frontiers in Physics, Chemistry and Materials Science.
          </p>

          <p className="mx-auto mt-6 max-w-3xl text-base leading-7 text-slate-200 sm:mt-8 sm:text-lg sm:leading-8">
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

          <p className="mt-10 text-sm text-slate-200 sm:mt-12 sm:text-base">
            28–30 August 2026 • Online • Free Registration
          </p>

        </div>
      </section>
{/* ================= HOST ================= */}

<section className="bg-slate-50 px-4 py-16 sm:px-8 sm:py-24">

  <div className="mx-auto max-w-5xl">

    <h2 className="mb-4 text-center text-4xl font-bold text-amber-700 sm:text-5xl">
      Host
    </h2>

    <p className="mb-10 text-center text-base leading-7 text-slate-600 sm:mb-16 sm:text-xl">
      Guiding the sessions and facilitating discussions throughout the summer school.
    </p>

    <div className="flex flex-col items-center justify-center gap-8 md:flex-row md:gap-12">

      {hosts.map((host) => (
        <div
          key={host.name}
          className="w-full max-w-sm overflow-hidden rounded-2xl bg-white shadow-lg transition duration-300 hover:-translate-y-2 hover:shadow-2xl"
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

            <h3 className="text-2xl font-bold text-slate-950 sm:text-3xl">
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
        className="bg-white px-4 py-16 sm:px-8 sm:py-24"
      >
        <div className="mx-auto max-w-5xl">

          <h2 className="mb-6 text-center text-4xl font-bold leading-tight text-amber-700 sm:mb-8 sm:text-5xl">
            About the Summer School
          </h2>

          <p className="text-center text-base leading-8 text-slate-600 sm:text-xl sm:leading-9">
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

      <section className="bg-slate-100 px-4 py-16 sm:px-8 sm:py-24">

        <h2 className="mb-10 text-center text-4xl font-bold text-amber-700 sm:mb-16 sm:text-5xl">
          Research Areas
        </h2>

        <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-3">

          <div className="rounded-2xl bg-white p-6 shadow-lg sm:p-10">

            <h3 className="mb-5 text-2xl font-bold text-amber-700 sm:mb-6 sm:text-3xl">
              ⚛ Physics
            </h3>

            <ul className="space-y-3 text-base text-slate-600 sm:text-lg">
              <li>Quantum Mechanics</li>
              <li>Theoretical Physics</li>
              <li>Astrophysics</li>
              <li>Machine Learning</li>
            </ul>

          </div>

          <div className="rounded-2xl bg-white p-6 shadow-lg sm:p-10">

            <h3 className="mb-5 text-2xl font-bold text-amber-700 sm:mb-6 sm:text-3xl">
              🧪 Chemistry
            </h3>

            <ul className="space-y-3 text-base text-slate-600 sm:text-lg">
              <li>Physical Spectroscopy</li>
              <li>Organic Chemistry</li>
              <li>Biophysical Chemistry</li>
              <li>Medicinal Chemistry</li>
            </ul>

          </div>

          <div className="rounded-2xl bg-white p-6 shadow-lg sm:p-10">

            <h3 className="mb-5 text-2xl font-bold text-emerald-700 sm:mb-6 sm:text-3xl">
              Materials Science
            </h3>

            <ul className="space-y-3 text-base text-slate-600 sm:text-lg">
              <li>Biomaterials</li>
              <li>Organic materials</li>
              <li>Quantum Materials</li>
              <li>Polymer Materials</li>
            </ul>

          </div>

        </div>


      </section>
{/* ================= CHEMISTRY PANEL ================= */}

<section className="bg-slate-100 px-8 py-24">

  <div className="mx-auto max-w-7xl">

    <h2 className="mb-4 text-center text-5xl font-bold text-amber-700">
      Chemistry Panel
    </h2>

    <p className="mb-16 text-center text-xl text-slate-600">
      Young researchers sharing their work and academic experiences.
    </p>

    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">

      {chemistrySpeakers.map((speaker) => (
        <div
          key={speaker.name}
          className="overflow-hidden rounded-2xl bg-white shadow-lg transition duration-300 hover:-translate-y-2 hover:shadow-2xl"
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

            <h3 className="text-2xl font-bold text-slate-950">
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

<section className="bg-slate-100 px-8 py-24">

  <div className="mx-auto max-w-7xl">

    <h2 className="mb-4 text-center text-5xl font-bold text-blue-700">
      Physics Panel
    </h2>

    <p className="mb-16 text-center text-xl text-slate-600">
      Young researchers sharing their work and academic experiences.
    </p>

    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">

      {physicsSpeakers.map((speaker) => (
        <div
          key={speaker.name}
          className="overflow-hidden rounded-2xl bg-white shadow-lg transition duration-300 hover:-translate-y-2 hover:shadow-2xl"
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

            <h3 className="text-2xl font-bold text-slate-950">
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

<section className="bg-slate-100 px-8 py-24">

  <div className="mx-auto max-w-7xl">

    <h2 className="mb-4 text-center text-5xl font-bold text-emerald-700">
      Materials Science Panel
    </h2>

    <p className="mb-16 text-center text-xl text-slate-600">
      Young researchers sharing their work and academic experiences.
    </p>

    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">

      {materialsSpeakers.map((speaker) => (
        <div
          key={speaker.name}
          className="overflow-hidden rounded-2xl bg-white shadow-lg transition duration-300 hover:-translate-y-2 hover:shadow-2xl"
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

            <h3 className="text-2xl font-bold text-slate-950">
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


      <section className="bg-slate-50 px-8 py-24">

        <h2 className="mb-16 text-center text-5xl font-bold text-amber-700">
          Tentative Schedule
        </h2>

        <div className="mx-auto max-w-4xl rounded-2xl bg-white p-10 shadow-lg">

          <div className="space-y-8">

            <div>
              <h3 className="text-2xl font-bold text-amber-700">
                Aug 28, 2026
              </h3>

              <p className="mt-2 text-slate-600">
                TBA
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-amber-700">
                Aug 29, 2026
              </h3>

              <p className="mt-2 text-slate-600">
                TBA
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-amber-700">
                Aug 30, 2026
              </h3>

              <p className="mt-2 text-slate-600">
                TBA
              </p>
            </div>

          </div>

        </div>

      </section>

      {/* ================= TECHNICAL TEAM ================= */}

      <section className="bg-slate-100 px-4 py-16 sm:px-8 sm:py-24">

        <div className="mx-auto max-w-5xl">

          <h2 className="mb-4 text-center text-4xl font-bold text-blue-700 sm:text-5xl">
            Technical Team
          </h2>

          <p className="mb-10 text-center text-base leading-7 text-slate-600 sm:mb-16 sm:text-xl">
            Supporting the website, technical setup, and online coordination.
          </p>

          <div className="flex flex-col items-center justify-center gap-8 md:flex-row md:gap-12">

            {technicalTeam.map((member) => (
              <div
                key={member.name}
                className="w-full max-w-sm overflow-hidden rounded-2xl bg-white shadow-lg transition duration-300 hover:-translate-y-2 hover:shadow-2xl"
              >
                <Image
                  src={member.image}
                  alt={member.name}
                  width={384}
                  height={384}
                  sizes="(min-width: 640px) 384px, 100vw"
                  className="h-80 w-full object-cover sm:h-96"
                />

                <div className="p-5 text-center sm:p-6">

                  <h3 className="text-2xl font-bold text-slate-950 sm:text-3xl">
                    {member.name}
                  </h3>

                  <PersonDetails
                    affiliation={member.affiliation}
                    field={member.field}
                    role={member.role}
                    accent="blue"
                  />

                </div>

              </div>
            ))}

          </div>

        </div>

      </section>

      {/* ================= INSTAGRAM ================= */}

      <section className="bg-white px-4 py-10 sm:px-8 sm:py-14">

        <div className="mx-auto grid max-w-3xl items-center gap-6 rounded-2xl bg-slate-50 p-5 shadow-lg sm:p-7 md:grid-cols-2 md:gap-8">

          <div className="text-center md:text-left">

            <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-pink-600">
              Stay Connected
            </p>

            <h2 className="text-3xl font-bold leading-tight text-slate-950">
              Follow us on Instagram
            </h2>

            <p className="mt-3 text-sm leading-6 text-slate-600">
              Get the latest summer school announcements, speaker updates, and
              event highlights from @bose_summerschool.
            </p>

            <a
              href="https://www.instagram.com/bose_summerschool/"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-flex items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-pink-500 via-rose-500 to-orange-400 px-5 py-3 text-sm font-semibold text-white transition hover:scale-105 hover:shadow-lg hover:shadow-pink-500/20"
            >
              <FaInstagram className="text-xl" aria-hidden="true" />
              @bose_summerschool
            </a>

          </div>

          <a
            href="https://www.instagram.com/bose_summerschool/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Visit the S. N. Bose Summer School Instagram page"
            className="mx-auto block w-full max-w-52 overflow-hidden rounded-xl bg-white shadow-lg transition hover:scale-[1.02]"
          >
            <Image
              src="/Insta_Page.jpg"
              alt="Instagram QR code for @bose_summerschool"
              width={681}
              height={689}
              sizes="208px"
              className="h-auto w-full"
            />
          </a>

        </div>

      </section>

      {/* ================= CONTACT ================= */}

      <section className="bg-slate-100 px-8 py-24">

        <div className="mx-auto max-w-5xl text-center">

          <h2 className="mb-8 text-5xl font-bold text-amber-700">
            Contact
          </h2>

          <p className="text-xl text-slate-600">
            Email:
          </p>

          <p className="mt-3 text-2xl font-semibold text-amber-700">
            bosesummerschool@gmail.com
          </p>

        </div>

      </section>

      {/* ================= FOOTER ================= */}

      <footer className="bg-slate-900 py-10 text-center text-slate-300">

        © 2026 S. N. Bose Summer School

      </footer>

    </main>
  );
}
