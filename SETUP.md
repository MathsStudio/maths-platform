# Website set-up (branch `website`)

Needs three things in Cloudflare, plus an email service:

1. **Database**: Workers & Pages > D1 > Create database named `mathsstudio`. Copy its ID into `wrangler.jsonc` as `"database_id"`. Tables are created automatically on first use.
2. **Secrets** (Worker > Settings > Variables and secrets): `RESEND_API_KEY` (from resend.com, after adding the domain mathsstudio.co.uk) and `ADMIN_PASSWORD` (any long password, opens /admin).
3. **Variable** `FROM_EMAIL` is set in `wrangler.jsonc` (`MathsStudio <hello@mathsstudio.co.uk>`). The domain must be verified in Resend.

Test the logic without Cloudflare: see `tests/` (run with `node --experimental-sqlite tests/test.mjs`).
