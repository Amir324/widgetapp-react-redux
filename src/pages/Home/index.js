import React, { useEffect } from "react";
import { connect } from "react-redux";
import {
  createWidget,
  deleteWidget,
  editWidget,
  getWidgets,
  selectWidget,
  saveWidget,
  updateInEditWidget,
} from "../../actions/widgets";
import { showModal } from "../../actions/ui";
import Header from "../../components/Header";
import WidgetListItem from "../../components/WidgetListItem";
import WidgetDetails from "../../components/WidgetDetails";
import Modal from "../../components/Modal";
import WidgetEdit from "../../components/WidgetEdit";
import { Button } from "../../components/Button";
import {
  Container,
  InnerContainer,
  WidgetDetailsWrapper,
  WidgetListWrapper,
  NoSelectedWidget,
} from "./style";

const Home = ({
  widgets,
  onGetWidgets,
  onSelectWidget,
  onDeleteWidget,
  onEditWidget,
  selectedWidget,
  isModalOpen,
  onShowModal,
  onCreateWidget,
}) => {
  useEffect(() => {
    onGetWidgets();
  }, [onGetWidgets]);

  const onEditHandler = (id) => {
    onShowModal(true);
    onEditWidget(id);
  };

  const onCreateHandler = () => {
    onShowModal(true);
    onCreateWidget();
  };

  return (
    <Container>
      {isModalOpen && (
        <Modal>
          <WidgetEdit />
        </Modal>
      )}
      <Header />
      <InnerContainer>
        <WidgetListWrapper>
          {widgets.map(({ id, name }) => (
            <WidgetListItem
              key={id}
              id={id}
              name={name}
              onSelect={onSelectWidget}
              onDelete={onDeleteWidget}
              onEdit={onEditHandler}
            />
          ))}
          <Button onClick={onCreateHandler}>+ New Widget</Button>
        </WidgetListWrapper>

        <WidgetDetailsWrapper>
          {selectedWidget?.id ? (
            <WidgetDetails
              id={selectedWidget?.id}
              name={selectedWidget?.name}
              number={selectedWidget?.magicNumber}
              pairs={selectedWidget?.keyValuePairs}
              onEdit={onEditHandler}
            />
          ) : (
            <NoSelectedWidget>Select or Create Widget</NoSelectedWidget>
          )}
        </WidgetDetailsWrapper>
      </InnerContainer>
    </Container>
  );
};

const mapDispatchToProps = {
  onGetWidgets: getWidgets,
  onDeleteWidget: deleteWidget,
  onCreateWidget: createWidget,
  onUpdateWidget: saveWidget,
  onEditWidget: editWidget,
  onUpdateInEditWidget: updateInEditWidget,
  onSelectWidget: selectWidget,
  onShowModal: showModal,
};

const mapStateToProps = ({ widgets, ui }) => {
  return {
    widgets: widgets?.widgets,
    selectedWidget: widgets?.selectedWidget,
    inEditWidget: widgets?.inEditWidget,
    isModalOpen: ui?.isModalOpen,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
