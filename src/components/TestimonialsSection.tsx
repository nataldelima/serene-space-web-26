import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const testimonials = [
  {
    text: "A Dra. Helena me ajudou a enxergar a vida de uma forma completamente nova. Seu acolhimento e profissionalismo fizeram toda a diferença na minha recuperação.",
    author: "Maria C.",
    detail: "Paciente há 1 ano",
  },
  {
    text: "Eu tinha muito medo de começar a terapia, mas desde a primeira sessão me senti completamente à vontade. Recomendo de olhos fechados.",
    author: "João P.",
    detail: "Paciente há 8 meses",
  },
  {
    text: "As sessões online são tão boas quanto as presenciais. A Dra. Helena cria um ambiente seguro mesmo à distância. Mudou minha vida.",
    author: "Ana L.",
    detail: "Paciente há 2 anos",
  },
];

const TestimonialsSection = () => {
  return (
    <section className="py-24 bg-sage-light">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-primary font-body text-sm tracking-[0.2em] uppercase mb-3">Depoimentos</p>
          <h2 className="text-3xl md:text-4xl font-display font-semibold text-foreground">
            O que dizem sobre mim
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {testimonials.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-background rounded-2xl p-8 relative"
            >
              <Quote className="w-8 h-8 text-sage mb-4" />
              <p className="text-muted-foreground font-body font-light text-sm leading-relaxed mb-6">
                "{item.text}"
              </p>
              <div>
                <p className="font-display font-semibold text-foreground">{item.author}</p>
                <p className="text-muted-foreground font-body text-xs">{item.detail}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
