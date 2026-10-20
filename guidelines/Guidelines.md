# eBay DatAI Design System Guidelines

## Overview
This document outlines the design system guidelines for the eBay DatAI application, ensuring consistency across all UI components and pages.

---

## Typography System

### Font Family
All text should use the **Geist** font family with the following variants:
- **Geist:Regular** - For body text and descriptions
- **Geist:Medium** - For buttons, labels, and emphasized text
- **Geist:SemiBold** - For headings and titles

### Font Sizes and Usage

#### Page Titles (H1)
```css
font-family: 'Geist:SemiBold', sans-serif
font-weight: 600 (semibold)
font-size: 24px
line-height: 1.5
letter-spacing: 0.12px
color: #0a0a0a
```

#### Section Headers (H2)
```css
font-family: 'Geist:SemiBold', sans-serif
font-weight: 600 (semibold)
font-size: 20px
line-height: 1.5
letter-spacing: 0.1px
color: #0a0a0a
```

#### Card Titles / List Item Titles
```css
font-family: 'Geist:SemiBold', sans-serif
font-weight: 600 (semibold)
font-size: 14px
line-height: 1.5
letter-spacing: 0.07px
color: #0a0a0a
```

#### Buttons and Labels
```css
font-family: 'Geist:Medium', sans-serif
font-weight: 500 (medium)
font-size: 14px
line-height: 1.5
letter-spacing: 0.07px
color: varies by component
```

#### Body Text (Primary)
```css
font-family: 'Geist:Regular', sans-serif
font-weight: 400 (regular)
font-size: 14px
line-height: 1.5
letter-spacing: 0.07px
color: #0a0a0a
```

#### Body Text (Secondary)
```css
font-family: 'Geist:Regular', sans-serif
font-weight: 400 (regular)
font-size: 12px
line-height: 1.5
letter-spacing: 0.06px
color: #737373
```

#### Table Headers / Uppercase Labels
```css
font-family: 'Geist:Medium', sans-serif
font-weight: 500 (medium)
font-size: 12px
line-height: 1.5
letter-spacing: 0.48px
text-transform: uppercase
color: #737373
```

---

## Color System

### Text Colors
- **Primary Text**: `#0a0a0a` - Main headings, body text, primary content
- **Secondary Text**: `#737373` - Descriptions, labels, secondary information
- **Muted Text**: `#6b7280` - Placeholder text, disabled states

### Background Colors
- **White**: `#ffffff` - Main background, cards
- **Light Gray**: `#fafafa` - Table headers, hover states, section backgrounds
- **Medium Gray**: `#f5f5f5` - Tab backgrounds, inactive states
- **Neutral**: `#f3f4f6` - Selected states, pagination active

### Border Colors
- **Default**: `#e5e5e5` - Standard borders for inputs, cards, tables
- **Subtle**: `#e5e7eb` - Very light borders

### Brand Colors
- **Primary Blue**: `#0968F6` - Links, primary actions, highlights
- **Success Green**: `#065f46` (text), `#d1fae5` (background) - Success badges
- **Warning Yellow**: Used in status indicators
- **Error Red**: Used for error states

### Button Colors
- **Primary Button Color**: `#0968F6` (Blue) - **MANDATORY** for all primary action buttons including:
  - "Create New" buttons
  - "New" buttons  
  - "Add Account" buttons
  - All main CTAs (Call-to-Actions)
  - Any button that represents the primary action on a page
- **Secondary Button Background**: `#ffffff` (White) - Used for secondary action buttons with border

**Important**: All primary action buttons across the application MUST use `#0968F6` as the background color to maintain design consistency.

**Button Text Convention**: 
- **ALWAYS use "New"** for all creation/add buttons across the application (e.g., creating data models, notebooks, pipelines, etc.)
- Do NOT use variations like "Create New", "Add New", "+ New", or other alternatives
- This ensures consistency across all pages and forms
- Exception: Only use alternative text if the context specifically requires clarification (very rare)

### Shadow
- **Subtle Shadow**: `box-shadow: 0px 1px 2px 0px rgba(0,0,0,0.05)`
  - Used on: Buttons, inputs, cards, dropdowns

---

## Component Guidelines

### Buttons

#### Primary Button (Blue)
```css
background: #0968F6
color: #fafafa
border-radius: 8px
padding: 7.5px 16px
min-height: 36px
font: Geist:Medium 14px
letter-spacing: 0.07px
```

#### Secondary Button (White with Border)
```css
background: #ffffff
color: #0a0a0a
border: 1px solid #e5e5e5
border-radius: 8px
padding: 7.5px 16px
min-height: 36px
font: Geist:Medium 14px
letter-spacing: 0.07px
box-shadow: 0px 1px 2px 0px rgba(0,0,0,0.05)
```

### Tabs

#### Tab Container
```css
background: #f5f5f5
padding: 3px
border-radius: 10px
```

#### Active Tab
```css
background: #ffffff
color: #0a0a0a
padding: 7px 16px
border-radius: 8px
box-shadow: 0px 1px 2px 0px rgba(0,0,0,0.05)
font: Geist:Medium 14px
```

#### Inactive Tab
```css
background: transparent
color: #737373
padding: 7px 16px
border-radius: 8px
font: Geist:Medium 14px
```

### Input Fields

#### Search/Text Input
```css
background: #ffffff
border: 1px solid #e5e5e5
border-radius: 8px
padding: 7.5px 12px
min-height: 36px
font: Geist:Medium 14px
letter-spacing: 0.07px
box-shadow: 0px 1px 2px 0px rgba(0,0,0,0.05)
```

### Tables

#### Table Container
```css
border: 1px solid #e5e5e5
border-radius: 12px
overflow: hidden
```

#### Table Header
```css
background: #fafafa
border-bottom: 1px solid #e5e5e5
padding: 12px 24px
font: Geist:Medium 12px
color: #737373
letter-spacing: 0.48px
text-transform: uppercase
```

#### Table Row
```css
padding: 16px 24px
border-bottom: 1px solid #e5e5e5
```

#### Table Row Hover
```css
background: #fafafa
transition: background-color 0.2s
```

### Cards

#### Standard Card
```css
background: #ffffff
border: 1px solid #e5e5e5
border-radius: 12px
padding: 16px
box-shadow: 0px 1px 2px 0px rgba(0,0,0,0.05)
```

### Status Badges

#### Success Badge
```css
background: #d1fae5
color: #065f46
padding: 4px 10px
border-radius: 9999px (full)
font: Geist:Medium 12px
```

---

## Layout Guidelines

### Page Structure
- **Padding**: Main content area should have `px-8 py-6` (32px horizontal, 24px vertical)
- **Section Spacing**: Use `mb-6` or `mb-8` (24px or 32px) between major sections
- **Component Gaps**: Use `gap-4` (16px) for related components
- **Grid Spacing**: Use `gap-4` (16px) for card grids

### Responsive Grid
- Use CSS Grid with explicit column definitions
- Example: `grid-cols-[2fr_1fr_1fr_1fr_1fr]` for table layouts
- Use `grid-cols-4` for stat cards

### Spacing Scale
- **xs**: 4px (`gap-1`)
- **sm**: 8px (`gap-2`)
- **md**: 16px (`gap-4`)
- **lg**: 24px (`gap-6`)
- **xl**: 32px (`gap-8`)

---

## Icon Guidelines
- Use **lucide-react** for icons
- Standard icon size: `16px` for buttons and inputs
- Icon color should match text color
- Maintain consistent stroke width across icons

---

## Tooltip Guidelines

### Purpose
Tooltips are **MANDATORY** for all icon buttons to help new users quickly understand product functionality and improve the overall user experience.

### When to Use Tooltips
- **All Icon Buttons**: Every button with only an icon (no text label) MUST have a tooltip
- **Toolbar Buttons**: Left and right toolbars, DAG action buttons, all require tooltips
- **Action Icons**: Any clickable icon in the interface should provide contextual information

### Tooltip Design Specifications

#### Visual Style
```css
background: #0a0a0a
color: #ffffff
font-family: 'Geist:Medium', sans-serif
font-size: 12px
padding: 8px (vertical) 8px (horizontal)
border-radius: 4px
white-space: nowrap
z-index: 50
```

#### Positioning Rules
- **Right-side toolbars**: Tooltip appears on the LEFT of the button
  - Use: `right-full mr-2` (8px spacing from button)
  - Arrow points right: `border-l-[#0a0a0a]`
  
- **Left-side toolbars**: Tooltip appears on the RIGHT of the button
  - Use: `left-full ml-2` (8px spacing from button)
  - Arrow points left: `border-r-[#0a0a0a]`

- **Vertical centering**: Always use `top-1/2 -translate-y-1/2`

#### Animation & Interaction
```css
opacity: 0 (default hidden state)
opacity: 100 (on hover)
transition: opacity 150ms
pointer-events: none (tooltip doesn't block interaction)
```

- **Show delay**: Immediate (no delay for fast response)
- **Hide delay**: Immediate (fade out in 150ms)
- **Trigger**: CSS `:hover` on parent button via `group-hover:opacity-100`

#### Arrow Design
```css
/* Arrow is a CSS triangle using borders */
border: 4px solid transparent
border-[direction]: 4px solid #0a0a0a
position: absolute
/* Positioned to point toward the button */
```

### Implementation Pattern

#### React Component Structure
```tsx
interface TooltipButtonProps {
  children: React.ReactNode;
  tooltip: string;
  onClick?: () => void;
  className?: string;
}

function TooltipButton({ children, tooltip, onClick, className }: TooltipButtonProps) {
  return (
    <div className="relative group">
      <button onClick={onClick} className={className}>
        {children}
      </button>
      {/* Tooltip */}
      <div className="absolute [positioning] px-2 py-1 bg-[#0a0a0a] text-white text-[12px] font-['Geist:Medium',sans-serif] rounded-[4px] whitespace-nowrap pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-150 z-50">
        {tooltip}
        {/* Arrow */}
        <div className="absolute [arrow-positioning] border-4 border-transparent border-[direction]-[#0a0a0a]" />
      </div>
    </div>
  );
}
```

### Tooltip Content Guidelines
1. **Be concise**: Use short, clear descriptions (2-5 words ideal)
2. **Include shortcuts**: Add keyboard shortcuts when applicable (e.g., "Pointer Mode (V)")
3. **Action-oriented**: Use verbs when describing actions (e.g., "Add Node", "Organize Node")
4. **Consistent naming**: Use the same terminology as in documentation and UI

### Examples of Good Tooltip Text
- ✅ "Add Node"
- ✅ "Pointer Mode (V)"
- ✅ "Organize Node (⌘O)"
- ✅ "Save Changes (⌘S)"
- ✅ "Export Data"

### Examples to Avoid
- ❌ "Click here to add a node" (too verbose)
- ❌ "Node" (too vague)
- ❌ "+" (not descriptive)
- ❌ No tooltip at all on icon buttons

### Accessibility Considerations
- Tooltips provide essential context for icon-only buttons
- Helpful for new users learning the interface
- Assists users who may not recognize icon meanings
- Provides keyboard shortcut discovery

### Technical Requirements
- Use CSS `group` and `group-hover` utilities for performance
- Keep z-index at 50 to ensure visibility above most elements
- Always use `pointer-events-none` to prevent tooltip from blocking interactions
- Ensure tooltip doesn't overflow viewport edges

### Cursor Behavior for Icon Buttons
**IMPORTANT**: Icon buttons must display the appropriate cursor style based on their functionality:

#### Clickable Buttons (Hand Mode)
- Use `cursor-pointer` class for buttons with **active click functionality**
- Examples of clickable buttons:
  - Info button (opens drawer/panel)
  - Save button (saves data)
  - Delete button (removes items)
  - Any button that triggers an immediate action
  
```tsx
// Example: Clickable button
<button 
  onClick={handleClick}
  className="... cursor-pointer"
>
  <Icon />
</button>
```

#### Non-Interactive Buttons (Pointer Mode)
- **Do NOT add `cursor-pointer`** for buttons without click functionality
- These buttons should maintain the default cursor (pointer mode)
- Examples:
  - Disabled buttons
  - Visual indicators only
  - Future features not yet implemented
  - Placeholder buttons in design

```tsx
// Example: Non-interactive button (no cursor-pointer)
<button 
  className="..."
  disabled
>
  <Icon />
</button>
```

#### Guidelines:
1. **Only use `cursor-pointer` when the button performs an action**
2. Do not add `cursor-pointer` to all buttons by default
3. Ensure consistency: if a button looks clickable, it should be clickable
4. Visual feedback: Clickable buttons should also have hover states (e.g., `hover:bg-[#f5f5f5]`)

---

## Border Radius Standards
- **Small**: `4px` - Checkboxes, small elements
- **Medium**: `8px` - Buttons, inputs, tabs
- **Large**: `10px` - Tab containers
- **Extra Large**: `12px` - Cards, tables
- **Full**: `9999px` - Badges, status indicators

---

## Animation & Transitions
- Use `transition-colors` or `transition-all` for hover states
- Duration: 0.2s for most transitions
- Hover states: Background color change to `#fafafa` for white elements

---

## Best Practices
1. Always use the exact font-family syntax: `font-['Geist:Medium',sans-serif]`
2. Include proper letter-spacing (tracking) for all text elements
3. Maintain consistent line-height of 1.5 across all text
4. Use the exact color values specified (no approximations)
5. Apply box-shadow consistently on elevated elements
6. Keep border-radius consistent within component types
7. Use uppercase + increased letter-spacing for table headers
8. Ensure proper hover states on interactive elements
9. **MANDATORY**: All icon buttons must have tooltips for user guidance and discoverability

---

## Integration with shadcn/ui
- Use shadcn/ui components as a base: https://ui.shadcn.com/
- Primary color: Blue (#0968F6)
- Override shadcn default styles with Geist typography when needed
- Maintain consistent spacing and sizing with the design system above