export default function Logo({ light = false }: { light?: boolean }) {
  const text = light ? 'text-paper' : 'text-charcoal';
  return (
    <a href="#top" className="group inline-flex items-center gap-3" aria-label="Leaf and Lintel home">
      <svg viewBox="0 0 64 64" className="h-11 w-11" role="img" aria-label="Leaf and Lintel leaf mark">
        <defs>
          <linearGradient id="leafGold" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#E7D3A0" />
            <stop offset="50%" stopColor="#B7934B" />
            <stop offset="100%" stopColor="#8D6B2F" />
          </linearGradient>
        </defs>
        <path d="M32 4C15 15 10 33 18 47c4 7 10 11 14 13 4-2 10-6 14-13C54 33 49 15 32 4Z" fill="url(#leafGold)" />
        <path d="M32 11v43M32 21 23 34M32 28l10-12M32 37 20 46M32 43l12-9" fill="none" stroke="#F8F1DF" strokeWidth="2.2" strokeLinecap="round" />
      </svg>
      <div className="leading-none">
        <div className={`font-display text-xl tracking-[0.12em] ${text}`}>LEAF &amp; LINTEL</div>
        <div className={`mt-1 text-[10px] tracking-[0.34em] ${light ? 'text-soft-gold' : 'text-stone'}`}>PROPERTIES</div>
      </div>
    </a>
  );
}
