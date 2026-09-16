import * as React from 'react';
export interface NavItem{ key:string; label:string; children?:{key:string;label:string}[] }
/**
 * Portal Productor header. Desktop = white user strip + black bar with modules
 * (submenus supported via `children` — used for Mis Compras + Precertificación).
 * Mobile = compact 56px header (logo + burger only); pair with <BottomNav/> and <Drawer/>.
 * @startingPoint section="Navigation" subtitle="Portal top bar (desktop + mobile shell)" viewport="1440x140"
 */
export interface TopBarProps{
  company?:string; user?:string;
  items?:NavItem[]; active?:string;
  onNav?:(k:string)=>void; onLogout?:()=>void; onMenu?:()=>void;
  mobile?:boolean; basePath?:string;
}
export declare function TopBar(p:TopBarProps):JSX.Element;
