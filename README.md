## Shuffle & Repeat

Mix it up. Play it again.

A digital home for Shuffle & Repeat—a Louisville live-music event project bringing artists and audiences together across genres. This website gives the group a place to share its story, showcase moments from shows, announce upcoming events, and connect with potential collaborators.

Visit the website · Follow on Instagram

Music, people, and connection

Shuffle & Repeat’s events celebrate local talent and the experience of discovering music together. The website carries that spirit into a space visitors can return to between shows: to explore the group, revisit the energy in the room, find event information, or start a conversation about working together.

Explore the site

• Home: Event photography and an introduction to Shuffle & Repeat.
• About: The group, its purpose, and opportunities to collaborate.
• Calendar: A home for upcoming show announcements and event details.
• Events: Selected performance photography with links to the original posts.
• Sponsorship: Partnership inquiries and audience-information requests.
• Contact: A direct connection to the group through Instagram.

The site is still growing. Confirmed event dates, flyers, fuller group information, and approved sponsorship details can be added as they become available.

The visual experience

The infinity-arrow logo opens the site with a continuous blue, red, and green animation before revealing the event photography. A minimal dark interface keeps the focus on the music and the people, with cyan highlights and teal accents drawn from the branding.

The slideshow pauses when the menu is open or the browser tab is hidden. Internal navigation skips the opening animation, and reduced-motion preferences disable both the intro and automatic slideshow.

Maintaining the website

This is a static HTML, CSS, and JavaScript site hosted on GitHub Pages. No package installation or build step is required.

|File              |What it contains                                     |
|------------------|-----------------------------------------------------|
|`index.html`      |Home page, slideshow, intro SVG, and Contact section |
|`about.html`      |Group introduction and partnership section           |
|`calendar.html`   |Upcoming-event announcements                         |
|`events.html`     |Event photography and original post links            |
|`sponsorship.html`|Sponsorship and audience-information content         |
|`style.css`       |Layout, colors, typography, and responsive styling   |
|`site.js`         |Menu, slideshow, navigation, and intro timing        |
|`intro-motion.js` |Infinity track, arrow movement, and color transitions|
|`assets/`         |Logo files and photography                           |

To preview locally, run this command from the repository folder:

python3 -m http.server 8000

Then open http://localhost:8000/.

For branch-based GitHub Pages publishing, select main and /(root) under Settings → Pages. Keep index.html at the repository root. Relative links allow the site to work at its current repository URL or on a custom domain.

Photography and branding

The logo and photography were supplied for this project. Event images link back to their original Instagram posts where available. Ownership remains with the respective creators; inclusion in this repository does not grant permission to reuse the assets elsewhere.