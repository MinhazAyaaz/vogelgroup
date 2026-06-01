import Link from "next/link";

const versions = [
  {
    href: "/version1",
    title: "Version 1",
    description: "Scroll-driven scale on stacked sections",
  },
  {
    href: "/version2",
    title: "Version 2",
    description: "Parallax background with section cards",
  },
  {
    href: "/version3",
    title: "Version 3",
    description: "Framer Motion scroll animations",
  },
  {
    href: "/version4",
    title: "Version 4",
    description: "3D depth parallax with translateZ",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center gap-8 p-8 bg-neutral-950 text-white">
      <div className="text-center">
        <h1 className="text-4xl font-bold tracking-tight">Vogel Group</h1>
        <p className="mt-2 text-neutral-400">Choose a prototype to preview</p>
      </div>
      <ul className="grid gap-4 w-full max-w-md">
        {versions.map((version) => (
          <li key={version.href}>
            <Link
              href={version.href}
              className="block rounded-xl border border-neutral-800 bg-neutral-900 px-6 py-5 transition hover:border-neutral-600 hover:bg-neutral-800"
            >
              <span className="text-lg font-semibold">{version.title}</span>
              <p className="mt-1 text-sm text-neutral-400">
                {version.description}
              </p>
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
