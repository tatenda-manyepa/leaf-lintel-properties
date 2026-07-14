import Image from "next/image";
import Link from "next/link";
export default function Logo({ light = false }: { light?: boolean }) {
  const text = light ? 'text-paper' : 'text-charcoal';
  return (
    <a href="#top" className="group inline-flex items-center gap-4" aria-label="Leaf and Lintel home">
      <Image
  src="/images/leaf-logo.png"
  alt="Leaf & Lintel Properties"
  width={72}
  height={72}
  priority
  className="object-contain"
/>
      <div className="leading-none">
        <div className={`font-display text-xl tracking-[0.12em] ${text}`}>LEAF &amp; LINTEL</div>
        <div className={`mt-1 text-[10px] tracking-[0.34em] ${light ? 'text-soft-gold' : 'text-stone'}`}>PROPERTIES</div>
      </div>
    </a>
  );
}
