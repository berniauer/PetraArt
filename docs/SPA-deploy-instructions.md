# Fixing 404s for SPA routes (e.g. /impressum, /agbs)

If your site is a Single Page App (SPA) using client-side routing (React Router), direct requests to subpaths like `/impressum` will return 404 from the server unless the server is configured to serve your `index.html` for unknown routes.

This repository includes example configs in `public/`:

- `public/.htaccess` — Apache/Hostinger rewrite (already added).
- `public/nginx-spa.conf` — nginx snippet to add inside your `server { ... }` block.
- `public/_redirects` — Netlify redirect rule (for static hosting on Netlify).

Choose the one appropriate for your host:

nginx (self-managed VPS)
1. Edit your nginx site config (often in `/etc/nginx/sites-available/your-site` or `/etc/nginx/conf.d/your-site.conf`).
2. Inside the `server { ... }` block, add the contents of `public/nginx-spa.conf` (the `location / { try_files $uri $uri/ /index.html; }` part is the key).
3. Make sure `root` points to your site's `public` directory (the built Vite output) and that `index index.html;` is set.
4. Test and reload nginx:

   sudo nginx -t; sudo systemctl reload nginx

Apache / Hostinger
- If you're on Hostinger or cPanel/Apache hosting, upload the existing `public/.htaccess` file to your site root (the `public` directory content) — this file is already in the repository and contains rewrite rules that serve `index.html` for unknown routes.

Netlify
- Add the `public/_redirects` file to the root of your published folder. The single line

  /  /index.html  200

  will return `index.html` for SPA routes.

Cloudflare Pages / Other Hosts
- Check the host's docs for SPA fallback or rewrite rules. Most static hosts provide a single-file redirect or route rule.

After applying the appropriate config:
1. Deploy your site files (the contents of the Vite build output or the `public` folder as configured by your host).
2. Clear any CDN cache (Cloudflare, Hostinger cache) and test direct navigation to `/impressum` and `/agbs`.

If you still see `404 nginx/1.29.2`, it means your host is still routing to nginx without the updated config — you likely need to update the nginx server block as shown above and reload nginx.

If you want, I can generate a step-by-step exact nginx site file using your domain name and expected filesystem layout — tell me the server root path on your VPS (for example `/var/www/petra-art`) and I'll produce a ready-to-drop-in config.
