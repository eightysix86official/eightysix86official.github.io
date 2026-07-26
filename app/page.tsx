import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TaleSection from "@/components/TaleSection";
import LocalMenu from "@/components/LocalMenu";
import { tales } from "@/content/tales";

export default function Page() {
  return (
    <main>
      <Navbar />
      <Hero />
      {tales.map((t, i) => (
        <TaleSection key={t.id} {...t} index={i} />
      ))}
      <LocalMenu />
    </main>
  );
}
