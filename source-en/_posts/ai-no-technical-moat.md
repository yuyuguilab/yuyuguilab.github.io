---
title: "AI Large Models Have No Technical Moat—Not a Single One"
date: 2026-07-19 10:00:00
categories: [技术]
tags: [AI, large models, moat, distillation, reinforcement learning, open source]
description: "On algorithms, data, engineering, and diffusion, frontier large models no longer possess a single technical secret that others cannot learn, copy, or catch up to. The water in the moat was evaporated by technical progress itself."
---

Let me draw the boundaries clear first, so we don't end up talking past each other.

Compute is a money problem, capital is a money problem, energy licenses are a policy problem, and user scale is a channel problem. These moats may be wide and deep, but not one of them is "technical." Today's proposition has only one version to argue, and it's the purest one:

**On the technical front—algorithms, data, engineering, know-how—frontier large models no longer possess a single thing that others cannot learn, cannot copy, and cannot catch up to.**

The so-called technical moat refers to a technical secret you possess that competitors cannot obtain. Note the words "cannot obtain": being six months ahead isn't a moat, it's a first-mover advantage; if others can replicate it but only at great cost, that's not a moat either, it's a cost barrier. There is only one criterion for a true technical moat—**even knowing the direction, you still can't build it.** Apply this criterion to measure the large-model industry of mid-2026, layer by layer, and you'll find: the water has already been drained.

## The First Floor Collapses: Data—MoA Makes "Data Secrets" Mathematically Invalid

Data was once considered the last bastion. The MoA (Mixture of Agents) technique turned that bastion into a public square.

You already know the method: in the first layer, have all the top models—DeepSeek, Claude, GPT, Kimi, Qwen—answer the same batch of questions in parallel; in the second layer, use an aggregation model to synthesize, critique, vote, and refine, distilling out training data. The paper-grade evidence is right there: relying solely on aggregation of open-source models, it defeated GPT-4o on AlpacaEval 2.0 by 65.1% to 57.5%.

The three properties of this method each strike precisely at the vital point of the "data moat":

**In quality, it takes the union of all models.** No single model is the strongest on every dimension, but the union of all models has a strongest one on each dimension. Adversarial distillation—letting multiple models criticize, debate, and pick apart one another's errors—is inherently an automated high-quality data factory.

**In breadth, each lab's biases complement one another perfectly.** One lab for reasoning, one for code, one for long context, one for multilingual. Single-model distillation gets locked in by the teacher's weak spots, while multi-model aggregation distillation fills every one of them in.

**In provenance, multi-source mixing makes fingerprints statistically disappear.** This is the most lethal point. Single-source distillation may still leave "language fingerprints"—Mistral was caught by a blogger precisely because its output was highly similar to DeepSeek-V3—but once data is fused from an adversarial mix of five or ten top models, any single-source fingerprint is diluted below detectability. OpenAI has accused DeepSeek of distilling for a full year and a half, yet has produced no conclusive evidence; third-party conclusions have consistently been "there is no evidence that R1's data came from OpenAI." And don't forget: the entire industry is mutually distilling—that's an open secret. At the end of the day, **every large model is itself a distillation product of the entire internet's data**, and no one gets to play innocent.

One floor has collapsed. Data is no longer a secret.

## The Second Floor Collapses: Algorithms—The Paradigm Has Converged, the Recipe Is Fully Open-Source

The training paradigm toward AGI has converged into a single public ladder: pretraining → instruction fine-tuning → preference alignment → reinforcement learning with verifiable rewards (RLVR) → long-horizon agent RL → self-improvement. There is not a single locked door on this ladder:

- DeepSeek wrote the core recipe for RLVR into a public paper;
- Open-source frameworks like OpenRLHF, veRL, and TRL cover the entire pipeline from fine-tuning to GRPO;
- **Within weeks** of R1's release, the community reproduced the emergence of reasoning capabilities on 4–8 consumer GPUs in 2–3 days;
- By July 2026, Kimi K3 fully open-sourced a 2.8-trillion-parameter model whose overall capability trailed only slightly behind Claude Fable 5 and GPT-5.6 Sol—between open source and the frontier, only a sheet of paper remains to be pierced.

Google's leaked 2023 memo "We Have No Moat" was dismissed at the time as alarmism; three years on, almost every line has come true: the model itself is merely the admission ticket, not the reason you win. **The paradigm that frontier labs spent hundreds of millions of dollars to validate becomes, within half a year, papers, open-source code, and weekend projects in distributed communities.** At the algorithm layer, "knowing how to do it" has been thoroughly turned into a public good.

## The Third Floor Collapses: Engineering—AI Is Personally Dismantling the Barriers of Training Systems

The most underestimated moat of the past was engineering: the stability of clusters with thousands or tens of thousands of GPUs, the deep optimization of training frameworks, and the grunt work of data pipelines. This required hundreds of top-tier systems engineers grinding away for years.

Then AI started doing this work itself:

- Google's AlphaEvolve used Gemini to evolve algorithms, speeding up the matrix-multiplication kernels used to train Gemini by 23%, speeding up FlashAttention by as much as 32.5%, and incidentally reclaiming 0.7% of global compute for data centers—**AI is optimizing the very systems that train AI**;
- Anthropic officially disclosed that, as of May 2026, over 80% of the code merged into its repositories was written by Claude, and Claude agents had autonomously run roughly 800 hours of open-ended research experiments;
- OpenAI used an early version of GPT-5.3-Codex to monitor and debug its own training process; Meta's HyperAgents can modify the very "meta-agent responsible for modifying agents"; Darwin Gödel Machine achieved a complete closed loop in which agents iteratively rewrite their own code.

Grasp the implication of this layer: **the engineering know-how of training systems is being democratized by AI's coding ability.** A second-tier team, armed with the APIs of three top models, can stitch together a training pipeline that auto-tunes, auto-debugs, and auto-optimizes. "We don't have that many systems engineers"—as an excuse, the shelf life of that line has expired.

## The Fourth Floor Collapses: Diffusion—The Half-Life of Innovation Has Shrunk from Years to Weeks

Even if some lab does make a genuine technical breakthrough, how long can it keep it to itself?

The timeline says it all: the Transformer (2017) architecture was shared by everyone; RLHF was matched by open-source solutions within a year; o1 inaugurated the reasoning paradigm, and four months later R1 was open-sourced as a replica, with the community finishing reproductions within weeks. The monopoly window for each generation of frontier innovation has gone from years, to quarters, to weeks.

And there is one diffusion channel that cannot be sealed off: people. Technical secrets live inside researchers' heads, and people are always on the move—the Google memo conceded long ago that "secrecy is a false proposition"; the reality of 2026 is blunter still. Meta lured Pang Ruoming with a contract worth more than $200 million, and kept him for only seven months. **Knowledge diffuses with people; this is a technical fact that no NDA can stop.**

## Now, Addressing the Two "Real" Technical Counterarguments

An honest argument has to face down the strongest opposition. There are only two counterarguments at the purely technical level, and we'll dismantle them one at a time.

**Counterargument One: "Distillation has a ceiling; the student can't surpass the teacher."** This is the hardest one—distillation does pick up the teacher's errors along with everything else, and out-of-distribution generalization is weaker. But it fails to land a blow on the MoA paradigm, for three reasons. First, the "teacher" in MoA is not any single model but the union of all top models—and that union is itself the frontier; the 65.1% vs. 57.5% result already proves the union beats any individual. Second, DeepSeek's own experiments supply the answer: distillation as a base, followed by continued RL training, lets models above 14B fully surpass the teacher—distillation handles "standing at the foot of the frontier," while reinforcement learning with verifiable rewards handles "climbing further up," and the latter depends on no teacher at all, because the reward comes from the genuine right and wrong of math and code, not from model outputs. Third, and most important: **the criterion of a moat is "can't catch up," not "half a year late."** Distillers are always a half-generation behind? A half-generation gap is precisely proof that there is no moat—only first-mover advantage, and first-mover advantage gets smoothed out by time.

**Counterargument Two: "Model collapse; synthetic data devours itself."** This holds for single-source, unfiltered distillation, but not for multi-source adversarial distillation: multi-teacher mixing preserves distributional diversity, adversarial criticism filters out low-quality samples, and RLVR further anchors the data to verifiable objective truth—the model isn't "drinking its own bathwater," it's being corrected by reality itself.

Both technical counterarguments dismantled. The remaining ones—compute, capital, users, licenses—are not a single one of them technical.

## Conclusion: No Technical Moat Does Not Mean Competition Is Over

So the final conclusion can be nailed down:

**In algorithms**, the recipe is fully public and reproduction is measured in weeks; **in data**, MoA aggregation distillation dissolves the three problems of quality, breadth, and provenance all at once; **in engineering**, AI is coding the know-how of training systems into a capability anyone can call upon; **in diffusion**, the monopoly window on any new breakthrough is measured in weeks. **Technically, frontier large models have no moat—this proposition holds, and the evidence strengthens with every passing year.**

This does not mean competition is over; it means the battlefield of competition has moved off the technical plane. The contest that remains lies in capital, compute, energy, and institutions—that is a game of resources, not a game of intelligence. For technical people, this is in fact the best of times: the recipe for frontier intelligence is, for the first time in human history, known to all.

And when an industry's technical secrets diffuse on a weekly basis, when AI begins to personally build the next generation of AI, that itself is telling everyone—intelligence is being commodified, and the end of commodification is the popularization of general intelligence. The water in the moat wasn't pumped dry; it was evaporated by technical progress itself.
