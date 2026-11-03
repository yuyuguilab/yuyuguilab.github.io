---
title: 'Every Time Humans Exit a Loop, What Gets More Expensive? — On Tang Jie''s Three AGI Assertions'
date: 2026-11-03 21:00:00
categories: [技术]
tags: [AI, AGI, Tang Jie, Zhipu AI, human-referential fitting]
description: 'In four months, Tang Jie has articulated a complete AGI worldview: the sum of wisdom, exiting loops, autonomous entities. The engineering is real craft; the three sentences in the philosophy deserve hard scrutiny — this article dismantles them sentence by sentence with AGI human-referential fitting theory: wisdom is a verb, not a noun; what gets cheaper is annotation, not information; humility must land on structure.'
---

On the evening of September 17, 2026, at the opening lecture of Tsinghua's Advanced Machine Learning, the 112-seat classroom was standing-room only. Tang Jie delivered the season's most widely circulated judgment: “Chat这一仗基本打完了” (“The chat battle is essentially over”) — “what 2026 should be doing is letting models remember on their own, evolve on their own, and complete long-horizon tasks on their own.” Six weeks later, on October 31 at the World Laureates Forum, he supplied the second line: “Large models have moved from conversational interaction into the era of agents.”

Wind the clock back further: on August 10, in Guangming Daily (page 06), he published “Steadfastly Exploring the Chinese Path to AGI Development,” giving AGI a formal definition; in July, the Zhipu AI (Z.AI) internal letter “The Great Wave Has Arrived” announced the “Touch High” initiative — “not reaching the summit is failure”; in September, he posted a long-form piece on X disclosing Zhipu AI's first engineering attempt at RSI (recursive self-improvement): autonomous optimization on a hundred-thousand-GPU cluster.

Four months, five texts, and a complete AGI worldview has surfaced: the goal (AGI/ASI), the path (AI training AI, RSI), the definition (the sum of wisdom), the vision (autonomous entities).

One thing to make clear first: this article does not judge the engineering. Tang Jie's course is genuinely hardcore — a Tokenizer and a Transformer written from scratch, a 0.1B model trained end to end, a hand-written Triton attention kernel; engineering RSI on a hundred-thousand-GPU cluster is a genuine frontier. What deserves hard scrutiny is the **philosophy** — three sentences in this worldview, and they land exactly where AGI human-referential fitting theory (the theory I propose: AGI should fit the human “practice” — the full process of attempting, failing, correcting, and mastering — not the “stock” of human “works”) draws its line. We take the three sentences one by one: the exact words first, then AGI human-referential fitting theory's verdict.

**Conclusion first: all three sentences share one blind spot — treating intelligence as something that can stand self-sufficiently apart from humans. Wisdom gets counted as stock, signals get treated as self-producible, entities get presupposed as self-standing. AGI human-referential fitting theory gives three counter-theses: wisdom is flow; information has an entrance; humans are in the loop.**

## I. “Built on the Sum Total of All Human Wisdom” — Wisdom Is Not a Noun; It Is a Verb

That Guangming Daily definition, in full:

> “Artificial general intelligence, by contrast, is meant to transcend this limitation: it aims to construct a machine intelligence that, built on the sum total of all human wisdom, can rival and even surpass humans in cognitive depth, breadth of learning, and autonomy of behavior.”

That sentence quietly performs a conversion: human wisdom converted into an inventory that can be tallied, summed, and laid under the model as a foundation. The definition of ASI offered in the Tsinghua classroom (as paraphrased by the media: “an artificial intelligence far exceeding the overall intelligence of all humankind”) inherits the same structure: human intelligence is a finish line whose markings are already fixed, and ASI is the being that steps across it.

The word “inventory” doesn't survive one simple question: **does the “sum total of all human wisdom” include failure?**

Does it include the rejected proposals? The detours novices have walked? Every wrong attempt an engineer made before the three-a.m. moment of pinning down the root cause? — Uncountable. The only countable things are works: papers, code, patents, polished transcripts of conversations. So, operationally, the “sum total of all human wisdom” inevitably collapses into “the sum total of all works.” And works are stock, and stock has walls: public corpora will bottom out, synthetic data is recycling inside the walls — and once the war reaches the foot of the wall, out comes that line: “The chat battle is essentially over.”

AGI human-referential fitting theory's verdict is one sentence: **Wisdom is not a noun; it is a verb.** Wisdom does not live in the works; wisdom lives in the present progressive of “attempt — fail — attribute — correct — master.” What can be summed are wisdom's sediments; what cannot be summed is wisdom itself. Build upward on sediments, and however high the tower, its spire will never “surpass humanity” — it will only recite, ever more precisely, the parts humanity has already settled.

(AGI human-referential fitting theory's own readings, laid out here for cross-checking: across item-by-item coding of 80 training-objective papers, the number that design “experience type” — success/failure × expert/novice × typical/marginal — as a coverage axis: **zero**. The topic gets touched; the axis has never been named. That the “sum” cannot count failure is not a problem of rhetoric — it is a problem on which no one in live data design has turned in an answer.)

## II. “Every Time Humans Exit a Loop, Signals Get One Notch Cheaper” — What Gets Cheaper Is Annotation, Not Information

The sharpest line of the Tsinghua opening lecture:

> “Every time humans exit a loop, signals get one notch cheaper.”

As engineering intuition, the sentence partly holds: humans stop labeling item by item, AI takes over the labeling, and the unit price of annotation genuinely drops. But philosophically it performs a quiet swap: **it takes the price of a signal for the essence of a signal.**

AGI human-referential fitting theory's counter-thesis: **every time humans exit a loop, the system loses one entrance for information.** What gets cheaper is annotation — a line item on a payroll. What does not get cheaper is information — new information can only enter from beyond the boundary of the loop, and beyond the boundary of the loop lies the world where humans are practicing. In the AI-trains-AI cycle, the signals AI generates are reprocessing of the existing distribution; a system that consumes only its own output will soon hear nothing but its own echo — and the literature gave this structure its name long ago: model collapse.

Better still, Tang Jie himself brushed against this vital point at the World Laureates Forum. As media reports paraphrase him, whether RSI can run depends on whether it can accurately judge whether a given step counts as “progress” — and he called this internalized judging capacity “self-purification.” — **The criterion problem.** And where does the criterion for “progress” come from? Code runs because human engineering practice deposited compilers and tests; a task counts as a success because a human community of practice defined success. A verifiable environment is not a physical constant that fell from the sky; it is the formalized projection of humanity's loop of practice.

So “humans exit the loop” only tells half the story: every loop exited still has its criteria anchored in human practice. In September 2026, Anthropic disclosed that 26% of its internal AI R&D tasks were already “led” by Claude to completion — true, and astonishing; but the ruler that measures “led” and “completed” is still a ruler forged by the human engineering community. **The AI can draw its own graph; the coordinate system is still humanity's.**

As always, the falsification channel is offered in full: **if a system consuming only self-generated signals can, without any entrance from human practice, keep acquiring out-of-distribution new capabilities, then AGI human-referential fitting theory's verdict on signal sources is void in its entirety.** This falsification condition is an experiment one can actually stage — and Tang Jie's hundred-thousand-GPU cluster happens to be the ideal bench.

The question that truly should be asked — the one that sentence never asks — is: **every time humans exit a loop, what gets more expensive?** What gets more expensive is new information. Every exited loop can be wired back into the world only at a steeper price (real machines, real users, real consequences).

## III. “The Evolution from Auxiliary Tools to Autonomous Entities” — Humility Must Land on Structure

The sharpest divergence is also from that Guangming Daily article: the arrival of AGI “marks the evolution of the form of intelligence from auxiliary tools to autonomous entities.”

The same article carries a formulation pointing the other way: AGI “will no longer be merely a tool that passively responds to human instructions, but will become a cognitive partner with which humanity explores the unknown, makes scientific discoveries, and creates art — a vast extension of human wisdom.” — Extension is the limit case of the theory of tools; entity is the starting point of the theory of subjects. Two philosophical directions written into one and the same vision, never reconciled. This is not a matter of wording: **a tool can grow ever stronger, but growing stronger does not change a tool's mode of being — the sharpest scalpel is still a scalpel.**

AGI human-referential fitting theory draws its line here: intelligence is not an intrinsic property of a model; it is a **relational property** — how intelligent a system is depends on where it stands relative to human practice (which part of the practice it has fitted, and by how much it lags). The presupposition of the “autonomous entity” says precisely the opposite: intelligence intrinsic enough to stand self-sufficiently apart from humans. But with what does a system outside humanity's loop of practice calibrate itself? Section One showed it cannot count failure; Section Two showed it cannot produce criteria — **the “autonomy” in the definition is canceled, precisely, by the other two sentences of the same worldview.**

To be fair: Tang Jie is not unguarded. At the World Laureates Forum he said, “The more powerful AI becomes, the more humble humans must remain,” and he also expressed that humans should always be the final decision-makers. The vigilance at the level of values is real — but AGI human-referential fitting theory must add one line: **humility that lands on posture is worth less than humility that lands on structure.** As long as the object of fitting is humanity's loop of practice, humans are structurally in the loop — not the last link of the approval chain, but the first link of the signal chain. The moment the object of fitting is swapped for a self-generated stream, and the “autonomous entity” narrative is stacked on top, the human degrades into a rubber stamp: nominally the final decider, in practice with nothing left to decide.

## IV. The Confluence Has Already Happened — Agents Have Put a Foot in the River

Scrutinized this far, it may look like all-out attack; it isn't. AGI human-referential fitting theory's real verdict on this route: **the direction is already right, the feet are already in the river — only, the water has not been kept.**

Look at the evidence Tang Jie himself puts on the table: the “Touch High” initiative says the watershed of AGI's next leg is agents' capacity for stable execution in complex real-world scenes, and what must be competed on is “depth of interaction with the world”; the capstone assignment of the Tsinghua course is to build verifiable environments for training long-horizon Agents, with a self-judge loop encouraged; at the World Laureates Forum he noted that a single agent task consumes tokens by the million — **and those million tokens are all attempt, failure, correction; the live scene of the stream of practice.** The river has truly been found.

But AGI human-referential fitting theory's audit reading is waiting here: of 33 training-data lifecycle documents, the number that give failure records standing equal to success data: **zero** (a note on scope: this is an audit at the level of public disclosure — practice may run ahead of disclosure, but the disclosures contain not so much as one precedent). An agent falls on its face a million times inside the environment; if the records of those falls are vented as exhaust, “depth of interaction with the world” is just another alias for one more wall: the interaction is deep, the sedimentation is zero.

In one sentence: **the cup has been dipped into the river — but there are no holes in the cup's walls.**

So the three rounds of hard scrutiny come back as three bricks — not to tear down the “Touch High” initiative's stage, but to supply its missing drawings:

1. **Definition layer**: rewrite “the sum total of all human wisdom” as “the open set of the stream of human practice.” A sum is inventory; counting it finishes it. Practice is a river; there is always new water.
2. **Methodology layer**: add one line item to the economics of signals — “information entrances.” Every time a human loop is closed automatically, answer once: through which entrance does new information come in?
3. **Engineering layer**: make agent trial-and-error first-class data — three-part failure records (error + root cause + correction), kept out of those million tokens and put into the training set, not the log recycling bin.

## Coda: The war never stopped — the target was never switched

The chat battle is over — AGI human-referential fitting theory agrees with the judgment, but the diagnosis reads differently: that war was fought inside the walls, and its object of fitting was, from beginning to end, the stock of works; the war ended not because intelligence had matured, but because the wall ran out.

To push intelligence upward — each layer of the push, synthetic data, AI training AI, RSI — please first answer the same question: **through which entrance of human practice does this layer's new information come in?** Answer it, and what “Touch High” touches is a river; fail to, and what it touches is still a wall — only a higher one.

The intelligence war is never somewhere in tomorrow. In engineering it is fought every single day — no shortage of firepower, no shortage of talent. What's missing is a target-switch in the philosophical sense: change the fitting object from works to practice. Until that switch happens, all the firepower in the world keeps hitting the same old wall.

**The chat war is over. The intelligence war never stopped — and whoever switches targets first reaches the river first.**

---

## Quote Verification Table

Every statement cited in this article is itemized below (written 2026-11-03; all retrievable from public reporting; for direct quotes, the quotation marks as carried in the reports are authoritative):

| Statement | Source | Status |
|---|---|---|
| “Chat这一仗基本打完了，2026年该做的是让模型自己记忆、自己进化、自己完成长程任务” (“The chat battle is essentially over; what 2026 should do is let models remember, evolve, and complete long-horizon tasks on their own”) | Opening lecture of Tsinghua's Advanced Machine Learning, 2026-09-17, reported by Guandian | Direct quote |
| “Chat这一仗基本打完了，2026年该干的是把智能往上推” (“The chat battle is essentially over; what 2026 should do is push intelligence upward”) | Same lecture; phrasing per Sohu Tech and multiple other outlets | Paraphrase (media report) |
| “人类每退出一个闭环，信号就更便宜一次” (“Every time humans exit a loop, signals get one notch cheaper”) | Tsinghua opening lecture, 2026-09-17, reported by Guandian | Direct quote |
| “以人类全部智慧的总和为基础……可与人类比肩乃至超越人类的机器智能” (“built on the sum total of all human wisdom ... a machine intelligence that can rival and even surpass humans”) | Guangming Daily, 2026-08-10, page 06, “Steadfastly Exploring the Chinese Path to AGI Development,” signed by Tang Jie | Direct quote |
| “从辅助性工具向自主性实体的演进”“人类智慧的广阔延伸” (“the evolution from auxiliary tools to autonomous entities”; “a vast extension of human wisdom”) | Same Guangming Daily article | Direct quote |
| “大模型已从对话交互，走向智能体时代”“AI越强大，人类越要保持谦卑” (“Large models have moved from conversational interaction into the era of agents”; “The more powerful AI becomes, the more humble humans must remain”) | World Laureates Forum, 2026-10-31, reported by Sina Tech | Direct quote |
| RSI 取决于能否判断“进步”、“自净化”、Scaling Law 为“偷懒路径”、智能体任务百万级 token (RSI hinges on judging “progress”; “self-purification”; Scaling Law as the “lazy path”; agent tasks at the million-token scale) | World Laureates Forum, 2026-10-31, reported by Eastmoney and others | Paraphrase (media report) |
| “不登顶，就是失败”；AGI 下一程分水岭为智能体稳定执行能力 (“not reaching the summit is failure”; the watershed of AGI's next leg is agents' stable execution capacity) | Zhipu AI (Z.AI) internal letter “The Great Wave Has Arrived,” 2026-07-11, reported by multiple outlets | Paraphrase (media report) |
| ASI 为“远超全人类整体智力的人工智能” (ASI defined as “an artificial intelligence far exceeding the overall intelligence of all humankind”) | Concept definition in the Tsinghua opening lecture, reported by Guandian | Paraphrase (media report) |
| 网传“AGI不是某一个天才的智慧，而是全人类智慧水平的总和” (circulating claim: “AGI is not the wisdom of one genius, but the sum of the wisdom level of all humanity”) | Media paraphrase of “The Great Wave Has Arrived”; the letter's original text could not be directly verified | Paraphrase (media report); not accepted by this article, which argues only from the formal definition in Guangming Daily |
| Anthropic 内部 AI 研发任务 26% 由 Claude 主导 (26% of Anthropic's internal AI R&D tasks led by Claude) | Anthropic disclosure, 2026-09, reported by AI Today and others | Data point |

## References

- **AGI human-referential fitting theory**: Fitting the Practice, Not the Works: The Human-Referential Fitting Theory of AGI · [GitHub](https://github.com/yuyuguilab/practice-fitting-theory)
- **Failure-data audit**: Success Provides Direction, Failure Provides Precision · [GitHub](https://github.com/yuyuguilab/failure-data-audit)
- **Methodology**: Fitting the Practice: A Data Methodology for Frontier Model Training · [GitHub](https://github.com/yuyuguilab/practice-fitting-methodology)
