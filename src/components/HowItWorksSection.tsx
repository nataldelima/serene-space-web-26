import { motion } from "framer-motion";
import { MessageCircle, CalendarCheck, HeartHandshake } from "lucide-react";

const steps = [
  {
    icon: MessageCircle,
    step: "01",
    title: "Entre em contato",
    description: "Envie uma mensagem pelo WhatsApp ou preencha o formulário. Vou te responder o mais rápido possível.",
  },
  {
    icon: CalendarCheck,
    step: "02",
    title: "Agende sua sessão",
    description: "Juntos, encontraremos o melhor horário para você, seja online ou presencialmente.",
  },
  {
    icon: HeartHandshake,
    step: "03",
    title: "Inicie seu acompanhamento",
    description: "Comece sua jornada de autoconhecimento e transformação em um espaço seguro e acolhedor.",
  },
];

const HowItWorksSection = () => {
  return (
    <section id="como-funciona" className="py-24 bg-background">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-primary font-body text-sm tracking-[0.2em] uppercase mb-3">Como funciona</p>
          <h2 className="text-3xl md:text-4xl font-display font-semibold text-foreground">
            Simples e acolhedor
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-10 max-w-4xl mx-auto">
          {steps.map((item, index) => (
            <motion.div
              key={item.step}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="text-center"
            >
              <div className="w-16 h-16 rounded-full bg-sage-light flex items-center justify-center mx-auto mb-5">
                <item.icon className="w-7 h-7 text-primary" />
              </div>
              <span className="text-sage font-display text-sm">{item.step}</span>
              <h3 className="text-xl font-display font-semibold text-foreground mt-1 mb-3">{item.title}</h3>
              <p className="text-muted-foreground font-body font-light text-sm leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
