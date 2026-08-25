"use client";

import ScrollReveal from "./ScrollReveal";

export default function AdmissionsSection() {
  return (
    <section id="admissions" className="py-24 bg-white relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="text-center mb-12">
          <ScrollReveal delay={0}>
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-3">
              Admissions
            </h2>
            <div className="w-24 h-1 bg-[#1877F2] mx-auto mb-4"></div>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <p className="text-text-muted">
              Join our community of learners and begin your educational journey with us
            </p>
          </ScrollReveal>
        </div>

        {/* Main Form Area (Grey Background) */}
        <ScrollReveal delay={0.4}>
          <div className="bg-bg-alt rounded-3xl p-6 md:p-12 mb-8 shadow-inner">
            
            {/* White Form Card */}
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden border-t-8 border-primary">
              <div className="p-8 md:p-12">
                
                <div className="text-center mb-10">
                    <div className="bg-primary/10 p-3 rounded-lg text-primary mx-auto w-fit mb-4">
                      <i className="fi fi-rr-clock text-xl"></i>
                    </div>
                  <h3 className="text-2xl md:text-3xl font-bold text-text mb-2">
                    Admission Open 2026
                  </h3>
                  <p className="text-text-muted text-sm md:text-base">
                    Sunrise English Boarding School - Student Registration
                  </p>
                </div>

                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    
                    {/* Student Full Name */}
                    <div>
                      <label className="block text-sm font-semibold text-text mb-2">Student Full Name</label>
                      <input 
                        type="text" 
                        placeholder="Student's name" 
                        className="w-full px-4 py-3 rounded-lg border border-border focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors outline-none text-text"
                      />
                    </div>

                    {/* Father/Mother Name */}
                    <div>
                      <label className="block text-sm font-semibold text-text mb-2">Father/Mother Name</label>
                      <input 
                        type="text" 
                        placeholder="Parent/Guardian name" 
                        className="w-full px-4 py-3 rounded-lg border border-border focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors outline-none text-text"
                      />
                    </div>

                    {/* Apply For */}
                    <div>
                      <label className="block text-sm font-semibold text-text mb-2">Apply For (Grade/Level)</label>
                      <select className="w-full px-4 py-3 rounded-lg border border-border focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors outline-none text-text bg-white appearance-none">
                        <option value="">Select Option</option>
                        <option value="primary">Primary School (1-5)</option>
                        <option value="middle">Middle School (6-8)</option>
                        <option value="secondary">Secondary School (8-10)</option>
                      </select>
                    </div>

                    {/* Previous GPA */}
                    <div>
                      <label className="block text-sm font-semibold text-text mb-2">Previous GPA / Latest Exam GPA</label>
                      <input 
                        type="text" 
                        placeholder="e.g. 3.65" 
                        className="w-full px-4 py-3 rounded-lg border border-border focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors outline-none text-text mb-1"
                      />
                      <span className="text-[10px] text-text-muted italic">*If final result is pending, provide GPA of latest exam appeared.</span>
                    </div>

                    {/* Contact Phone Number */}
                    <div>
                      <label className="block text-sm font-semibold text-text mb-2">Contact Phone Number</label>
                      <input 
                        type="text" 
                        placeholder="98XXXXXXXX" 
                        className="w-full px-4 py-3 rounded-lg border border-border focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors outline-none text-text"
                      />
                    </div>

                    {/* Address */}
                    <div>
                      <label className="block text-sm font-semibold text-text mb-2">Address</label>
                      <input 
                        type="text" 
                        placeholder="City, State" 
                        className="w-full px-4 py-3 rounded-lg border border-border focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors outline-none text-text"
                      />
                    </div>

                  </div>

                  <button 
                    type="button" 
                    className="w-full mt-8 bg-primary hover:bg-primary/90 text-white font-bold py-4 px-6 rounded-lg shadow-md transition-colors duration-300"
                  >
                    Submit Application
                  </button>
                </form>

              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* Info Cards Row */}
        <ScrollReveal delay={0.6}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* Requirements Card */}
            <div className="bg-white rounded-2xl border border-border p-6 md:p-8 shadow-sm">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary mb-6">
                    <i className="fi fi-rr-check-circle text-2xl"></i>
                  </div>
              <h4 className="font-bold text-text mb-4 text-lg">Requirements</h4>
              <ul className="space-y-3">
                <li className="text-sm text-text-muted flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-text-muted mt-1.5 flex-shrink-0"></span>
                  Previous academic records
                </li>
                <li className="text-sm text-text-muted flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-text-muted mt-1.5 flex-shrink-0"></span>
                  Birth certificate
                </li>
                <li className="text-sm text-text-muted flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-text-muted mt-1.5 flex-shrink-0"></span>
                  Transfer certificate
                </li>
                <li className="text-sm text-text-muted flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-text-muted mt-1.5 flex-shrink-0"></span>
                  Passport size photographs
                </li>
              </ul>
            </div>

            {/* Important Dates Card */}
            <div className="bg-white rounded-2xl border border-border p-6 md:p-8 shadow-sm">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary mb-6">
                <i className="fi fi-rr-calendar text-2xl"></i>
              </div>
              <h4 className="font-bold text-text mb-4 text-lg">Important Dates</h4>
              <ul className="space-y-3">
                <li className="text-sm text-text-muted flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-text-muted mt-1.5 flex-shrink-0"></span>
                  Application Start: Spring 2026
                </li>
                <li className="text-sm text-text-muted flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-text-muted mt-1.5 flex-shrink-0"></span>
                  Application Deadline: TBD
                </li>
                <li className="text-sm text-text-muted flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-text-muted mt-1.5 flex-shrink-0"></span>
                  Results: TBD
                </li>
              </ul>
            </div>

            {/* FAQ Card */}
            <div className="bg-white rounded-2xl border border-border p-6 md:p-8 shadow-sm">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary mb-6">
                    <i className="fi fi-rr-interrogation text-2xl"></i>
                  </div>
              <h4 className="font-bold text-text mb-4 text-lg">FAQ</h4>
              <ul className="space-y-3">
                <li className="text-sm text-text-muted flex items-start gap-2 cursor-pointer hover:text-primary transition-colors">
                  <span className="text-xs mt-0.5">▶</span>
                  What is the admission criteria?
                </li>
                <li className="text-sm text-text-muted flex items-start gap-2 cursor-pointer hover:text-primary transition-colors">
                  <span className="text-xs mt-0.5">▶</span>
                  Are scholarships available?
                </li>
                <li className="text-sm text-text-muted flex items-start gap-2 cursor-pointer hover:text-primary transition-colors">
                  <span className="text-xs mt-0.5">▶</span>
                  What about transportation?
                </li>
              </ul>
            </div>

          </div>
        </ScrollReveal>

      </div>
    </section>
  );
}
