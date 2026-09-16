import * as React from 'react';
export interface DrawerSection{ key:string; label:string; children?:{key:string;label:string}[] }
/**
 * Mobile side-drawer with the full 8-module tree, accordions on parent modules,
 * visible close button, and 55% black scrim.
 */
export interface DrawerProps{
  open:boolean; onClose:()=>void; onNav?:(k:string)=>void;
  active?:string; user?:{name:string;company:string;initials?:string}; sections:DrawerSection[];
}
export declare function Drawer(p:DrawerProps):JSX.Element|null;
