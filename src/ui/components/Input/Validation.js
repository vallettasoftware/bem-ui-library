import {REQUIRED, EMAIL, PASSWORD, CUSTOM} from './types';

export default function validation(item, value) {
    
    switch(item.type) {
        case REQUIRED: 
            return value === '';
        case EMAIL: 
            return true/*!value.match('[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$')*/;
        case PASSWORD:
            return value.length < item.length;
        case CUSTOM:
            return !item.callback(value);
        default:
            return true;
    }
}