import React from "react";
import { Navigation } from "../components/navigation";

export const DefaultLayout: React.FC = ({ children }) => {
    return (
        <React.Fragment>
            <Navigation />
            {children}
        </React.Fragment>
    )
}