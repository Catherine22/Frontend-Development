export const selectionLibrary = (libraryId) => {

    return {
        type: 'select_library',
        payload: libraryId
    };
};
