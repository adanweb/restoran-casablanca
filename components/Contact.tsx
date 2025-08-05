import React from 'react';
import Section from './Section';
import MapPinIcon from './icons/MapPinIcon';
import PhoneIcon from './icons/PhoneIcon';
import ClockIcon from './icons/ClockIcon';
import { motion } from 'framer-motion';
import { useTranslations } from '../hooks/useTranslations';

const ContactInfoItem = ({ icon, text, href }: { icon: React.ReactNode, text: string, href?: string }) => {
    const content = (
        <div className="flex items-center space-x-4 rtl:space-x-reverse">
            <div className="text-brand-red">{icon}</div>
            <p className="text-lg text-gray-300">{text}</p>
        </div>
    );
    
    if (href) {
        return <a href={href} target="_blank" rel="noopener noreferrer" className="block p-4 rounded-lg hover:bg-gray-800 transition-colors">{content}</a>;
    }

    return <div className="p-4">{content}</div>;
};

const Contact = () => {
  const { t } = useTranslations();
  
  return (
    <Section id="contact" className="bg-brand-dark">
      <h2 className="text-5xl font-serif font-bold text-center text-white mb-16">
        {t.contact.title}
      </h2>
      <div className="grid md:grid-cols-2 gap-12">
        <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
        >
          <h3 className="text-3xl font-serif text-brand-red mb-6">{t.contact.info}</h3>
          <div className="space-y-4">
            <ContactInfoItem icon={<MapPinIcon />} text={t.contact.address} href="https://www.google.com/maps/place/Restoran+kod+Poticajka/@44.5562287,16.3702362,17z/data=!4m6!3m5!1s0x4760f00913eb70fd:0xba93b7f9654964c2!8m2!3d44.5546154!4d16.3695474!16s%2Fg%2F11hbkklk6b?entry=ttu&g_ep=EgoyMDI1MDczMC4wIKXMDSoASAFQAw%3D%3D" />
            <ContactInfoItem icon={<PhoneIcon />} text={t.contact.phone} href="tel:+38761123456" />
            <ContactInfoItem icon={<ClockIcon />} text={t.contact.hours} />
          </div>
          <div className="mt-8">
            <h4 className="text-xl font-serif text-brand-red mb-4">{t.contact.follow}</h4>
            <div className="flex space-x-4 rtl:space-x-reverse">
                <a href="#" className="text-gray-400 hover:text-white transition-colors">{t.contact.facebook}</a>
                <span className="text-gray-600">|</span>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">{t.contact.instagram}</a>
            </div>
          </div>
        </motion.div>
        
        <motion.div
            className="w-full h-96 md:h-full rounded-lg overflow-hidden shadow-2xl"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2862.4939794019126!2d16.366972476839356!3d44.55461537107797!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4760f00913eb70fd%3A0xba93b7f9654964c2!2sRestoran%20kod%20Poticajka!5e0!3m2!1sbs!2sba!4v1721230188402!5m2!1sbs!2sba"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </motion.div>
      </div>
    </Section>
  );
};

export default Contact;