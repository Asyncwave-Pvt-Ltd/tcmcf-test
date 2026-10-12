import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";

import { complianceSection } from "./schemaTypes/compliance-section";
import { story } from "./schemaTypes/story";
import { teamMember } from "./schemaTypes/team-member";

export default defineConfig({
  name: "default",
  title: "TCMCF",
  projectId: process.env.SANITY_STUDIO_PROJECT_ID!,
  dataset: process.env.SANITY_STUDIO_DATASET ?? "production",
  plugins: [structureTool()],
  schema: { types: [story, teamMember, complianceSection] },
});
