---
title: "Cracking Open the Black Box: A Full Decoding of the Frontier Training Pipeline and Data Flywheel"
date: 2026-07-21 10:00:00
categories: [技术]
tags: [AI, large models, training pipeline, data flywheel, distillation, reinforcement learning, synthetic data]
description: "The training pipeline was the last black box of the large-model industry; today it has been cracked into a set of open blueprints. Using 2026 research, this article takes apart the seven stages of the training pipeline and the four nodes of the data flywheel, one by one."
---

## Prologue: When the Last Black Box Is Cracked Open

For a long time, the "training pipeline" was the last black box of the large-model industry. Models were open-sourced, papers were published — but "where the data comes from, how the rewards are set, how each iteration happens" — every lab kept its lips sealed, as if this pipeline from raw data to finished model was the one unreplicable secret recipe.

In 2026, that black box was cracked open. Not voluntarily disclosed by any single lab, but forced into transparency by the practices of the entire industry — when Anthropic had Claude interview 80,000 users in a single week, when DeepSeek wrote its training recipe into a Nature paper, when Google's AlphaEvolve optimized the very kernels training itself inside data centers, when Kimi made K3's architecture and recipe public — the training pipeline ceased to be a secret and became an open blueprint laid out on the table.

This blueprint has two layers: one is the **linear training pipeline** (seven stages from collection to deployment), the other is the **data flywheel** that sets it spinning on its own (four nodes that let the model advance a step further every day). This article takes both layers apart and explains them one by one.

## I. The Training Pipeline: Seven Stages, Not a Single Locked Door

The frontier training pipeline of 2026 can be broken into seven stages. Open each one and you'll find — none of the doors are locked.

### Stage 1: Collection — Data Flows In Through Three Inlets

The first stage is collection. New data pours continuously in through three inlets:

- **Production traffic logs**: prompts from APIs and apps, model outputs, explicit feedback (thumbs up/down), implicit signals (retries, abandonments, edits). These are first-hand evidence of "what users actually need."
- **Real-task repositories**: GitHub PRs, bug fixes, frontend requirements — the engineering problems of the real world. GLM-5.2 can even handle ultra-long task chains of 850,000 tokens in a single session.
- **Evaluation regression sets**: weaknesses exposed by the previous update are prioritized for supplementary data, preventing "curing the new disease only to relapse into the old one."

The most extreme collection case of 2026 comes from Anthropic: in March 2026, it had Claude itself interview 80,508 real users in one week, spanning 159 countries and 70 languages, distilling an average of 2.3 real concerns per person — "unreliability" at 26.7%, "job loss" at 22.3% — and fed this first-hand data directly back into training.

But there's an important reality check: OpenAI and Anthropic have both made clear that chat data is **not** trained on in real time; it enters the next snapshot only after batching and compliance review. "Daily" mainly describes the collection side running continuously; weight updates follow a snapshot cadence.

### Stage 2: Filtering — Even "Data Curation" Is Done by AI

The second stage is filtering. Raw data is not training data; it must go through four processes:

- **Deduplication and denoising**: semantic deduplication, near-duplicate sample removal (ROUGE-L similarity thresholds);
- **Compliance filtering**: PII personal information, toxic content, copyright risk — Anthropic uses its privacy tool Clio to compress 310,000 real conversations into trainable value signals;
- **Quality scoring**: a judge model (reward model) scores every data point; low scores are discarded;
- **Contamination prevention**: deduplication against evaluation sets, so the model can't "memorize the answers."

The key change in 2026: even the act of "curating data" itself has been automated. Labs like Meta and Google use the previous generation of models as data-quality filters; Agon has multiple models grade each other's reasoning; "Compete Then Collaborate" has multiple flagships jointly author problems and jointly verify them.

**What this means: data filtering is no longer a secret recipe — it's a public pipeline every lab runs.**

### Stage 3: Synthesis — Models Making Data, at the Scale of Hundreds of Billions of Tokens

The third stage is synthesis, the beating heart of the entire pipeline. Models use models to make data, with no dependence on human annotation. In 2026, the scale reached a new order of magnitude:

- **CodeAlchemy**: generating **500 billion tokens of synthetic code + 350 billion reasoning tokens** in a year, with quality verified throughout by execution trajectories;
- **Kimi K3's Vision in the Loop**: having the Agent screenshot the webpages it generates and revise the frontend based on visual feedback until the UI passes — the leap in frontend capability rests on exactly this "render-and-judge" pipeline;
- **Anthropic's honeypot scenarios**: synthesizing improper inducement scenarios to specifically train the model to hold its boundaries, cutting the misjudgment rate from 65% to 19%;
- **AgentInstruct-class systems**: multi-agent collaboration converting document/code seeds into 25 million pairs of instruction data.

The methodology of synthetic data — Self-Instruct, STaR self-teaching, long-horizon agent trajectories, multi-agent collaboration — is all written down in public papers.

### Stage 4: Training — Open Optimizers, Established Distillation Playbooks

The fourth stage is training. Cost is chosen according to the magnitude of the update:

- **Lightweight updates (GPU-hours)**: LoRA/DPO fine-tuning on new preference data — truly runnable daily;
- **One round of post-training (GPU-days)**: a full cycle of SFT + rejection sampling + RL. DeepSeek's R1 used four stages; GLM-5.2 underwent "months of reinforcement training" targeting long-horizon coding agents;
- **Distillation (GPU-days)**: a strong teacher model generates reasoning trajectories; the student learns via SFT.

At the optimizer level, GRPO (no critic network, group-average baseline) has become the industry standard, and it kept evolving in 2026: GEPO performs entropy-aware advantage shaping, PATR uses tree rollout to handle multi-turn tasks (SWE-Bench +5.0), and Ring-Zero pushes zero RL to trillion-parameter scale. At the distillation level, DeepSeek distilled R1's 800,000 samples into a small model that surpassed o1-mini; Anthropic stated outright that Sonnet 5 has "performance close to Opus 4.8 at lower cost"; DeepSeek V4 compressed the capability of a 1.6T flagship into a 284B Flash version.

**How open are training recipes? DeepSeek-R1's complete four-stage training process was published in Nature, and the principles and implementation of GRPO are fully open-sourced.** You can read the same recipe in the papers that I can, and reproduce it within months.

### Stage 5: Evaluation — The Automated Gate

The fifth stage is evaluation. After every training run, the model must pass an automated evaluation gate:

- **Verifiable domains**: math is checked by answer correctness, code by compilation and tests, frontend by rendered screenshots — fully automated, no human review needed;
- **LLM-as-judge**: open-ended tasks are scored by an LLM acting as referee;
- **Regression testing**: a retained set of old problems, guarding against "curing the new disease only to relapse into the old one";
- **Safety red-teaming**: automated safety evaluation + alignment checks.

This automated evaluation system is public enough that even AlphaEvolve can use it — LLM + evolutionary algorithm + automated evaluator in a closed loop, where the automated evaluator is simply the public benchmark. Evaluation criteria, test sets, and gate thresholds are all public and reusable.

### Stage 6: Deployment — Gradual Rollout, With a Fallback for Rollback

The sixth stage is deployment. Not one-click full release, but shadow testing (running against real traffic in the background) → canary (A/B with 1%–5% of users) → full rollout, with second-level rollback if something goes wrong. Fable 5 keeps the fallback of "if it can't win, roll back to Opus 4.8"; GLM-5.2 gave subscribers early access before opening up; DeepSeek set a deprecation time for its old API precise to the minute (2026-07-24 15:59 UTC); every lab marks each snapshot with a dated model ID.

The maturity of the deployment process in turn accelerates iteration — this is also the external manifestation of "daily progress." And this process is standard MLOps engineering practice.

### Stage 7: Evolution — AI Optimizing the Training of AI

The seventh stage is evolution, the newest frontier of 2025–2026: AI doesn't just make data; it improves the training process itself.

AlphaEvolve has been running in Google's data centers for over a year — the scheduling heuristics it discovered, its training-kernel optimizations, and its TPU circuit rewrites all went into production, and along the way it refreshed lower bounds on 5 Ramsey numbers that had been stuck for 20 years, and improved 4×4 complex matrix multiplication for the first time in 56 years; MLEvolve (new in 2026) surpassed AlphaEvolve on mathematical algorithm optimization; the Darwin-Gödel Machine (DGM) lets agents rewrite their own codebase, lifting SWE-bench from 20% to 50%.

**Even "using AI to improve the training of AI" — this most cutting-edge of methods — is already written into public papers and openly available on arXiv.**

## II. The Data Flywheel: Four Nodes That Set the Pipeline Spinning

If the training pipeline is a linear seven-stage process, what makes it spin every day is a cyclical **data flywheel**. This flywheel is meshed together from four nodes, and none can be missing.

### Node 1: Frontier Distillation — The Teacher "Fast-Charging" the Student

The first node is distillation. A strong teacher model generates reasoning trajectories; the student model learns from them. DeepSeek distilled R1's 800,000 samples into a small model that surpassed o1-mini; Anthropic says Sonnet 5 has "performance close to Opus 4.8 at lower cost"; DeepSeek V4 compressed the capability of a 1.6T flagship into a 284B Flash version.

Distillation is the flywheel's first gear because it is **the most effortless way to transfer capability** — DeepSeek's experiments proved that training a 32B model with RL alone only reaches QwQ's level, while distilling from R1 reaches 72.6%. With a strong teacher, distillation is fast and cheap. As for cross-vendor distillation (learning directly from a competitor's model), there is no public evidence; MoA (multi-model aggregation) makes "distilling all frontiers" mathematically feasible (65.1% vs. 57.5%, beating GPT-4o), but mainstream labs still rely on their own previous flagships as teachers.

### Node 2: The User Feedback Loop — The Leap from RLHF to RLAIF

The second node is user feedback. User interactions (likes/retries/abandonments) enter batch filtering and become preference data fed into the next round. RLHF has human annotators rank samples, trains a reward model, then optimizes the policy with PPO/GRPO; **RLAIF (Constitutional AI) is the key upgrade — using the model itself as the supervisor, judging according to a "constitution"** — liberating the annotation bottleneck from human labor into compute, so it can run continuously.

In 2026, Anthropic even had Claude itself interview 80,000 users and analyze 310,000 conversations to distill training signals. This explains how "user feedback drives updates" — but note that it enters snapshots after batch review, not real-time online learning.

### Node 3: Long-Horizon Agents Making Data — The Flywheel's Most Powerful Engine

The third node is agents making data, the flywheel's most powerful engine. Agents run real tasks in sandboxes (GitHub repositories, browser frontends, terminals), keeping only trajectories that pass **external verifiers**: Kimi K3 uses "Vision in the Loop" to screenshot the webpages it generates and fix the frontend; CodeAlchemy uses execution trajectories to verify 500 billion tokens of synthetic code; AgentInstruct uses multi-agent collaboration to escalate task difficulty.

This node explains the real reason behind "some capability suddenly reaching the bar" — not magic, but a new batch of render-verified, execution-verified data that, once accumulated to a sufficient quantity and past the evaluation gate, ships all at once.

### Node 4: Verifiable Rewards — The Flywheel's "Fuel Quality Inspector"

The fourth node is verifiable rewards, the precondition for the flywheel's self-rotation. Rewards must be **objective**: math is checked by answer correctness, code by compilation and tests, frontend by rendered screenshots — all machine-judgeable. This is why mainstream RL doesn't use neural reward models (which invite reward hacking), but rule-based/execution feedback instead. In 2026, Ring-Zero pushed "zero RL" to trillion-parameter scale on exactly the same verifiable principle.

With the four nodes meshed, the flywheel spins on its own: distillation supplies capability, feedback supplies signal, agents make data, rewards guarantee quality — every rotation takes the model one step further, and the next round starts from a higher point. This is the real mechanism behind "daily progress."

## Conclusion: The Moment the Blueprint Is Laid Open

Looking back at this blueprint — seven stages without a single locked door, four nodes meshed into a self-driving flywheel — you realize one thing: **this training pipeline, once regarded as a secret recipe, has long been laid open before everyone.** The recipes are written in papers, the methods are open on arXiv, and even the most cutting-edge evolution has been made public.

And when a "secret recipe" becomes a public blueprint anyone can read, can it still be called a secret? There is only one criterion for a moat — that even knowing the direction, others cannot build it. Measure 2026's blueprint against that: every direction is public, and reproduction is counted in weeks. **The so-called technical moat was already defenseless the moment the blueprint was laid open.**
