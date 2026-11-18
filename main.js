/* ============================================================
   NOTES LIBRARY — ragnor live
   All data lives here — easy to edit!
   ============================================================ */

// ─────────────────────────────────────────────
// 📝  EDIT YOUR DATA BELOW
//     Just change text, add items, or remove them.
// ─────────────────────────────────────────────

const SUBJECTS = [
  {
    id: "physics",
    emoji: "⚡",
    title: "Physics",
    description: "Mechanics, Waves, Optics & more",
    accent: "#00f0ff",          // cyan
    chapters: [
      {
        name: "Laws of Motion",
        description: "Newton's three laws, inertia, friction",
        notes: [
          {
            label: "Newton's Laws — Complete Notes",
            badge: "best",
            content: `Newton's First Law (Inertia)
An object at rest stays at rest, and an object in motion stays in motion at constant velocity, unless acted upon by a net external force.

Newton's Second Law (F = ma)
The acceleration of an object is directly proportional to the net force and inversely proportional to its mass.
  • F = ma  (Force = mass × acceleration)
  • Unit of force: Newton (N) = kg·m/s²

Newton's Third Law
For every action, there is an equal and opposite reaction.
  • Forces always come in pairs
  • They act on different objects

Key Concepts:
  • Inertia — resistance to change in motion
  • Friction — force opposing relative motion
  • Free Body Diagrams — draw ALL forces on the object`
          },
          {
            label: "Quick Formulas Sheet",
            badge: "formula",
            content: `Essential Formulas:

  F = ma               → Net force
  W = mg               → Weight (g ≈ 9.8 m/s²)
  f = μN               → Friction force
  p = mv               → Momentum
  J = FΔt = Δp         → Impulse

Remember: Always resolve forces into components when dealing with inclined planes!`
          }
        ]
      },
      {
        name: "Work, Energy & Power",
        description: "Conservation of energy, kinetic & potential energy",
        notes: [
          {
            label: "Energy — Detailed Notes",
            badge: "detailed",
            content: `Kinetic Energy (KE)
Energy possessed by a moving object.
  KE = ½mv²

Potential Energy (PE)
Energy due to position or configuration.
  Gravitational PE = mgh
  Elastic PE = ½kx²

Work-Energy Theorem
  Net work done = Change in kinetic energy
  W_net = ΔKE = ½mv² - ½mu²

Conservation of Energy
  Total energy in an isolated system remains constant.
  KE₁ + PE₁ = KE₂ + PE₂

Power
  P = W/t = Fv
  Unit: Watt (W) = J/s`
          }
        ]
      },
      {
        name: "Waves & Oscillations",
        description: "SHM, wave types, sound & light waves",
        notes: [
          {
            label: "SHM & Wave Properties",
            badge: "best",
            content: `Simple Harmonic Motion (SHM)
  • Restoring force proportional to displacement
  • F = -kx (Hooke's Law)
  • x(t) = A·cos(ωt + φ)

Key Terms:
  • Amplitude (A) — max displacement
  • Time Period (T) — time for one cycle
  • Frequency (f) = 1/T
  • Angular frequency (ω) = 2πf

Wave Properties:
  • Wavelength (λ) — distance between crests
  • v = fλ — wave speed equation
  • Transverse waves — oscillation ⊥ to direction
  • Longitudinal waves — oscillation ∥ to direction`
          }
        ]
      }
    ]
  },
  {
    id: "maths",
    emoji: "📐",
    title: "Mathematics",
    description: "Calculus, Algebra, Coordinate Geometry",
    accent: "#ffe24d",          // yellow
    chapters: [
      {
        name: "Limits & Derivatives",
        description: "Fundamental concepts of calculus",
        notes: [
          {
            label: "Limits — Core Concepts",
            badge: "best",
            content: `What is a Limit?
The value a function approaches as input approaches a point.
  lim(x→a) f(x) = L

Important Limits:
  • lim(x→0) sin(x)/x = 1
  • lim(x→0) (eˣ - 1)/x = 1
  • lim(x→0) (1 + x)^(1/x) = e
  • lim(x→∞) (1 + 1/n)^n = e

L'Hôpital's Rule:
  If lim gives 0/0 or ∞/∞, then:
  lim f(x)/g(x) = lim f'(x)/g'(x)

Derivative = Rate of change
  f'(x) = lim(h→0) [f(x+h) - f(x)] / h

Basic Rules:
  • d/dx (xⁿ) = nxⁿ⁻¹
  • d/dx (sin x) = cos x
  • d/dx (eˣ) = eˣ
  • Chain rule: d/dx f(g(x)) = f'(g(x))·g'(x)`
          }
        ]
      },
      {
        name: "Integration",
        description: "Definite & indefinite integrals, area under curves",
        notes: [
          {
            label: "Integration Essentials",
            badge: "detailed",
            content: `Indefinite Integral
  ∫ f(x)dx = F(x) + C   (antiderivative)

Basic Integrals:
  • ∫ xⁿ dx = xⁿ⁺¹/(n+1) + C
  • ∫ sin x dx = -cos x + C
  • ∫ cos x dx = sin x + C
  • ∫ eˣ dx = eˣ + C
  • ∫ 1/x dx = ln|x| + C

Techniques:
  • Substitution — replace complex parts with u
  • Integration by parts — ∫u dv = uv - ∫v du
  • Partial fractions — split rational expressions

Definite Integral:
  ∫[a to b] f(x)dx = F(b) - F(a)
  Represents area under the curve from a to b.`
          }
        ]
      },
      {
        name: "Coordinate Geometry",
        description: "Straight lines, circles, conic sections",
        notes: [
          {
            label: "Quick Reference",
            badge: "quick",
            content: `Straight Lines:
  • Slope: m = (y₂-y₁)/(x₂-x₁)
  • Point-slope form: y - y₁ = m(x - x₁)
  • Slope-intercept: y = mx + c
  • Distance = √[(x₂-x₁)² + (y₂-y₁)²]

Circles:
  • (x-h)² + (y-k)² = r²
  • Center: (h, k), Radius: r

Parabola:  y² = 4ax  (opens right)
Ellipse:   x²/a² + y²/b² = 1
Hyperbola: x²/a² - y²/b² = 1`
          }
        ]
      }
    ]
  },
  {
    id: "chemistry",
    emoji: "🧪",
    title: "Chemistry",
    description: "Organic, Inorganic & Physical Chemistry",
    accent: "#ff3cac",          // magenta
    chapters: [
      {
        name: "Atomic Structure",
        description: "Bohr's model, quantum numbers, orbitals",
        notes: [
          {
            label: "Atomic Structure — Full Notes",
            badge: "best",
            content: `Bohr's Model:
  • Electrons orbit in fixed energy levels
  • Energy is quantized: Eₙ = -13.6/n² eV
  • Electrons jump levels by absorbing/emitting photons

Quantum Numbers:
  • n (principal) — energy level (1, 2, 3…)
  • l (azimuthal) — shape (0 to n-1)
  • m (magnetic) — orientation (-l to +l)
  • s (spin) — +½ or -½

Orbital Shapes:
  • s orbital — spherical
  • p orbital — dumbbell
  • d orbital — cloverleaf

Aufbau Principle: Fill lowest energy first
Pauli Exclusion: Max 2 electrons per orbital
Hund's Rule: One electron in each orbital before pairing`
          }
        ]
      },
      {
        name: "Chemical Bonding",
        description: "Ionic, covalent, metallic bonds, VSEPR theory",
        notes: [
          {
            label: "Bonding Overview",
            badge: "detailed",
            content: `Ionic Bonding:
  • Transfer of electrons (metal → non-metal)
  • Strong electrostatic attraction
  • Example: NaCl (Na⁺ Cl⁻)

Covalent Bonding:
  • Sharing of electron pairs
  • Polar — unequal sharing (HCl)
  • Non-polar — equal sharing (O₂)

VSEPR Theory:
  Electron pairs around central atom repel each other, determining molecular shape.
  • 2 pairs → Linear (180°)
  • 3 pairs → Trigonal planar (120°)
  • 4 pairs → Tetrahedral (109.5°)
  • 5 pairs → Trigonal bipyramidal
  • 6 pairs → Octahedral

Hybridisation:
  sp (linear), sp² (planar), sp³ (tetrahedral)`
          }
        ]
      },
      {
        name: "Organic Chemistry Basics",
        description: "Hydrocarbons, functional groups, nomenclature",
        notes: [
          {
            label: "Organic Foundations",
            badge: "best",
            content: `Hydrocarbons:
  • Alkanes — CₙH₂ₙ₊₂ (single bonds, saturated)
  • Alkenes — CₙH₂ₙ (double bond, unsaturated)
  • Alkynes — CₙH₂ₙ₋₂ (triple bond)

Functional Groups:
  -OH      → Alcohol
  -CHO     → Aldehyde
  -COOH    → Carboxylic acid
  -NH₂     → Amine
  -CO-     → Ketone

IUPAC Naming Steps:
  1. Find longest carbon chain
  2. Number from end nearest substituent
  3. Name substituents as prefixes
  4. Add suffix for functional group

Isomerism:
  • Structural — same formula, different connections
  • Geometric — cis/trans around double bond
  • Optical — mirror image (chirality)`
          }
        ]
      }
    ]
  },
  {
    id: "biology",
    emoji: "🧬",
    title: "Biology",
    description: "Cell Biology, Genetics, Ecology",
    accent: "#b8ff57",          // lime
    chapters: [
      {
        name: "Cell Structure",
        description: "Organelles, cell membrane, plant vs animal cells",
        notes: [
          {
            label: "Cell Biology — Must Know",
            badge: "best",
            content: `Cell Theory:
  • All living things are made of cells
  • Cell is the basic unit of life
  • All cells arise from pre-existing cells

Key Organelles:
  🔵 Nucleus — DNA, controls cell activities
  🟢 Mitochondria — powerhouse, makes ATP
  🟡 Ribosome — protein synthesis
  🔴 ER (Rough) — protein transport (has ribosomes)
  🟠 ER (Smooth) — lipid synthesis
  🟣 Golgi Apparatus — packaging & shipping
  ⚪ Lysosome — digestion, waste removal

Plant vs Animal:
  Plant cells have: cell wall, chloroplasts, large vacuole
  Animal cells have: centrioles, small vacuoles`
          }
        ]
      },
      {
        name: "Genetics & Heredity",
        description: "DNA, RNA, Mendel's laws, inheritance patterns",
        notes: [
          {
            label: "Genetics Essentials",
            badge: "detailed",
            content: `DNA Structure:
  • Double helix (Watson & Crick)
  • Sugar-phosphate backbone
  • Base pairs: A-T, G-C
  • Replication: semi-conservative

Central Dogma:
  DNA → (transcription) → RNA → (translation) → Protein

Mendel's Laws:
  1. Law of Dominance — dominant allele expressed
  2. Law of Segregation — alleles separate in meiosis
  3. Law of Independent Assortment — genes on different chromosomes sort independently

Punnett Square:
  Cross: Aa × Aa
  Result: AA (25%), Aa (50%), aa (25%)
  Phenotype ratio: 3:1`
          }
        ]
      }
    ]
  },
  {
    id: "english",
    emoji: "📝",
    title: "English",
    description: "Literature, Grammar & Writing Skills",
    accent: "#ff8a3d",          // orange
    chapters: [
      {
        name: "Essay Writing",
        description: "Structure, arguments, and effective writing",
        notes: [
          {
            label: "Essay Structure Guide",
            badge: "best",
            content: `The 5-Paragraph Essay:

1. Introduction
   • Hook — grab the reader's attention
   • Background — context for your topic
   • Thesis statement — your main argument

2. Body Paragraph 1
   • Topic sentence → Evidence → Explanation
   • Transition to next point

3. Body Paragraph 2
   • Second supporting argument
   • Use quotes, stats, or examples

4. Body Paragraph 3
   • Third point or counter-argument
   • Address opposing views

5. Conclusion
   • Restate thesis (different words)
   • Summarize key points
   • End with a strong closing thought

Pro Tips:
  ✅ Use active voice
  ✅ Vary sentence length
  ✅ Show, don't tell
  ❌ Avoid "I think" or "In my opinion"`
          }
        ]
      },
      {
        name: "Literary Devices",
        description: "Metaphor, simile, irony, symbolism & more",
        notes: [
          {
            label: "Quick Reference — Devices",
            badge: "quick",
            content: `Common Literary Devices:

  Simile — comparison using "like" or "as"
    "Her smile was like sunshine"

  Metaphor — direct comparison (no like/as)
    "Time is a thief"

  Personification — giving human traits to non-human
    "The wind whispered"

  Alliteration — repeating initial sounds
    "Peter Piper picked..."

  Irony — opposite of what's expected
    • Verbal: saying the opposite
    • Situational: unexpected outcome
    • Dramatic: audience knows more than characters

  Symbolism — object represents an idea
    Dove = peace, Red = passion/danger

  Foreshadowing — hints at future events
  Hyperbole — exaggeration for effect
  Onomatopoeia — words that sound like their meaning`
          }
        ]
      }
    ]
  },
  {
    id: "cs",
    emoji: "💻",
    title: "Computer Science",
    description: "Programming, Data Structures, Algorithms",
    accent: "#4d7cff",          // blue
    chapters: [
      {
        name: "Data Structures",
        description: "Arrays, stacks, queues, linked lists, trees",
        notes: [
          {
            label: "DS — Overview",
            badge: "best",
            content: `Linear Data Structures:

  Array
    • Fixed size, indexed access O(1)
    • Insert/Delete: O(n)

  Linked List
    • Dynamic size, nodes with pointers
    • Insert at head: O(1), Search: O(n)

  Stack (LIFO)
    • Push, Pop, Peek — all O(1)
    • Uses: undo, recursion, expression evaluation

  Queue (FIFO)
    • Enqueue, Dequeue — O(1)
    • Uses: BFS, scheduling, buffering

Non-Linear:

  Binary Tree
    • Each node has max 2 children
    • BST: left < root < right
    • Search/Insert: O(log n) average

  Hash Table
    • Key-value pairs
    • Average O(1) lookup
    • Handle collisions: chaining or open addressing`
          }
        ]
      },
      {
        name: "Algorithms",
        description: "Sorting, searching, Big-O complexity",
        notes: [
          {
            label: "Sorting & Searching",
            badge: "detailed",
            content: `Sorting Algorithms:

  Bubble Sort — O(n²)
    Compare adjacent, swap if needed. Simple but slow.

  Selection Sort — O(n²)
    Find minimum, place it. Also slow.

  Merge Sort — O(n log n)
    Divide in half, sort, merge. Stable & efficient.

  Quick Sort — O(n log n) average
    Pick pivot, partition around it. Fast in practice.

Searching:

  Linear Search — O(n)
    Check every element. Works on unsorted data.

  Binary Search — O(log n)
    Requires sorted data. Halve search space each step.

Big-O Cheat Sheet:
  O(1)       → Constant (best!)
  O(log n)   → Logarithmic (great)
  O(n)       → Linear (okay)
  O(n log n) → Linearithmic (sorting)
  O(n²)      → Quadratic (avoid if possible)
  O(2ⁿ)      → Exponential (bad)`
          }
        ]
      }
    ]
  }
];


// ─────────────────────────────────────────────
//  🔧  APP LOGIC — you probably don't need to edit below
// ─────────────────────────────────────────────

const $ = (sel) => document.querySelector(sel);
const $$ = (sel) => document.querySelectorAll(sel);

// ---- State ----
let currentSubject = null;
let currentChapter = null;

// ---- Render Subjects ----
function renderSubjects() {
  const grid = $("#subjects-grid");
  grid.innerHTML = SUBJECTS.map(s => `
    <div class="subject-card" data-id="${s.id}" style="--card-accent:${s.accent}">
      <span class="card-emoji">${s.emoji}</span>
      <h3 class="card-title">${s.title}</h3>
      <p class="card-desc">${s.description}</p>
      <span class="card-count">${s.chapters.length} chapter${s.chapters.length > 1 ? 's' : ''}</span>
    </div>
  `).join("");

  grid.querySelectorAll(".subject-card").forEach(card => {
    card.addEventListener("click", () => openSubject(card.dataset.id));
  });
}

// ---- Open Subject → Show Chapters ----
function openSubject(id) {
  currentSubject = SUBJECTS.find(s => s.id === id);
  if (!currentSubject) return;

  $("#subjects").style.display = "none";
  $("#notes-section").style.display = "none";

  const section = $("#chapters-section");
  section.style.display = "block";
  $("#chapters-title").textContent = `${currentSubject.emoji} ${currentSubject.title} — Chapters`;

  const list = $("#chapters-list");
  list.innerHTML = currentSubject.chapters.map((ch, i) => `
    <div class="chapter-card" data-index="${i}">
      <span class="chapter-num">${String(i + 1).padStart(2, '0')}</span>
      <div class="chapter-info">
        <p class="chapter-name">${ch.name}</p>
        <p class="chapter-desc">${ch.description}</p>
      </div>
      <span class="chapter-arrow">→</span>
    </div>
  `).join("");

  list.querySelectorAll(".chapter-card").forEach(card => {
    card.addEventListener("click", () => openChapter(Number(card.dataset.index)));
  });

  section.classList.add("visible");
  window.scrollTo({ top: section.offsetTop - 100, behavior: "smooth" });
}

// ---- Open Chapter → Show Notes ----
function openChapter(index) {
  currentChapter = currentSubject.chapters[index];
  if (!currentChapter) return;

  $("#chapters-section").style.display = "none";

  const section = $("#notes-section");
  section.style.display = "block";
  $("#notes-title").textContent = `📖 ${currentChapter.name}`;

  const container = $("#notes-container");
  container.innerHTML = currentChapter.notes.map(n => {
    const badgeClass = {
      best: "badge-best",
      detailed: "badge-detailed",
      quick: "badge-quick",
      formula: "badge-formula"
    }[n.badge] || "badge-best";

    return `
      <div class="note-card">
        <div class="note-header">
          <h3 class="note-label">${n.label}</h3>
          <span class="note-badge ${badgeClass}">${n.badge}</span>
        </div>
        <div class="note-body">${escapeHTML(n.content)}</div>
      </div>
    `;
  }).join("");

  section.classList.add("visible");
  window.scrollTo({ top: section.offsetTop - 100, behavior: "smooth" });
}

// ---- Navigation ----
$("#back-btn").addEventListener("click", () => {
  $("#chapters-section").style.display = "none";
  $("#subjects").style.display = "block";
  window.scrollTo({ top: $("#subjects").offsetTop - 100, behavior: "smooth" });
});

$("#back-to-chapters").addEventListener("click", () => {
  $("#notes-section").style.display = "none";
  openSubject(currentSubject.id);
});

// ---- Scroll Reveal ----
function setupReveal() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  }, { threshold: 0.1 });

  $$(".reveal").forEach(el => observer.observe(el));
}

// ---- Utils ----
function escapeHTML(str) {
  return str.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;");
}

// ---- Init ----
renderSubjects();
setupReveal();
