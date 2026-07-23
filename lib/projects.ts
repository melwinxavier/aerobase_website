/* Research project inventory — sourced from the reference repo:
   archive/wordpress-2026-07 posts + pages/research-projects.md and
   content/projects-and-partners.md (verified). Grant/funder/dates are
   third-party verifiable on CORDIS / Vinnova.

   Guardrails honoured (see reference CLAUDE.md):
   - Volvo Cars & Electrolux appear only as CiSMA consortium members.
   - FlexCrash keeps the aluminium qualifier on the LTU characterisation.
   - No fabricated figures; project targets are framed as targets. */

export type ProjectStatus = "active" | "ending" | "completed";

export interface Contribution {
  title: string;
  body: string;
}

export interface Project {
  slug: string;
  name: string;
  accent: string;
  fullTitle: string;
  funder: string;
  grant: string;
  cordis: string;
  years: string;
  dateRange: string;
  status: ProjectStatus;
  statusLabel: string;
  coordinator: string;
  aerobaseRole: string;
  summary: string;
  challenge: string;
  contributions: Contribution[];
  consortium: string[];
  tags: string[];
  articleUrl?: string;
  badge?: string;
}

export const STATUS_COLOR: Record<ProjectStatus, string> = {
  active: "#00bf2a",
  ending: "#e8b23d",
  completed: "#8a8a8f",
};

export const PROJECTS: Project[] = [
  {
    slug: "genmat",
    name: "GENMAT",
    accent: "#4d8bff",
    fullTitle: "Generative Foundation Model for Multi-Scale Materials Discovery, Design & Deployment",
    funder: "Horizon Europe",
    grant: "101295332",
    cordis: "https://cordis.europa.eu/project/id/101295332",
    years: "2026 – 2029",
    dateRange: "1 Jun 2026 – 31 May 2029",
    status: "active",
    statusLabel: "Active · just started",
    coordinator: "Politecnico di Torino · 14 beneficiaries, 7 countries",
    aerobaseRole:
      "The consortium's finite-element specialist — connecting AI-driven material discovery to structural deployment, so a model's prediction becomes a part an engineer can load.",
    summary:
      "GENMAT will develop Europe's first multi-scale materials foundation model, connecting atomic chemistry to manufacturing performance to dramatically shorten the lab-to-market cycle.",
    challenge:
      "A new material still takes 10 to 20 years to reach the market, and the evidence gathered along the way — chemistry, spectra, micrographs, process logs, sensor streams — sits in different formats and rarely connects. Most machine-learning tools make this worse: trained for a single task, they behave as black boxes and ignore the physics that governs how a material deforms and fails. GENMAT builds Holistic-M3FM, a single physically-consistent model spanning every scale, on a FAIR data layer.",
    contributions: [
      {
        title: "Physics-informed foundation modeling",
        body: "Helps build and fine-tune Holistic-M3FM with physics-informed neural operators (PINO) and neural networks (PINN), embedding conservation laws, structural constraints and failure criteria so output stays physically valid — with uncertainty quantification marking where confidence drops.",
      },
      {
        title: "From prediction to structural mechanics",
        body: "Converts model output into finite-element load cases and compares them against how composites actually respond — anisotropy, viscoelastic–viscoplastic behaviour, crack propagation, creep lifetime and damage evolution across scales.",
      },
      {
        title: "Back into the products",
        body: "The methods flow back into Aerobase's software: SafeLight gains sharper post-buckling anisotropy and multi-scale failure, and PHASES picks up the model's microstructure tracking.",
      },
    ],
    consortium: [
      "Politecnico di Torino (coord.)",
      "Brunel University of London",
      "Brunel Composites Centre",
      "TWI",
      "Stockholm University",
      "Aerobase Innovations AB",
      "Entelea",
      "Talos Analytics",
      "Cubic Snail",
      "IRES",
      "Bar-Ilan University",
      "NVIDIA (Mellanox)",
      "Technovative Solutions",
      "CINECA",
      "Digital Security Lab Ukraine",
    ],
    tags: ["Foundation Models", "Multi-scale Modeling", "Computational Materials Science", "Digital Twins"],
    articleUrl:
      "https://aerobase.se/2026/06/03/accelerating-materials-innovation-with-generative-foundation-models/",
    badge: "Lead role",
  },
  {
    slug: "flexcrash",
    name: "FlexCrash",
    accent: "#ff5a4d",
    fullTitle: "Towards safer, lighter and circular crash-structure production",
    funder: "Horizon Europe",
    grant: "101069674",
    cordis: "https://cordis.europa.eu/project/id/101069674",
    years: "2022 – 2026",
    dateRange: "1 Sep 2022 – 31 Aug 2026",
    status: "ending",
    statusLabel: "Active · ends Aug 2026",
    coordinator: "Eurecat",
    aerobaseRole:
      "Failure characterisation at LTU — triaxiality-varied tension with DIC on HPDC and extruded aluminium. This is the calibration data behind SafeLight.",
    summary:
      "A flexible, hybrid manufacturing technology to produce tailored, adaptive, crash-tolerant structures made of green aluminium alloys.",
    challenge:
      "The automotive industry has to design lighter vehicles that still meet strict safety standards. FlexCrash applies surface patterns via additive manufacturing to preformed aluminium parts to enhance crashworthiness, and leans heavily on virtual testing to predict how the hybrid structures behave before physical tests. The project targets a 50% reduction in passenger injuries and fatalities and up to 20% lower manufacturing cost.",
    contributions: [
      {
        title: "Failure characterisation for SafeLight",
        body: "Aerobase ran the failure characterisation at LTU — triaxiality-varied tensile tests with digital image correlation (DIC) on HPDC and extruded aluminium. That campaign is the calibration data behind the SafeLight crash-failure model.",
      },
      {
        title: "Advanced material models & virtual testing",
        body: "Advanced material models feed the project's virtual testing of crash-tolerant hybrid structures on reference vehicle models, so behaviour under diverse collision scenarios is predicted, not assumed.",
      },
    ],
    consortium: [
      "Eurecat (coord.)",
      "Luleå University of Technology",
      "Aerobase Innovations AB",
      "Virtual Vehicle Research",
      "Gestamp",
      "IMC Krems University of Applied Sciences",
      "Fraunhofer IWS",
      "Gemmate Technologies",
      "Stellantis Italia",
      "UNE",
    ],
    tags: ["Automotive", "HPDC", "AlSi10Mg", "Extrusion", "Crashworthiness", "Casting defects", "Failure"],
    articleUrl: "https://aerobase.se/2024/06/02/flexcrash-development-of-crash-tolerant-structures/",
  },
  {
    slug: "ti-tex",
    name: "TI-TEX",
    accent: "#e8b23d",
    fullTitle: "Tailoring heating/cooling strategies to achieve the desired texture in titanium alloys",
    funder: "Vinnova",
    grant: "2022-02730",
    cordis: "https://www.vinnova.se/en/p/ti-tex/",
    years: "2022 – 2023",
    dateRange: "1 Nov 2022 – 30 Apr 2023",
    status: "completed",
    statusLabel: "Completed · coordinator",
    coordinator: "Aerobase Innovations AB — with LTU & GKN",
    aerobaseRole:
      "Coordinator. Developed a texture-evolution model from thermal gradient and solidification-front velocity for DED additive manufacturing, implemented in MSC Marc.",
    summary:
      "A texture-evolution model based on thermal gradient and solidification-front velocity for DED-AM simulation, implemented in MSC Marc.",
    challenge:
      "In directed-energy-deposition additive manufacturing of titanium alloys, the crystallographic texture — and therefore the mechanical behaviour — depends on how heat is applied and removed. TI-TEX set out to tailor heating and cooling strategies to achieve a desired texture, backed by a predictive model of texture evolution.",
    contributions: [
      {
        title: "Coordinated the project",
        body: "Aerobase coordinated TI-TEX — a materially different role from participating in one — alongside Luleå University of Technology and GKN.",
      },
      {
        title: "Texture-evolution model in MSC Marc",
        body: "Developed a texture-evolution model driven by thermal gradient and solidification-front velocity for DED-AM, implemented in MSC Marc.",
      },
    ],
    consortium: ["Aerobase Innovations AB (coord.)", "Luleå University of Technology", "GKN"],
    tags: ["Additive Manufacturing", "DED-AM", "Titanium", "Texture Evolution", "MSC Marc"],
    badge: "Aerobase coordinated",
  },
  {
    slug: "alabama",
    name: "ALABAMA",
    accent: "#ff6a3d",
    fullTitle: "Laser additive-manufacturing process optimization using adaptive laser beams",
    funder: "Horizon Europe",
    grant: "101138842",
    cordis: "https://cordis.europa.eu/project/id/101138842",
    years: "2024 – 2027",
    dateRange: "1 Jan 2024 – 31 Dec 2027",
    status: "active",
    statusLabel: "Active",
    coordinator: "SINTEF Manufacturing",
    aerobaseRole:
      "Leads the work package developing digital tools for process optimization — advanced material models, scan-path optimization considering microstructure evolution, and a defect-rectification framework.",
    summary:
      "Reduce defects and tailor a component's microstructure by shaping the laser beam temporally and spatially, using multiscale physics-based models.",
    challenge:
      "Most laser-based processes use Gaussian beam profiles, which create steep thermal peaks in the centre and insufficient heating at the edges — causing spatter, porosity and lack of fusion. ALABAMA develops adaptive laser technologies: shaping the beam and optimizing process parameters, with online monitoring and closed-loop control, to enable first-time-right manufacturing across aviation, marine and automotive.",
    contributions: [
      {
        title: "Leads the process-optimization work package",
        body: "Aerobase leads the work package developing digital tools for process optimization — advanced material models, scan-path optimization that accounts for microstructure evolution, a defect-rectification framework, and component-level optimization.",
      },
    ],
    consortium: [
      "SINTEF Manufacturing (coord.)",
      "Fraunhofer IWS",
      "Fraunhofer SCAI",
      "Eurecat",
      "Luleå University of Technology",
      "IRIS",
      "Flowphys",
      "Stellantis / CRF",
      "Nordic Additive Manufacturing",
      "GKN Aerospace Sweden",
      "Technovative Solutions",
    ],
    tags: ["Aerospace", "Marine", "Automotive", "L-DED", "Ti-6Al-4V", "Stainless Steel", "AlSi10Mg"],
    articleUrl: "https://aerobase.se/2024/06/02/alabama-tailoring-laser-beams/",
    badge: "Lead role",
  },
  {
    slug: "restore",
    name: "RESTORE",
    accent: "#22c55e",
    fullTitle: "Remanufacturing in value cycles",
    funder: "Horizon Europe",
    grant: "101138775",
    cordis: "https://cordis.europa.eu/project/id/101138775",
    years: "2024 – 2027",
    dateRange: "1 Jan 2024 – 31 Dec 2027",
    status: "active",
    statusLabel: "Active",
    coordinator: "EWF (European Federation for Welding, Joining and Cutting)",
    aerobaseRole:
      "Leads the work package creating advanced material models — thermo-mechanical simulation and multi-scale, multi-physics optimization of cladding processes for metallic components.",
    summary:
      "RESTORE transforms the remanufacturing landscape by developing sustainable processes, materials and digital tools for a circular economy.",
    challenge:
      "Remanufacturing extends product life and cuts waste, energy and emissions — but it needs innovation across product, process and business models. RESTORE advances additive remanufacturing techniques such as hybrid laser-PTA cladding and DED-LB to repair high-value components like engine blocks, turbine blades and gears back to their original dimensions.",
    contributions: [
      {
        title: "Leads the material-models work package",
        body: "Aerobase leads the work package to create advanced material models, perform thermo-mechanical simulations, and optimize the various cladding processes — the multi-scale, multi-physics simulation behind the repair techniques.",
      },
    ],
    consortium: [
      "EWF (coord.)",
      "Technovative Solutions",
      "IRIS",
      "Fraunhofer SCAI",
      "AB Dalforsån",
      "NAVTEK",
      "Lucchini Unipart Rail",
      "Welding Alloys Group",
      "IREPA LASER",
      "Inventage",
      "Parida Consulting",
      "GSMC",
      "Flowphys",
      "Endurance Technologies",
      "Stellantis / CRF",
      "Svetsdoktorerna",
      "Cranfield University",
      "MSC Scanning",
      "EIT Manufacturing",
      "Intellegens",
    ],
    tags: ["Rail", "Manufacturing", "Automotive", "Marine", "Laser-PTA Cladding", "CrCoMnN", "AlSi9Cu", "C-Steel"],
    articleUrl: "https://aerobase.se/2024/06/02/restore-remanufacturing-in-value-cycles/",
    badge: "Lead role",
  },
  {
    slug: "upbeat",
    name: "UPBEAT",
    accent: "#5eb3f5",
    fullTitle: "Uncertainty Prediction & Bias Elimination in Aviation Technology",
    funder: "Horizon Europe",
    grant: "101147799",
    cordis: "https://cordis.europa.eu/project/id/101147799",
    years: "2024 – 2027",
    dateRange: "1 May 2024 – 31 Oct 2027",
    status: "active",
    statusLabel: "Active",
    coordinator: "SINTEF Manufacturing · EASA provides technical advice",
    aerobaseRole:
      "AM simulation and Ti-6Al-4V material modeling for the Outlet Guide Vane, quantifying uncertainties from design through manufacturing.",
    summary:
      "UPBEAT integrates advanced uncertainty-quantification methods into the lifecycle of aircraft components to improve safety and reduce environmental impact.",
    challenge:
      "UPBEAT integrates uncertainty quantification (UQ) into the lifecycle of aircraft components, focusing on the Outlet Guide Vane (OGV) in turbofan engines. Quantifying uncertainties from design through manufacturing expands the design space, improves reliability and safety, and cuts CO₂ by reducing material waste.",
    contributions: [
      {
        title: "AM simulation & Ti-6Al-4V modeling",
        body: "Aerobase works with AM simulation and Ti-6Al-4V material modeling for the OGV, modeling metallic and composite components with the uncertainties that travel from design into manufacturing.",
      },
    ],
    consortium: [
      "SINTEF Manufacturing (coord.)",
      "Aerobase Innovations AB",
      "IRT Jules Verne",
      "GKN Aerospace Sweden",
      "RISE",
      "Phimeca",
      "EASA (technical advice)",
    ],
    tags: ["Aerospace", "Design", "Manufacturing", "L-PBF", "Composite", "OGV"],
    articleUrl:
      "https://aerobase.se/2024/06/02/upbeat-enhancing-aviation-safety-using-uncertainty-quantification-uq/",
  },
  {
    slug: "cisma",
    name: "CiSMA",
    accent: "#86d16b",
    fullTitle: "Shaping the future of sustainable mass-market manufacturing",
    funder: "Horizon Europe",
    grant: "101177798",
    cordis: "https://cordis.europa.eu/project/id/101177798",
    years: "2024 – 2028",
    dateRange: "1 Nov 2024 – 30 Apr 2028",
    status: "active",
    statusLabel: "Active",
    coordinator: "Eurecat",
    aerobaseRole:
      "Material modelling for recycled steel — deformation-induced failure and phase-evolution (CALPHAD) models that predict how trace elements affect performance and weldability.",
    summary:
      "CiSMA develops material models to predict trace-element effects in recycled steel, improving the performance of welded components.",
    challenge:
      "As scrap-based electric-arc-furnace steel becomes essential to the automotive industry, trace elements — copper, tin, antimony, molybdenum, chromium — can alter the microstructure, reduce ductility and toughness, and promote failure in a crash. CiSMA models how those trace elements affect steel during manufacturing and in service.",
    contributions: [
      {
        title: "Deformation-induced failure model",
        body: "A physically-based multiscale model predicting deformation-induced failure in recycled automotive steel, capturing anisotropy from trace elements, non-metallic inclusions and microstructural banding, with probabilistic variability. It commercialises through SafeLight.",
      },
      {
        title: "Phase-evolution kinetics",
        body: "A phase-evolution model — using CALPHAD thermodynamics — predicting how trace elements shift phase-transformation temperatures and affect the weldability of recycled steel.",
      },
    ],
    consortium: [
      "Eurecat (coord.)",
      "Tata Steel Nederland",
      "voestalpine Steel Division",
      "Volvo Cars",
      "Electrolux Professional Group",
      "RISE",
      "Blekinge Institute of Technology",
      "CONDESAN",
      "Aerobase Innovations AB",
      "ESTEP AISBL",
      "CSIC",
      "University of Liège",
    ],
    tags: ["Manufacturing", "Automotive", "Forming", "Welding", "Recycled Steel", "Material Models"],
    articleUrl: "https://aerobase.se/2024/10/24/shaping-the-future-of-sustainable-manufacturing/",
  },
  {
    slug: "gear-up",
    name: "GEAR-UP",
    accent: "#b79bff",
    fullTitle: "Revolutionizing sustainable manufacturing using advanced modeling",
    funder: "Horizon Europe",
    grant: "101178484",
    cordis: "https://cordis.europa.eu/project/id/101178484",
    years: "2024 – 2028",
    dateRange: "1 Oct 2024 – 30 Sep 2028",
    status: "active",
    statusLabel: "Active",
    coordinator: "SINTEF Manufacturing",
    aerobaseRole:
      "Process optimization for stainless steel and aluminium alloys with high recycled content — methods to handle material variability from trace elements in metal AM.",
    summary:
      "GEAR-UP advances manufacturing sustainability by using recycled materials in AM processes while ensuring they meet the same performance standards as virgin materials.",
    challenge:
      "Recycled metals and composites carry inherent variability: trace elements in recycled stainless steel and aluminium can cause solidification cracking and inclusions in additively manufactured parts. GEAR-UP develops predictive models to keep recycled-content AM components to the same standard as their virgin counterparts.",
    contributions: [
      {
        title: "Process optimization for recycled-content metals",
        body: "Aerobase develops specialised methods to handle material variability from trace elements in recycled stainless steel and aluminium, optimizing laser power, speed and cooling rates to overcome solidification cracking and non-metallic inclusions and keep AM parts to spec.",
      },
    ],
    consortium: [
      "SINTEF Manufacturing (coord.)",
      "Flowphys",
      "Fraunhofer SCAI",
      "Eurecat",
      "Welding Alloys France",
      "EIT Manufacturing",
      "CelluCircle",
      "Colfeed4print",
      "Technovative Solutions",
      "Aker Solutions",
      "3D Production",
    ],
    tags: ["Manufacturing", "Energy", "PBF", "L-DED", "FFF", "Stainless Steel", "AlSi10Mg", "CFRP"],
    articleUrl:
      "https://aerobase.se/2024/10/01/revolutionizing-sustainable-manufacturing-with-advanced-modeling/",
  },
];

export function getProject(slug: string): Project | undefined {
  return PROJECTS.find((p) => p.slug === slug);
}

/** The next project in the list, wrapping around — for the page-foot link. */
export function getNextProject(slug: string): Project {
  const i = PROJECTS.findIndex((p) => p.slug === slug);
  return PROJECTS[(i + 1) % PROJECTS.length];
}
