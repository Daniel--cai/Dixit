/** @jsx jsx */
import { jsx } from "theme-ui";
import React from "react";

export interface Input extends React.InputHTMLAttributes<HTMLInputElement> {
  id?: string;
  children?: React.ReactNode;
}
