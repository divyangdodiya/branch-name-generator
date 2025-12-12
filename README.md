# 🌿 Branch Name Generator

A modern, developer-friendly web application for generating standardized Git branch names following conventional commit standards. Built with Next.js 16, React 19, and Shadcn UI.

## ✨ Features

- **🎯 Conventional Commits Support**: Generate branch names following industry-standard conventional commit types
- **🎫 Ticket ID Integration**: Add Jira, Zoho, or any task management identifier to branch names
- **⚡ Real-time Generation**: See your branch name update instantly as you type
- **📋 One-Click Copy**: Copy generated branch names to clipboard with visual feedback
- **🎨 Modern UI**: Clean, professional interface inspired by Shadcn UI design system
- **🌓 Theme Support**: Light, dark, and system theme modes with persistence
- **🔧 Customizable Separators**: Choose between hyphens (-) or underscores (_)
- **📱 Responsive Design**: Works seamlessly on desktop and mobile devices
- **♿ Accessible**: Built with accessibility in mind using Radix UI primitives

## 🎯 Purpose

This tool helps developers maintain consistent branch naming conventions across their projects by:
- Enforcing conventional commit standards (feature, bugfix, hotfix, etc.)
- Automatically normalizing descriptions (lowercase, special character removal)
- Integrating ticket IDs for better traceability
- Providing a quick, visual way to generate proper branch names

## 🚀 Getting Started

### Prerequisites

- **Node.js**: v24.12.0 LTS or higher
- **npm**: v10.x or higher

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd branch-name-generator
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

### Build for Production

```bash
npm run build
npm start
```

## 📖 Usage

1. **Select Branch Type**: Choose from conventional commit types (feature, bugfix, hotfix, docs, etc.)
2. **Add Ticket ID** (optional): Enter your Jira, Zoho, or task management identifier
3. **Enter Description**: Describe what the branch is for
4. **Choose Separator**: Pick hyphen (-) or underscore (_)
5. **Copy**: Click the copy button to copy the generated branch name

### Example Output

**Input:**
- Type: `feature`
- Ticket ID: `JIRA-1234`
- Description: `Add user authentication`
- Separator: `-`

**Generated Branch:**
```
feature/JIRA-1234-add-user-authentication
```

## 🛠️ Tech Stack

This project is built with modern, cutting-edge technologies:

### Core Framework
- **[Next.js 16.0.10](https://nextjs.org/)** - React framework with App Router and Turbopack
- **[React 19.2.3](https://react.dev/)** - Latest React with improved hooks and concurrent features
- **[TypeScript 5.9.3](https://www.typescriptlang.org/)** - Static type checking and enhanced developer experience

### Styling & UI
- **[Tailwind CSS 3.4.15](https://tailwindcss.com/)** - Utility-first CSS framework
- **[Shadcn UI](https://ui.shadcn.com/)** - Re-usable component library built on Radix UI
- **[Radix UI](https://www.radix-ui.com/)** - Unstyled, accessible component primitives
  - `@radix-ui/react-label` - Label component
  - `@radix-ui/react-select` - Select dropdown component
  - `@radix-ui/react-slot` - Slot component for composition
- **[Class Variance Authority](https://cva.style/)** - CSS variant management
- **[clsx](https://github.com/lukeed/clsx)** - Utility for constructing className strings
- **[tailwind-merge](https://github.com/dcastil/tailwind-merge)** - Merge Tailwind CSS classes without conflicts
- **[tailwindcss-animate](https://github.com/jamiebuilds/tailwindcss-animate)** - Animation utilities for Tailwind

### Icons & Theme
- **[Lucide React](https://lucide.dev/)** - Beautiful & consistent icon toolkit
- **[next-themes](https://github.com/pacocoursey/next-themes)** - Theme management for Next.js

### Typography
- **[Google Fonts](https://fonts.google.com/)**
  - **Inter** - UI text and body content
  - **JetBrains Mono** - Monospace font for code display

### Development Tools
- **[ESLint](https://eslint.org/)** - Linting and code quality
- **[PostCSS](https://postcss.org/)** - CSS transformation tool
- **[Autoprefixer](https://github.com/postcss/autoprefixer)** - Automatic vendor prefixing

## 📁 Project Structure

```
branch-name-generator/
├── app/
│   ├── globals.css          # Global styles with Tailwind directives
│   ├── layout.tsx            # Root layout with theme provider
│   └── page.tsx              # Home page
├── components/
│   ├── ui/                   # Shadcn UI components
│   │   ├── button.tsx
│   │   ├── card.tsx
│   │   ├── input.tsx
│   │   ├── label.tsx
│   │   └── select.tsx
│   ├── BranchGenerator.tsx   # Main generator component
│   ├── theme-provider.tsx    # Theme context provider
│   └── theme-toggle.tsx      # Theme switcher component
├── lib/
│   ├── branch-generator.ts   # Branch name generation logic
│   ├── types.ts              # TypeScript type definitions
│   └── utils.ts              # Utility functions
├── public/                   # Static assets
├── tailwind.config.ts        # Tailwind configuration
├── tsconfig.json             # TypeScript configuration
└── package.json              # Dependencies and scripts
```

## 🎨 Supported Branch Types

Based on [Conventional Commits](https://www.conventionalcommits.org/):

- **feature**: New features
- **bugfix**: Bug fixes
- **hotfix**: Critical production fixes
- **docs**: Documentation changes
- **style**: Code style changes (formatting, etc.)
- **refactor**: Code refactoring
- **performance**: Performance improvements
- **test**: Adding or updating tests
- **build**: Build system changes
- **ci**: CI/CD configuration changes
- **chore**: Maintenance tasks
- **revert**: Reverting previous commits

## 📄 License

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details.

```
MIT License

Copyright (c) 2025 Divyang Dodiya

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```

## 🙏 Credits

Special thanks to all the open-source projects and their maintainers that made this project possible:

- **Vercel** - For Next.js and deployment platform
- **Meta** - For React
- **Tailwind Labs** - For Tailwind CSS
- **shadcn** - For the beautiful component system
- **Radix UI Team** - For accessible component primitives
- **Pacocoursey** - For next-themes
- **Lucide Icons** - For the icon set
- **TypeScript Team** - For TypeScript

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the issues page.

## 👨‍💻 Author

**Divyang Dodiya**

---

Made with ❤️ using Next.js 16 and React 19
