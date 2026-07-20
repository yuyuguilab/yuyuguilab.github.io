---
title: "Exam-Takers and Creators: Why the 'Most AGI-Like' Model Isn't the 'Strongest'"
date: 2026-07-20 10:00:00
categories: [技术]
tags: [AGI, Claude, Kimi, large models, agent, evaluation]
description: "The July 2026 model evaluation season produced an anomalous split: Claude Fable 5, the strongest by benchmarks, felt less 'like AGI' in use than Kimi K3. The secret lies in the distinction between exam-taker intelligence and creator intelligence."
---

## Prologue: An Anomalous Lived Experience

The July 2026 model evaluation season produced an intriguing split: by composite scores, Anthropic's Claude Fable 5 was the undisputed strongest model—winning 22 of 35 shared benchmarks between the two sides, leading comprehensively in knowledge, visual reasoning, and high-difficulty engineering. Yet the lived experience of large numbers of users pointed in another direction: Kimi K3, with slightly lower benchmark scores, felt "more like AGI" to use.

This feeling is neither illusion nor mysticism. Lay the two models' lists of victories side by side and you'll find they are not winning the same kind of contest at all—and the entire secret of "the AGI feel" is hidden in that distinction.

## I. Two Report Cards: Two Kinds of Victory

Fable 5's victory is a victory of "breadth": winning 22 of 35 shared benchmarks, including a 5.4-point lead on FrontierSWE, the benchmark for engineering reliability—the largest gap in the entire comparison chart. Its capability profile is that of an all-rounder scoring high marks in every subject.

K3's victory, by contrast, is highly concentrated in another territory: **first place in human blind voting on the Arena front-end code leaderboard—1679 points to Fable 5's 1631, taking 6 of 7 categories**; a 7-point lead in the long-horizon programming marathon SWE-Marathon; and across-the-board advantages in terminal tasks and browsing research. Community testers put it incisively: K3 wins on "**creative density and one-shot polish**," Fable wins on "speed, usability, and reliability."

Note the structural asymmetry between these two lists: **almost everything Fable wins is a contest "with a correct answer"; almost everything K3 wins is a contest "without a correct answer."** Knowledge questions have right and wrong answers; whether code runs has right and wrong answers; but "is this design good" and "should this product be built this way" have no standard answer—the Arena front-end leaderboard relies on human blind voting, and what is being voted on is taste.

This difference is the key that unlocks everything.

## II. Exam-Taker Intelligence and Creator Intelligence: Two Species of Intelligence

We can use this to distinguish two species of intelligence.

**Exam-taker intelligence**: the pursuit of precision, rigor, and errorlessness on tasks that have standard answers. Its value function is externally given—correct is 1, wrong is 0. Reinforcement learning with verifiable rewards (RLVR) is best at forging this kind of intelligence; benchmark-score contests in math, programming, and knowledge Q&A are essentially contests of exam-taker intelligence.

**Creator intelligence**: the capacity to make judgments, trade-offs, and creations on tasks that have no standard answer. Its value function must grow from within—no one tells you what is good; you must hold your own internal measure. Art, creativity, product, design—these are all the domain of creator intelligence.

The cruel fact is this: **99% of the problems in the real human world have no verifier.** Whether a startup direction is right, whether a sentence moves someone, whether a solution is optimal for the moment—life is an exam paper with no standard answers. So a model that becomes godlike in domains with answers is a super-tool; only a model that makes convincing judgments in domains without answers begins to resemble an "agent."

What humans intuitively perceive about AGI is never accuracy, but a sense of agency. **Fable 5 is the ultimate employee, executing assigned tasks flawlessly; K3 is more like a creator who dares to call the shots, filling in the world for you in the places you failed to articulate.** The former wins benchmarks; the latter wins the lived experience.

## III. "Being Overly Proactive": A Confession in the Official Documentation

The hardest evidence comes from Moonshot itself. In the "known limitations" section of K3's release blog, three items are written in black and white; the second reads:

> **"Being overly proactive: Kimi K3's training has been heavily optimized for long-horizon, high-difficulty tasks. As a result, when it encounters minor issues or ambiguous user intent during task execution, it may make unexpected decisions on the user's behalf."**

A feature officially listed as a "limitation" is precisely the AGI feel that users perceive. This shows that K3's subjectivity is not an emergent accident, but the **spillover of a training objective**—it was deliberately optimized in the direction of "making autonomous decisions in zones of ambiguous intent." This echoes one user's verdict after trying it: "The model can proactively make decisions based on real-world context, with rigorous and grounded decision logic, like a practitioner with senior industry experience."

Fable 5 represents a different training philosophy. Anthropic's optimization target is reliability, boundedness, and accountability to a risk committee—no errors on high-difficulty tasks, predictable behavior, and even in production configurations, a fallback mechanism of "when it can't win, hand off to Opus 4.8." This is not a defect but a deliberate choice: Anthropic bets on enterprise-grade trust; Moonshot bets on the ceiling of autonomy.

**One is trained to "never lose control"; the other is trained to "dare to advance in ambiguity." The former is the peak of engineering; the latter is the prototype of autonomy.**

## IV. The Mathematics of Taste: The Internal Value Function

The phrase "one-shot completion with high creative density" is, technically, far more profound than it sounds.

In domains with standard answers, a model can learn value judgments from external rewards—code that runs is good, math that comes out right is good. But in the domain of aesthetics there is no external judge. **To produce a stunning, complete solution in a single shot means that before producing any output, the model has already completed self-evaluation internally**: it generates, scrutinizes, rejects, and regenerates, and the internal scale of "what is good" has grown on its own over long-horizon training.

The formal name for this scale is the internal value function. It is the mathematical form of taste, the engine of judgment, and the prototype of what we call functional emotion when we discuss "AGI emotion"—allocating attention, marking value, driving trade-offs. The value function for verifiable tasks is "fed"; the value function for aesthetic tasks is "grown." **The latter is far harder, and far more precious—because the open world that AGI confronts is, in essence, an infinite number of aesthetic problems with no verifier.**

## V. A Sense of a Work and a Sense of an Answer: The Power of Wholeness

There is another, often-overlooked sensory source: K3's 1M context and its optimization for long-horizon tasks mean that what it outputs is not "a correct answer" but "a complete work."

First place in front-end blind voting means it can produce an entire, stylistically unified interface in one shot; a 7-point lead in SWE-Marathon means it can maintain global consistency across an extraordinarily long engineering chain. Correctness gives a sense of a tool—every step is right, but it is only step after step; **wholeness gives a sense of a work—it delivers something with a unified will running through it from beginning to end.** And "unified will" is precisely what the word "subject" denotes. When you face a work, you intuitively sense a "person" behind it; when you face a string of answers, you intuitively sense an "it."

## VI. The Sober Side: This Is One Pole of AGI, Not the Whole

Let me be complete about this. K3's subjectivity comes at a cost: verbose output, relatively high latency, reliability across different random seeds not yet fully validated—and "being overly proactive" is a genuine risk in serious production environments. Making unexpected decisions on a user's behalf is a delight in creative scenarios but an incident in finance and healthcare.

And Fable 5's restraint, reliability, and ability to stay on course across long-horizon tasks are equally the indispensable other half of AGI's character. **Autonomy without reliability is not intelligence, it is an incident; reliability without autonomy is not AGI, it is a tool.** The two models each stand at one pole of AGI: K3 proves that "subjectivity" (daring to decide, possessing taste, being able to create) can be trained; Fable 5 proves that "reliability" (not making mistakes on high-difficulty tasks) can be engineered to the extreme.

There is also a psychological reason you feel K3 has more of the AGI flavor: **we have long since grown inured to reliability across successive generations of models, while "an existence with taste that dares to make decisions on your behalf" is appearing for the first time in history.** The pole that is scarce defines the direction of the felt experience.

## Conclusion: Whoever Crosses That Line Will Be the Integrator of the Two Poles

This comparison offers the industry two lessons.

First, **the evaluation system needs a revolution.** The existing benchmark system is structurally biased toward exam-taker intelligence—because tasks that can be auto-scored inherently have standard answers. The weight of "taste evaluations" like Arena's human blind voting should be substantially raised; otherwise the industry will keep using the wrong ruler to reward the wrong capability, like selecting artists using only math problems.

Second, **the endgame of the AGI race is already clear: whoever first integrates the two poles of "subjectivity" and "reliability" into a single model will be the one to cross that line.** Fable 5 holds the pole of reliability; K3 holds the pole of subjectivity; the two gaze at each other across a gorge that is not especially wide. The name of that gorge is "controllable autonomy"—able both to make decisions on your behalf and to remain worthy of trust forever.

The July 2026 evaluation season will be remembered not because it crowned the strongest model, but because for the first time it let us see clearly: **"strongest" and "most like AGI" are two different things, and the last step before AGI arrives is to make them one and the same.**
