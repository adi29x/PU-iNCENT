export default function SectionHeading({
  label,
  title,
  subtitle,
  align = "center",
  light = false,
}) {
  const alignClasses = {
    center: "text-center mx-auto",
    left: "text-left",
  };

  return (
    <div className={`max-w-2xl mb-12 lg:mb-16 ${alignClasses[align]}`}>
      {label && (
        <span
          className={`inline-block text-xs font-semibold uppercase tracking-wider px-3 py-1 rounded-full mb-4 ${
            light
              ? "bg-white/20 text-white"
              : "bg-primary-50 text-primary"
          }`}
        >
          {label}
        </span>
      )}
      <h2
        className={`text-3xl sm:text-4xl lg:text-5xl font-bold font-[var(--font-heading)] leading-tight mb-4 ${
          light ? "text-white" : "text-neutral-900"
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`text-base sm:text-lg leading-relaxed ${
            light ? "text-white/80" : "text-neutral-500"
          }`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
