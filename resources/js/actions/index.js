import axios from 'axios';
export const READ_VEGETABLE_LISTS = 'READ_VEGETABLE_LISTS';
export const READ_MEAL_LISTS = 'READ_MEAL_LISTS';
export const READ_FISH_LISTS = 'READ_FISH_LISTS';
export const READ_OTHER_LISTS = 'READ_OTHER_LISTS';

export const readVegetableLists = () => async dispatch => {
    const response = await axios.get('/vegetable_list');
    dispatch({ type: READ_VEGETABLE_LISTS, response });
};

export const readMealLists = () => async dispatch => {
    const response = await axios.get('/meal_list');
    dispatch({ type: READ_MEAL_LISTS, response });
};

export const readFishLists = () => async dispatch => {
    const response = await axios.get('/fish_list');
    dispatch({ type: READ_FISH_LISTS, response });
};

export const readOtherLists = () => async dispatch => {
    const response = await axios.get('/other_list');
    console.log(response);
    
    dispatch({ type: READ_OTHER_LISTS, response });
};
