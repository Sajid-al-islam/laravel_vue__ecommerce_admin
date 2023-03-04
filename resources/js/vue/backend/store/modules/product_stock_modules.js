import StoreModule from "./schema/StoreModule";

let test_module = new StoreModule('product_stock','product_stock','ProductStock');
const {store_prefix, api_prefix, route_prefix} = test_module;

// state list
const state = {
    ...test_module.states(),
};

// get state
const getters = {
    ...test_module.getters(),
    get_customer_phone_no: state => state.phone_no,
};

// actions
const actions = {
    ...test_module.actions(),
    
}

// mutators
const mutations = {
    ...test_module.mutations(),
    
};


export default {
    state,
    getters,
    actions,
    mutations,
};
