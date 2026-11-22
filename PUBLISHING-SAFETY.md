# Publishing safety for mayoracek.com

This GitHub repository is public. Publish only code, assets, and documents intended for public distribution.

- Never commit credentials, API keys, OAuth tokens, .env files, confidential client information, operational IDs, internal screenshots or private documents.
- Get client approval before publishing identifying case studies or outcome claims.
- The downloadable public CV excludes a personal telephone number and detailed client implementation specifics.
- The Resume page and public CV are intentionally accessible. The professional contact email is public.
- Release QA checks rendered pages, local links, the PDF, and selected credential patterns. GitHub Actions now also executes a pinned Gitleaks CLI scan on the full fetched Git history and the built `dist/` files before deployment. The scan runs on PRs and on `main` deployment and never prints matching values into public logs.
- Passing automated scanning reduces risk but is not proof that every private or confidential value was absent. Review GitHub's secret-scanning alerts and source history separately.
- Replacing a public file does not erase historical commits. Historical credential exposure requires a separate assessment and rotation when applicable.
