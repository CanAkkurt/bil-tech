import { Badge } from "./ui/badge";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import image from "../assets/growth.png";
import image3 from "../assets/reflecting.png";
import image4 from "../assets/looking-ahead.png";

interface FeatureProps {
  title: string;
  description: string;
  image: string;
}

const features: FeatureProps[] = [
  {
    title: "Deskundige Installatie",
    description:
      "Professionele installatie van olieketel, radiatoren en complete verwarmingssystemen met precisie en expertise.",
    image: image4,
  },
  {
    title: "24/7 Spoedreparatie",
    description:
      "Wij zijn er wanneer u ons het meest nodig hebt. Snelle reactietijd voor verwarmingsbreuken in de winter.",
    image: image3,
  },
  {
    title: "Gecertificeerde Technici",
    description:
      "Volledig gecertificeerde en getrainde professionals die kwaliteitsarbeid garanderen op elk verwarmingsproject.",
    image: image,
  },
];

const featureList: string[] = [
  "Olieketel",
  "Radiatorsystemen",
  "Installatie",
  "Onderhoud",
  "Spoedreparatie",
  "Gecertificeerd Team",
  "24/7 Ondersteuning",
  "Competitieve Prijzen",
];

export const Features = () => {
  return (
    <section
      id="features"
      className="container py-24 sm:py-32 space-y-8"
    >
      <h2 className="text-3xl lg:text-4xl font-bold md:text-center">
        Waarom Onze
        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
          {" "}
          Verwarmingsdiensten
        </span>
        Kiezen
      </h2>

      <div className="flex flex-wrap md:justify-center gap-4">
        {featureList.map((feature: string) => (
          <div key={feature}>
            <Badge
              variant="secondary"
              className="text-sm"
            >
              {feature}
            </Badge>
          </div>
        ))}
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map(({ title, description, image }: FeatureProps) => (
          <Card key={title}>
            <CardHeader>
              <CardTitle>{title}</CardTitle>
            </CardHeader>

            <CardContent>{description}</CardContent>

            <CardFooter>
              <img
                src={image}
                alt="About feature"
                className="w-[200px] lg:w-[300px] mx-auto"
              />
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  );
};
