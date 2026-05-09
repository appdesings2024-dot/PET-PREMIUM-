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
      dog: "Bento (Golden Retriever)", 
      text: "O Bento vivia com alergia e coceira. Depois que comecei o cardápio, em 3 semanas o pelo dele brilhou como nunca. E as receitas são muito simples!"
    },
    { 
      name: "Ricardo Oliveira", 
      dog: "Lola (Vira-lata/SRD)", 
      text: "Eu achava que ia gastar mais, mas na verdade economizei muito comparado com ração super premium que ela comia. É muito prático e ela ama."
    },
    { 
      name: "Ana Beatriz", 
      dog: "Mel (Shih Tzu)", 
      text: "Atendimento nota mil e o material é excelente. A Mel era muito seletiva, agora limpa o prato em segundos. É nítido como ela está mais feliz."
    },
    { 
      name: "Juliana Mendes", 
      dog: "Thor (Bulldog Francês)", 
      text: "Sempre tive medo de dar comida caseira, mas o guia explica tudo bem. O Thor parou de ter gases e as fezes estão muito melhores."
    },
    { 
      name: "Carlos Souza", 
      dog: "Bob (Poodle)", 
      text: "Bob já está velhinho e não queria comer ração. Com a alimentação natural ele recuperou o apetite e está muito mais ativo. Recomendo!"
    },
    { 
      name: "Larissa Viana", 
      dog: "Luna (Labrador)", 
      text: "A praticidade das receitas me surpreendeu. Consigo cozinhar pra semana toda em pouco tempo e a Luna fica esperando ansiosa."
    }
  ];

  const next = () => setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  const prev = () => setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  return (
    <div className="relative max-w-4xl mx-auto px-4">
      <div className="overflow-hidden py-10">
        <motion.div 
          className="flex gap-6"
          animate={{ x: `-${currentIndex * 100}%` }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
        >
          {testimonials.map((test, idx) => (
            <motion.div 
              key={idx} 
              className="min-w-full md:min-w-full bg-bg-alt p-8 rounded-[30px] border-l-8 border-primary shadow-[0_10px_30px_rgba(34,197,94,0.05)] flex flex-col text-left"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 text-highlight fill-highlight" />)}
              </div>
              <p className="text-text-main italic mb-8 leading-relaxed flex-grow text-lg md:text-xl">"{test.text}"</p>
              <div className="flex items-center gap-4 pt-4 border-t border-gray-200/50">
                <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center shadow-sm border-2 border-primary/10">
                  <User className="text-primary/40 w-8 h-8" />
                </div>
                <div>
                  <div className="font-black text-text-main uppercase tracking-tight">{test.name}</div>
                  <div className="text-xs font-bold text-primary/60 uppercase tracking-widest">{test.dog}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <div className="flex justify-center gap-4 mt-4">
        <button 
          onClick={prev}
          className="w-12 h-12 rounded-full bg-white border border-gray-200 flex items-center justify-center hover:bg-primary hover:text-white transition-all shadow-md active:scale-95"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        <button 
          onClick={next}
          className="w-12 h-12 rounded-full bg-white border border-gray-200 flex items-center justify-center hover:bg-primary hover:text-white transition-all shadow-md active:scale-95"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>
      
      <div className="flex justify-center gap-2 mt-6">
        {testimonials.map((_, idx) => (
          <button 
            key={idx}
            onClick={() => setCurrentIndex(idx)}
            className={`w-2.5 h-2.5 rounded-full transition-all ${currentIndex === idx ? 'bg-primary w-6' : 'bg-gray-300'}`}
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
      <section className="relative overflow-hidden pt-16 pb-20 md:pt-24 md:pb-32 bg-linear-to-br from-bg-hero-from to-bg-hero-to">
        <div className="container mx-auto px-6 relative z-10 text-center">
          {/* Text Container */}
          <div className="max-w-4xl mx-auto mb-16">
            <motion.div {...fadeIn}>
              <h1 className="font-sans text-4xl md:text-6xl lg:text-7xl font-black leading-[1.1] mb-8 tracking-tighter uppercase">
                <span className="text-primary">Alimentação natural para cães:</span><br className="hidden md:block" />
                <span className="text-text-main"> o guia que sua veterinária não te deu</span>
              </h1>
              <p className="text-lg md:text-2xl text-text-secondary leading-relaxed mb-12 max-w-3xl mx-auto font-medium">
                Cardápios prontos, receitas simples e tudo organizado pra você começar hoje — sem medo de errar e sem gastar fortuna.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-5">
                <Button variant="primary" className="min-w-[280px] text-xl py-5 shadow-2xl uppercase tracking-tight">QUERO GARANTIR AGORA</Button>
                <Button variant="secondary" className="px-10" onClick={() => document.getElementById('price')?.scrollIntoView()}>Conhecer os planos</Button>
              </div>
            </motion.div>
          </div>

          {/* Stories Format Video Container */}
          <motion.div 
            initial={{ opacity: 0, y: 50, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="max-w-[400px] mx-auto rounded-[30px] md:rounded-[50px] overflow-hidden shadow-[0_50px_100px_rgba(0,0,0,0.2)] border-4 md:border-8 border-white bg-white"
          >
            <div className="aspect-[9/16] relative bg-gray-100">
              <iframe
                src="https://fast.wistia.net/embed/iframe/0s6b4hcast?videoFoam=true"
                title="Vídeo de Apresentação - Alimentação Natural"
                allow="autoplay; fullscreen"
                allowFullScreen
                className="absolute inset-0 w-full h-full"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* 3. PAIN POINTS */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div {...fadeIn} className="text-center mb-16">
            <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4">Você já passou por isso?</h2>
            <div className="w-20 h-1.5 bg-highlight mx-auto rounded-full" />
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
            {[
              { icon: "❌", text: "Cachorro com alergia, coceira ou problemas de pele que não somem" },
              { icon: "❌", text: "Seu cão enjoa das rações facilmente e você não sabe o que oferecer" },
              { icon: "❌", text: "Gasta fortunas em consultas e o problema sempre volta" },
              { icon: "❌", text: "Se perdeu nas informações conflitantes sobre alimentação natural" },
              { icon: "❌", text: "Tem medo de errar na dieta e prejudicar a saúde do seu pet" }
            ].map((item, idx) => (
              <motion.div 
                key={idx} 
                {...fadeIn} 
                transition={{ delay: idx * 0.1 }}
                className="p-6 bg-white rounded-[12px] shadow-[0_4px_15px_rgba(0,0,0,0.05)] border border-card-border hover:border-primary/20 transition-all group"
              >
                <div className="text-2xl mb-4 group-hover:scale-110 transition-transform">{item.icon}</div>
                <p className="text-text-main font-medium leading-relaxed text-sm">{item.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. SOLUTION - REDESIGNED */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="container mx-auto px-6 text-center">
          <motion.div {...fadeIn} className="max-w-4xl mx-auto mb-20">
            <h2 className="font-sans text-3xl md:text-5xl lg:text-6xl font-black text-text-main mb-8 leading-[1.1] uppercase tracking-tighter">
              Apresentamos o único <span className="text-primary italic">Cardápio Natural do Cão</span> totalmente prático
            </h2>
            <p className="text-lg md:text-2xl text-text-secondary leading-relaxed font-medium">
              Você não precisa de nutricionista veterinário caro nem de horas pesquisando. Em minutos você já sabe exatamente o que colocar no prato do seu cão — com segurança e amor.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { 
                title: "Cardápio semanal pronto (7 dias)", 
                desc: "Todo o planejamento feito para você apenas seguir e ver a saúde do seu pet disparar.",
                icon: "📅",
                color: "bg-green-50"
              },
              { 
                title: "Tabela completa pode/não pode", 
                desc: "Saiba exatamente quais alimentos são seguros e quais são proibidos em segundos.",
                icon: "✅",
                color: "bg-amber-50"
              },
              { 
                title: "25 receitas simples e fáceis", 
                desc: "Ingredientes de mercado. Sem complicação. Seu cão vai limpar o prato todo dia.",
                icon: "🥣",
                color: "bg-blue-50"
              },
              { 
                title: "Guia de porções por peso", 
                desc: "Chega de dúvida. Saiba o peso exato de cada ingrediente para o tamanho do seu pet.",
                icon: "⚖️",
                color: "bg-purple-50"
              },
              { 
                title: "Lista de sintomas de alerta", 
                desc: "Conhecimento preventivo que pode salvar a vida do seu melhor amigo.",
                icon: "🚨",
                color: "bg-red-50"
              },
              { 
                title: "Dicas de Economia", 
                desc: "Bônus: como gastar menos do que você gasta hoje com ração industrial.",
                icon: "💰",
                color: "bg-emerald-50"
              }
            ].map((item, idx) => (
              <motion.div 
                key={idx}
                {...fadeIn}
                transition={{ delay: idx * 0.1 }}
                className="group relative p-10 bg-white rounded-[32px] border border-gray-100 shadow-[0_10px_30px_rgba(0,0,0,0.03)] hover:shadow-[0_20px_50px_rgba(0,0,0,0.08)] transition-all duration-500 hover:-translate-y-2 text-left"
              >
                <div className={`w-16 h-16 ${item.color} rounded-2xl flex items-center justify-center text-3xl mb-8 group-hover:scale-110 transition-transform duration-500`}>
                  {item.icon}
                </div>
                <h3 className="font-sans text-xl font-black text-text-main mb-4 leading-tight uppercase tracking-tight">
                  {item.title}
                </h3>
                <p className="text-text-secondary leading-relaxed text-sm font-medium">
                  {item.desc}
                </p>
                <div className="absolute top-6 right-8 text-xs font-black text-primary/10 tracking-widest uppercase">
                  ITEM {idx + 1}
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div {...fadeIn} className="mt-20">
            <Button size="lg" className="min-w-[320px] text-xl py-6 shadow-3xl">Garantir acesso imediato agora</Button>
          </motion.div>
        </div>
      </section>

      {/* 5. BONUS SECTION (Premium Only) */}
      <section className="py-20 bg-[#FFFBEB]">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
             <motion.div {...fadeIn} className="text-center mb-12">
               <span className="text-highlight font-bold text-lg mb-2 block uppercase tracking-tighter">Exclusivo Premium 💎</span>
               <h2 className="font-serif text-3xl md:text-5xl font-bold text-text-main uppercase tracking-tighter">Bônus Inclusos Hoje</h2>
             </motion.div>

             <div className="grid sm:grid-cols-2 gap-6">
                {[
                  { title: "Calculadora de Porções", desc: "Nunca mais tenha dúvida de quanto o seu pet deve comer.", icon: "⚖️" },
                  { title: "Guia de Sintomas", desc: "Saiba quando algo não está bem com a saúde do seu cão.", icon: "🐕" },
                  { title: "Lista de Compras", desc: "Economize no mercado com a lista certa para a semana.", icon: "🛒" },
                  { title: "Grupo VIP WhatsApp", desc: "Dicas semanais exclusivas para melhorar a rotina.", icon: "💬" }
                ].map((bonus, idx) => (
                  <div key={idx} className="bg-white p-7 rounded-[24px] flex gap-4 border border-highlight/20 shadow-sm hover:shadow-md transition-shadow">
                    <div className="text-3xl">{bonus.icon}</div>
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
            <h2 className="font-sans text-4xl md:text-6xl font-black mb-6 uppercase tracking-tighter italic">Escolha o seu plano</h2>
            <p className="text-text-secondary max-w-xl mx-auto text-lg">Acesso vitalício ao material. Você paga uma vez e tem saúde para sempre.</p>
          </motion.div>


          <div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto items-stretch">
            {/* Basic Plan */}
            <motion.div {...fadeIn} className="bg-white p-10 rounded-[40px] shadow-[0_10px_40px_rgba(0,0,0,0.04)] border border-gray-100 flex flex-col hover:border-primary/20 transition-all duration-300">
              <div className="mb-8">
                <span className="text-gray-400 font-bold uppercase text-xs tracking-widest block mb-1">Iniciante</span>
                <h3 className="font-sans text-3xl font-black text-text-main uppercase">Plano Básico</h3>
              </div>
              
              <div className="mb-8">
                <div className="text-5xl font-black text-primary flex items-baseline gap-2">
                  <span className="text-2xl">R$</span>10,00
                </div>
                <p className="text-text-secondary text-sm font-medium mt-1">Acesso vitalício ao PDF</p>
              </div>

              <ul className="space-y-4 mb-10 text-left w-full flex-grow">
                {[
                  "Cardápio semanal (7 dias)",
                  "Tabela oficial PODE/NÃO PODE",
                  "10 Receitas super práticas",
                  "Guia básico de pesagem",
                  "Entrega digital garantida"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-text-main font-medium">
                    <CheckCircle2 className="w-5 h-5 text-gray-300 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              
              <Button variant="secondary" className="w-full py-5 text-lg">Quero o Básico</Button>
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
                  <h3 className="font-sans text-3xl font-black text-text-main uppercase">Combo Premium 💎</h3>
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
                    "<b>25 Receitas Diversificadas</b> (Sabor absoluto)",
                    "<b>Calculadora de Porções</b> Automática",
                    "<b>Lista de Compras</b> Inteligente",
                    "<b>Guia VIP de Sintomas</b> de Alerta",
                    "Acesso ao <b>Grupo VIP WhatsApp</b>",
                    "Bônus: Guia de Economia no Mercado",
                    "Suporte prioritário via <b>E-mail</b>"
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-text-main font-medium">
                      <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span dangerouslySetInnerHTML={{ __html: item }} />
                    </li>
                  ))}
                </ul>

                <Button 
                  variant="primary" 
                  className="w-full py-6 text-xl shadow-2xl"
                  onClick={() => window.open(CHECKOUT_PREMIUM_URL, '_blank')}
                >
                  QUERO GARANTIR O PREMIUM
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
              <h2 className="font-serif text-3xl font-bold text-text-main mb-2">
                Saúde de verdade para seu pet agora!
              </h2>
              <p className="text-base text-text-secondary">
                Escolha o plano ideal e comece hoje mesmo.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row items-center gap-4 w-full lg:w-auto">
              <Button variant="secondary" className="w-full sm:w-auto">
                Plano Básico R$ 10,00
              </Button>
              <Button 
                variant="primary" 
                className="w-full sm:min-w-[280px]"
                onClick={() => window.open(CHECKOUT_PREMIUM_URL, '_blank')}
              >
                QUERO O PREMIUM R$ 19,90
              </Button>
            </div>
          </div>
          
          <div className="mt-12 text-center text-xs text-text-secondary/60">
            <p>© 2026 Cardápio Natural do Cão. Todos os direitos reservados.</p>
            <p className="mt-1">Este material tem cunho educativo e não substitui consultas clínicas regulares.</p>
          </div>
        </div>
      </section>

    </div>
  );
}

