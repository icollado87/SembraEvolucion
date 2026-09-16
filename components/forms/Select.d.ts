import * as React from 'react';
export interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement>{
  label?:string; hint?:string; error?:string;
}
export declare function Select(p:SelectProps):JSX.Element;