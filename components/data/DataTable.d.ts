import * as React from 'react';
export interface Column{ key:string; label:string; link?:boolean; render?:(row:any)=>React.ReactNode }
/**
 * Portal data table. Gray uppercase header, underlined black links (no system blue), empty state built in.
 * @startingPoint section="Data" subtitle="Data table with empty state" viewport="700x320"
 */
export interface DataTableProps{ columns:Column[]; rows:any[]; empty?:string }
export declare function DataTable(p:DataTableProps):JSX.Element;