import React from "react";
import "@patternfly/react-core/dist/styles/base.css";
import {
    Form,
    FormGroup,
    TextInput,
    ActionGroup,
    Button,
    Flex, FlexItem, FlexModifiers, FlexBreakpoints
} from '@patternfly/react-core';
import "./search.css";


const Search: React.FC = () => {

    return (
        <Form className="form-style">
            <Flex breakpointMods={[{ modifier: FlexModifiers.column }]}>
                <Flex>
                    <FlexItem><FormGroup
                        isRequired={true}
                        fieldId="simple-form-name"
                        helperText="Please provide Victim's full name">
                        <TextInput
                            type="search"
                            style={{ maxWidth: "20em", marginRight: "1em", alignItems: "center" }}
                            isRequired={true}
                            aria-label="Search by Name"
                        />
                    </FormGroup></FlexItem>
                    <FlexItem><ActionGroup className="action-group-style">
                        <Button variant="primary">Search</Button>
                        <Button variant="secondary">clear</Button>
                    </ActionGroup></FlexItem>
                </Flex></Flex>
        </Form>
    );
}

export default Search;