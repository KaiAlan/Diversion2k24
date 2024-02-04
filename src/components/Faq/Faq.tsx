import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
// Not to be used 
// We can use array and mapping to lessen the code but i hadn't :)

const Faq = () => {
  return (
    <div className="rounded-custom">
      <Accordion type="single" collapsible>
        <AccordionItem className="bg-custom shadow-custom rounded-md" value="item-1">
          <AccordionTrigger>
            <div className="text-base mx-5 font-inter text-custom-text-green font-semibold">
              1. What does your blockchain-powered supply chain offer to
              farmers?
            </div>
          </AccordionTrigger>
          <AccordionContent>
            <div className="mx-5 text-justify font-serif leading-relaxed tracking-normal">
              Our blockchain solution ensures transparency and traceability
              throughout the agricultural supply chain. Farmers can track their
              produce from cultivation to market, promoting trust and fair
              transactions.
            </div>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem className="bg-custom shadow-custom my-4 leading-relaxed" value="item-2">
          <AccordionTrigger>
            <div className="text-base mx-5 font-inter text-custom-text-green font-semibold">
              2. How can I buy and sell farming supplies on your e-commerce
              platform?
            </div>
          </AccordionTrigger>
          <AccordionContent>
            <div className="mx-5 text-justify font-serif leading-relaxed tracking-normal">
              Our blockchain solution ensures transparency and traceability
              throughout the agricultural supply chain. Farmers can track their
              produce from cultivation to market, promoting trust and fair
              transactions.
            </div>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem className="bg-custom shadow-custom my-4" value="item-3">
          <AccordionTrigger>
            <div className="text-base mx-5 font-inter text-custom-text-green font-semibold">
              3. How accurate is your AI model in detecting crop diseases?
            </div>
          </AccordionTrigger>
          <AccordionContent>
            <div className="mx-5 text-justify font-serif leading-relaxed tracking-normal">
              Our blockchain solution ensures transparency and traceability
              throughout the agricultural supply chain. Farmers can track their
              produce from cultivation to market, promoting trust and fair
              transactions.
            </div>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem className="bg-custom shadow-custom my-4" value="item-4">
          <AccordionTrigger>
            <div className="text-base mx-5 font-inter text-custom-text-green font-semibold">
              4. Is your platform accessible for farmers with varying levels of
              technological literacy?
            </div>
          </AccordionTrigger>
          <AccordionContent>
            <div className="mx-5 text-justify font-serif leading-relaxed tracking-normal">
              Our blockchain solution ensures transparency and traceability
              throughout the agricultural supply chain. Farmers can track their
              produce from cultivation to market, promoting trust and fair
              transactions.
            </div>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem className="bg-custom shadow-custom tracking-normal" value="item-5">
          <AccordionTrigger>
            <div className="text-base mx-5 font-inter text-custom-text-green font-semibold">
              5. How does your agri-tech solution contribute to sustainable
              farming practices?
            </div>
          </AccordionTrigger>
          <AccordionContent>
            <div className="mx-5 text-justify font-serif leading-relaxed tracking-normal">
              Our blockchain solution ensures transparency and traceability
              throughout the agricultural supply chain. Farmers can track their
              produce from cultivation to market, promoting trust and fair
              transactions.
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
};

export default Faq;
