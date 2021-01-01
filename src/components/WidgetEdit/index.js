import React from "react";
import { connect } from "react-redux";
import _ from "lodash"
import {
  addKeyValueRowToInEditWidget,
  deleteKeyValueRowToInEditWidget,
  selectWidget,
  updateInEditWidget,
  saveWidget,
} from "../../actions/widgets";
import { showModal } from "../../actions/ui";
import { Button } from "../Button";
import { Input } from "../Input";
import { SmallButton } from "../SmallButton";
import { isNumberIsInteger } from "../../utils/utils";
import { KEY_VALUE_PAIRS, WIDGET } from "../../constants/widgets";
import { Label, Row } from "./style";


const WidgetEdit = ({
  inEditWidget,
  onUpdateWidget,
  onUpdateInEditWidget,
  onShowModal,
  onSelectWidget,
  onAddKeyValueRowToInEditWidget,
  onDeleteKeyValueRowToInEditWidget,
}) => {
  const onChangeHandler = (e, i) => {
    const cloneInEditWidget = _.cloneDeep(inEditWidget);

    const { name, value } = e.target;
    if (name === KEY_VALUE_PAIRS.key || name === KEY_VALUE_PAIRS.value) {
      const updatedEntries = cloneInEditWidget.keyValuePairs.map(
        (entry, index) => (index === i ? { ...entry, [name]: value } : entry)
      );
      cloneInEditWidget.keyValuePairs = updatedEntries;
      onUpdateInEditWidget(cloneInEditWidget);
      return;
    }

    if (name === WIDGET.magicNumber) {
      if (!isNumberIsInteger(value)) return;
      cloneInEditWidget[name] = value;
      onUpdateInEditWidget(cloneInEditWidget);
      return;
    }

    cloneInEditWidget[name] = value;
    onUpdateInEditWidget(cloneInEditWidget);
  };

  const onSaveHandler = () => {
    onUpdateWidget(inEditWidget);
    onSelectWidget(inEditWidget?.id);
    onShowModal(false);
  };

  const addKeyValueRow = () => {
    onAddKeyValueRowToInEditWidget();
  };

  const deleteKeyValueRow = (index) => {
    onDeleteKeyValueRowToInEditWidget(index);
  };

  return (
    <div>
      <Row>
        <Label>Name</Label>
        <Input
          name={WIDGET.name}
          onChange={onChangeHandler}
          value={inEditWidget?.name}
        />
      </Row>
      <Row>
        <Label>Magic Number</Label>
        <Input
          name={WIDGET.magicNumber}
          onChange={onChangeHandler}
          value={inEditWidget?.magicNumber}
        />
      </Row>
      <Row>
        <Label>Key Value pairs</Label>

        {inEditWidget?.keyValuePairs?.map(
          ({ key, value }, index, allKeyValuePairs) => (
            <div key={index}>
              <Input
                name={KEY_VALUE_PAIRS.key}
                onChange={(e) => onChangeHandler(e, index)}
                value={key}
              />
              <Input
                name={KEY_VALUE_PAIRS.value}
                onChange={(e) => onChangeHandler(e, index)}
                value={value}
              />
              <SmallButton onClick={() => deleteKeyValueRow(index)}>
                x
              </SmallButton>
            </div>
          )
        )}
        <span>
          <SmallButton onClick={addKeyValueRow}>Add Key-Value pair</SmallButton>
        </span>
      </Row>
      <Button onClick={onSaveHandler}>Save Widget</Button>
    </div>
  );
};

const mapDispatchToProps = {
  onUpdateWidget: saveWidget,
  onUpdateInEditWidget: updateInEditWidget,
  onShowModal: showModal,
  onSelectWidget: selectWidget,
  onAddKeyValueRowToInEditWidget: addKeyValueRowToInEditWidget,
  onDeleteKeyValueRowToInEditWidget: deleteKeyValueRowToInEditWidget,
};

const mapStateToProps = (state) => ({
  inEditWidget: state.widgets.inEditWidget,
});

export default connect(mapStateToProps, mapDispatchToProps)(WidgetEdit);
