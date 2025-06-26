// Custom SVG icons for metalworking/roofing services

interface IconProps {
  className?: string;
}

export const GutterIcon = ({ className }: IconProps) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    {/* Gutter system representation */}
    <path d="M3 8h18v2L19 12H5L3 10V8z" />
    <path d="M19 12v6l-2 2H7l-2-2v-6" />
    <path d="M10 18v3" />
    <path d="M14 18v3" />
    <path d="M5 8V6a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v2" />
  </svg>
);

export const RoofWorkIcon = ({ className }: IconProps) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    {/* Roof with dormer */}
    <path d="M3 18h18" />
    <path d="M4 18v-6l8-8 8 8v6" />
    <path d="M9 12h6v6H9z" />
    <path d="M9 12l3-3 3 3" />
    <rect x="10" y="14" width="4" height="2" />
  </svg>
);

export const WallCapIcon = ({ className }: IconProps) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    {/* Wall with protective capping */}
    <rect x="2" y="12" width="20" height="8" />
    <path d="M2 12V8a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v4" />
    <path d="M1 10h22v2H1z" />
    <path d="M6 16h2" />
    <path d="M10 16h2" />
    <path d="M14 16h2" />
    <path d="M18 16h2" />
  </svg>
);

export const WindowSillIcon = ({ className }: IconProps) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    {/* Window with sill */}
    <rect x="4" y="4" width="16" height="12" />
    <path d="M4 16h16" />
    <path d="M2 16h20v2H2z" />
    <path d="M12 4v12" />
    <path d="M4 10h16" />
    <path d="M8 7h2" />
    <path d="M14 7h2" />
  </svg>
);

export const RepairIcon = ({ className }: IconProps) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    {/* Wrench with metal sheet */}
    <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
    <rect x="2" y="14" width="8" height="6" rx="1" />
  </svg>
);

export const CustomWorkIcon = ({ className }: IconProps) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    {/* Hammer with metal forming */}
    <path d="M15 12l-8.5-8.5c-.83-.83-2.17-.83-3 0s-.83 2.17 0 3L12 15" />
    <path d="M17.64 15L22 10.64" />
    <path d="M20.34 17.34L17 20.69a2 2 0 0 1-2.83 0l-1.41-1.41a2 2 0 0 1 0-2.83L16.34 13" />
    <rect x="2" y="18" width="6" height="3" rx="1" />
    <path d="M5 18v-3" />
  </svg>
);

export const MasterBadgeIcon = ({ className }: IconProps) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    {/* Master craftsman badge */}
    <path d="M12 2l2.5 7.5h7.5l-6 4.5 2.5 7.5L12 17l-6.5 4.5L8 14 2 9.5h7.5L12 2z" />
    <circle cx="12" cy="12" r="3" />
    <path d="M12 10v4" />
    <path d="M10 12h4" />
  </svg>
);

export const FamilyBusinessIcon = ({ className }: IconProps) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    {/* Family business representation */}
    <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
    <rect x="8" y="2" width="8" height="4" rx="1" ry="1" />
    <circle cx="12" cy="11" r="2" />
    <path d="M9 16h6" />
    <path d="M8 20h8" />
  </svg>
);

export const ExperienceIcon = ({ className }: IconProps) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    {/* Clock with gears representing experience */}
    <circle cx="12" cy="12" r="10" />
    <polyline points="12,6 12,12 16,14" />
    <circle cx="18" cy="6" r="2" />
    <circle cx="6" cy="18" r="2" />
    <path d="M18 8v2" />
    <path d="M6 16v2" />
  </svg>
);