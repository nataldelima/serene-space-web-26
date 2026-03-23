import { motion } from "framer-motion";
import { Brain, Heart, Users, Sparkles } from "lucide-react";

const services = [
  {
    icon: Brain,
    title: "Ansiedade",
    description: "Técnicas e estratégias para lidar com pensamentos ansiosos, crises de pânico e preocupação excessiva.",
  },
  {
    icon: Heart,
    title: "Depressão",
    description: "Acompanhamento sensível para superar a tristeza profunda e reencontrar o prazer nas atividades do dia a dia.",
  },
  {
    icon: Users,
    title: "Relacionamentos",
    description: "Melhore a comunicação, estabeleça limites saudáveis e construa conexões mais significativas.",
  },
  {
    icon: Sparkles,
    title: "Autoconhecimento",
    description: "Uma jornada de descoberta interior para compreender seus padrões e desenvolver seu potencial.",
  },
];

const ServicesSection = () => {
  return (
    <section id="areas" className="py-24 bg-sage-light">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-primary font-body text-sm tracking-[0.2em] uppercase mb-3">Áreas de atuação</p>
          <h2 className="text-3xl md:text-4xl font-display font-semibold text-foreground">
            Como posso te ajudar
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-background rounded-2xl p-8 hover:shadow-lg transition-shadow duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-accent flex items-center justify-center mb-5">
                <service.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-display font-semibold text-foreground mb-3">{service.title}</h3>
              <p className="text-muted-foreground font-body font-light text-sm leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
