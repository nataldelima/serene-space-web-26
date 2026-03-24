import imgBio from "@/assets/dra-helena.jpg";
import { motion } from "framer-motion";

const AboutSection = () => {
  return (
    <section id="sobre" className="py-24 bg-background">
      <div className="container">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="w-full aspect-[3/4] rounded-2xl bg-sage-light overflow-hidden">
              <div className="w-full h-full bg-gradient-to-br from-sage/30 to-accent flex items-end justify-center relative">
                <img src={imgBio} alt="Dra. Helena Monteiro" className="absolute inset-0 w-full h-full object-cover object-top" />
                <div className="w-3/4 h-3/4 bg-sage/20 rounded-t-full" />
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p className="text-primary font-body text-sm tracking-[0.2em] uppercase mb-3">Sobre mim</p>
            <h2 className="text-3xl md:text-4xl font-display font-semibold text-foreground mb-6">
              Um espaço seguro para você ser quem é
            </h2>
            <div className="space-y-4 text-muted-foreground font-body font-light leading-relaxed">
              <p>
                Sou a Dra. Helena Monteiro, psicóloga clínica formada pela Universidade de São Paulo (USP),
                com especialização em Terapia Cognitivo-Comportamental e mais de 10 anos de experiência
                no cuidado com a saúde emocional.
              </p>
              <p>
                Acredito que cada pessoa carrega uma história única, e meu papel é oferecer um espaço
                de escuta acolhedora, sem julgamentos, para que você possa se reconectar consigo mesmo
                e encontrar caminhos para uma vida mais equilibrada.
              </p>
              <p>
                Minha abordagem é integrativa, combinando técnicas da TCC com práticas de mindfulness
                e psicologia positiva, sempre adaptadas às suas necessidades individuais.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
