# Website set-up (branch `website`)

Needs three things in Cloudflare, plus an email service:

1. **Database**: Workers & Pages > D1 > Create database named `mathsstudio`. Copy its ID into `wrangler.jsonc` as `"database_id"`. Tables are created automatically on first use.
2. **Secrets** (Worker > Settings > Variables and secrets): `RESEND_API_KEY` (from resend.com, after adding the domain mathsstudio.co.uk) and `ADMIN_PASSWORD` (any long password, opens /admin).
3. **Variable** `FROM_EMAIL` is set in `wrangler.jsonc` (`MathsStudio <info@mathsstudio.co.uk>`). The domain must be verified in Resend.

Test the logic without Cloudflare: see `tests/` (run with `node --experimental-sqlite tests/test.mjs`).

## Inbox for info@ (Cloudflare Email Routing)

1. Worker > Settings > Variables: add `FORWARD_TO` = your Gmail address (it must already be a verified destination address in Email Routing).
2. Cloudflare dashboard > the domain mathsstudio.co.uk > Email > Email Routing > Routing rules: edit the rule for `info@mathsstudio.co.uk`, set Action to **Send to a Worker** and choose `maths-platform`.
3. Send a test email to info@. It shows in Admin > Email > Inbox and still arrives in Gmail.
