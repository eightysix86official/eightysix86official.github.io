export default function BrandFrame({
  children,
  tone = "cream",
}: {
  children: React.ReactNode;
  tone?: "cream" | "navy";
}) {
  const bg =
    tone === "cream"
      ? "bg-[var(--cream)] text-[var(--navy)]"
      : "bg-[var(--navy)] text-[var(--cream)]";

  return <section className={`relative overflow-hidden ${bg}`}>{children}</section>;
}
