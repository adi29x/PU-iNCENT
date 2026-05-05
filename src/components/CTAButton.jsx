import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function CTAButton({
  href = "#",
  children,
  variant = "primary",
  size = "md",
  icon = true,
  external = false,
  className = "",
}) {
  const variants = {
    primary:
      "bg-primary text-white hover:bg-primary-dark hover:shadow-orange",
    secondary:
      "bg-white text-neutral-900 hover:bg-neutral-50 shadow-soft",
    outline:
      "border-2 border-primary text-primary hover:bg-primary hover:text-white",
    ghost:
      "text-primary hover:bg-primary-50",
    "outline-white":
      "border-2 border-white text-white hover:bg-white hover:text-neutral-900",
  };

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-sm",
    lg: "px-8 py-4 text-base",
  };

  const classes = `inline-flex items-center gap-2 font-semibold rounded-xl transition-all duration-300 ${variants[variant]} ${sizes[size]} ${className}`;

  const content = (
    <>
      {children}
      {icon && <ArrowRight className="w-4 h-4" />}
    </>
  );

  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={classes}>
        {content}
      </a>
    );
  }

  return (
    <Link href={href} className={classes}>
      {content}
    </Link>
  );
}
