# Design System Inspired by Auraflux

## 1. Visual Theme & Atmosphere

Auraflux embodies a sophisticated, tech-forward aesthetic that merges minimalist design principles with purposeful energy. The system prioritizes clarity and intentional contrast, using a restrained color palette anchored by deep neutrals and strategic accent colors that command attention without overwhelming. The typography emphasizes readability at scale, with generous spacing that communicates confidence and breathing room. This is a design language built for conscious brands—elegant yet accessible, modern yet grounded, technology-enabled yet human-centered.

**Key Characteristics**
- Clean, spacious layouts with deliberate negative space
- Strong typographic hierarchy anchored in bold sans-serif faces
- Restrained color palette with purposeful accent deployment
- Deep, neutral foundation colors that convey stability and sophistication
- Interactive elements designed for clarity and directness
- Accessible contrast ratios throughout all interactive states
- Modern, forward-thinking visual identity suitable for tech and strategy brands

## 2. Color Palette & Roles

### Primary
- **Primary Action** (`#1E73BE`): Used for key interactive elements, call-to-action buttons, and critical navigation links. Conveys trust and technical confidence.
- **Primary Accent** (`#CC3366`): Strategic color for emphasis, highlights, and brand identity moments. Most frequently deployed across the system.

### Accent Colors
- **Secondary Accent** (`#CF5227`): Warm, energetic tone for supporting CTAs and secondary highlights.
- **Social/LinkedIn** (`#0077B5`): Reserved for social media integration and external platform linking.

### Interactive
- **Button Primary State** (`#1E73BE`): Default state for primary actions with white text.
- **Button Secondary State** (`#F9F9F9`): Light neutral for secondary actions with dark text (`#333333`).
- **Button Tertiary State** (`#F9F9F9`): Ghost variant for de-emphasized actions.
- **Link Default** (`#1E73BE`): Consistent with primary action color for understandable navigation.

### Neutral Scale
- **Text Primary** (`#333333`): Main body text and primary content. Highest usage in the system.
- **Text Secondary** (`#111111`): Deepest text for headlines and maximum contrast moments.
- **Text Tertiary** (`#868786`): Muted text for secondary information and helper text.
- **Background Light** (`#FFFFFF`): Clean, bright surfaces for primary content areas.
- **Background Subtle** (`#F2F2F2`): Soft neutral for secondary surfaces and containers.

### Surface & Borders
- **Border Light** (`#F2F2F2`): Subtle dividers and input field borders.
- **Border Muted** (`#D3D3D3`): Mid-tone borders for form elements and container edges.
- **Surface Dark** (`#1F2124`): Deep background for contrast-rich sections.
- **Surface Darker** (`#1C2022`): Darkest neutral surface for maximum depth.

### Semantic / Status
- **Error** (`#CF2E2E`): Indicates errors, invalid states, and destructive actions.
- **Warning** (`#FCB900`): Alerts, cautions, and validation warnings.
- **Success** (`#008000`): Confirmations and successful completions.

## 3. Typography Rules

### Font Family
- **Primary:** `Manrope` (Google Fonts, weights 100–900), fallback `-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif`
- **Secondary / Body:** `Inter` (Google Fonts, weights 400–700), fallback `-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif`
- **System:** `-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif` for UI elements and buttons

### Hierarchy

| Role | Font | Size | Weight | Line Height | Letter Spacing | Notes |
|------|------|------|--------|-------------|----------------|-------|
| Display / H1 | Manrope | 96px | 500 | 96px | 0px | Large hero statements, page titles |
| Heading / H2 | Manrope | 96px | 500 | 96px | 0px | Primary section headings |
| Subheading / H3 | Manrope | 24px | 600 | 28.8px | 0px | Secondary section titles, feature headers |
| Body Large | Inter | 24px | 400 | 36px | 0px | Long-form content, rich descriptions |
| Body Standard | -apple-system | 16px | 400 | 24px | 0px | Navigation, default text, paragraph body |
| Button | -apple-system | 15px | 500 | 20px | 0px | Primary and secondary button text |
| Label / Caption | -apple-system | 12px | 500 | 12px | 0px | Form labels, input descriptions, small caps |
| Link / Helper | -apple-system | 12px | 400 | 18px | 0px | Inline links, helper text, footnotes |
| Code / Monospace | -apple-system | 12px | 400 | 18px | 0px | Code blocks, technical references |

### Principles
- Manrope drives brand identity at display scales with measured weight (500) for refined elegance
- Inter provides readable body copy at comfortable 24px base, supporting longer editorial content
- System fonts power UI elements, ensuring platform-native rendering and accessibility
- Line height always matches or exceeds size for comfortable reading (1.0–1.5 ratio)
- Weights used judiciously: 400 for body, 500 for headings and buttons, 600 for emphasis
- Letter spacing remains 0 throughout; adjust line height instead for visual breathing room

## 4. Component Stylings

### Buttons

#### Primary Button
- **Background:** `#1E73BE`
- **Text Color:** `#FFFFFF`
- **Padding:** `10px 10px`
- **Border Radius:** `6px`
- **Border:** `1px solid #1E73BE`
- **Font Size:** `15px`
- **Font Weight:** `500`
- **Font Family:** `-apple-system`
- **Line Height:** `20px`
- **Height:** `45px`
- **Box Shadow:** None
- **Hover State:** Opacity `0.88` or darken to `#1A5FA8`
- **Active State:** Scale `0.98` or darken to `#154A80`
- **Disabled State:** Opacity `0.5`, cursor `not-allowed`

#### Secondary Button
- **Background:** `#F9F9F9`
- **Text Color:** `#333333`
- **Padding:** `10px 10px`
- **Border Radius:** `6px`
- **Border:** `1px solid #F2F2F2`
- **Font Size:** `15px`
- **Font Weight:** `500`
- **Font Family:** `-apple-system`
- **Line Height:** `20px`
- **Height:** `45px`
- **Box Shadow:** None
- **Hover State:** Background `#EEEEEE`, border `#D3D3D3`
- **Active State:** Background `#E5E5E5`, border `#CCCCCC`
- **Disabled State:** Opacity `0.5`, cursor `not-allowed`

#### Ghost Button
- **Background:** `transparent`
- **Text Color:** `#1E73BE`
- **Padding:** `0px 0px`
- **Border Radius:** `6px`
- **Border:** `1px solid transparent`
- **Font Size:** `15px`
- **Font Weight:** `500`
- **Font Family:** `-apple-system`
- **Line Height:** `20px`
- **Height:** `45px`
- **Box Shadow:** None
- **Hover State:** Background `rgba(30, 115, 190, 0.08)`, border `#1E73BE`
- **Active State:** Background `rgba(30, 115, 190, 0.16)`, border `#1E73BE`
- **Disabled State:** Opacity `0.5`, cursor `not-allowed`

### Cards & Containers

#### Default Card
- **Background:** `#FFFFFF`
- **Border:** `1px solid #F2F2F2`
- **Border Radius:** `6px`
- **Padding:** `24px 24px`
- **Box Shadow:** None
- **Hover State:** Border `#D3D3D3`, shadow `0px 4px 16px rgba(0, 0, 0, 0.06)`

#### Dark Container
- **Background:** `#1F2124`
- **Text Color:** `#FFFFFF`
- **Padding:** `32px 32px`
- **Border Radius:** `0px`
- **Border:** None
- **Box Shadow:** None

### Inputs & Forms

#### Text Input Default
- **Background:** `#FFFFFF`
- **Text Color:** `#606266`
- **Border:** `1px solid #DADADD`
- **Border Radius:** `0px`
- **Padding:** `11px 15px`
- **Font Size:** `18px`
- **Font Weight:** `400`
- **Font Family:** `Inter`
- **Line Height:** `18px`
- **Height:** `48px`
- **Box Shadow:** None
- **Focus State:** Border `#1E73BE`, outline `none`, box-shadow `0px 0px 0px 3px rgba(30, 115, 190, 0.1)`
- **Error State:** Border `#CF2E2E`, background `#FFFBFB`
- **Disabled State:** Background `#F2F2F2`, color `#868786`, cursor `not-allowed`

#### Form Label
- **Font Size:** `12px`
- **Font Weight:** `500`
- **Font Family:** `-apple-system`
- **Color:** `#333333`
- **Line Height:** `12px`
- **Margin Bottom:** `8px`
- **Display:** `block`

### Navigation

#### Horizontal Navigation
- **Background:** `transparent`
- **Text Color:** `#333333`
- **Font Size:** `16px`
- **Font Weight:** `400`
- **Font Family:** `-apple-system`
- **Line Height:** `24px`
- **Padding:** `0px 0px`
- **Border Radius:** `0px`
- **Height:** `43px`
- **Hover State:** Color `#1E73BE`, border-bottom `2px solid #1E73BE`
- **Active State:** Color `#1E73BE`, border-bottom `2px solid #1E73BE`
- **Item Spacing:** `32px` horizontal gap

### Links

#### Inline Link
- **Text Color:** `#1E73BE`
- **Font Size:** `12px`
- **Font Weight:** `400`
- **Font Family:** `-apple-system`
- **Line Height:** `18px`
- **Text Decoration:** `none` by default
- **Background:** `transparent`
- **Border:** None
- **Padding:** `0px`
- **Box Shadow:** None
- **Hover State:** Text Decoration `underline`, opacity `0.88`
- **Active State:** Color `#154A80`, text-decoration `underline`
- **Visited State:** Color `#9A6BB5`
- **Disabled State:** Color `#868786`, cursor `not-allowed`, text-decoration `none`

### Badges

#### Default Badge
- **Background:** `#F2F2F2`
- **Text Color:** `#333333`
- **Font Size:** `12px`
- **Font Weight:** `500`
- **Font Family:** `-apple-system`
- **Padding:** `4px 8px`
- **Border Radius:** `3px`
- **Border:** None
- **Line Height:** `16px`

#### Accent Badge
- **Background:** `#CC3366`
- **Text Color:** `#FFFFFF`
- **Font Size:** `12px`
- **Font Weight:** `500`
- **Font Family:** `-apple-system`
- **Padding:** `4px 8px`
- **Border Radius:** `3px`
- **Border:** None
- **Line Height:** `16px`

## 5. Layout Principles

### Spacing System

The spacing system is built on a 4px base unit, scaling in multiples to create visual rhythm and hierarchy.

- **4px:** Minimum gutters, micro-adjustments, inline element spacing
- **8px:** Tight element grouping, form field spacing
- **12px:** Label-to-input distance, small component padding
- **16px:** Standard padding for content blocks, link/button spacing
- **20px:** Medium padding for cards and containers
- **24px:** Primary spacing between sections, card internals
- **32px:** Generous container padding, major section separation
- **40px:** Large gap between distinct content areas
- **52px:** Extra-large padding for feature containers
- **56px:** Section divider spacing
- **64px:** Page-level spacing, hero sections
- **72px:** Maximum vertical spacing between major sections

**Context Usage:**
- Form fields and input spacing: `12px` gap
- Card internal padding: `20px`–`32px`
- Section separators: `40px`–`64px`
- Hero/banner vertical padding: `56px`–`72px`

### Grid & Container

- **Max Width:** `1200px` for primary content containers (adjust based on viewport)
- **Gutter:** `24px` horizontal spacing between grid columns
- **Columns:** 12-column system for flexible layout
- **Container Padding:** `24px` on desktop, `16px` on tablet, `12px` on mobile
- **Section Pattern:** Full-width sections with 12-column inner grids; alternating background colors for visual separation

### Whitespace Philosophy

Negative space is a first-class design element in Auraflux. Generous margins and padding between components create visual hierarchy, improve scannability, and communicate sophistication. Never compress spacing to fit content—instead, let content breathe and lead the eye naturally. Use whitespace to separate conceptual groupings and emphasize importance.

### Border Radius Scale

- **0px:** Input fields, text areas, full-width containers requiring sharp edges
- **3px:** Small badges, tags, micro-UI elements
- **6px:** Buttons, cards, modal dialogs, standard interactive elements
- **12px 12px 0px 0px:** Modals with top-rounded corners only, modal footers
- **12px:** Larger containers, feature cards, hero sections (used sparingly)

## 6. Depth & Elevation

| Level | Treatment | Use |
|-------|-----------|-----|
| Flat / 0 | No shadow, `box-shadow: none` | Baseline UI, buttons, inputs, text |
| Raised / 1 | `0px 2px 4px rgba(0, 0, 0, 0.08)` | Hover states on cards, subtle depth |
| Elevated / 2 | `0px 4px 12px rgba(0, 0, 0, 0.12)` | Cards in focus, dropdown menus, popovers |
| High / 3 | `0px 8px 24px rgba(0, 0, 0, 0.16)` | Modal overlays, notifications, dropdowns |
| Maximum / 4 | `0px 10px 20px rgba(0, 0, 0, 0.19), 0px 6px 6px rgba(0, 0, 0, 0.23)` | Button press/focus state, prominent overlays |

**Shadow Philosophy:**

Shadows in Auraflux are restrained and purposeful, used sparingly to denote interactivity and layering rather than create visual noise. The system favors transparency and subtle opacity shifts over dramatic drop shadows. Shadows should lift elements only when necessary to communicate hierarchy or state change. Dark backgrounds (like `#1F2124`) use lighter shadow colors to maintain contrast.

## 7. Do's and Don'ts

### Do

- **Use Manrope for all display and heading copy** — it establishes brand voice and visual identity
- **Maintain minimum 16px font size** for body text to ensure readability across devices
- **Apply `#1E73BE` to all primary CTAs** — consistency builds user trust and navigation efficiency
- **Space elements generously** — 24px gaps between sections as baseline
- **Use the neutral scale for text** — `#333333` for primary, `#868786` for muted, `#FFFFFF` for light backgrounds
- **Test all interactive states** — hover, active, focus, disabled on every button and link
- **Respect input field styling** — flat design with light borders, no excessive shadows
- **Deploy accent colors strategically** — `#CC3366` and `#CF5227` for emphasis, not as default colors
- **Layer content with 6px border radius** — consistent rounded corners on interactive elements
- **Align to the 4px spacing grid** — maintain visual cohesion across component sizes

### Don't

- **Mix font families in the same component** — keep hierarchy clear (Manrope for headings, system fonts for UI)
- **Use colors below `#868786` for readable text** — insufficient contrast and accessibility issues
- **Compress padding below 8px** for interactive elements — violates touch target minimums
- **Apply multiple shadows simultaneously** — use single shadow level from the elevation scale
- **Justify large text blocks** — stick to left-align for legibility
- **Use opacity below 0.5 for disabled states** — can become invisible or confusing
- **Create custom border radii** — adhere strictly to the 0px, 3px, 6px, 12px scale
- **Override focus states on inputs** — always provide clear visual feedback
- **Deploy `#CF5227` as primary CTA** — reserve for secondary or warning-adjacent actions
- **Ignore line height in typography** — always respect the hierarchy table values

## 8. Responsive Behavior

### Breakpoints

| Name | Width | Key Changes |
|------|-------|-------------|
| Mobile | 320px–599px | Single column, 12px padding, font sizes reduced 10%, stacked navigation, 40px section spacing |
| Tablet | 600px–999px | Two columns, 16px padding, 24px gap between sections, horizontal nav collapse to menu |
| Desktop | 1000px–1399px | Three–four columns, 24px padding, 32px gap, full navigation visible, max-width `1200px` |
| Large Desktop | 1400px+ | Full 12-column grid, 32px padding, max-width `1400px` |

### Touch Targets

- **Minimum size for touch:** `44px × 44px` (buttons, links, navigation items)
- **Recommended size:** `48px × 48px` (large touch surfaces)
- **Spacing between targets:** minimum `8px` to avoid accidental activation
- **Form fields:** minimum `48px` height for comfortable input
- **Link text:** minimum `12px` line height with `18px` total line-height for legibility

### Collapsing Strategy

- **Navigation:** Horizontal menu on desktop (630px width); hamburger menu below 600px
- **Spacing:** Reduce gap by 20–30% at tablet, 40–50% at mobile; maintain minimum `16px` between sections
- **Typography:** Maintain hierarchy scale but reduce absolute sizes: Display `96px` → `56px` (tablet) → `32px` (mobile)
- **Containers:** Full-width with padding at mobile (`12px`), two-thirds width at tablet, fixed width at desktop
- **Images & cards:** Single column at mobile, two columns at tablet, three+ at desktop
- **Buttons:** Full-width at mobile, auto-width at desktop; maintain `45px` height across all sizes
- **Padding/margins:** Reduce 30–40% on mobile while maintaining 4px base unit integrity

## 9. Agent Prompt Guide

### Quick Color Reference

- **Primary CTA:** Primary Action (`#1E73BE`)
- **Secondary CTA:** Secondary Button (`#F9F9F9`)
- **Accent / Emphasis:** Primary Accent (`#CC3366`)
- **Body Text:** Text Primary (`#333333`)
- **Headlines:** Text Secondary (`#111111`)
- **Background Light:** Background Light (`#FFFFFF`)
- **Background Dark:** Surface Dark (`#1F2124`)
- **Input Border:** Border Light (`#F2F2F2`)
- **Link Text:** Link Default (`#1E73BE`)
- **Error State:** Error (`#CF2E2E`)
- **Success State:** Success (`#008000`)
- **Warning State:** Warning (`#FCB900`)

### Iteration Guide

1. **Font System:** Apply Manrope (500–600 weight) for all `<h1>`, `<h2>`, `<h3>` elements. Use `-apple-system` or `Inter` for body, navigation, and button text. Never mix font families within a single component.

2. **Color Deployment:** Default text is `#333333`. Headings are `#111111`. All primary buttons use `#1E73BE` background with `#FFFFFF` text. Secondary buttons use `#F9F9F9` background with `#333333` text. Links are always `#1E73BE` unless visited (then `#9A6BB5`).

3. **Spacing Baseline:** All vertical spacing starts at 24px between sections; horizontal padding starts at 24px for desktop, 16px for tablet, 12px for mobile. Never go below 8px for interactive element padding.

4. **Interactive States:** Every button, link, and input must have distinct hover, active, focus, and disabled states. Hover typically reduces opacity to 0.88 or slightly darkens. Focus always includes visible focus ring or border. Disabled always reduces opacity to 0.5 and sets `cursor: not-allowed`.

5. **Border Radius Consistency:** Apply 6px to buttons, cards, and standard UI elements. Use 0px for input fields and full-width containers. Use 3px only for badges and small components. Use 12px 12px 0px 0px for modal tops only.

6. **Elevation & Shadow:** Use no shadow for flat elements. Raised elements get `0px 2px 4px rgba(0, 0, 0, 0.08)`. Elevated cards get `0px 4px 12px rgba(0, 0, 0, 0.12)`. Modals and high-priority overlays get `0px 8px 24px rgba(0, 0, 0, 0.16)` or the maximum shadow.

7. **Typography Scale:** Display at `96px`, H2 at `96px`, H3 at `24px`, body at `24px` (large) or `16px` (standard), buttons at `15px`, labels at `12px`, links at `12px`. Line height always 1.0–1.5× the font size.

8. **Form Field Rules:** All inputs use `#FFFFFF` background, `#606266` text, `1px solid #DADADD` border, `0px` border-radius, `11px 15px` padding, and `48px` height. Focus state adds `3px` blur outline in `rgba(30, 115, 190, 0.1)`. Error state changes border to `#CF2E2E` and background to `#FFFBFB`.

9. **Accessibility First:** Maintain minimum WCAG AA contrast (4.5:1 for text, 3:1 for components). Always provide focus indicators on keyboard navigation. Use semantic HTML (`<button>`, `<a>`, `<label>`). Never use color alone to convey information; pair with text or icons.

10. **Responsive Adaptation:** At 600px and below, stack all layouts to single column, reduce spacing 30–40%, maintain heading hierarchy, stack navigation to menu, keep button height at 45px, increase touch target minimums to 48px, and test all components for mobile usability.