---
title: 'Embodied intelligence says two things, not a new type'
date: 2026-11-26 12:00:00
categories: [技术]
tags: [AI, AGI, embodied intelligence, human-referential fitting theory, robotics, definition]
description: 'Within two years, "embodied intelligence" went from a technical term to a word shared by policy documents and industry across many countries — without ever acquiring a stable definition. This paper diagnoses the word as conjoining two independent things: a closed loop through the physical world, and the ability to get things done within a given range. The definitional disputes come from proving one thing and claiming both. The article gives two decidable conditions, four executable tests, and checks the public record of 2024–2026: systems that are embodied but lack the capacity, and systems that have the capacity but are not embodied, are all given the name.'
---

The rise of the term "embodied intelligence" can be dated. In December 2025, the International Telecommunication Union published the first standard for embodied artificial intelligence systems, and in February 2026 set up a standards focus group for it; in the United States, NVIDIA's chief executive told the Consumer Electronics Show of January 2025 that "the next frontier of AI is physical AI," and Morgan Stanley estimates the humanoid robot market will reach five trillion dollars by 2050; in China, the Government Work Reports listed it twice in a row among the future industries, and in 2025 eight universities applied to add an undergraduate major called "embodied intelligence." Elsewhere, the national plans of Japan and the Republic of Korea adopt physical AI.

IDC reports that over 85 percent of deployments concentrate in performance, education, data collection, and guided-tour scenarios; a Reuters investigation says the humanoids "lack the intelligence needed for general-purpose work"; and an industry report notes that "monthly operation of fewer than 10 days is not uncommon."

And the definition side is the coldest. The think tank CSET judges that the field "lacks a shared name"; NVIDIA's 2024 releases used embodied AI throughout, and from 2025 the company switched entirely to physical AI, without explaining the change. The Chinese-language context offers ten quotable definition sentences that disagree on four axes — carrier scope, superordinate concept, sentence form, and the source of intelligence; among the 52 national standard-development plans for humanoid robots, not one is a terminology standard.

Heat, use, definition — set side by side, the gap is obvious. This article gives one diagnosis of the situation and one workable response; the full argument is in the paper of the same title.

## One: the diagnosis — one word, two predicates

The word "embodied intelligence" in fact conjoins two things that are independent of each other.

**"Embodied" is about where the closed loop runs and who sets the timing.** A system's actions must change the state of an environment through physical causation, and its feedback must come from physical measurement — that is the loop. Meanwhile the physical process in the environment does not pause for the system to finish computing; the system's response latency must be faster than the pace of that process — that is the timing.

**"Intelligent" is about what can be done within a given range.** This is the usual capacity concept: it does not ask how the system is implemented, only which range it covers.

Each of the two has its own criteria; holding for one does not imply holding for the other. Having a body does not amount to being embodied: a humanoid robot teleoperated step by step by a human has its actions and its feedback both pass through the human. Being capable does not amount to being embodied: a large model is capable in a digital environment, but it has no physical closed loop. Conversely, a pre-programmed industrial robot has little intelligence, yet it fully satisfies the literal criteria for "embodied."

The trouble starts here: once one word conjoins two things, evidence for one is read as evidence for both. Machines with bodies are taken to have intelligence; capable models are taken to be embodied. A good part of the definitional dispute is not anyone talking nonsense — each camp has written a different limb of the conjunction into its own definition.

Hence this paper's central claim: **embodied intelligence is not a new kind of thing. It is the capacity concept restricted to physical environment classes — with two extra constraints once the environment argument takes the physical world.**

## Two: the definition — two conditions

The two points above, written as decidable conditions:

**Condition one (physical closed loop).** The system's actions change the state of the environment through physical causation; the task outcome is decided by the physical consequences of that change, not by how the system's output is interpreted; the system's feedback — if any — comes from physical measurement, not from symbols.

**Condition two (timing prescribed by the environment).** The task-relevant physical process in the environment does not pause for the system's computation; the system's latency for one cycle of perception, decision, and action must be faster than that process's characteristic time.

Three common doubts about these conditions, answered first.

Doesn't all computation happen on physical hardware? Condition one asks about the substrate, but about the object of the loop: which world's state do the actions change, and does the task outcome turn on physical law or on interpretation. Screen pixels are certainly physical, but what enters the task outcome is the symbols the pixels carry.

Simulated agents have a body, perception, and action — why are they not embodied? A simulated environment is computed: it can be paused, reset, and rolled back, and actions have no physical consequences. The computer-vision community does call virtual bodies in simulation Embodied AI; this paper does not judge that usage right or wrong, it only points out that it is not the same predicate as the physical closed loop.

Why does latency belong to embodiment rather than to capacity? Because the environment class is determined by timing: a system that responds more slowly than a dynamic process forms a closed loop only with its quasi-static part. Calling it "embodied relative to a dynamic environment but lacking capacity" writes an environment class into its name that it is not actually coupled to.

## Three: discriminative force — a boundary table

The two conditions together yield definite verdicts for a batch of contested systems:

| System | Verdict |
|---|---|
| Software agent (large model plus tool framework) | not embodied |
| Agent in a simulated environment | not embodied; belongs to the simulated-environment position of the world model |
| "Embodied intelligence large model" (the model itself) | not embodied; the usage applies a system predicate to a component |
| System acted through by humans | not embodied; actions and feedback both pass through the human |
| Humanoid robot teleoperated step by step by a large model | embodied relative to the quasi-static environment |
| Humanoid robot with human remote takeover | verdict varies with the mode of operation |
| Robot carrying an end-to-end vision–language–action policy | embodied |
| Pre-programmed industrial robot | embodied; capacity range given by the program |
| Process controller (temperature control, irrigation, and the like) | embodied; large margin |

Four rows deserve a remark.

Pre-programmed industrial robots and process controllers are judged embodied, on purpose: it shows that "embodied" carries no promise of "intelligent." CAICT's 2025 report frames the core of embodied intelligence as a data-driven closed loop, under which a pre-programmed robot arm does not count as embodied intelligence — the two sides agree on the conclusion for different reasons: that formulation writes the data-driven closed loop as one condition, this paper splits it into an embodiment limb and a capacity limb.

The humanoid robot teleoperated by a large model is judged "embodied relative to the quasi-static environment": while teleoperated, the loop passes through the human; when autonomous, the loop passes through the physical world but the response cannot keep up with dynamic processes. The verdict varies with the mode of operation — which is itself the discriminative force of the two conditions.

The remotely-takeover-capable humanoid robot (1X's NEO and the like) is the same: the product page states that for complex tasks NEO doesn't know, an Expert from 1X can remotely supervise its actions at scheduled times. During supervision the loop passes through the human, and the verdict must be made again.

## Four: the four tests

The two conditions unfold into four executable tests, each with an operation, a reading, and a limit.

**The closed-loop test.** Lock the actuators, disturb a physical quantity, occlude the sensors — and see whether the task is still judged complete as before. If the outcome follows only the symbols, the loop does not run through the physical world.

**The body-swap test.** Keep the instructions fixed and change the body's physical parameters — mass distribution, friction, transmission latency. If the same instructions yield different outcomes on different bodies, the consequences of action are decided by physical law.

**The rollback test.** Let one action fail and see whether the environment can be restored. If restoration takes a physical price — time, workpieces, equipment loss — the physical closed loop holds; if restoration needs only a command, the loop is in a digital environment or in simulation.

**The pause test.** Insert an artificial latency into the decision step and see where the task success rate starts to drop. This yields a **timing margin**: the ratio of the environment's characteristic time to the system's response latency. Margin above one, the system is embodied relative to that environment; below one, it is not.

The margin is a continuous quantity, and "weak embodiment" thereby gains a quantitative reading. Hoffmann and Patni judge current machine-learning robots to be "only weakly embodied" — in this paper's framework, that reads as the margin's approaching one: embodied relative to quasi-static environments, not embodied relative to dynamic ones. That is one reading offered by this paper, not a paraphrase of the original authors.

The elements of these tests have their own antecedents in the literature: the definition of cyber-physical systems, the classical definition of real-time systems, the "embodied Turing test," Hoffmann and Patni's six-item checklist, Hellström's two degree axes. This paper's contribution is to derive them from the two conditions and write them as executable procedures.

## Five: the four slides — where the disputes come from

*Four Concepts, Four Types* catalogued three illicit slides; each has a counterpart in embodied-intelligence discourse, plus a fourth specific to it.

**Operationalism**: demonstrations and benchmark scores pass as capacity. Robot videos become the basis of judgment; one researcher criticizes that "the generalization shown in all demos is extremely limited."

**The mereological fallacy**: a part of what is in fact a relation is treated as its location. Two forms — having a body taken as being embodied (CAICT has drawn the line: "embodied intelligence is not identical to humanoid robots"); and a system-level predicate applied to a component ("embodied intelligence large model," "embodied intelligence chip").

**Criterion promotion**: architecture descriptions answering "what is it." "Data is the power, the model is the brain, the hardware is the body"; "brain chip computing power ≥ 200T, height ≥ 160cm." Such descriptions can explain an implementation; they cannot give a definition — the test is discriminative force: brain, cerebellum, body, and memory can be pointed to one by one in a pure software agent as well.

**Conjunction confusion** (specific to this discourse): the holding of one limb read as the holding of both. Two directions — from body to intelligence, and from intelligence to embodiment. The evidence is laid out by direction in the next section.

## Six: the evidence — each limb, separately

**Embodied, but the capacity insufficient.** IDC reports over 85 percent of deployments concentrated in performance, education, data collection, and guided-tour scenarios; Reuters' investigation says the humanoids "lack the intelligence needed for general-purpose work," and that much of what one sees is "dancing disguised as working"; an eleven-month deployment in a BMW plant lists its success rate and intervention counts as targets, not results; CAICT's report gives "monthly operation of fewer than 10 days is not uncommon," with most domestic enterprises remaining on earlier open models such as π0, π0.5, and OpenVLA for replication and fine-tuning, their base models about two generations behind the frontier closed ones. These systems close their loops in real environments with timing set by the environment — the embodiment limb holds; the low utilization shows the capacity limb falling behind. Under conjunction confusion, one limb holding is read as both holding, and the systems get called "embodied intelligence" wholesale.

**Capable, but not embodied.** Figure calls Helix "our AI system for embodied intelligence"; EmbodiedBench evaluates multimodal large language models directly as embodied agents, with tasks completed in simulated environments; and Galbot calls a model an "embodied large model." In these usages the capacity limb has some evidence, and the embodiment limb fails condition one.

**One system, two verdicts.** A technical report gives 100 tasks on a self-built benchmark: 40 desktop software tasks and 60 multi-site physical operations. The same system is not embodied on the first 40 (the loop runs through software) and embodied relative to those devices on the last 60 (the loop runs through machine tools and logistics equipment). The report sums the two parts into one overall success rate — and that summation is itself an instance of conjunction confusion: the physical half's holding is credited to the whole system. The benchmark and the scores are self-evaluated; they are used here only as an example of the method of judgment.

**Where the critiques fall.** The critiques of current humanoid robots mostly land on the capacity limb: Brooks says "collecting just visual data is not collecting the right data," and that teaching a machine dexterity without understanding the components of touch "is probably dumb. And an expensive mistake."; Goldberg calls the current publicity hype, running "so far ahead of the robotic capabilities that researchers in the field are familiar with"; MIT Technology Review's investigation lands on the other limb — the teleoperation behind humanoid-robot demos often goes undisclosed, with the risk of "mistaking concealed human labor for machine intelligence." The two kinds of critique correspond to the two predicates and cannot substitute for each other.

## Seven: three neighbors

Embodied intelligence and **the machine mind** do not imply each other: the machine mind requires the environment argument to include social practice, digital or physical; embodied intelligence requires it to be the physical world. An industrial robot is embodied and has no machine mind; a system running only in a digital environment can have a machine mind without being embodied.

Embodied intelligence and **the world model** do not imply each other: the world model is a component inside an embodied system, used to roll out the environment's changes internally; it can exist detached from embodied systems (simulation), and embodied systems can lack it (a pre-programmed robot arm).

The relation to **AGI** needs the finest distinctions. "Embodied intelligence is the necessary road to AGI" is a popular claim, and it has two readings. As a capacity claim it can hold: if the reference set includes physical practice, AGI must have capacity in physical practice. As a route claim — AGI must itself have a body — it is not a conceptual inference: capacity can be obtained by directing embodied systems, as humans act on the physical world through tools. Claimants must argue separately that "the capacity must be realized by the system's own closed loop." On that axis the progress-transfer illusion takes a familiar form: demonstrations, financing rounds, and listings are recorded as AGI milestones — and progress on a local metric is non-transferable, because the two sets of criteria are incommensurable.

## Eight: making the word sayable

Back to the opening question: "is X embodied intelligence?" In this framework it splits into three: relative to which environment is X embodied; how large is X's capacity over that environment class; and at which level — predicate, system, component, or industry — is the word being used.

The first two are answered by the two conditions and the four tests; the third by the level criteria. Prove one limb, claim one limb; submit the evidence for the two limbs separately.

The definition also carries a **survival clause**: it binds the predicate, not the word. If "embodied intelligence" completes a semantic drift and consolidates as an industry name or a component name, the conditions for judging the two limbs do not drift with it — any workable embodied system, at runtime, has its closed loop passing through the physical world and its timing set by the environment. Should that day come, the predicate can retreat to existing scientific names — physical closed-loop control, the cyber-physical system — and the analysis migrates with the predicate.

The definitional gap is being filled, in a different direction: in April 2026 an editorial in Nature Machine Intelligence noted several disciplines converging on how a system can act physically and intelligently in the world; in October, a twelve-chapter physical AI monograph gave a single-predicate definition. A paper-by-paper examination of recent titles containing embodied intelligence or physical AI has yet to find a definition isomorphic to this one — two independent predicates conjoined, plus a declared environment class.

The full paper (bilingual, with the complete corpora of ten Chinese and fifteen English definition sentences, seven falsifiability clauses, and the admission protocol): [GitHub](https://github.com/yuyuguilab/embodied-intelligence) | [DOI 10.5281/zenodo.24554632](https://doi.org/10.5281/zenodo.24554632)
