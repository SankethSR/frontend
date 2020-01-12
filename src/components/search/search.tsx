import React, { useState } from "react";
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
import { connect, useDispatch, useSelector } from "react-redux";
import { searchAction } from "../../redux/actions/searchAction";

const Search: React.FC = () => {

    const [name, setName] = useState("");

    const handleNameChange = (value: string) => setName(value);
    /*const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
        debugger
        searchAction(name)
        // Prevent page reload
        e.preventDefault();
    };*/

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
        getVictimName(name);
    }

    const result : any = useSelector(state => state)

    const dispatch = useDispatch();
    const getVictimName = (name: String) => dispatch(searchAction(name));

    


    return (
        <Form className="form-style" onSubmit={handleSubmit}>
            <Flex breakpointMods={[{ modifier: FlexModifiers.column }]}>
                <Flex>
                    <FlexItem>
                        <FormGroup
                            isRequired={true}
                            fieldId="simple-form-name"
                            helperText="Please provide Victim's full name">
                            <TextInput
                                type="search"
                                style={{ maxWidth: "30em", marginRight: "1em", alignItems: "center" }}
                                isRequired={true}
                                value={name}
                                aria-label="Search by Name"
                                onChange={handleNameChange}
                            />
                        </FormGroup>
                    </FlexItem>
                    <FlexItem><ActionGroup className="action-group-style">
                        <Button variant="primary" type="submit" aria-label="search" isInline={true}>Search</Button>
                        <Button variant="secondary">Clear</Button>
                    </ActionGroup></FlexItem>
                </Flex></Flex>
        </Form>
    );
}


export default Search;