import React from "react";
import "@patternfly/react-core/dist/styles/base.css";
import { Page, PageHeader, Flex, FlexItem } from "@patternfly/react-core";
import Map from "./components/map/map";
import Header from "./components/header/header";
import Search from "./components/search/search"
import VictimDetail from "./components/victim-details/victim-details";

const App: React.FC = () => {
    return (
        <div className="App">
            <Header />
            <Search />
            <Flex>
                <FlexItem>
                    <Map />
                </FlexItem>
                <FlexItem>
                    <VictimDetail />
                </FlexItem>
            </Flex>
        </div>
    );
};

export default App;
