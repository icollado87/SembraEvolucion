/**
 * Home-style metric card: black surface, lime number, pill CTA.
 * @startingPoint section="Domain" subtitle="Home metric card" viewport="700x320"
 */
export interface MetricCardProps{ title:string; value:string|number; unit?:string; cta?:string; onCta?:()=>void }
export declare function MetricCard(p:MetricCardProps):JSX.Element;