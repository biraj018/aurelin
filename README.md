# Auréline — Luxury Beauty Blog

> Wear the Art. Be the Art.

A static HTML/CSS/JS luxury blog website optimised for affiliate marketing, Pinterest, and Google SEO.

---

## 📁 Project Structure

```
aureline/
├── index.html                  # Homepage
├── blog.html                   # Blog listing (filterable)
├── post-korean-skincare.html   # Sample article with full affiliate layout
├── about.html                  # About page
├── contact.html                # Contact form
├── disclosure.html             # Affiliate Disclosure (required by FTC/Amazon)
├── privacy.html                # Privacy Policy
├── terms.html                  # Terms of Service
├── robots.txt                  # SEO robots file
├── sitemap.xml                 # XML sitemap for Google
├── vercel.json                 # Vercel deployment config
├── css/
│   └── style.css              # All styles (responsive, mobile-first)
├── js/
│   └── main.js                # Nav, newsletter, Pinterest share, filters
└── images/
    ├── favicon.svg            # Site favicon
    └── (add your photos here)
```

---

## 🚀 Deploy to Vercel (5 minutes)

### Option A — Drag & Drop (easiest)
1. Go to [vercel.com](https://vercel.com) and create a free account
2. Click **"Add New Project"**
3. Drag and drop this entire `aureline` folder
4. Click **Deploy** — you're live!

### Option B — GitHub + Vercel (recommended for ongoing updates)
1. Create a free [GitHub](https://github.com) account
2. Create a new repository called `aureline`
3. Upload all files in this folder to the repo
4. Go to [vercel.com](https://vercel.com) → **Add New Project** → Import your GitHub repo
5. Click **Deploy**
6. Every time you push changes to GitHub, Vercel auto-deploys

### Connect a custom domain
1. In Vercel dashboard → your project → **Settings → Domains**
2. Add your domain (e.g. `aureline.com`)
3. Follow the DNS instructions (add a CNAME or A record at your domain registrar)

---

## ✏️ Before You Launch — Checklist

### Replace affiliate links
In every `.html` file, find all instances of:
```
https://www.amazon.com/dp/EXAMPLE?tag=YOUR-AFFILIATE-TAG
```
Replace `YOUR-AFFILIATE-TAG` with your actual Amazon Associates tracking ID.

### Update contact email
Search and replace `hello@aureline.com` with your real email address throughout all files.

### Add your URL to sitemap
Open `sitemap.xml` and replace `https://aureline.com` with your actual domain.

### Update sitemap in robots.txt
Open `robots.txt` and update the Sitemap URL.

### Add real photography
Replace emoji placeholders with real product/lifestyle images:
- Hero image: 800×1000px minimum
- Blog post images: 1200×800px (landscape) or 1000×1500px (Pinterest vertical)
- Product images: square, 800×800px minimum

### Pinterest optimisation
On each article page, update the `.pin-btn` data attributes:
```html
<a class="pin-btn"
   data-img="https://yoursite.com/images/posts/your-pin-image.jpg"
   data-desc="Your Pinterest-optimised title — Auréline">
   📌 Save to Pinterest
</a>
```

### Newsletter
Connect a real email service. Options:
- **Mailchimp** — free up to 500 subscribers, replace the form action
- **ConvertKit** — better for bloggers
- **Beehiiv** — modern, good for growth

---

## 🔍 SEO Tips

- Update `<title>` and `<meta name="description">` on every page with unique content
- Add real article pages following the `post-korean-skincare.html` template
- Submit your `sitemap.xml` to Google Search Console
- Pin your article images to Pinterest with keyword-rich descriptions
- Aim for article titles like: "Best [Product] for [Skin Type] Under $[Price] — Tested"

---

## 📄 Adding New Blog Posts

Copy `post-korean-skincare.html` and:
1. Update the `<title>` and all `<meta>` tags
2. Update the article title, category, date
3. Write your content in the `.article-body` div
4. Replace affiliate links with real Amazon Associates links
5. Update the `sitemap.xml` with the new page URL

---

## 🎨 Brand Colours

| Name | Hex |
|------|-----|
| Cream | `#FAF7F2` |
| Cream 2 | `#F3EDE3` |
| Gold | `#C9A84C` |
| Gold Light | `#E8D5A3` |
| Text Dark | `#2A2118` |
| Text Mid | `#6B5C45` |

---

Built with pure HTML, CSS, and vanilla JS — no frameworks, no build tools, instant deployment.
