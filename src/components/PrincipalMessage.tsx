"use client";

import Image from "next/image";
import ScrollReveal from "./ScrollReveal";

export default function PrincipalMessage() {
  return (
    <section id="principal-message" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-center">
          
          {/* Image Column */}
          <ScrollReveal direction="left" delay={0.2} className="w-full lg:w-5/12">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl max-w-md mx-auto bg-bg-alt">
              <Image 
                src="/principal.png" 
                alt="Upendra Bahadur Khatri - Principal" 
                width={500}
                height={600}
                className="w-full h-auto object-contain"
              />
              {/* Decorative elements */}
              <div className="absolute inset-0 border-4 border-white/20 rounded-2xl z-10 m-4 pointer-events-none"></div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-accent/20 rounded-full blur-3xl"></div>
            </div>
          </ScrollReveal>

          {/* Text Column */}
          <ScrollReveal direction="right" delay={0.4} className="w-full lg:w-7/12">
            <div className="relative">
              <i className="fi fi-rr-quote-right absolute -top-8 -left-8 text-5xl text-primary/10 -rotate-12"></i>
              
              <h2 className="text-sm font-semibold text-accent uppercase tracking-wider mb-2">
                Message from Principal
              </h2>
              <h3 className="text-3xl md:text-4xl font-bold text-primary mb-8 leading-tight">
                प्रधानाध्यापकको सन्देश
              </h3>
              
              <div className="space-y-4 text-text-muted leading-relaxed font-medium">
                <p>प्रिय विद्यार्थीहरू,</p>
                <p>
                  विद्यालय परिवारको तर्फबाट यस शैक्षिक सत्र सफलतापूर्वक पूरा गरी आगामी कक्षामा स्तरोन्नति भएका सम्पूर्ण विद्यार्थीहरूलाई हार्दिक बधाई तथा उज्ज्वल भविष्यको लागि शुभकामना व्यक्त गर्दछु। तपाईंहरूको मेहनत, अनुशासन र लगनशीलताको फलस्वरूप प्राप्त यो सफलता साँच्चिकै प्रशंसनीय छ।
                </p>
                <p>
                  यस बिदाको समयलाई सदुपयोग गर्दै फलदायी कार्यमा संलग्न हुन, नयाँ कक्षाको पाठ्यक्रमप्रति अग्रिम रूपमा तयारी गर्न तथा विद्यालय सुरु हुनु अघि नै अध्ययनमा सक्रिय हुन म सम्पूर्ण विद्यार्थीहरूलाई आग्रह गर्दछु। समयको सही उपयोग नै सफलताको मुख्य आधार हो।
                </p>
                <p>
                  हाम्रो विद्यालयले शैक्षिक गुणस्तर अभिवृद्धि गर्न तथा विद्यार्थीहरूलाई अझ राम्रो वातावरण प्रदान गर्न नयाँ भवन निर्माण कार्य यसै आर्थिक वर्षदेखि सुरु गरिसकेको छ। साथै, नेपाल सरकारद्वारा जारी नयाँ नियम तथा निर्देशनहरूको पूर्ण पालना गर्दै शिक्षण सिकाइ प्रक्रियालाई अझ प्रभावकारी बनाउने दिशामा हामी निरन्तर प्रयासरत छौं।
                </p>
                <p>
                  मलाई पूर्ण विश्वास छ कि हाम्रो विद्यालयका विद्यार्थीहरू पढाइसँगै अतिरिक्त क्रियाकलापहरूमा पनि उत्कृष्टता हासिल गर्दै बहुआयामिक प्रतिभा प्रदर्शन गर्नेछन्।
                </p>
                <p>धन्यवाद ।</p>
              </div>

              <div className="mt-10 pt-8 border-t border-border flex items-center gap-4">
                <div className="w-1.5 h-12 bg-accent rounded-full"></div>
                <div>
                  <h4 className="text-xl font-bold text-primary">Upendra Bahadur Khatri</h4>
                  <p className="text-text-muted font-medium">Principal</p>
                </div>
              </div>
            </div>
          </ScrollReveal>

        </div>
      </div>
    </section>
  );
}
