/**
 * Centralized Data Barrel Export
 * 
 * All domain data is organized in individual files for maintainability.
 * Import from specific files for tree-shaking, or from here for convenience.
 */

// ─── Company & Site ────────────────────────────────────────────
export { siteConfig } from "@/config/site";

// ─── About ─────────────────────────────────────────────────────
export { timeline, values, pillars, vision, mission, problemsList, solutionsList, legalIdentity } from "./about";

// ─── Home ──────────────────────────────────────────────────────
export { heroHeadline, heroStats, whyUs, stages, homeOfferings, featuredProjects, growthMilestones, currentStatus } from "./home";

// ─── Services / Products ───────────────────────────────────────
export { services } from "./services";

// ─── Technology ────────────────────────────────────────────────
export { techStacks, rdLabsFull as rdLabs, ipStrategyArr as ipStrategy } from "./technology";

// ─── Work / Projects ───────────────────────────────────────────
export { projects } from "./work";

// ─── Team ──────────────────────────────────────────────────────
export { coreTeam, teamCulture } from "./team";

// ─── Investors ─────────────────────────────────────────────────
export { investmentThesis, marketOpportunity, revenueStreamsArr, growthRoadmap, regulatoryFramework, investorContact } from "./investors";

// ─── Careers ───────────────────────────────────────────────────
export { roles, perks } from "./careers";

// ─── Contact ───────────────────────────────────────────────────
export { contactDetails, inquiryTypes } from "./contact";

// ─── Insights ──────────────────────────────────────────────────
export { reports, caseStudies, blogTopics } from "./insights";

// ─── Partnerships ──────────────────────────────────────────────
export { industries, partnershipModels, partnerTypes } from "./partnerships";
