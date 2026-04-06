import { Shield, Landmark, TrendingUp, Cpu, Workflow, Globe, Zap, Search } from "lucide-react";

export const investmentThesis = [
  {
    id: "01",
    pillar: "Massive & Growing Market",
    detail: "Global drone market: $30B (2024) → $90B+ (2030) at 20% CAGR. India alone: ₹12,000 Cr (2024) → ₹1,50,000 Cr+ (2030) at 25–30% CAGR. Defence UAV sub-market: 30%+ CAGR.",
    icon: TrendingUp
  },
  {
    id: "02",
    pillar: "Strong Government Tailwinds",
    detail: "PLI Scheme for Drones (₹120 Cr allocation). Drone Shakti Initiative. Drone Rules 2021 liberalization. iDEX challenge programs. 74% FDI in defence (automatic route). National Drone Policy 2021 — India as global drone hub by 2030.",
    icon: Landmark
  },
  {
    id: "03",
    pillar: "Proprietary IP & Technology Moat",
    detail: "100% in-house development of hardware, firmware, AI, and SaaS. Patent filing strategy in place. Trade secret protocols for datasets and algorithms. IP moat defensible against both domestic and imported competition.",
    icon: Cpu
  },
  {
    id: "04",
    pillar: "Diversified, Capital-Efficient Revenue Model",
    detail: "7 revenue streams: product sales, SaaS subscriptions, R&D contracts, training, defense procurement, IP licensing, and exports. Reduces dependency on any single contract or client.",
    icon: Zap
  },
  {
    id: "05",
    pillar: "Regulatory-Ready & Compliant",
    detail: "Built for DGCA Type Certification from Day 1. Defence manufacturing under IDR Act framework. DigitalSky / NPNT integration in all UAV products. No retroactive compliance risk.",
    icon: Shield
  }
];

export const marketOpportunity = [
  { segment: "Unmanned Aerial Systems (UAS)", value2024: "USD 1 Billion", projected2030: "USD 10 Billion", cagr: "45%" },
  { segment: "Aerospace & Defense (Indigenization)", value2024: "USD 15 Billion", projected2030: "USD 40 Billion", cagr: "18%" },
  { segment: "AI & Edge Computing (Defense)", value2024: "USD 2 Billion", projected2030: "USD 12 Billion", cagr: "35%" },
  { segment: "Total Addressable Market (TAM)", value2024: "USD 18 Billion", projected2030: "USD 62 Billion", cagr: "22%" }
];

export const revenueStreamsArr = [
  { stream: "Product Sales", desc: "Drone platforms, embedded systems, robotic hardware", target: "OEMs, Defence, Government", model: "Unit / bulk contracts" },
  { stream: "SaaS Platforms", desc: "Fleet management, AI analytics, UTM software", target: "Enterprise, Agriculture, SMEs", model: "Monthly / annual subscription" },
  { stream: "R&D Services", desc: "Contract R&D, prototyping, feasibility studies", target: "DRDO, Startups, PSUs", model: "Project-based" },
  { stream: "Training Services", desc: "Remote pilot training, RPAS certification, AI upskilling", target: "Corporates, Government", model: "Per-seat / course fee" },
  { stream: "Defence Contracts", desc: "UAVs, surveillance systems, counter-drone tech", target: "MoD, BSF, CRPF, State Police", model: "Government procurement" },
  { stream: "Export", desc: "UAV platforms, sub-systems, software", target: "Overseas OEMs, allied nations", model: "FOB / CIF pricing" },
  { stream: "IP Licensing", desc: "Patents, technology licences, white-label platforms", target: "Industry partners", model: "Royalty / upfront fee" }
];

export const growthRoadmap = [
  {
    phase: "Phase 1 — Foundation",
    timeline: "Year 1–2",
    milestones: [
      "Incorporation complete. DPIIT Startup recognition.",
      "DGCA approvals. First drone prototype.",
      "3+ patent filings. First government/iDEX grant.",
      "SaaS beta launch."
    ]
  },
  {
    phase: "Phase 2 — Growth",
    timeline: "Year 2–4",
    milestones: [
      "OPC → Private Limited conversion.",
      "Seed/Series A fundraise.",
      "2–3 DGCA Type-Certified products.",
      "Team of 20–30. Defence supply chain entry.",
      "IIT/NAL partnerships."
    ]
  },
  {
    phase: "Phase 3 — Scale",
    timeline: "Year 4–7",
    milestones: [
      "INR 10–50 Cr annual revenue.",
      "Export markets: SE Asia, Middle East, Africa.",
      "PCT patent filings. Series B or strategic stake.",
      "PLI Scheme benefits."
    ]
  }
];

export const regulatoryFramework = [
  { domain: "Company Law", regulation: "Companies Act, 2013", status: "Incorporated as OPC; annual filings and ROC compliance maintained" },
  { domain: "Drone Operations", regulation: "Drone Rules 2021 (G.S.R. 589(E))", status: "All UAVs designed for Type Certification and UIN registration on Digital Sky" },
  { domain: "Drone Airspace", regulation: "DGCA Civil Aviation Requirements", status: "Zone-based compliance (Green/Yellow/Red) built into GCS software" },
  { domain: "Pilot Licensing", regulation: "DGCA RPL Regulations", status: "DGCA-approved drone school and RPL framework under development" },
  { domain: "Defence Manufacturing", regulation: "IDR Act 1953, DAP 2020, SCOMET Policy", status: "Industrial licence pathway mapped for defence product line" },
  { domain: "Data Privacy", regulation: "IT Act 2000, DPDPA 2023", status: "Data localization and consent framework in SaaS architecture" },
  { domain: "Export Control", regulation: "SCOMET, Foreign Trade Policy", status: "SCOMET classification reviewed for all export-eligible products" },
  { domain: "Intellectual Property", regulation: "Patents Act, Trade Marks Act, Copyright Act", status: "Filing strategy active; IP assignment clauses in all contracts" }
];

export const investorContact = {
  headline: "Partner With Us",
  subtext: "We welcome conversations with angel investors, family offices, venture capital, government innovation funds (SIDBI, iDEX, DRDO TDF), and strategic corporate investors aligned with India's deep-tech and defense ecosystem.",
  details: [
    { type: "Investor Enquiries", content: "invest@adiveeraviations.com", sub: "[TO BE ACTIVATED]" },
    { type: "Founder — Direct", content: "Aditya Veer Shrivastava", sub: "Founder & Director" },
    { type: "Address", content: "1, Adi Parisar, Bagsewaniya, Bhopal, Madhya Pradesh 462026", sub: "Headquarters" }
  ]
};
