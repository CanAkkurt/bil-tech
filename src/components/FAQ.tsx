import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface FAQProps {
  question: string;
  answer: string;
  value: string;
}

const FAQList: FAQProps[] = [
  {
    question: "Hoe vaak moet ik mijn verwarmingssysteem serveren?",
    answer: "We raden jaarlijks onderhoud aan voor het verwarmingsseizoen. Dit houdt uw systeem efficiënt werkend en helpt breuken in de winter te voorkomen.",
    value: "item-1",
  },
  {
    question: "Biedt u spoedreparatiediensten voor verwarming?",
    answer:
      "Ja! We bieden 24/7 spoedreparatiediensten. Als uw verwarmingssysteem in de winter uitvalt, bel ons direct en onze technici reageren snel.",
    value: "item-2",
  },
  {
    question:
      "Wat zijn de voordelen van upgraden naar een moderne olieketel?",
    answer:
      "Moderne olieketel zijn efficiënter, wat uw verwarmingskosten kan verlagen. Ze stoten ook minder vervuiling uit en zijn stiller dan oudere modellen. We helpen u het juiste systeem voor uw huis te vinden.",
    value: "item-3",
  },
  {
    question: "Hoe lang duurt een verwarmingssysteeminstallatie?",
    answer: "De meeste installaties kunnen in 1-3 dagen worden voltooid, afhankelijk van de complexiteit van uw systeem. We geven u een planning bij uw overleg.",
    value: "item-4",
  },
  {
    question:
      "Welke gebieden bediend u?",
    answer:
      "We serveren de gehele regio en omliggende gebieden. Neem contact op voor beschikbaarheid in uw locatie.",
    value: "item-5",
  },
];

export const FAQ = () => {
  return (
    <section
      id="faq"
      className="container py-24 sm:py-32"
    >
      <h2 className="text-3xl md:text-4xl font-bold mb-4">
        Frequently Asked{" "}
        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
          Questions
        </span>
      </h2>

      <Accordion
        type="single"
        collapsible
        className="w-full AccordionRoot"
      >
        {FAQList.map(({ question, answer, value }: FAQProps) => (
          <AccordionItem
            key={value}
            value={value}
          >
            <AccordionTrigger className="text-left">
              {question}
            </AccordionTrigger>

            <AccordionContent>{answer}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>

      <h3 className="font-medium mt-4">
        Still have questions?{" "}
        <a
          rel="noreferrer noopener"
          href="#"
          className="text-primary transition-all border-primary hover:border-b-2"
        >
          Contact us
        </a>
      </h3>
    </section>
  );
};
