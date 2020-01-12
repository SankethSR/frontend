import React from "react";
import "@patternfly/react-core/dist/styles/base.css";
import {
    Page,
    PageHeader,
    Card,
    CardHeader,
    CardFooter,
    CardBody
} from '@patternfly/react-core';
import configureStore from "../../redux/store";


const VictimDetail: React.FC = () => {
    const state = configureStore.getState();
    console.table(state);

    const logoProps = {
        href: "https://erdemo.io",
        target: "_blank"
    };

    return (
        <Card>
            <CardHeader>Victim's Location</CardHeader>
            <CardBody>

            </CardBody>
            <CardFooter>Footer</CardFooter>
        </Card>
    );
}

export default VictimDetail;