import { motion } from "framer-motion";
import { useState } from "react";
import { toast } from "sonner";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    type: "online",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Solicitação enviada com sucesso! Entrarei em contato em breve.");
    setFormData({ name: "", email: "", phone: "", type: "online", message: "" });
  };

  return (
    <section id="contato" className="py-24 bg-background">
      <div className="container">
        <div className="grid md:grid-cols-2 gap-16 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-primary font-body text-sm tracking-[0.2em] uppercase mb-3">Agendamento</p>
            <h2 className="text-3xl md:text-4xl font-display font-semibold text-foreground mb-6">
              Dê o primeiro passo
            </h2>
            <p className="text-muted-foreground font-body font-light leading-relaxed mb-8">
              Preencha o formulário ao lado e entrarei em contato para confirmar seu agendamento.
              Atendimento online e presencial disponíveis.
            </p>
            <div className="space-y-4 text-muted-foreground font-body text-sm">
              <p>📍 São Paulo, SP — Vila Mariana</p>
              <p>📞 (11) 99999-9999</p>
              <p>✉️ contato@drahelena.com.br</p>
            </div>
          </motion.div>

          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-5"
          >
            <input
              type="text"
              placeholder="Seu nome"
              required
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full px-5 py-3.5 rounded-lg bg-card border border-border font-body text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring/30 transition-all"
            />
            <input
              type="email"
              placeholder="Seu e-mail"
              required
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="w-full px-5 py-3.5 rounded-lg bg-card border border-border font-body text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring/30 transition-all"
            />
            <input
              type="tel"
              placeholder="Seu telefone"
              required
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              className="w-full px-5 py-3.5 rounded-lg bg-card border border-border font-body text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring/30 transition-all"
            />
            <select
              value={formData.type}
              onChange={(e) => setFormData({ ...formData, type: e.target.value })}
              className="w-full px-5 py-3.5 rounded-lg bg-card border border-border font-body text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-ring/30 transition-all"
            >
              <option value="online">Atendimento Online</option>
              <option value="presencial">Atendimento Presencial</option>
            </select>
            <textarea
              placeholder="Sua mensagem (opcional)"
              rows={4}
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              className="w-full px-5 py-3.5 rounded-lg bg-card border border-border font-body text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring/30 transition-all resize-none"
            />
            <button
              type="submit"
              className="w-full bg-primary text-primary-foreground px-8 py-4 rounded-lg font-body font-medium text-sm hover:bg-primary/90 transition-colors"
            >
              Solicitar agendamento
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
