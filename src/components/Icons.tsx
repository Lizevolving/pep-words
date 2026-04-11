import type { ReactNode, SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

function IconBase({
  children,
  className = "h-4 w-4",
  viewBox = "0 0 24 24",
  ...props
}: IconProps & {
  children: ReactNode;
}) {
  return (
    <svg
      viewBox={viewBox}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.9"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={className}
      {...props}
    >
      {children}
    </svg>
  );
}

export function SearchIcon(props: IconProps) {
  return (
    <IconBase {...props}>
      <circle cx="11" cy="11" r="6.5" />
      <path d="m16 16 4 4" />
    </IconBase>
  );
}

export function GridIcon(props: IconProps) {
  return (
    <IconBase {...props}>
      <rect x="4" y="4" width="6.5" height="6.5" rx="1.5" />
      <rect x="13.5" y="4" width="6.5" height="6.5" rx="1.5" />
      <rect x="4" y="13.5" width="6.5" height="6.5" rx="1.5" />
      <rect x="13.5" y="13.5" width="6.5" height="6.5" rx="1.5" />
    </IconBase>
  );
}

export function ListIcon(props: IconProps) {
  return (
    <IconBase {...props}>
      <path d="M9 6h11" />
      <path d="M9 12h11" />
      <path d="M9 18h11" />
      <circle cx="5" cy="6" r="1" fill="currentColor" stroke="none" />
      <circle cx="5" cy="12" r="1" fill="currentColor" stroke="none" />
      <circle cx="5" cy="18" r="1" fill="currentColor" stroke="none" />
    </IconBase>
  );
}

export function HeartIcon(props: IconProps) {
  return (
    <IconBase {...props}>
      <path d="M12 20.25c-5.25-3.38-8.5-6.3-8.5-10.47A4.73 4.73 0 0 1 8.3 5c1.55 0 2.88.72 3.7 1.96A4.43 4.43 0 0 1 15.7 5a4.73 4.73 0 0 1 4.8 4.78c0 4.17-3.25 7.09-8.5 10.47Z" />
    </IconBase>
  );
}

export function VolumeIcon(props: IconProps) {
  return (
    <IconBase {...props}>
      <path d="M4.5 14.25h3.75L13.5 18V6L8.25 9.75H4.5Z" />
      <path d="M17 9a4.5 4.5 0 0 1 0 6" />
      <path d="M19.75 7a7.4 7.4 0 0 1 0 10" />
    </IconBase>
  );
}

export function QuizIcon(props: IconProps) {
  return (
    <IconBase {...props}>
      <rect x="4" y="4" width="16" height="16" rx="3" />
      <path d="m8.5 12 2.25 2.25L15.5 9.5" />
    </IconBase>
  );
}

export function ChevronLeftIcon(props: IconProps) {
  return (
    <IconBase {...props}>
      <path d="m15 18-6-6 6-6" />
    </IconBase>
  );
}

export function ChevronRightIcon(props: IconProps) {
  return (
    <IconBase {...props}>
      <path d="m9 18 6-6-6-6" />
    </IconBase>
  );
}

export function BookIcon(props: IconProps) {
  return (
    <IconBase {...props}>
      <path d="M5 6.5A2.5 2.5 0 0 1 7.5 4H20v15.5H7.5A2.5 2.5 0 0 0 5 22Z" />
      <path d="M5 6.5V22" />
      <path d="M9 8.5h7" />
      <path d="M9 12h7" />
    </IconBase>
  );
}

export function GraduationCapIcon(props: IconProps) {
  return (
    <IconBase {...props}>
      <path d="m2.5 9.5 9.5-5 9.5 5-9.5 5Z" />
      <path d="M6.5 11.6V16c0 1.8 2.4 3.3 5.5 3.3s5.5-1.5 5.5-3.3v-4.4" />
      <path d="M21.5 10v5.5" />
    </IconBase>
  );
}

export function FileTextIcon(props: IconProps) {
  return (
    <IconBase {...props}>
      <path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8Z" />
      <path d="M14 3v5h5" />
      <path d="M9 13h6" />
      <path d="M9 17h6" />
    </IconBase>
  );
}

export function CloseIcon(props: IconProps) {
  return (
    <IconBase {...props}>
      <path d="M6 6 18 18" />
      <path d="M18 6 6 18" />
    </IconBase>
  );
}

export function StarIcon(props: IconProps) {
  return (
    <IconBase {...props}>
      <path d="m12 3.75 2.54 5.15 5.68.82-4.11 4 1 5.66L12 16.7l-5.11 2.68 1-5.66-4.11-4 5.68-.82Z" />
    </IconBase>
  );
}

export function CardsIcon(props: IconProps) {
  return (
    <IconBase {...props}>
      <rect x="6.5" y="7" width="11.5" height="13" rx="2" />
      <path d="M9 7V5.75A1.75 1.75 0 0 1 10.75 4h5.5A1.75 1.75 0 0 1 18 5.75V7" />
      <path d="M4 10.5V9.25A2.25 2.25 0 0 1 6.25 7H6.5" />
    </IconBase>
  );
}
