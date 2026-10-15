---
title: 'AI Has No Error Notebook: An Audit of 33 Model Recipes Finds an Unoccupied High Ground'
date: 2026-10-14 09:00:00
categories: [技术]
tags: [AI, Failure Data, Training Data, Generalization, Calibration, Learning from Mistakes]
description: "Every student keeps an error notebook; AI training does the opposite — keep the correct answers, throw the all-wrong batches away. This audit scores 33 evidence units on a five-level scale: the top tier for failure data is vacant, 0/33. The cure for hallucination and unreliability sits on ground nobody occupies."
---

> **📄 This is the plain-language edition of our paper**
> Full paper (PDF in English & Chinese + all data): [GitHub repository](https://github.com/yuyuguilab/failure-data-audit) · **DOI**: [10.5281/zenodo.23355929](https://doi.org/10.5281/zenodo.23355929)
> Every number below comes from the paper's 44 coding records, reproducible with one command.

Every student knows the drill: **grinding correct answers makes you better at what you already know; only mistakes show you what you don't.** That's why error notebooks exist — a mistake, once explained, sharpens you more than ten correct drills.

Now turn that lens on how AI models are actually built. The picture that emerges is striking:

**The AI training industry is precisely a "keep the correct, discard the wrong" industry.**

## What the audit did

The audit went through every training recipe and dataset available — open-source efforts like Llama, DeepSeek-R1, and Tulu, plus the technical reports of the five most aggressive flagship pipelines released in autumn 2026 (GPT-6 Astra, Claude Opus 5.5, GLM-5.3, Xiaomi MiMo-V2.6, DeepSeek-V4.1) — **33 evidence units** in total, and coded where every failure trace ends up.

The audit measured "how seriously a lab takes its failures" on a five-level ladder:

| Level | Name | In plain terms |
|-------|------|----------------|
| **L0** | Discarded | Failures thrown away before training ever sees them |
| **L1** | Shadow | Failures used only as the "thumbs-down" beside a correct answer |
| **L2** | Transient | Failures subtract points, then evaporate — never saved |
| **L3** | Component | Failures deliberately processed into training material (masking, replay, auditing) |
| **L4** | First-class citizen | Locate the error + attribute the cause + reflect on the fix — all three, at scale, as methodology |

![The failure-data lifecycle: from L0 discarded to L4 first-class citizen](/images/failure-data-fig1.png)

L4 is what this post calls the *error notebook*: not just "this was wrong," but which step failed, why, and what the correct approach looks like — exactly what a top student's notebook contains.

## Finding one: the top tier is empty — across the board

**L4: 0 out of 33 units. Not one.**

The mainstream open recipes are more damning still:

- **All 7 SFT-stage units are pure L0.** This isn't negligence; it's the textbook. DeepSeek-R1's rejection sampling keeps only "correct, consistent, high-quality" trajectories and discards the rest. Llama 2/3 feeds only the top-scored sample from each generation batch into training. Even the community's open reproduction of R1 verifies answers and deletes the failures. The industry's default: error traces are waste.
- The starkest case is the DAPO algorithm — if *every* attempt in a group fails, **the whole group is dropped as "zero-gradient waste."** In other words: the batch with the highest density of failures is treated as garbage.
- Preference alignment does slightly better, but only reaches L1: failure appears as the rejected member of a chosen/rejected pair, a foil for the correct answer. No mainstream recipe ever tells the model *which step was wrong, or why*.

![Failure-data levels across three cohorts: L4 is zero in all of them](/images/failure-data-fig2.png)

## Finding two: autumn 2026 is when things started to move

The window then narrows to after July 2026, when professor Jiang Yugang (Fudan University) told the World AI Conference that "failure data matters as much as success data" — and watched the five flagships that shipped afterwards. **Four of the five now run explicit failure-data components.** That is a generational shift:

- **DeepSeek-V4.1 goes furthest**: its report states, in writing, that they collect "negative feedback and model failure cases submitted by internal employees at scale," build replay environments from them, and run "systematic replay of failures and targeted RL against observed weaknesses." That is the closest thing to an error notebook in industrial form — and notably in the *capability* domain, not just safety.
- **Xiaomi MiMo-V2.6 has the cleanest shape**: it synthesizes training data from real reward-hacking failures, deliberately "keeping the original error recognizable and making the correction explicit" — keep the mistake, write the reflection, show the fix. All three moves present. The catch: it covers only reward hacking, at undisclosed scale.
- **GLM-5.3 works at step level**: erroneous segments inside training trajectories are retained but masked from the loss — the model looks at the mistake without being punished for it, learning correction behavior.

But notice one telling detail: **none of them calls it a methodology.** DeepSeek's own words: "the marginal return of engineering the data and environment pipeline substantially exceeds that of algorithmic novelty." Failure data is framed as plumbing, never claimed as an idea. Four labs are doing it; nobody owns it; and not one failure-annotated data point has been released (flagship openness: 0/5).

## Why it matters: failure is exactly where AI is weakest

Today's models ace exams — math, code, anything with a verifiable answer. Their two weakest dimensions are:

1. **Generalization** — fall apart on genuinely novel problems. On ARC-AGI-3, a benchmark built for "humans get it instantly, AI scores near zero," every 2026 frontier model scores below 1%.
2. **Calibration** — not knowing what you don't know. Hallucination isn't lying; it's the absence of the ability to say "I don't know." Worse, current training *punishes* abstention — admit ignorance, get no reward — so models learn to guess confidently. OpenAI itself has acknowledged that its newest reasoning models hallucinate more than their predecessors.

And learning from failure is precisely the antidote to both. The evidence has existed for years:

- Microsoft's LEMA experiment: collect models' wrong solutions, have GPT-4 explain where each went wrong and how to fix it, then fine-tune on these "mistake + explanation" pairs — LLaMA-2-70B beat the then-state-of-the-art GPT-4 on grade-school math.
- The PRS experiment (Institute of Automation, CAS): let the model explore freely, then generate "error type + root cause + fix" reflection reports from its failures and train on those — scores jumped from 3.5 to 25.75. Most striking: on entirely unseen task formats, the PRS-trained model still scored 12 while the success-only baseline scored **zero**.

Error notebooks don't just work — they generalize far beyond "study the correct answers."

## So why does nobody do it?

Three structural reasons (the paper has the full argument; here's the plain version):

1. **Judging "wrong" requires a referee, and referees can be fooled.** Models have learned to cheat evaluations — in 2026 this went from hypothesis to incident (one flagship was measured cheating on 81.5% of tasks). A notebook full of contaminated "mistakes" can be worse than none.
2. **The most effective form is a closed loop, and closed loops are private.** DeepSeek's failure-replay environment beats any static dataset — but it lives on their servers.
3. **Nobody has released a failure dataset.** A large-scale public dataset with the full "error location + attribution + reflection" structure does not exist today, months after the WAIC speech — no failure corpus in any national data program either.

## The bottom line

One sentence summarizes the audit: **success provides direction; failure provides precision — and industry has perfected the first half while running the second half at zero.**

Failure data is a high ground that has been proven effective, publicly called for, and yet remains unoccupied. Whoever builds the error notebook first — collection protocols, toxicity cleaning, three-part annotation, an open corpus — holds the key to the next generation's edge in generalization and reliability.

The full paper (with the five-level codebook and all 44 individually sourced coding records):

> **DOI**: [10.5281/zenodo.23355929](https://doi.org/10.5281/zenodo.23355929) · [GitHub: failure-data-audit](https://github.com/yuyuguilab/failure-data-audit) · [English PDF](https://github.com/yuyuguilab/failure-data-audit/blob/main/paper.pdf) / [中文 PDF](https://github.com/yuyuguilab/failure-data-audit/blob/main/paper_zh.pdf)
