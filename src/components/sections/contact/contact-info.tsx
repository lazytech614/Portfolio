'use client';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import ContactItem from './contact-item';
import SocialLinks from './social-links';
import { CONTACT_INFO, CONTACT_SECTION_CONFIG } from '@/constants/contact';

const ContactInfo = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
    >
      <Card className="h-full">
        <CardHeader>
          <CardTitle className="text-2xl">{CONTACT_SECTION_CONFIG.infoTitle}</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <p className="text-muted-foreground">
            {CONTACT_SECTION_CONFIG.infoDescription}
          </p>
          
          <div className="space-y-4">
            {CONTACT_INFO.map((info) => (
              <ContactItem
                key={info.label}
                icon={info.icon}
                label={info.label}
                value={info.value}
                href={info.href}
              />
            ))}
          </div>

          <SocialLinks />
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default ContactInfo;
