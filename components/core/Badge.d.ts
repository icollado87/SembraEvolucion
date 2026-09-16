/**
 * Status pill used across tables (Aprobada, Pagada, Vencida, Cancelada).
 * @startingPoint section="Core" subtitle="Status badges" viewport="700x160"
 */
export interface BadgeProps{ tone?:'success'|'warning'|'danger'|'neutral'|'muted'; children:React.ReactNode }
export declare function Badge(p:BadgeProps):JSX.Element;