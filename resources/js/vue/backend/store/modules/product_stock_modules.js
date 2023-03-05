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
    [`store_${store_prefix}`]: function({state, getters, commit}){
        const {form_values, form_inputs, form_data} = window.get_form_data(`.product_stock_create_form`);
        console.log(getters);
        const {get_product_selected: product} = product_stock_create_form;
        const {get_supplier_selected: supplier} = product_stock_create_form;

        product.forEach((i)=> {
            form_data.append('selected_product[]',i.id);
        });
        supplier.forEach((i)=> {
            form_data.append('selected_supplier[]',i.id);
        });
        // console.log(form_data);
        // axios.post(`/${api_prefix}/store`,form_data)
        //     .then(res=>{
        //         window.s_alert(`new ${store_prefix} has been created`);
        //         $(`${store_prefix}_create_form input`).val('');
        //         commit(`set_clear_selected_${store_prefix}s`,false);
        //         management_router.push({name:`All${route_prefix}`})
        //     })
        //     .catch(error=>{

        //     })
    },
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
