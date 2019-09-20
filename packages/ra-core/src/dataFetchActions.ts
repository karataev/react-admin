export const GET_LIST = 'GET_LIST';
export const GET_ONE = 'GET_ONE';
export const GET_MANY = 'GET_MANY';
export const GET_MANY_REFERENCE = 'GET_MANY_REFERENCE';
export const CREATE = 'CREATE';
export const UPDATE = 'UPDATE';
export const UPDATE_MANY = 'UPDATE_MANY';
export const DELETE = 'DELETE';
export const DELETE_MANY = 'DELETE_MANY';

export const fetchActionsWithRecordResponse = [GET_ONE, CREATE, UPDATE];
export const fetchActionsWithArrayOfIdentifiedRecordsResponse = [
    GET_LIST,
    GET_MANY,
    GET_MANY_REFERENCE,
];
export const fetchActionsWithArrayOfRecordsResponse = [
    ...fetchActionsWithArrayOfIdentifiedRecordsResponse,
    UPDATE_MANY,
    DELETE_MANY,
];
export const fetchActionsWithTotalResponse = [GET_LIST, GET_MANY_REFERENCE];

export const sanitizeFetchType = (fetchType: string) => {
    switch (fetchType) {
        case CREATE:
        case 'create':
            return 'create';
        case GET_LIST:
        case 'getList':
            return 'getList';
        case GET_ONE:
        case 'getOne':
            return 'getOne';
        case GET_MANY:
        case 'getMany':
            return 'getMany';
        case GET_MANY_REFERENCE:
        case 'getManyReference':
            return 'getManyReference';
        case DELETE:
        case 'delete':
            return 'delete';
        case DELETE_MANY:
        case 'deleteMany':
            return 'deleteMany';
        case UPDATE:
        case 'update':
            return 'update';
        case UPDATE_MANY:
        case 'updateMany':
            return 'updateMany';
        default:
            return fetchType;
    }
};
