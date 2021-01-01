import React from "react";
import { useSelector } from "react-redux";
import { SmallButton } from "../SmallButton";
import { Icon, Container, WidgetName, Wrapper } from "./style";
import deleteIcon from "../../assets/icons/delete.svg";
import pencilIcon from "../../assets/icons/pencil.svg";
import checkIcon from "../../assets/icons/check.svg";

const WidgetListItem = ({ id, name, onSelect, onDelete, onEdit }) => {
  const selectedWidget = useSelector(({ widgets }) => widgets?.selectedWidget);
  return (
    <Container
      selectedWidgetId={selectedWidget?.id}
      id={id}
      onClick={() => onSelect(id)}
    >
      <WidgetName>{name || "N/A"}</WidgetName>
      <Wrapper>
        <SmallButton
          onClick={(e) => {
            e.stopPropagation();
            onSelect(id);
          }}
        >
          <Icon src={checkIcon} alt="" />
        </SmallButton>
        <SmallButton
          onClick={(e) => {
            e.stopPropagation();
            onEdit(id);
          }}
        >
          <Icon src={pencilIcon} alt="" />
        </SmallButton>
        <SmallButton
          onClick={(e) => {
            e.stopPropagation();
            onDelete(id);
          }}
        >
          <Icon src={deleteIcon} alt="" />
        </SmallButton>
      </Wrapper>
    </Container>
  );
};

export default WidgetListItem;
