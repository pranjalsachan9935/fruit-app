import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";


export default function FAQPage() {
  return (
    <section className="max-w-full mx-auto px-6 py-16 bg-gradient-to-tr from-white via-pink-50 to-pink-100 rounded-2xl shadow-sm">

      <h2 className="text-4xl font-bold text-center text-pink-600 mb-10">
        Frequently Asked Questions
      </h2>
      <Accordion type="single" collapsible className="w-full space-y-2">
        <AccordionItem value="item-1">
          <AccordionTrigger className="text-left text-base font-medium text-gray-700 hover:no-underline">
            What makes Fruitz drinks unique?
          </AccordionTrigger>
          <AccordionContent className="text-md text-gray-600">
            Fruitz drinks are made with 100% real fruit juice, no added preservatives, and are cold-pressed for maximum nutrition and flavor.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-2">
          <AccordionTrigger className="text-left text-base font-medium text-gray-700 hover:no-underline">
            Are your juices suitable for vegans?
          </AccordionTrigger>
          <AccordionContent className="text-md text-gray-600">
            Absolutely! All Fruitz drinks are vegan, dairy-free, and gluten-free.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-3">
          <AccordionTrigger className="text-left text-base font-medium text-gray-700 hover:no-underline">
            How should I store the juices?
          </AccordionTrigger>
          <AccordionContent className="text-md text-gray-600">
            Keep them refrigerated and consume within 3 days of opening for the best taste and quality.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-4">
          <AccordionTrigger className="text-left text-base font-medium text-gray-700 hover:no-underline">
            Do you deliver across India?
          </AccordionTrigger>
          <AccordionContent className="text-md text-gray-600">
            Yes, we currently deliver to all major cities across India. More locations coming soon!
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </section>
  );
}
