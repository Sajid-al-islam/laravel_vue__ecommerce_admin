<template>
    <div class="container">
        <div class="card list_card">
            <div class="card-header">
                <h4>Create</h4>
                <div class="btns">
                    <router-link :to="{ name: `All${route_prefix}` }" class="btn rounded-pill btn-outline-warning" >
                        <i class="fa fa-arrow-left me-5px"></i>
                        Back
                    </router-link>
                </div>
            </div>
            <form @submit.prevent="call_store(`store_${store_prefix}`,$event.target)" autocomplete="false">
                <div class="card-body">
                    <div class="row justify-content-center">
                        <div class="col-lg-10">
                            <div class="admin_form form_1">
                                <div class=" form-group d-grid align-content-start gap-1 mb-2 " >
                                    <input-field
                                        :label="`Name`"
                                        :name="`full_name`"
                                    />
                                </div>
                                <div class="form-group d-grid align-content-start gap-1 mb-2 " >
                                    <input-field
                                        :label="`Default price`"
                                        :name="`default_price`"
                                    />
                                </div>
                                <div class=" form-group d-grid align-content-start gap-1 mb-2 " >
                                    <label for="category_id">Category</label>
                                    <select name="category_id" id="category_id" class="form-control">
                                        <option value="">Computer</option>
                                        <option value="">Laptop</option>
                                        <option value="">Monitor</option>
                                        <option value="">Desktop component</option>
                                    </select>
                                    <!-- <textarea class="form-control" id="message" name="message"></textarea> -->
                                </div>

                                <div class="form-group d-grid align-content-start gap-1 mb-2 " >
                                    <input-field
                                        :label="`Image`"
                                        :name="`image`"
                                        :type="`file`"
                                        :preview="true"
                                    />
                                </div>

                                <div class="form-group d-grid align-content-start gap-1 mb-2 " >
                                    <input-field
                                        :label="`stock`"
                                        :name="`stock`"
                                        :type="`number`"
                                    />
                                </div>

                                <div class="form-group d-grid align-content-start gap-1 mb-2 " >
                                    <input-field
                                        :label="`low stock`"
                                        :name="`low_stock`"
                                        :type="`number`"
                                    />
                                </div>

                                <div class="form-group d-grid align-content-start gap-1 mb-2 " >
                                    <input-field
                                        :label="`search_keyword`"
                                        :name="`search_keyword`"
                                    />
                                </div>

                                <div class="form-group d-grid align-content-start gap-1 mb-2 " >
                                    <label for="description">Description</label>
                                    <textarea class="form-control" id="description" name="description"></textarea>
                                </div>
                                <div class="seo_section full_width mt-5">
                                    
                                    <div class="heading mb-4">
                                        <h4 class="d-flex justify-content-center">Seo section</h4>
                                        <h6 class="d-flex justify-content-center">Boost traffic to your online business.</h6>
                                    </div>
                                    <hr>
                                    <div class="admin_form form_1 col_2 mt-3">
                                        <div class="form-group d-grid align-content-start gap-1 mb-2 ">
                                            <input-field
                                                :label="`Page Title`"
                                                :name="`page_title`"
                                            />
                                        </div>

                                        <div class="form-group d-grid align-content-start gap-1 mb-2 " >
                                            <input-field
                                                :label="`product url`"
                                                :name="`product_url`"
                                            />
                                        </div>

                                        <div class="form-group full_width d-grid align-content-start gap-1 mb-2 " >
                                            <label for="meta_description">Meta Description</label>
                                            <textarea class="form-control" id="meta_description" name="meta_description"></textarea>
                                        </div>
                                    </div>
                                </div>
                                
                            </div>

                        </div>
                    </div>
                </div>
                <div class="card-footer text-center">
                    <button type="submit" class="btn btn-outline-info" >
                        <i class="fa fa-upload"></i>
                        Submit
                    </button>
                </div>
            </form>
        </div>
        <CategoryManagementModal/>
    </div>
</template>

<script>
import { mapActions } from 'vuex'
import InputField from '../components/InputField.vue'
/** store and route prefix for export object use */
import PageSetup from './PageSetup';
import CategoryManagementModal from "../category/components/ManagementModal.vue"
const {route_prefix, store_prefix} = PageSetup;

export default {
    components: { InputField, CategoryManagementModal },
    data: function(){
        return {
            /** store prefix for JSX */
            store_prefix,
            route_prefix
        }
    },
    created: function () {},
    methods: {
        ...mapActions([`store_${store_prefix}`]),
        call_store: function(name, params=null){
            this[name](params)
        },
    },
};
</script>

<style>
</style>
