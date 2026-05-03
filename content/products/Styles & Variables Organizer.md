---
slug: styles-variables-organizer
logo: /product-logos/svo.svg
title: Styles & Variables Organizer
subtitle: Apply styles and variables to all your designs with one click.
category: Design Tools
order: 2
type: details_page
tryNowUrl: https://www.figma.com/community/plugin/816627069580757929/styles-variables-organizer
seoTitle: Styles and Variables Organizer | Figma Design Tokens Plugin
seoDescription: Manage Figma variables and styles at scale by linking, merging, and cleaning design tokens across files.
tags:
    - style: figma
      text: Figma Plugin
    - style: user
      text: 128k
    - style: likes
      text: 3.1k
banners:
    - type: image
      url: /banners/svo-1.png
      alt: Styles & Variables Organizer preview
    - type: image
      url: /banners/svo-2.png
      alt: Styles & Variables Organizer preview
    - type: image
      url: /banners/svo-3.png
      alt: Styles & Variables Organizer preview
    - type: image
      url: /banners/svo-4.png
      alt: Styles & Variables Organizer preview
---

Styles and Variables Organizer helps teams manage design systems and design tokens consistently across new work and legacy files.

## Design System Management at Scale

- Daily design token implementation in active files.
- Legacy design file cleanup and migration.
- Applying newly added variables and styles to entire files quickly.

## Features

### 1. Design Token Usage Assessment

- Assess token usage by variable modes to understand what is actually adopted.
- Filter variable modes and properties to focus on the right migration scope.

### 2. Select, Link, Merge, and Bulk Apply Tokens

- Select all elements using the same value, style, or variable.
- Apply newly added variables and styles to an entire file.
- Merge different styles and variables with the same value into a single source of truth.
- Speed up repetitive design token implementation tasks.

### 3. One-Click System Consolidation

- Automatically merge all available styles and variables with a single click.
- Keep your design system and token library clean over time.

## Supported Variable and Style Types

- Color Variables
- Number Variables
- String Variables
- Color Styles
- Text Styles
- Effect Styles

## Practical Token Operation Examples

- Link all matching colors in a file to a color variable.
- Link all corner radius values in a file to number variables.
- Merge different styles with the same value into one shared style.
- Use your imagination!

## Detailed Instructions

![Instructions image](/inlines/svo-1.svg)

![Instructions image](/inlines/svo-2.svg)

### Properties Supported for Each Variable Type

![Instructions image](/inlines/svo-3.svg)

### Special Things to Notice

- All nested layers inside boolean operations(union, subtract, intersect, exclude) are skipped.
- Masks are ignored for paint/color/effect detection. Mask layers are skipped when recording fills, strokes, and effects.
- Only visible colors and effects count. Hidden fills, hidden strokes, and hidden effects are excluded from results. Results are grouped by actual visual value. 
- Text style detection skips mixed text properties. If a text layer has mixed font size, font, line height, letter spacing, etc., it is skipped for text style grouping.

## Issues or Feature Requests

Email: [contact@mureal.io](mailto:contact@describe.design)
