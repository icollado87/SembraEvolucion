import * as React from 'react';
export interface StepperStep{ title:string; content?:React.ReactNode; summary?:string }
/**
 * Vertical numbered stepper used across Compra HT / Movimiento HT / Cuenta Granaria.
 * @startingPoint section="Navigation" subtitle="Numbered flow steps" viewport="700x400"
 */
export interface StepperProps{ steps:StepperStep[]; activeIndex?:number; onStepClick?:(i:number)=>void }
export declare function Stepper(p:StepperProps):JSX.Element;