import * as React from 'react';
export interface ModalProps{ open:boolean; onClose?:()=>void; title?:string; children?:React.ReactNode; actions?:React.ReactNode }
export declare function Modal(p:ModalProps):JSX.Element|null;