---
title: 'Success Provides Direction, Failure Provides Precision: How LLM Training Threw Away the Mistake Notebook'
date: 2026-10-14 09:00:00
updated: 2026-10-20 09:00:00
categories: [技术]
tags: [AI, failure data, training data, mistake notebook, audit]
description: 'A correct demonstration provides direction; an attributed failure provides precision. The claim, then an audit of 33 evidence units: mainstream recipes treat failure data somewhere between discarding and shadowing, the top level is vacant at 0/33 — while 2026 flagships are already quietly mining it.'
---

Everyone who has been through school understands one thing: the mistake notebook (the notebook of corrected mistakes that students keep) beats a sea of drills. Getting a hundred problems right is worth less than fully understanding why one problem went wrong — once an error has been explained, the judgment it sharpens far outstrips anything repeated success can give.

In July 2026, Jiang Yungang (vice president of Fudan University) said publicly at the World AI Conference (WAIC) that failure data matters to a model no less than success data, and that foundation-model corpus construction should work like a mistake notebook. It struck a chord across the room.

But resonance is one thing. What has the industry actually done? **Every reinforcement learning run produces failures, and every verifier flags failures — yet almost not a single one is kept as a training asset.**

We ran a systematic audit that turns this question into verifiable numbers. First the claim, then how we checked, and finally what we found.

## 1. The Claim: Success Provides Direction, Failure Provides Precision

There is a precise version of this claim. In Bayesian language: **a successful demonstration confirms that some strategy works — that is direction; an attributed failure cuts a region out of the hypothesis space — that is precision.**

Direction and precision are not the same thing. Pile a hundred redundant successes onto the same region and the posterior grows no sharper; one clearly explained failure strikes that region off the search space outright. A student gains less from grinding a hundred problems they already know than from correcting a single mistake — mathematically, that is exactly what is going on.

But the claim carries three caveats; drop any one and it degenerates into a slogan:

1. **Failures must be diverse.** Homogeneous failures are one mistake copied out a hundred times — zero information. The variable that does the work is coverage of failure modes, not any fixed success-to-failure ratio.
2. **Failures must be de-toxified.** "Fake successes" from reward hacking do active harm; letting them in is contamination, not data.
3. **Failures must be attributed.** A failure record without a root cause is just the word "wrong" — precision comes from "where it went wrong".

There is precedent in cognitive science: the judgment people learn from losses they have personally lived through differs systematically from the judgment learned from descriptions in books; losses can even be implicitly encoded in the body ahead of conscious insight, and still steer decisions. We do not claim these results transfer directly to gradient descent — they are motivation, not proof.

## 2. Why It Matters Now

Because the two dimensions where today's frontier models are weakest — **generalization and calibration** — both point straight at training-data practice, and failure-driven learning is a candidate signal aimed at exactly those two dimensions.

Consider three lines of evidence. First, reinforcement learning with verifiable rewards (RLVR) has been shown to be **re-weighting existing capability rather than extending it**: pass rates at small sample counts (pass@1) keep rising, while at large sample counts (pass@k) the model never surpasses its base model — it has not learned anything new, it has merely moved what it already had to the front. Second, post-training itself damages calibration: aligned models are measurably more overconfident than their pretrained versions. Both symptoms share one name: **the model does not know where the boundary of its own ability lies** — and that is precisely the thing failure data teaches.

Third, controlled evidence already exists: fine-tuning on "error + correction" paired data once pushed LLaMA-2-70B's math scores briefly past GPT-4; on a collapsing multi-step tool-use training run, process reflection supervision pulled scores up by more than 22 points and earned non-zero scores on scenarios outside the training distribution — where the pure supervised fine-tuning (SFT) baseline happened to score exactly zero.

The methods work; the evidence is in hand. What is missing is a systematic account of **practice**: the scattered disclosures in technical reports have never been laid side by side and compared — for lack of a shared vocabulary for "how this pipeline treats failure data".

## 3. How We Checked: Grading the Treatment of Failure Data

We designed a lifecycle scale that grades "how a training pipeline treats failure data", from L0 to L4:

- **L0 Discard** — failed trajectories are thrown away outright (the default of rejection sampling);
- **L1 Shadow** — failures exist only silently, as "the rejected side" (preference pairs data);
- **L2 Transient** — failures are spent as one-off gradients and discarded (inside RL environments);
- **L3 Component** — purpose-designed components for failure data are actually running;
- **L4 First-class** — failure records are collected, attributed, retained, and released at scale just as success records are, becoming part of a public methodology.

On top of that sit six sub-dimensions (error localization, causal attribution, reflective correction, and so on), with criteria frozen in a codebook and every coding anchored to a primary source — you may disagree with our grades, and you can go check our citations.

![Lifecycle framework](/images/failure-data-fig1.png)

**The failure-data lifecycle (figure from the paper).** Five treatments of failure data inside a training pipeline, from discard to first-class — this figure is the codebook's framework: L0 Discard, L1 Shadow, L2 Transient, L3 Component, L4 First-class.

The audit covers 33 units: 28 open-source datasets and mainstream training recipes (2023–25), plus disclosures from 5 flagship pipelines in 2026 — 44 mechanism-level coding records in total.

## 4. Result One: Systematic Downgrading at the Dataset Layer

The stratification is strikingly clean — so clean it glares.

**All 7 supervised fine-tuning (SFT) units, without a single exception, sit at L0.** Rejection-sampling-style "throw away what was got wrong" was the default of SFT data production across 2023–25 — from Llama 2/3 to the various open-source math datasets, applied without distinction.

**All 6 units in the preference stage sit at L1.** In preference pairs, "the rejected side" does carry failure — but it is never separately labeled, localized, or attributed; it exists only as a shadow cast for contrast.

Pull out the mainstream subset on its own (SFT + preference + RL, 15 units): **0 reach L3**, and the median sits at L1. In other words: in mainstream recipes, the treatment of failure data stalls somewhere between "throw it away" and "keep it as a shadow".

And where are all the L3 units? **Entirely in the academic-exception layer.** The community clearly knows how to build failure-rich datasets — the papers do build them — they are simply not delivered inside mainstream recipes.

## 5. Result Two: One Vacancy, One Turn

**L4 is completely vacant: 33 units, 0.** No player simultaneously does error annotation, causal attribution, and reflective correction at scale and publishes it as public methodology. Exactly 1 unit has all three elements in place.

Yet the same audit also caught a **generational shift** in the act: of the five flagship pipelines of 2026, **four** run explicit failure-data components (the cohort median reaches L3). And the carrier of the failure signal is migrating — in the mainstream era, failure rode on preference pairs; in the flagship era it moves into RL environments and audit loops (preference-pair carriers among flagship mechanisms: 0/14).

How to read this: **the behavior has already changed; the methodology has no name yet.** In engineering terms the industry has begun to mine failure, but no one has written it up as a reusable methodology — those are the coordinates this audit supplies.

![Level distribution](/images/failure-data-fig2.png)

**Three cohorts of failure-data treatment (figure from the paper).** Horizontal axis: lifecycle level (L0 Discard — L4 First-class); vertical axis: share of units; colors separate the cohorts — orange = 2023–25 mainstream recipes, blue = academic exceptions, green = 2026 flagships. Mainstream piles up at L0/L1; academic and flagship reach L3; at L4 all three cohorts are zero — the figure is annotated "0% in all cohorts".

## 6. Roadmap: Making Failure Data a First-Class Citizen

The audit also sketches a map of the vendors: five flagships, none of them with the full set of components, and **the open-corpus link is vacant across the entire industry**. The missing infrastructure is concrete:

1. **A triple data schema** — failure records as first-class objects, with three mandatory fields: error type (localized to the step), root cause, and corrected text, plus provenance information. This is the mistake notebook, given a data structure.
2. **Collection and annotation protocols** — who collects (users, staff, the model's own rollouts), sampling by diversity rather than quantity, and mandatory disclosure of the analyzer model used for annotation.
3. **De-toxification cleaning** — a compulsory pre-training stage that separates three things: fake successes (reward hacking), environment failures, and genuinely valuable model failures. The flagships already set precedents: one zeroes out the reward on trajectories confirmed as hacking; another, after recording the reason for failure, removes "environment-crash" samples — you cannot teach a model to believe that a broken environment is its own fault.
4. **An open corpus with shared protocols** — at present, not a single one exists.

## 7. What Lies Behind This High Ground

Failure data is an unoccupied high ground — that is the audit's conclusion at the level of what is disclosed. And behind it sits a bigger picture: failure is not an isolated data type; it is **the most information-rich slice of the stream of practice**. How a doctor misdiagnoses and then corrects course, how a programmer writes it wrong and then repairs it — these mistakes live in no archive; they are part of living practice.

That is the argument the companion paper, *Fitting the Practice, Not the Works: A Human-Referential Theory of AGI*, sets out to make: the thing to fit is not the works, but the practice. This audit is the empirical starting point of that chain of argument.

**Success provides direction; failure provides precision.** What students understand, model training pipelines will sooner or later have to understand as well.

---

## References

- **This post is based on**: *Success Provides Direction, Failure Provides Precision: A Structured Audit of Failure Data in LLM Training* · [GitHub](https://github.com/yuyuguilab/failure-data-audit)
- **Theory**: *Fitting the Practice, Not the Works: A Human-Referential Theory of AGI* · [GitHub](https://github.com/yuyuguilab/practice-fitting-theory)
- **Methodology**: *Fitting the Practice: A Data Methodology for Frontier Model Training, with a Readiness Audit of 2026 Flagship Pipelines* · [GitHub](https://github.com/yuyuguilab/practice-fitting-methodology)
