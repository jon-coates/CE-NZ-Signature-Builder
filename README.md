# CarExpert Email Signature Generator

A Next.js application for generating email signatures for CarExpert team members in Australia and New Zealand.

## Features

- Country selection (Australia/New Zealand)
- Real-time signature preview
- Copy to clipboard functionality
- Country-specific logos and social media links
- Easy-to-update social media configuration

## Setup

1. Install dependencies:
```bash
npm install
```

2. Add your assets:
   - Place country logos in `public/assets/logos/`:
     - `carexpert-au.png` (or .svg)
     - `carexpert-nz.png` (or .svg)
   - Place social media icons in `public/assets/icons/`:
     - `website.svg`
     - `youtube.svg`
     - `facebook.svg`
     - `instagram.svg`
     - `twitter.svg`
     - `linkedin.svg`

3. Update social media links in `config/socialMedia.ts`:
   - Update NZ social media URLs (currently using placeholders)
   - Update image paths to use absolute URLs if hosting images externally

4. Run the development server:
```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Deployment to Vercel

1. Push your code to a Git repository
2. Import the project in Vercel
3. Vercel will automatically detect Next.js and configure the build settings
4. Deploy!

## Usage

1. Select your country (Australia or New Zealand)
2. Fill in your details:
   - Full Name
   - Job Title
   - Email
   - Contact Phone Number
   - Address
3. Preview your signature in real-time
4. Click "Copy Signature" to copy the HTML to your clipboard
5. Go to Gmail Settings → Signature
6. Paste the copied HTML into your signature editor

## Important Notes

- For email signatures to work properly, image URLs in the copied HTML should be absolute URLs pointing to hosted images
- Update the image paths in `config/socialMedia.ts` to use absolute URLs (e.g., `https://yourdomain.com/assets/logos/carexpert-au.png`)
- The signature HTML is designed to work with Gmail and most email clients

