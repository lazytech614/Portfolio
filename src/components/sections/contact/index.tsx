'use client';
import { motion } from 'framer-motion';
import ContactInfo from './contact-info';
import ContactForm from './contact-form';
import { CONTACT_SECTION_CONFIG } from '@/constants/contact';

const Contact = () => {
  return (
    <section id="contact" className="section-padding">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-responsive-lg font-bold mb-4">
            {CONTACT_SECTION_CONFIG.title.split(' In ')[0]} In <span className="gradient-text">{CONTACT_SECTION_CONFIG.title.split(' In ')[1]}</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            {CONTACT_SECTION_CONFIG.subtitle}
          </p>
        </motion.div>

        {/* Contact Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <ContactInfo />
          <ContactForm />
        </div>
      </div>
    </section>
  );
};

export default Contact;
