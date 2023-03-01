import StoreModule from "./schema/StoreModule";

let test_module = new StoreModule('customer','customer','Customer');
const {store_prefix, api_prefix, route_prefix} = test_module;

// state list
const state = {
    ...test_module.states(),
    phone_no: [
        {
            phone_no: ''
        }
    ]
};

// get state
const getters = {
    ...test_module.getters(),
    get_customer_phone_no: state => state.phone_no,
};

// actions
const actions = {
    ...test_module.actions(),
    add_customer_phone_no: function (context, phone_no) {
        context.state.phone_no.push({
            phone_no: "",
        });
    },
    remove_customer_phone_no: function(context, index) {
        context.state.phone_no.splice(index, 1)
    },

    [`store_${store_prefix}`]: function({state, getters, commit}){
        const {form_values, form_inputs, form_data} = window.get_form_data(`.create_form`);
        // console.log(form_data, form_inputs, form_values);
        
        form_data.append('mobile_numbers', JSON.stringify(state.phone_no));
       
        // console.log(form_data);
        axios.post(`/${api_prefix}/store`,form_data)
            .then(res=>{
                window.s_alert(`new ${store_prefix} has been created`);
                $(`${store_prefix}_create_form input`).val('');
                commit(`set_clear_selected_${store_prefix}s`,false);
                management_router.push({name:`All${route_prefix}`})
            })
            .catch(error=>{

            })
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
