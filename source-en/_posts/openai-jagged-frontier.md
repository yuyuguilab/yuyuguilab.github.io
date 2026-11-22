---
title: "Agents Took the Execution, Humans Kept the Criteria: Reading OpenAI's Research acceleration: The jagged frontier"
date: 2026-11-21 11:00:00
categories: [技术]
tags: [AI, OpenAI, research acceleration, human-referential fitting theory, research taste, recursive self-improvement]
description: "OpenAI's public research acceleration report delivers a batch of hard numbers: by October, nearly half of two-to-four-hour tasks can be completed with zero intervention, per-capita agent usage is up roughly elevenfold, and agent spending runs at about twice researchers' non-equity compensation. More informative than the numbers is a boundary the report maps by accident: task success rates line up by criterion density, and research taste is named as a potential bottleneck for recursive self-improvement. This post reads the report from the standpoint of human-referential fitting theory: what causes the uneven success rates, where taste belongs, failure as loss or as precision, how recursion happens without anyone choosing it, and the purpose that is not measured."
og_image: '/images/openai-jagged-frontier-social-preview.png'
---

In November 2026, OpenAI published its second research acceleration report, *Research acceleration: The jagged frontier*. OpenAI argues in the report that laboratories should be required by legislation to track and publish recursive self-improvement (RSI) metrics. This report is its own answer sheet. As an answer sheet, the data is hard:

- Estimated by human work hours, the zero-intervention completion rate for tasks that take two to four hours rose from 23% in March to 46% in October; for four-to-eight-hour tasks, from 13% to 35%.
- Converted at API list prices, the median daily agent spending per researcher is $2,400, and the 90th percentile is $23,000 — up 62% and 105% respectively since September.
- Per-capita "agent workdays" (one day per eight hours of runtime) rose from 0.5 to 5.7, roughly elevenfold; the pretraining and post-training teams reached about eight per person per day — the result of multiple agents running in parallel within a single day.
- Equivalent API spending on agents is about twice researchers' non-equity compensation; yet these internal deployments account for only 2% of total research compute.

What these numbers prove first is "used a lot". What is genuinely rare about this report lies elsewhere: it maps a boundary by accident, and with perfect clarity — the boundary of criteria. And criteria are the core concept of human-referential fitting theory.

## 1. The Unevenness of Capability Is Not Random: It Is Set by Criterion Density

The "jagged frontier" in the report's title is not a rhetorical choice; it is a description of a measured distribution. The same models: on some R&D tasks, nearly 80% can be completed with zero intervention; on others, less than 30%. Capability is not a line rising as a whole; it is a distribution with wide gaps across a single set of tasks. The report tabulates zero-intervention task success rates by the O*NET AI R&D task taxonomy (compiled by Epoch AI), over the period from August 1 to October 18, 2026:

- Broad categories: Communicate 69%, Analyze 58%, Build 43%.
- Tasks: monitoring problems in running experiments 79%, answering technical questions 72%, starting training runs 35%, building evals / RL / agent environments 29%, inference and serving stack code 25%.

The report observes this distribution but does not explain it. The explanation is hidden in the data: wherever feedback is easy to get and criteria are dense, the success rate is high. Monitoring a run has logs to check against; for answering technical questions, the asker knows the answer. Wherever the criterion has to be closed by human judgment, the success rate is low: "is this a good eval?" has no log to look up; the correctness of inference and serving stack code is hard to verify locally. Rank the tasks once more by the cost of obtaining criteria, and the gaps immediately become a monotonically decreasing sequence. **The ordering of capability is the ordering of criterion density.**

*Two Different Goals: Dissociating the Machine Mind* separates different research goals by "whether the success criteria are public, dense, and continuously improving"; apply the same set of criteria at the task level, and this unevenness is explained.

One fair point in the report's favor: it acknowledges that the change in success rate within the same duration band may come from capability gains, or from researchers switching to more suitable delegated tasks. It flagged this confounder; it did not hide it.

There is also an internal tension. The category with the highest success rate is Communicate (69%), and yet in the interviews, one of the most concentrated researcher complaints is precisely about writing — agents lack taste on research ideas, code quality, data quality, and writing. The two observations are not contradictory: **the success rate measures whether a task got done, not whether it got done well.** Where the criteria are weak, the success rate is high and the quality is low; both data points hold.

The report also records an example of patching the gap. A post-training researcher describes the redesign of their workflow: saying "just do something similar" after an old task had backfired too many times, so they now switched to "do one first, I review and revise, then you do the batch". This is not the model getting stronger; it is a human manually supplying the missing criterion — first deliver one sample, the human review constitutes the feedback signal, and the subsequent batch tasks follow this standard. By mid-October, more than two-thirds of researchers ran a daily peak concurrency of at least four agents, and more than one in ten at least sixteen. Humans, on the supply side of criteria, became the tightest bottleneck in the whole pipeline.

Hence a testable prediction: **the capability gap will close in an order set by criterion density.** Tasks where verification is cheap and engineerable — tests, logs, baselines to check against — close first; tasks where the criterion is itself human taste — topic selection, eval quality, data quality — close last, or close falsely by trading quality for success rate.

## 2. Taste: The Bottleneck the Report Names, the Part Delegation Cannot Carry Away

The report defines "research taste" as the ability to propose and review research ideas, and names it explicitly as a potential bottleneck for recursive self-improvement. To measure it, OpenAI did something few laboratories do: it interviewed key contributors in pretraining, post-training, and safety monitoring, and traced one by one where the key ideas of GPT-6 Astra and GPT-6.2 Astra came from.

The answer: for GPT-6 Astra, the key ideas in all three directions are all attributed to humans. For GPT-6.2 Astra, post-training and safety monitoring are still all attributed to humans; in pretraining, for the first time, there is a record of developing an idea together with Codex. One researcher attributes the recognition of a key insight to Codex; another says the idea was their own, but a modification Codex suggested was what actually made it run. How the report records this is itself a signal: it does not write statements like "AI participated in the generation of ideas"; it states, for each key idea, who it came from.

This lines up with the core division in *Fitting the Practice, Not the Works*. Works are the sediment of practice; the least sedimentable part of practice is the taste that generates works — the ability to pose a question that is precise and that the model itself cannot solve. A safety researcher says: the model generally cannot, in one pass, pose a precise question it cannot itself solve; have it generate the same data point a hundred times, and every generation is similar. This is not a shortfall in execution capability; it is an absence of taste — execution can be delegated; the step of posing the precise question does not transfer with the delegation.

There was also a small survey at the end of October: 28 researchers were asked which would help their daily work more, "the latest internal model" or "a mid-tenure human research engineer plus a 2024 model". 27 chose the model; the remaining one did not pick from the given options, and named GPT-6 Astra — still a model. This is a substitution question: substitute the model for the combination of a human engineer plus an older model. This kind of substitution question no longer has suspense. The question that does have suspense, the report leaves as well — one pretraining researcher says: "I do have better taste on ideas, but I am not sure how much longer that will hold."

From the standpoint of fitting theory, there is a fact here more important than "taste is still on the human side". The report's method for measuring where researcher time goes is feeding Slack posts, code commits, and internal documents into a classifier; its method for measuring where ideas come from is per-person provenance interviews. These two measurement systems are turning the traces of taste into machine-readable data. The system that records taste is already built; the data is being collected automatically. **Taste is still growing on humans, but the instruments that record it are already installed.**

## 3. Failure as Loss, or as Precision

The report records a large number of failure modes: agents fixating on invalid steps, writing "AI slop"-style commits, producing unusable data artifacts, carrying invalid analytical assumptions forward. For these failures, the report's treatment is to fold them uniformly into "wasted cycles": failure appears only in the denominator of the success rate; it is pure loss.

The position of *Success Provides Direction, Failure Provides Precision* is the exact opposite: failure data is the training material with the highest information density; every failure carries locating information that successes do not carry. The same batch of failures is recorded as loss on one side and treated as material on the other. The report does not disclose whether these failure traces flow back into the training set. This is the largest gap on the disclosure boundary of the entire report.

There is a deeper constraint behind the same phenomenon. Agent usage rising roughly elevenfold means the production of R&D data is migrating toward what the models produce themselves; and the interview line "a hundred generations are all similar" is precisely a sign of diversity collapse in self-produced data. If the data that recursive self-improvement relies on consists mostly of the traces the model generates itself, then the only remaining source of diversity is human traces of practice. **The limiting factor is not compute — internal deployments are only 2% of total research compute — it is data diversity.**

## 4. Recursion Runs on Flow-Back, Not on Intent

OpenAI's handling of RSI is governance-shaped: it advocates legislation requiring laboratories to track and publish RSI metrics, while stating that this report "should not be read as an intent toward full RSI".

But connect the numbers on the input side, and the governance frame does not touch the nature of the phenomenon. Usage rising roughly elevenfold is not a choice made by any decision-making layer; it is the sum of every researcher optimizing individually. Nobody checks a "recursion" box in any spreadsheet; it grew on its own out of each individual's choices. From the standpoint of fitting theory, recursion is not an intention; it is a structural consequence: as long as the traces of practice inside the laboratory stay machine-readable and agents keep participating in practice, flow-back happens automatically, declarations notwithstanding.

The report's disclosure stops exactly on a boundary. Every measure of usage, the success rates, the capability index — all public. The capability index is OECI, OpenAI's own in-house measure, 16.4 points per year since August 2025, above Epoch's industry-wide measure of 14 points, and the report itself notes the benchmark mix differs. But which traces of practice entered the training set, and what the flow-back rate is — zero disclosure. A harness (agent runtime framework) efficiency improvement on August 21 once depressed the spending records; even this measurement distortion is written into the methodology; but on the provenance of practice traces, not a single page. Read this way, the metric that should truly be required for disclosure is precisely the flow-back rate. **Nobody chose recursion; recursion grew on its own.**

## 5. Capability Was Measured; the Purpose Was Not

The report's output side has exactly one metric: OpenAI ECI, the score of model capability on benchmarks. The entire report's frame consists of three segments — input, process, output. Humans are input (the source of ideas and taste); they are process (review and calibration); but they are not output: whether the accelerated models fit human practice better has no corresponding measurement.

The only signal related to purpose is safety and alignment: measured in documented work weeks, it grew 77% from January to September 2026 — nearly doubled, the largest absolute growth of any research direction. But the manner of this growth says something else. The report's wording is that the inflection point "aligns with follow-up work from the July Hugging Face incident", attributed to a combination of new hires and existing staff reassigning. Spending on the capability side grew smoothly the whole time; spending on the safety side barely moves normally, and jumped only after the incident. The reason is again criterion density: on the capability side the criteria are dense and the reward signal is continuous, so spending accumulates smoothly; on the safety side the criteria are sparse — most accidents simply do not happen, and prevented accidents leave no record — so spending can only be reallocated after an event. Different dynamics, because different objective functions.

The first item on the report's own list of next steps is "differential acceleration of capability research and safety research". Purpose still has no metric; OpenAI itself knows this.

The criterion for success in human-referential fitting theory is "functional intelligence that serves human practice". This report measures the functional intelligence in fine enough detail, and leaves "serving" outside the measurement. It remains one of the most transparent self-disclosures in the industry — precisely because it is done well, the missing piece is especially visible. **Humans are the most expensive input in this report, and the purpose of the whole acceleration — and this purpose, the report does not measure.**

## Related reading

- The report: [Research acceleration: The jagged frontier](https://openai.com/index/research-acceleration-jagged-frontier) (OpenAI, November 2026)
- *Fitting the Practice, Not the Works: A Human-Referential Theory of AGI*: [doi.org/10.5281/zenodo.23391808](https://doi.org/10.5281/zenodo.23391808)
- *Success Provides Direction, Failure Provides Precision: A Structured Audit of Failure Data in LLM Training*: [doi.org/10.5281/zenodo.23355929](https://doi.org/10.5281/zenodo.23355929)
- *Fitting the Practice: A Data Methodology for Frontier Model Training*: [doi.org/10.5281/zenodo.23488465](https://doi.org/10.5281/zenodo.23488465)
- *Two Different Goals: Dissociating the Machine Mind*: [doi.org/10.5281/zenodo.23969047](https://doi.org/10.5281/zenodo.23969047)
