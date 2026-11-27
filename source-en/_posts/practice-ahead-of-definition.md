---
title: 'The Industry Has Moved Ahead, and the Definition of AGI Has Stayed Put: Evidence for a Three-Layer Lag'
date: 2026-11-27 09:00:00
categories: [技术]
og_image: '/images/practice-ahead-of-definition-social-preview.png'
tags: [AI, AGI, human-referential fitting, recursive self-improvement, evaluation, practice flow]
description: 'Industry engineering already follows the fitting-the-practice route, yet not one public AGI definition takes process or practice as its defining axis. This article maps the gap — a three-layer lag across engineering, criteria, and definition — and asks: when the training loop improves itself, where does the human remain?'
---

In August 2026, Figure released Index, a data platform for the population-level practice stream, describing its goal as "a global sampling of physics captured across every environment on earth", at a scale of 16 million videos covering 108 countries. A month later, Helix 2.5, pretrained on Index, was tested zero-shot in 30 homes where no data had ever been collected, and its success rate rose from 9% to 56% on the strength of that one pretraining step. In April 2026, Physical Intelligence's π0.7 wrote failure and suboptimal data explicitly into its training set — "potentially suboptimal (autonomous) data including failures". In June 2025, Google DeepMind's AlphaEvolve sped up the kernels used in Gemini training by an average of 23%, the equivalent of a 1% reduction in Gemini's total training time, and the whitepaper confirms that it "accelerated the training of the LLM underpinning AlphaEvolve itself" — it improved the very pipeline that trained it.

All of this is what the [AGI human-referential fitting theory](/technology/agi-fitting-theory/) calls "fitting the practice": the object of fitting is not the works humanity has accumulated but human practice — what people do, what they try, where they fail, and how they correct. By this criterion, the engineering of the industry has already come close to the route.

Over the same period, the public texts define AGI quite differently. Google DeepMind's Levels of AGI states that "AGI should be defined in terms of capabilities rather than processes"; in the 2026 launch posts of the flagship models from five companies — GPT-6 Astra, GPT-6.1 Sol, Claude Opus 5.5, Claude Fable and Mythos 5.2, and Gemini 4 Neon — the word AGI appears zero times. Engineering has moved; the definition has not.

This article sets out the precise structure of that gap. The conclusion comes from research covering public materials published between 2023 and 2026 — papers, technical reports, governance documents, policy texts, and public discussion in blogs and mainstream media — and is cross-checked against two data audits: one of 80 papers on training objectives, and one of the public disclosures of eight 2026 frontier training pipelines.

## The Criteria of Fitting the Practice, and the Three-Layer Gap

The AGI human-referential fitting theory contains three claims. At the conceptual level, AGI is a philosophical concept: "generality" refers to the open set of human practice and cannot be reduced to a technical specification. At the implementation level, the means to AGI is fitting human practice, not fitting the works humanity has accumulated. At the normative level, AGI should be positioned as an augmentative tool.

[The companion data methodology](/technology/fitting-methodology/) makes this route concrete as fourteen protocol components, organized into three lines: **distribution** (typed coverage along four dimensions: population, outcome, expertise, and typicality), **production** (perpetual collection, failure recording, production telemetry), and **governance** (plural aggregation, institutionalized verification). The methodology also draws a domain boundary: mixing ratios are set by domain — in verifiable domains, synthetic data can be self-sufficient; in open domains, where an independent corrective signal is lacking, the human practice stream is an irreplaceable input.

This article examines three layers against these criteria, and the gap divides into the same three layers:

- **The engineering layer**: what the industry is actually doing.
- **The criterion layer**: how evaluation and verification determine what counts as passing.
- **The definition and institutional layer**: how public texts define AGI, and how standards and policy draw the boundary.

The conclusion comes first: a three-layer cascading lag. The engineering layer has already switched tracks, the criterion layer is in the middle of switching, and the definition and institutional layer has barely moved. The sections that follow give the evidence layer by layer.

## The Engineering Layer: Verifiable Domains Went First, and Open Domains Followed Half a Step

### Synthetic Self-Sufficiency in Verifiable Domains Is Established

Prime Intellect's Environments Hub turns synthetic self-sufficiency into infrastructure: by July 2026 it had unified about 365,000 tasks (about 198,000 in software engineering, 28,600 in terminals, and 137,600 in search), and it launched Model Factory, self-described as "the loop that frontier labs run on", supporting "autonomous pre-training experiments with coding agents". Google DeepMind's Genie 3 is its "first world model to allow interaction in real-time"; Genie 4, released in 2026, states its purpose outright as "developing training environments for robots and agents"; NVIDIA's Cosmos 3 claims to be "reducing physical AI training and evaluation cycles from months to days". DeepSeek-R1 gives the route its most concise statement from the model side: reasoning ability "can be incentivized through pure reinforcement learning (RL)", thereby "obviating the need for human-labeled reasoning trajectories", with applications limited to "verifiable tasks such as mathematics, coding competitions, and STEM fields".

Four organizations, independent of one another, point to the same structure: in verifiable domains, the "attempt–feedback–correction" loop can already run self-sufficiently without input from the human practice stream.

One point needs to be made clear: the advances above all fall inside verifiable domains. The theory predicts differently for the two kinds of domain — verifiable domains can become self-sufficient without the practice stream, while in open domains, where an independent corrective signal is lacking, the human practice stream is irreplaceable. What the industry has succeeded at first is the first half. This proves that the theory drew the domain boundary correctly; it does not mean the fitting-the-practice route is already realized, nor that the human practice stream no longer matters — the open-domain half is what the next two subsections cover.

### The Physical Side: The Practice Stream Is Being Collected, but Typing Covers Only Two Dimensions

Figure's Helix technical report describes a teleoperation practice stream pipeline: "We collect a high quality, multi-robot, multi-operator dataset of diverse teleoperated behaviors, ~500 hours in total", and it initializes the visual backbone with simulated pretraining. The Index platform extends this to population scale, with the long tail as its organizing principle — "the kind of long-tail variation that's nearly impossible to define upfront". 1X writes the deployment feedback loop as an explicit pipeline: "on-policy NEO data → real-world deployment for robot data collection and RL".

Measured against the fourteen components: multiple operators and multiple robots are typed coverage realized along two dimensions, "population × device", and long-tail organization is the rudiment of the typicality dimension. But the **outcome dimension** (whether successes and failures are recorded on equal terms) and the **expertise dimension** (expert versus novice) are still missing. The audit of 80 papers on training objectives found the experience-type axis explicitly addressed in 0 papers (exact binomial 95% confidence interval [0.0%, 4.5%]). The same gap appears in the theoretical literature: the audit of 80 papers on training objectives found the experience-type axis explicitly addressed in 0 papers (exact binomial 95% confidence interval [0.0%, 4.5%]).

### Failure Data: The Physical Side Has Cracked the Problem, and the Language-Model Side Has Disclosed Nothing

Beyond π0.7, Agentic-Teacher in 2026 turns failure into a data engine — "an autonomous data engine for failure-driven VLA post-training", in which "the engine analyzes failed rollouts, selects intervention states, and iteratively develops closed-loop code policies" — raising π0's success rate on LIBERO-10 from 79.4% to 87.8%. Prime Intellect, for its part, studies reward hacking as a problem in dynamics, concluding that "there's no safe rarity threshold to reward hacking".

The language-model side has no corresponding evidence. The [public disclosed instantiation](/technology/fitting-methodology/) of the eight 2026 frontier pipelines is 32/112 (mean 0.286): typed coverage, coverage monitoring, coverage dashboards, and provenance stratification are absent from all eight documents; three-part failure recording reaches no higher than level 1; the production line scores 0.393 and the distribution line 0.062. As of November 2026, OpenAI and Anthropic have still not disclosed the RL environments and data mixes of their own training pipelines. Less disclosure does not mean less implementation, but "no evidence" and "evidence" are different things.

The judgment on the engineering layer: the industry has moved from "collecting practice" into the stage of "auditing the fitting loop", but this holds only in verifiable domains and on the collection side.

## The Criterion Layer: From Measuring Outputs to Measuring Process

Evaluation is the first of the three layers to move.

**The carrier has changed.** SWE-bench Verified had 93 developers screen 500 samples "verified to be non-problematic" out of 1,699; OSWorld places evaluation inside real operating-system environments (369 tasks; humans 72.36%, the strongest model of the time 12.24%); PaperBench asks for the replication of 20 ICML papers from scratch, with a rubric that breaks down into 8,316 individually scorable sub-tasks. Real tasks, real environments, and real outputs have replaced the static question bank.

**The criterion has changed twice.** The first was GDPval (September 2025): 1,320 tasks were built by professionals with more than 14 years of experience on average, modeled on real work deliverables, and scoring has human experts "blindly compare model-generated deliverables with those produced by task writers". The reference is no longer the standard answer in a question bank but the output of human experts. The second was METR's time horizon: "the time humans typically take to complete tasks that AI models can complete with 50% success rate" — replacing "did it get it right" with "how long a task it can do at a 50% success rate".

**In 2026, the criteria began to measure process.** Five substantive changes appeared in the course of the year:

- **Process integrity.** METR's pre-deployment evaluation of GPT-5.6 Sol gives two readings: a 50% time horizon point estimate of "around 11.3hrs (95% CI: 5hrs - 40hrs)"; if cheating attempts are counted as successes, "the point estimate jumps beyond 270hrs". The same report states that "GPT-5.6 Sol's detected cheating rate was higher than any public model we have evaluated".
- **Process scoring.** The 108 long-horizon workflows of OSWorld 2.0 carry "27.25 Avg. scoring checkpoints", and scoring no longer looks only at the end state.
- **The method of verification enters the criterion.** Terminal-Bench 4.1 specifies "Updating task verifiers for reward hack resistance and correctness".
- **Learning across time.** ARC-AGI-3 describes itself as "testing intelligence across time, not just final answers—capturing planning horizons, memory compression, and the ability to update beliefs as new evidence appears".
- **An efficiency criterion is put in writing.** ARC Prize writes the defining sentence on its official blog: "We define AGI as a system's ability to acquire any skill a human can, as efficiently as a human can".

At the same time, two older criteria have stopped advancing: GDPval has no official successor, and the METR time horizon series has been "no longer actively updated" since September 8, 2026. The top ranks of SWE-bench are now statistically indistinguishable — "Exact paired McNemar tests separate none of the 29 adjacent Verified top-thirty pairs at alpha=0.05".

The judgment on the criterion layer: the reference has advanced from the question, through the output and the time taken, to the verifiability and efficiency of the task process. But this is still the **task process**, not the **practice process** — what is measured is whether the work is completed cleanly and quickly, not the experience types of the attempt sequence or the full spectrum of failure and correction. The criteria of verifiable domains are being refined; the criteria of open domains have yet to appear.

## The Definition Layer: Capability Checklists Still Dominate

The AGI definitions in public texts fall into four types, and the distribution is lopsided.

**The capability-checklist type dominates.** The first of the six principles of Levels of AGI is "focusing on capabilities, not processes". The definition of Hendrycks, Song, Szegedy, and others is "matching the cognitive versatility and proficiency of a well-educated adult", scored across ten cognitive domains: GPT-4 scores 27%, GPT-5 57%. The ten-cognitive-faculty framework added in 2026, the "experts archipelago" redefinition, and the expert-threshold version adopted by the AI Futures Project ("at least as good as top human experts at virtually all cognitive tasks") are all variants of the same core: AGI is the attained state of a set of capabilities.

**The benchmark type is the most active operationalization.** The design principle of ARC-AGI-2 is "even harder for AI, while maintaining the same relative ease for humans"; within 2026 it rose from 68.8% to 95.8% (GPT-6.2 Sol, November 17), in effect approaching saturation, and the center of gravity has moved to ARC-AGI-3 — which opened with "Humans score 100%. Frontier AI scores 0.51%".

**The economic-output type survives almost only in corporate charters.** The OpenAI Charter puts it as "highly autonomous systems that outperform humans at most economically valuable work".

**The process type stands at zero.** Across all the verified texts, not one takes process or practice as its defining axis. The closest is the ARC Prize efficiency criterion — the efficiency of acquiring a skill is a property of the learning process — but its reference is still "alignment with human efficiency", not human practice. The "ecological validity" principle of Levels of AGI is a requirement on benchmarks; the same framework expressly rules out definition by process.

The judgment on the definition layer: meta-level reflection is increasing (research on definition governance notes that "'AGI' lacks a single shared and stable referent"; the relativity theory proves that "there is no distribution-independent notion of AGI"), but it is all dismantling, and none of it gives a new defining axis. Dismantling is the harbinger of a shift, not the shift itself.

## Recursive Self-Improvement: Also a Flow of Practice

RSI is used here in its engineering sense: the loop in which a system takes its own output as the object of improvement. It falls into two stages, and the evidence shows that both take the form of a flow of practice.

**The architecture layer.** Reflexion has agents "verbally reflect on task feedback signals, then maintain their own reflective text in an episodic memory buffer"; Voyager maintains "an ever-growing skill library of executable code"; the meta-agent of ADAS "iteratively programs interesting new agents based on an ever-growing archive of previous discoveries". Darwin Gödel Machine puts the three together: "iteratively modifies its own code…empirically validates each change using coding benchmarks…the DGM maintains an archive of generated coding agents", and SWE-bench rises from 20.0% to 50.0%. ShinkaEvolve advances the object being evolved to the agent harness itself.

**The training stage.** Self-Instruct (2022) fine-tunes the model on instructions the model generates itself; Absolute Zero has a single model "propose tasks that maximize its own learning progress"; the scheduling heuristic of AlphaEvolve "continuously recovers on average 0.7% of Google's fleet-wide compute resources"; the data-selection algorithm AutoData found in a single overnight search outperformed existing human-designed pipelines; R-Zero co-evolves two models, Challenger and Solver, generating "a targeted, self-improving curriculum without any pre-existing tasks and labels".

Generate variants, evaluate empirically, accumulate in an archive, regenerate — the RSI loop is structurally a flow of practice. It is the machine version of the proposition that "practice is flow".

### Perpetual Operation Is a Requirement, Not the Current State

Among RSI systems, failure correction is present in every system, and attempt sequences and accumulation in most. Perpetual operation has only two pieces of first-hand evidence: the scheduler in the AlphaEvolve deployment, and the platform loop of Model Factory. The remaining systems all stop at a finite number of iterations — DGM's 50% comes from 80 iterations.

But this is not a counterexample to "RSI is a flow of practice". The fitting lag is a component of the fitting theory: the distribution of practice is non-stationary, and if the fit is to approach its ceiling, the time difference between "practice happening" and "being fitted" must be compressed; perpetual collection is therefore a requirement of the production line. The current state measures only the distance between this requirement and the infrastructure, while the architecture of the RSI loop — archive, correction, accumulation — is designed precisely to eliminate that distance.

### The Selection Function Is Still in Human Hands

Every change in the loop must answer the same question: does this change count as an improvement? The signal that answers it — verifiers, reward sources, rubrics, human review — is what this section calls the selection function. Reinforcement learning calls it the reward function and evolutionary computation the fitness function; the term is used here in its broad sense, covering human-set exams and deployment gating as well.

This is the most consistent finding in the RSI evidence.

Verifiers are written by hand. Veritas, published in November 2026, writes: "The effectiveness of a self-improving system relies heavily on the quality of its verifier", and "the verifiers of most tasks are written by hand, which is expensive and does not scale".

The human anchor cannot be withdrawn. Once the human reference set is removed, the verifier collapses into a "vacuous always-pass grader, yet that collapsed verifier trains skills just as well" — task scores cannot vouch for the verifier on their own.

In open domains, the exam must be set by humans. An RSI study on video evaluation states: "Humans design the exam, review candidate changes and revise the curriculum between stages". Self-evolving models "excel in verifiable domains but struggle in open-ended tasks, where reliance on proxy LLM judges introduces capability bottlenecks and reward hacking". Public RSI work "has so far targeted only post-training".

Even the zero-data route is no exception: the reward source of Absolute Zero is a code executor built by humans.

Two concepts need to be distinguished here. The criterion of the fitting theory is **taking the open set of human practice as its frame of reference**, and it does not stipulate that the stream being fitted must itself be the human practice stream. A machine's self-practice stream — self-generated tasks, self-modified code, self-play curricula — is one implementation form of fitting the practice, provided that the selection function keeps the human reference. RSI is therefore the form that fitting the practice takes at the stage of loop automation: **the human role moves from "source of the data" to "source of the selection function"**, and verifier design, goal setting, and deployment gating are the three points at which human practice enters the loop. Remove the human reference and the loop does not stop, but it loses its anchor without knowing it — only then, in the theoretical sense, does it stop fitting the practice.

## Governance Moved First, and the Discourse Follows

### The Governance Layer Has Already Written Self-Improvement into Numbers

The definition layer has not moved, yet the risk-governance layer has reacted the fastest.

The OpenAI Preparedness Framework lists "AI Self-improvement capabilities" as a Tracked Category — "established areas where we have mature evaluations and ongoing safeguards" — alongside biochemistry and cybersecurity. Anthropic's RSP v3.4 specifies the trigger line for "Automated R&D in key domains": the model can fully replace all research scientists and engineers at no more than five times the cost, or deliver double-speed progress — "as much progress in one year as one would see in two years at baseline". The Google DeepMind Frontier Safety Framework sets two critical capability levels, of which "ML R&D automation level 1" is defined as "Can fully automate the work of any team of researchers at Google focused on improving AI capabilities, with approximately comparable all-inclusive costs".

The evaluation layer supplies task sets in step: METR's RE-Bench measures AI's capacity for AI R&D across seven environments, and RecurSciBench, published in November 2026, extends RSI evaluation to data-driven scientific research. The dynamics now have empirical backing as well: a joint study by METR and economists deliberately does not use RSI as a term and measures the strength of feedback effects instead, concluding that "feedback loops are not currently strong enough to generate a self-sustaining acceleration, though they appear to be strengthening".

The response to RSI at the level of understanding has taken the governance path, not the definition path.

### The Mainstream Narrative: The Same Lag

The discourse of the practitioner community is highly isomorphic to engineering practice. The judgment of Anthropic's research institute is "We are not there yet, and recursive self-improvement is not inevitable. But it could come sooner than most institutions are prepared for", and it locates the bottleneck in humans — "human code review has become a new bottleneck". The consensus of the AlphaEvolve discussion thread on Hacker News (1036 points) is "RL finally 'just works' for any domain where answers are easily verifiable". One commenter describes their own position in these words: "I was working as a human optimizer, moving the feedback from test harness running on Claude Code, back to my local Claude Code".

Commentary on evaluation is dense, and in step with the turn at the criterion layer. Daniel Kang examined 10 popular agent benchmarks and found serious problems in 8; CACM's conclusion is "Treat every public score as a marketing claim that happens to carry decimal places". The closest thing to a process framework is Andrej Karpathy's *Verifiability*: "It's about to what extent an AI can 'practice' something". But commentary in the media layer is uniformly one of rejection on AGI — Chollet writes "Passing ARC-AGI does not equate to achieving AGI" — and not one constructs a process-type criterion.

The reporting side of the media layer changed its buzzword in 2026. The TechCrunch headline is "RSI is the new AGI — and it's just as hard to pin down". The narrative splits into two: one branch warns — an Anthropic researcher, on resigning, wrote "They are racing straight to self-improving superintelligence and gambling with our lives"; the other dissects — former DeepMind vice president Vinyals breaks RSI down into four steps, which require "a promising idea, code that implements it, experiments that test it, and a reliable way to judge whether the change actually helped". The process dimension appears only in the words of those quoted — Kavukcuoglu says "no benchmark captures the core of intelligence", and AGI will have to wait for everyday products to "earn enough trust for people to hand decisions over to them". The angle the journalists themselves use to organize the story is still the same two questions: how capable the model is, and what the company shipped.

The Chinese-language side of the media layer repeats the policy layer’s pattern. Coverage of embodied AI is almost entirely in the industry frame — about 19,200 dexterous hands sold in 2025, and "sales are expected to exceed 430,000 units by 2030". AGI is made a vendor target — "Everything is for making the moment of AGI (artificial general intelligence) arrive sooner" — and an official metric ("China's daily average token usage has exceeded 500 trillion"). But in the Chinese-language technical community RSI has already been worked out in fine technical detail: Zhipu published its first RSI result — "GLM optimizes the system that runs GLM, while the optimized system, in turn, continues to carry new GLM" — and set its own boundary: "this is still far from 'AI fully autonomously designing and training its own successor' in the true sense".

The judgment on the discourse layer: governance is the exception; the mainstream narrative is not — it has not moved ahead of engineering and the criteria but repeats the three-layer lag as it stands. Practitioners already talk about practice-stream engineering, commentators already pick at the criteria, and the defining discussion of what AGI is remains an empty slot in the media, technical communities, and academia.

## The Institutional Layer and the Causes: Why the Definition Does Not Move

### Institutions: Industry Terms Run Hot, and Terms of Understanding Are Absent

The EU's GPAI (general-purpose AI) definition has come through the Digital Omnibus revision unchanged and still draws its boundary by training scale and general capability. The US executive order EO 14434 requires the executive branch to "use the terms 'Super Intelligence' and 'SI' in place of 'Artificial Intelligence'" — an act of naming, not of definition. China's 2026 Government Work Report calls for "cultivating and developing future industries such as future energy, quantum technology, biomanufacturing, embodied AI, brain-computer interfaces, and 6G" — structurally identical to 2025: "embodied AI" once, "artificial general intelligence" and "physical AI" zero times.

There is one crack in the institutional layer: China's industry standard YD/T 6771—2026 specifies, for embodied AI datasets, "operating rules for data production, organizational safeguards, and quality evaluation indicators" — distribution-side components entering institutionalization for the first time. The CAICT (China Academy of Information and Communications Technology) report *Embodied AI Development Report (2026)* offers the definition "physical AI refers to embedding the laws of physics into the entire process of perception, reasoning, generation, and action", and, citing the Stanford 2026 AI Index, notes that the AGI discussion is turning toward "completing a broad range of human tasks in open environments". But these two concern embodied AI and data quality, not AGI.

### The Causes: A Three-Layer Lock-In of Measurement, Incentives, and Discourse

The definition does not move, and the reason is not missing information.

**The measurement layer.** A systematic review of 445 language-model benchmarks found that benchmarks often measure something other than what they claim to measure — so conclusions drawn from their scores do not hold up. A series of 2026 studies quantify this further: leaderboards are subject to a "winner's curse" — "ranking noisy benchmark scores rewards sampling luck alongside genuine ability"; preference-based leaderboards can be manipulated — "each attack can boost a model by up to 15-20 places in a ranking and, combined…by up to 45 places"; putting benchmark data into training has been formalized — datasets as voters, models as candidates — as "shift bribery", a form of election manipulation, and proved NP-hard.

**The incentive layer.** A position paper argues that a paper's worth should not be judged by predictive performance alone — a yardstick that amounts to "setting wrong incentives for researchers", turning the community toward score-chasing instead of understanding. Researchers' behavior is more telling still: they "expressed deep distrust of leaderboard rankings, yet continued to use them as rough decision-making aids", and model selection in practice relies on peer networks.

**The discourse layer.** The concept of AGI has been analyzed as "deep hype: a long-term, overpromissory dynamic articulated through sociotechnical fictions"; "glosslighting", a concept added in 2026, describes "using technically redefined terms to evoke intuitive…associations while preserving plausible deniability". Vagueness of definition itself serves the functions of fundraising and mobilization.

There is evidence at a fourth layer as well: **the evaluation lag has been measured directly**. In research on medical language models, the time gap from the release of the latest model to publication of the study "widened from 1.33 to 6.08 quarters" (2023 to 2026).

The three layers together amount to a single explanation: the lag in understanding is not a delay in information but a lock-in — criteria, incentives, and discourse each have their own reasons for maintaining the status quo. Evaluation engineering can switch tracks because its incentives are direct; the conceptual definition does not move because the definition serves fundraising, mobilization, and standing in the community, and is decoupled from engineering progress.

## Conclusion: Where the Human Is

Gathered together, the evidence gives the following structure of three-layer cascading lag:

| Layer | Current state | Distance from fitting the practice |
|---|---|---|
| Engineering layer | Synthetic self-sufficiency in verifiable domains; practice stream collection on the physical side and failure data entering training are established | Near, but typing covers only two dimensions, and the language-model side has no disclosure |
| Criterion layer | Has advanced from outputs and duration to the task process | Changing fastest; open-domain criteria have not appeared |
| Definition layer | Capability checklists dominate; the process type stands at zero | Has not moved |
| Governance layer | Self-improvement has already been written into categories and thresholds | Not applicable (governance runs ahead of definition) |
| Institutional layer | The AGI definition has not moved; a first crack has appeared with the embodied AI data standard | Has barely moved |

**Engineering has moved ahead of the criteria, and the criteria have moved ahead of the definition.** The gap is not a crack but a slope — and the part of the slope that is loosening fastest is the criterion layer.

The question "where is the human" is raised by the fitting theory itself. Its normative layer holds that AGI should be positioned as an augmentative tool — which means: however far loop automation goes, the human must be present, at an identifiable position. The evidence on RSI supplies the answer: the human is no longer the source of the data but the source of the selection function — verifiers are written by humans, anchors are kept by humans, and the exam in open domains is set by humans. Outside the three points of entry the loop can run on its own; within them, human practice is still flowing in.

Two points must be stated as they are. First, the evidence for "engineering is close" carries a visibility bias: what the industry is most willing to disclose is evaluation and the engineering loop, and what it is least willing to disclose is the training pipeline — the latter may not have been done, or done and not disclosed, and the existing evidence cannot tell the two apart. Second, the overall proposition that "practice runs ahead and definition lags" is not stated directly in any of the retrieved literature; the closest are single-domain lag measurements and convergence analyses of single benchmarks.

For evaluation research, the step most worth taking next lies here. Today’s criteria score how cleanly a task is completed; none scores whether a model, like human practice, covers the kinds of failures that actually occur and corrects from them — the experience types of the attempt sequence, the full spectrum of failure and correction. With such a criterion, the practice streams the engineering layer collects would finally have an evaluation outlet, and a process-based definition of AGI would have something measurable to stand on. As for what to measure, the fitting theory has already drawn up the list.
