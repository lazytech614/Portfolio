'use client';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Send } from 'lucide-react';
import { useContactForm } from './hooks/useContactForm';
import { CONTACT_SECTION_CONFIG, FORM_FIELDS } from '@/constants/contact';

const ContactForm = () => {
  const { formData, isSubmitting, handleChange, handleSubmit } = useContactForm();

  return (
    <motion.div
      initial={{ opacity: 0, x: 30 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
    >
      <Card className="h-full">
        <CardHeader>
          <CardTitle className="text-2xl">{CONTACT_SECTION_CONFIG.formTitle}</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name and Email Row */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  {FORM_FIELDS.name.label}
                </label>
                <Input
                  id="name"
                  name="name"
                  type={FORM_FIELDS.name.type}
                  required={FORM_FIELDS.name.required}
                  value={formData.name}
                  onChange={handleChange}
                  placeholder={FORM_FIELDS.name.placeholder}
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  {FORM_FIELDS.email.label}
                </label>
                <Input
                  id="email"
                  name="email"
                  type={FORM_FIELDS.email.type}
                  required={FORM_FIELDS.email.required}
                  value={formData.email}
                  onChange={handleChange}
                  placeholder={FORM_FIELDS.email.placeholder}
                />
              </div>
            </div>
            
            {/* Subject */}
            <div>
              <label htmlFor="subject" className="block text-sm font-medium mb-2">
                {FORM_FIELDS.subject.label}
              </label>
              <Input
                id="subject"
                name="subject"
                type={FORM_FIELDS.subject.type}
                required={FORM_FIELDS.subject.required}
                value={formData.subject}
                onChange={handleChange}
                placeholder={FORM_FIELDS.subject.placeholder}
              />
            </div>
            
            {/* Message */}
            <div>
              <label htmlFor="message" className="block text-sm font-medium mb-2">
                {FORM_FIELDS.message.label}
              </label>
              <Textarea
                id="message"
                name="message"
                required={FORM_FIELDS.message.required}
                rows={FORM_FIELDS.message.rows}
                value={formData.message}
                onChange={handleChange}
                placeholder={FORM_FIELDS.message.placeholder}
              />
            </div>
            
            {/* Submit Button */}
            <Button 
              type="submit" 
              className="w-full glow-effect" 
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <div className="flex items-center">
                  <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-current mr-2"></div>
                  Sending...
                </div>
              ) : (
                <>
                  <Send size={16} className="mr-2" />
                  Send Message
                </>
              )}
            </Button>
          </form>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default ContactForm;
