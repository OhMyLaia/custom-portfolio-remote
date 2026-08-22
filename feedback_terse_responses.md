---
name: feedback-terse-responses
description: "On request, compress answers to a few lines — NOT a default, only when explicitly asked"
metadata: 
  node_type: memory
  type: feedback
  originSessionId: aa5526f8-304b-4499-ac84-e8708e9599b6
---

When the user explicitly asks for it ("explain super simple", "in a few lines", etc.), compress to a one-line conclusion + 2-4 short bullets, dropping headers/multi-paragraph structure.

**Why:** User first said "You write too much, explain super simple in a few lines" on one specific answer, then explicitly corrected the over-generalization: "NO, not always. Just when I ask to." This is a per-request mode switch, not a standing default — normal-depth technical/evidence-backed explanations (file:line citations, multi-paragraph risk breakdowns) remain the default otherwise.

**How to apply:** Don't preemptively shrink answers. Only compress the response(s) immediately following an explicit terseness request, then return to normal depth.