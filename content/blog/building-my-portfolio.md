---
title: "Building My Developer Portfolio with Next.js"
description: "How I built a modern, fast portfolio using Next.js, TypeScript, and Tailwind CSS"
date: "2026-01-27"
author: "Mike Robbins"

---

## The Journey

I recently built my developer portfolio from scratch using Next.js 15, and I wanted to share the experience and what I learned along the way.

## Tech Stack

Here's what I used to build this site:

- **Next.js 15** - React framework with App Router
- **TypeScript** - Type safety and better developer experience
- **Tailwind CSS v4** - Utility-first CSS (bleeding edge!)
- **Markdown** - Content management for projects and blog posts
- **Vercel** - Deployment and hosting

## Key Features

### Server Components
One of the coolest things about Next.js 15 is Server Components. Most of my site uses Server Components because they:
- Render on the server (faster initial load)
- Don't send JavaScript to the browser
- Can directly access files and databases

Only interactive parts like the navigation use Client Components.

### Markdown-Based Content
Instead of hardcoding projects and blog posts, I use markdown files. This means:
- Easy to add new content (just create a `.md` file)
- No database needed
- Content lives with the code
- Can use Git for version control

### Static Site Generation
Next.js pre-builds all pages at build time, which means:
- Lightning-fast page loads
- No server needed at runtime
- Can host for free on Vercel
- Great SEO

## Challenges I Faced

### Tailwind v4 Compatibility
I accidentally installed Tailwind CSS v4 (just released!) which has different syntax than v3. Most tutorials use v3, so I had to figure out the new way:
```css
/* Old way (v3) */
@tailwind base;
@tailwind components;
@tailwind utilities;

/* New way (v4) */
@import "tailwindcss";
```

### Understanding Server vs Client Components
It took time to understand when to use `'use client'`. The rule is simple:
- Need interactivity (clicks, state)? → Client Component
- Just displaying data? → Server Component (default)

## What I Learned

1. **Start simple** - Get something working, then improve it
2. **Server Components are powerful** - Less JavaScript = faster sites
3. **Markdown is amazing** - Perfect for blogs and project pages
4. **TypeScript helps catch bugs early** - Saved me many times
5. **Deploy early and often** - Seeing your site live is motivating!

## Next Steps

I'm planning to add:
- Newsletter signup form
- More blog posts (like this one!)
- Additional projects as I build them
- Maybe a dark/light mode toggle

## Resources

If you're interested in building something similar, check out:
- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS](https://tailwindcss.com)
- [Vercel Deployment](https://vercel.com)

---

**Want to see the code?** Check out my [portfolio repository on GitHub](https://github.com/Flash148/Portfolio)

Building this portfolio was an incredible learning experience. If you're thinking about building your own, I highly encourage it - you'll learn so much!