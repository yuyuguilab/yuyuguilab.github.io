---
title: 'Fitting the Practice: A Data Methodology for Frontier Model Training'
date: 2026-10-20 10:00:00
categories: [技术]
tags: [AI, training data, data methodology, readiness audit, practice flow]
description: 'Fourteen protocol components, a four-layer data stack, three methodological lines — then an item-by-item scoring of eight 2026 flagships: production 0.393, governance 0.333, distribution 0.062. Who is covered, and what experience — an industry-wide blank.'
---

Two narratives about AI training data currently dominate.

One is the **wall**: high-quality human text will be exhausted within a few years. The other is **escape**: the industry has proclaimed the arrival of the "era of experience," in which agents learn from their own interaction streams and no longer depend on human data.

Caught between the two narratives is an unsettling experimental result: feed a model on model-generated data, and its distribution degrades — the so-called model collapse. In other words, **the escape route runs straight through the very failure mode it hopes to avoid**.

Yet both narratives share a hidden assumption: that "human data" means what humans have **written**. The companion piece, *the human-referential fitting theory of AGI*, has argued that this assumption is the real error: what should be fitted is human **practice** — the full spectrum of who is succeeding, who is failing, who is learning, and the full course of it all unfolding over time. The stock has a wall; the flow does not.

The theory settled "what to fit." The earlier failure-data audit settled "what the industry has done with the stock." But neither answered the engineering question: **how to fit?** What to collect, how to clean, how it enters the weights, who adjudicates — what a complete pipeline looks like is absent from the literature (distribution-side research has matured into output-diversity engineering, production-side knowledge has settled into scattered flywheel practices, and governance-side work stops at licensing and provenance research — no one has produced a pipeline-level protocol).

This paper fills that gap. It does two things: **lay out a fourteen-component methodology, then measure how far the current eight flagships stand from it.**

## 1. The methodology itself: a four-layer stack, three lines, fourteen components

The pipeline is a four-layer data stack: **collection → cleaning → absorption**, with a **governance band** running across the whole. Fourteen components hang on this stack, organized along three lines.

Three design rules come first, and they matter more than any single component:

1. **Operational definitions must be coder-independent** — two strangers working from the same definition should reach the same verdict;
2. **The protocol (what should be done) and existing instantiations (who is actually doing it) are stated separately** — the normative and the descriptive are never written together;
3. **Every component carries its own failure mode** — a methodology that cannot say how it breaks is a slogan, not a protocol.

**Distribution line (C1–C4): draw the grid first, then watch the grid.** The first step is defining the typed type space: populations × success/failure × expert/novice × typical/marginal — a grid drawn over the whole of human experience. Then come the coverage monitor (periodic sampling that raises an alarm when a cell nears empty), gap-driven collection dispatch (rather than quota guesswork), and the coverage dashboard (monthly reports internally, annual reports externally). Why coverage rather than quotas? Because experiments have shown that fixing a "representative" marginal distribution can make discriminatory output worse — a quota presses on a single line, coverage watches the whole grid.

**Production line (C5–C11): collection and cleaning that never stop.** Production telemetry — usage and feedback from deployed users flow back into training, but positive signals are never trained on alone: one pipeline lifted user response rates by 28%, whereupon the model learned sycophancy and had to be rolled back as an emergency; organized failure submission — a three-piece kit of channel + incentive + quality control, for without incentives the supply is zero; the three-part failure record — error type, root cause, and correction packaged as a single datum, the engineering of the "mistake notebook"; pseudo-failure discrimination — separating true failures, cheat-style fake successes, and environment crashes into three (you must not teach the model that a broken environment is its fault); domain-conditioned mixing; provenance stratification; three-tier absorption — monthly continual pre-training, weekly RL replay, real-time runtime memory, three clocks each keeping its own tempo.

**Governance line (C12–C14): whose spectrum, who adjudicates, what may be collected.** Aggregation rules must be written down and disclosed; verification must climb a ladder (internal audit → third party → public benchmarks); consent to the data flow must be a sustainable relationship — revocable, renewable — not a checkbox ticked at collection time.

![Four-layer data stack](/images/fitting-methodology-fig1.png)

**The four-layer data stack (figure from the paper).** The collection → cleaning → absorption layers run vertically; the governance band runs across the whole; the 14 components (C1–C14) hang on the stack, with colors distinguishing the three methodological lines (orange = distribution, blue = production, green = governance); the dashed loop is the human practice flow that never closes.

## 2. One key design parameter: the injection rate

How much should synthetic data account for? The right answer is: **set it per domain — a single global ratio is wrong by construction.**

In **verifiable domains** — code, mathematics, where compilers and executors have the final say — synthesis and self-play have proven scalable. But be honest: that is **bootstrapped self-sufficiency**, all of it sitting on a foundation of pre-training over human corpora, not an origin story.

In **open domains** — value judgments, workflow insights, long-tail practices — no compiler can rule an insight "correct," and no executor can grade the root cause of a failure. There, the chain of collapse has never been broken, and the counter-evidence keeps accumulating; the human practice flow is not one input among many, but the sole external carrier of the distribution being fitted.

So every domain needs a guaranteed floor for fresh human practice — the injection rate. And this floor has a quantitative anchor: it has been proven mathematically that closed-loop self-feeding can be kept from collapse by mixing in even one real data point per cycle; the mixing must be cumulative (the human foundation never shrinks) rather than substitutive; and the degradation is asymmetric — synthetic training strengthens skills already strong and weakens skills already weak — so the floor must be set per capability, not with one stroke.

## 3. Results: engineering is disclosed in narrative form

With the methodology in place, the next step is to measure the distance: score the public disclosures of eight 2026 flagship pipelines against the fourteen components (0–3 per cell) — 112 cells, total **32** (mean 0.286).

The three lines separate sharply: **production 0.393, governance 0.333, distribution 0.062.**

Four components appear zero times across all eight disclosures: typed type space, coverage monitor, coverage dashboard, provenance stratification. The three-part failure record tops out at level 1 — the industry already knows how to record the two parts "error + correction," but the third part, "root cause," is connected nowhere. The entire matrix holds a single level-3 cell: MiMo's pseudo-failure discrimination (a dedicated red-team agent repeatedly attacking the training environment, cheating held under 2% throughout, plus third-party audit).

The governance line's high scores come almost entirely from Anthropic alone — remove it, and the governance mean of the remaining seven falls to 0.190. **Governance instantiation is concentrated, not widespread.**

Read together, these patterns yield one sentence: **the flagships do not lack engineering; what they lack is engineering disclosed in institutional form** — mechanisms without numbers, however much is written, remain narrative; failure cases used only for evaluation and never entering training, however thick the section, do not count.

![Readiness heatmap](/images/fitting-methodology-fig2.png)

**Readiness heatmap (figure from the paper).** 8 flagship pipelines × 14 components, with color encoding the disclosed-instantiation level (0–3). The all-zero band running across C1/C2/C4/C10, and the single dark level-3 cell in the whole figure, are plain at a glance.

The honesty clause: this is a single-coder audit; a blind re-coding of a 20% sample is scheduled, and agreement rates and κ will be reported in the next version; with all five medium-confidence cells removed, the ordering of the three lines, the all-zero components, and the unique level-3 cell all stand unchanged. And the audit is never used to prove the protocol correct — the descriptive sections and the normative sections are separated by a wall drawn unmistakably.

## 4. Four bridges: where each audience enters

A methodology that cannot enter the language of the communities who would implement it remains a manuscript. Four bridges, each anchored in the audience's own vocabulary.

**For agent-RL practitioners** — entry point: "the human side of rollouts." You already treat behavior as a perpetual data stream: sandbox clusters, replay buffers, staleness controllers — that infrastructure is this paper's production line, missing only a change of subject. Three pain points map directly: reward hacking ↔ failure-attribution data (the gap between a true failure and a gamed reward is exactly the root-cause record); entropy collapse ↔ the injection rate (fresh human practice is the only external source of entropy); eval drift ↔ fitting lag. And the three standard objections: "human data is dirty and expensive" — failure cases are precisely the cheap part, and the expensive part (attribution) is infrastructure RL needs anyway; "synthetic data and self-play suffice" — in verifiable domains yes; open domains have no compiler; "we do RLVR, not imitation" — the verifier is a human institution, and the checks it encodes are human decisions, which drift with practice.

**For pretraining and data engineers** — entry point: "the never-finalized, time-incremental corpus." Your pain is a disguised stock–flow mismatch: the web is a stream, the corpus is a snapshot — so the wall, staleness, and contamination are one problem. "We already do continual pretraining" — cadence without typed coverage leaves the distribution line at zero: the all-zero C1/C2/C4 columns in the audit are what that looks like from outside; "the data flywheel is already industry practice" — it exists as fragments, never assembled into a protocol (no typed schema, no failure-record spec, no per-domain floors, no verification ladder); "fresh data breaks reproducibility" — the versioned schema and the archived dashboard exist precisely to make the flow auditable. Frozen corpora are reproducible the way fossils are reproducible — both pay for it by ceasing to change.

**For governance and policy people** — entry point: "consent as a continuing relationship." The legal concepts already exist — revocable, context-dependent consent — what's missing is the engineering reading: machine-readable terms, a feasible-set register, propagation of withdrawals. "Privacy law forbids collection at this scale" — the feasible set is a boundary condition of the methodology, not an objection to it; its whole purpose is to make constraints computable; "this favors big platforms" — the typed schema and consent protocols are two components a small team can adopt unilaterally; the asymmetric flywheel is the status quo alternative; "provenance is unenforceable" — watermark deployments and machine-readable terms are the first enforcement-grade primitives.

**For philosophy and public discussion** — entry point: "the living mirror." The critique of current models is that they freeze one moment of a culture — the answer is not a better polish but a moving surface: a system fitting practice reflects what people are actually doing, failures and learning included. "You're thingifying people into data" — typing by design includes failure and typicality, the opposite of an idealized portrait, and descriptions can be withdrawn; "a more convincing mirror is more dangerous" — credibility tracks the accuracy of the reflection: a mirror that admits its staleness and its coverage gaps is more correctable than one that implies completeness; "whose practice counts?" — that is exactly why aggregation must be written down as an explicit, revisable rule, which already goes further than a silent aggregation function with undisclosed rules.

## 5. What would count as wrong

The methodology is stated so that evidence can kill its parts: if quota-style representation beats coverage-driven collection on joint-distribution metrics, the distribution line is rebuilt; if an open-domain pipeline on a purely synthetic stream shows no collapse and sustains training without a human foundation, the injection-rate design fails at the root; if flagship disclosures show all three lines already institutionalized, this readiness finding decays into a dated confirmation.

One such falsification has already occurred: synthetic self-sufficiency in verifiable domains was once taken as a blow against "the necessity of human data" — this paper absorbs it as a design parameter (domain partition) rather than denying it. **The domain partition is itself the revised claim.**

## 6. The distance is the work program

The protocol is written on paper; the disclosure record is laid on the table; the distance between the two is the work program. The distribution line stands at 0.062 — "whom to cover, what experience to cover" is a near-blank across the entire industry — and that number is both the blank and the starting point: whoever fills in this line first takes the first ticket to the next stage of training data.

**The stock has a wall; the flow does not. And the flow requires a stack.**

---

## References

- **This paper draws on**: Fitting the Practice: A Data Methodology for Frontier Model Training, with a Readiness Audit of 2026 Flagship Pipelines · [GitHub](https://github.com/yuyuguilab/practice-fitting-methodology)
- **Theory**: Fitting the Practice, Not the Works: A Human-Referential Theory of AGI · [GitHub](https://github.com/yuyuguilab/practice-fitting-theory)
- **Failure-data audit**: Success Provides Direction, Failure Provides Precision · [GitHub](https://github.com/yuyuguilab/failure-data-audit)
