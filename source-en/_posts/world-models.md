---
title: 'World Models Are a Function, Not a Class of Entities: One Word, Four Positions'
date: 2026-11-20 11:00:00
categories: [技术]
tags: [AI, world models, AGI, human-referential fitting theory, conceptual analysis, positional polymorphism]
description: 'Between 2024 and 2026, everyone from labs to automakers adopted the self-designation "world model," while the survey literature concedes there is no consensus on what a world model fundamentally is. This post gives a functional definition (action-conditioned, repeatedly callable) and diagnoses why the dispute never converges: one word, four positions. Physics engines are a written-in implementation, weather forecasting is a close relative, and the disembodied camera of Genie 4 is now a product feature.'
citation_title: 'World Models: Definition, Clarification, Distinction, and Boundaries'
citation_author: 'Yugui Yu'
citation_publication_date: '2026/11/20'
citation_doi: '10.5281/zenodo.24384106'
og_image: '/images/world-models-social-preview.png'
citation_pdf_url: 'https://github.com/yuyuguilab/world-models/raw/main/paper.pdf'
---

In February 2024, OpenAI published a technical report titled "video generation models as world simulators"; that December, DeepMind called Genie 2 a "large-scale foundation world model"; through the next two years, driving, robotics, spatial intelligence, and agent-environment simulation joined in turn, and several automakers named their cloud-side scenario generators world models. Meanwhile the survey literature concedes in plain words: **there is no consensus on what a world model fundamentally is, what it should predict, or how it should be built.** Multiple surveys of the same period organize the field around generated futures, latent-space prediction, or internal simulators—the disagreement is not about details but about the meaning of the word itself.

A word everyone uses and nobody can define—situations like this usually mean the question itself has crossed a boundary it shouldn't. The previous post, "The World-Model Question: Can a Stunning Genie 4 Test Intelligence?", took three cuts at Genie 4; this one unfolds what was behind those knives. It is the explainer edition of my paper *World Models: Definition, Clarification, Distinction, and Boundaries*.

## 1. The definition first: a world model is a function

Pin the definition down first; then the quarrels become legible.

**A system has a world model if and only if it has two things:**

**First, action-conditioning.** Its predictions take actions as conditioning variables—predicting "if this action is done, how will the environment respond," not unconditionally continuing a picture. In form: a predictive distribution conditioned on (observation, action).

**Second, callability.** The prediction capability is repeatedly callable as a component and supports interventional queries: swap the action, alter the scene, and the prediction changes accordingly. A one-off generated video does not have this capability—it is a work, not a model.

Two counterintuitive corollaries follow. **First, physics engines are world models**—the oldest implementation: rules written by humans (the "written-in" family). Systems that fit the rules from data ("learned") and systems that induce rules from interaction and then formalize them ("learn-then-formalize") are three implementation families of one function. Believing a world model must be learned from data mistakes an implementation detail for the definition. **Second, weather forecasting is not a world model**—it is a remarkable conditional predictor, but humans have no usable action variable over the atmosphere, so it fails the first condition. It is a close relative, not the thing itself.

The definition recently gained a theorem. In November 2026 the LeCun team proved: **models trained only on factual transitions cannot, whatever their data or capacity, answer counterfactual questions on their own.** "What would have happened had another action been taken?"—the ability to answer that must come from action-conditioned structure; it cannot be acquired for free from watching. The first condition is no longer only a conceptual argument.

## 2. Why the dispute never converges: one word, four positions

With the definition in hand, the mess becomes transparent: **the word "world model" is simultaneously used at four positions.**

- **The agent's component**: serving imagination and planning. Invoked as *rollout*—given observations and candidate actions, call the predictor in a loop to obtain imagined trajectories; the Dreamer family trains policies inside the world model itself.
- **The evaluator's benchmark**: serving verification and safety. Invoked as *scoring*—feed candidate actions to the world model and grade the outcomes without real execution.
- **The planner's state representation**: serving representation and planning. Invoked as *query*—explicit state for planning; the cognitive-map tradition lives here.
- **The trainer's simulated environment**: serving environment generation. Invoked as *training ground and generation*—the world model itself as an environment for agents, or as a synthesizer of training data.

The four positions share one functional core (action-conditioned prediction) while differing in perspective, criteria, and standards of success. This is **positional polymorphism**—and I hold that the term's confusion is primarily this, not semantic vagueness.

It explains two chronic phenomena at once. **Why no consensus?** The video-generation, latent-space, and internal-simulator camps each define for the position they occupy—the definitional dispute is a dispute over positions, the four positions coexist without conflict, so the dispute neither converges nor needs to. **Why does the term inflate in industry?** Naming a product with the generic word is cheaper than saying where it sits and what it does—what the vendor omits in saying "world model" is exactly all the information there is.

## 3. Three propositions: perspective, probability, agents and objects

The definition governs what; the propositions govern how. Take them one at a time.

**Perspective is decided by position.** "Is the world model first-person or God's-eye?" fails as a question about the concept; about a concrete system, the answer is decided by position: the component position is first-person (the robot's own cameras), the benchmark and representation positions yield a God's-eye view (bird's-eye, multi-camera rigs), and the simulated-environment position grows a third kind—the **disembodied camera**: free viewpoint decoupled from any body. Genie 4's official prompts include both "the camera IS the rider's eyes" and "the camera moves independently"—the disembodied camera has been promoted from an emergent phenomenon to a product feature. Cognitive science supplies the deepest confirmation: the brain's God's-eye map is learned from first-person motor experience.

**The probability share is a function of the observation position.** Why do world models compute probabilistically while physics engines need not? With equations known, initial conditions given, and error negligible (the written-in position), the share tends to zero—**a physics engine is a world model with the variance assumed away**; from a first-person observation position, partial observability, multi-valued futures, learning error, and chaos press in, and the share is necessarily positive. One mechanism is routinely missed: the optimum of mean-square regression is the conditional expectation—multi-valued futures averaged into blur is the classic failure mode of early video prediction. Probability is not a decoration brought in from outside; it hides inside the loss function.

**Where physics runs out is where agents begin.** Environment members divide by the origin of their tasks: self-referential tasks (maintaining one's own organization—living things), practice-assigned roles (an object's use conferred by practice), and task-free pure physical objects. The laws of physics cover the dynamics of objects; the behavior of agents must be predicted in layers by stance (law, built-in program, belief and desire). Human infants see the world this way from the start—self-propelled and goal-directed means agent; cohesive, continuous, contact-bound means object. The technical present is three ways of not dividing: the pixel route treats characters as picture, the object-centric route has objects without agents, the driving route lets agents enter from the annotation side. Work to bring agents back in has begun: Ant's Duo embeds the deciding subject into the world model, autonomously deciding each roughly 0.7-second chunk whether to speak or wait—the world is for now only the spacetime of dialogue, but the agent has already moved in.

## 4. Its relation to intelligence and to AGI

Three distinctions complete the boundary.

**From intelligence: policy versus model.** Intelligence judges the agent's output (whether it itself does rightly); the world model specifies how the environment will respond.** Being able to act does not imply being able to predict**: model-free policies behave competently yet deliver no prediction of response.** Being able to predict does not imply being able to act**: a simulator that predicts the falling cup to the pixel cannot catch the cup.

**From AGI: criterial mismatch.** The criteria of world models are local (calibration, coverage, scenario fidelity); the assessment of AGI is global (the full spectrum and span of human practice). The Physics-IQ benchmark finds visual fidelity essentially uncorrelated with physical understanding—material-side metrics do not judge components; component metrics do not judge systems. A system can score near-perfectly on physics benchmarks while covering almost none of the practice spectrum.

**From "world models are the road to AGI": the progress-transfer illusion.** Component milestones silently booked as overall milestones, product launches coupled to AGI countdowns—this is the transfer illusion diagnosed in *Two Different Goals*, now on the world-model axis. The illusion errs in both directions: high scores cited as "AGI is imminent" and drift cited as "AGI is hopeless" share the same error. Component progress is non-transferable, because the criteria are mismatched.

## 5. The terminal form: what is hard about building a world

Industry is converging on a new compound term—the "intelligent world model."Four routes: the Google stack (Genie as world, SIMA 2 as inhabitant, Gemini as director), the substrate route (the Fei-Fei Li line: persistent 3D worlds before intelligence), the component route (the LeCun line: the world model as a component of intelligence), and the reciprocal route (Ant's Duo: build the inhabitant first, match a world to it). By order of assembly they fall into two parties—**world-first** (build the world well, then move the inhabitants in) and **intelligence-first** (first the moving intelligence, then thicken the world)—but the confluence is the same four requirements: **enterable, self-sustaining physics, intelligent inhabitants, persistent operation**.

In the language of Chinese cultivation novels: open up a little world—a heaven that runs on its own, living beings, a world that endures. Only the heaven of an engineered world is learned, not authored: it always carries the accent of our world, unlike the heaven an author writes into a novel.** Building a world is not the hard part—enough compute and imagination will do; the hard part is building a world that stays calibrated against ours.** That runs into three boundaries. First, conceptually: what gets built is the same old world-model function realized to its fullest—one system occupying the simulated environment, the component, and the state-representation positions at once—not a new kind of thing. What an "intelligent world model" adds over an ordinary world model is completeness, not a new concept type: as a product name, it is naming; as a new concept, it does not exist. Second, criterially: only interactive behavior can be checked—"is there really a world, really a mind, inside" cannot be verified from outside. Third, attributionally: the inhabitants' intelligence belongs to that world, and cross-world transfer is tested precisely by calibration against us. Google itself, opening Genie 4 in November, conceded that long-term scene permanence remains an open challenge—the shortest plank of the four, and the industry knows it.

## 6. How it could be wrong, and what if the word is lost

The claims are stated so they can be defeated. Two examples: should a system appear that fails action-conditioning yet still supports interventional queries, the first condition is void; should some internal metric of world models prove isomorphic to the overall assessment of AGI—component progress transferable—"component progress is non-transferable" is void. The paper gives eight falsifiability clauses and an admission protocol for new cases (three questions: pass the two conditions?at which position?closed how?)—tomorrow brings another new-direction "world model," the framework does not change; the case takes its coordinates.

Finally, the relation of the definition to the word—the **survival clause**: the definition binds to the function, not to the word. A name's reference can drift; the criteria of the function do not drift with it. Any future system billing itself an "intelligent world model" and actually working must realize both conditions internally, or it is not even a world. Should the word one day settle on compound goals of the "intelligent world system" kind, the functional concept retreats to established technical names (action-conditioned predictive model, environment model)—done.** The word is rented; the function is ours.** Every further round of referential inflation makes a decidable functional specification scarcer—and inside the inflators' products runs our definition.

## Citation

- **Source paper**: *World Models: Definition, Clarification, Distinction, and Boundaries* · doi:[10.5281/zenodo.24384106](https://doi.org/10.5281/zenodo.24384106) · [GitHub](https://github.com/yuyuguilab/world-models)
- **Previous post**: "The World-Model Question: Can a Stunning Genie 4 Test Intelligence?" (the paper formalizes its three criteria as the task proposition, the definition, and the component-level distinction)
- **Theory**: *Fitting the Practice, Not the Works: A Human-Referential Theory of AGI* · [GitHub](https://github.com/yuyuguilab/practice-fitting-theory)
- **Concept unbundling**: *Two Different Goals: Dissociating the Machine Mind from Artificial Intelligence* · [GitHub](https://github.com/yuyuguilab/machine-heart-two-goals)
- **Typology**: *Four Concepts, Four Types* · [GitHub](https://github.com/yuyuguilab/four-concepts)
