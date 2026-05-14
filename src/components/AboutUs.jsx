import ScrollReveal from './ScrollReveal'

const teamMembers = [
  { name: 'Kashif Shaik', rollNumber: 'SE24UCSE064' },
  { name: 'Kushal Pandey', rollNumber: 'SE24UCSE068' },
  { name: 'Nihal Kopparthi', rollNumber: 'SE24UCSE014' },
  { name: 'Pujitha Tirumani', rollNumber: 'SE24UCSE063' },
  { name: 'Sindhu Vejalla', rollNumber: 'SE24UBIT030' },
  { name: 'R Hershetaa Reddy', rollNumber: 'SE24UCAB011' },
  { name: 'Aarna', rollNumber: 'SE24UCAB014' },
  { name: 'Anvika D', rollNumber: 'SE24UCAB016' },
]

const AboutUs = () => {
  return (
    <div className="min-h-screen bg-[#FAFAF8] pt-32 pb-24 px-8 md:px-16 selection:bg-brand-primary selection:text-[#FAFAF8]">
      <div className="max-w-5xl mx-auto">
        <ScrollReveal>
          <div className="border-l-2 border-brand-primary pl-6 mb-16">
            <span className="font-body font-medium text-xs uppercase tracking-[0.2em] text-brand-primary block mb-2">
              The Team
            </span>
            <h1 className="font-display font-black text-6xl md:text-7xl text-[#0A0A0A] leading-tight mb-6">
              About Us
            </h1>
            <p className="font-body font-light text-lg text-[#0A0A0A]/70 max-w-2xl leading-relaxed">
              We are a dedicated group of students who researched and designed the Gollabhama interactive experience. Our goal is to bring visibility to the rich heritage and contemporary challenges of traditional weavers through design thinking and technology.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-16 mt-24">
          {teamMembers.map((member, idx) => (
            <ScrollReveal key={member.rollNumber} delay={idx * 50}>
              <div className="group border-t border-[#0A0A0A]/10 pt-6 hover:border-brand-primary transition-colors duration-300">
                <span className="block font-body font-medium text-xs text-brand-interaction mb-3 tracking-[0.15em] uppercase">
                  Member 0{idx + 1}
                </span>
                <h3 className="font-display font-bold text-2xl text-[#0A0A0A] mb-1 group-hover:text-brand-primary transition-colors duration-300">
                  {member.name}
                </h3>
                <p className="font-body font-light text-sm text-[#0A0A0A]/50 tracking-wider">
                  {member.rollNumber}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </div>
  )
}

export default AboutUs
