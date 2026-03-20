import type { SVGProps } from "react";

/**
 * Marca Microsoft (quatro quadrados), comum em materiais Microsoft 365.
 * Fonte: Wikimedia Commons — https://commons.wikimedia.org/wiki/File:Microsoft_logo.svg
 */
export const MicrosoftLogoMark = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 22 22" xmlns="http://www.w3.org/2000/svg" {...props}>
    <title>Microsoft</title>
    <path fill="#f35325" d="M1 1h10v10H1z" />
    <path fill="#81bc06" d="M12 1h10v10H12z" />
    <path fill="#05a6f0" d="M1 12h10v10H1z" />
    <path fill="#ffba08" d="M12 12h10v10H12z" />
  </svg>
);
