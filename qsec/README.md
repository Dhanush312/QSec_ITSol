# QSec IT Solutions — GitHub Pages

- **Live URL:** https://Dhanush312.github.io/QSec_ITSol/

Deployment notes

- Published using the `gh-pages` package which pushes the built `dist/` folder to the `gh-pages` branch.
- If the URL returns a 404, wait a few minutes for GitHub Pages to propagate and clear your browser cache.

Quick deploy commands (run from the `qsec/` folder):

```bash
npm install
npm run build
npm run deploy
```

Verify locally:

```bash
# serve the built files (npm package `serve` or similar)
npx serve dist
```

If you want, I can verify repository Pages settings or re-run the deploy.  
