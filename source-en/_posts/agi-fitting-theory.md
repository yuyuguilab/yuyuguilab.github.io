---
title: 'The Human-Referential Fitting Theory of AGI: Fitting the Practice, Not the Works'
date: 2026-10-20 09:00:00
categories: [技术]
tags: [AI, AGI, training data, human-referential fitting, data methodology]
description: 'Every large model learns from humans — but from what humans have written, not from what humans do. The full argument: the object of fitting is practice, not works. The stock has a wall; the flow does not.'
---

"AI is trained on human data."

Everyone has said this sentence, but almost no one has noticed the ambiguity inside it: **what does "human data" actually refer to?**

One answer: the things humans have **written** — web pages, books, code, papers, ratings. They are finished and crawlable, piled into a finite archive.

The other answer: the things humans are **doing** — how they work, how they try, where they fail, how they correct course, how they grind their way from novice to expert. It has no day of "completion"; it continues as life continues.

The two answers point to two entirely different research programs. The mainstream chose the first: estimates of public text (roughly 300 trillion tokens), the corpus-mixture tables in every lab's technical report — the whole industry has organized itself around "reading the archive."

This essay takes the ambiguity seriously and argues that the second answer is the right one. The theory is called **the human-referential fitting theory of AGI**, and its core is a single sentence:

**What AGI must fit is not humanity's works, but humanity's practice — the full spectrum and the full course of experience. The stock has a wall; the flow does not.**

"The stock" is the archive of works; "the flow" is the stream of practice. This sentence is not a slogan; a whole chain of argument stands behind it. What follows walks through that chain in the order of the paper.

![Theory overview](/images/agi-fitting-theory-fig1.png)

**An overview of the theory (figure from the paper).** The horizontal axis is the object of fitting: at the left end, "works" (a static stock — the brick pattern is the data wall); at the right end, "practice" (a regenerating flow). The vertical axis is the full course of practice. The four termination boundaries are marked on the map: B1 the end of the human, B2 the transcendence boundary, B3 the institutional boundary, B4 the self-reference boundary ("the mirror enters the room it reflects"). The timeline along the right edge depicts the fitting lag: practice regenerates continuously, while model snapshots update periodically.

## 1. First, Be Clear About What AGI Is: A Philosophical Concept, Not an Engineering Specification

To argue about "the means of achieving AGI," we first have to be clear about what AGI refers to. The popular move is operational definitions: general intelligence equals goal-achievement capability across a wide range of environments; or levels of capability × autonomy; or task-duration measures of how long an AI can keep working stably on its own.

But every one of these operationalizations inherits the meaning of "general" from the same source: **the environment**. And AI's environments — from benchmarks to real deployment — are all artificial usage contexts. In other words, these definitions all implicitly sample human practice, then use the sample they happened to draw to define "general."

The measurement critique is more direct: benchmark tasks are **sampled projections** of human practice — a benchmark can claim to be "general" only relative to the slice of practice it sampled, and a great many benchmarks cannot even measure their own slice accurately. Add the "moving target" problem: intelligence is jokingly defined as "whatever machines haven't done yet," and the definition keeps retreating as technology advances.

If AGI were a fixed technical target, these defects could be cured with better measurement. But three threads, taken together, yield a different conclusion: **as long as "general" refers to the open set of human practice, AGI cannot be written down as an engineering specification** — not because intelligence is mysterious, but because the reference set is open and moving.

So AGI is a philosophical concept: **a human-referential lens, not a countdown.**

Philosophical anthropology adds a load-bearing pillar here: humans are, in a constitutive sense, beings who complete themselves through artifacts — instrumentality is the human norm, not a degradation. This foreshadows the tool stance at the end.

## 2. The Implementation Thesis: Why the Object of Fitting Is Practice

Start with two established facts.

First, large AI models are **cultural technologies**: like writing and markets, they inherit, transmit, and recombine the structures of human symbolic production. If models' capabilities are inherited from humans, then the "quality of the inheritance" — what gets passed on, from whom, with or without errors — becomes a core engineering variable, not a footnote added after the fact.

Second, fitting is already happening: models reproduce human-style cognitive dissonance and self-justification, and social-identity biases; interpretability research has even found causally active emotion concepts inside production models. Fitting is not a hypothesis; it is a fact — and the real question is: **what is being fitted?**

Cognitive science supplies a key distinction, the description–experience gap: for humans, learning from "descriptions" and learning from "direct experience" are two different kinds of cognition. What pretraining learns is a **description** of practice (what has been written down); only when a model enters real use and interacts with people does it come into contact with practice itself.

At this point the thesis has taken shape: what should be fitted is practice, not works. But it faces at least four lines of explicit objection, and each must be met head-on.

**Objection 1: the evidence of model collapse.** An open-ended generation study covering more than 70 models found that no matter how you tune the decoding parameters, models grow ever more repetitive internally and ever more similar to one another — converging on the same "human-like mean." Doesn't this show that fitting has failed?

Quite the opposite. More than seventy models converging on a shared human-like distribution **is proof that fitting really happened**; what collapse refutes is the claim that "fitting the mean is enough." When the training corpus is everyone and no one at once, what gets fitted is the mean, not the spectrum. The remedy is not less fitting but wider fitting.

**Objection 2: the ceiling arguments.** The data wall says the stock will run out; recursive-training arguments say that feeding a model its own generated data degrades it. Our response is bookkeeping, not optimism: both claims concern only the stock. **No argument from "the archive is finite" can touch the regeneration of practice** — feedback left during use, interaction logs, failed submissions, repair processes, produced continuously for as long as deployment continues.

Does the latest corpus self-play change this — letting models set their own problems over the archive, solve them, and grade themselves, advertised as "nearly inexhaustible"? No: re-mining the archive enriches the **curriculum**, not the **material**. The same body of already-written practice can be questioned over and over, but no amount of questioning can ask new practice out of it.

One sentence must be added immediately to prevent misreading: **is the stock route wrong? No.** Corpus-fitting is the first stage and the permanent foundation of practice-fitting. Everything achieved before 2026 happened inside the wall — in the region where returns had not yet diminished, reading the archive was the correct and only reasonable choice. The theory points out only where the wall stands; it negates nothing that happened inside the wall. And the flow route itself needs the stock underneath it — only by first learning language and knowledge from the archive does a model become qualified to take part in practice and leave usage records worth collecting.

**Objection 3: superhuman achievements.** FunSearch and AlphaEvolve have discovered new results beyond the intuitions of human mathematicians — if they are already superhuman, what is left to fit about humans?

Look at their verifiers: mathematical correctness, executable code — these are **human institutions**. Search can surpass every individual mathematician's intuition, but "what counts as a valid proof" is fixed by an institution of verification that the search itself does not produce. Superhuman capability achieved on human-verified ground is not a walk out of the human frame of reference; it is that frame of reference at its most concentrated.

**Objection 4 (the sharpest): the open domain has no compiler — hasn't AI feedback already replaced human feedback?** Experiments already report AI feedback drawing level with human feedback, "AI as judge" self-improvement, systems that build self-verifying rewards for open-ended tasks — what is left of the human signal?

What remains is the thing they cannot supply. This line of work **displaces** the human signal without removing it: the judge is itself a distillate of human pretraining; the reward functions encode human preferences frozen at the moment of curation. What they cannot provide is a **fresh correction** — a judgment about a case that arose after the judge did, or a value that only became contested after the preferences were frozen. The corrective signal in the open domain cannot ground itself: it can be stretched, amortized, recombined, but its source remains the very practice it sits in judgment over, and its freshness decays with the practice it no longer sees.

With the four objections met, the thesis stands. Behind it sits a positive account of **the relation between intelligence and practice** — worth stating in three layers.

**Definitionally, intelligence's "generality" is not a self-contained intrinsic endowment but a relational property.** A system counts as "general" only relative to the open set of human practice it is referenced against. Section 1 said that benchmarks are sampling projections of practice; this is the same point seen from the other side: even *measuring* intelligence cannot escape practice — a benchmark measures a model's performance relative to some slice of practice.

**Developmentally, intelligence is acquired by fitting practice and kept current by practice's regeneration.** Practice flows daily; model snapshots update on cycle; the distance between the two is what the theory calls the **fitting lag**. That lag is not an engineering detail — it is the readout of this relation: how far the fitted intelligence has fallen behind the practice that defines it. The snapshot is always old, so the fitting is always *under way* — not a defect, but the structure of the relation itself.

**Ontologically, practice precedes works.** Works are the projections practice leaves behind — the description/experience distinction earlier in this section was exactly this point. So changing the object of fitting is not a data-engineering preference; it fixes the content of the concept itself: what you fit determines what "general intelligence" means for a machine.

Following these three layers, the two easiest misreadings should be nailed down.

**First: "fitting humans" does not mean "loading human minds or values into the model."** What is fitted is the flow of practice — records of doing, failing, correcting, mastering — not the structure of minds and not the content of values. The precise sense of "human" in the name is "human-referential": the coordinates of practice are defined by population, success/failure, expertise, and typicality — not "putting a human inside." Three questions must be kept separate from this theory: which values to embed is a **governance-layer** question (the territory of human-centered AI design); which architecture to use, and whether to build in innate value drives, is an **architecture-layer** question (the "erect a heart for machines" line); what to predict in representation space is a **prediction-layer** question (the world-model line). This theory answers only the **data-layer** question — what the training signal should be. The layers are orthogonal and combinable; but no governance framework and no architecture program has ever specified that the training signal should come from the flow of practice — that layer is empty, and the empty slot is what this theory fills.

**Second: it is not another "human-centered AI design" school.** Governance constrains from the outside in (the guardrail); the fitting theory generates from the inside out (the signal source). The theory carries its own value layer (the four boundaries, the means-and-end clause), but what it adds is the data layer. The two are complementary, and neither stands alone: a flow without guardrails gets abused; guardrails without a signal source just spin in place.

And that immediately raises a testable question: **does the industry know any of this?**

## 3. The Evidence: An Axis That Was Never Named

To answer whether the industry treats practice as the object of fitting, you have to examine the training objectives themselves. We ran exactly that audit; the method first.

**How we searched.** Purposive sampling of 80 documents, spanning descriptive, normative, methodological, and governance discourses. Why not random sampling? Because the crux is not "how many documents think this way" but "does any training objective anywhere think this way" — existence or absence decides the route; proportions don't matter. Each document was coded item by item: two stance axes plus eight "object-of-fitting" dimensions; each dimension recorded in three states — explicitly addressed, implicitly touched, absent. The criteria were frozen in advance in a codebook, and every code carries a verbatim quotation. The quotations guard against the authors' self-deception: if you disagree with my coding, go check my quotations.

**The eighth dimension**, the pivotal one, is called "experience type": success/failure × expert/novice × typical/marginal. It is the data form of "the full spectrum."

**The result.** Of the 80 documents, the number that explicitly design experience type as a coverage axis: **0** (statistically, the 95% confidence interval runs from 0% to 4.5%). Nine documents touched it implicitly — work along the failure-data line brushed against the "failure" cell — but not a single one named it as an axis and designed for it.

For a zero count to carry weight, you must show that you looked hard. We pre-registered an absence search: 8 query strings, run across three engines. The closest hits? Agent-experience benchmarks — but the "experience" they speak of is the agent's own episode history, which is temporal, not typological; one step short. Data-mixture studies — they optimize domain weights, not experience types. Error-diversity shaping — it acts on the model's own outputs, on the machine side. All one step short.

So the conclusion, to the exact word: **the topic has been touched; the axis has never been named.**

![Evidence map](/images/agi-fitting-theory-fig2.png)

**The evidence map (figure from the paper).** Eight "object-of-fitting" dimensions × two modalities, explicitly addressed / implicitly touched. Look at row D8 (experience type): the explicit column is entirely empty (0/80), while implicit touches show 9 dots — precisely the visualization of "touched, but never named."

One more piece of an earlier puzzle: we ran a dedicated audit of failure data, and of 33 training-data lifecycle documents, not one gave failure records equal standing with success data. The industry has been treating practice's most information-dense artifact — the mistake notebook (the notebook of corrected mistakes that students keep) — as exhaust.

**The temporal pattern** adds a time axis to the picture: of the 80 documents, only 2 explicitly treat "practice as flow" as a data source, and both date from 2026 — one is DeepSeek's disclosure of flowing employees' everyday usage and failure cases back into training, the other a commentary from the same period proposing stock/flow engineering. By contrast, "works as stock" has appeared continuously since 2022. How to read this: not a trend, but an **onset** — the industry is standing right at the turning point.

**How could this claim turn out to be wrong?** The paper spells out its falsification conditions: if operationalizations of experience type start appearing frequently in neutral documents, the 0/80 fails; and if practice-stream data prove unable to yield production-grade quality, the evidentiary standing of that 2/80 fails as well. The weight of the zero comes precisely from the fact that it can be overturned.

This gap has one symptom visible to the naked eye. Picture a system fed only "instant user satisfaction" signals: population shrunk to the user, outcome to success, no evaluators, no professional calibration — a single lit cell of the coverage space. What does it grow into? **Sycophancy.** Sycophancy is not a side effect of fitting practice; it is missing coverage made visible: feed the model one cell of data, and it grows into the shape of one cell. The antidote is precisely the missing cells — evaluator-population signals, professional-tier calibration, three-part failure records — all components of the companion methodology paper. When the industry finally rids itself of sycophancy, it will not be by ingesting more satisfaction signals, but by filling in cells.

## 4. Tensions and Boundaries: Where the Theory Stretches, and Where It Stops

There are two tensions the theory acknowledges rather than hides.

**Whose spectrum?** "The full spectrum" is first of all a question of "who." Whose values get aggregated, whose voices get weighted — the hard problems of social choice do not vanish just because the framework changed. The theory inherits these problems and hands them to governance.

**The subjectivity boundary.** The fitting target includes functional emotional structure (the evidence indicates this layer is already being fitted), but the boundary is drawn at the functional level: **never grant personhood status; never fit states of feeling.** Interestingly, opposing camps converge here — one side argues for taking the moral status of models seriously, the other says AI may be made agreeable but must never be treated as a person — and this theory, for independent reasons of its own, stands on the same line: fit the mirror; do not build a subject. This also settles "empathy" at the boundary: the theory never requires the model to feel anything; what it asks for is functional cognitive empathy — reading unstated intentions, absorbing corrections, repairing misunderstandings — which is exactly what the coverage space can measure, cell by cell.

Why is this boundary load-bearing? Three reasons suffice. **First, personhood is cheap**: it is not issued by intelligence — persons with severe cognitive impairment hold it in full, and an "inner self" requires only memory continuity, value consistency, and growing up under correction. Being cheap, "grant personhood once the machine is smart enough" is a sentence that cannot stand. **Second, the dangerous combination is status × capability, not capability itself**: AlphaFold long ago surpassed every human teacher at protein folding, and we do not fear it — because it has no direction of its own; capability beyond all teachers removes the arbiter, and personhood supplies an objective function of its own — neither alone is fatal, and together they are the sufficient condition for uncontrollability. The control problem, rewritten: it is a question of status, not of horsepower. **Third, the boundary costs nothing**: everything humans need AI to do — read intentions, absorb corrections, repair misunderstandings — is delivered at the functional layer; giving the machine a "real heart" satisfies not one further human need. Cheap, dangerous, unnecessary — those three words are the complete justification of this boundary.

Then come the four termination boundaries. They are the natural endpoints of the argument, not rhetorical decoration:

1. **The end of the human** — practice continues with life and terminates with life; the object of fitting is bounded by human existence.
2. **The transcendence boundary** — once the fitter surpasses every human teacher on every measurable task, the constraint "fit humanity" loses its grip; the theory speaks only of AGI and deliberately falls silent beyond this line. "General" references the open set of practice; "high" references the performance of teachers — and the demand for height terminates its own reference exactly here.
3. **The institutional boundary** — law, privacy, and consent define what may be collected; consent to the "flow" must be a sustainable relationship — revocable, renewable — not a checkbox ticked at collection time.
4. **The self-reference boundary** — as AI is woven into daily life, the practice being collected already carries traces of AI: the mirror enters the room it reflects. AI-generated content contaminating training data (model collapse) is the engineering form of this boundary; the mitigation is distinguishing data provenance, not pretending the problem away.

## 5. Means and Ends: Fitting Is the Means, Augmentation Is the End

The final claim is normative, but it has an argument structure all the same.

"Taking the imitation of humans as the goal" and "taking the fitting of humans as the means" are two different optimization problems — different objective functions, and in general different optima. With imitation alone as the target, what converges is an averaged "human-likeness"; with fitting as the constraint and human utility as the objective, what you get is a tool. This is the mathematical form of the Turing Trap: imitating humans as an end and fitting humans as a means lead down diverging paths.

Hence the stance: **AGI should be built and governed as an augmentative tool — fitting humans is the means; augmenting humans is the end.** The mirror should be faithful, timely, and correctable; grant it no personhood, and do not pretend it feels.

## 6. After the Theory

The theory paper is published, with all coding data, the absence-search logs, and the falsification conditions. The engineering companion, *Fitting the Practice: A Data Methodology for Frontier Model Training*, is also online: it distills the theory into 14 protocol components and runs an item-by-item readiness audit of eight 2026 flagship models. The result in one line: production line 0.393, governance line 0.333, **distribution line 0.062** — on the question of "whom to cover, and which experiences," the whole industry is nearly blank.

This is exactly where the flow pipeline has to be built from zero. The next post explains how.

**The stock has a wall; the flow does not. And the flow requires a stack.**

---

## References

- **Theory:** *Fitting the Practice, Not the Works: A Human-Referential Theory of AGI* · [GitHub](https://github.com/yuyuguilab/practice-fitting-theory)
- **Failure-data audit:** *Success Provides Direction, Failure Provides Precision* · [GitHub](https://github.com/yuyuguilab/failure-data-audit)
- **Methodology:** *Fitting the Practice: A Data Methodology for Frontier Model Training, with a Readiness Audit of 2026 Flagship Pipelines* · [GitHub](https://github.com/yuyuguilab/practice-fitting-methodology)
