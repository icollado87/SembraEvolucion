import * as React from 'react';
/**
 * Primary action pill. Verde lima filled = primary CTA (one per screen), outline black = secondary, dark = inverse.
 * @startingPoint section="Core" subtitle="Pill button in brand variants" viewport="700x220"
 */
export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>{
  variant?: 'primary'|'secondary'|'ghost'|'dark'|'danger';
  size?: 'sm'|'md'|'lg';
  iconLeft?: React.ReactNode;
  iconRight?: React.ReactNode;
  fullWidth?: boolean;
}
export declare function Button(props: ButtonProps): JSX.Element;
