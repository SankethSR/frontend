import React from "react";
import "@patternfly/react-core/dist/styles/base.css";
import {Page, PageHeader} from "@patternfly/react-core";
import Map from "./components/map/map";

const App: React.FC = () => {
return(
    <Map />
);
};

export default App;
