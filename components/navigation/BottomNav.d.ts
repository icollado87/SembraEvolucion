import * as React from 'react';
/**
 * Portal Productor mobile bottom nav. 4 primary items + centre FAB for Comprar HT.
 * Fifth slot ("Más") opens the Drawer with the full 8-module tree.
 * @startingPoint section="Navigation" subtitle="Mobile bottom nav + FAB" viewport="390x80"
 */
export interface BottomNavProps{ active?:string; onNav?:(k:string)=>void; onCompra?:()=>void }
export declare function BottomNav(p:BottomNavProps):JSX.Element;
