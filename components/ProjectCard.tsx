import Image from 'next/image';

export default function ProjectCard() {
  return (
    <article className="overflow-hidden rounded-2xl bg-charcoal text-paper shadow-elegant">
      <div className="grid lg:grid-cols-[1.2fr_0.8fr]">
        <div className="relative min-h-[380px]">
          <Image src="/images/current-project.svg" alt="Current HMO refurbishment placeholder" fill className="object-cover" />
          <div className="absolute left-5 top-5 rounded-full bg-paper/95 px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-charcoal">Current development</div>
        </div>
        <div className="flex flex-col justify-center p-8 sm:p-10">
          <p className="eyebrow">Derby · In progress</p>
          <h3 className="mt-4 font-display text-4xl">Professional HMO Transformation</h3>
          <p className="mt-5 leading-7 text-paper/75">
            A family home being thoughtfully transformed into comfortable, modern shared accommodation for working professionals.
          </p>
          <div className="mt-8">
            <div className="mb-2 flex justify-between text-xs uppercase tracking-[0.16em] text-paper/60">
              <span>Project progress</span><span>35%</span>
            </div>
            <div className="h-1.5 overflow-hidden rounded-full bg-white/15"><div className="h-full w-[35%] rounded-full bg-gold" /></div>
          </div>
          <dl className="mt-8 grid grid-cols-2 gap-5 border-t border-white/10 pt-7 text-sm">
            <div><dt className="text-paper/50">Project</dt><dd className="mt-1">HMO conversion</dd></div>
            <div><dt className="text-paper/50">Status</dt><dd className="mt-1">Refurbishment</dd></div>
            <div><dt className="text-paper/50">Designed for</dt><dd className="mt-1">Professionals</dd></div>
            <div><dt className="text-paper/50">Photography</dt><dd className="mt-1">Updates coming soon</dd></div>
          </dl>
        </div>
      </div>
    </article>
  );
}
