import _ from 'lodash';
import { READ_VEGETABLE_LISTS } from '../actions';
import { READ_MEAL_LISTS } from '../actions';
import { READ_FISH_LISTS } from '../actions';
import { READ_OTHER_LISTS } from '../actions';

export default (lists = [], action) => {
    switch (action.type) {
        case READ_VEGETABLE_LISTS:
            return {
                ...lists,
                vegetableLists: _.mapKeys(action.response.data.vegetableLists, 'id')
            };
        case READ_MEAL_LISTS:
            return {
                ...lists,
                mealLists: _.mapKeys(action.response.data.mealLists, 'id')
            };
        case READ_FISH_LISTS:
            return {
                ...lists,
                fishLists: _.mapKeys(action.response.data.fishLists, 'id')
            };
        case READ_OTHER_LISTS:
            return {
                ...lists,
                otherLists: _.mapKeys(action.response.data.otherLists, 'id')
            };
        default:
            return lists;
    }
}