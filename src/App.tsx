/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useMemo } from 'react';
import { motion } from 'motion/react';
import { 
  CheckCircle2, 
  ShieldCheck, 
  Star, 
  AlertCircle
} from 'lucide-react';

const CHECKOUT_BASIC_URL = "https://pay.wiapy.com/69fd354cc2ab2347eb1a45bf";
const CHECKOUT_PREMIUM_URL = "https://pay.wiapy.com/69fd367ec2ab2347eb1ab465";

// Restored Bonus Section and FAQ Components
const TestimonialsSection = () => {
  const testimonials = useMemo(() => [
    { 
      img: "https://i.ibb.co/QvpdgRgs/Whats-App-Image-2026-05-14-at-18-32-04-1.jpg",
      alt: "Depoimento 1"
    },
    { 
      img: "https://i.ibb.co/nsMtWHRp/Whats-App-Image-2026-05-14-at-18-32-04.jpg",
      alt: "Depoimento 2"
    },
    { 
      img: "https://i.ibb.co/b51jQCzn/Whats-App-Image-2026-05-14-at-18-32-03.jpg",
      alt: "Depoimento 3"
    }
  ], []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto px-4">
      {testimonials.map((test, idx) => (
        <motion.div 
          key={idx}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: idx * 0.1 }}
          viewport={{ once: true }}
          className="bg-white rounded-[32px] overflow-hidden shadow-sm border border-gray-100 hover:shadow-xl hover:border-primary/20 transition-all hover:scale-[1.02]"
        >
          <img 
            src={test.img} 
            alt={test.alt}
            className="w-full h-auto object-contain"
            loading="lazy"
            decoding="async"
            referrerPolicy="no-referrer"
          />
        </motion.div>
      ))}
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

export default function App() {
  const [showVideo, setShowVideo] = useState(false);
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  const today = new Date().toLocaleDateString('pt-BR', { day: '2-digit', month: '2-digit' });

  return (
    <div className="flex flex-col min-h-screen font-sans selection:bg-primary/10 selection:text-primary overflow-x-hidden">
      {/* 1. URGENCY BAR */}
      <div className="bg-highlight text-white py-2 px-4 text-center text-sm md:text-base font-bold tracking-wider uppercase">
        <div className="flex items-center justify-center gap-2">
          <span>🔥 PROMOÇÃO VALIDA SOMENTE PARA HOJE ({today})!</span>
        </div>
      </div>

      {/* 2. HERO SECTION */}
      <section className="relative overflow-hidden pt-8 pb-16 md:pt-24 md:pb-32 bg-linear-to-br from-bg-hero-from to-bg-hero-to">
        <div className="container mx-auto px-6 relative z-10 text-center">
          {/* Main Content Stack */}
          <div className="max-w-4xl mx-auto flex flex-col items-center gap-10 md:gap-16">
            <motion.div {...fadeIn}>
              <h1 className="font-display text-3xl md:text-5xl lg:text-6xl font-black leading-tight md:leading-[1.1] mb-6 md:mb-10 tracking-tighter text-center uppercase">
                <span className="text-text-main">Aprenda mais de 300 receitas naturais que ajudam seu cão a ter </span><br className="hidden md:block" />
                <span className="text-primary">mais disposição, pelos bonitos e melhor digestão.</span>
              </h1>
              
              {/* Product Image Moved Here */}
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="max-w-5xl mx-auto mb-8"
              >
                <a href="https://ibb.co/5ggXxxLP" target="_blank" rel="noopener noreferrer">
                  <img 
                    src="https://i.ibb.co/FLLkqqzF/Chat-GPT-Image-13-de-mai-de-2026-23-20-04.png" 
                    alt="Guia de Alimentação Natural" 
                    className="w-full rounded-[40px] shadow-[0_30px_100px_rgba(0,0,0,0.1)] border-8 border-white bg-white hover:opacity-95 transition-opacity"
                    referrerPolicy="no-referrer"
                    loading="lazy"
                    decoding="async"
                  />
                </a>
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
                <Button 
                  variant="primary" 
                  className="w-full sm:min-w-[280px] text-lg md:text-xl py-5 shadow-2xl uppercase tracking-tight h-[60px] md:h-auto"
                  onClick={() => document.getElementById('price')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  🔥 QUERO CUIDAR MELHOR DO MEU CÃO
                </Button>
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
      <section className="py-12 md:py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="font-display text-2xl md:text-5xl font-black text-text-main mb-4 tracking-tighter uppercase">
              O QUE VOCÊ VAI RECEBER NESSE MATERIAL
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {[
              { title: "Cardápio 7 dias", desc: "Plano organizado para a semana inteira.", icon: "📅" },
              { title: "Guia Nutricional", desc: "Saiba exatamente o que pode e não pode comer.", icon: "✅" },
              { title: "300 Receitas", desc: "Preparo rápido, prático e 100% natural.", icon: "🥣" },
              { title: "Calculadora", desc: "Quantidade ideal baseada no peso do pet.", icon: "⚖️" },
              { title: "Alerta de Saúde", desc: "Sintomas que você precisa observar rápido.", icon: "🚨" },
              { title: "Economia", desc: "Alimente melhor gastando menos que ração.", icon: "💰" }
            ].map((item, idx) => (
              <motion.div 
                key={idx}
                whileHover={{ y: -5 }}
                className="p-6 rounded-2xl bg-bg-alt border border-gray-100 flex items-start gap-4 transition-all hover:shadow-md"
              >
                <span className="text-3xl shrink-0">{item.icon}</span>
                <div>
                  <h3 className="font-black text-lg uppercase tracking-tight mb-1">{item.title}</h3>
                  <p className="text-text-secondary text-sm leading-relaxed">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <a 
              href={CHECKOUT_BASIC_URL}
              className="inline-block bg-primary text-white font-black text-xl px-10 py-5 rounded-full shadow-lg hover:scale-105 active:scale-95 transition-all uppercase tracking-tight"
            >
              Quero Garantir Meu Guia Agora ➜
            </a>
          </div>
        </div>
      </section>

      {/* 5. BONUS SECTION (Premium Only) */}
      <section className="py-20 bg-[#FFFBEB]">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
             <motion.div {...fadeIn} className="text-center mb-12">
               <span className="text-highlight font-bold text-lg mb-2 block uppercase tracking-tighter">Exclusivo Completo 💎</span>
               <h2 className="font-serif text-3xl md:text-5xl font-bold text-text-main uppercase tracking-tighter">🎁 BÔNUS EXCLUSIVOS LIBERADOS HOJE</h2>
             </motion.div>

             <div className="grid sm:grid-cols-2 gap-6">
                {[
                  { title: "Calculadora de Porções", desc: "Descubra a quantidade ideal de alimento para o porte do seu cão.", icon: "⚖️" },
                  { title: "Guia de Sintomas de Alerta", desc: "Aprenda a identificar sinais que muitos donos ignoram.", icon: "🐕" },
                  { title: "Lista Inteligente de Compras", desc: "Economize tempo e dinheiro na rotina da semana.", icon: "🛒" },
                  { title: "Grupo VIP no WhatsApp", desc: "Receba dicas práticas e conteúdos exclusivos.", icon: "💬" },
                  { title: "Rotina Saudável para Cães", desc: "Melhore a energia, sono, disposição e bem-estar do seu pet.", icon: "🦴" },
                  { title: "Adestramento Fácil", desc: "Comandos básicos e dicas práticas para o dia a dia.", icon: "🎾" },
                  { title: "SOS Cachorro", desc: "Guia de Emergências em Casa para agir rápido.", icon: "🎁" },
                  { title: "Cão Ansioso", desc: "Guia do Tutor Desesperado para acalmar seu pet.", icon: "🎁" }
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
      <section className="py-12 md:py-20 bg-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div {...fadeIn} className="mb-16">
             <h2 className="font-sans text-3xl md:text-5xl font-black mb-4 uppercase tracking-tighter">
               Depoimentos de quem <span className="text-primary italic">já mudou a vida</span> do seu cão
             </h2>
             <p className="text-text-secondary max-w-2xl mx-auto text-lg">Pessoas reais que abandonaram a ração industrial e viram a saúde do pet disparar em poucos dias.</p>
          </motion.div>

          <TestimonialsSection />
        </div>
      </section>

      {/* 7. PRICING PLANS - ENHANCED & DETAILED */}
      <section id="price" className="py-24 bg-linear-to-b from-white to-gray-50">
        <div className="container mx-auto px-4">
          <motion.div {...fadeIn} className="text-center mb-20">
            <span className="text-primary font-black text-sm uppercase tracking-[0.3em] mb-4 block">Investimento na Saúde</span>
            <h2 className="font-display text-3xl md:text-5xl font-black mb-4 uppercase tracking-tighter italic text-text-main">⚠️ Oferta promocional válida somente hoje ({today}).</h2>
            <p className="text-text-secondary max-w-xl mx-auto text-lg font-bold">Aproveite enquanto a oferta está no ar.</p>
          </motion.div>


          <div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto items-stretch">
            {/* Basic Plan */}
            <motion.div {...fadeIn} className="bg-white p-8 rounded-[40px] shadow-[0_10px_40px_rgba(0,0,0,0.04)] border border-gray-100 flex flex-col hover:border-primary/20 transition-all duration-300 self-center">
              <div className="mb-6">
                <span className="text-gray-400 font-bold uppercase text-xs tracking-widest block mb-1">Plano Básico</span>
                <h3 className="font-display text-2xl font-black text-text-main uppercase">Guia de Receitas 🥗</h3>
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
              <div className="bg-white p-6 md:p-10 rounded-[40px] h-full flex flex-col items-start text-left relative overflow-hidden">
                <div className="absolute top-0 right-0 bg-primary text-white py-2 px-10 rounded-bl-[20px] text-[10px] md:text-xs font-black uppercase tracking-widest animate-pulse whitespace-nowrap">
                  🔥 MAIS ESCOLHIDO PELOS TUTORES
                </div>
                
                <div className="mb-6 mt-4">
                  <span className="text-primary font-bold uppercase text-xs tracking-widest block mb-1">Acesso Completo</span>
                  <h3 className="font-display text-3xl font-black text-text-main uppercase">Material Completo 💎</h3>
                </div>

                <div className="mb-6">
                  <div className="flex flex-col items-start gap-1 mb-1">
                    <span className="text-gray-400 line-through text-lg font-bold">DE R$ 75,90</span>
                    <span className="text-highlight text-sm font-black uppercase">por apenas</span>
                  </div>
                  <div className="text-5xl md:text-6xl font-black text-primary flex items-baseline gap-2 leading-none">
                    <span className="text-2xl">R$</span>19,90
                  </div>
                  <p className="text-highlight text-[10px] md:text-xs font-black mt-3 uppercase tracking-tight flex items-center gap-2">
                    <AlertCircle className="w-3 h-3" />
                    ⚠️ Oferta promocional liberada somente hoje ({today})
                  </p>
                </div>

                <ul className="space-y-3 mb-8 w-full">
                  {[
                    "Tudo do Plano Básico",
                    "Acesso vitalício",
                    "Atualizações futuras inclusas"
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-center gap-3 text-primary font-bold text-sm uppercase tracking-tight">
                      <CheckCircle2 className="w-5 h-5 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <div className="mb-6 w-full mt-8">
                  <ul className="space-y-4 text-left w-full">
                    {[
                      { icon: "📅", text: "<b>Cardápio Natural Completo</b> — 7 Dias" },
                      { icon: "🥣", text: "<b>300 Receitas Naturais</b> Diversificadas" },
                      { icon: "⚖️", text: "<b>Calculadora Automática</b> de Porções" },
                      { icon: "🛒", text: "<b>Lista Inteligente</b> de Compras" },
                      { icon: "🚨", text: "<b>Guia VIP</b> de Sintomas de Alerta" },
                      { icon: "💬", text: "Acesso ao <b>Grupo VIP WhatsApp</b>" },
                      { icon: "🦴", text: "<b>Guia de Rotina Saudável</b> para Cães" },
                      { icon: "🎾", text: "Mini Guia de <b>Adestramento Fácil</b>" },
                      { icon: "💰", text: "Dicas para <b>economizar</b> na alimentação" },
                      { icon: "✅", text: "Lista completa do que <b>PODE e NÃO PODE</b>" }
                    ].map((item, idx) => (
                      <li key={idx} className="flex items-start gap-4 text-text-main font-medium py-0.5 group">
                        <span className="text-lg shrink-0 mt-0.5 group-hover:scale-125 transition-transform">{item.icon}</span>
                        <span dangerouslySetInnerHTML={{ __html: item.text }} className="text-sm md:text-base leading-tight" />
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-auto w-full pt-6 border-t border-gray-100">
                  <div className="mb-4 text-center">
                    <p className="text-text-secondary text-xs italic">🛡️ Garantia de 14 dias. Teste sem risco.</p>
                  </div>
                  
                    <Button 
                    variant="primary" 
                    className="w-full py-5 shadow-2xl flex items-center justify-center h-auto"
                    onClick={() => window.open(CHECKOUT_PREMIUM_URL, '_blank')}
                  >
                    <span className="text-lg md:text-xl uppercase">🔥 QUERO ACESSAR AGORA MESMO</span>
                  </Button>
                </div>
                
                <div className="mt-4 flex items-center justify-center gap-2 text-[9px] text-gray-400 font-bold uppercase tracking-widest">
                  <ShieldCheck className="w-3 h-3" />
                  Ambiente 100% Seguro e Criptografado
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 8. GUARANTEE */}
      <section className="py-16 md:py-24 bg-white relative overflow-hidden">
        <div className="container mx-auto px-4 max-w-4xl">
          <motion.div 
            {...fadeIn} 
            className="flex flex-col md:flex-row items-center gap-8 md:gap-16 text-center md:text-left"
          >
            <div className="relative shrink-0">
              <div className="relative w-32 h-32 md:w-44 md:h-44 bg-bg-alt rounded-full flex items-center justify-center text-6xl md:text-7xl border border-gray-100 shadow-sm">
                🛡️
              </div>
              <div className="absolute -bottom-2 -right-2 bg-primary text-white w-12 h-12 rounded-full flex items-center justify-center shadow-lg border-4 border-white">
                <CheckCircle2 className="w-6 h-6" />
              </div>
            </div>
            
            <div className="flex-1">
              <span className="inline-block px-4 py-1.5 bg-green-50 text-green-600 text-[11px] font-black uppercase tracking-widest rounded-full mb-6 border border-green-100">
                Garantia Incondicional • Risco Zero
              </span>
              <h3 className="font-display text-3xl md:text-5xl font-black text-text-main mb-6 leading-tight tracking-tighter uppercase italic">
                Sua satisfação <span className="text-primary">ou 100%</span> do seu dinheiro de volta
              </h3>
              <p className="text-lg md:text-xl text-text-secondary leading-relaxed font-medium">
                "Você tem <b className="text-text-main border-b-2 border-primary/30">14 dias inteiros</b> para testar todo o material. Se o seu cão não amar a nova comida ou se você não achar prático de verdade, nós devolvemos cada centavo via PIX ou estorno. Sem perguntas, sem letras miúdas."
              </p>
              
              <div className="mt-8 pt-8 border-t border-gray-100 flex flex-wrap items-center justify-center md:justify-start gap-6 opacity-60">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-green-500" />
                  <span className="text-xs font-black uppercase tracking-widest text-text-main">Certificado SSL</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-green-500" />
                  <span className="text-xs font-black uppercase tracking-widest text-text-main">Pagamento Seguro</span>
                </div>
              </div>
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
                QUERO O COMPLETO R$ 19,90
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

