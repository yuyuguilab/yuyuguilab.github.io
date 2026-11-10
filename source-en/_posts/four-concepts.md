---
title: "Intelligence Asks for Measurement, Human Intelligence Asks for Norms: Four Words That Never Sat on One Ladder"
date: 2026-11-10 16:00:00
categories: [技术]
tags: [AI, intelligence definitions, AGI, concept analysis, translation protocol, human-referential fitting]
description: "Intelligence, human intelligence, artificial intelligence, AGI — used together daily, yet they are four different types of concepts: a capacity, a sample, an artifact, a reference frame. The popular narrow-to-super ladder welds four types onto one line, and that is the structural reason a century of definition wars never ends. This post gives the level diagram, three illicit slides, and a translation protocol."
---

In 1923, the psychologist Edwin Boring wrote a sentence that has echoed for a century: "Intelligence is what the tests test." A hundred years later, engineers observe intricate structure in the circuits and gradients of neural networks, and a new saying has become fashionable: "generalization lives in the weights."

The two sentences are a century apart, but they share one disease: **a claim that is legitimate inside one layer, spoken with the authority of another.** The first passes a measurement off as a definition. The second passes an engineering observation off as the home address of a capacity. Ask either side a follow-up question — "what exactly do the tests measure?" or "on what grounds does generalization live in weights?" — and neither can answer. Neither will ever answer, because propositions of this shape are built to be unanswerable: when a test fails, you can always blame benchmark contamination or a task set too narrow; the definition itself is never injured. **A proposition that never risks failure is not knowledge. It is a creed.**

The theory I proposed — the human-referential theory of AGI, an account of general intelligence as relative to human practice — has now grown into a four-paper research program. This post takes up its most fundamental question: **intelligence, human intelligence, artificial intelligence, artificial general intelligence — are these four everyday companions the same kind of thing?** The answer: no. They are four different types of concepts, and the popular "level diagram" that strings them on one line is itself a carrier of the confusion.

## One: The Mess, Term by Term

**Intelligence**: two definitional traditions have fought for a century without converging. The formal tradition of Legg and Hutter defines intelligence as "an agent's ability to achieve goals in a wide range of environments." The tradition of Chollet defines it as the efficiency of skill acquisition — the first would rate a system that bought a large stock of skills highly intelligent; the second rates it a fancy skill library. A century on, the disagreement has not narrowed; only the vocabulary has changed.

**Human intelligence**: psychology, in fact, has a serviceable consensus — the Cattell–Horn–Carroll three-stratum model, on which mainstream intelligence tests are designed. But the boundary of that consensus is routinely ignored: it covers the Homo sapiens sample only. Carry a test calibrated on humans over to machines or animals, and it stops working — not an engineering flaw, but a switched reference frame.

**Artificial intelligence**: the founding text deliberately bypassed the definition of intelligence. The Dartmouth proposal says: every aspect of learning can in principle be described so precisely that a machine can simulate it — what gets defined is the *making*; intelligence itself stays an undefined primitive. That leaves the famous moving boundary: "AI is whatever hasn't been done yet."

**Artificial general intelligence**: between 2023 and 2026, definitions entered institutionalized competition — a performance-level matrix, a psychometric-model definition, an economic-clause definition — coexisting and mutually exclusive. Meanwhile industry and regulators systematically swap words (frontier models, superintelligence, general-purpose AI), and no major institution will be bound by its own five-year-old definition or rule on whether AGI has arrived. The disagreement was not resolved; it was shelved by renaming.

Put the four messes side by side and something strange appears: the only "level diagram" in wide circulation — the three-rung ladder from narrow AI to AGI to superintelligence — is a popular convention, not a scholarly classification. **An authoritative account of the levels has never existed.**

## Two: Four Words, Four Chairs

To organize the mess, change the question. Do not ask "what is intelligence"; ask "**for this term, what would it mean for the definition question to be answered?**" Measured by that criterion, the four terms fall into four types.

**Intelligence is a capacity concept.** It answers only "what can the system do, within what range" — never "what is the system made of." Its completed form of definition is a **measurement**: an instrument with a construct-validity claim attached, one that can say what it actually measures.

**Human intelligence is a sample concept.** Not another capacity, but the measurement structure of a tested population. Its completed form is **norms**: standardized instruments, population norms, reliability and validity evidence. Its relation to intelligence is projection, not subset — human intelligence is the projection of the intelligence concept onto the Homo sapiens sample. This single step explains two old puzzles: why the psychometric consensus cannot be extrapolated to machines (the projection switched samples), and why so many "definitions of intelligence" are really definitions of human intelligence (a projection mistaken for its preimage).

**Artificial intelligence is an artifact concept.** A class of engineering objects defined by construction and function criteria. Its completed form is a **functional specification**: a search engine is artificial intelligence whether or not anyone intends to award it the word "intelligent."

**AGI is a reference-frame concept.** The most counterintuitive of the four. Not a bigger capacity but a frame of reference: to call a system "general" is always relative to the range of human practices it references. Its definition **never closes with a definition** — only with a declaration: which practice set is referenced, and by what sampling it is approximated. Every AGI definition on the table is really declaring a reference frame (a cognitive-ability inventory, an economically valuable work set, a task-breadth threshold), and disagreements between reference frames are not empirical disagreements — **no experiment can adjudicate them.** That is the structural reason the definition war cannot end.

Now look back at the three-rung ladder: it welds "the quantity of capacity" (the vertical axis), "the norms of the sample" (humans on the middle rung), "the criteria of the artifact" (what counts as narrow), and "the openness of the reference frame" (what counts as general) onto a single line. The ladder is not wholly wrong — it is a **category splice**: four chairs of different sizes nailed into one bench, with everyone arguing about which rung to sit on.

## Three: Three Floors, Three Chutes

The second instrument: inside every concept, distinguish three layers — the **ontological** (what it is), the **epistemic** (what evidence supports attributing it to a system), and the **methodological** (what procedure detects it). The layers have different truth conditions and different ways of failing. The chronic disease of definition wars is three illicit slides, each a skipped layer.

**Chute one: operationalism — measurement passing as definition.** Boring's dictum is the prototype. Its deepest defect is not being wrong but being unanswerable: test failures always belong to the method; the definition never bleeds. In the history of AI definitions the lesson replayed three times — a measurement functional taken as the definition of intelligence; an evaluation protocol as the definition of generality; an economic clause as the definition of AGI.

**Chute two: the mereological fallacy — mechanism passing as the location of capacity.** Philosophers Bennett and Hacker gave the diagnosis: attributing predicates of the whole to its parts — the category error of "the brain thinks." Applied to today: saying "generalization is in the weights" is not an error but a category slip — **treating a property that has no location as if it had one, like saying weight lives in kilograms.** Generality is a relational property; relational properties have no address. The legitimate products of mechanistic interpretability are mechanism attributions and realization evidence: finding the mechanism that realizes a capacity is not finding the capacity a residence.

On this chute there is a ready-made evidence spectrum. Program level: "Features are the fundamental unit of neural networks" — an assertion about units of explanation, not yet about where capacity lives. Causal level: the induction-heads paper's body says they are "the primary source of in-context learning" in small attention-only models, while the same paper's abstract is far more cautious — "preliminary and indirect evidence." Implementation level: "We fully reverse engineer the algorithm learned by these networks" — the strongest version, holding for toy tasks. And then drift, caught in the act: Anthropic's paper says attribution graphs "provide hypotheses about mechanisms"; its public blog says "we found that Claude plans ahead" — **across title, body, and transmission, assertion strength scales up step by step.** The same finding: a hypothesis in the paper, a discovery in the blog.

**Chute three: criterion promotion — artifact criteria passing as conceptual content.** From the start, artificial intelligence does not define intelligence and only delivers function — legitimately. But when engineering criteria grow strong enough — benchmark wins, product success — the criteria spill out of the artifact layer: benchmark scores read as "intelligence level," economic substitution read as "generality achieved." The difference from chute one is the carrier: measurement passing as definition on the theory side; engineering goals passing as concept content on the application side. Both skip the same layer: the epistemic one.

One piece of good news in passing: from 2021 to 2025, measurement theory has been entering AI evaluation in an institutionalized way — from the demonstration that "emergence" is a metric artifact to the 2025 wave importing psychometric validity frameworks into LLM evaluation. This is the most direct check on chute one, but it all stops at the "evaluation–capability" link; nobody has yet pushed the validity critique up to the "definition" layer.

## Four: The Translation Protocol — Not Closing the Border, Checking Credentials

After diagnosis, construction. Engineering observations must be able to enter conceptual discussion — otherwise interpretability research loses its point; concepts must be able to constrain engineering — otherwise definition wars are an academic game. The problem is not crossing layers; it is that crossing currently happens **silently**: the 2025 CHC definition of AGI in fact performed a translation from a psychometric model to the AGI concept, with no translation methodology — the reader cannot see which psychological constraints were carried in and which discarded.

So this concept paper delivers a **translation table**: for each kind of engineering observation, the claim it licenses and the conditions under which the translation holds. Three examples show the mechanism —

- A probe decodes a feature from representations → licensed to say "decodable information about the feature exists in the representations," provided control-task checks pass, and decoding is not use;
- The model scores S on a benchmark → licensed to say "relative to that benchmark's task distribution, the system performs at S," provided the benchmark carries a construct-validity claim and a contamination check — never "intelligence is S";
- The system reaches human level on a set of economically valuable tasks → licensed to say "substitution evidence on that task set," provided the task set is explicitly declared as a sample of human practice.

Three general rules govern the whole table: **attribution preservation** (the subject remains the system — never weights, circuits, gradients), **conditions travel** (when a claim leaves the methodological layer, its conditions leave with it), and **layer placement** (every translated claim is marked with its layer). Against the table stand four recurrent illicit forms: locational ("intelligence is in X"), part-whole misattribution (system-level predicates assigned to components), promotion ("score S" → "intelligence is S"), and universalization (leaping from the tested distribution to the open set). Every illicit form is a licensed translation with its conditions stripped away.

One direct corollary for the definition side: a responsible AGI definition should be written in three layers, not one sentence — the ontological layer declaring the reference frame, the epistemic layer declaring what evidence counts as attainment, the methodological layer declaring what procedure measures it. Three-layer writing does not dissolve disagreement, but it makes every disagreement fall in its own layer: **nameable, comparable, retractable.**

## Five: Four Questions, Four Seats

The four terms take their places in the human-referential theory of AGI: intelligence is the capacity acquired by fitting practice; human intelligence is the measurement face of the human reference frame; artificial intelligence is the artifact that carries the fitting; AGI is that reference frame itself — measured against the open set of human practices, never to close. The earlier finding of the "asymmetry of evaluation" — public criteria on the capacity side, no consensus test on the mind side — receives its explanation in the three layers: capacity predicates have a determinate system-level attribution and ready-made validity procedures; predicates of mind lack third-person tests; hence the two tracks diverge.

One sentence to close: **intelligence asks for measurement; human intelligence asks for norms; artificial intelligence asks for artifact criteria; AGI asks for a reference frame.** The four questions cannot stand in for one another, just as the four concepts do not lie on one ladder.

## Six: How This Could Be Wrong

The claims are stated so that evidence can kill them, with all four channels open. If someone produces a single measure with undistorted predictive power over the capacity structure of intelligence, the norms of human intelligence, the engineering criteria of AI, and the reference set of AGI — the four types merge and the typology degenerates into a redundant table. If someone supplies a rigorous definition of "component-level capacity" with criteria that survive counterexamples — the mereological-fallacy diagnosis fails, and "generalization is in the weights" is promoted from overreach to testable claim. If any of the four illicit forms proves reliable under declarable conditions — the corresponding row of the catalogue is withdrawn. And if any literature in English or Chinese has already given a systematic analysis of the four terms' levels and boundaries — the increment claim is withdrawn in favor of citation.

The definition war has run for a century, and most people think it is hard because the answer is hard. This paper's verdict: it is hard because the questions keep visiting the wrong rooms — four concept types sharing one expectation of "definition," three layers of claims sharing one standard of "established." Nail the door plates right, and the arguing will stop on the floor where it belongs.

## Citation

- **Source paper**: *Four Concepts, Four Types: Levels, Boundaries, and a Translation Protocol for Intelligence, Human Intelligence, Artificial Intelligence, and AGI*, v1.0.0 · doi:[10.5281/zenodo.24096362](https://doi.org/10.5281/zenodo.24096362) · [GitHub](https://github.com/yuyuguilab/four-concepts)
- **Theory**: *Fitting the Practice, Not the Works: A Human-Referential Theory of AGI* · [GitHub](https://github.com/yuyuguilab/practice-fitting-theory)
- **Concept-unbundling paper**: *Two Different Goals: Dissociating the Machine Mind from Artificial Intelligence* · [GitHub](https://github.com/yuyuguilab/machine-heart-two-goals)
- **Methodology**: *Fitting the Practice: A Data Methodology for Frontier Model Training* · [GitHub](https://github.com/yuyuguilab/practice-fitting-methodology)
