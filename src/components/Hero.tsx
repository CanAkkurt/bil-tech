import { Button } from "./ui/button";
import { buttonVariants } from "./ui/button";

export const Hero = () => {
  return (
    <section className="container grid lg:grid-cols-2 place-items-center py-20 md:py-32 gap-10">
      <div className="text-center lg:text-start space-y-6">
        <main className="text-5xl md:text-6xl font-bold">
          <h1 className="inline">
            <span className="inline bg-gradient-to-r from-[#DC2626] to-[#991B1B] text-transparent bg-clip-text">
              Mazoutketel & Radiator
            </span>{" "}
            Experts
          </h1>{" "}
          <h2 className="inline">
            <span className="inline bg-gradient-to-r from-[#7C2D12] to-[#431407] text-transparent bg-clip-text">
              Uw Betrouwbare Partner
            </span>
          </h2>
        </main>

        <p className="text-xl text-muted-foreground md:w-10/12 mx-auto lg:mx-0">
          Professionele installatie, onderhoud en reparatie van olieketel, verwarmingssystemen en radiatoren. 
          Met meer dan 10 jaar ervaring zorgen wij ervoor dat uw huis altijd warm en comfortabel blijft. 
          24/7 spoedreparatie beschikbaar!
        </p>

        <div className="flex flex-col gap-4 md:flex-row md:gap-3">
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2">
              <span className="text-2xl">✓</span>
              <span className="font-semibold">Gecertificeerde Technici</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-2xl">✓</span>
              <span className="font-semibold">24/7 Beschikbaar</span>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2">
              <span className="text-2xl">✓</span>
              <span className="font-semibold">Snelle Service</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-2xl">✓</span>
              <span className="font-semibold">Garantie op Werk</span>
            </div>
          </div>
        </div>

        <div className="space-y-4 md:space-y-0 md:space-x-4 pt-4">
          <Button className="w-full md:w-1/3 text-lg py-6">
            Bel Nu: 06-XXX-XXXX
          </Button>

          <a
            rel="noreferrer noopener"
            href="#contact"
            className={`w-full md:w-1/3 text-lg py-6 ${buttonVariants({
              variant: "outline",
            })}`}
          >
            Gratis Offerte
          </a>
        </div>
      </div>

      {/* Heating Images Section */}
      <div className="z-10 grid grid-cols-2 gap-4 w-full">
        {/* Main heating image */}
        <div className="col-span-2">
          <img
            src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=400&fit=crop"
            alt="Professionele mazoutketel installatie"
            className="w-full h-64 object-cover rounded-lg shadow-lg border-2 border-primary/20"
          />
        </div>

        {/* Heating technician */}
        <div>
          <img
            src="https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=300&h=300&fit=crop"
            alt="Gecertificeerde verwarmingstechnicus"
            className="w-full h-40 object-cover rounded-lg shadow-lg border-2 border-primary/20"
          />
          <p className="mt-2 font-semibold text-sm">Expert Installatie</p>
        </div>

        {/* Radiator/heating system */}
        <div>
          <img
            src="https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=300&h=300&fit=crop"
            alt="Modern verwarmingssysteem"
            className="w-full h-40 object-cover rounded-lg shadow-lg border-2 border-primary/20"
          />
          <p className="mt-2 font-semibold text-sm">Modern Systeem</p>
        </div>
      </div>

      {/* Shadow effect */}
      <div className="shadow"></div>
    </section>
  );
};
