---
name: feedback-stepwise-commits
description: "Proactively give a copy-pasteable commit message after finishing each logical unit of work, without being asked; for multi-step plans, also wait for the user to commit and say go before continuing"
metadata: 
  node_type: memory
  type: feedback
  originSessionId: aa5526f8-304b-4499-ac84-e8708e9599b6
---

After finishing any meaningful, commit-worthy unit of work (a fix, a small feature, a step in a plan), proactively give a copy-pasteable `git add (file) + git commit -m "..."` message at the end of the turn — do not wait to be asked "commit message?" every time. The user commits manually themselves — always print the commands as text for them to copy and run; never invoke `git add`/`git commit`/`git push` via a tool yourself, even if asked to "commit" in a way that could be read as delegating the action. Confirmed again 2026-08-05 after directly running a `git commit` command was rejected: the user always wants the raw commands, not the tool executing them.

When executing a build-order plan with multiple steps (e.g. backend model → controller → routes → mount), still do not run ahead and implement everything in one pass — implement one step, give that step's commit message, and wait for the user to commit and explicitly say go before continuing to the next step.

**How to apply:** Default to appending a commit message whenever you've just finished editing/building something concrete, even outside a formal numbered plan. Within a numbered build-order plan whose steps are architecturally distinct, still pause after each step's commit message and wait for explicit go-ahead before continuing. But when a plan is "apply the same mechanical edit to N similar files" (e.g. "add a sync call to each of 12 importer scripts"), do NOT split into N commits by default — implement all N, then give one consolidated commit message at the end. If genuinely unsure which kind of "small" the user means, ask rather than guessing — a wrong guess here multiplies interrupt cycles and raises the odds of an environment mistake like committing in the wrong repo.