<template>
  <section class="faq-section">
    <div class="faq-inner">
      <div class="faq-grid">

        <!-- Left: label -->
        <div class="faq-label-col">
          <p class="faq-label">Perguntas Frequentes</p>
          <h3 class="faq-heading">
            Dúvidas sobre a operação.<br />
            <em class="faq-heading-em">Respostas claras.</em>
          </h3>
        </div>

        <!-- Right: accordion -->
        <div class="faq-accordion">
          <div
            v-for="(item, idx) in faqs"
            :key="idx"
            class="faq-item"
            :class="{ 'faq-item--open': openIdx === idx }"
          >
            <button class="faq-trigger" @click="toggle(idx)">
              <span class="faq-question">{{ item.question }}</span>
              <svg
                xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                viewBox="0 0 24 24" fill="none" stroke="currentColor"
                stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                class="faq-chevron"
              >
                <path d="m6 9 6 6 6-6"/>
              </svg>
            </button>

            <div class="faq-body" :style="openIdx === idx
              ? 'max-height: 600px; opacity: 1; padding-bottom: 24px;'
              : 'max-height: 0; opacity: 0; padding-bottom: 0;'">
              <p class="faq-answer">{{ item.answer }}</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  </section>
</template>

<script>
import { ref, onMounted, onUnmounted } from 'vue'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default {
  name: 'FaqSection',
  setup() {
    const openIdx = ref(null)
    const toggle = (i) => { openIdx.value = openIdx.value === i ? null : i }
    const triggers = []

    onMounted(() => {
      const labelTween = gsap.fromTo(
        '.faq-heading',
        { opacity: 0, y: 45 },
        {
          opacity: 1,
          y: 0,
          duration: 2.4,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.faq-label-col',
            start: 'top 95%',
            once: true
          }
        }
      )
      if (labelTween.scrollTrigger) triggers.push(labelTween.scrollTrigger)

      const itemsTween = gsap.fromTo(
        '.faq-accordion .faq-item',
        { opacity: 0, y: 55 },
        {
          opacity: 1,
          y: 0,
          duration: 2.8,
          ease: 'power3.out',
          stagger: 0.18,
          scrollTrigger: {
            trigger: '.faq-accordion',
            start: 'top 95%',
            once: true
          }
        }
      )
      if (itemsTween.scrollTrigger) triggers.push(itemsTween.scrollTrigger)
    })

    onUnmounted(() => {
      triggers.forEach(t => t && t.kill())
    })

    const faqs = [
      {
        question: 'A ALADDIN usa o mesmo modelo operacional da BlackRock?',
        answer: 'Sim. A ALADDIN foi construída sobre o mesmo modelo operacional do sistema Aladdin da BlackRock, a plataforma de risco e portfólio que hoje administra mais de US$ 21 trilhões em ativos globais. Replicamos a lógica central: uma inteligência única que enxerga o mercado de ponta a ponta, cruza múltiplas camadas de análise em tempo real e entrega decisão objetiva. A diferença é o público. Onde a BlackRock atende gestores institucionais, a ALADDIN traz esse mesmo padrão operacional para o trader individual, com foco em análise técnica de elite acessível.',
      },
      {
        question: 'Qual é a assertividade da IA?',
        answer: 'Nos backtests internos sobre confluências fortes (3 ou mais estratégias alinhadas: SMC + Wyckoff + Price Action, por exemplo), a taxa de acerto média gira entre 78% e 92%, dependendo do mercado e timeframe. Vale lembrar: nenhuma IA é 100%. O diferencial está em gestão de risco. Entrada, stop e alvo são calculados para que o retorno positivo supere o negativo no longo prazo.',
      },
      {
        question: 'Quantas análises eu posso fazer por dia ou semana?',
        answer: 'O acesso à ALADDIN é vitalício. No plano Premium, você desbloqueia um operacional muito mais avançado e assertivo, com leitura institucional de elite, maior profundidade de análise e prioridade de processamento. Recomendamos focar em 2 a 5 análises de alta qualidade por sessão, em vez de muitas análises rasas.',
      },
      {
        question: 'O que são confluências e por que isso importa?',
        answer: 'Confluência é quando várias estratégias técnicas independentes apontam para a mesma conclusão no mesmo ponto do gráfico. Se SMC indica order block de compra, Wyckoff indica acumulação, RSI mostra divergência altista e Price Action confirma com pin bar, você tem 4 confluências. Quanto mais confluências, maior a probabilidade do setup dar certo. A ALADDIN cruza tudo automaticamente.',
      },
      {
        question: 'Quais estratégias a IA realmente usa?',
        answer: 'Cinco pilares institucionais: SMC (Smart Money Concepts) para mapear o que os grandes players estão fazendo; Wyckoff para identificar fases de acumulação e distribuição; Price Action puro para confirmar com a vela; RSI para divergências e momentum; e Ondas de Elliott para enxergar a estrutura macro de tendência. Todas trabalhando ao mesmo tempo, na mesma análise.',
      },
      {
        question: 'A IA funciona para qualquer mercado?',
        answer: 'Sim. Criptomoedas, Forex, Índices (S&P, Nasdaq, Ibovespa), Commodities (ouro, petróleo) e Ações americanas e brasileiras. O motor é o mesmo. O que muda é o contexto que ele aplica em cada classe de ativo. Cripto exige leitura de liquidez 24/7; Forex precisa de killzones de sessões; índices pedem correlação macro. A IA ajusta tudo isso automaticamente.',
      },
      {
        question: 'Como a ALADDIN é validada no mercado real?',
        answer: 'Cada nova versão passa por backtests em milhares de setups históricos antes de ir para produção. Além disso, mantemos um histórico transparente de análises dentro da plataforma. Você consegue revisar setups passados e ver o que funcionou, o que falhou e por quê. Não vendemos promessas, vendemos um sistema auditável.',
      },
      {
        question: 'Preciso saber análise técnica para usar?',
        answer: 'Não precisa ser expert, mas entender o básico ajuda muito. A IA entrega o setup completo (entrada, stop, alvo, justificativa), mas a decisão de operar é sua. Quanto mais você entender o porquê de cada sinal, melhor vai gerenciar suas operações. Temos materiais e perspectives para acelerar seu aprendizado.',
      },
      {
        question: 'A IA substitui o trader?',
        answer: 'Não. A IA substitui as horas de análise técnica manual, não a sua disciplina, gestão de banca ou psicologia. Ela é uma copilota institucional: faz o trabalho pesado de leitura do gráfico e te entrega clareza. A decisão, a execução e o risco continuam sendo seus. Pense nela como um analista sênior disponível 24h.',
      },
      {
        question: 'Meus dados e estratégias ficam seguros?',
        answer: 'Sim. Não armazenamos sua corretora, não acessamos sua carteira e não executamos ordens por você. Você envia o print do gráfico ou seleciona o ativo, a IA processa, te devolve o sinal. Fim. Toda a infraestrutura roda em servidores criptografados e o histórico das suas análises é privado, vinculado apenas à sua conta.',
      },
    ]

    return { faqs, openIdx, toggle }
  }
}
</script>

<style scoped>
/* ── Section ──────────────────────────── */
.faq-section {
  background: linear-gradient(180deg, #030712 0%, #030712 85%, #071126 100%);
  border-top: none;
  padding: 6rem 40px;
}
@media (min-width: 768px) { 
  .faq-section { padding: 8rem 40px; } 
}

.faq-inner { width: 100%; }

/* ── Two-column grid ──────────────────── */
.faq-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 2.5rem;
}
@media (min-width: 768px) {
  .faq-grid {
    grid-template-columns: 1fr 2.5fr;
    gap: 5rem;
    align-items: start;
  }
}

/* ── Left label ───────────────────────── */
.faq-label-col {
  padding-top: 0.5rem;
}

.faq-heading {
  font-family: var(--font-sans);
  font-size: clamp(2rem, 4vw, 3.75rem);
  font-weight: 300;
  letter-spacing: -0.02em;
  line-height: 1.1;
  color: rgba(255, 255, 255, 0.9);
  margin-top: 1.5rem;
}

.faq-heading-em {
  font-style: italic;
  font-weight: 400;
  color: hsl(var(--primary));
}

/* ── Accordion ────────────────────────── */
.faq-accordion {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.faq-item {
  background: rgba(7, 17, 38, 0.6);
  backdrop-filter: blur(12px);
  border-radius: 16px;
  border: 1px solid rgba(255, 255, 255, 0.05);
  overflow: hidden;
  transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
}

.faq-item:hover {
  border-color: rgba(59, 130, 246, 0.3);
  background: rgba(7, 17, 38, 0.8);
}

.faq-item--open {
  border-color: rgba(34, 211, 238, 0.5);
  box-shadow: 0 0 30px -5px rgba(34, 211, 238, 0.15), inset 0 0 10px rgba(34, 211, 238, 0.05);
  background: rgba(34, 211, 238, 0.03);
}

/* Trigger button */
.faq-trigger {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  padding: 24px;
  background: none;
  border: none;
  cursor: pointer;
  text-align: left;
}

.faq-question {
  font-family: var(--font-sans);
  font-size: 0.875rem;
  font-weight: 400;
  color: hsl(var(--foreground));
  line-height: 1.5;
  flex: 1;
  padding-right: 1rem;
  transition: color 0.2s;
}
@media (min-width: 640px) { .faq-question { font-size: 1rem; } }

.faq-item:hover .faq-question { color: hsl(var(--primary)); }

/* Chevron */
.faq-chevron {
  flex-shrink: 0;
  color: hsl(var(--muted-foreground));
  transition: transform 0.25s cubic-bezier(0.16, 1, 0.3, 1), color 0.2s;
  width: 1rem;
  height: 1rem;
}
.faq-item--open .faq-chevron {
  transform: rotate(180deg);
  color: hsl(var(--primary));
}

/* Answer body */
.faq-body {
  padding: 0 24px;
  overflow: hidden;
  transition: max-height 0.35s cubic-bezier(0.16, 1, 0.3, 1),
              opacity 0.3s ease,
              padding-bottom 0.3s ease;
}

.faq-answer {
  font-size: 0.875rem;
  color: hsl(var(--muted-foreground));
  font-weight: 300;
  line-height: 1.75;
  padding-right: 1rem;
}
@media (min-width: 640px) { .faq-answer { font-size: 0.9375rem; } }

/* GSAP Initial state hiding to prevent FOUC */
.faq-label,
.faq-item {
  opacity: 0;
}
</style>
