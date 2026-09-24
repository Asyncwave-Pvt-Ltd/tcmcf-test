/** Site navigation model, mirroring Site Nav.dc.html and Site Footer.dc.html. */

export type NavLink = { label: string; href: string };

/**
 * Top-level nav. `compact` marks the four links the canvas keeps at tablet
 * width ("Home", "About", "Impact", "Get Involved").
 */
export const NAV_LINKS: readonly (NavLink & { compact: boolean })[] = [
  { label: "Home", href: "/", compact: true },
  { label: "About", href: "/about", compact: true },
  { label: "Our Work", href: "/community", compact: false },
  { label: "Impact", href: "/impact", compact: true },
  { label: "Stories", href: "/stories", compact: false },
  { label: "Get Involved", href: "/get-involved", compact: true },
];

/**
 * The canvas marks Community, Accreditations and Partners as `active="Our Work"`,
 * so all three light up the same nav item.
 */
const OUR_WORK_ROUTES = ["/community", "/accreditations", "/partners"];

export function isNavActive(href: string, pathname: string): boolean {
  if (href === "/community") return OUR_WORK_ROUTES.includes(pathname);
  if (href === "/") return pathname === "/";
  return pathname.startsWith(href);
}

/**
 * Per-route sub-nav strips, taken from each page's `sub="..."` prop. Ids match
 * the section anchors on the corresponding page.
 */
export const SUB_NAVS: Record<string, readonly NavLink[]> = {
  "/about": [
    { label: "Overview", href: "#overview" },
    { label: "History", href: "#history" },
    { label: "Vision", href: "#vision" },
    { label: "Mission", href: "#mission" },
    { label: "Team", href: "#team" },
    { label: "Purpose", href: "#purpose" },
  ],
  "/get-involved": [
    { label: "Work With Us", href: "#work-with-us" },
    { label: "Partner With Us", href: "#partner-with-us" },
    { label: "Internship", href: "#internship" },
  ],
  "/community": [
    { label: "FPC (Tribal)", href: "#fpc-tribal" },
    { label: "Women-led FPC", href: "#women-led-fpc" },
    { label: "SHGs", href: "#shgs" },
  ],
  "/compliance": [
    { label: "Annual Reports", href: "#annual-reports" },
    { label: "Audit Reports", href: "#audit-reports" },
    { label: "FC Annual Reports", href: "#fc-annual-reports" },
  ],
};

export const FOOTER_COLUMNS: readonly {
  heading: string;
  links: readonly NavLink[];
}[] = [
  {
    heading: "Explore",
    links: [
      { label: "About", href: "/about" },
      { label: "Our Work", href: "/community" },
      { label: "Impact", href: "/impact" },
      { label: "Success Stories", href: "/stories" },
      { label: "Accreditations", href: "/accreditations" },
    ],
  },
  {
    heading: "Engage",
    links: [
      { label: "Partner With Us", href: "/get-involved#partner-with-us" },
      { label: "Work With Us", href: "/get-involved#work-with-us" },
      { label: "Internship", href: "/get-involved#internship" },
      { label: "Community / Institution", href: "/community" },
      { label: "Compliance", href: "/compliance" },
    ],
  },
];
