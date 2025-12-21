# News Article Template

> **NOTE**: This file is ignored by the news index generator. Copy it and rename to create new articles.
> The underscore prefix `_` ensures it won't be included in the index.

---

Copy everything below this line to create a new article:

---

```markdown
---
id: "your-article-id"
title: "Your Article Title"
date: "2025-01-15"
category: "launcher"
summary: "A brief 1-2 sentence summary that appears in the article list."
---

Your article content goes here. Write using standard Markdown.

## Subheadings

Use `##` for main sections.

### Smaller Headings

Use `###` for subsections.

**Bold text** and *italic text* work as expected.

- Bullet points
- Work too

1. As do
2. Numbered lists

> Blockquotes are great for highlighting important info.

You can include `inline code` or code blocks:

```json
{
  "example": "code block"
}
```

### Available Categories

Use one of these for the `category` field:
- `launcher` - Launcher updates, releases, announcements
- `minecraft` - Minecraft news, updates, game changes
- `mods` - Modding news, mod spotlights, modloader updates
- `community` - Community events, contributions, highlights

### Frontmatter Fields

| Field | Required | Description |
|-------|----------|-------------|
| `id` | Yes | Unique identifier (used in URL: `/news/your-article-id`) |
| `title` | Yes | Article title |
| `date` | Yes | Publication date (YYYY-MM-DD format) |
| `category` | Yes | One of the categories listed above |
| `summary` | Yes | Brief description for article list |

### Tips

- Keep `id` lowercase with hyphens (e.g., `my-cool-article`)
- Date format must be `YYYY-MM-DD` (e.g., `2025-01-15`)
- Summary should be 1-2 sentences, no markdown
- Images can be added to `/public/news/images/` and referenced as `/news/images/your-image.png`
```
