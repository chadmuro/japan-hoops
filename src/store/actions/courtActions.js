export const addCourt = (court) => {
    return (dispatch, getState) => {
        

        dispatch({ type: 'ADD_COURT', court });
    }
};
