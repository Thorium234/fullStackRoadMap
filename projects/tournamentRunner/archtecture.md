Architecture Breakdown
state.js

Responsible for application state.

This file should answer:

    What data exists?

    What is the current tournament state?

    Which round is active?

    Which teams are eliminated?

    Which matches are completed?

Example responsibilities:

    Store teams

    Store matches

    Store winners

    Store current round

Avoid DOM logic here.
storage.js

Responsible for persistence.

This layer should:

    Save tournament data to localStorage

    Load saved tournaments

    Reset tournament data

This file should never contain rendering logic.
fixtures.js

Responsible for fixture generation.

This is pure logic.

Possible responsibilities:

    Generate bracket pairs

    Handle odd-numbered teams

    Advance winners

    Create next round fixtures

This file should not manipulate the DOM directly.
render.js

Responsible for UI updates.

This layer should:

    Display teams

    Render fixtures

    Show winners

    Update tournament status

This file should receive data and display it.

Avoid storing business logic here.
tournament.js

Main controller/orchestrator.

This connects everything together.

Responsibilities:

    Listen to user actions

    Trigger fixture generation

    Update state

    Re-render UI

    Coordinate storage updates

file as the application brain.
Development Philosophy

This project focuses on learning real engineering principles.

Rules:

    Separate logic from rendering

    Avoid global chaos

    Keep functions small

    One responsibility per module

    State should drive UI

    Do not mix storage with rendering

Recommended Learning Path

Before implementing features, research  topics .
Core Concepts

Search these topics:

    "state management in vanilla javascript"

    "single source of truth javascript"

    "separation of concerns frontend"

    "event driven architecture javascript"

Tournament Logic

Search:

    "single elimination bracket algorithm"

    "round robin tournament algorithm"

    "how tournament fixtures are generated"

    "bye system in tournaments"

Do not copy code immediately.

First understand:

    Why rounds exist

    How winners advance

    How odd teams are handled

    How match history is stored

Rendering Concepts

Search:

    "render pattern javascript"

    "difference between state and ui"

    "dom rendering from state"

You must understand:

UI is a reflection of state.

Not the other way around.
Suggested Development Order
Phase 1

    Add teams

    Store teams in state

    Render teams list

Phase 2

    Generate fixtures

    Render fixtures

Phase 3

    Record match winners

    Advance winners

Phase 4

    Persist tournament data

Phase 5

    Add tournament reset system

Phase 6

    Improve UI/UX

Important Engineering Lessons

A tournament app is not difficult because of HTML.

It is difficult because of state transitions.

The real skill is learning how data changes over time.

If the state architecture is weak:

    rendering becomes messy

    bugs multiply

    persistence breaks

    fixture generation becomes confusing

Focus on modeling the system correctly first.
Future Features

Possible future improvements:

    Double elimination

    Round robin

    Player statistics

    Match timer

    Admin dashboard

    Export results

    Firebase/Supabase backend

    Multiplayer support

Personal Goal

This project exists to master application logic using vanilla JavaScript before moving into larger frameworks.

The objective is understanding, not shortcutting.


Now the next thing you should do is not coding.

You should draw the tournament state on paper.

Example:

```text
Tournament
 ├── Teams
 ├── Rounds
 │    ├── Matches
 │    │     ├── Team A
 │    │     ├── Team B
 │    │     └── Winner
 └── Status

