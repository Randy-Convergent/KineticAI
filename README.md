# Kinetic - AI Automation Agency Website

![Next.js](https://img.shields.io/badge/next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white)![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)![Tailwind CSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white)![Framer Motion](https://img.shields.io/badge/Framer-black?style=for-the-badge&logo=framer&logoColor=blue)![PNPM](https://img.shields.io/badge/pnpm-F69220?style=for-the-badge&logo=pnpm&logoColor=white)

This is the official codebase for the Kinetic website, a modern, responsive, and performant marketing site built with Next.js 14 and Tailwind CSS. The project is designed to showcase the services of an AI Automation Agency, build trust with potential clients through a content-rich blog, and convert visitors into leads.

## Features

- **Modern Tech Stack:** Built with Next.js 14 (App Router) for optimal performance and SEO.
- **Dynamic Content:** Features a powerful, easy-to-use blog system powered by local Markdown (`.mdx`) files.
- **Engaging UI/UX:** Enriched with animations using Framer Motion and Lottie.
- **Fully Responsive:** A consistent experience across all devices, from mobile to desktop.
- **Component-Based Architecture:** Built with reusable and modular components for easy maintenance and scalability.

## Getting Started

Follow these instructions to get the project up and running on your local machine for development and testing purposes.

### Prerequisites

- [Node.js](https://nodejs.org/en/) (v18.0 or later recommended)
- [pnpm](https://pnpm.io/) package manager. If you don't have it, install it globally with:
  ```bash
  npm install -g pnpm
  ```

### Installation

1.  **Clone the repository:**

    ```bash
    git clone https://your-repository-url.git
    cd your-project-directory
    ```

2.  **Install dependencies:**
    This project uses `pnpm` for package management.

    ```bash
    pnpm install
    ```

3.  **Run the development server:**
    ```bash
    pnpm dev
    ```

The application should now be running on [http://localhost:3000](http://localhost:3000).

## ✍️ Content Management: The Blog System

This project uses a simple and powerful system for managing blog posts using local Markdown files. This means you don't need a complex CMS.

### How It Works

The magic happens in the `/src/common/lib/blog.js` file. This utility reads all `.mdx` files from the `/src/content/blog/` directory, parses their "frontmatter" (the metadata at the top of the file), and converts the Markdown content into HTML. This data is then used to automatically generate the blog listing and individual post pages.

### How to Add a New Blog Post (3 Simple Steps)

1.  **Create a New File:**
    Navigate to the `/src/content/blog/` directory. Create a new file with the `.mdx` extension. The filename will be used as the URL slug.

    - ✅ **Good:** `my-first-awesome-post.mdx` -> `/blog/my-first-awesome-post`
    - ❌ **Bad:** `My First Post.mdx` (avoid spaces and capital letters)

2.  **Add the Frontmatter:**
    At the very top of your new file, add a "frontmatter" block. This is where you define all the metadata for the post. **Copy and paste the template below** and fill in your details.

    ```mdx
    ---
    title: "This is the Title of Your New Blog Post"
    date: "YYYY-MM-DD"
    slug: "the-url-slug-for-this-post"
    author: "The Kinetic Team"
    coverImage: "/images/blog/your-cover-image.jpg"
    excerpt: "A short, compelling summary of the article (1-2 sentences). This will appear on the blog preview cards."
    tags: ["Tag One", "Tag Two", "Relevant Topic"]
    ---

    <!-- Your blog content starts here, written in Markdown... -->
    ```

    **Important:** The `coverImage` path must point to an image located in the `/public/images/blog/` folder or use external URL for images as I did.

3.  **Write Your Content:**
    Below the final `---` of the frontmatter, you can start writing your article using standard Markdown syntax. You can use headings, lists, bold text, links, etc.

That's it! Save the file, and the new post will automatically appear on your blog page.

## 📂 Project Structure

Here is an overview of the most important folders and files in the project:

```
.
├── src/
│   ├── app/                    # Next.js 14 App Router (Routing)
│   │   ├── about/
│   │   ├── blog/
│   │   │   ├── [slug]/page.jsx # Dynamic blog post page
│   │   │   └── page.jsx        # Main blog listing page
│   │   ├── contact/
│   │   ├── faq/
│   │   ├── pricing/
│   │   ├── services/
│   │   ├── terms/
│   │   ├── layout.jsx          # Root layout
│   │   └── not-found.jsx       # Custom 404 error page
│   │
│   ├── common/
│   │   ├── component/          # Reusable, generic components (e.g., Buttons, H1)
│   │   ├── constant/           # Static data arrays (e.g., testimonials, pricing)
│   │   ├── hooks/              # Custom React hooks
│   │   ├── lib/                # Core utilities (e.g., blog.js)
│   │   └── module/             # Feature-specific components (e.g., Hero, About section)
│   │
│   └── content/
│       └── blog/               # All blog posts live here as .mdx files
│
├── public/                     # Static assets (images, fonts, Lottie files)
│
└── tailwind.config.js          # Tailwind CSS configuration
└── next.config.mjs       		# Next.js configuration
```
