import { ReactNode } from "react";
import Link from "next/link";

export default function DashboardLayout({ children }: { children: ReactNode }) {
  return (
    <main className="h-screen bg-white">
      <div className="flex size-full">
        <Sidebar />
        <section className="bg-white w-10/12">
          <Header />
          {/* DASHBOARD CONTENT INSIDE THIS section */}
          <section className="text-black p-12">{children}</section>
        </section>
      </div>
    </main>
  );
}

function Sidebar() {
  return (
    <aside className="group w-2/12 bg-pink-600 h-full px-8 py-14 flex flex-col gap-2">
      {[
        "Aaashu",
        "Das",
        "Surya",
        "Jishnu",
        "Danush",
        "Vijay",
        "Tamanna",
        "Smandha",
        "Anushka",
      ].map((name, i) => (
        <Link
          key={i}
          href={`/dashboard/users/${name}`}
          className="p-3 hover:bg-white/20 hover:translate-x-10 transition-all duration-700"
        >
          Visit {name}
        </Link>
      ))}
    </aside>
  );
}

function Header() {
  return (
    <nav className="w-full bg-amber-500 p-4 text-2xl font-semibold">
      {`Assshu's website`}
    </nav>
  );
}
