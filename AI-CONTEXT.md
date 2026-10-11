## Project Structure

The repository root is:

`plant-shop/`

The actual Next.js application is located inside:

`plant-shop/frontend/`

The AI project documentation is located at the repository root:

- `AI_CONTEXT.md`
- `PROJECT.md`
- `TASKS.md`

When modifying the application, work primarily inside the `frontend/` directory.

Do not move the documentation files into `frontend/`.

Do not create a second Next.js project.

# Plant Shop — AI Development Context

## 1. Project

This is a small plant shop web application built as a school Business Application project and also as a personal React/Next.js learning project.

The application should feel like a real, polished plant shop rather than a generic school website.

The main purpose is:

> Help people discover plants that fit their lifestyle and learn how to care for them properly.

---

## 2. Current Technology

The project is already created and working.

Use:

- Next.js
- React
- TypeScript
- TSX
- Tailwind CSS
- Next.js App Router
- ESLint

Do NOT migrate the project to JavaScript.

Do NOT introduce another frontend framework.

Do NOT replace Next.js.

Do NOT introduce a backend/database unless explicitly requested.

---

## 3. Current Project State

The development environment is already working.

The homepage has already been created and currently contains:

- Navigation
- Hero section
- Plant Shop section
- Plant cards
- Plant Finder section
- Plant Care section
- Footer

The visual direction is:

> Calm botanical

The design should feel:

- Calm
- Natural
- Clean
- Modern
- Professional
- Warm
- Easy to understand

Avoid:

- Excessive animations
- Overly playful UI
- Neon colors
- Excessive gradients
- Clutter
- Unnecessary decorative elements
- Generic AI-generated-looking layouts

---

# 4. Core Features

The application has exactly three main features.

## Feature 1 — Plant Shop

Users can:

- Browse plants
- Search plants
- Filter plants
- View plant cards
- Open a plant's details
- See plant price
- Learn basic information about the plant

The shop should feel like an actual small plant store.

---

## Feature 2 — Plant Finder

The Plant Finder helps users discover plants appropriate for their lifestyle.

The main experience is:

> Build Your Plant Profile

The user answers questions such as:

- Where will the plant live?
- How much sunlight is available?
- How much time can the user spend caring for plants?
- Is the user a beginner?
- What type of plant does the user prefer?
- What kind of environment does the user have?

The system then recommends plants.

The recommendation system does NOT need AI.

Use understandable rule-based recommendation logic unless AI is explicitly requested later.

Example:

High sunlight + beginner + low maintenance
→ recommend suitable plants.

---

## Feature 3 — Plant Care

Users can learn how to care for plants.

Care information may include:

- Watering
- Sunlight
- Soil
- Temperature
- Humidity
- Common problems
- Basic care instructions

The main interaction is:

> What should I do?

There should eventually be an interactive virtual plant.

Example concept:

Healthy plant
→ normal appearance

Needs water
→ drooping appearance

Watered
→ plant recovers

This should initially be implemented using React state and CSS/SVG rather than an unnecessarily complex 3D system.

---

# 5. Main User Experience

This is the main website flow:

HOME
↓
EXPLORE / PLANT FINDER
↓
RECOMMENDATION
↓
PLANT DETAIL
↓
PLANT CARE
↓
SHOP

The experience should feel like:

> Discover → Find → Learn → Shop

Do not break this flow without a strong reason.

---

# 6. Development Phases

## PHASE 1 — Environment

COMPLETED.

- Node.js
- npm
- Next.js
- React
- TypeScript
- Tailwind CSS
- ESLint
- App Router
- Project setup

---

## PHASE 2 — Foundation

PARTIALLY COMPLETED.

Already implemented:

- Initial homepage
- Navigation
- Hero
- Plant Shop preview
- Plant cards
- Plant Finder section
- Plant Care section
- Footer
- Initial responsive styling

Next:

- Break large page into reusable components
- Organize components properly
- Create reusable PlantCard
- Create plant data structure
- Establish clean TypeScript types
- Establish reusable layout elements
- Prepare routes/pages

Do not over-engineer the folder structure.

---

# PHASE 3 — Homepage

Improve the homepage into a polished real website.

Include:

- Navigation
- Hero
- Plant discovery
- Featured plants
- Plant Finder entry
- Plant Care entry
- Strong calls to action
- Footer

The homepage should guide users naturally toward:

Plant Finder → Plant Details → Plant Care → Shop

---

# PHASE 4 — Plant Shop

Build the actual shop experience.

Requirements:

- Shop page
- Plant data
- Plant cards
- Search
- Category/filter functionality
- Plant detail page
- Price
- Basic plant information
- Care summary
- Clear CTA

The shop does NOT need:

- Real payments
- Real checkout
- Real inventory management
- Authentication
- Complex ecommerce infrastructure

This is a functional school/personal project, not a production ecommerce platform.

---

# PHASE 5 — Plant Finder

Build:

- Plant Finder page
- Build Your Plant Profile
- Question-by-question interaction
- User selections
- Progress indicator
- React state
- Rule-based recommendation system
- Recommendation results
- Recommended plant cards
- Link to plant details

The recommendation system should be understandable and maintainable.

Avoid unnecessary AI.

---

# PHASE 6 — Plant Care

Build:

- Plant Care page
- Plant-specific care information
- Watering
- Sunlight
- Soil
- Environment
- Common problems
- "What should I do?" interaction
- Interactive virtual plant

The virtual plant should react to user actions.

Prefer:

React state

- CSS/SVG

before considering more advanced animation libraries.

---

# PHASE 7 — Connect Everything

Connect the entire experience:

HOME
→ EXPLORE
→ PLANT FINDER
→ RECOMMENDATION
→ PLANT DETAIL
→ PLANT CARE
→ SHOP

Make sure:

- Navigation works
- Buttons work
- Links work
- Plant data is shared consistently
- Recommendations lead to actual plants
- Plant details lead to care information
- Shop leads to plant details
- Mobile navigation works

---

# PHASE 8 — Polish

Improve:

- Responsive design
- Typography
- Spacing
- Plant imagery
- Buttons
- Cards
- Hover states
- Focus states
- Transitions
- Accessibility
- Loading states where appropriate
- Empty states where appropriate
- Error handling
- Overall visual consistency

Animations should support the experience, not dominate it.

---

# PHASE 9 — Final Testing

Test:

- Desktop
- Mobile
- Navigation
- Shop
- Search
- Filters
- Plant details
- Plant Finder
- Recommendation logic
- Plant Care
- Interactive virtual plant
- Broken links
- Console errors
- TypeScript errors
- Responsive layout

Remove unnecessary code and fix obvious issues.

---

# PHASE 10 — School Submission

Prepare:

- Website screenshots
- Source code
- Final testing
- Project conclusion
- Required documentation

The final website should demonstrate:

- Business application
- Interactivity
- Dynamic behavior
- React usage
- Next.js usage
- TypeScript
- Tailwind CSS
- Good UI/UX

---

# 7. Development Rules

## Rule 1 — Build, don't over-plan

Implement the current phase before discussing future complexity.

Do not spend unnecessary time designing features that are not currently being built.

---

## Rule 2 — Keep the MVP focused

The core application is:

1. Plant Shop
2. Plant Finder
3. Plant Care

Do not introduce major new features without approval.

---

## Rule 3 — Avoid unnecessary complexity

Do not add:

- Authentication
- Database
- Backend
- Payments
- AI
- Chatbots
- Social features
- Admin dashboard
- Real-time inventory
- Complex state management
- External APIs

unless explicitly requested.

---

## Rule 4 — Reuse components

Prefer reusable components such as:

- Navbar
- Button
- PlantCard
- PlantGrid
- PlantImage
- PlantCareSection
- FinderQuestion
- RecommendationCard

Avoid duplicating UI unnecessarily.

---

## Rule 5 — TypeScript

Use proper TypeScript types.

Do not solve TypeScript errors by using `any` unless there is a genuinely justified reason.

Prefer explicit interfaces/types.

---

## Rule 6 — Keep code understandable

This project is also being used to learn.

Prefer clear code over clever code.

Avoid unnecessary abstractions.

---

## Rule 7 — Preserve the visual direction

The design is:

> Calm botanical.

Maintain visual consistency across all pages.

---

## Rule 8 — Don't replace working code unnecessarily

When modifying an existing feature, preserve working functionality unless there is a clear reason to change it.

---

# 8. Future Ideas — NOT CURRENT MVP

These ideas may be considered later:

- Personal plant collection
- Care reminders
- Plant journal
- Community
- Charity/tree planting
- Plant photo identification
- AI plant identification
- Mobile application
- Advanced recommendation system

Do not implement these during the current MVP unless explicitly requested.

---

# 9. How the AI Should Work

When implementing a feature:

1. Inspect the existing project.
2. Understand the current implementation.
3. Make the smallest clean change needed.
4. Keep existing functionality working.
5. Run/check for TypeScript errors.
6. Check the UI.
7. Fix problems before moving forward.

Do not rewrite the entire project when a small change is sufficient.

The AI should act as a development agent, not just a code generator.

When a technical decision is necessary, prefer the simplest maintainable solution that fits the current project.
