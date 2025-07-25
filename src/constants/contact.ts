import { Mail, Phone, MapPin, Github, Linkedin, Instagram } from 'lucide-react';

export const CONTACT_INFO = [
  {
    icon: Mail,
    label: 'Email',
    value: 'derupanjan2021@gmail.com',
    href: 'mailto:derupanjan2021@gmail.com'
  },
  {
    icon: Phone,
    label: 'Phone',
    value: '+91 9362029992',
    href: 'tel:9362029992'
  },
  {
    icon: MapPin,
    label: 'Location',
    value: 'Roorkee, Uttarakhand, India',
    href: 'https://maps.google.com/?q=IIT+Roorkee'
  }
];

export const SOCIAL_LINKS = [
  { icon: Github, href: 'https://github.com/lazytech614', label: 'GitHub' },
  { icon: Linkedin, href: 'https://www.linkedin.com/in/rupanjan-de-15126527a/', label: 'LinkedIn' },
  { icon: Instagram, href: 'https://www.instagram.com/whoisrupanjan/', label: 'Instagram' },
];

export const CONTACT_SECTION_CONFIG = {
  title: "Get In Touch",
  subtitle: "Ready to start your next project? Let's collaborate and create something amazing together. I'm always open to discussing new opportunities.",
  formTitle: "Send a Message",
  infoTitle: "Let's Connect",
  infoDescription: "Feel free to reach out through any of these channels. I'm always excited to discuss new projects, creative ideas, or opportunities to be part of your vision.",
  socialTitle: "Follow me on social media"
};

export const FORM_FIELDS = {
  name: { label: 'Name *', placeholder: 'Your full name', type: 'text', required: true },
  email: { label: 'Email *', placeholder: 'your.email@example.com', type: 'email', required: true },
  subject: { label: 'Subject *', placeholder: "What's this about?", type: 'text', required: true },
  message: { label: 'Message *', placeholder: 'Tell me about your project or idea...', type: 'textarea', required: true, rows: 5 }
};
