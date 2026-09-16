/**
 * Crop selector (Cebada / Soja / Trigo) — the domain-specific radio group.
 * @startingPoint section="Domain" subtitle="Crop picker" viewport="700x180"
 */
export interface CropSelectorProps{ value?:string; onChange?:(v:string)=>void; options?:string[] }
export declare function CropSelector(p:CropSelectorProps):JSX.Element;