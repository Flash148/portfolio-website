---
title: "Tic-Tac-Toe"
description: "A command-line Tic-Tac-Toe game in Python with a play-vs-AI mode, full win/draw detection, and an endless replay loop."
techStack: ["Python", "CLI"]
github: "https://github.com/Flash148/tic-tac-toe"
---

## Overview

This is a terminal-based Tic-Tac-Toe game built in pure Python with no external dependencies. You can play against another person or against a simple AI opponent that picks a random open square. The program handles win and draw detection, validates every move, and loops so you can play as many rounds as you want.

## Features

- 3x3 board rendered in the terminal
- Player vs. player or player vs. AI mode
- Win detection across rows, columns, and both diagonals
- Draw detection when the board fills up
- Input validation for out-of-range and already-taken squares
- "Play again?" prompt after every game

## What I Learned

Building this reinforced how to break a small program into focused functions, one each for rendering the board, checking for a winner, and applying a move. It was also good practice at guarding user input against bad values and structuring a game loop that cleanly supports replay.
