# Leaf & Lintel Properties Website

A premium one-page website built with Next.js, TypeScript and Tailwind CSS.

## Run locally

1. Install Node.js 20 or newer.
2. Open this folder in a terminal.
3. Run:

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Cinematic homepage hero

The homepage is already configured for a cinematic background video. Add an MP4 file at:

```text
public/videos/leaf-lintel-hero.mp4
```

Recommended video: 10–20 seconds, landscape 16:9, no audio required, 1080p, compressed to roughly 5–12 MB. Good footage includes a slow exterior approach, a doorway opening, light moving across a finished room, or close-ups of premium details. The website automatically falls back to the animated hero image until a video is added, so it still looks polished immediately.

Avoid showing the full address, house number, keys, alarm panels, residents, or identifiable documents.

## Deploy to Vercel

1. Create a GitHub repository and upload this project.
2. Sign in to Vercel and select **Add New Project**.
3. Import the GitHub repository.
4. Keep the detected Next.js settings and select **Deploy**.
5. Add the final domain under **Project Settings → Domains**.

## Before launch

- Replace `hello@leafandlintel.co.uk` in `app/page.tsx` and `components/ContactForm.tsx`.
- Add a business phone/WhatsApp link.
- Replace the three SVG placeholder images in `public/images/` with project photography.
- Confirm the correct business name, service area and legal entity wording.
- Add a privacy policy before collecting form submissions.
- Do not publish the full address of the HMO.
- Avoid stating guaranteed rent, guaranteed returns or regulatory claims unless they are accurate and documented.

## Recommended project photos

Use 8–12 well-lit photographs:

- Front exterior, with house number blurred or cropped
- Kitchen before and during refurbishment
- Communal lounge
- Each bedroom from the doorway
- Bathroom or ensuite
- Details such as flooring, lighting and finishes
- Two or three progress shots showing work underway

Keep the images honest. A polished progress story is more persuasive than stock photography pretending the property is already finished.
