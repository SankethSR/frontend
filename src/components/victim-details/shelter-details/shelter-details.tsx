import React from "react";
import "@patternfly/react-core/dist/styles/base.css";
import { useSelector, useDispatch } from "react-redux";
import { FlexItem } from "@patternfly/react-core";
import { shelterAction } from "../../../redux/actions/shelterAction";


const ShelterDetail: React.FC = () => {
    const storedState: any = useSelector((state) => state);
    let props = storedState.SearchReducer.name;
    let condition: Boolean = false;
    const dispatch = useDispatch();

    // This is to stop dispatching once the name is retrived from API.
    if (props.name == undefined) {
        condition = true;
    }
    let callDispatchEvent = condition ? dispatch(shelterAction(props)) : null;
    return (
        <FlexItem>{props.name}</FlexItem>
    );
}

export default ShelterDetail;