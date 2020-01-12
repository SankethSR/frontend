
// export const VICTIM_NAME = "VICTIM_NAME";

// export const searchAction = (name: String) => ({
//     type: VICTIM_NAME,
//     payload: {
//         searchName: name
//     }
// });

// import axios from 'axios';

// export const searchAction = (data: any) => async dispatch => {
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

export function searchAction(name: String) {
    //return the actual action to do
    return function (dispatch: (arg0: { type: string; payload: any; }) => void) {
        fetch('http://localhost:8080/find/victim/byName/' + name)
            .then(res => {
                return res.json();
            })
            .then(res => {
                // console.log(res)
                debugger
                dispatch({ type: "FETCH_CUSTOM_NEWS", payload: res.map.victims.list });
            })
            .catch(err => {
                console.log(err);
            })
    }
}