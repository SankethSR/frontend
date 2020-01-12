
export const VICTIM_NAME = "VICTIM_NAME";

export const searchAction = (name: String) => ({
    type: VICTIM_NAME,
    payload: {
        searchName: name
    }
});

// import axios from 'axios';

// export const search = data => async dispatch => {
//     dispatch({type: 'SEARCH_PENDING'});
//     try {
//         const response = await axios.post("URL_for search name", data);
//         localStorage.setItem('activeUser', JSON.stringify(response.data));
//         dispatch({
//             type: 'SEARCH_SUCCESS',
//             payload: response.data
//         });
//     } catch(error) {
//         throw error;
//     }
// };