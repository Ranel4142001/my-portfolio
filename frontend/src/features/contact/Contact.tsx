import { motion } from 'framer-motion';
import { scrollFade } from './contact.animations';
import { useContactForm } from './useContactForm';
import { ContactForm } from './ContactForm';
import { ContactInfo } from './ContactInfo';

const Contact = () => {
  const form = useContactForm();

  return (
    <section id="contact" className="section-padding bg-secondary/30">
      <div className="container-custom">
        <motion.div {...scrollFade} className="text-center mb-16">
          <h2 className="text-4xl font-bold">
            Let's <span className="text-gradient">Connect</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          <motion.div {...scrollFade}>
            <ContactInfo />
          </motion.div>

          <motion.div {...scrollFade}>
            <ContactForm {...form} onSubmit={form.submit} />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
