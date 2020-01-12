import React from "react";
import "@patternfly/react-core/dist/styles/base.css";
import { Page, PageHeader, Flex, FlexItem } from "@patternfly/react-core";
import Map from "./components/map/map";
import Header from "./components/header/header";
import Search from "./components/search/search"
import VictimDetail from "./components/victim-details/victim-details";
import configureStore from "./redux/store";


const App: React.FC = () => {
    const state = configureStore.getState();
    console.table(state);

    return (
        <div className="App">
            <Header />
            <Search />
            {
            true ? 
                    <Flex>
                        <FlexItem>
                            <Map />
                        </FlexItem>
                        <FlexItem>
                            <VictimDetail />
                        </FlexItem>
                    </Flex> : 
                    <Flex>
                        {/* Exxecute the below code if the data is empty / For NO DATA response */}
                        <div>HELLO</div>
                        {/* <FlexItem>
                            <Map />
                        </FlexItem>
                        <FlexItem>
                            <VictimDetail />
                        </FlexItem> */}
                    </Flex>
            }
        </div>
    );
};

export default App;
