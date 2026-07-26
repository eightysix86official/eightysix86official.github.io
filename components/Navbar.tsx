export default function Navbar() {
  const items = [
    "This Is Home",
    "The Story",
    "The Neighbourhood Season",
    "The Local Menu",
    "The Cultural Edition",
    "The Reservations",
    "The Contacts",
  ];

  return (
    <header className="sticky top-0 z-50 w-full bg-[#eec643] text-[#121212]">
      <div className="mx-auto flex w-full items-center justify-center border-b border-[#121212] border-[0.5px] px-4 py-3">
        <nav className="w-full">
          <ul className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-center">
            {items.map((item) => (
              <li
                key={item}
                className="text-[12px] leading-none tracking-[0.18em] uppercase"
              >
                <a href="#" className="block">
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <div className="h-px w-full bg-[#121212]" aria-hidden="true" />
    </header>
  );
}
