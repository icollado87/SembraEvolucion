import * as React from 'react';
export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement>{
  label?:string; hint?:string; error?:string; leftIcon?:React.ReactNode; rightIcon?:React.ReactNode;
}
export declare function Input(p:InputProps):JSX.Element;