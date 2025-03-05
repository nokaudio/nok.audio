# Gemini-Style Style Guide

## I. Introduction

- **Purpose:** This style guide defines the visual and interaction language for the Gemini-style design, ensuring consistency and a unified user experience across the project.
- **Target Audience:** Developers, designers, and anyone contributing to the project's user interface.
- **Version:** 1.0

## II. Core Principles

- **Clarity:** Prioritize clear communication and easily understandable layouts.
- **Consistency:** Maintain a consistent application of styles across all elements and pages.
- **Modern:** Embrace a contemporary and visually appealing design aesthetic.
- **Accessibility:** Ensure the design is accessible to users of all abilities.

## III. Color Palette

- **Primary:**
  - `#000000` (`bg-black`) - Black: For main backgrounds.
  - `#0070f3` (`accent-color`) - Accent Color: For primary buttons, brand elements, and interactive highlights.
  - `#005fd1` (`accent-color-hover`) - Accent Color Hover: For hover states of the accent color.
- **Secondary:**
  - `#1F2937` (`bg-gray-900`) - Dark Gray: For backgrounds of secondary sections (header, footer, sidebar).
  - `#374151` (`border-gray-800`) - Darker Gray: For borders.
- **Text:**
  - `#FFFFFF` (`text-white`) - White: For primary text.
  - `#9CA3AF` (`text-gray-400`) - Light Gray: For secondary text.
  - `#D1D5DB` (`text-gray-300`) - Lightest Gray: For secondary text like nav items.

## IV. Typography

- **Font Family:**
  - `font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";` // tailwind default
- **Headings:**
  - `h1`: `text-4xl font-extrabold tracking-tight` (Example: Hero headline)
  - `h2`: `text-3xl font-bold` (Example: "Our Services" title)
  - `h3`: `text-xl font-semibold` (Example: Service card titles, sidebar titles)
- **Paragraph:**
  - `p`: `text-base` (Example: Descriptions, body text)
- **Secondary Text:**
  - `text-gray-400`, `text-gray-300`
- **Text Size Scale:**
  - `text-sm`: For very small text
  - `text-base`: For body text
  - `text-lg`: For larger text, captions
  - `text-xl`: For titles within sections
  - `text-3xl`: For primary titles
  - `text-4xl`: For hero title.
- **Font Weights:**
  - `font-medium`: for default text
  - `font-semibold`: for titles
  - `font-bold`: for titles and bold text.
  - `font-extrabold`: for hero title.

## V. Spacing

- **Containers:**
  - `max-w-7xl`: Main content container width.
- **Padding:**
  - `px-4`, `sm:px-6`, `lg:px-8`: Horizontal padding.
  - `py-12`, `py-4`, etc: Vertical padding.
- **Margins:**
  - `mt-8`, `mt-5` etc: Vertical margins
- **Gaps:**
  - `gap-8`: Large gap for grids.
  - `gap-6`: Medium gap for grids.
- **Spacing Utilities:**
  - `space-x-*`: Horizontal spacing.
  - `space-y-*`: Vertical spacing.
- **Centering:**
  - `mx-auto`: Center elements horizontally.

## VI. Components

- **Buttons:**
  - **Primary Button:** `bg-accent text-white hover:bg-accent-hover px-8 py-3 rounded-md`
  - **Sizes:**
    - `md:py-4 md:text-lg md:px-10`: Larger button for hero sections.
    - default: `px-8 py-3`: used in other places.
  - **States:** (Hover, focus, active) - use accent colors for hover.
- **Cards:**
  - `bg-gray-900 rounded-lg shadow-lg border border-gray-800 overflow-hidden`: Card base style.
  - Image: `w-full h-48 object-cover`
  - Text: `p-6`, `text-xl font-semibold text-white mb-2`, `text-gray-400`.
- **Navigation:**
  - **Desktop:** `hidden md:flex items-center space-x-8`
  - **Mobile:** `md:hidden`, `pt-2 pb-3 space-y-1`
- **Footer:**
  - `bg-gray-900 text-white border-t border-gray-800`: Footer container.
  - Links: `text-gray-400 hover:text-accent`
- **Icons**
  - `lucide-react`
  - `h-5 w-5` for sidebar and quick links icons.
  - `h-6 w-6` for menu icon, and footer icons.
  - `h-8 w-8` for logo icon.
- **Hero**
  - Large headline: `text-4xl tracking-tight font-extrabold text-white sm:text-5xl md:text-6xl`
  - Subtext: `mt-3 text-base text-gray-400 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0`
  - Button: `rounded-md shadow w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-accent hover:bg-accent-hover md:py-4 md:text-lg md:px-10`
  - Image: `h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full opacity-80`

## VII. Layout

- **Grid:** `grid grid-cols-1 lg:grid-cols-3 gap-8`
- **Max width container** `max-w-7xl mx-auto`
- **Sections** `py-12`
