import {SHOW_MODAL} from "../constants/ui";

export const showModal = (bool) => (dispatch) => {
    dispatch({
        type: SHOW_MODAL,
        isModalOpen: bool,
    });
};
