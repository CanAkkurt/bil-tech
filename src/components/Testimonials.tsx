import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface TestimonialProps {
  image: string;
  name: string;
  userName: string;
  comment: string;
}

const testimonials: TestimonialProps[] = [
  {
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=customer1",
    name: "Sarah Johnson",
    userName: "@sarahj_verwarmings",
    comment: "Professionele service en ze hebben mijn verwarmingssysteem perfect werkend gekregen!",
  },
  {
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=customer2",
    name: "Michael Brown",
    userName: "@mbrown_thuis",
    comment:
      "Geweldige technici, zeer deskundig op het gebied van olieketel. Zeer aanbevolen!",
  },

  {
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=customer3",
    name: "Emma Davis",
    userName: "@emmadavis2024",
    comment:
      "Spoedreparatie was snel en efficiënt. Mijn huis is weer warm. Dank u wel!",
  },
  {
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=customer4",
    name: "Robert Wilson",
    userName: "@rwilson_hvac",
    comment:
      "Jaarlijks onderhoud houdt alles soepel werkend. Geweldige service elke keer.",
  },
  {
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=customer5",
    name: "Lisa Anderson",
    userName: "@lisa_anderson",
    comment:
      "Nieuw radiatorensysteem perfect geïnstalleerd. Beste investering voor thuiscomfort.",
  },
  {
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=customer6",
    name: "James Taylor",
    userName: "@jtaylor_energie",
    comment:
      "Professioneel en competitieve prijzen. Ze hebben alles duidelijk uitgelegd.",
  },
];

export const Testimonials = () => {
  return (
    <section
      id="testimonials"
      className="container py-24 sm:py-32"
    >
      <h2 className="text-3xl md:text-4xl font-bold">
        Ontdek Waarom
        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
          {" "}
          Klanten Ons Vertrouwen{" "}
        </span>
        Voor Hun Verwarming
      </h2>

      <p className="text-xl text-muted-foreground pt-4 pb-8">
        Zie wat onze tevreden klanten zeggen over onze professionele verwarmingsdiensten
      </p>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 sm:block columns-2  lg:columns-3 lg:gap-6 mx-auto space-y-4 lg:space-y-6">
        {testimonials.map(
          ({ image, name, userName, comment }: TestimonialProps) => (
            <Card
              key={userName}
              className="max-w-md md:break-inside-avoid overflow-hidden"
            >
              <CardHeader className="flex flex-row items-center gap-4 pb-2">
                <Avatar>
                  <AvatarImage
                    alt=""
                    src={image}
                  />
                  <AvatarFallback>OM</AvatarFallback>
                </Avatar>

                <div className="flex flex-col">
                  <CardTitle className="text-lg">{name}</CardTitle>
                  <CardDescription>{userName}</CardDescription>
                </div>
              </CardHeader>

              <CardContent>{comment}</CardContent>
            </Card>
          )
        )}
      </div>
    </section>
  );
};
