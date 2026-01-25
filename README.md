# Hugo Void

<h4 align=center>🌑 Dark | ⚪️ Light | 🔍 Minimalist | 📱 Responsive | ⚡ Fast</h4>

---

A clean, minimalistic Hugo theme with a focus on readability, simplicity, and multilingual support. Features an animated tech stack carousel and modern design.

## Features

- Responsive design with mobile-first approach
- Built with Tailwind CSS
- Clean and minimalist aesthetic
- Light & Dark mode support (manual toggle and OS-aware)
- Fast loading times
- SEO-friendly
- Blog-ready with markdown support
- Multilingual support (i18n ready)
- Enhanced mobile navigation
- Devicon integration for tech stack display
- Animated dual-row tech carousel (opposite scrolling directions)
- Configurable region display for experiences
- Data-driven content through Hugo data files

## Installation

Ensure you have Hugo Extended version v0.92.0 or newer installed.

### Add as a Git Submodule

```bash
# From your Hugo site's root directory
git submodule add <your-repo-url> themes/hugo-void
git submodule update --init --recursive
```

### Clone Repository

```bash
# From your Hugo site's root directory
git clone <your-repo-url> themes/hugo-void
```
Then, update your submodules:
```bash
git submodule update --init --recursive
```

## Configuration

1.  **Set the theme in your site's `hugo.toml`:**

    ```toml
    theme = "hugo-void"
    ```

2.  **Hugo Version Requirements:**

    This theme requires Hugo **Extended** version 0.92.0 or higher.

3.  **Multilingual Setup (Optional):**

    The theme supports multilingual sites through Hugo's i18n system. Configure your main `hugo.toml`:

    ```toml
    defaultContentLanguage = "en"
    defaultContentLanguageInSubdir = true

    [languages]
      [languages.en]
        languageName = "English"
        title = "Your Site Title"
        weight = 1
        contentDir = "content/en"
        [languages.en.menu]
          [[languages.en.menu.main]]
            name = "About"
            pageRef = "/about"
            weight = 1
          [[languages.en.menu.main]]
            name = "Projects"
            pageRef = "/projects"
            weight = 2
    ```

4.  **Data Files Configuration:**

    The theme uses Hugo data files for flexible content management. Create these in your site's `data/<language>/` directory:

    *   **Author Information** (`data/en/author.toml`):
        ```toml
        [author]
          name = "Your Name"
          location = "Your Location"
          description = "Your bio..."
          profile_image = "/images/profile.jpg"
          github = "https://github.com/username"
          twitter = "https://twitter.com/username"
          linkedin = "https://linkedin.com/in/username"
          email = "your.email@example.com"
        ```
    *   **Tech Carousel:** Create a file like `data/en/tech.toml` to customize items on the tech stack carousel. The icon class pulls from [Devicon](https://devicon.dev/). 
    
        The carousel features two rows that scroll in opposite directions (row1 scrolls left-to-right, row2 scrolls right-to-left), creating an engaging visual effect. The animation speed automatically adjusts based on the number of items (5 seconds per item), so adding more items naturally extends the loop duration while maintaining smooth scrolling. The carousel also pauses on hover for better readability.
        
        Example `data/en/tech.toml`:
        ```toml
        # Tech stack carousel - row1 scrolls left, row2 scrolls right
        # Icons from https://devicon.dev/
        
        # Top carousel row (scrolls left-to-right)
        row1 = [
          { icon = "devicon-python-plain", name = "Python" },
          { icon = "devicon-javascript-plain", name = "JavaScript" },
          { icon = "devicon-typescript-plain", name = "TypeScript" },
          { icon = "devicon-go-plain", name = "Go" },
          { icon = "devicon-rust-original", name = "Rust" },
          { icon = "devicon-java-plain", name = "Java" },
          { icon = "devicon-cplusplus-plain", name = "C++" },
          { icon = "devicon-html5-plain", name = "HTML5" }
        ]
        
        # Bottom carousel row (scrolls right-to-left)
        row2 = [
          { icon = "devicon-react-original", name = "React" },
          { icon = "devicon-nodejs-plain", name = "Node.js" },
          { icon = "devicon-docker-plain", name = "Docker" },
          { icon = "devicon-kubernetes-plain", name = "Kubernetes" },
          { icon = "devicon-postgresql-plain", name = "PostgreSQL" },
          { icon = "devicon-mongodb-plain", name = "MongoDB" },
          { icon = "devicon-redis-plain", name = "Redis" },
          { icon = "devicon-nginx-original", name = "Nginx" }
        ]
        ```
        
        **Tips:**
        - Browse [Devicon](https://devicon.dev/) for available icons and their class names
        - Each row can have a different number of items
        - Animation duration = number of items × 5 seconds per item
        - Rows don't need to be balanced in length

    *   **Experience Data:** The "Experience" section on your site (using the `experience.html` layout) is populated from a data file. Create a file such as `data/en/experience.toml` (or `.yaml`/`.json`). Each entry should detail a role or position.

        Example structure for an entry in `data/en/experience.toml`:
        ```toml
        [[experience]]
          role = "Senior Developer"
          company = "Tech Solutions Inc."
          company_link = "https://www.techsolutions.com" # Add company URL here
          period = "Jan 2020 - Present"
          country = "USA" # New field for region/country
          # description = "Longer description of the role..." # Optional detailed description
          responsibilities = [
            "Developed and maintained web applications.",
            "Collaborated with cross-functional teams.",
            "Led junior developers."
          ]
          technologies = ["Go", "Docker", "Kubernetes", "React"]
        
        [[experience]]
          role = "Software Engineer"
          company = "Innovate LLC"
          # company_link = "" # Omit or leave blank if no link
          period = "Jun 2018 - Dec 2019"
          country = "Canada"
          responsibilities = [
            "Contributed to full-stack development projects.",
            "Participated in code reviews and agile sprints."
          ]
          technologies = ["Python", "Django", "PostgreSQL"]
        ```
        Ensure you have a similar file for each language you support (e.g., `data/es/experience.toml`). The `experience.html` layout in the theme will automatically pick up the data for the current language.

        **Adding Company Links:**
        This site supports displaying clickable links for companies in the "Experience" section.
        - To add a link, include the `company_link` field with the URL in the respective experience entry within your `data/<language_code>/experience.yaml` (or `.json`/`.toml`) file. For example, you would update `data/en/experience.yaml`, `data/es/experience.yaml`, and `data/fr/experience.yaml` if you support English, Spanish, and French respectively.
        - If a `company_link` is provided, the company name will be a hyperlink. Otherwise, it will be plain text.
        - Styling: Links match the site's theme (grey, turning blue on hover). An external link icon is automatically added.
        - No template changes are needed; the layouts already support this.
        Remember to replace `<language_code>` with the actual language code (e.g., `en`, `es`, `fr`).

## Content Structure

The theme generally expects a standard Hugo content structure. For multilingual sites, organize content into language-specific subdirectories as defined in your `hugo.toml`'s `contentDir` for each language.

Example:
```
content/
├── en/                 # English content
│   ├── _index.md       # Homepage content for English
│   ├── about.md
│   ├── blogs/
│   │   ├── _index.md
│   │   └── my-first-blog.md
│   └── projects/
│       ├── _index.md
│       └── project-a.md
├── es/                 # Spanish content
│   ├── _index.md       # Homepage content for Spanish
│   ├── about.md
│   └── blogs/
│       ├── _index.md
│       └── mi-primer-blog.md
└── fr/                 # French content
    ├── _index.md       # Homepage content for French
    ├── about.md
    └── blogs/
        ├── _index.md
        └── mon-premier-blog.md
```

## Front Matter Examples

### Blog Post

```yaml
---
title: "My First Post"
date: 2023-03-15T10:30:00+05:30 # Or your local timezone
draft: false
tags: ["hugo", "web development"]
categories: ["tutorials"]
description: "A brief description of your post for SEO and previews."
# For multilingual posts, ensure the filename is the same across languages
# e.g., content/en/blogs/my-post.md and content/es/blogs/my-post.md
# Hugo will link them as translations.
---

Your post content here...
```

### Static Page (e.g., About, Contact)

```yaml
---
title: "About Me"
date: 2023-03-15T10:30:00+05:30
draft: false
menu: "main" # Optional: if you want it to appear in the main menu configured in hugo.toml
layout: "single" # Or specific layout if defined
description: "A brief description of the page."
---

Page content here...
```

## Customization

You can customize the theme:

-   **Override Templates:** Copy any template file from `themes/hugo-noir/layouts/` into your site's `layouts/` directory (maintaining the same subdirectory structure) and modify it.
-   **Custom CSS:**
    -   For minor CSS overrides, you can create `assets/css/custom.css` in your site's root. The theme will attempt to load this.
    -   For more extensive changes, you might want to fork the theme or modify its Tailwind CSS configuration (`themes/hugo-noir/tailwind.config.js`) and rebuild the theme's CSS.
-   **Static Assets:** Place your own static assets (images, fonts) in your site's `static/` directory.
-   **Partials:** Override or extend partials found in `themes/hugo-noir/layouts/partials/` by creating files with the same name in your site's `layouts/partials/` directory.

## Theme Metadata (`theme.toml`) (for Hugo Themes Showcase)

For submission to themes.gohugo.io, your theme needs a `theme.toml` file in its root directory (`themes/hugo-noir/theme.toml`).

Example `themes/hugo-noir/theme.toml`:
```toml
name = "Hugo Noir"
license = "MIT" # Or your chosen license
licenselink = "https://github.com/prxshetty/hugo-noir/blob/main/LICENSE" # Link to the theme's license file
description = "A clean, minimalistic, and multilingual theme for Hugo, focusing on readability and simplicity. Built with Tailwind CSS and offering dark mode."
version = "2.0.0" # Theme version

homepage = "https://github.com/prxshetty/hugo-noir/" # Theme's source repository
demosite = "" # URL to a live demo of your theme

tags = ["blog", "minimal", "responsive", "dark mode", "tailwind", "multilingual", "personal", "portfolio"]
features = ["dark mode", "multilingual", "tailwind css", "responsive", "contact form", "devicons"] # Key features

[author]
  name = "John Doe" # Your name
  homepage = "https://johndoe.com" # Your website

# If porting from another theme, add [original] section
# [original]
#   author = "Original Author Name"
#   homepage = "Link to original theme's homepage"
#   repo = "Link to original theme's repository"

[module]
  [module.hugoVersion]
    extended = true
    min = "0.92.0"
```

## Contributing

Contributions are welcome! Please feel free to open an issue or submit a pull request.

## License

This theme is released under the MIT License. See the [LICENSE](https://github.com/prxshetty/hugo-noir/blob/main/LICENSE) file for details.

## Credits

-   [Hugo](https://gohugo.io/)
-   [Tailwind CSS](https://tailwindcss.com/)
-   Devicons used in the theme are from [devicons/devicon](https://github.com/devicons/devicon). 
