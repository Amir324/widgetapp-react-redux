import React, {useReducer} from "react";
import { numberToWords } from "../../utils/utils";
import { Cell, CellRow, Label, Row, Container } from "./style";
import {SmallButton} from "../SmallButton";

const DISPLAY_LIMIT = 5;

const WidgetDetails = ({ id, name, number, pairs, onEdit}) => {

  return (
    <Container>
      <Row>
        <Label>Name</Label>
        <span>{name||"N/A"}</span>
      </Row>
      <Row>
        <Label>id</Label>
        <span>{id}</span>
      </Row>
      <Row>
        <Label>Magic number</Label>
        <span>{numberToWords(number) || "N/A"}</span>
      </Row>

      <Row>
        <Label>{`Key value pairs (only top ${DISPLAY_LIMIT} displayed)`}</Label>

        {pairs?.length > 0 ? pairs
          ?.map(({ key, value }, i) => (
            <CellRow key={i}>
              <Cell>{key}</Cell> <Cell>{value}</Cell>
            </CellRow>
          ))
          .slice(0, DISPLAY_LIMIT): "N/A"}
      </Row>
        <SmallButton onClick={()=>{onEdit(id)}}>Edit</SmallButton>
    </Container>
  );
};

export default WidgetDetails;
