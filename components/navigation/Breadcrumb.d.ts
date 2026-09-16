export interface BreadcrumbItem{ label:string; href?:string }
export interface BreadcrumbProps{ items:BreadcrumbItem[] }
export declare function Breadcrumb(p:BreadcrumbProps):JSX.Element;