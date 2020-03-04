import PageLoadingModel from './models/pageLoadingModel';
export const mutations = {
    setPageLoading(state: PageLoadingModel, data: boolean) {
        state.pageLoading = data;
    }
};
