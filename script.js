// ===== LANGUAGE STATE =====
let currentLang = 'it';
let currentTab = 'all';
let currentDiff = 'all';
let solvedSet = new Set(JSON.parse(localStorage.getItem('solved') || '[]'));

// ===== TRANSLATIONS =====
const T = {
  it: {
    hero_title: "Matematica STEM — Problemi & Soluzioni",
    hero_sub: "Raccolta universitaria di problemi risolti per studenti di Ingegneria, Informatica e Scienze. Copertura completa dell'anno accademico.",
    problems_label: "Problemi",
    subjects_label: "Materie",
    coverage_label: "Copertura Semestrale",
    tab_all: "Tutti",
    tab_a1: "Analisi I",
    tab_la: "Algebra Lineare",
    tab_prob: "Probabilità",
    tab_edo: "Eq. Differenziali",
    tab_a2: "Analisi II",
    filter_label: "Difficoltà:",
    diff_all: "Tutte",
    diff_easy: "Base",
    diff_med: "Media",
    diff_hard: "Avanzata",
    hint_label: "💡 Suggerimento",
    show_sol: "▶ Mostra Soluzione",
    hide_sol: "▼ Nascondi Soluzione",
    problem_label: "Problema",
    solution_label: "Soluzione",
    answer_label: "Risposta Finale",
    mark_solved: "Segna come risolto",
    mark_unsolved: "Segna come non risolto",
    progress_title: "📊 Il Tuo Progresso",
    formula_ref_title: "📐 Formulario di Riferimento",
    search_ph: "Cerca problema...",
    search_results: "risultati per",
    no_results: "Nessun problema trovato",
    no_results_sub: "Prova con un altro termine di ricerca",
    section_desc: {
      all: "Tutti i problemi del corso",
      a1: "Limiti, derivate, integrali, serie — Primo semestre",
      la: "Vettori, matrici, sistemi lineari, autovalori — Primo semestre",
      prob: "Probabilità discreta e continua, variabili aleatorie — Secondo semestre",
      edo: "Equazioni differenziali ordinarie e sistemi — Secondo semestre",
      a2: "Integrali multipli, serie di Fourier, funzioni di più variabili — Secondo semestre"
    },
    badge: "Raccolta Semestrale Completa",
    footer_desc: "Raccolta di problemi universitari STEM. Tutti i problemi includono soluzioni dettagliate passo-passo.",
    subjects_covered: "Materie Coperte",
    step: "Passo"
  },
  en: {
    hero_title: "STEM Mathematics — Problems & Solutions",
    hero_sub: "University-level solved problems for Engineering, Computer Science and Natural Sciences. Full academic year coverage.",
    problems_label: "Problems",
    subjects_label: "Subjects",
    coverage_label: "Semester Coverage",
    tab_all: "All",
    tab_a1: "Calculus I",
    tab_la: "Linear Algebra",
    tab_prob: "Probability",
    tab_edo: "Diff. Equations",
    tab_a2: "Calculus II",
    filter_label: "Difficulty:",
    diff_all: "All",
    diff_easy: "Basic",
    diff_med: "Medium",
    diff_hard: "Advanced",
    hint_label: "💡 Hint",
    show_sol: "▶ Show Solution",
    hide_sol: "▼ Hide Solution",
    problem_label: "Problem",
    solution_label: "Solution",
    answer_label: "Final Answer",
    mark_solved: "Mark as solved",
    mark_unsolved: "Mark as unsolved",
    progress_title: "📊 Your Progress",
    formula_ref_title: "📐 Formula Reference Sheet",
    search_ph: "Search problems...",
    search_results: "results for",
    no_results: "No problems found",
    no_results_sub: "Try a different search term",
    section_desc: {
      all: "All course problems",
      a1: "Limits, derivatives, integrals, series — First semester",
      la: "Vectors, matrices, linear systems, eigenvalues — First semester",
      prob: "Discrete and continuous probability, random variables — Second semester",
      edo: "Ordinary differential equations and systems — Second semester",
      a2: "Multiple integrals, Fourier series, multivariable functions — Second semester"
    },
    badge: "Full Semester Collection",
    footer_desc: "University STEM problem collection. All problems include detailed step-by-step solutions.",
    subjects_covered: "Subjects Covered",
    step: "Step"
  }
};

// ===== SUBJECTS CONFIG =====
const SUBJECTS = [
  { id: 'all',  color: '#d4a843', icon: '∑' },
  { id: 'a1',   color: '#388bfd', icon: '∂' },
  { id: 'la',   color: '#2ea043', icon: '⊕' },
  { id: 'prob', color: '#a371f7', icon: 'σ' },
  { id: 'edo',  color: '#da3633', icon: '∫' },
  { id: 'a2',   color: '#e3b341', icon: '∇' },
];

// ===== PROBLEMS DATA =====
const PROBLEMS = [
  // ==============================
  // ANALISI I (a1)
  // ==============================
  {
    id: 'a1-01', subject: 'a1', diff: 'easy',
    title: { it: 'Limite fondamentale con sen(x)/x', en: 'Fundamental limit: sin(x)/x' },
    tags: { it: ['Limiti', 'Teorema fondamentale'], en: ['Limits', 'Fundamental theorem'] },
    problem: {
      it: 'Calcola il seguente limite:\n\\[\\lim_{x \\to 0} \\frac{\\sin(3x)}{5x}\\]\nMotiva ogni passaggio.',
      en: 'Compute the following limit:\n\\[\\lim_{x \\to 0} \\frac{\\sin(3x)}{5x}\\]\nJustify every step.'
    },
    hint: {
      it: 'Usa la sostituzione \\(t = 3x\\) e il limite notevole \\(\\lim_{t\\to 0}\\frac{\\sin t}{t} = 1\\).',
      en: 'Use the substitution \\(t = 3x\\) and the standard limit \\(\\lim_{t\\to 0}\\frac{\\sin t}{t} = 1\\).'
    },
    steps: {
      it: [
        { title: 'Riscrittura algebrica', body: 'Moltiplichiamo e dividiamo per 3:\n\\[\\frac{\\sin(3x)}{5x} = \\frac{3}{5} \\cdot \\frac{\\sin(3x)}{3x}\\]' },
        { title: 'Sostituzione', body: 'Poniamo \\(t = 3x\\). Quando \\(x \\to 0\\), anche \\(t \\to 0\\):\n\\[\\frac{3}{5} \\cdot \\frac{\\sin t}{t}\\]' },
        { title: 'Limite notevole', body: 'Applichiamo il limite fondamentale:\n\\[\\lim_{t \\to 0}\\frac{\\sin t}{t} = 1\\]' },
        { title: 'Conclusione', body: '\\[\\lim_{x \\to 0} \\frac{\\sin(3x)}{5x} = \\frac{3}{5} \\cdot 1 = \\frac{3}{5}\\]' }
      ],
      en: [
        { title: 'Algebraic rewriting', body: 'Multiply and divide by 3:\n\\[\\frac{\\sin(3x)}{5x} = \\frac{3}{5} \\cdot \\frac{\\sin(3x)}{3x}\\]' },
        { title: 'Substitution', body: 'Set \\(t = 3x\\). As \\(x \\to 0\\), also \\(t \\to 0\\):\n\\[\\frac{3}{5} \\cdot \\frac{\\sin t}{t}\\]' },
        { title: 'Standard limit', body: 'Apply the fundamental limit:\n\\[\\lim_{t \\to 0}\\frac{\\sin t}{t} = 1\\]' },
        { title: 'Conclusion', body: '\\[\\lim_{x \\to 0} \\frac{\\sin(3x)}{5x} = \\frac{3}{5} \\cdot 1 = \\frac{3}{5}\\]' }
      ]
    },
    answer: { it: '\\(\\dfrac{3}{5}\\)', en: '\\(\\dfrac{3}{5}\\)' }
  },
  {
    id: 'a1-02', subject: 'a1', diff: 'medium',
    title: { it: 'Limite con forma indeterminata ∞/∞', en: 'Limit with ∞/∞ indeterminate form' },
    tags: { it: ['Limiti', 'Regola di de l\'Hôpital'], en: ['Limits', 'L\'Hôpital\'s rule'] },
    problem: {
      it: 'Calcola il limite:\n\\[\\lim_{x \\to +\\infty} \\frac{3x^2 - 2x + 1}{x^2 + 5x - 3}\\]',
      en: 'Compute the limit:\n\\[\\lim_{x \\to +\\infty} \\frac{3x^2 - 2x + 1}{x^2 + 5x - 3}\\]'
    },
    hint: {
      it: 'Dividi numeratore e denominatore per il grado massimo del denominatore, cioè \\(x^2\\).',
      en: 'Divide both numerator and denominator by the highest power, \\(x^2\\).'
    },
    steps: {
      it: [
        { title: 'Identificazione della forma', body: 'Per \\(x\\to+\\infty\\): numeratore \\(\\to+\\infty\\), denominatore \\(\\to+\\infty\\). Forma \\(\\frac{\\infty}{\\infty}\\).' },
        { title: 'Divisione per \\(x^2\\)', body: '\\[\\frac{3x^2-2x+1}{x^2+5x-3} = \\frac{3 - \\frac{2}{x} + \\frac{1}{x^2}}{1 + \\frac{5}{x} - \\frac{3}{x^2}}\\]' },
        { title: 'Passaggio al limite', body: 'I termini \\(\\frac{1}{x},\\frac{1}{x^2}\\to 0\\) per \\(x\\to+\\infty\\):\n\\[\\frac{3-0+0}{1+0-0} = 3\\]' }
      ],
      en: [
        { title: 'Form identification', body: 'As \\(x\\to+\\infty\\): numerator \\(\\to+\\infty\\), denominator \\(\\to+\\infty\\). Form \\(\\frac{\\infty}{\\infty}\\).' },
        { title: 'Divide by \\(x^2\\)', body: '\\[\\frac{3x^2-2x+1}{x^2+5x-3} = \\frac{3 - \\frac{2}{x} + \\frac{1}{x^2}}{1 + \\frac{5}{x} - \\frac{3}{x^2}}\\]' },
        { title: 'Taking the limit', body: 'Terms \\(\\frac{1}{x},\\frac{1}{x^2}\\to 0\\) as \\(x\\to+\\infty\\):\n\\[\\frac{3-0+0}{1+0-0} = 3\\]' }
      ]
    },
    answer: { it: '\\(3\\)', en: '\\(3\\)' }
  },
  {
    id: 'a1-03', subject: 'a1', diff: 'medium',
    title: { it: 'Derivata con regola della catena', en: 'Chain rule derivative' },
    tags: { it: ['Derivate', 'Regola della catena'], en: ['Derivatives', 'Chain rule'] },
    problem: {
      it: 'Calcola la derivata della funzione:\n\\[f(x) = \\sin^3(x^2 + 1)\\]',
      en: 'Find the derivative of:\n\\[f(x) = \\sin^3(x^2 + 1)\\]'
    },
    hint: {
      it: 'Applica la regola della catena due volte: prima su \\(u^3\\) e poi su \\(\\sin(v)\\).',
      en: 'Apply the chain rule twice: first on \\(u^3\\), then on \\(\\sin(v)\\).'
    },
    steps: {
      it: [
        { title: 'Scomposizione delle funzioni', body: 'Poniamo \\(u = \\sin(x^2+1)\\), quindi \\(f = u^3\\).' },
        { title: 'Prima applicazione della catena', body: '\\[f\'(x) = 3u^2 \\cdot u\' = 3\\sin^2(x^2+1) \\cdot \\frac{d}{dx}\\sin(x^2+1)\\]' },
        { title: 'Derivata di \\(\\sin(x^2+1)\\)', body: '\\[\\frac{d}{dx}\\sin(x^2+1) = \\cos(x^2+1)\\cdot 2x\\]' },
        { title: 'Risultato finale', body: '\\[f\'(x) = 3\\sin^2(x^2+1)\\cdot\\cos(x^2+1)\\cdot 2x = 6x\\sin^2(x^2+1)\\cos(x^2+1)\\]' }
      ],
      en: [
        { title: 'Function decomposition', body: 'Let \\(u = \\sin(x^2+1)\\), so \\(f = u^3\\).' },
        { title: 'First chain rule step', body: '\\[f\'(x) = 3u^2 \\cdot u\' = 3\\sin^2(x^2+1) \\cdot \\frac{d}{dx}\\sin(x^2+1)\\]' },
        { title: 'Derivative of \\(\\sin(x^2+1)\\)', body: '\\[\\frac{d}{dx}\\sin(x^2+1) = \\cos(x^2+1)\\cdot 2x\\]' },
        { title: 'Final result', body: '\\[f\'(x) = 3\\sin^2(x^2+1)\\cdot\\cos(x^2+1)\\cdot 2x = 6x\\sin^2(x^2+1)\\cos(x^2+1)\\]' }
      ]
    },
    answer: { it: '\\(f\'(x) = 6x\\sin^2(x^2+1)\\cos(x^2+1)\\)', en: '\\(f\'(x) = 6x\\sin^2(x^2+1)\\cos(x^2+1)\\)' }
  },
  {
    id: 'a1-04', subject: 'a1', diff: 'medium',
    title: { it: 'Integrale per parti', en: 'Integration by parts' },
    tags: { it: ['Integrali', 'Per parti'], en: ['Integrals', 'By parts'] },
    problem: {
      it: 'Calcola l\'integrale:\n\\[\\int x e^{2x}\\,dx\\]',
      en: 'Compute the integral:\n\\[\\int x e^{2x}\\,dx\\]'
    },
    hint: {
      it: 'Formula: \\(\\int u\\,dv = uv - \\int v\\,du\\). Scegli \\(u = x\\) e \\(dv = e^{2x}dx\\).',
      en: 'Formula: \\(\\int u\\,dv = uv - \\int v\\,du\\). Choose \\(u = x\\) and \\(dv = e^{2x}dx\\).'
    },
    steps: {
      it: [
        { title: 'Scelta di u e dv', body: '\\(u = x \\Rightarrow du = dx\\)\n\\(dv = e^{2x}dx \\Rightarrow v = \\frac{e^{2x}}{2}\\)' },
        { title: 'Applicazione della formula', body: '\\[\\int xe^{2x}dx = x\\cdot\\frac{e^{2x}}{2} - \\int \\frac{e^{2x}}{2}\\,dx\\]' },
        { title: 'Calcolo dell\'integrale rimanente', body: '\\[\\int \\frac{e^{2x}}{2}\\,dx = \\frac{e^{2x}}{4}\\]' },
        { title: 'Risultato', body: '\\[\\int xe^{2x}dx = \\frac{xe^{2x}}{2} - \\frac{e^{2x}}{4} + C = \\frac{e^{2x}(2x-1)}{4} + C\\]' }
      ],
      en: [
        { title: 'Choose u and dv', body: '\\(u = x \\Rightarrow du = dx\\)\n\\(dv = e^{2x}dx \\Rightarrow v = \\frac{e^{2x}}{2}\\)' },
        { title: 'Apply the formula', body: '\\[\\int xe^{2x}dx = x\\cdot\\frac{e^{2x}}{2} - \\int \\frac{e^{2x}}{2}\\,dx\\]' },
        { title: 'Remaining integral', body: '\\[\\int \\frac{e^{2x}}{2}\\,dx = \\frac{e^{2x}}{4}\\]' },
        { title: 'Result', body: '\\[\\int xe^{2x}dx = \\frac{xe^{2x}}{2} - \\frac{e^{2x}}{4} + C = \\frac{e^{2x}(2x-1)}{4} + C\\]' }
      ]
    },
    answer: { it: '\\(\\dfrac{e^{2x}(2x-1)}{4} + C\\)', en: '\\(\\dfrac{e^{2x}(2x-1)}{4} + C\\)' }
  },
  {
    id: 'a1-05', subject: 'a1', diff: 'hard',
    title: { it: 'Studio completo di funzione', en: 'Complete function analysis' },
    tags: { it: ['Derivate', 'Studio di funzione', 'Esame'], en: ['Derivatives', 'Function analysis', 'Exam'] },
    exam: true,
    problem: {
      it: 'Data \\(f(x) = \\dfrac{x^2 - 1}{x^2 + 1}\\), determina: dominio, asintoti, monotonia, massimi/minimi locali e schizzo del grafico.',
      en: 'Given \\(f(x) = \\dfrac{x^2-1}{x^2+1}\\), determine: domain, asymptotes, monotonicity, local max/min and sketch the graph.'
    },
    hint: {
      it: 'Osserva che \\(f(x) = 1 - \\frac{2}{x^2+1}\\). Il denominatore \\(x^2+1>0\\) sempre.',
      en: 'Notice \\(f(x) = 1 - \\frac{2}{x^2+1}\\). The denominator \\(x^2+1>0\\) always.'
    },
    steps: {
      it: [
        { title: 'Dominio', body: 'Poiché \\(x^2+1\\geq 1 > 0\\) per ogni \\(x\\in\\mathbb{R}\\), il dominio è \\(\\mathbb{R}\\). La funzione è continua ovunque.' },
        { title: 'Asintoti', body: 'Orizzontale: \\(\\lim_{x\\to\\pm\\infty}f(x) = \\lim_{x\\to\\pm\\infty}\\frac{x^2-1}{x^2+1} = 1\\). Asintoto \\(y=1\\).\nVerticali: assenti (funzione continua su \\(\\mathbb{R}\\)).' },
        { title: 'Prima derivata', body: '\\[f\'(x) = \\frac{2x(x^2+1) - (x^2-1)\\cdot 2x}{(x^2+1)^2} = \\frac{4x}{(x^2+1)^2}\\]' },
        { title: 'Monotonia e punti critici', body: '\\(f\'(x)=0 \\Leftrightarrow x=0\\).\n- \\(x<0\\): \\(f\'<0\\) — decrescente\n- \\(x>0\\): \\(f\'>0\\) — crescente\n\nMinimo locale in \\(x=0\\) con \\(f(0)=-1\\).' },
        { title: 'Simmetria e range', body: '\\(f(-x)=f(x)\\): funzione pari. \\(\\text{Im}(f) = [-1,1)\\) perché \\(f(0)=-1\\) e \\(f\\to 1^-\\) mai raggiunto.' }
      ],
      en: [
        { title: 'Domain', body: 'Since \\(x^2+1\\geq 1 > 0\\) for all \\(x\\in\\mathbb{R}\\), the domain is \\(\\mathbb{R}\\).' },
        { title: 'Asymptotes', body: 'Horizontal: \\(\\lim_{x\\to\\pm\\infty}f(x) = 1\\). Asymptote \\(y=1\\).\nVertical: none (function continuous on \\(\\mathbb{R}\\)).' },
        { title: 'First derivative', body: '\\[f\'(x) = \\frac{2x(x^2+1) - (x^2-1)\\cdot 2x}{(x^2+1)^2} = \\frac{4x}{(x^2+1)^2}\\]' },
        { title: 'Monotonicity and critical points', body: '\\(f\'(x)=0 \\Leftrightarrow x=0\\).\n- \\(x<0\\): \\(f\'<0\\) — decreasing\n- \\(x>0\\): \\(f\'>0\\) — increasing\n\nLocal minimum at \\(x=0\\), \\(f(0)=-1\\).' },
        { title: 'Symmetry and range', body: '\\(f(-x)=f(x)\\): even function. \\(\\text{Range} = [-1,1)\\) since \\(f(0)=-1\\) and \\(f\\to 1\\) never reached.' }
      ]
    },
    answer: { it: 'Min globale \\(f(0)=-1\\); asintoto \\(y=1\\); funzione pari; crescente su \\((0,+\\infty)\\)', en: 'Global min \\(f(0)=-1\\); asymptote \\(y=1\\); even function; increasing on \\((0,+\\infty)\\)' }
  },
  {
    id: 'a1-06', subject: 'a1', diff: 'hard',
    title: { it: 'Serie di Taylor e sviluppo di McLaurin', en: 'Taylor series and McLaurin expansion' },
    tags: { it: ['Serie', 'Taylor', 'McLaurin'], en: ['Series', 'Taylor', 'McLaurin'] },
    problem: {
      it: 'Trova lo sviluppo di McLaurin di \\(f(x) = e^x \\cos(x)\\) fino al termine di ordine 4.',
      en: 'Find the McLaurin expansion of \\(f(x) = e^x \\cos(x)\\) up to order 4.'
    },
    hint: {
      it: 'Usa gli sviluppi noti di \\(e^x\\) e \\(\\cos x\\) e moltiplica le serie troncando all\'ordine 4.',
      en: 'Use the known expansions of \\(e^x\\) and \\(\\cos x\\) then multiply truncating at order 4.'
    },
    steps: {
      it: [
        { title: 'Sviluppi noti', body: '\\[e^x = 1 + x + \\frac{x^2}{2} + \\frac{x^3}{6} + \\frac{x^4}{24} + O(x^5)\\]\n\\[\\cos x = 1 - \\frac{x^2}{2} + \\frac{x^4}{24} + O(x^6)\\]' },
        { title: 'Prodotto delle serie', body: '\\[e^x\\cos x = \\left(1+x+\\frac{x^2}{2}+\\frac{x^3}{6}+\\frac{x^4}{24}\\right)\\left(1-\\frac{x^2}{2}+\\frac{x^4}{24}\\right)+O(x^5)\\]' },
        { title: 'Calcolo termine per termine', body: 'Raccogliendo per grado:\n- Grado 0: \\(1\\)\n- Grado 1: \\(x\\)\n- Grado 2: \\(\\frac{x^2}{2}-\\frac{x^2}{2}=0\\)\n- Grado 3: \\(\\frac{x^3}{6}-\\frac{x^3}{2}=-\\frac{x^3}{3}\\)\n- Grado 4: \\(\\frac{x^4}{24}-\\frac{x^4}{4}+\\frac{x^4}{24}=-\\frac{x^4}{6}\\)' },
        { title: 'Risultato', body: '\\[e^x\\cos x = 1 + x - \\frac{x^3}{3} - \\frac{x^4}{6} + O(x^5)\\]' }
      ],
      en: [
        { title: 'Known expansions', body: '\\[e^x = 1 + x + \\frac{x^2}{2} + \\frac{x^3}{6} + \\frac{x^4}{24} + O(x^5)\\]\n\\[\\cos x = 1 - \\frac{x^2}{2} + \\frac{x^4}{24} + O(x^6)\\]' },
        { title: 'Product of series', body: '\\[e^x\\cos x = \\left(1+x+\\frac{x^2}{2}+\\frac{x^3}{6}+\\frac{x^4}{24}\\right)\\left(1-\\frac{x^2}{2}+\\frac{x^4}{24}\\right)+O(x^5)\\]' },
        { title: 'Term-by-term computation', body: 'Collecting by degree:\n- Degree 0: \\(1\\)\n- Degree 1: \\(x\\)\n- Degree 2: \\(\\frac{x^2}{2}-\\frac{x^2}{2}=0\\)\n- Degree 3: \\(\\frac{x^3}{6}-\\frac{x^3}{2}=-\\frac{x^3}{3}\\)\n- Degree 4: \\(\\frac{x^4}{24}-\\frac{x^4}{4}+\\frac{x^4}{24}=-\\frac{x^4}{6}\\)' },
        { title: 'Result', body: '\\[e^x\\cos x = 1 + x - \\frac{x^3}{3} - \\frac{x^4}{6} + O(x^5)\\]' }
      ]
    },
    answer: { it: '\\(1 + x - \\dfrac{x^3}{3} - \\dfrac{x^4}{6} + O(x^5)\\)', en: '\\(1 + x - \\dfrac{x^3}{3} - \\dfrac{x^4}{6} + O(x^5)\\)' }
  },
  {
    id: 'a1-07', subject: 'a1', diff: 'medium',
    title: { it: 'Integrale definito e area', en: 'Definite integral and area' },
    tags: { it: ['Integrali definiti', 'Geometria'], en: ['Definite integrals', 'Geometry'] },
    problem: {
      it: 'Calcola l\'area della regione delimitata da \\(f(x)=x^2\\) e \\(g(x)=2x\\) nel loro intervallo di intersezione.',
      en: 'Find the area enclosed between \\(f(x)=x^2\\) and \\(g(x)=2x\\) on their intersection interval.'
    },
    hint: {
      it: 'Prima trova i punti di intersezione risolvendo \\(x^2=2x\\), poi integra \\(|g(x)-f(x)|\\).',
      en: 'First find the intersection points by solving \\(x^2=2x\\), then integrate \\(|g(x)-f(x)|\\).'
    },
    steps: {
      it: [
        { title: 'Punti di intersezione', body: '\\(x^2=2x \\Rightarrow x^2-2x=0 \\Rightarrow x(x-2)=0\\)\nPunti: \\(x=0\\) e \\(x=2\\).' },
        { title: 'Qual è superiore?', body: 'In \\((0,2)\\): \\(g(1)=2 > f(1)=1\\), quindi \\(g(x)\\geq f(x)\\).' },
        { title: 'Calcolo dell\'area', body: '\\[A = \\int_0^2 [g(x)-f(x)]\\,dx = \\int_0^2 (2x-x^2)\\,dx\\]' },
        { title: 'Integrazione', body: '\\[= \\left[x^2 - \\frac{x^3}{3}\\right]_0^2 = \\left(4-\\frac{8}{3}\\right)-0 = \\frac{4}{3}\\]' }
      ],
      en: [
        { title: 'Intersection points', body: '\\(x^2=2x \\Rightarrow x(x-2)=0\\)\nPoints: \\(x=0\\) and \\(x=2\\).' },
        { title: 'Which is on top?', body: 'On \\((0,2)\\): \\(g(1)=2 > f(1)=1\\), so \\(g(x)\\geq f(x)\\).' },
        { title: 'Area calculation', body: '\\[A = \\int_0^2 [g(x)-f(x)]\\,dx = \\int_0^2 (2x-x^2)\\,dx\\]' },
        { title: 'Integration', body: '\\[= \\left[x^2 - \\frac{x^3}{3}\\right]_0^2 = \\left(4-\\frac{8}{3}\\right) = \\frac{4}{3}\\]' }
      ]
    },
    answer: { it: '\\(A = \\dfrac{4}{3}\\) unità quadrate', en: '\\(A = \\dfrac{4}{3}\\) square units' }
  },
  {
    id: 'a1-08', subject: 'a1', diff: 'hard',
    title: { it: 'Convergenza di serie numerica', en: 'Convergence of a numerical series' },
    tags: { it: ['Serie numeriche', 'Criteri di convergenza'], en: ['Numerical series', 'Convergence tests'] },
    exam: true,
    problem: {
      it: 'Studia la convergenza della serie:\n\\[\\sum_{n=1}^{+\\infty} \\frac{n^2}{3^n}\\]',
      en: 'Study the convergence of the series:\n\\[\\sum_{n=1}^{+\\infty} \\frac{n^2}{3^n}\\]'
    },
    hint: {
      it: 'Applica il criterio del rapporto (d\'Alembert): calcola \\(\\lim_{n\\to\\infty}\\left|\\frac{a_{n+1}}{a_n}\\right|\\).',
      en: 'Apply the ratio test (d\'Alembert): compute \\(\\lim_{n\\to\\infty}\\left|\\frac{a_{n+1}}{a_n}\\right|\\).'
    },
    steps: {
      it: [
        { title: 'Impostazione del criterio del rapporto', body: 'Con \\(a_n = \\frac{n^2}{3^n}\\):\n\\[\\frac{a_{n+1}}{a_n} = \\frac{(n+1)^2}{3^{n+1}}\\cdot\\frac{3^n}{n^2} = \\frac{(n+1)^2}{3n^2}\\]' },
        { title: 'Calcolo del limite', body: '\\[L = \\lim_{n\\to\\infty}\\frac{(n+1)^2}{3n^2} = \\frac{1}{3}\\lim_{n\\to\\infty}\\left(1+\\frac{1}{n}\\right)^2 = \\frac{1}{3}\\]' },
        { title: 'Conclusione', body: 'Poiché \\(L = \\frac{1}{3} < 1\\), per il criterio del rapporto la serie **converge**.' },
        { title: 'Calcolo del valore (bonus)', body: 'Usando la formula delle serie di potenze: \\(\\sum_{n=1}^\\infty n^2 x^n = \\frac{x(1+x)}{(1-x)^3}\\).\nPer \\(x=\\frac{1}{3}\\): \\(\\frac{\\frac{1}{3}\\cdot\\frac{4}{3}}{\\left(\\frac{2}{3}\\right)^3} = \\frac{\\frac{4}{9}}{\\frac{8}{27}} = \\frac{3}{2}\\)' }
      ],
      en: [
        { title: 'Ratio test setup', body: 'With \\(a_n = \\frac{n^2}{3^n}\\):\n\\[\\frac{a_{n+1}}{a_n} = \\frac{(n+1)^2}{3^{n+1}}\\cdot\\frac{3^n}{n^2} = \\frac{(n+1)^2}{3n^2}\\]' },
        { title: 'Compute the limit', body: '\\[L = \\lim_{n\\to\\infty}\\frac{(n+1)^2}{3n^2} = \\frac{1}{3}\\lim_{n\\to\\infty}\\left(1+\\frac{1}{n}\\right)^2 = \\frac{1}{3}\\]' },
        { title: 'Conclusion', body: 'Since \\(L = \\frac{1}{3} < 1\\), by the ratio test the series **converges**.' },
        { title: 'Sum value (bonus)', body: 'Using power series formula \\(\\sum n^2 x^n = \\frac{x(1+x)}{(1-x)^3}\\) at \\(x=\\frac{1}{3}\\): value \\(= \\frac{3}{2}\\)' }
      ]
    },
    answer: { it: 'La serie **converge** a \\(\\dfrac{3}{2}\\)', en: 'The series **converges** to \\(\\dfrac{3}{2}\\)' }
  },
  {
    id: 'a1-09', subject: 'a1', diff: 'easy',
    title: { it: 'Teorema di Lagrange (valor medio)', en: 'Lagrange Mean Value Theorem' },
    tags: { it: ['Teoremi fondamentali', 'Derivate'], en: ['Fundamental theorems', 'Derivatives'] },
    problem: {
      it: 'Verifica che \\(f(x)=x^3-3x+2\\) soddisfi le ipotesi del teorema di Lagrange su \\([0,2]\\) e trova il punto \\(c\\) garantito dal teorema.',
      en: 'Verify that \\(f(x)=x^3-3x+2\\) satisfies the hypotheses of Lagrange\'s MVT on \\([0,2]\\) and find the point \\(c\\) guaranteed by the theorem.'
    },
    hint: {
      it: 'Il teorema richiede continuità su \\([a,b]\\) e derivabilità su \\((a,b)\\). Poi: \\(f\'(c)=\\frac{f(b)-f(a)}{b-a}\\).',
      en: 'The theorem requires continuity on \\([a,b]\\) and differentiability on \\((a,b)\\). Then: \\(f\'(c)=\\frac{f(b)-f(a)}{b-a}\\).'
    },
    steps: {
      it: [
        { title: 'Verifica ipotesi', body: '\\(f\\) è un polinomio: continua su \\([0,2]\\) e derivabile su \\((0,2)\\). ✓' },
        { title: 'Calcolo del rapporto incrementale', body: '\\(f(0)=2\\), \\(f(2)=8-6+2=4\\)\n\\[\\frac{f(2)-f(0)}{2-0} = \\frac{4-2}{2} = 1\\]' },
        { title: 'Derivata prima', body: '\\(f\'(x) = 3x^2 - 3\\)' },
        { title: 'Equazione per c', body: '\\(3c^2-3=1 \\Rightarrow c^2=\\frac{4}{3} \\Rightarrow c=\\pm\\frac{2}{\\sqrt{3}}\\)\nSolo \\(c=\\frac{2}{\\sqrt{3}}\\approx 1.155\\in(0,2)\\).' }
      ],
      en: [
        { title: 'Verify hypotheses', body: '\\(f\\) is a polynomial: continuous on \\([0,2]\\) and differentiable on \\((0,2)\\). ✓' },
        { title: 'Compute the difference quotient', body: '\\(f(0)=2\\), \\(f(2)=4\\)\n\\[\\frac{f(2)-f(0)}{2-0} = 1\\]' },
        { title: 'First derivative', body: '\\(f\'(x) = 3x^2 - 3\\)' },
        { title: 'Equation for c', body: '\\(3c^2-3=1 \\Rightarrow c=\\frac{2}{\\sqrt{3}}\\approx 1.155\\in(0,2)\\).' }
      ]
    },
    answer: { it: '\\(c = \\dfrac{2}{\\sqrt{3}} = \\dfrac{2\\sqrt{3}}{3} \\approx 1.155\\)', en: '\\(c = \\dfrac{2}{\\sqrt{3}} = \\dfrac{2\\sqrt{3}}{3} \\approx 1.155\\)' }
  },
  {
    id: 'a1-10', subject: 'a1', diff: 'hard',
    title: { it: 'Integrale con sostituzione trigonometrica', en: 'Trigonometric substitution integral' },
    tags: { it: ['Integrali', 'Sostituzione trigonometrica'], en: ['Integrals', 'Trig substitution'] },
    exam: true,
    problem: {
      it: 'Calcola:\n\\[\\int_0^1 \\frac{x^2}{\\sqrt{1-x^2}}\\,dx\\]',
      en: 'Compute:\n\\[\\int_0^1 \\frac{x^2}{\\sqrt{1-x^2}}\\,dx\\]'
    },
    hint: {
      it: 'Usa la sostituzione \\(x = \\sin\\theta\\), con \\(dx = \\cos\\theta\\,d\\theta\\).',
      en: 'Use the substitution \\(x = \\sin\\theta\\), with \\(dx = \\cos\\theta\\,d\\theta\\).'
    },
    steps: {
      it: [
        { title: 'Sostituzione', body: '\\(x=\\sin\\theta\\), \\(dx=\\cos\\theta\\,d\\theta\\), \\(\\sqrt{1-x^2}=\\cos\\theta\\).\nLimiti: \\(x=0\\Rightarrow\\theta=0\\); \\(x=1\\Rightarrow\\theta=\\frac{\\pi}{2}\\).' },
        { title: 'Trasformazione dell\'integrale', body: '\\[\\int_0^{\\pi/2}\\frac{\\sin^2\\theta}{\\cos\\theta}\\cos\\theta\\,d\\theta = \\int_0^{\\pi/2}\\sin^2\\theta\\,d\\theta\\]' },
        { title: 'Formula di riduzione', body: '\\(\\sin^2\\theta = \\frac{1-\\cos(2\\theta)}{2}\\):\n\\[\\int_0^{\\pi/2}\\frac{1-\\cos(2\\theta)}{2}\\,d\\theta = \\frac{1}{2}\\left[\\theta - \\frac{\\sin(2\\theta)}{2}\\right]_0^{\\pi/2}\\]' },
        { title: 'Risultato', body: '\\[= \\frac{1}{2}\\left(\\frac{\\pi}{2}-0\\right) = \\frac{\\pi}{4}\\]' }
      ],
      en: [
        { title: 'Substitution', body: '\\(x=\\sin\\theta\\), \\(dx=\\cos\\theta\\,d\\theta\\), \\(\\sqrt{1-x^2}=\\cos\\theta\\).\nBounds: \\(x=0\\Rightarrow\\theta=0\\); \\(x=1\\Rightarrow\\theta=\\frac{\\pi}{2}\\).' },
        { title: 'Transform the integral', body: '\\[\\int_0^{\\pi/2}\\frac{\\sin^2\\theta}{\\cos\\theta}\\cos\\theta\\,d\\theta = \\int_0^{\\pi/2}\\sin^2\\theta\\,d\\theta\\]' },
        { title: 'Reduction formula', body: '\\(\\sin^2\\theta = \\frac{1-\\cos(2\\theta)}{2}\\):\n\\[\\int_0^{\\pi/2}\\frac{1-\\cos(2\\theta)}{2}\\,d\\theta = \\frac{1}{2}\\left[\\theta - \\frac{\\sin(2\\theta)}{2}\\right]_0^{\\pi/2}\\]' },
        { title: 'Result', body: '\\[= \\frac{1}{2}\\cdot\\frac{\\pi}{2} = \\frac{\\pi}{4}\\]' }
      ]
    },
    answer: { it: '\\(\\dfrac{\\pi}{4}\\)', en: '\\(\\dfrac{\\pi}{4}\\)' }
  },

  // ==============================
  // ALGEBRA LINEARE (la)
  // ==============================
  {
    id: 'la-01', subject: 'la', diff: 'easy',
    title: { it: 'Determinante di matrice 3×3', en: 'Determinant of a 3×3 matrix' },
    tags: { it: ['Determinanti', 'Matrici'], en: ['Determinants', 'Matrices'] },
    problem: {
      it: 'Calcola il determinante:\n\\[A = \\begin{pmatrix} 2 & 1 & 0 \\\\ 3 & -1 & 2 \\\\ 1 & 4 & -2 \\end{pmatrix}\\]',
      en: 'Compute the determinant:\n\\[A = \\begin{pmatrix} 2 & 1 & 0 \\\\ 3 & -1 & 2 \\\\ 1 & 4 & -2 \\end{pmatrix}\\]'
    },
    hint: {
      it: 'Espandi lungo la prima riga usando la regola di Laplace: \\(\\det A = \\sum_j a_{1j}C_{1j}\\).',
      en: 'Expand along the first row using Laplace\'s rule: \\(\\det A = \\sum_j a_{1j}C_{1j}\\).'
    },
    steps: {
      it: [
        { title: 'Espansione lungo la prima riga', body: '\\[\\det A = 2\\det\\begin{pmatrix}-1&2\\\\4&-2\\end{pmatrix} - 1\\det\\begin{pmatrix}3&2\\\\1&-2\\end{pmatrix} + 0\\cdot(\\cdots)\\]' },
        { title: 'Calcolo dei minori 2×2', body: '\\(M_{11}=(-1)(-2)-(2)(4)=2-8=-6\\)\n\\(M_{12}=(3)(-2)-(2)(1)=-6-2=-8\\)' },
        { title: 'Risultato', body: '\\[\\det A = 2(-6) - 1(-8) + 0 = -12+8 = -4\\]' }
      ],
      en: [
        { title: 'Expand along first row', body: '\\[\\det A = 2\\det\\begin{pmatrix}-1&2\\\\4&-2\\end{pmatrix} - 1\\det\\begin{pmatrix}3&2\\\\1&-2\\end{pmatrix} + 0\\]' },
        { title: 'Compute 2×2 minors', body: '\\(M_{11}=(-1)(-2)-(2)(4)=-6\\)\n\\(M_{12}=(3)(-2)-(2)(1)=-8\\)' },
        { title: 'Result', body: '\\[\\det A = 2(-6) - 1(-8) = -12+8 = -4\\]' }
      ]
    },
    answer: { it: '\\(\\det A = -4\\)', en: '\\(\\det A = -4\\)' }
  },
  {
    id: 'la-02', subject: 'la', diff: 'medium',
    title: { it: 'Soluzione di sistema lineare (Gauss)', en: 'Solving a linear system (Gaussian elimination)' },
    tags: { it: ['Sistemi lineari', 'Eliminazione di Gauss'], en: ['Linear systems', 'Gaussian elimination'] },
    problem: {
      it: 'Risolvi il sistema:\n\\[\\begin{cases} 2x + y - z = 3 \\\\ x - y + 2z = 1 \\\\ 3x + 2y + z = 7 \\end{cases}\\]',
      en: 'Solve the system:\n\\[\\begin{cases} 2x + y - z = 3 \\\\ x - y + 2z = 1 \\\\ 3x + 2y + z = 7 \\end{cases}\\]'
    },
    hint: {
      it: 'Costruisci la matrice aumentata \\([A|b]\\) e applica operazioni elementari di riga per ottenere la forma a scalini.',
      en: 'Build the augmented matrix \\([A|b]\\) and apply elementary row operations to reach row echelon form.'
    },
    steps: {
      it: [
        { title: 'Matrice aumentata', body: '\\[\\begin{pmatrix}2&1&-1&|&3\\\\1&-1&2&|&1\\\\3&2&1&|&7\\end{pmatrix}\\]' },
        { title: 'Eliminazione: R1↔R2, poi eliminazione', body: 'Scambia R1, R2. Poi: R2 ← R2-2R1, R3 ← R3-3R1:\n\\[\\begin{pmatrix}1&-1&2&|&1\\\\0&3&-5&|&1\\\\0&5&-5&|&4\\end{pmatrix}\\]' },
        { title: 'Eliminazione seconda colonna', body: 'R3 ← 3R3-5R2:\n\\[\\begin{pmatrix}1&-1&2&|&1\\\\0&3&-5&|&1\\\\0&0&10&|&7\\end{pmatrix}\\]' },
        { title: 'Sostituzione a ritroso', body: '\\(z=\\frac{7}{10}\\)\n\\(3y=1+5\\cdot\\frac{7}{10}=\\frac{45}{10}\\Rightarrow y=\\frac{3}{2}\\)\n\\(x=1+y-2z=1+\\frac{3}{2}-\\frac{7}{5}=\\frac{19}{10}\\)' }
      ],
      en: [
        { title: 'Augmented matrix', body: '\\[\\begin{pmatrix}2&1&-1&|&3\\\\1&-1&2&|&1\\\\3&2&1&|&7\\end{pmatrix}\\]' },
        { title: 'Elimination', body: 'Swap R1, R2. Then R2←R2-2R1, R3←R3-3R1:\n\\[\\begin{pmatrix}1&-1&2&|&1\\\\0&3&-5&|&1\\\\0&5&-5&|&4\\end{pmatrix}\\]' },
        { title: 'Second column elimination', body: 'R3 ← 3R3-5R2:\n\\[\\begin{pmatrix}1&-1&2&|&1\\\\0&3&-5&|&1\\\\0&0&10&|&7\\end{pmatrix}\\]' },
        { title: 'Back substitution', body: '\\(z=\\frac{7}{10}\\), \\(y=\\frac{3}{2}\\), \\(x=\\frac{19}{10}\\)' }
      ]
    },
    answer: { it: '\\(x=\\dfrac{19}{10},\\; y=\\dfrac{3}{2},\\; z=\\dfrac{7}{10}\\)', en: '\\(x=\\dfrac{19}{10},\\; y=\\dfrac{3}{2},\\; z=\\dfrac{7}{10}\\)' }
  },
  {
    id: 'la-03', subject: 'la', diff: 'hard',
    title: { it: 'Autovalori e autovettori', en: 'Eigenvalues and eigenvectors' },
    tags: { it: ['Autovalori', 'Diagonalizzazione'], en: ['Eigenvalues', 'Diagonalization'] },
    exam: true,
    problem: {
      it: 'Trova autovalori e autovettori di:\n\\[A = \\begin{pmatrix} 4 & 1 \\\\ 2 & 3 \\end{pmatrix}\\]\nLa matrice è diagonalizzabile?',
      en: 'Find eigenvalues and eigenvectors of:\n\\[A = \\begin{pmatrix} 4 & 1 \\\\ 2 & 3 \\end{pmatrix}\\]\nIs the matrix diagonalizable?'
    },
    hint: {
      it: 'Risolvi \\(\\det(A-\\lambda I)=0\\) per trovare gli autovalori, poi per ciascuno risolvi \\((A-\\lambda I)v=0\\).',
      en: 'Solve \\(\\det(A-\\lambda I)=0\\) for eigenvalues, then for each solve \\((A-\\lambda I)v=0\\).'
    },
    steps: {
      it: [
        { title: 'Polinomio caratteristico', body: '\\[\\det(A-\\lambda I)=\\det\\begin{pmatrix}4-\\lambda&1\\\\2&3-\\lambda\\end{pmatrix}\\]\n\\[=(4-\\lambda)(3-\\lambda)-2 = \\lambda^2-7\\lambda+10 = (\\lambda-2)(\\lambda-5)\\]' },
        { title: 'Autovalori', body: '\\(\\lambda_1=2\\) e \\(\\lambda_2=5\\)' },
        { title: 'Autovettore per \\(\\lambda_1=2\\)', body: '\\((A-2I)v=0\\):\n\\[\\begin{pmatrix}2&1\\\\2&1\\end{pmatrix}v=0 \\Rightarrow 2v_1+v_2=0\\]\nAutovettore: \\(v_1 = \\begin{pmatrix}1\\\\-2\\end{pmatrix}\\)' },
        { title: 'Autovettore per \\(\\lambda_2=5\\)', body: '\\((A-5I)v=0\\):\n\\[\\begin{pmatrix}-1&1\\\\2&-2\\end{pmatrix}v=0 \\Rightarrow v_1=v_2\\]\nAutovettore: \\(v_2 = \\begin{pmatrix}1\\\\1\\end{pmatrix}\\)' },
        { title: 'Diagonalizzabilità', body: 'Due autovalori distinti \\(\\Rightarrow\\) due autovettori linearmente indipendenti \\(\\Rightarrow\\) **A è diagonalizzabile**.\n\\[D = \\begin{pmatrix}2&0\\\\0&5\\end{pmatrix},\\quad P=\\begin{pmatrix}1&1\\\\-2&1\\end{pmatrix}\\]' }
      ],
      en: [
        { title: 'Characteristic polynomial', body: '\\[\\det(A-\\lambda I)=(4-\\lambda)(3-\\lambda)-2=\\lambda^2-7\\lambda+10=(\\lambda-2)(\\lambda-5)\\]' },
        { title: 'Eigenvalues', body: '\\(\\lambda_1=2\\) and \\(\\lambda_2=5\\)' },
        { title: 'Eigenvector for \\(\\lambda_1=2\\)', body: '\\((A-2I)v=0 \\Rightarrow v_1=\\begin{pmatrix}1\\\\-2\\end{pmatrix}\\)' },
        { title: 'Eigenvector for \\(\\lambda_2=5\\)', body: '\\((A-5I)v=0 \\Rightarrow v_2=\\begin{pmatrix}1\\\\1\\end{pmatrix}\\)' },
        { title: 'Diagonalizability', body: 'Two distinct eigenvalues \\(\\Rightarrow\\) **A is diagonalizable**.\n\\[D=\\begin{pmatrix}2&0\\\\0&5\\end{pmatrix},\\quad P=\\begin{pmatrix}1&1\\\\-2&1\\end{pmatrix}\\]' }
      ]
    },
    answer: { it: '\\(\\lambda_1=2\\), \\(\\lambda_2=5\\); matrice diagonalizzabile.', en: '\\(\\lambda_1=2\\), \\(\\lambda_2=5\\); matrix is diagonalizable.' }
  },
  {
    id: 'la-04', subject: 'la', diff: 'medium',
    title: { it: 'Prodotto scalare e ortogonalità', en: 'Dot product and orthogonality' },
    tags: { it: ['Spazi vettoriali', 'Prodotto scalare'], en: ['Vector spaces', 'Dot product'] },
    problem: {
      it: 'Dato \\(\\mathbf{u}=(1,2,-1)\\) e \\(\\mathbf{v}=(3,0,1)\\):\na) Calcola \\(\\mathbf{u}\\cdot\\mathbf{v}\\)\nb) Calcola l\'angolo tra \\(\\mathbf{u}\\) e \\(\\mathbf{v}\\)\nc) Calcola la proiezione di \\(\\mathbf{u}\\) su \\(\\mathbf{v}\\)',
      en: 'Given \\(\\mathbf{u}=(1,2,-1)\\) and \\(\\mathbf{v}=(3,0,1)\\):\na) Compute \\(\\mathbf{u}\\cdot\\mathbf{v}\\)\nb) Find the angle between \\(\\mathbf{u}\\) and \\(\\mathbf{v}\\)\nc) Find the projection of \\(\\mathbf{u}\\) onto \\(\\mathbf{v}\\)'
    },
    hint: {
      it: 'a) Somma dei prodotti componente per componente. b) \\(\\cos\\theta = \\frac{\\mathbf{u}\\cdot\\mathbf{v}}{|\\mathbf{u}||\\mathbf{v}|}\\). c) \\(\\text{proj}_{\\mathbf{v}}\\mathbf{u} = \\frac{\\mathbf{u}\\cdot\\mathbf{v}}{|\\mathbf{v}|^2}\\mathbf{v}\\).',
      en: 'a) Sum of component products. b) \\(\\cos\\theta = \\frac{\\mathbf{u}\\cdot\\mathbf{v}}{|\\mathbf{u}||\\mathbf{v}|}\\). c) \\(\\text{proj}_{\\mathbf{v}}\\mathbf{u} = \\frac{\\mathbf{u}\\cdot\\mathbf{v}}{|\\mathbf{v}|^2}\\mathbf{v}\\).'
    },
    steps: {
      it: [
        { title: 'a) Prodotto scalare', body: '\\(\\mathbf{u}\\cdot\\mathbf{v} = 1\\cdot3+2\\cdot0+(-1)\\cdot1 = 3+0-1 = 2\\)' },
        { title: 'b) Angolo', body: '\\(|\\mathbf{u}|=\\sqrt{1+4+1}=\\sqrt{6}\\), \\(|\\mathbf{v}|=\\sqrt{9+0+1}=\\sqrt{10}\\)\n\\[\\cos\\theta=\\frac{2}{\\sqrt{6}\\cdot\\sqrt{10}}=\\frac{2}{\\sqrt{60}}=\\frac{1}{\\sqrt{15}}\\]\n\\(\\theta=\\arccos\\frac{1}{\\sqrt{15}}\\approx 74.9°\\)' },
        { title: 'c) Proiezione', body: '\\[\\text{proj}_{\\mathbf{v}}\\mathbf{u}=\\frac{2}{10}(3,0,1)=\\left(\\frac{3}{5},0,\\frac{1}{5}\\right)\\]' }
      ],
      en: [
        { title: 'a) Dot product', body: '\\(\\mathbf{u}\\cdot\\mathbf{v} = 3+0-1 = 2\\)' },
        { title: 'b) Angle', body: '\\(|\\mathbf{u}|=\\sqrt{6}\\), \\(|\\mathbf{v}|=\\sqrt{10}\\)\n\\[\\cos\\theta=\\frac{2}{\\sqrt{60}}=\\frac{1}{\\sqrt{15}},\\quad\\theta\\approx74.9°\\]' },
        { title: 'c) Projection', body: '\\[\\text{proj}_{\\mathbf{v}}\\mathbf{u}=\\frac{2}{10}(3,0,1)=\\left(\\frac{3}{5},0,\\frac{1}{5}\\right)\\]' }
      ]
    },
    answer: { it: 'a) \\(2\\) — b) \\(\\approx74.9°\\) — c) \\(\\left(\\frac{3}{5},0,\\frac{1}{5}\\right)\\)', en: 'a) \\(2\\) — b) \\(\\approx74.9°\\) — c) \\(\\left(\\frac{3}{5},0,\\frac{1}{5}\\right)\\)' }
  },
  {
    id: 'la-05', subject: 'la', diff: 'hard',
    title: { it: 'Diagonalizzazione e potenze di matrice', en: 'Diagonalization and matrix powers' },
    tags: { it: ['Diagonalizzazione', 'Applicazioni'], en: ['Diagonalization', 'Applications'] },
    exam: true,
    problem: {
      it: 'Data \\(A=\\begin{pmatrix}3&1\\\\0&2\\end{pmatrix}\\), calcola \\(A^{10}\\) usando la diagonalizzazione.',
      en: 'Given \\(A=\\begin{pmatrix}3&1\\\\0&2\\end{pmatrix}\\), compute \\(A^{10}\\) using diagonalization.'
    },
    hint: {
      it: 'Se \\(A=PDP^{-1}\\) allora \\(A^n=PD^nP^{-1}\\). Le potenze di una matrice diagonale sono banali.',
      en: 'If \\(A=PDP^{-1}\\) then \\(A^n=PD^nP^{-1}\\). Powers of a diagonal matrix are trivial.'
    },
    steps: {
      it: [
        { title: 'Autovalori', body: '\\(\\det(A-\\lambda I)=(3-\\lambda)(2-\\lambda)=0 \\Rightarrow \\lambda_1=3,\\lambda_2=2\\)' },
        { title: 'Autovettori', body: 'Per \\(\\lambda=3\\): \\((A-3I)v=0\\Rightarrow v_1=\\begin{pmatrix}1\\\\0\\end{pmatrix}\\)\nPer \\(\\lambda=2\\): \\((A-2I)v=0\\Rightarrow v_2=\\begin{pmatrix}1\\\\-1\\end{pmatrix}\\)' },
        { title: 'Fattorizzazione', body: '\\(P=\\begin{pmatrix}1&1\\\\0&-1\\end{pmatrix}\\), \\(P^{-1}=\\begin{pmatrix}1&1\\\\0&-1\\end{pmatrix}\\)\n\\(D=\\begin{pmatrix}3&0\\\\0&2\\end{pmatrix}\\)' },
        { title: 'Calcolo \\(A^{10}\\)', body: '\\[D^{10}=\\begin{pmatrix}3^{10}&0\\\\0&2^{10}\\end{pmatrix}=\\begin{pmatrix}59049&0\\\\0&1024\\end{pmatrix}\\]\n\\[A^{10}=PD^{10}P^{-1}=\\begin{pmatrix}59049&59049-1024\\\\0&1024\\end{pmatrix}=\\begin{pmatrix}59049&58025\\\\0&1024\\end{pmatrix}\\]' }
      ],
      en: [
        { title: 'Eigenvalues', body: '\\((3-\\lambda)(2-\\lambda)=0 \\Rightarrow \\lambda_1=3,\\lambda_2=2\\)' },
        { title: 'Eigenvectors', body: '\\(v_1=\\begin{pmatrix}1\\\\0\\end{pmatrix}\\), \\(v_2=\\begin{pmatrix}1\\\\-1\\end{pmatrix}\\)' },
        { title: 'Factorization', body: '\\(P=\\begin{pmatrix}1&1\\\\0&-1\\end{pmatrix}\\), \\(D=\\begin{pmatrix}3&0\\\\0&2\\end{pmatrix}\\)' },
        { title: 'Compute \\(A^{10}\\)', body: '\\[A^{10}=PD^{10}P^{-1}=\\begin{pmatrix}59049&58025\\\\0&1024\\end{pmatrix}\\]' }
      ]
    },
    answer: { it: '\\(A^{10}=\\begin{pmatrix}59049&58025\\\\0&1024\\end{pmatrix}\\)', en: '\\(A^{10}=\\begin{pmatrix}59049&58025\\\\0&1024\\end{pmatrix}\\)' }
  },
  {
    id: 'la-06', subject: 'la', diff: 'medium',
    title: { it: 'Rango e nucleo di una matrice', en: 'Rank and kernel of a matrix' },
    tags: { it: ['Rango', 'Nucleo', 'Teorema del rango'], en: ['Rank', 'Kernel', 'Rank-nullity theorem'] },
    problem: {
      it: 'Data \\(A=\\begin{pmatrix}1&2&3\\\\4&5&6\\\\7&8&9\\end{pmatrix}\\), trova \\(\\text{rank}(A)\\), \\(\\ker(A)\\) e verifica il teorema del rango-nullità.',
      en: 'Given \\(A=\\begin{pmatrix}1&2&3\\\\4&5&6\\\\7&8&9\\end{pmatrix}\\), find \\(\\text{rank}(A)\\), \\(\\ker(A)\\) and verify the rank-nullity theorem.'
    },
    hint: {
      it: 'Riduci a scalini con Gauss. Il rango è il numero di pivot; \\(\\ker(A)\\) si trova da \\(Ax=0\\).',
      en: 'Row-reduce to echelon form. The rank equals the number of pivots; \\(\\ker(A)\\) comes from solving \\(Ax=0\\).'
    },
    steps: {
      it: [
        { title: 'Riduzione a scalini', body: 'R2←R2-4R1, R3←R3-7R1:\n\\[\\begin{pmatrix}1&2&3\\\\0&-3&-6\\\\0&-6&-12\\end{pmatrix}\\]\nR3←R3-2R2:\n\\[\\begin{pmatrix}1&2&3\\\\0&-3&-6\\\\0&0&0\\end{pmatrix}\\]' },
        { title: 'Rango', body: '2 pivot \\(\\Rightarrow \\text{rank}(A) = 2\\)' },
        { title: 'Nucleo (Ax=0)', body: 'Da riga 2: \\(-3x_2-6x_3=0\\Rightarrow x_2=-2x_3\\)\nDa riga 1: \\(x_1+2(-2x_3)+3x_3=0\\Rightarrow x_1=x_3\\)\nKer: \\(x_3\\begin{pmatrix}1\\\\-2\\\\1\\end{pmatrix}\\), \\(\\dim\\ker=1\\)' },
        { title: 'Verifica', body: '\\(\\text{rank}+\\text{nullità}=2+1=3=n\\) ✓' }
      ],
      en: [
        { title: 'Row reduction', body: 'After elimination:\n\\[\\begin{pmatrix}1&2&3\\\\0&-3&-6\\\\0&0&0\\end{pmatrix}\\]' },
        { title: 'Rank', body: '2 pivots \\(\\Rightarrow \\text{rank}(A) = 2\\)' },
        { title: 'Kernel', body: '\\(\\ker A = \\text{span}\\left\\{\\begin{pmatrix}1\\\\-2\\\\1\\end{pmatrix}\\right\\}\\), \\(\\dim\\ker=1\\)' },
        { title: 'Verification', body: '\\(\\text{rank}+\\text{nullity}=2+1=3=n\\) ✓' }
      ]
    },
    answer: { it: '\\(\\text{rank}=2\\), \\(\\ker A = \\text{span}\\{(1,-2,1)^T\\}\\)', en: '\\(\\text{rank}=2\\), \\(\\ker A = \\text{span}\\{(1,-2,1)^T\\}\\)' }
  },
  {
    id: 'la-07', subject: 'la', diff: 'easy',
    title: { it: 'Indipendenza lineare di vettori', en: 'Linear independence of vectors' },
    tags: { it: ['Spazi vettoriali', 'Indipendenza lineare'], en: ['Vector spaces', 'Linear independence'] },
    problem: {
      it: 'Stabilisci se i vettori \\(v_1=(1,0,1)\\), \\(v_2=(2,1,3)\\), \\(v_3=(0,1,1)\\) sono linearmente indipendenti in \\(\\mathbb{R}^3\\).',
      en: 'Determine whether \\(v_1=(1,0,1)\\), \\(v_2=(2,1,3)\\), \\(v_3=(0,1,1)\\) are linearly independent in \\(\\mathbb{R}^3\\).'
    },
    hint: {
      it: 'I vettori sono lin. indipendenti sse \\(\\det[v_1|v_2|v_3]\\neq 0\\).',
      en: 'Vectors are linearly independent iff \\(\\det[v_1|v_2|v_3]\\neq 0\\).'
    },
    steps: {
      it: [
        { title: 'Costruzione della matrice', body: '\\[M = \\begin{pmatrix}1&2&0\\\\0&1&1\\\\1&3&1\\end{pmatrix}\\]' },
        { title: 'Calcolo del determinante', body: '\\(\\det M = 1(1-3)-2(0-1)+0 = -2+2=0\\)' },
        { title: 'Conclusione', body: '\\(\\det M = 0\\): i vettori sono **linearmente dipendenti**.\n\nVerifica: \\(v_3 = v_2 - 2v_1\\).' }
      ],
      en: [
        { title: 'Matrix construction', body: '\\[M = \\begin{pmatrix}1&2&0\\\\0&1&1\\\\1&3&1\\end{pmatrix}\\]' },
        { title: 'Compute determinant', body: '\\(\\det M = 1(1-3)-2(0-1)+0 = 0\\)' },
        { title: 'Conclusion', body: '\\(\\det M = 0\\): vectors are **linearly dependent**.\n\nCheck: \\(v_3 = v_2 - 2v_1\\).' }
      ]
    },
    answer: { it: 'Linearmente **dipendenti** (\\(\\det=0\\))', en: 'Linearly **dependent** (\\(\\det=0\\))' }
  },

  // ==============================
  // PROBABILITÀ (prob)
  // ==============================
  {
    id: 'prob-01', subject: 'prob', diff: 'easy',
    title: { it: 'Probabilità condizionata e Bayes', en: 'Conditional probability and Bayes' },
    tags: { it: ['Probabilità condizionata', 'Teorema di Bayes'], en: ['Conditional probability', 'Bayes theorem'] },
    problem: {
      it: 'Un test medico ha sensibilità \\(95\\%\\) (vero positivo) e specificità \\(90\\%\\) (vero negativo). La prevalenza della malattia è \\(1\\%\\).\nSe il test risulta positivo, qual è la probabilità che la persona sia malata?',
      en: 'A medical test has sensitivity \\(95\\%\\) (true positive rate) and specificity \\(90\\%\\) (true negative rate). Disease prevalence is \\(1\\%\\).\nIf the test is positive, what is the probability the person is actually sick?'
    },
    hint: {
      it: 'Usa il teorema di Bayes: \\(P(M|+) = \\frac{P(+|M)P(M)}{P(+)}\\). Calcola \\(P(+)\\) con la formula delle probabilità totali.',
      en: 'Use Bayes theorem: \\(P(D|+) = \\frac{P(+|D)P(D)}{P(+)}\\). Compute \\(P(+)\\) by total probability.'
    },
    steps: {
      it: [
        { title: 'Dati', body: '\\(P(M)=0.01\\), \\(P(+|M)=0.95\\), \\(P(-|\\overline{M})=0.90\\Rightarrow P(+|\\overline{M})=0.10\\)' },
        { title: 'Probabilità totale di positivo', body: '\\[P(+)=P(+|M)P(M)+P(+|\\overline{M})P(\\overline{M})\\]\n\\[=0.95\\cdot0.01+0.10\\cdot0.99=0.0095+0.099=0.1085\\]' },
        { title: 'Teorema di Bayes', body: '\\[P(M|+)=\\frac{0.95\\cdot0.01}{0.1085}=\\frac{0.0095}{0.1085}\\approx0.0876\\approx8.76\\%\\]' },
        { title: 'Interpretazione', body: 'Nonostante il test sembri accurato, la bassa prevalenza fa sì che meno del \\(9\\%\\) dei positivi sia effettivamente malato. Questo è il "paradosso del falso positivo".' }
      ],
      en: [
        { title: 'Data', body: '\\(P(D)=0.01\\), \\(P(+|D)=0.95\\), \\(P(+|\\bar D)=0.10\\)' },
        { title: 'Total probability of positive', body: '\\[P(+)=0.95\\times0.01+0.10\\times0.99=0.1085\\]' },
        { title: 'Bayes theorem', body: '\\[P(D|+)=\\frac{0.95\\times0.01}{0.1085}\\approx8.76\\%\\]' },
        { title: 'Interpretation', body: 'Despite apparent test accuracy, the low prevalence means fewer than \\(9\\%\\) of positives are actually sick. This is the "false positive paradox".' }
      ]
    },
    answer: { it: '\\(P(M|+) \\approx 8.76\\%\\)', en: '\\(P(D|+) \\approx 8.76\\%\\)' }
  },
  {
    id: 'prob-02', subject: 'prob', diff: 'medium',
    title: { it: 'Variabile aleatoria di Poisson', en: 'Poisson random variable' },
    tags: { it: ['Poisson', 'Variabili aleatorie discrete'], en: ['Poisson', 'Discrete random variables'] },
    problem: {
      it: 'Un sito web riceve in media \\(\\lambda=3\\) visite al minuto.\na) Qual è la probabilità di ricevere esattamente 5 visite in un minuto?\nb) Qual è la probabilità di ricevere al massimo 2 visite?\nc) Calcola media e varianza.',
      en: 'A website receives on average \\(\\lambda=3\\) visits per minute.\na) Probability of receiving exactly 5 visits in one minute?\nb) Probability of at most 2 visits?\nc) Compute mean and variance.'
    },
    hint: {
      it: '\\(X\\sim\\text{Poi}(3)\\). Formula: \\(P(X=k)=\\frac{e^{-\\lambda}\\lambda^k}{k!}\\).',
      en: '\\(X\\sim\\text{Poi}(3)\\). Formula: \\(P(X=k)=\\frac{e^{-\\lambda}\\lambda^k}{k!}\\).'
    },
    steps: {
      it: [
        { title: 'a) P(X=5)', body: '\\[P(X=5)=\\frac{e^{-3}\\cdot 3^5}{5!}=\\frac{e^{-3}\\cdot 243}{120}=\\frac{0.04979\\cdot 243}{120}\\approx 0.1008\\]' },
        { title: 'b) P(X≤2)', body: '\\[P(X\\leq 2)=P(0)+P(1)+P(2)\\]\n\\[=e^{-3}+3e^{-3}+\\frac{9}{2}e^{-3}=e^{-3}\\left(1+3+4.5\\right)=8.5e^{-3}\\approx 0.4232\\]' },
        { title: 'c) Media e varianza', body: 'Per \\(X\\sim\\text{Poi}(\\lambda)\\):\n\\[E[X]=\\lambda=3,\\quad \\text{Var}(X)=\\lambda=3\\]' }
      ],
      en: [
        { title: 'a) P(X=5)', body: '\\[P(X=5)=\\frac{e^{-3}\\cdot 243}{120}\\approx 0.1008\\]' },
        { title: 'b) P(X≤2)', body: '\\[P(X\\leq 2)=e^{-3}(1+3+4.5)=8.5e^{-3}\\approx 0.4232\\]' },
        { title: 'c) Mean and variance', body: 'For \\(X\\sim\\text{Poi}(\\lambda)\\): \\(E[X]=\\text{Var}(X)=\\lambda=3\\)' }
      ]
    },
    answer: { it: 'a) \\(\\approx 10.08\\%\\) — b) \\(\\approx 42.32\\%\\) — c) \\(E=3, \\text{Var}=3\\)', en: 'a) \\(\\approx 10.08\\%\\) — b) \\(\\approx 42.32\\%\\) — c) \\(E=3, \\text{Var}=3\\)' }
  },
  {
    id: 'prob-03', subject: 'prob', diff: 'hard',
    title: { it: 'Densità congiunta e marginali', en: 'Joint density and marginals' },
    tags: { it: ['Densità congiunta', 'Marginali', 'Covarianza'], en: ['Joint density', 'Marginals', 'Covariance'] },
    exam: true,
    problem: {
      it: 'Siano \\(X,Y\\) v.a. con densità congiunta \\(f(x,y)=6xy^2\\) per \\(0\\leq x\\leq 1,\\;0\\leq y\\leq 1\\), e \\(f=0\\) altrove.\na) Verifica che sia una densità.\nb) Trova le densità marginali \\(f_X(x)\\) e \\(f_Y(y)\\).\nc) \\(X\\) e \\(Y\\) sono indipendenti?',
      en: 'Let \\(X,Y\\) have joint density \\(f(x,y)=6xy^2\\) for \\(0\\leq x\\leq 1,\\;0\\leq y\\leq 1\\).\na) Verify it is a valid density.\nb) Find marginals \\(f_X(x)\\) and \\(f_Y(y)\\).\nc) Are \\(X\\) and \\(Y\\) independent?'
    },
    hint: {
      it: 'Integra su tutto \\(\\mathbb{R}^2\\). Le marginali si ottengono integrando rispetto all\'altra variabile.',
      en: 'Integrate over \\(\\mathbb{R}^2\\). Marginals are obtained by integrating out the other variable.'
    },
    steps: {
      it: [
        { title: 'a) Verifica normalizzazione', body: '\\[\\int_0^1\\int_0^1 6xy^2\\,dx\\,dy = 6\\int_0^1 y^2\\,dy\\int_0^1 x\\,dx = 6\\cdot\\frac{1}{3}\\cdot\\frac{1}{2}=1\\quad\\checkmark\\]' },
        { title: 'b) Marginale di X', body: '\\[f_X(x)=\\int_0^1 6xy^2\\,dy = 6x\\cdot\\frac{1}{3}=2x,\\quad 0\\leq x\\leq 1\\]' },
        { title: 'b) Marginale di Y', body: '\\[f_Y(y)=\\int_0^1 6xy^2\\,dx = 6y^2\\cdot\\frac{1}{2}=3y^2,\\quad 0\\leq y\\leq 1\\]' },
        { title: 'c) Indipendenza', body: '\\(f_X(x)\\cdot f_Y(y) = 2x\\cdot 3y^2=6xy^2=f(x,y)\\)\n\\(\\Rightarrow\\) **X e Y sono indipendenti**.' }
      ],
      en: [
        { title: 'a) Normalization check', body: '\\[\\int_0^1\\int_0^1 6xy^2\\,dx\\,dy = 6\\cdot\\frac{1}{3}\\cdot\\frac{1}{2}=1\\quad\\checkmark\\]' },
        { title: 'b) Marginal of X', body: '\\[f_X(x)=2x,\\quad 0\\leq x\\leq 1\\]' },
        { title: 'b) Marginal of Y', body: '\\[f_Y(y)=3y^2,\\quad 0\\leq y\\leq 1\\]' },
        { title: 'c) Independence', body: '\\(f_X(x)\\cdot f_Y(y)=6xy^2=f(x,y)\\Rightarrow\\) **X and Y are independent**.' }
      ]
    },
    answer: { it: '\\(f_X=2x\\), \\(f_Y=3y^2\\); X e Y **indipendenti**.', en: '\\(f_X=2x\\), \\(f_Y=3y^2\\); X and Y **independent**.' }
  },
  {
    id: 'prob-04', subject: 'prob', diff: 'medium',
    title: { it: 'Distribuzione normale e standardizzazione', en: 'Normal distribution and standardization' },
    tags: { it: ['Normale', 'Standardizzazione', 'Tavola Z'], en: ['Normal distribution', 'Standardization', 'Z-table'] },
    problem: {
      it: 'Sia \\(X\\sim\\mathcal{N}(70, 100)\\) (media 70, varianza 100).\na) Calcola \\(P(60\\leq X\\leq 85)\\)\nb) Trova \\(x\\) tale che \\(P(X>x)=0.05\\)',
      en: 'Let \\(X\\sim\\mathcal{N}(70,100)\\) (mean 70, variance 100).\na) Compute \\(P(60\\leq X\\leq 85)\\)\nb) Find \\(x\\) such that \\(P(X>x)=0.05\\)'
    },
    hint: {
      it: 'Standardizza: \\(Z=\\frac{X-\\mu}{\\sigma}\\) con \\(\\sigma=10\\). Usa \\(\\Phi\\) per la funzione di ripartizione normale standard.',
      en: 'Standardize: \\(Z=\\frac{X-\\mu}{\\sigma}\\) with \\(\\sigma=10\\). Use \\(\\Phi\\) for the standard normal CDF.'
    },
    steps: {
      it: [
        { title: 'a) Standardizzazione', body: '\\[P(60\\leq X\\leq 85)=P\\!\\left(\\frac{60-70}{10}\\leq Z\\leq\\frac{85-70}{10}\\right)=P(-1\\leq Z\\leq 1.5)\\]' },
        { title: 'a) Calcolo', body: '\\[=\\Phi(1.5)-\\Phi(-1)=0.9332-0.1587=0.7745\\]' },
        { title: 'b) Quantile', body: '\\(P(X>x)=0.05\\Rightarrow P(Z>z)=0.05\\Rightarrow z=1.645\\)\n\\[x=\\mu+z\\sigma=70+1.645\\cdot10=86.45\\]' }
      ],
      en: [
        { title: 'a) Standardization', body: '\\[P(60\\leq X\\leq 85)=P(-1\\leq Z\\leq 1.5)\\]' },
        { title: 'a) Calculation', body: '\\[=\\Phi(1.5)-\\Phi(-1)=0.9332-0.1587=0.7745\\]' },
        { title: 'b) Quantile', body: '\\(z=1.645\\Rightarrow x=70+16.45=86.45\\)' }
      ]
    },
    answer: { it: 'a) \\(\\approx 77.45\\%\\) — b) \\(x\\approx 86.45\\)', en: 'a) \\(\\approx 77.45\\%\\) — b) \\(x\\approx 86.45\\)' }
  },
  {
    id: 'prob-05', subject: 'prob', diff: 'hard',
    title: { it: 'Teorema Centrale del Limite', en: 'Central Limit Theorem' },
    tags: { it: ['TCL', 'Teorema Centrale del Limite'], en: ['CLT', 'Central Limit Theorem'] },
    exam: true,
    problem: {
      it: 'Siano \\(X_1,\\ldots,X_{100}\\) v.a. i.i.d. con \\(E[X_i]=2\\) e \\(\\text{Var}(X_i)=9\\).\nUsa il TCL per approssimare \\(P(S_{100} > 215)\\) dove \\(S_{100}=\\sum_{i=1}^{100}X_i\\).',
      en: 'Let \\(X_1,\\ldots,X_{100}\\) be i.i.d. with \\(E[X_i]=2\\) and \\(\\text{Var}(X_i)=9\\).\nUse the CLT to approximate \\(P(S_{100} > 215)\\) where \\(S_{100}=\\sum_{i=1}^{100}X_i\\).'
    },
    hint: {
      it: 'Per il TCL: \\(\\frac{S_n - n\\mu}{\\sigma\\sqrt{n}}\\xrightarrow{d}\\mathcal{N}(0,1)\\).',
      en: 'By CLT: \\(\\frac{S_n - n\\mu}{\\sigma\\sqrt{n}}\\xrightarrow{d}\\mathcal{N}(0,1)\\).'
    },
    steps: {
      it: [
        { title: 'Parametri di Sₙ', body: '\\(E[S_{100}]=100\\cdot2=200\\)\n\\(\\text{Var}(S_{100})=100\\cdot9=900\\Rightarrow\\sigma_{S}=30\\)' },
        { title: 'Standardizzazione', body: '\\[P(S_{100}>215)=P\\!\\left(Z>\\frac{215-200}{30}\\right)=P(Z>0.5)\\]' },
        { title: 'Calcolo', body: '\\[P(Z>0.5)=1-\\Phi(0.5)=1-0.6915=0.3085\\]' }
      ],
      en: [
        { title: 'Parameters of Sₙ', body: '\\(E[S_{100}]=200\\), \\(\\text{Var}(S_{100})=900\\), \\(\\sigma_S=30\\)' },
        { title: 'Standardization', body: '\\[P(S_{100}>215)=P(Z>0.5)=1-\\Phi(0.5)\\]' },
        { title: 'Calculation', body: '\\[=1-0.6915=0.3085\\approx 30.85\\%\\]' }
      ]
    },
    answer: { it: '\\(P(S_{100}>215)\\approx 30.85\\%\\)', en: '\\(P(S_{100}>215)\\approx 30.85\\%\\)' }
  },
  {
    id: 'prob-06', subject: 'prob', diff: 'medium',
    title: { it: 'Variabile aleatoria Esponenziale', en: 'Exponential random variable' },
    tags: { it: ['Esponenziale', 'Memoryless property'], en: ['Exponential', 'Memoryless property'] },
    problem: {
      it: 'Sia \\(X\\sim\\text{Exp}(2)\\) (tasso \\(\\lambda=2\\)).\na) Calcola \\(P(X>1)\\)\nb) Calcola \\(P(X>3\\mid X>2)\\)\nc) Giustifica la proprietà di assenza di memoria.',
      en: 'Let \\(X\\sim\\text{Exp}(2)\\) (rate \\(\\lambda=2\\)).\na) Compute \\(P(X>1)\\)\nb) Compute \\(P(X>3\\mid X>2)\\)\nc) Explain the memoryless property.'
    },
    hint: {
      it: '\\(P(X>t)=e^{-\\lambda t}\\). Proprietà di assenza di memoria: \\(P(X>s+t\\mid X>s)=P(X>t)\\).',
      en: '\\(P(X>t)=e^{-\\lambda t}\\). Memoryless property: \\(P(X>s+t\\mid X>s)=P(X>t)\\).'
    },
    steps: {
      it: [
        { title: 'a) P(X>1)', body: '\\(P(X>1)=e^{-2\\cdot1}=e^{-2}\\approx0.1353\\)' },
        { title: 'b) P(X>3|X>2)', body: '\\[P(X>3\\mid X>2)=\\frac{P(X>3)}{P(X>2)}=\\frac{e^{-6}}{e^{-4}}=e^{-2}=P(X>1)\\]' },
        { title: 'c) Assenza di memoria', body: 'La distribuzione esponenziale "non ricorda" quanto tempo è già trascorso: la probabilità di aspettare ancora \\(t\\) unità, dato che hai già aspettato \\(s\\), è la stessa di \\(P(X>t)\\).' }
      ],
      en: [
        { title: 'a) P(X>1)', body: '\\(P(X>1)=e^{-2}\\approx0.1353\\)' },
        { title: 'b) P(X>3|X>2)', body: '\\[P(X>3\\mid X>2)=\\frac{e^{-6}}{e^{-4}}=e^{-2}=P(X>1)\\]' },
        { title: 'c) Memoryless', body: 'The exponential distribution "forgets" how long you have waited: the remaining wait time has the same distribution regardless of how much time has already passed.' }
      ]
    },
    answer: { it: 'a) \\(e^{-2}\\approx13.5\\%\\) — b) \\(e^{-2}\\approx13.5\\%\\) (assenza di memoria)', en: 'a) \\(e^{-2}\\approx13.5\\%\\) — b) \\(e^{-2}\\approx13.5\\%\\) (memoryless)' }
  },

  // ==============================
  // EQUAZIONI DIFFERENZIALI (edo)
  // ==============================
  {
    id: 'edo-01', subject: 'edo', diff: 'easy',
    title: { it: 'EDO del primo ordine a variabili separabili', en: 'First-order separable ODE' },
    tags: { it: ['EDO primo ordine', 'Variabili separabili'], en: ['First order ODE', 'Separable variables'] },
    problem: {
      it: 'Risolvi l\'equazione differenziale:\n\\[\\frac{dy}{dx} = \\frac{x}{y},\\quad y(0)=2\\]',
      en: 'Solve the differential equation:\n\\[\\frac{dy}{dx} = \\frac{x}{y},\\quad y(0)=2\\]'
    },
    hint: {
      it: 'Separa le variabili: porta tutti i termini in \\(y\\) a sinistra e i termini in \\(x\\) a destra, poi integra.',
      en: 'Separate variables: move all \\(y\\) terms to the left and \\(x\\) terms to the right, then integrate.'
    },
    steps: {
      it: [
        { title: 'Separazione delle variabili', body: '\\(y\\,dy = x\\,dx\\)' },
        { title: 'Integrazione', body: '\\[\\int y\\,dy = \\int x\\,dx \\Rightarrow \\frac{y^2}{2} = \\frac{x^2}{2} + C\\]' },
        { title: 'Soluzione generale', body: '\\(y^2 = x^2 + K\\) (con \\(K=2C\\))' },
        { title: 'Condizione iniziale', body: '\\(y(0)=2\\Rightarrow 4=0+K\\Rightarrow K=4\\)\n\\[y = \\sqrt{x^2+4}\\quad(y>0)\\]' }
      ],
      en: [
        { title: 'Separate variables', body: '\\(y\\,dy = x\\,dx\\)' },
        { title: 'Integrate', body: '\\[\\frac{y^2}{2} = \\frac{x^2}{2} + C\\]' },
        { title: 'General solution', body: '\\(y^2 = x^2 + K\\)' },
        { title: 'Initial condition', body: '\\(y(0)=2\\Rightarrow K=4\\Rightarrow y=\\sqrt{x^2+4}\\)' }
      ]
    },
    answer: { it: '\\(y = \\sqrt{x^2 + 4}\\)', en: '\\(y = \\sqrt{x^2 + 4}\\)' }
  },
  {
    id: 'edo-02', subject: 'edo', diff: 'medium',
    title: { it: 'EDO lineare del secondo ordine a coefficienti costanti', en: 'Second-order linear ODE with constant coefficients' },
    tags: { it: ['EDO secondo ordine', 'Coefficienti costanti'], en: ['Second order ODE', 'Constant coefficients'] },
    problem: {
      it: 'Risolvi:\n\\[y\'\' - 5y\' + 6y = 0\\]\ncon \\(y(0)=1\\), \\(y\'(0)=2\\).',
      en: 'Solve:\n\\[y\'\' - 5y\' + 6y = 0\\]\nwith \\(y(0)=1\\), \\(y\'(0)=2\\).'
    },
    hint: {
      it: 'Prova \\(y=e^{\\lambda x}\\) e risolvi l\'equazione caratteristica \\(\\lambda^2-5\\lambda+6=0\\).',
      en: 'Try \\(y=e^{\\lambda x}\\) and solve the characteristic equation \\(\\lambda^2-5\\lambda+6=0\\).'
    },
    steps: {
      it: [
        { title: 'Equazione caratteristica', body: '\\(\\lambda^2-5\\lambda+6=0=(\\lambda-2)(\\lambda-3)\\)\n\\(\\lambda_1=2,\\lambda_2=3\\)' },
        { title: 'Soluzione generale', body: '\\(y=C_1e^{2x}+C_2e^{3x}\\)' },
        { title: 'Applicazione condizioni iniziali', body: '\\(y(0)=1\\Rightarrow C_1+C_2=1\\)\n\\(y\'=2C_1e^{2x}+3C_2e^{3x}\\)\n\\(y\'(0)=2\\Rightarrow 2C_1+3C_2=2\\)' },
        { title: 'Sistema e soluzione', body: 'Da \\(C_1+C_2=1\\) e \\(2C_1+3C_2=2\\):\n\\(C_2=0,\\;C_1=1\\)\n\\[y=e^{2x}\\]' }
      ],
      en: [
        { title: 'Characteristic equation', body: '\\(\\lambda^2-5\\lambda+6=(\\lambda-2)(\\lambda-3)=0\\)\n\\(\\lambda_1=2,\\lambda_2=3\\)' },
        { title: 'General solution', body: '\\(y=C_1e^{2x}+C_2e^{3x}\\)' },
        { title: 'Initial conditions', body: '\\(C_1+C_2=1\\) and \\(2C_1+3C_2=2\\)' },
        { title: 'Solve the system', body: '\\(C_2=0,C_1=1\\Rightarrow y=e^{2x}\\)' }
      ]
    },
    answer: { it: '\\(y = e^{2x}\\)', en: '\\(y = e^{2x}\\)' }
  },
  {
    id: 'edo-03', subject: 'edo', diff: 'hard',
    title: { it: 'EDO lineare non omogenea con variazione dei parametri', en: 'Non-homogeneous ODE — variation of parameters' },
    tags: { it: ['Variazione dei parametri', 'Non omogenea'], en: ['Variation of parameters', 'Non-homogeneous'] },
    exam: true,
    problem: {
      it: 'Risolvi:\n\\[y\'\'-2y\'+y = e^x\\]',
      en: 'Solve:\n\\[y\'\'-2y\'+y = e^x\\]'
    },
    hint: {
      it: 'L\'equazione omogenea ha radice doppia \\(\\lambda=1\\). Usa la variazione dei parametri (o il metodo dei coefficienti indeterminati con termine di risonanza).',
      en: 'The homogeneous part has double root \\(\\lambda=1\\). Use variation of parameters (or undetermined coefficients with resonance).'
    },
    steps: {
      it: [
        { title: 'Soluzione omogenea', body: '\\(y\'\'-2y\'+y=0\\Rightarrow(\\lambda-1)^2=0\\Rightarrow\\lambda=1\\) (molteplicità 2)\n\\(y_h=(C_1+C_2x)e^x\\)' },
        { title: 'Soluzione particolare (coefficienti indeterminati)', body: 'Poiché \\(e^x\\) è già soluzione con molteplicità 2, prova \\(y_p=Ax^2e^x\\).' },
        { title: 'Calcolo delle derivate', body: '\\(y_p=Ax^2e^x\\)\n\\(y_p\'=A(2x+x^2)e^x\\)\n\\(y_p\'\'=A(2+4x+x^2)e^x\\)' },
        { title: 'Sostituzione', body: '\\(y_p\'\'-2y_p\'+y_p=A(2+4x+x^2-4x-2x^2+x^2)e^x=2Ae^x=e^x\\)\n\\(\\Rightarrow A=\\frac{1}{2}\\)' },
        { title: 'Soluzione generale', body: '\\[y=(C_1+C_2x)e^x+\\frac{x^2}{2}e^x\\]' }
      ],
      en: [
        { title: 'Homogeneous solution', body: '\\((\\lambda-1)^2=0\\Rightarrow\\lambda=1\\) (double)\n\\(y_h=(C_1+C_2x)e^x\\)' },
        { title: 'Particular solution', body: 'Since \\(e^x\\) is already a solution with multiplicity 2, try \\(y_p=Ax^2e^x\\).' },
        { title: 'Compute derivatives', body: '\\(y_p=Ax^2e^x\\), \\(y_p\'=A(2x+x^2)e^x\\), \\(y_p\'\'=A(2+4x+x^2)e^x\\)' },
        { title: 'Substitute', body: '\\(2Ae^x=e^x\\Rightarrow A=\\frac{1}{2}\\)' },
        { title: 'General solution', body: '\\[y=\\left(C_1+C_2x+\\frac{x^2}{2}\\right)e^x\\]' }
      ]
    },
    answer: { it: '\\(y=\\left(C_1+C_2x+\\dfrac{x^2}{2}\\right)e^x\\)', en: '\\(y=\\left(C_1+C_2x+\\dfrac{x^2}{2}\\right)e^x\\)' }
  },
  {
    id: 'edo-04', subject: 'edo', diff: 'medium',
    title: { it: 'Equazione di Bernoulli', en: 'Bernoulli equation' },
    tags: { it: ['Bernoulli', 'EDO non lineare'], en: ['Bernoulli', 'Nonlinear ODE'] },
    problem: {
      it: 'Risolvi l\'equazione di Bernoulli:\n\\[y\' - y = xy^2\\]',
      en: 'Solve the Bernoulli equation:\n\\[y\' - y = xy^2\\]'
    },
    hint: {
      it: 'Poni \\(v=y^{1-n}=y^{-1}\\) (con \\(n=2\\)) per linearizzare l\'equazione.',
      en: 'Set \\(v=y^{1-n}=y^{-1}\\) (with \\(n=2\\)) to linearize the equation.'
    },
    steps: {
      it: [
        { title: 'Sostituzione', body: '\\(v=y^{-1}\\Rightarrow v\'=-y^{-2}y\'\\). Dividi per \\(y^2\\): \\(y^{-2}y\'-y^{-1}=x\\)' },
        { title: 'EDO in v', body: '\\(-v\'-v=x\\Rightarrow v\'+v=-x\\)' },
        { title: 'Fattore integrante', body: '\\(\\mu=e^x\\). L\'equazione diventa \\((ve^x)\'=-xe^x\\)' },
        { title: 'Integrazione per parti', body: '\\(ve^x=-xe^x+e^x+C\\Rightarrow v=C e^{-x}-x+1\\)' },
        { title: 'Ritorno a y', body: '\\[y=\\frac{1}{v}=\\frac{1}{Ce^{-x}-x+1}\\]' }
      ],
      en: [
        { title: 'Substitution', body: '\\(v=y^{-1}\\Rightarrow\\) equation becomes \\(v\'+v=-x\\)' },
        { title: 'Integrating factor', body: '\\(\\mu=e^x\\), so \\((ve^x)\'=-xe^x\\)' },
        { title: 'Integrate by parts', body: '\\(ve^x=-xe^x+e^x+C\\Rightarrow v=Ce^{-x}-x+1\\)' },
        { title: 'Back to y', body: '\\[y=\\frac{1}{Ce^{-x}-x+1}\\]' }
      ]
    },
    answer: { it: '\\(y=\\dfrac{1}{Ce^{-x}-x+1}\\)', en: '\\(y=\\dfrac{1}{Ce^{-x}-x+1}\\)' }
  },
  {
    id: 'edo-05', subject: 'edo', diff: 'hard',
    title: { it: 'Sistema di EDO — metodo degli autovalori', en: 'System of ODEs — eigenvalue method' },
    tags: { it: ['Sistemi di EDO', 'Autovalori'], en: ['ODE systems', 'Eigenvalues'] },
    exam: true,
    problem: {
      it: 'Risolvi il sistema:\n\\[\\begin{cases}x\' = 3x + y\\\\y\' = x + 3y\\end{cases}\\quad x(0)=2,\\;y(0)=0\\]',
      en: 'Solve the system:\n\\[\\begin{cases}x\' = 3x + y\\\\y\' = x + 3y\\end{cases}\\quad x(0)=2,\\;y(0)=0\\]'
    },
    hint: {
      it: 'Scrivi in forma matriciale \\(\\mathbf{u}\'=A\\mathbf{u}\\), trova autovalori/vettori di \\(A\\) e costruisci la soluzione generale.',
      en: 'Write as \\(\\mathbf{u}\'=A\\mathbf{u}\\), find eigenvalues/eigenvectors of \\(A\\), build the general solution.'
    },
    steps: {
      it: [
        { title: 'Matrice del sistema', body: '\\(A=\\begin{pmatrix}3&1\\\\1&3\\end{pmatrix}\\)' },
        { title: 'Autovalori', body: '\\(\\det(A-\\lambda I)=(3-\\lambda)^2-1=0\\Rightarrow\\lambda=2,\\;\\lambda=4\\)' },
        { title: 'Autovettori', body: '\\(\\lambda=2\\): \\(v_1=\\begin{pmatrix}1\\\\-1\\end{pmatrix}\\)\n\\(\\lambda=4\\): \\(v_2=\\begin{pmatrix}1\\\\1\\end{pmatrix}\\)' },
        { title: 'Soluzione generale', body: '\\[\\begin{pmatrix}x\\\\y\\end{pmatrix}=C_1e^{2t}\\begin{pmatrix}1\\\\-1\\end{pmatrix}+C_2e^{4t}\\begin{pmatrix}1\\\\1\\end{pmatrix}\\]' },
        { title: 'Condizioni iniziali', body: '\\(C_1+C_2=2,\\;-C_1+C_2=0\\Rightarrow C_1=C_2=1\\)\n\\[x(t)=e^{2t}+e^{4t},\\quad y(t)=-e^{2t}+e^{4t}\\]' }
      ],
      en: [
        { title: 'System matrix', body: '\\(A=\\begin{pmatrix}3&1\\\\1&3\\end{pmatrix}\\)' },
        { title: 'Eigenvalues', body: '\\(\\lambda=2\\) and \\(\\lambda=4\\)' },
        { title: 'Eigenvectors', body: '\\(v_1=\\begin{pmatrix}1\\\\-1\\end{pmatrix}\\), \\(v_2=\\begin{pmatrix}1\\\\1\\end{pmatrix}\\)' },
        { title: 'General solution', body: '\\[x=C_1e^{2t}+C_2e^{4t},\\quad y=-C_1e^{2t}+C_2e^{4t}\\]' },
        { title: 'Initial conditions', body: '\\(C_1=C_2=1\\Rightarrow x=e^{2t}+e^{4t},\\;y=e^{4t}-e^{2t}\\)' }
      ]
    },
    answer: { it: '\\(x(t)=e^{2t}+e^{4t},\\quad y(t)=e^{4t}-e^{2t}\\)', en: '\\(x(t)=e^{2t}+e^{4t},\\quad y(t)=e^{4t}-e^{2t}\\)' }
  },
  {
    id: 'edo-06', subject: 'edo', diff: 'medium',
    title: { it: 'Modello di crescita logistica', en: 'Logistic growth model' },
    tags: { it: ['Applicazioni', 'Crescita logistica', 'Bernoulli'], en: ['Applications', 'Logistic growth', 'Bernoulli'] },
    problem: {
      it: 'Il modello logistico è:\n\\[\\frac{dP}{dt}=rP\\left(1-\\frac{P}{K}\\right)\\]\ncon \\(r=0.5\\), \\(K=1000\\), \\(P(0)=100\\). Trova la soluzione esplicita.',
      en: 'The logistic model is:\n\\[\\frac{dP}{dt}=rP\\left(1-\\frac{P}{K}\\right)\\]\nwith \\(r=0.5\\), \\(K=1000\\), \\(P(0)=100\\). Find the explicit solution.'
    },
    hint: {
      it: 'Separa le variabili e usa la decomposizione in frazioni parziali su \\(\\frac{1}{P(K-P)}\\).',
      en: 'Separate variables and use partial fractions on \\(\\frac{1}{P(K-P)}\\).'
    },
    steps: {
      it: [
        { title: 'Separazione', body: '\\[\\frac{dP}{P(1-P/K)}=r\\,dt\\]' },
        { title: 'Frazioni parziali', body: '\\[\\frac{1}{P(1-P/K)}=\\frac{K}{P(K-P)}=\\frac{1}{P}+\\frac{1}{K-P}\\]' },
        { title: 'Integrazione', body: '\\(\\ln P - \\ln(K-P) = rt + C\\Rightarrow \\frac{P}{K-P}=Ae^{rt}\\)' },
        { title: 'Soluzione e condizione iniziale', body: '\\(P(0)=100\\Rightarrow A=\\frac{100}{900}=\\frac{1}{9}\\)\n\\[P(t)=\\frac{K}{1+(K/P_0-1)e^{-rt}}=\\frac{1000}{1+9e^{-0.5t}}\\]' }
      ],
      en: [
        { title: 'Separation', body: '\\[\\frac{dP}{P(1-P/K)}=r\\,dt\\]' },
        { title: 'Partial fractions', body: '\\[\\frac{1}{P}+\\frac{1}{K-P}\\text{ form}\\]' },
        { title: 'Integration', body: '\\(\\ln\\frac{P}{K-P}=rt+C\\)' },
        { title: 'Solution', body: '\\[P(t)=\\frac{1000}{1+9e^{-0.5t}}\\]' }
      ]
    },
    answer: { it: '\\(P(t)=\\dfrac{1000}{1+9e^{-0.5t}}\\)', en: '\\(P(t)=\\dfrac{1000}{1+9e^{-0.5t}}\\)' }
  },

  // ==============================
  // ANALISI II (a2)
  // ==============================
  {
    id: 'a2-01', subject: 'a2', diff: 'medium',
    title: { it: 'Derivate parziali e gradiente', en: 'Partial derivatives and gradient' },
    tags: { it: ['Derivate parziali', 'Gradiente'], en: ['Partial derivatives', 'Gradient'] },
    problem: {
      it: 'Data \\(f(x,y)=x^2y+\\sin(xy)\\), calcola \\(\\nabla f\\) e la derivata direzionale in \\((\\frac{\\pi}{2},1)\\) nella direzione \\(\\mathbf{u}=\\frac{1}{\\sqrt{2}}(1,1)\\).',
      en: 'Given \\(f(x,y)=x^2y+\\sin(xy)\\), compute \\(\\nabla f\\) and the directional derivative at \\((\\frac{\\pi}{2},1)\\) in direction \\(\\mathbf{u}=\\frac{1}{\\sqrt{2}}(1,1)\\).'
    },
    hint: {
      it: '\\(D_{\\mathbf{u}}f = \\nabla f \\cdot \\mathbf{u}\\). Calcola prima le derivate parziali.',
      en: '\\(D_{\\mathbf{u}}f = \\nabla f \\cdot \\mathbf{u}\\). First compute the partial derivatives.'
    },
    steps: {
      it: [
        { title: 'Derivate parziali', body: '\\(f_x = 2xy + y\\cos(xy)\\)\n\\(f_y = x^2 + x\\cos(xy)\\)' },
        { title: 'Gradiente nel punto', body: 'In \\((\\frac{\\pi}{2},1)\\): \\(\\cos(\\frac{\\pi}{2}\\cdot1)=\\cos(\\frac{\\pi}{2})=0\\)\n\\(f_x=2\\cdot\\frac{\\pi}{2}\\cdot1+1\\cdot0=\\pi\\)\n\\(f_y=(\\frac{\\pi}{2})^2+\\frac{\\pi}{2}\\cdot0=\\frac{\\pi^2}{4}\\)\n\\(\\nabla f=(\\pi,\\frac{\\pi^2}{4})\\)' },
        { title: 'Derivata direzionale', body: '\\[D_{\\mathbf{u}}f=\\nabla f\\cdot\\mathbf{u}=\\frac{1}{\\sqrt{2}}\\left(\\pi+\\frac{\\pi^2}{4}\\right)\\approx\\frac{1}{\\sqrt{2}}(3.14+2.47)\\approx3.97\\]' }
      ],
      en: [
        { title: 'Partial derivatives', body: '\\(f_x = 2xy + y\\cos(xy)\\)\n\\(f_y = x^2 + x\\cos(xy)\\)' },
        { title: 'Gradient at the point', body: 'At \\((\\frac{\\pi}{2},1)\\): \\(\\cos(\\frac{\\pi}{2})=0\\)\n\\(\\nabla f=(\\pi,\\frac{\\pi^2}{4})\\)' },
        { title: 'Directional derivative', body: '\\[D_{\\mathbf{u}}f=\\frac{1}{\\sqrt{2}}\\left(\\pi+\\frac{\\pi^2}{4}\\right)\\approx3.97\\]' }
      ]
    },
    answer: { it: '\\(\\nabla f=(\\pi,\\frac{\\pi^2}{4})\\); \\(D_{\\mathbf{u}}f=\\frac{\\pi+\\pi^2/4}{\\sqrt{2}}\\)', en: '\\(\\nabla f=(\\pi,\\frac{\\pi^2}{4})\\); \\(D_{\\mathbf{u}}f=\\frac{\\pi+\\pi^2/4}{\\sqrt{2}}\\)' }
  },
  {
    id: 'a2-02', subject: 'a2', diff: 'hard',
    title: { it: 'Integrale doppio — cambiamento di coordinate', en: 'Double integral — change of variables' },
    tags: { it: ['Integrali doppi', 'Coordinate polari'], en: ['Double integrals', 'Polar coordinates'] },
    exam: true,
    problem: {
      it: 'Calcola:\n\\[\\iint_D e^{x^2+y^2}\\,dA\\]\ndove \\(D\\) è il disco \\(x^2+y^2\\leq 1\\).',
      en: 'Compute:\n\\[\\iint_D e^{x^2+y^2}\\,dA\\]\nwhere \\(D\\) is the disk \\(x^2+y^2\\leq 1\\).'
    },
    hint: {
      it: 'Usa le coordinate polari: \\(x=r\\cos\\theta\\), \\(y=r\\sin\\theta\\), \\(dA=r\\,dr\\,d\\theta\\).',
      en: 'Use polar coordinates: \\(x=r\\cos\\theta\\), \\(y=r\\sin\\theta\\), \\(dA=r\\,dr\\,d\\theta\\).'
    },
    steps: {
      it: [
        { title: 'Cambio di coordinate', body: 'In polari: \\(x^2+y^2=r^2\\), \\(D: 0\\leq r\\leq1,\\;0\\leq\\theta\\leq2\\pi\\)' },
        { title: 'Trasformazione dell\'integrale', body: '\\[\\int_0^{2\\pi}\\int_0^1 e^{r^2}\\cdot r\\,dr\\,d\\theta\\]' },
        { title: 'Integrale angolare', body: '\\[=2\\pi\\int_0^1 re^{r^2}\\,dr\\]' },
        { title: 'Sostituzione \\(u=r^2\\)', body: '\\(du=2r\\,dr\\):\n\\[=2\\pi\\cdot\\frac{1}{2}\\int_0^1 e^u\\,du=\\pi[e^u]_0^1=\\pi(e-1)\\]' }
      ],
      en: [
        { title: 'Change of variables', body: 'In polars: \\(x^2+y^2=r^2\\), \\(D: 0\\leq r\\leq1\\), \\(0\\leq\\theta\\leq2\\pi\\)' },
        { title: 'Transform the integral', body: '\\[\\int_0^{2\\pi}\\int_0^1 re^{r^2}\\,dr\\,d\\theta=2\\pi\\int_0^1 re^{r^2}\\,dr\\]' },
        { title: 'Substitution \\(u=r^2\\)', body: '\\[=\\pi\\int_0^1 e^u\\,du=\\pi(e-1)\\]' }
      ]
    },
    answer: { it: '\\(\\pi(e-1)\\approx 5.40\\)', en: '\\(\\pi(e-1)\\approx 5.40\\)' }
  },
  {
    id: 'a2-03', subject: 'a2', diff: 'hard',
    title: { it: 'Massimi e minimi vincolati — Moltiplicatori di Lagrange', en: 'Constrained optimization — Lagrange multipliers' },
    tags: { it: ['Lagrange', 'Ottimizzazione vincolata'], en: ['Lagrange', 'Constrained optimization'] },
    exam: true,
    problem: {
      it: 'Trova i punti stazionari di \\(f(x,y)=x^2+y^2\\) soggetto al vincolo \\(g(x,y)=x+2y-5=0\\).',
      en: 'Find the stationary points of \\(f(x,y)=x^2+y^2\\) subject to the constraint \\(g(x,y)=x+2y-5=0\\).'
    },
    hint: {
      it: 'Condizione di Lagrange: \\(\\nabla f = \\lambda\\nabla g\\), più il vincolo \\(g=0\\).',
      en: 'Lagrange condition: \\(\\nabla f = \\lambda\\nabla g\\), plus the constraint \\(g=0\\).'
    },
    steps: {
      it: [
        { title: 'Gradienti', body: '\\(\\nabla f=(2x,2y)\\), \\(\\nabla g=(1,2)\\)' },
        { title: 'Sistema di Lagrange', body: '\\[\\begin{cases}2x=\\lambda\\\\2y=2\\lambda\\\\x+2y=5\\end{cases}\\]' },
        { title: 'Dalla prima e seconda equazione', body: '\\(x=\\frac{\\lambda}{2}\\), \\(y=\\lambda\\)' },
        { title: 'Sostituzione nel vincolo', body: '\\(\\frac{\\lambda}{2}+2\\lambda=5\\Rightarrow\\frac{5\\lambda}{2}=5\\Rightarrow\\lambda=2\\)\n\\(x=1,\\;y=2\\)' },
        { title: 'Verifica del minimo', body: '\\(f(1,2)=1+4=5\\). Poiché la funzione obiettivo è convessa e il vincolo è lineare, questo è un **minimo vincolato**.' }
      ],
      en: [
        { title: 'Gradients', body: '\\(\\nabla f=(2x,2y)\\), \\(\\nabla g=(1,2)\\)' },
        { title: 'Lagrange system', body: '\\[2x=\\lambda,\\quad 2y=2\\lambda,\\quad x+2y=5\\]' },
        { title: 'From first two equations', body: '\\(x=\\lambda/2\\), \\(y=\\lambda\\)' },
        { title: 'Substitute into constraint', body: '\\(\\lambda/2+2\\lambda=5\\Rightarrow\\lambda=2\\Rightarrow x=1,y=2\\)' },
        { title: 'Minimum check', body: '\\(f(1,2)=5\\) is the **constrained minimum**.' }
      ]
    },
    answer: { it: 'Minimo vincolato in \\((1,2)\\) con \\(f(1,2)=5\\)', en: 'Constrained minimum at \\((1,2)\\) with \\(f(1,2)=5\\)' }
  },
  {
    id: 'a2-04', subject: 'a2', diff: 'medium',
    title: { it: 'Hessiana e classificazione dei punti critici', en: 'Hessian matrix and critical point classification' },
    tags: { it: ['Hessiana', 'Punti critici', 'Massimi e minimi'], en: ['Hessian', 'Critical points', 'Max/min'] },
    problem: {
      it: 'Classifica i punti critici di:\n\\[f(x,y)=x^3-3x+y^2-4y+1\\]',
      en: 'Classify the critical points of:\n\\[f(x,y)=x^3-3x+y^2-4y+1\\]'
    },
    hint: {
      it: 'Imposta \\(\\nabla f = 0\\), poi calcola la matrice Hessiana \\(H\\) e usa il criterio \\(\\det H\\) e \\(f_{xx}\\).',
      en: 'Set \\(\\nabla f=0\\), compute the Hessian \\(H\\), then use \\(\\det H\\) and \\(f_{xx}\\) for classification.'
    },
    steps: {
      it: [
        { title: 'Punti critici', body: '\\(f_x=3x^2-3=0\\Rightarrow x=\\pm1\\)\n\\(f_y=2y-4=0\\Rightarrow y=2\\)\nPunti: \\((1,2)\\) e \\((-1,2)\\)' },
        { title: 'Hessiana', body: '\\[H=\\begin{pmatrix}6x&0\\\\0&2\\end{pmatrix}\\]' },
        { title: 'In (1,2)', body: '\\(H=\\begin{pmatrix}6&0\\\\0&2\\end{pmatrix}\\), \\(\\det H=12>0\\), \\(f_{xx}=6>0\\)\n\\(\\Rightarrow\\) **minimo locale**. \\(f(1,2)=1-3+4-8+1=-5\\)' },
        { title: 'In (-1,2)', body: '\\(H=\\begin{pmatrix}-6&0\\\\0&2\\end{pmatrix}\\), \\(\\det H=-12<0\\)\n\\(\\Rightarrow\\) **punto di sella**.' }
      ],
      en: [
        { title: 'Critical points', body: '\\(f_x=3x^2-3=0\\Rightarrow x=\\pm1\\); \\(f_y=2y-4=0\\Rightarrow y=2\\)' },
        { title: 'Hessian', body: '\\[H=\\begin{pmatrix}6x&0\\\\0&2\\end{pmatrix}\\]' },
        { title: 'At (1,2)', body: '\\(\\det H=12>0\\), \\(f_{xx}>0\\Rightarrow\\) **local minimum**, \\(f(1,2)=-5\\)' },
        { title: 'At (-1,2)', body: '\\(\\det H=-12<0\\Rightarrow\\) **saddle point**.' }
      ]
    },
    answer: { it: '\\((1,2)\\): minimo locale con \\(f=-5\\); \\((-1,2)\\): sella', en: '\\((1,2)\\): local min, \\(f=-5\\); \\((-1,2)\\): saddle point' }
  },
  {
    id: 'a2-05', subject: 'a2', diff: 'hard',
    title: { it: 'Serie di Fourier', en: 'Fourier series' },
    tags: { it: ['Fourier', 'Serie', 'Analisi armonica'], en: ['Fourier', 'Series', 'Harmonic analysis'] },
    exam: true,
    problem: {
      it: 'Calcola la serie di Fourier di \\(f(x)=x\\) su \\([-\\pi,\\pi]\\) e usa il risultato per trovare \\(\\sum_{n=1}^{\\infty}\\frac{(-1)^{n+1}}{n}\\).',
      en: 'Find the Fourier series of \\(f(x)=x\\) on \\([-\\pi,\\pi]\\) and use the result to find \\(\\sum_{n=1}^{\\infty}\\frac{(-1)^{n+1}}{n}\\).'
    },
    hint: {
      it: 'Poiché \\(f(x)=x\\) è dispari, \\(a_n=0\\). Calcola \\(b_n=\\frac{2}{\\pi}\\int_0^{\\pi}x\\sin(nx)\\,dx\\) per parti.',
      en: 'Since \\(f(x)=x\\) is odd, \\(a_n=0\\). Compute \\(b_n=\\frac{2}{\\pi}\\int_0^{\\pi}x\\sin(nx)\\,dx\\) by parts.'
    },
    steps: {
      it: [
        { title: 'Coefficienti di Fourier', body: '\\(a_n=0\\) (\\(f\\) dispari). \\[b_n=\\frac{1}{\\pi}\\int_{-\\pi}^{\\pi}x\\sin(nx)\\,dx=\\frac{2}{\\pi}\\int_0^{\\pi}x\\sin(nx)\\,dx\\]' },
        { title: 'Integrazione per parti', body: '\\[=\\frac{2}{\\pi}\\left[-\\frac{x\\cos(nx)}{n}+\\frac{\\sin(nx)}{n^2}\\right]_0^{\\pi}=\\frac{2}{\\pi}\\cdot\\frac{-\\pi\\cos(n\\pi)}{n}=\\frac{2(-1)^{n+1}}{n}\\]' },
        { title: 'Serie di Fourier', body: '\\[x=\\sum_{n=1}^{\\infty}\\frac{2(-1)^{n+1}}{n}\\sin(nx)\\quad x\\in(-\\pi,\\pi)\\]' },
        { title: 'Valutazione in \\(x=\\pi/2\\)', body: '\\(\\frac{\\pi}{2}=\\sum_{n=1}^{\\infty}\\frac{2(-1)^{n+1}}{n}\\sin\\frac{n\\pi}{2}\\)\nI termini con \\(n\\) pari si annullano. Per \\(n=2k-1\\):\n\\[\\frac{\\pi}{4}=1-\\frac{1}{3}+\\frac{1}{5}-\\cdots\\quad\\text{(Leibniz)}\\]' },
        { title: 'Identità di Parseval (alternativa)', body: 'Usando \\(x=\\pi\\) (con convergenza puntuale): \\(\\sum_{n=1}^\\infty\\frac{(-1)^{n+1}}{n}=\\ln 2\\approx0.693\\)' }
      ],
      en: [
        { title: 'Fourier coefficients', body: '\\(a_n=0\\) (odd function). \\(b_n=\\frac{2(-1)^{n+1}}{n}\\)' },
        { title: 'Fourier series', body: '\\[x=\\sum_{n=1}^{\\infty}\\frac{2(-1)^{n+1}}{n}\\sin(nx),\\quad x\\in(-\\pi,\\pi)\\]' },
        { title: 'Evaluation at \\(x=1\\)', body: 'Using the alternating series result: \\(\\sum_{n=1}^\\infty\\frac{(-1)^{n+1}}{n}=\\ln 2\\)' }
      ]
    },
    answer: { it: '\\(\\displaystyle\\sum_{n=1}^{\\infty}\\frac{(-1)^{n+1}}{n}=\\ln 2\\approx 0.6931\\)', en: '\\(\\displaystyle\\sum_{n=1}^{\\infty}\\frac{(-1)^{n+1}}{n}=\\ln 2\\approx 0.6931\\)' }
  },
  {
    id: 'a2-06', subject: 'a2', diff: 'medium',
    title: { it: 'Teorema di Green', en: 'Green\'s theorem' },
    tags: { it: ['Teorema di Green', 'Integrali di linea'], en: ['Green\'s theorem', 'Line integrals'] },
    problem: {
      it: 'Calcola l\'integrale di linea \\(\\oint_C (y^2\\,dx + x^2\\,dy)\\) dove \\(C\\) è il perimetro del quadrato con vertici \\((0,0),(1,0),(1,1),(0,1)\\) percorso in senso antiorario, usando il teorema di Green.',
      en: 'Compute the line integral \\(\\oint_C (y^2\\,dx + x^2\\,dy)\\) where \\(C\\) is the perimeter of the unit square with vertices \\((0,0),(1,0),(1,1),(0,1)\\) counterclockwise, using Green\'s theorem.'
    },
    hint: {
      it: 'Green: \\(\\oint_C P\\,dx+Q\\,dy = \\iint_D\\left(\\frac{\\partial Q}{\\partial x}-\\frac{\\partial P}{\\partial y}\\right)dA\\).',
      en: 'Green: \\(\\oint_C P\\,dx+Q\\,dy = \\iint_D\\left(\\frac{\\partial Q}{\\partial x}-\\frac{\\partial P}{\\partial y}\\right)dA\\).'
    },
    steps: {
      it: [
        { title: 'Identificazione', body: '\\(P=y^2\\), \\(Q=x^2\\)\n\\(\\frac{\\partial Q}{\\partial x}=2x\\), \\(\\frac{\\partial P}{\\partial y}=2y\\)' },
        { title: 'Applicazione di Green', body: '\\[\\oint_C=\\iint_{[0,1]^2}(2x-2y)\\,dA\\]' },
        { title: 'Calcolo', body: '\\[=2\\int_0^1\\int_0^1(x-y)\\,dx\\,dy=2\\int_0^1\\left[\\frac{x^2}{2}-yx\\right]_0^1dy\\]\n\\[=2\\int_0^1\\left(\\frac{1}{2}-y\\right)dy=2\\left[\\frac{y}{2}-\\frac{y^2}{2}\\right]_0^1=2(\\frac{1}{2}-\\frac{1}{2})=0\\]' }
      ],
      en: [
        { title: 'Identification', body: '\\(P=y^2\\), \\(Q=x^2\\); \\(\\frac{\\partial Q}{\\partial x}-\\frac{\\partial P}{\\partial y}=2x-2y\\)' },
        { title: 'Apply Green', body: '\\[\\oint_C=\\iint_{[0,1]^2}(2x-2y)\\,dA\\]' },
        { title: 'Compute', body: '\\[=2\\int_0^1\\int_0^1(x-y)\\,dx\\,dy=2\\cdot0=0\\]' }
      ]
    },
    answer: { it: '\\(\\oint_C = 0\\)', en: '\\(\\oint_C = 0\\)' }
  },
  {
    id: 'a2-07', subject: 'a2', diff: 'easy',
    title: { it: 'Integrale triplo in coordinate cilindriche', en: 'Triple integral in cylindrical coordinates' },
    tags: { it: ['Integrali tripli', 'Coordinate cilindriche'], en: ['Triple integrals', 'Cylindrical coordinates'] },
    problem: {
      it: 'Calcola il volume del cilindro \\(x^2+y^2\\leq 4\\), \\(0\\leq z\\leq 3\\) usando le coordinate cilindriche.',
      en: 'Compute the volume of the cylinder \\(x^2+y^2\\leq 4\\), \\(0\\leq z\\leq 3\\) using cylindrical coordinates.'
    },
    hint: {
      it: '\\(dV=r\\,dr\\,d\\theta\\,dz\\) in coordiante cilindriche. Il cilindro: \\(0\\leq r\\leq 2\\), \\(0\\leq\\theta\\leq 2\\pi\\), \\(0\\leq z\\leq 3\\).',
      en: '\\(dV=r\\,dr\\,d\\theta\\,dz\\) in cylindrical coords. Cylinder: \\(0\\leq r\\leq 2\\), \\(0\\leq\\theta\\leq 2\\pi\\), \\(0\\leq z\\leq 3\\).'
    },
    steps: {
      it: [
        { title: 'Setup in coordinate cilindriche', body: '\\[V=\\int_0^{2\\pi}\\int_0^2\\int_0^3 r\\,dz\\,dr\\,d\\theta\\]' },
        { title: 'Integrale in z', body: '\\[=\\int_0^{2\\pi}\\int_0^2 3r\\,dr\\,d\\theta\\]' },
        { title: 'Integrale in r', body: '\\[=\\int_0^{2\\pi}3\\cdot\\frac{r^2}{2}\\Big|_0^2 d\\theta=\\int_0^{2\\pi}6\\,d\\theta\\]' },
        { title: 'Integrale in θ', body: '\\[=6\\cdot2\\pi=12\\pi\\approx37.7\\]' }
      ],
      en: [
        { title: 'Setup', body: '\\[V=\\int_0^{2\\pi}\\int_0^2\\int_0^3 r\\,dz\\,dr\\,d\\theta\\]' },
        { title: 'Integrate z', body: '\\[=3\\int_0^{2\\pi}\\int_0^2 r\\,dr\\,d\\theta\\]' },
        { title: 'Integrate r and θ', body: '\\[=3\\cdot2\\cdot2\\pi=12\\pi\\]' }
      ]
    },
    answer: { it: '\\(V=12\\pi\\approx37.7\\) unità cubiche', en: '\\(V=12\\pi\\approx37.7\\) cubic units' }
  }
];

// ===== FORMULAS REFERENCE =====
const FORMULAS = {
  it: [
    { name: 'Limite fondamentale', expr: '\\(\\displaystyle\\lim_{x\\to0}\\frac{\\sin x}{x}=1\\)' },
    { name: 'Numero di Eulero', expr: '\\(\\displaystyle\\lim_{n\\to\\infty}\\left(1+\\frac{1}{n}\\right)^n=e\\)' },
    { name: 'Derivata composta', expr: '\\((f\\circ g)\'=f\'(g)\\cdot g\'\\)' },
    { name: 'Integrazione per parti', expr: '\\(\\int u\\,dv=uv-\\int v\\,du\\)' },
    { name: 'Serie geometrica', expr: '\\(\\displaystyle\\sum_{n=0}^\\infty ar^n=\\frac{a}{1-r},\\;|r|<1\\)' },
    { name: 'Teorema di Bayes', expr: '\\(P(A|B)=\\frac{P(B|A)P(A)}{P(B)}\\)' },
    { name: 'Normale standard', expr: '\\(X\\sim\\mathcal{N}(0,1)\\Rightarrow P(|X|<1.96)\\approx0.95\\)' },
    { name: 'Proprietà Poisson', expr: '\\(X\\sim\\text{Poi}(\\lambda)\\Rightarrow E[X]=\\text{Var}(X)=\\lambda\\)' },
    { name: 'EDO lineare 1°', expr: '\\(y\'+p(x)y=q(x)\\Rightarrow y=e^{-P}\\int qe^P\\,dx\\)' },
    { name: 'Autovalori', expr: '\\(\\det(A-\\lambda I)=0\\)' },
    { name: 'Teorema di Green', expr: '\\(\\oint_C P\\,dx+Q\\,dy=\\iint_D(Q_x-P_y)\\,dA\\)' },
    { name: 'Moltiplicatori di Lagrange', expr: '\\(\\nabla f=\\lambda\\nabla g\\)' },
  ],
  en: [
    { name: 'Fundamental limit', expr: '\\(\\displaystyle\\lim_{x\\to0}\\frac{\\sin x}{x}=1\\)' },
    { name: 'Euler\'s number', expr: '\\(\\displaystyle\\lim_{n\\to\\infty}\\left(1+\\frac{1}{n}\\right)^n=e\\)' },
    { name: 'Chain rule', expr: '\\((f\\circ g)\'=f\'(g)\\cdot g\'\\)' },
    { name: 'Integration by parts', expr: '\\(\\int u\\,dv=uv-\\int v\\,du\\)' },
    { name: 'Geometric series', expr: '\\(\\displaystyle\\sum_{n=0}^\\infty ar^n=\\frac{a}{1-r},\\;|r|<1\\)' },
    { name: 'Bayes theorem', expr: '\\(P(A|B)=\\frac{P(B|A)P(A)}{P(B)}\\)' },
    { name: 'Standard normal', expr: '\\(P(|Z|<1.96)\\approx0.95\\)' },
    { name: 'Poisson property', expr: '\\(X\\sim\\text{Poi}(\\lambda)\\Rightarrow E[X]=\\text{Var}(X)=\\lambda\\)' },
    { name: 'First order linear ODE', expr: '\\(y\'+p(x)y=q(x)\\Rightarrow y=e^{-P}\\int qe^P\\,dx\\)' },
    { name: 'Eigenvalues', expr: '\\(\\det(A-\\lambda I)=0\\)' },
    { name: 'Green\'s theorem', expr: '\\(\\oint_C P\\,dx+Q\\,dy=\\iint_D(Q_x-P_y)\\,dA\\)' },
    { name: 'Lagrange multipliers', expr: '\\(\\nabla f=\\lambda\\nabla g\\)' },
  ]
};

// ===== SUBJECT COLORS =====
const SUBJ_COLORS = { a1: '#388bfd', la: '#2ea043', prob: '#a371f7', edo: '#da3633', a2: '#e3b341' };
const SUBJ_PROG_COLORS = { a1: '#388bfd', la: '#2ea043', prob: '#a371f7', edo: '#da3633', a2: '#e3b341' };

// ===== FILTERING =====
function getFiltered() {
  let list = PROBLEMS;
  if (currentTab !== 'all') list = list.filter(p => p.subject === currentTab);
  if (currentDiff !== 'all') list = list.filter(p => p.diff === currentDiff);
  return list;
}

function getFilteredBySearch(query) {
  const q = query.toLowerCase();
  return PROBLEMS.filter(p => {
    const title = p.title[currentLang].toLowerCase();
    const tags = (p.tags[currentLang] || []).join(' ').toLowerCase();
    const subj = p.subject;
    return title.includes(q) || tags.includes(q) || subj.includes(q);
  });
}

// ===== RENDER PROBLEM CARD =====
function renderCard(p, idx) {
  const t = T[currentLang];
  const lang = currentLang;
  const isSolved = solvedSet.has(p.id);

  const diffClass = { easy: 'tag-easy', medium: 'tag-medium', hard: 'tag-hard' }[p.diff];
  const diffLabel = { easy: t.diff_easy, medium: t.diff_med, hard: t.diff_hard }[p.diff];
  const color = SUBJ_COLORS[p.subject] || '#d4a843';

  const tagsHtml = (p.tags[lang] || []).map(tag =>
    `<span class="tag tag-topic">${tag}</span>`
  ).join('');

  const examBadge = p.exam ? `<span class="tag tag-exam">Esame</span>` : '';

  const stepsHtml = (p.steps[lang] || []).map((s, i) => `
    <div class="solution-step">
      <div class="step-num">${i + 1}</div>
      <div class="step-content">
        <h5>${s.title}</h5>
        <p>${s.body.replace(/\n/g, '<br>')}</p>
      </div>
    </div>
  `).join('');

  const animDelay = Math.min(idx * 0.04, 0.5);

  return `
    <div class="problem-card${isSolved ? ' solved' : ''}" id="card-${p.id}" style="animation-delay:${animDelay}s" data-id="${p.id}">
      <div class="card-header" onclick="toggleCard('${p.id}')">
        <div class="problem-number">#${String(idx + 1).padStart(2, '0')}</div>
        <div class="card-meta">
          <div class="card-title">${p.title[lang]}${isSolved ? ' <span style="color:var(--accent2);font-size:0.8rem;">✓</span>' : ''}</div>
          <div class="card-tags">
            <span class="tag ${diffClass}">${diffLabel}</span>
            ${tagsHtml}
            ${examBadge}
          </div>
        </div>
        <div class="card-chevron">
          <svg width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><polyline points="6 9 12 15 18 9"/></svg>
        </div>
      </div>
      <div class="card-body">
        <div class="problem-statement" data-label="${t.problem_label}">
          <p>${p.problem[lang].replace(/\n/g, '<br>')}</p>
        </div>
        <div class="hint-box">
          <span class="hint-icon">💡</span>
          <span>${p.hint[lang]}</span>
        </div>
        <button class="solution-toggle" onclick="toggleSolution('${p.id}', this)" id="sol-btn-${p.id}">
          ${t.show_sol}
        </button>
        <div class="solution-content" id="sol-${p.id}">
          <div style="margin-bottom:14px;">
            ${stepsHtml}
          </div>
          <div class="answer-box">
            <span class="answer-icon">✓</span>
            <div>
              <div class="answer-text">${t.answer_label}
                <span>${p.answer[lang]}</span>
              </div>
            </div>
          </div>
          <button onclick="toggleSolved('${p.id}')" 
            style="margin-top:12px;background:none;border:1px solid var(--border);border-radius:6px;padding:7px 14px;color:var(--text-muted);font-size:0.78rem;cursor:pointer;display:flex;align-items:center;gap:6px;transition:var(--transition)"
            id="solved-btn-${p.id}"
            onmouseover="this.style.borderColor='var(--accent2)';this.style.color='var(--accent2)'"
            onmouseout="this.style.borderColor='var(--border)';this.style.color='var(--text-muted)'">
            ${isSolved ? '✓ ' + t.mark_unsolved : '○ ' + t.mark_solved}
          </button>
        </div>
      </div>
    </div>
  `;
}

// ===== RENDER PROBLEMS LIST =====
function renderProblems() {
  const container = document.getElementById('problemsList');
  if (!container) return;

  const filtered = getFiltered();
  const t = T[currentLang];

  document.getElementById('problemsCount').textContent = `${filtered.length} ${t.problems_label.toLowerCase()}`;

  if (filtered.length === 0) {
    container.innerHTML = `<div class="empty-state">
      <div class="empty-icon">🔍</div>
      <h4>${t.no_results}</h4>
      <p>${t.no_results_sub}</p>
    </div>`;
    return;
  }

  container.innerHTML = filtered.map((p, i) => renderCard(p, i)).join('');

  // Re-render math
  if (window.MathJax) {
    MathJax.typesetPromise && MathJax.typesetPromise([container]);
  }
}

// ===== SECTION HEADER =====
function renderSectionHeader() {
  const t = T[currentLang];
  const subject = SUBJECTS.find(s => s.id === currentTab);
  const color = subject ? subject.color : '#d4a843';
  const icon = subject ? subject.icon : '∑';
  const tabKey = currentTab === 'all' ? 'tab_all' : `tab_${currentTab}`;
  const name = t[tabKey] || currentTab;
  const desc = t.section_desc[currentTab] || '';

  const el = document.getElementById('sectionHeader');
  if (!el) return;
  el.innerHTML = `
    <div class="section-icon" style="background:${color}22;color:${color}">${icon}</div>
    <div>
      <h3>${name}</h3>
      <p>${desc}</p>
    </div>
  `;
}

// ===== TOGGLE CARD =====
function toggleCard(id) {
  const card = document.getElementById(`card-${id}`);
  if (!card) return;
  const isOpen = card.classList.contains('open');
  card.classList.toggle('open', !isOpen);

  if (!isOpen && window.MathJax) {
    MathJax.typesetPromise && MathJax.typesetPromise([card]);
  }
}

// ===== TOGGLE SOLUTION =====
function toggleSolution(id, btn) {
  const sol = document.getElementById(`sol-${id}`);
  if (!sol) return;
  const t = T[currentLang];
  const visible = sol.classList.contains('visible');
  sol.classList.toggle('visible', !visible);
  btn.classList.toggle('revealed', !visible);
  btn.textContent = visible ? t.show_sol : t.hide_sol;

  if (!visible && window.MathJax) {
    MathJax.typesetPromise && MathJax.typesetPromise([sol]);
  }
}

// ===== TOGGLE SOLVED =====
function toggleSolved(id) {
  if (solvedSet.has(id)) {
    solvedSet.delete(id);
  } else {
    solvedSet.add(id);
  }
  localStorage.setItem('solved', JSON.stringify([...solvedSet]));
  const btn = document.getElementById(`solved-btn-${id}`);
  const card = document.getElementById(`card-${id}`);
  const t = T[currentLang];
  if (btn) {
    const isSolved = solvedSet.has(id);
    btn.textContent = isSolved ? `✓ ${t.mark_unsolved}` : `○ ${t.mark_solved}`;
    const title = card?.querySelector('.card-title');
    if (title) {
      if (isSolved && !title.querySelector('.solved-check')) {
        title.insertAdjacentHTML('beforeend', ' <span class="solved-check" style="color:var(--accent2);font-size:0.8rem;">✓</span>');
      } else {
        title.querySelector('.solved-check')?.remove();
      }
    }
  }
  updateProgress();
}

// ===== PROGRESS =====
function updateProgress() {
  const t = T[currentLang];
  const total = PROBLEMS.length;
  const solved = solvedSet.size;
  const pct = Math.round((solved / total) * 100);

  const fill = document.getElementById('progressFill');
  const pctEl = document.getElementById('progressPct');
  if (fill) fill.style.width = pct + '%';
  if (pctEl) pctEl.textContent = `${solved}/${total} (${pct}%)`;

  const subjects = ['a1', 'la', 'prob', 'edo', 'a2'];
  subjects.forEach(sub => {
    const subProblems = PROBLEMS.filter(p => p.subject === sub);
    const subSolved = subProblems.filter(p => solvedSet.has(p.id)).length;
    const subPct = subProblems.length ? Math.round((subSolved / subProblems.length) * 100) : 0;
    const fillEl = document.getElementById(`prog-${sub}`);
    const countEl = document.getElementById(`prog-count-${sub}`);
    if (fillEl) fillEl.style.width = subPct + '%';
    if (countEl) countEl.textContent = `${subSolved}/${subProblems.length}`;
  });
}

// ===== RENDER PROGRESS SECTION =====
function renderProgress() {
  const t = T[currentLang];
  const el = document.getElementById('progressSection');
  if (!el) return;

  const subjects = [
    { id: 'a1', label: t.tab_a1 },
    { id: 'la', label: t.tab_la },
    { id: 'prob', label: t.tab_prob },
    { id: 'edo', label: t.tab_edo },
    { id: 'a2', label: t.tab_a2 },
  ];

  const subjHtml = subjects.map(s => `
    <div class="prog-subject">
      <div class="prog-subject-name">${s.label}</div>
      <div class="prog-subject-bar">
        <div class="prog-subject-fill" id="prog-${s.id}" style="background:${SUBJ_PROG_COLORS[s.id]};width:0%"></div>
      </div>
      <div class="prog-subject-count" id="prog-count-${s.id}">0/0</div>
    </div>
  `).join('');

  el.innerHTML = `
    <div class="progress-header">
      <h4>${t.progress_title}</h4>
      <span class="progress-pct" id="progressPct">0/${PROBLEMS.length} (0%)</span>
    </div>
    <div class="progress-bar-wrap"><div class="progress-bar-fill" id="progressFill" style="width:0%"></div></div>
    <div class="progress-subjects">${subjHtml}</div>
  `;

  updateProgress();
}

// ===== RENDER TABS =====
function renderTabs() {
  const t = T[currentLang];
  const tabs = [
    { id: 'all', label: t.tab_all },
    { id: 'a1', label: t.tab_a1 },
    { id: 'la', label: t.tab_la },
    { id: 'prob', label: t.tab_prob },
    { id: 'edo', label: t.tab_edo },
    { id: 'a2', label: t.tab_a2 },
  ];

  const el = document.getElementById('tabsInner');
  if (!el) return;

  el.innerHTML = tabs.map(tab => {
    const count = tab.id === 'all' ? PROBLEMS.length : PROBLEMS.filter(p => p.subject === tab.id).length;
    const subj = SUBJECTS.find(s => s.id === tab.id);
    const color = subj ? subj.color : '#d4a843';
    return `
      <button class="tab-btn${currentTab === tab.id ? ' active' : ''}" onclick="setTab('${tab.id}')">
        <span class="tab-dot" style="background:${color}"></span>
        ${tab.label}
        <span class="tab-count">${count}</span>
      </button>
    `;
  }).join('');
}

// ===== RENDER FILTERS =====
function renderFilters() {
  const t = T[currentLang];
  const diffs = [
    { id: 'all', label: t.diff_all },
    { id: 'easy', label: t.diff_easy },
    { id: 'medium', label: t.diff_med },
    { id: 'hard', label: t.diff_hard },
  ];

  const el = document.getElementById('diffFilters');
  if (!el) return;
  el.innerHTML = diffs.map(d => `
    <button class="diff-btn${currentDiff === d.id ? ' active' : ''}" onclick="setDiff('${d.id}')">${d.label}</button>
  `).join('');
}

// ===== RENDER HERO STATS =====
function renderHero() {
  const t = T[currentLang];
  const el = document.getElementById('heroTitle');
  const sub = document.getElementById('heroSub');
  const badge = document.getElementById('heroBadge');
  const statsProblems = document.getElementById('statProblems');
  const statsSubjects = document.getElementById('statSubjects');
  const statsCoverage = document.getElementById('statCoverage');
  const statsProblemsLabel = document.getElementById('statProblemsLabel');
  const statsSubjectsLabel = document.getElementById('statSubjectsLabel');
  const statsCoverageLabel = document.getElementById('statCoverageLabel');

  if (el) el.textContent = t.hero_title;
  if (sub) sub.textContent = t.hero_sub;
  if (badge) badge.textContent = t.badge;
  if (statsProblems) statsProblems.textContent = PROBLEMS.length;
  if (statsSubjects) statsSubjects.textContent = '5';
  if (statsCoverage) statsCoverage.textContent = '2';
  if (statsProblemsLabel) statsProblemsLabel.textContent = t.problems_label;
  if (statsSubjectsLabel) statsSubjectsLabel.textContent = t.subjects_label;
  if (statsCoverageLabel) statsCoverageLabel.textContent = t.coverage_label;
}

// ===== RENDER FORMULA REFERENCE =====
function renderFormulas() {
  const t = T[currentLang];
  const el = document.getElementById('formulaBody');
  const header = document.getElementById('formulaHeader');
  if (header) header.querySelector('h4').innerHTML = `📐 ${t.formula_ref_title.replace('📐 ', '')}`;
  if (!el) return;

  const formulas = FORMULAS[currentLang];
  el.innerHTML = `<div class="formula-grid">` + formulas.map(f => `
    <div class="formula-item">
      <div class="formula-name">${f.name}</div>
      <div class="formula-expr">${f.expr}</div>
    </div>
  `).join('') + `</div>`;

  if (window.MathJax) MathJax.typesetPromise && MathJax.typesetPromise([el]);
}

// ===== SET TAB =====
function setTab(id) {
  currentTab = id;
  renderTabs();
  renderFilters();
  renderSectionHeader();
  renderProblems();
}

// ===== SET DIFFICULTY =====
function setDiff(id) {
  currentDiff = id;
  renderFilters();
  renderProblems();
}

// ===== SET LANGUAGE =====
function setLang(lang) {
  currentLang = lang;
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.lang === lang);
  });
  document.getElementById('searchInput').placeholder = T[lang].search_ph;
  renderHero();
  renderTabs();
  renderFilters();
  renderSectionHeader();
  renderProgress();
  renderProblems();
  renderFormulas();
}

// ===== SEARCH =====
let searchTimer;
function handleSearch(query) {
  clearTimeout(searchTimer);
  searchTimer = setTimeout(() => {
    const main = document.getElementById('mainContent');
    const searchResultsEl = document.getElementById('searchResults');
    const t = T[currentLang];

    if (!query.trim()) {
      main.style.display = '';
      searchResultsEl.style.display = 'none';
      return;
    }

    main.style.display = 'none';
    searchResultsEl.style.display = 'block';

    const results = getFilteredBySearch(query);
    const label = document.getElementById('searchResultLabel');
    const list = document.getElementById('searchResultList');
    if (label) label.innerHTML = `<span>🔍</span> ${results.length} ${t.search_results} "<strong>${query}</strong>"`;
    if (list) {
      if (results.length === 0) {
        list.innerHTML = `<div class="empty-state"><div class="empty-icon">🔍</div><h4>${t.no_results}</h4><p>${t.no_results_sub}</p></div>`;
      } else {
        list.innerHTML = results.map((p, i) => renderCard(p, i)).join('');
        if (window.MathJax) MathJax.typesetPromise && MathJax.typesetPromise([list]);
      }
    }
  }, 300);
}

// ===== FORMULA PANEL TOGGLE =====
function toggleFormulas() {
  const panel = document.getElementById('formulaPanel');
  if (panel) {
    panel.classList.toggle('open');
    if (panel.classList.contains('open') && window.MathJax) {
      MathJax.typesetPromise && MathJax.typesetPromise([panel]);
    }
  }
}

// ===== BACK TO TOP =====
window.addEventListener('scroll', () => {
  const btn = document.getElementById('backToTop');
  if (btn) btn.classList.toggle('visible', window.scrollY > 400);
});

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// ===== INIT =====
document.addEventListener('DOMContentLoaded', () => {
  renderHero();
  renderTabs();
  renderFilters();
  renderSectionHeader();
  renderProgress();
  renderProblems();
  renderFormulas();

  const searchInput = document.getElementById('searchInput');
  if (searchInput) {
    searchInput.addEventListener('input', e => handleSearch(e.target.value));
    searchInput.placeholder = T[currentLang].search_ph;
  }
});
