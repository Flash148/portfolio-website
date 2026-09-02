---
title: "Typing Speed Test"
description: "A feature-rich desktop typing test built with Python and Tkinter, with real-time accuracy feedback, difficulty levels, and persistent history and analytics."
techStack: ["Python", "Tkinter", "ttk", "JSON"]
github: "https://github.com/Flash148/Typing-speed-Project"
---

## Overview

This is a desktop typing speed test built with Python and Tkinter. It tracks accuracy character by character, updates WPM and stats live as you type, and saves every result to a local history file so you can watch your progress over time. Settings and difficulty are configurable and persist between sessions.

## Features

- Real-time, character-by-character accuracy tracking with green/red color coding
- Live WPM, accuracy, and word count with a progress bar
- 3-2-1 countdown before each test and a "Done Early" option
- Detailed post-test stats: error analysis, typing consistency, and WPM over time
- Personal bests for highest WPM and best accuracy
- Persistent test history saved to JSON with an averages-and-records dashboard
- Four difficulty levels (Easy, Medium, Hard, Coding), custom durations (30/60/90/120s), and custom text input
- Settings persistence between sessions

## Technical Highlights

- GUI built with Tkinter and ttk styling
- JSON for settings and history persistence
- Object-oriented, event-driven design
- Custom statistics logic for WPM calculation, consistency scoring, and error-pattern analysis

## What I Learned

This project grew through several enhancement phases, starting from a basic timer and WPM counter and building up to analytics, history tracking, and difficulty modes. It taught me how to manage state in an event-driven GUI, how to persist user data cleanly with JSON, and how to keep a growing application organized with an object-oriented structure.
