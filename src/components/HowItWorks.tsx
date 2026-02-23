import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { MedalIcon, MapIcon, PlaneIcon, GiftIcon } from "../components/Icons";

interface FeatureProps {
  icon: JSX.Element;
  title: string;
  description: string;
}

const features: FeatureProps[] = [
  {
    icon: <MedalIcon />,
    title: "1. Bel Nu",
    description:
      "Neem contact op via telefoon of vraag een gratis offerte online aan. Onze vriendelijke team beantwoordt al uw vragen.",
  },
  {
    icon: <MapIcon />,
    title: "2. Eerste Inspectie",
    description:
      "Een gecertificeerde technicus komt naar uw huis voor een gratis inspectie van uw verwarmingssysteem en olieketel.",
  },
  {
    icon: <PlaneIcon />,
    title: "3. Snelle Installatie",
    description:
      "Wij installeren uw nieuwe systeem snel en efficiënt. De meeste projecten zijn in 1-3 dagen voltooid.",
  },
  {
    icon: <GiftIcon />,
    title: "4. Garantie & Onderhoud",
    description:
      "U ontvangt volledige garantie op onze werkzaamheden. We bieden ook jaarlijks onderhoud voor optimale prestaties.",
  },
];

export const HowItWorks = () => {
  return (
    <section
      id="howItWorks"
      className="container text-center py-24 sm:py-32"
    >
      <h2 className="text-3xl md:text-4xl font-bold ">
        Hoe Het{" "}
        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
          Werkt{" "}
        </span>
        Onze Werkwijze
      </h2>
      <p className="md:w-3/4 mx-auto mt-4 mb-8 text-xl text-muted-foreground">
        Vier eenvoudige stappen om uw verwarmingsprobleem op te lossen. 
        Van eerste contact tot volledige installatie en onderhoud.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {features.map(({ icon, title, description }: FeatureProps) => (
          <Card
            key={title}
            className="bg-muted/50"
          >
            <CardHeader>
              <CardTitle className="grid gap-4 place-items-center">
                {icon}
                {title}
              </CardTitle>
            </CardHeader>
            <CardContent>{description}</CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};
