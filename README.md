# CopenhagenJS Website

The official website for CopenhagenJS - Copenhagen's largest JavaScript community.

🌐 **Live:** [copenhagenjs-dk.github.io/website](https://copenhagenjs-dk.github.io/website/)

## Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Styling:** Tailwind CSS
- **Testing:** Jest + React Testing Library
- **Deployment:** GitHub Pages

## Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Run tests
npm test
```

## Project Structure

```
src/
├── app/                 # Pages and layouts
├── components/          # React components
├── data/               # JSON data files
│   ├── presentations.json
│   └── testimonials.json
└── lib/                # Utilities and API
```

## Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run start` | Start production server |
| `npm run lint` | Run ESLint |
| `npm test` | Run tests |
| `npm run generate:og` | Generate OG image |
| `npm run generate:favicon` | Generate favicons |

## Adding Content

### Slider Images
Add images to `public/pictures/slider/` - they're automatically included.

### Presentations
Edit `src/data/presentations.json`:
```json
{
  "title": "Talk Title",
  "speaker": "Speaker Name",
  "keyword": "matching-keyword",
  "links": [
    { "label": "Slides", "url": "https://..." }
  ]
}
```

### Testimonials
Edit `src/data/testimonials.json`

## Deployment

Automatically deploys to GitHub Pages on push to `main` branch.

<img alt="copenhagenjs-dk github io_website_" src="https://github.com/user-attachments/assets/76ce0f7f-fb4f-4391-8f6c-a4baed52f8c0" />
<img alt="copenhagenjs-dk github io_website_ (2)" src="https://github.com/user-attachments/assets/1f03fc22-5766-4f78-9439-3741f5bc896d" />

## License

MIT
