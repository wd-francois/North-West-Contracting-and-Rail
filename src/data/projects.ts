import type { ImageMetadata } from 'astro';

// Project photos live in src/assets/projects/. Reference them below by file name.
const images = import.meta.glob<{ default: ImageMetadata }>('../assets/projects/*.jpg', { eager: true });

export function projectImage(file: string): ImageMetadata {
  const img = images[`../assets/projects/${file}`];
  if (!img) throw new Error(`Project image not found: src/assets/projects/${file}`);
  return img.default;
}

export type Photo = { file: string; caption: string; alt?: string };

export type Project = {
  slug: string;
  title: string;
  client: string;
  location: string;
  /** Shown on the card, e.g. "Apr – Jun 2026" */
  date: string;
  /** The third fact on the project page */
  dateLabel: 'Completed' | 'Frequency';
  dateDetail: string;
  status: 'Completed project' | 'Ongoing service';
  /** One line for the page's meta description */
  summary: string;
  body: string[];
  points?: { label: string; text: string }[];
  closing?: string[];
  hero: Photo & { alt: string };
  photos: Photo[];
  /** Hidden from the site until the details are filled in */
  draft?: boolean;
};

// Newest first; ongoing services last
export const projects: Project[] = [
  {
    slug: 'cyclone-recovery-works',
    title: 'Cyclone Recovery Works',
    client: 'Rio Tinto Rail Operations',
    location: 'Cape Lambert',
    date: 'Apr – Jun 2026',
    dateLabel: 'Completed',
    dateDetail: 'Apr – Jun 2026',
    status: 'Completed project',
    summary: 'Cyclone recovery works at Cape Lambert: batter reinstatement, Reno mattress batter drains and a gabion retaining wall.',
    body: ['Following cyclone damage at Cape Lambert, NWCR carried out recovery works across three areas:'],
    points: [
      {
        label: 'Power station batter',
        text: 'we reinstated a batter adjacent to 9 Road that had washed out under heavy rain and high flows. We then installed batter drains lined with Reno mattresses, so future rain is channelled from the upper to the lower level without eroding the slope.',
      },
      { label: 'TSF', text: 'we installed nine Reno mattress batter drains along the TSF facility using the same approach.' },
      {
        label: '9 Road gabion wall',
        text: 'we built a gabion retaining wall to protect the road surface adjacent to 9 Road and the 4.8 kp culvert.',
      },
    ],
    closing: [
      'NWCR has delivered similar flood recovery work before, including reinstating a flood-damaged causeway at The Wye, Cape Lambert in February 2023: new culverts, a rebuilt roadway, and replacement perimeter fencing and gates.',
    ],
    hero: {
      file: 'cyc-tsf-2.jpg',
      alt: 'Finished Reno mattress batter drains running along the reinstated batter',
      caption: 'Reno mattress batter drains along the TSF',
    },
    photos: [
      { file: 'cyc-ps-1.jpg', caption: 'Tying off a Reno mattress drain at the power station batter' },
      { file: 'cyc-gw-1.jpg', caption: 'Finished gabion retaining wall beside 9 Road' },
      { file: 'cyc-gw-6.jpg', caption: 'Assembling gabion baskets alongside a loaded ore train' },
    ],
  },
  {
    slug: 'rsw-walkway',
    title: 'RSW Walkway',
    client: 'Rio Tinto Rail Operations',
    location: 'Cape Lambert',
    date: 'Dec 2025 – Feb 2026',
    dateLabel: 'Completed',
    dateDetail: 'Dec 2025 – Feb 2026',
    status: 'Completed project',
    summary: 'A new walkway crossing 9 Road at Cape Lambert, delivered across live heavy rail traffic.',
    body: [
      "NWCR delivered a new walkway crossing 9 Road at Cape Lambert, one of the yard's busiest heavy rail corridors. The work included bulk earthworks to build the foundation, installation of three CSP culverts, concrete walkways, concrete level crossing panels and fencing. Working across live heavy rail traffic required close coordination with Rail Operations and Train Control throughout.",
    ],
    hero: {
      file: 'lead.jpg',
      alt: 'Finished RSW Walkway at night, fenced concrete path leading to a lit arch shelter',
      caption: 'Finished walkway at night',
    },
    photos: [
      { file: 'day.jpg', caption: 'Finished walkway and fencing' },
      { file: 'mesh.jpg', caption: 'Reinforcement set for the concrete pour' },
      { file: 'panel.jpg', caption: 'Placing a concrete crossing panel at 9 Road' },
    ],
  },
  {
    slug: 'ore-car-incident-response',
    title: 'Ore Car Incident Response',
    client: 'Rio Tinto',
    location: 'Cape Lambert',
    date: 'Sep 2025',
    dateLabel: 'Completed',
    dateDetail: 'September 2025',
    status: 'Completed project',
    summary: 'Crew and excavators on site within 24 hours to clean out 84 contaminated ore cars at Cape Lambert.',
    body: [
      'NWCR was originally engaged to clean out 10 ore cars, then called in when a further 74 cars were contaminated with oversized material. We had a crew and 21T and 14T excavators on site within 24 hours, cleaned out the cars and hauled the material to stockpile, completing the work safely and minimising the impact on the supply chain.',
    ],
    hero: {
      file: 'ore-1.jpg',
      alt: 'Excavator loading a tipper beside ore cars at Cape Lambert',
      caption: 'Loading removed material beside the ore cars',
    },
    photos: [
      { file: 'ore-2.jpg', caption: 'Hauling material to the stockpile' },
      { file: 'ore-3.jpg', caption: 'Excavators clearing material alongside the ore cars' },
    ],
  },
  {
    slug: 'mesa-j-maintenance-grading',
    title: 'Maintenance Grading, Rail Ops Roads',
    client: 'Rio Tinto Rail Operations',
    location: 'Mesa J',
    date: 'May 2025, ongoing',
    dateLabel: 'Frequency',
    dateDetail: 'As required, most recently May 2025',
    status: 'Ongoing service',
    summary: 'Maintenance grading and watering of the Rail Operations access roads at Mesa J.',
    body: [
      'NWCR carries out maintenance grading on the Rail Operations access roads at Mesa J as and when required, grading and watering the road surface to keep it in good condition. The most recent round of works was completed in May 2025.',
    ],
    hero: { file: 'grade-1.jpg', alt: 'Grader working a Rail Operations access road at Mesa J', caption: 'Grading a Rail Operations access road' },
    photos: [{ file: 'grade-2.jpg', caption: 'NWCR water truck conditioning the graded road' }],
  },
  {
    slug: 'cape-lambert-shutdown-works',
    title: 'Cape Lambert Shutdown Works',
    client: 'Rio Tinto',
    location: 'Cape Lambert Rail Yard',
    date: 'Apr 2025',
    dateLabel: 'Completed',
    dateDetail: 'April 2025',
    status: 'Completed project',
    summary: 'Escape ramp, road sealing and walkway works delivered in a 10-day shutdown window at Cape Lambert.',
    body: [
      'During a 10-day shutdown window, NWCR built an emergency escape ramp with a 450mm CSP culvert. We also installed rock and road-edge protection, reconditioned and sealed the 12 Road ramp, prepared and sealed access between 10 Road and the 145 diverge, and built the S3 Spur walkway. All work was done under live rail safety protocols with TPO supervision and full RTIO compliance.',
    ],
    hero: {
      file: 'seal-1.jpg',
      alt: 'Sealed ramp with CSP culvert headwall and rock protection beside a loaded ore train',
      caption: 'Sealed ramp with CSP culvert and rock protection',
    },
    photos: [
      { file: 'seal-3.jpg', caption: 'Spreading sealing aggregate between the tracks' },
      { file: 'seal-4.jpg', caption: 'Applying the bitumen seal inside the rail safe work area' },
      { file: 'seal-5.jpg', caption: 'Rolling the new seal' },
    ],
  },
  {
    slug: 'landing-pads-level-crossings',
    title: 'Landing Pads and Level Crossings',
    client: 'Rio Tinto',
    location: 'Cape Lambert Rail Yard',
    date: 'Jan 2025',
    dateLabel: 'Completed',
    dateDetail: 'January 2025',
    status: 'Completed project',
    summary: 'Landing pads, level crossings and sealed road sections at the Cape Lambert rail yard, handed over early.',
    body: [
      "We relocated and installed steel crossing panels, removed old ramp material, prepared subgrade and built basecourse surfaces. We also installed L-block and two-tier pad systems and two-coat bitumen sealed the modified road sections. The job was delivered under shutdown access with early handover, using NWCR's own hi-rail excavator, loader, excavator, skid steer, tippers and water truck.",
    ],
    hero: {
      file: 'lp-1.jpg',
      alt: 'Hi-rail excavator, loader and NWCR water truck building a landing pad between tracks',
      caption: 'Building a landing pad with NWCR hi-rail excavator, loader and water truck',
    },
    photos: [
      { file: 'lp-4.jpg', caption: 'Compacting basecourse along the new L-block pad' },
      { file: 'lp-3.jpg', caption: 'Finished landing pads with L-blocks and handrails' },
      { file: 'lp-2.jpg', caption: 'Completed pad in service beside a loaded consist' },
    ],
  },
  {
    slug: 'mesa-j-rail-bridge-15',
    title: 'Mesa J Rail Bridge 15 Remediation',
    client: 'Rio Tinto',
    location: 'Mesa J',
    date: 'Oct 2024',
    dateLabel: 'Completed',
    dateDetail: 'October 2024',
    status: 'Completed project',
    summary: 'New True Grid driving surface and steel kerbing on Rail Bridge 15 at Mesa J, delivered on a live rail network.',
    body: [
      "We replaced the bridge's vehicle driving surface with a new True Grid system and installed painted steel kerbing along its length to protect the pedestrian handrail. We also added approach kerbing at the abutments to keep vehicles off the east walkway. The upgrade allows 6,400kg GVM vehicles to cross. It was delivered by a 25-person NWCR crew across two back-to-back panels on a live rail network.",
    ],
    hero: {
      file: 'b15-1.jpg',
      alt: 'Rail Bridge 15 at Mesa J with new driving surface and hi-rail excavator on the deck',
      caption: 'Bridge 15 with the new driving surface and kerbing',
    },
    photos: [
      { file: 'b15-5.jpg', caption: 'Fixing new steel kerb sections along the walkway' },
      { file: 'b15-3.jpg', caption: 'Installing approach kerbing at the abutment' },
      { file: 'b15-4.jpg', caption: 'Finished approach kerbing protecting the east walkway' },
    ],
  },
  {
    slug: 'domgas-pipeway-row-remediation',
    title: 'Domgas Pipeway ROW Remediation',
    client: 'Chevron',
    location: 'Mardie',
    date: 'Aug 2024',
    dateLabel: 'Completed',
    dateDetail: 'August 2024',
    status: 'Completed project',
    summary: 'Vegetation clearing and right-of-way repairs on the Domgas pipeway at Mardie, by a 100% Indigenous NWCR crew.',
    body: [
      'We cleared vegetation and repaired the right-of-way drive surface, working carefully around adjacent cultural heritage areas. The work was completed by a 100% Indigenous NWCR crew.',
    ],
    hero: { file: 'dg-3.jpg', alt: 'Long straight section of the reinstated Domgas pipeline right-of-way', caption: 'Reinstated right-of-way drive surface' },
    photos: [
      { file: 'dg-9.jpg', caption: 'Slashing regrowth along the right-of-way' },
      { file: 'dg-12.jpg', caption: 'Clearing vegetation along the buried pipeline route' },
      { file: 'dg-13.jpg', caption: 'NWCR tracked loader and slasher on site' },
    ],
  },
  {
    // TODO: client, location, date and scope still to come. Remove `draft` once filled in.
    slug: 'rail-grinding',
    draft: true,
    title: 'Rail Grinding',
    client: 'TBC',
    location: 'TBC',
    date: 'TBC',
    dateLabel: 'Completed',
    dateDetail: 'TBC',
    status: 'Completed project',
    summary: 'Rail grinding by NWCR.',
    body: ['Scope description to come.'],
    hero: { file: 'rg-2.jpg', alt: 'NWCR crew working on rail beside the stacker at a port stockyard', caption: 'Crew working on the rail beside the stacker' },
    photos: [
      { file: 'rg-1.jpg', caption: 'Crew and equipment set up along the rail' },
      { file: 'rg-4.jpg', caption: 'Working the rail with the loader standing by' },
      { file: 'rg-3.jpg', caption: 'Crew working along the rail' },
    ],
  },
  {
    slug: 'weed-spraying-services',
    title: 'Weed Spraying Services',
    client: 'Rio Tinto',
    location: 'Cape Lambert & Mesa J',
    date: 'Ongoing',
    dateLabel: 'Frequency',
    dateDetail: 'Ongoing, as required',
    status: 'Ongoing service',
    summary: 'Weed spraying across the Cape Lambert and Mesa J rail yards, delivered in-house by NWCR’s qualified team.',
    body: [
      "We have provided weed spraying across the Cape Lambert and Mesa J rail yards for the past three years. Spraying runs on a cycle set by growth: around every six months when growth is low, and more often when it is heavy. The work is now delivered fully in-house by NWCR's qualified team.",
    ],
    hero: {
      file: 'ws-1.jpg',
      alt: 'NWCR utes with spray unit working along the road beside the stockpiles and reclaimer',
      caption: 'NWCR spray crew working beside the stockpiles',
    },
    photos: [
      { file: 'ws-4.jpg', caption: 'Spraying along the rail corridor fence line' },
      { file: 'ws-3.jpg', caption: 'Spray unit on the access track between the rail lines' },
      { file: 'ws-2.jpg', caption: 'Crew working the fence line beside the stockpiles' },
    ],
  },
];

export const publishedProjects = projects.filter((p) => !p.draft);
