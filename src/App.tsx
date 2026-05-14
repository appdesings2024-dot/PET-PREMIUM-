/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  CheckCircle2, 
  ChevronDown, 
  ShieldCheck, 
  Star, 
  Clock, 
  ArrowRight, 
  ShoppingBag, 
  PhoneCall, 
  AlertCircle,
  ChevronLeft,
  ChevronRight,
  User
} from 'lucide-react';

const CHECKOUT_BASIC_URL = "https://pay.wiapy.com/69fd354cc2ab2347eb1a45bf";
const CHECKOUT_PREMIUM_URL = "https://pay.wiapy.com/69fd367ec2ab2347eb1ab465";

// Restored Bonus Section and FAQ Components
const TestimonialCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const testimonials = [
    { 
      name: "Mariana Costa", 
      dog: "Bento (Golden)", 
      text: "O Bento vivia com alergia. Em 3 semanas o pelo dele brilhou como nunca. Receitas simples que funcionam!"
    },
    { 
      name: "Ricardo Oliveira", 
      dog: "Lola (SRD)", 
      text: "Economizei muito comparado com ração super premium. É prático e ela ama cada refeição."
    },
    { 
      name: "Ana Beatriz", 
      dog: "Mel (Shih Tzu)", 
      text: "A Mel era muito seletiva, agora limpa o prato em segundos. Ela está muito mais dispota."
    },
    { 
      name: "Juliana Mendes", 
      dog: "Thor (Bulldog)", 
      text: "O Thor parou de ter gases e as fezes estão muito melhores. O guia explica tudo perfeitamente."
    },
    { 
      name: "Carlos Souza", 
      dog: "Bob (Poodle)", 
      text: "Bob já está velhinho e recuperou o apetite. Está muito mais ativo e feliz. Recomendo!"
    },
    { 
      name: "Larissa Viana", 
      dog: "Luna (Labrador)", 
      text: "Consigo cozinhar pra semana toda em pouco tempo. Praticidade nota dez pro meu dia a dia."
    }
  ];

  const next = () => setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  const prev = () => setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  return (
    <div className="relative max-w-4xl mx-auto px-2">
      <div className="overflow-hidden py-6">
        <div 
          className="flex transition-transform duration-500 ease-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {testimonials.map((test, idx) => (
            <div 
              key={idx} 
              className="min-w-full px-1"
            >
              <div className="bg-bg-alt p-6 md:p-10 rounded-[32px] border-l-4 md:border-l-8 border-primary shadow-sm flex flex-col items-center text-center">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5 text-highlight fill-highlight" />)}
                </div>
                <p className="text-text-main italic mb-8 leading-relaxed text-lg md:text-xl font-medium">
                  "{test.text}"
                </p>
                <div className="flex flex-col items-center gap-3 pt-6 border-t border-gray-200/50 w-full max-w-xs">
                  <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center shadow-sm border border-primary/10">
                    <User className="text-primary/30 w-8 h-8" />
                  </div>
                  <div>
                    <div className="font-black text-text-main uppercase tracking-tight text-base">{test.name}</div>
                    <div className="text-xs font-bold text-primary/60 uppercase tracking-widest">{test.dog}</div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-center gap-6 mt-2">
        <button 
          onClick={prev}
          aria-label="Anterior"
          className="w-12 h-12 rounded-full bg-white border border-gray-100 flex items-center justify-center hover:bg-primary hover:text-white transition-all shadow-sm active:scale-90"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        <button 
          onClick={next}
          aria-label="Próximo"
          className="w-12 h-12 rounded-full bg-white border border-gray-100 flex items-center justify-center hover:bg-primary hover:text-white transition-all shadow-sm active:scale-90"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>
      
      <div className="flex justify-center gap-2 mt-6">
        {testimonials.map((_, idx) => (
          <button 
            key={idx}
            onClick={() => setCurrentIndex(idx)}
            aria-label={`Ir para depoimento ${idx + 1}`}
            className={`h-2 rounded-full transition-all duration-300 ${currentIndex === idx ? 'bg-primary w-8' : 'bg-gray-200 w-2'}`}
          />
        ))}
      </div>
    </div>
  );
};
const Button = ({ children, variant = 'primary', size = 'lg', className = '', onClick }: any) => {
  const baseStyles = "inline-flex items-center justify-center font-bold transition-all duration-300 rounded-[20px] active:scale-95 cursor-pointer";
  const variants: any = {
    primary: "bg-primary text-white hover:bg-[#236337] shadow-lg hover:shadow-primary/20",
    secondary: "border-2 border-primary text-primary hover:bg-primary/5",
    amber: "bg-highlight text-white hover:bg-[#d98b0a] shadow-lg",
  };
  const sizes: any = {
    sm: "px-6 py-2 text-sm",
    md: "px-8 py-3 text-base",
    lg: "px-10 py-4 text-lg",
  };

  return (
    <button 
      onClick={onClick || (() => window.open(CHECKOUT_BASIC_URL, '_blank'))}
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
    >
      {children}
    </button>
  );
};

const FAQItem = ({ question, answer }: { question: string, answer: string }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border-b border-primary/10 last:border-0">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="flex w-full items-center justify-between py-6 text-left focus:outline-none"
      >
        <span className="font-serif text-lg md:text-xl font-medium text-text-main">{question}</span>
        <ChevronDown className={`h-5 w-5 text-primary transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden"
          >
            <p className="pb-6 text-text-secondary leading-relaxed">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default function App() {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  return (
    <div className="flex flex-col min-h-screen font-sans selection:bg-primary/10 selection:text-primary">
      {/* 1. URGENCY BAR */}
      <div className="bg-highlight text-white py-2 px-4 text-center text-sm md:text-base font-bold tracking-wider uppercase">
        <div className="flex items-center justify-center gap-2">
          <span>🔥 PROMOÇÃO VALIDA SOMENTE PARA HOJE!</span>
        </div>
      </div>

      {/* 2. HERO SECTION */}
      <section className="relative overflow-hidden pt-8 pb-16 md:pt-24 md:pb-32 bg-linear-to-br from-bg-hero-from to-bg-hero-to">
        <div className="container mx-auto px-6 relative z-10 text-center">
          {/* Main Content Stack */}
          <div className="max-w-4xl mx-auto flex flex-col items-center gap-10 md:gap-16">
            <motion.div {...fadeIn}>
              <h1 className="font-display text-3xl md:text-5xl lg:text-7xl font-black leading-tight md:leading-[1.1] mb-6 md:mb-10 tracking-tighter text-center uppercase">
                <span className="text-text-main">Seu cachorro pode estar sofrendo com a alimentação…</span><br className="hidden md:block" />
                <span className="text-primary"> sem você perceber.</span>
              </h1>
              
              {/* Stories Format Video Container - MOVED BELOW HEADLINE */}
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="max-w-[320px] md:max-w-[380px] mx-auto rounded-[30px] md:rounded-[40px] overflow-hidden shadow-[0_40px_80px_rgba(0,0,0,0.15)] border-4 md:border-6 border-white bg-white mb-8"
              >
                <div className="aspect-[9/16] relative bg-gray-100">
                  <iframe
                    src="https://fast.wistia.net/embed/iframe/0s6b4hcast?videoFoam=true"
                    title="Vídeo de Apresentação"
                    allow="autoplay; fullscreen"
                    allowFullScreen
                    loading="lazy"
                    className="absolute inset-0 w-full h-full"
                  />
                </div>
              </motion.div>

              <p className="text-base md:text-xl text-text-secondary leading-relaxed mb-6 max-w-3xl mx-auto font-medium">
                Descubra receitas naturais simples e práticas que já ajudaram mais de 1.347 donos a melhorar a saúde, energia e qualidade de vida dos seus cães.
              </p>
              
              <div className="flex flex-col items-center gap-1 mb-8 md:mb-12">
                <div className="flex gap-1 text-highlight">
                  <Star className="w-5 h-5 fill-highlight" />
                  <Star className="w-5 h-5 fill-highlight" />
                  <Star className="w-5 h-5 fill-highlight" />
                  <Star className="w-5 h-5 fill-highlight" />
                  <Star className="w-5 h-5 fill-highlight" />
                </div>
                <span className="text-sm font-bold text-text-secondary">+1.347 avaliações positivas</span>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button variant="primary" className="w-full sm:min-w-[280px] text-lg md:text-xl py-5 shadow-2xl uppercase tracking-tight h-[60px] md:h-auto">🔥 QUERO CUIDAR MELHOR DO MEU CÃO</Button>
                <Button variant="secondary" className="w-full sm:px-10 h-[60px] md:h-auto" onClick={() => document.getElementById('price')?.scrollIntoView({ behavior: 'smooth' })}>Conhecer os planos</Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 3. PAIN POINTS */}
      <section className="py-12 md:py-20 bg-white">
        <div className="container mx-auto px-6">
          <motion.div {...fadeIn} className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="font-display text-2xl md:text-4xl font-black text-text-main mb-4 uppercase tracking-tighter leading-tight">
              🚨 Muitos sinais ignorados pelos donos podem <span className="text-highlight">estar ligados à alimentação:</span>
            </h2>
          </motion.div>
          
          <div className="max-w-2xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              "coceira frequente",
              "queda de pelo",
              "gases",
              "falta de energia",
              "intestino irregular",
              "perda de apetite"
            ].map((item, idx) => (
              <motion.div 
                key={idx}
                {...fadeIn}
                transition={{ delay: idx * 0.1 }}
                className="bg-bg-alt p-5 rounded-2xl border border-gray-100 flex items-center gap-3 font-bold text-text-main hover:border-highlight/20 transition-all shadow-sm"
              >
                <span className="text-xl">❌</span>
                <span className="uppercase tracking-tight">{item}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      {/* 4. SOLUTION - SUMMARIZED */}
      <section className="py-20 bg-white overflow-hidden">
        <div className="container mx-auto px-6 text-center">
          <motion.div {...fadeIn} className="max-w-4xl mx-auto mb-12">
            <h2 className="font-display text-2xl md:text-5xl font-black text-text-main mb-6 tracking-tighter">
              🐶 Tudo para cuidar melhor da saúde do seu cão ❤️
            </h2>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {[
              { title: "Cardápio completo para 7 dias", desc: "Nunca mais fique sem saber o que preparar para seu cão.", icon: "📅", color: "bg-green-50" },
              { title: "Lista oficial do que PODE e NÃO PODE", desc: "Evite alimentos perigosos e cuide do seu pet com mais segurança.", icon: "✅", color: "bg-amber-50" },
              { title: "35 receitas práticas e naturais", desc: "Receitas simples, nutritivas e fáceis até para iniciantes.", icon: "🥣", color: "bg-blue-50" },
              { title: "Quantidade ideal por peso", desc: "Saiba exatamente quanto seu cão deve comer sem exageros.", icon: "⚖️", color: "bg-purple-50" },
              { title: "Guia de sintomas de alerta", desc: "Aprenda a identificar sinais que muitos donos ignoram.", icon: "🚨", color: "bg-red-50" },
              { title: "Dicas para economizar na alimentação", desc: "Alimente melhor seu pet sem gastar fortunas no mercado.", icon: "💰", color: "bg-emerald-50" }
            ].map((item, idx) => (
              <motion.div 
                key={idx}
                {...fadeIn}
                transition={{ delay: idx * 0.05 }}
                onClick={() => window.open(CHECKOUT_PREMIUM_URL, '_blank')}
                className="p-8 bg-bg-alt rounded-[32px] border border-gray-100 flex flex-col items-start text-left hover:shadow-xl hover:border-primary/30 hover:scale-[1.02] transition-all cursor-pointer group"
              >
                <div className={`w-14 h-14 ${item.color} rounded-2xl flex items-center justify-center text-3xl mb-6 group-hover:scale-110 transition-transform`}>
                  {item.icon}
                </div>
                <h3 className="font-display text-lg font-black text-text-main mb-2 leading-tight">
                  {item.title}
                </h3>
                <p className="text-text-secondary text-sm leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. BONUS SECTION (Premium Only) */}
      <section className="py-20 bg-[#FFFBEB]">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
             <motion.div {...fadeIn} className="text-center mb-12">
               <span className="text-highlight font-bold text-lg mb-2 block uppercase tracking-tighter">Exclusivo Premium 💎</span>
               <h2 className="font-serif text-3xl md:text-5xl font-bold text-text-main uppercase tracking-tighter">🎁 BÔNUS EXCLUSIVOS LIBERADOS HOJE</h2>
             </motion.div>

             <div className="grid sm:grid-cols-2 gap-6">
                {[
                  { title: "Calculadora de Porções", desc: "Nunca mais tenha dúvida de quanto o seu pet deve comer.", icon: "⚖️" },
                  { title: "Guia de Sintomas", desc: "Saiba quando algo não está bem com a saúde do seu cão.", icon: "🐕" },
                  { title: "Lista de Compras", desc: "Economize no mercado com a lista certa para a semana.", icon: "🛒" },
                  { title: "Grupo VIP WhatsApp", desc: "Dicas semanais exclusivas para melhorar a rotina.", icon: "💬" }
                ].map((bonus, idx) => (
                  <div key={idx} 
                    onClick={() => window.open(CHECKOUT_PREMIUM_URL, '_blank')}
                    className="bg-white p-7 rounded-[24px] flex gap-4 border border-highlight/20 shadow-sm hover:shadow-lg hover:border-highlight/40 hover:scale-105 transition-all cursor-pointer active:scale-95 group"
                  >
                    <div className="text-3xl group-hover:scale-110 transition-transform">{bonus.icon}</div>
                    <div>
                      <h4 className="font-bold text-text-main text-lg uppercase tracking-tight">{bonus.title}</h4>
                      <p className="text-text-secondary text-sm leading-relaxed">{bonus.desc}</p>
                    </div>
                  </div>
                ))}
             </div>
          </div>
        </div>
      </section>

      {/* 6. SOCIAL PROOF (Testimonials) - MOVED BEFORE PRICING */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div {...fadeIn} className="mb-16">
             <h2 className="font-sans text-3xl md:text-5xl font-black mb-4 uppercase tracking-tighter">
               Depoimentos de quem <span className="text-primary italic">já mudou a vida</span> do seu cão
             </h2>
             <p className="text-text-secondary max-w-2xl mx-auto text-lg">Pessoas reais que abandonaram a ração industrial e viram a saúde do pet disparar em poucos dias.</p>
          </motion.div>

          <TestimonialCarousel />
        </div>
      </section>

      {/* 7. PRICING PLANS - ENHANCED & DETAILED */}
      <section id="price" className="py-24 bg-linear-to-b from-white to-gray-50">
        <div className="container mx-auto px-4">
          <motion.div {...fadeIn} className="text-center mb-20">
            <span className="text-primary font-black text-sm uppercase tracking-[0.3em] mb-4 block">Investimento na Saúde</span>
            <h2 className="font-display text-3xl md:text-5xl font-black mb-4 uppercase tracking-tighter italic text-text-main">⚠️ Oferta promocional válida somente hoje.</h2>
            <p className="text-text-secondary max-w-xl mx-auto text-lg font-bold">Os bônus podem sair do ar a qualquer momento.</p>
          </motion.div>


          <div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto items-stretch">
            {/* Basic Plan */}
            <motion.div {...fadeIn} className="bg-white p-8 rounded-[40px] shadow-[0_10px_40px_rgba(0,0,0,0.04)] border border-gray-100 flex flex-col hover:border-primary/20 transition-all duration-300 self-center">
              <div className="mb-6">
                <span className="text-gray-400 font-bold uppercase text-xs tracking-widest block mb-1">Iniciante</span>
                <h3 className="font-display text-2xl font-black text-text-main uppercase">Plano Básico</h3>
              </div>
              
              <div className="mb-6">
                <div className="text-4xl font-black text-primary flex items-baseline gap-2">
                  <span className="text-xl">R$</span>10,00
                </div>
                <p className="text-text-secondary text-sm font-medium mt-1">Acesso vitalício ao PDF</p>
              </div>

              <ul className="space-y-3 mb-6 text-left w-full">
                {[
                  "Cardápio semanal (7 dias)",
                  "10 Receitas super práticas",
                  "Guia básico de pesagem",
                  "Entrega digital garantida"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-text-main font-medium">
                    <CheckCircle2 className="w-5 h-5 text-gray-300 flex-shrink-0" />
                    <span className="text-sm">{item}</span>
                  </li>
                ))}
              </ul>
              
              <Button variant="secondary" className="w-full py-4 text-base">Quero o Básico</Button>
            </motion.div>

            {/* Premium Plan - COMPLETE & EYE CATCHING */}
            <motion.div 
              {...fadeIn} 
              className="bg-white p-1 bg-linear-to-br from-primary to-highlight rounded-[42px] shadow-[0_20px_60px_rgba(34,197,94,0.15)] relative scale-105"
            >
              <div className="bg-white p-10 rounded-[40px] h-full flex flex-col relative overflow-hidden">
                <div className="absolute top-0 right-0 bg-primary text-white py-2 px-10 rounded-bl-[20px] text-xs font-black uppercase tracking-widest animate-pulse">
                  MAIS COMPRADO
                </div>
                
                <div className="mb-8">
                  <span className="text-primary font-bold uppercase text-xs tracking-widest block mb-1">Completo + Bônus</span>
                  <h3 className="font-display text-3xl font-black text-text-main uppercase">Combo Premium 💎</h3>
                </div>

                <div className="mb-8">
                  <div className="flex items-baseline gap-2">
                    <span className="text-gray-400 line-through text-lg font-bold">R$ 47,90</span>
                    <span className="bg-highlight/10 text-highlight text-[10px] font-black px-2 py-0.5 rounded-full uppercase">ECONOMIA 60%</span>
                  </div>
                  <div className="text-6xl font-black text-primary flex items-baseline gap-2">
                    <span className="text-2xl">R$</span>19,90
                  </div>
                  <p className="text-text-secondary text-sm font-medium mt-1">Tudo do Básico + 6 Bônus de Valor</p>
                </div>

                <ul className="space-y-4 mb-10 text-left w-full flex-grow">
                  {[
                    "<b>Cardápio Natural</b> 7 dias",
                    "<b>25 Receitas</b> Diversificadas",
                    "<b>Calculadora de Porções</b> Automática",
                    "<b>Lista de Compras</b> Inteligente",
                    "<b>Guia VIP de Sintomas</b> de Alerta",
                    "Acesso ao <b>Grupo VIP WhatsApp</b>",
                    "🎁 <b>BÔNUS: SOS Cachorro</b> — Guia de Emergências em Casa",
                    "🎁 <b>BÔNUS: Cão Ansioso</b> — Guia do Tutor Desesperado",
                    "🏆 <b>Concorre ao Kit Mimo Mensal</b> — Coleira + Petisco + Brinquedo + Caminha"
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-4 text-text-main font-medium py-1">
                      <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                      <span dangerouslySetInnerHTML={{ __html: item }} className="text-base md:text-lg leading-snug" />
                    </li>
                  ))}
                </ul>

                <Button 
                  variant="primary" 
                  className="w-full py-5 shadow-2xl flex flex-col h-auto"
                  onClick={() => window.open(CHECKOUT_PREMIUM_URL, '_blank')}
                >
                  <span className="text-xl mb-0.5">🔥 ACESSAR AGORA</span>
                  <span className="text-xs font-bold opacity-90 tracking-tight">⭐ Melhor custo-benefício</span>
                </Button>
                
                <div className="mt-6 flex items-center justify-center gap-2 text-[10px] text-gray-400 font-bold uppercase tracking-widest">
                  <ShieldCheck className="w-3 h-3" />
                  Pagamento 100% Seguro e Criptografado
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 8. FAQ */}
      <section className="py-20 bg-bg-alt">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <motion.div {...fadeIn} className="text-center mb-12">
              <h2 className="font-serif text-3xl md:text-5xl font-bold text-text-main">Dúvidas Frequentes</h2>
            </motion.div>
            
            <motion.div {...fadeIn} className="bg-white rounded-[20px] p-4 md:p-8 shadow-sm">
              <FAQItem 
                question="Precisa ser veterinário para usar?" 
                answer="Não! O material foi desenvolvido justamente para tutores que não têm conhecimento técnico. As receitas são simples, seguras e usam ingredientes que você já encontra no mercado." 
              />
              <FAQItem 
                question="Funciona para qualquer raça e tamanho?" 
                answer="Sim! O guia inclui uma calculadora de porções (no Plano Premium) e orientações por peso que servem desde o menor Chihuahua até o maior São Bernardo." 
              />
              <FAQItem 
                question="Como vou receber o material?" 
                answer="A entrega é imediata via link enviado automaticamente para o seu e-mail assim que o pagamento for aprovado. O formato é digital (PDF)." 
              />
              <FAQItem 
                question="E se eu não gostar?" 
                answer="Fique tranquilo! Você tem uma garantia incondicional de 7 dias. Se por qualquer motivo não sentir que é para você, basta pedir o reembolso." 
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* 9. GUARANTEE */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-2xl">
          <motion.div {...fadeIn} className="flex items-center gap-6 bg-[#FFFBEB] p-8 rounded-[12px] border border-[#FEF3C7] shadow-sm">
            <span className="text-5xl">🛡️</span>
            <div>
              <h3 className="font-serif text-xl font-bold mb-1">Garantia de 7 Dias</h3>
              <p className="text-sm text-text-secondary leading-relaxed">
                Você tem 7 dias para testar todo o material. Se o seu cão não amar a comida ou se você não achar prático de verdade, nós devolvemos cada centavo do seu investimento. Sem perguntas, sem burocracia.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 9. FINAL CTA SECTION */}
      <section className="py-12 bg-white border-t border-[#EEE]">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="text-center lg:text-left">
              <h2 className="font-serif text-2xl md:text-3xl font-bold text-text-main mb-2">
                Saúde de verdade para seu pet agora!
              </h2>
              <p className="text-base text-text-secondary">
                Escolha o plano ideal e comece hoje mesmo.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row items-center gap-4 w-full lg:w-auto">
              <Button variant="secondary" className="w-full sm:w-auto h-[56px] md:h-auto">
                Plano Básico R$ 10,00
              </Button>
              <Button 
                variant="primary" 
                className="w-full sm:min-w-[280px] h-[64px] md:h-auto"
                onClick={() => window.open(CHECKOUT_PREMIUM_URL, '_blank')}
              >
                QUERO O PREMIUM R$ 19,90
              </Button>
            </div>
          </div>
          
          <div className="mt-12 text-center text-[10px] md:text-xs text-text-secondary/60">
            <p>© 2026 Cardápio Natural do Cão. Todos os direitos reservados.</p>
            <p className="mt-1">Este material tem cunho educativo e não substitui consultas clínicas regulares.</p>
          </div>
        </div>
      </section>

    </div>
  );
}

