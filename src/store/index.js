import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        Numbers: [ 
            { phone: 11111111111111, id: 1 },
            { phone: 22222222222222, id: 2 },
            { phone: 33333333333333, id: 3 },
            { phone: 44444444444444, id: 4 },
            { phone: 55555555555555, id: 5 },
            { phone: 66666666666666, id: 6 },
            { phone: 77777777777777, id: 7 },
            { phone: 88888888888888, id: 8 },
            { phone: 99999999999999, id: 9 },
            { phone: 101010101010110, id: 10 },
            { phone: 121212121212121, id: 11 },
        ],
        FilteredNumbers: [],
        LinesInPage: 5,
        CurrentPage: 1,
    },
    mutations: {
        
    },
    actions: {
        
    },
    modules: {

    },
});
