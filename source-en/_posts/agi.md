---
title: "The Eve of AGI: When AI Begins to Act Proactively — Reading the Emergence of AGI Through Fable 5, GPT-5.6, and Kimi K3"
date: 2026-07-17 10:00:00
categories: [技术]
tags: [AGI, Claude, GPT, Kimi, Artificial Intelligence, LLM]
description: "When AI gains the ability to proactively output rigorous, actionable decisions, the embryonic form of AGI has appeared. From Claude Fable 5 to GPT-5.6 to Kimi K3, three flagship models jointly piece together the complete picture of AGI's emergence."
---

## I. An Unusual Experience: AI Begins to "Make Decisions for You"

On July 17, 2026, a transcript compiled from an ordinary user's conversation recorded this judgment:

> "To achieve built-in simulation and direct usability across all applications, AI needs the ability to proactively make decisions for the user and autonomously complete designs—this already bears the hallmarks of AGI. After experiencing Kimi K3 today, I intuitively felt it: the model can proactively make decisions based on real scenarios, with rigorous and grounded decision logic rather than abstract speculation—like a practitioner with deep industry experience."

The value of this observation lies not in praising any particular product, but in how precisely it pinpoints the core of the current qualitative shift in AI: **"being overly proactive" means AI is beginning to acquire human-like subjective agency**—it no longer waits for you to fill in every premise, but draws on its own knowledge base and the "practical experience" gained from long-horizon task training to proactively offer sound solutions, minimizing the operational burden on the user.

This experience is not an isolated case. Placed within the industry's coordinate system of mid-2026, we find that Claude Fable 5, GPT-5.6, and Kimi K3—three flagship models released in quick succession—are jointly piecing together the complete picture of AGI's emergence from three different directions.

## II. First Clarify the Standard: What Does an Embryonic AGI Actually Look Like

The industry has never reached consensus on the definition of AGI. But the pragmatists, who define it in terms of "task-completion capability," hold that if an AI system can perform the work of programmers, lawyers, doctors, and other professions with high accuracy, it can be regarded as AGI—by this definition, the industry broadly believes AGI will arrive within 1–5 years; Musk believes it can be achieved in 2026, Hassabis believes within 5 years and only 1–2 major technical breakthroughs away. Anthropic CEO Dario Amodei offered an even earlier extrapolation: by the pace of capability climbing from "high school student → undergraduate → PhD student," the window for AGI falls in 2026–2027.

And that conversation transcript offered an even simpler, sharper standard: **when AI possesses the ability to proactively output rigorous, actionable decisions, the embryonic form of AGI has appeared**. This standard aligns astonishingly well with the industry's technical definition of "Agentic AI"—an AI system moving toward autonomy must possess four core capabilities: Planning, Tool Use, Memory, and Self-correction, transitioning from the passive responsiveness of "you ask, it answers" to the proactive execution of "you give the goal, it figures out how to get it done itself."

Measured against this yardstick, all three mid-2026 flagships fit every criterion.

## III. Three Samples: Three Facets of the Same Qualitative Shift

### (i) Claude Fable 5: The "Virtual Engineer" That Verifies Its Own Work

On June 9, 2026, Anthropic released Claude Fable 5—the first "Mythos-class" model made available to the public, supporting a 1-million-token context window and up to 128,000 tokens of output per turn. Its significance lies not in benchmark scores but in a string of small phenomena that "previously only humans could do":

- **It can work continuously for an entire day and complete systems engineering.** In early testing, Stripe had Fable 5 perform a full migration on a 50-million-line Ruby codebase—the model completed it in 24 hours, whereas the same work would take a human team more than two months.
- **It checks its own homework.** Fable 5 doesn't just write code; it automatically generates test programs to verify results, and uses its visual capabilities to inspect the final output, ensuring consistency with the design objectives.
- **It can "clear the game" just by looking at the screen.** In internal testing, Fable 5 independently completed Pokémon FireRed using only visual input—previous Claude models needed external assistive tools to do this.
- **The longer the task, the more it pulls ahead.** Anthropic has stated explicitly: the longer and more complex the task, the greater Fable 5's advantage over other models. On the Agent Arena real-session leaderboard, it took the top spot with a 13.34% net improvement rate, ranking first in the "task confirmation success rate" category.
- **Its "sibling version" is already doing science.** Mythos 5, opened to trusted institutions with some safety restrictions removed, improved the efficiency of protein design workflows by roughly tenfold, can nearly autonomously complete the full genomics analysis pipeline in just over a week, and trained models that outperformed similar research recently published in *Science*—at one-hundredth the scale.

Individually, each phenomenon looks like "engineering progress"; connected together, they form a clear line: **the closed loop of plan–execute–verify–correct has closed**. This is precisely the technical form of "subjective agency."

### (ii) GPT-5.6: Subagents, Ultra-Long Tasks, and the Government's "Tripwire"

OpenAI's GPT-5.6 was opened to roughly 20 trusted partners for preview on June 26, 2026, and officially launched to the public on July 9, offered in three tiers: Sol (flagship), Terra (balanced), and Luna (economy). The "small advances" it delivers are equally dense:

- **It can "split itself."** The Ultra mode newly added to the flagship Sol no longer merely piles on compute; it spawns parallel subagents to break down complex tasks, pushing the Terminal-Bench 2.1 score from 88.8% to 91.9%. One master brain directing multiple avatars working in concert—this is the embryonic form of organizational capability.
- **It can work continuously for hours.** ChatGPT Work, launched alongside GPT-5.6, can autonomously handle complex tasks across email, Slack, calendars, and application files, running for hours without human intervention—turning a "goal" directly into "completed work."
- **Efficiency itself is leaping forward.** Sam Altman revealed that Sol's token efficiency on AI programming tasks improved 54% over its predecessor—the same intelligence, consuming less "thinking."
- **Governments have started setting limits on it.** This is the most easily overlooked yet most telling signal: because its cybersecurity capabilities crossed the "high" risk threshold, GPT-5.6 became the first frontier model in U.S. history to be released under government review-list management; Anthropic's Fable 5/Mythos 5 likewise went through export controls and their subsequent lifting. **The regulators' nervousness is itself corroborating evidence that capability has reached a new order of magnitude.**

### (iii) Kimi K3: The Open-Source Camp Pushes "Long-Horizon Intelligence" to the Trillion-Parameter Scale

On July 16, 2026, Moonshot AI released Kimi K3: 2.8 trillion parameters, the world's largest open-source model; built on the self-developed KDA hybrid linear attention mechanism, it natively supports visual understanding, offers a 1-million-token context window, and is specifically optimized for long-horizon programming, knowledge-intensive work, and complex reasoning. Its overall intelligence level approaches that of the world's leading closed-source models, second only to Claude Fable 5 and GPT-5.6 Sol.

K3's contribution to "the process of AGI's emergence" operates on two layers. The first is at the **architecture layer**: hybrid linear attention makes long-horizon task processing over a million-token context computationally viable—long memory is no longer a luxury. The second is at the **experience layer**: the deep-thinking mode enabled by default lets ordinary users, for the first time, intuitively feel that "proactiveness" described at the opening of this piece—the model makes autonomous decisions in context and delivers actionable solutions like a seasoned practitioner, rather than requiring the user to repeatedly supply clarifying prompts. Open source means this capability is no longer the privilege of a handful of companies; it will become the water line for the entire industry.

## IV. Connecting the Dots: The Seven Steps of AGI's Emergence

Now, arranging the "small phenomena" of the three models by capability tier, the process of AGI's emergence comes clearly into view:

1. **Knowledge**—trillion-parameter models load human knowledge and regularities into their "brains," understanding more and thinking more deeply;
2. **Reasoning**—deep-thinking modes and adjustable reasoning depth let the model genuinely "think it through" before answering;
3. **Long-horizon memory**—a million-token context window has become standard across all three; models can maintain focus over long-horizon tasks spanning millions of tokens and use their own notes to continuously refine their output;
4. **Planning**—given a high-level goal, the model decomposes subtasks itself, rather than waiting for step-by-step instructions;
5. **Tools and action**—operating browsers, terminals, and office software to execute real workflows across applications;
6. **Self-correction**—writing its own tests, checking its own results, and recovering autonomously from errors—both Fable 5 and GPT-5.6 already possess this;
7. **Proactive decision-making**—delivering rigorous, actionable solutions tailored to specific scenarios, like a practitioner with hands-on experience—this is precisely the "subjective agency" that Kimi K3 users have felt.

The first six steps were lit up one by one between 2023 and 2025, and the three mid-2026 models together stepped onto the seventh. **The seventh step is a qualitative shift because the first six are all "capabilities," whereas the seventh is "intent"—AI begins to proactively decide what to do and how to do it.**

Underpinning all of this is a common training paradigm: **reinforcement learning on long-horizon tasks**. Models repeatedly trial-and-error through vast multi-step task trajectories to earn rewards; what they accumulate is not static knowledge but something approximating "practical experience." This explains why the new models' decisions "are not abstract speculation"—they have indeed "done" thousands of similar tasks.

## V. "The Eve of AGI": DeepSeek's Judgment Is No Lone Voice

On June 25, 2026, DeepSeek wrote a line in a recruitment notice that would be quoted again and again: **"Humankind today stands on the eve of AGI."**

This was not PR rhetoric, but a strategic judgment bound to a technical roadmap. At an investor meeting, Liang Wenfeng stated explicitly: DeepSeek's primary goal is to push the technological frontier and pursue AGI, and the path runs through large-scale reinforcement learning and recursive self-improvement (RSI)—letting AI design experiments, run experiments, analyze results, and improve itself. Large-scale RL requires models to generate trillion-token-scale reasoning trajectories, and long-horizon tasks with million-token contexts demand that the trajectories themselves be long enough—structurally identical to the capability ladder we traced earlier. As far back as 2024, Liang Wenfeng said: "What we're building is AGI; large language models may well be a necessary path toward it."

When the top closed-source labs (Anthropic, OpenAI), the largest open-source model (Kimi K3), and the most radical technological idealist (DeepSeek) all point in the same direction within the same month, the words "the eve" become hard to dismiss as mere rhetoric.

## VI. A Necessary Cool-Headedness: The Eve Is Not the Dawn

To be rigorous, the counter-evidence must be recorded. Current Agentic AI still has clear shortcomings: costs remain high (Fable 5 is priced at twice Opus 4.8); under complex tasks it still goes off course and makes strange decisions; the industry consensus remains "extending human execution under supervision," with human confirmation required at key junctures rather than a full handoff. Amodei himself concedes that linear extrapolation may not be reliable, and that data exhaustion, compute bottlenecks, and geopolitical conflict could all delay the timeline.

But note the nature of these shortcomings: **they are problems of "cost and stability," not of "direction."** Historically, cost problems have been solved by engineering far faster (consider the magnitude of token-price declines over two years) than capability problems have been solved.

## VII. Conclusion: AGI Does Not Arrive on a Single Day—It Is an Ongoing Process Already Underway

Look back at the sharpest line in that conversation transcript—"AI has knowledge and formidable reasoning ability, and having been trained on long-horizon tasks (practical experience), AGI is imminent"—and it forms four articulations of one and the same sentence, alongside DeepSeek's large-scale RL roadmap, Fable 5's self-verification closed loop, GPT-5.6's subagent collaboration, and Kimi K3's proactive decision-making experience.

AGI will not crash down like a comet on some particular morning. It is more like a rising tide: first the model learns to check its own homework, then to work continuously all day, then to spawn avatars and collaborate—and then, before you even open your mouth, it already knows what to do, and does it soundly, in a grounded way, like a peer with ten years of experience.

In July 2026, the tide has already risen past the ankles. The eve has arrived; the dawn is not far off.
