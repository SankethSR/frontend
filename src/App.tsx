import React, { useState } from "react";
import "@patternfly/react-core/dist/styles/base.css";
import { Page, PageHeader, Flex, FlexItem } from "@patternfly/react-core";
import Map from "./components/map/map";
import Header from "./components/header/header";
import Search from "./components/search/search"
import VictimDetail from "./components/victim-details/victim-details";
import { Card, CardBody } from '@patternfly/react-core';
import { useSelector } from "react-redux";


const App: React.FC = () => {
    // const [victimList, setVictimList] = useState();
    let noDataFound: Boolean = false;
    let initialDisplay: Boolean = true;
    let showMap: Boolean = false;

    const storedState: any = useSelector((state) => state);
    let props = storedState.SearchReducer.name;


    if (storedState.SearchReducer.name == "VICTIM_NAME") {
        initialDisplay = true;
    } else if (Object.keys(storedState.SearchReducer.name).length == 0) {
        noDataFound = false;
        initialDisplay = false;
    } else if (props.name != undefined) {
        // This is to stop re-rendering Map Component once the shelter name is retrived from API.

        showMap = true;
        noDataFound = true;
        initialDisplay = false;
    } else {
        noDataFound = true;
        initialDisplay = false;
    }

    return (
        <div>
            <Header />
            <Search />
            {
                !initialDisplay ?
                    noDataFound ?
                        <Card isHoverable>
                            <CardBody>
                                <Flex className="search-bar-center">
                                    <FlexItem>
                                        {showMap ? <Map /> : null}
                                    </FlexItem>
                                    <FlexItem>
                                        <VictimDetail />
                                    </FlexItem>
                                </Flex>
                            </CardBody>
                        </Card>

                        :
                        <Flex>
                            {/* Exxecute the below code if the data is empty / For NO DATA response */}
                            <div>No Data. Please check Victim's name and try again!</div>
                        </Flex>
                    : null
            }
        </div>
    );
};

export default App;
