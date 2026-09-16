/**
 * Surface container. Dark variant reproduces the Home metric card (black bg, lime number).
 * @startingPoint section="Core" subtitle="Surface card" viewport="700x260"
 */
export interface CardProps{ variant?:'light'|'dark'|'muted'; padding?:number|string; children:React.ReactNode; style?:React.CSSProperties }
export declare function Card(p:CardProps):JSX.Element;