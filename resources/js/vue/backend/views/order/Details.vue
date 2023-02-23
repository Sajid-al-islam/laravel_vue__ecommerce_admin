<template>
  <div class="container">
    <div class="card list_card">
      <div class="card-header">
        <h4>Details</h4>
        <div class="btns">
          <a
            href=""
            @click.prevent="
              call_store(`set_${store_prefix}`, null),
                $router.push({ name: 'AllContactMessage' })
            "
            class="btn rounded-pill btn-outline-warning"
          >
            <i class="fa fa-arrow-left me-5px"></i>
            <span> Back </span>
          </a>
        </div>
      </div>
      <div class="card-body pb-5">
        <div class="row justify-content-center">
          <div class="col-lg-7">
            <div class="card invoice-preview-card">
              <div class="card-body">
                <div
                  class="d-flex justify-content-between flex-xl-row flex-md-column flex-sm-row flex-column m-sm-3 m-0"
                >
                  <div class="mb-xl-0 mb-4">
                    <div
                      class="d-flex svg-illustration mb-4 gap-2 align-items-center"
                    >
                      <span class="app-brand-text fw-bold fs-4">
                        Ctg computer limited
                      </span>
                    </div>
                    <p class="mb-2">
                      Computer City Centre (Multiplan), Level: 4, Shop: 407-409
                    </p>
                    <p class="mb-2">
                      69-71 New Elephant Road, Dhaka, Bangladesh
                    </p>
                    <p class="mb-0">01733-080350</p>
                  </div>
                  <div>
                    <h4 class="fw-semibold mb-2">INVOICE</h4>
                    <div class="mb-2 pt-1">
                      <span>Date Issues:</span>
                      <span class="fw-semibold">April 25, 2021</span>
                    </div>
                    <div class="pt-1">
                      <span>Date Due:</span>
                      <span class="fw-semibold">May 25, 2021</span>
                    </div>
                  </div>
                </div>
              </div>
              <hr class="my-0" />
              <div class="card-body">
                <div class="row p-sm-3 p-0">
                  <div
                    class="col-xl-6 col-md-12 col-sm-5 col-12 mb-xl-0 mb-md-4 mb-sm-0 mb-4"
                  >
                    <h6 class="mb-3">Invoice To:</h6>
                    <p class="mb-1">Thomas shelby</p>
                    <p class="mb-1">Shelby Company Limited</p>
                    <p class="mb-1">Small Heath, B10 0HF, UK</p>
                    <p class="mb-1">718-986-6062</p>
                    <p class="mb-0">peakyFBlinders@gmail.com</p>
                  </div>
                  <div class="col-xl-6 col-md-12 col-sm-7 col-12">
                    <h6 class="mb-4">Bill To:</h6>
                    <table>
                      <tbody>
                        <tr>
                          <td class="pe-4">Total Due:</td>
                          <td><strong>$12,110.55</strong></td>
                        </tr>
                        <tr>
                          <td class="pe-4">Bank name:</td>
                          <td>American Bank</td>
                        </tr>
                        <tr>
                          <td class="pe-4">Country:</td>
                          <td>United States</td>
                        </tr>
                        <tr>
                          <td class="pe-4">IBAN:</td>
                          <td>ETD95476213874685</td>
                        </tr>
                        <tr>
                          <td class="pe-4">SWIFT code:</td>
                          <td>BR91905</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
              <div class="table-responsive border-top">
                <table class="table m-0">
                  <thead>
                    <tr>
                      <th>Item</th>
                      <th>Description</th>
                      <th>Cost</th>
                      <th>Qty</th>
                      <th>Price</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td class="text-nowrap">Vuexy Admin Template</td>
                      <td class="text-nowrap">HTML Admin Template</td>
                      <td>$32</td>
                      <td>1</td>
                      <td>$32.00</td>
                    </tr>
                    <tr>
                      <td class="text-nowrap">Frest Admin Template</td>
                      <td class="text-nowrap">Angular Admin Template</td>
                      <td>$22</td>
                      <td>1</td>
                      <td>$22.00</td>
                    </tr>
                    <tr>
                      <td class="text-nowrap">Apex Admin Template</td>
                      <td class="text-nowrap">HTML Admin Template</td>
                      <td>$17</td>
                      <td>2</td>
                      <td>$34.00</td>
                    </tr>
                    <tr>
                      <td class="text-nowrap">Robust Admin Template</td>
                      <td class="text-nowrap">React Admin Template</td>
                      <td>$66</td>
                      <td>1</td>
                      <td>$66.00</td>
                    </tr>
                    <tr>
                      <td colspan="3" class="align-top px-4 py-4">
                        <p class="mb-2 mt-3">
                          <span class="ms-3 fw-semibold">Salesperson:</span>
                          <span>Alfie Solomons</span>
                        </p>
                        <span class="ms-3">Thanks for your business</span>
                      </td>
                      <td class="text-end pe-3 py-4">
                        <p class="mb-2 pt-3">Subtotal:</p>
                        <p class="mb-2">Discount:</p>
                        <p class="mb-2">Tax:</p>
                        <p class="mb-0 pb-3">Total:</p>
                      </td>
                      <td class="ps-2 py-4">
                        <p class="fw-semibold mb-2 pt-3">$154.25</p>
                        <p class="fw-semibold mb-2">$00.00</p>
                        <p class="fw-semibold mb-2">$50.00</p>
                        <p class="fw-semibold mb-0 pb-3">$204.25</p>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div class="card-body mx-3">
                <div class="row">
                  <div class="col-12">
                    <span class="fw-semibold">Note:</span>
                    <span
                      >It was a pleasure working with you and your team. We hope
                      you will keep us in mind for future freelance projects.
                      Thank You!</span
                    >
                  </div>
                </div>
              </div>
            </div>
            <div
              v-if="this[`get_${store_prefix}`]"
              class="container py-4 my-4 mx-auto d-flex flex-column"
            >
              <div class="header">
                <div class="row r1">
                  <div class="col-md-9 abc">
                    <h1>{{ this[`get_${store_prefix}`].product_name }}</h1>
                  </div>
                  <div class="col-md-5 mt-2">
                    <img
                      :src="
                        '/' +
                        this[`get_${store_prefix}`].related_images[0].image
                      "
                      width="90%"
                      height="95%"
                    />
                  </div>
                  <!-- <div class="col-md-3 text-right pqr"><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i></div> -->
                  <h3 class="text-left para mt-4">
                    Price: {{ this[`get_${store_prefix}`].default_price }}
                  </h3>
                </div>
              </div>
              <div class="container-body mt-4">
                <div class="row r3">
                  <div
                    class="product_details_backend"
                    v-html="this[`get_${store_prefix}`].description"
                  ></div>
                  <!-- <div class="col-md-5 p-0 klo">
                                        <ul>
                                            <li>100% Quality</li>
                                            <li>Free Shipping</li>
                                            <li>Easy Returns</li>
                                            <li>12 Months Warranty</li>
                                            <li>EMI Starting from (On Credit Cards)</li>
                                            <li>Normal Delivery : 4-5 Days</li>
                                            <li>Express Delivery : 2-3 Days</li>
                                            <li>COD Available (All Over India)</li>
                                        </ul>
                                    </div> -->

                  <div class="col-md-5">
                    <ul class="list-group list-group-flush mt-3">
                      <li class="list-group-item">
                        <b v-if="this[`get_${store_prefix}`].status == 1"
                          >Status: &nbsp;</b
                        ><span
                          v-if="this[`get_${store_prefix}`].status == 1"
                          class="badge bg-success me-1"
                          >active</span
                        >
                        <b v-if="this[`get_${store_prefix}`].status == 0"
                          >Status: &nbsp;</b
                        >
                        <span
                          v-if="this[`get_${store_prefix}`].status == 0"
                          class="badge bg-danger me-1"
                          >deactive</span
                        >
                      </li>
                      <li class="list-group-item">
                        <b>Created At: </b> &nbsp;
                        {{
                          new Date(
                            this[`get_${store_prefix}`].created_at
                          ).toDateString()
                        }}, &nbsp;
                        {{
                          new Date(
                            this[`get_${store_prefix}`].created_at
                          ).toLocaleTimeString()
                        }}
                      </li>
                      <li class="list-group-item">
                        <b>Updated At: </b> &nbsp;
                        {{
                          new Date(
                            this[`get_${store_prefix}`].updated_at
                          ).toDateString()
                        }}, &nbsp;
                        {{
                          new Date(
                            this[`get_${store_prefix}`].updated_at
                          ).toLocaleTimeString()
                        }}
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="card-footer text-center">
        <permission-button
          :permission="'can_edit'"
          :to="{
            name: `Edit${route_prefix}`,
            params: { id: $route.params.id },
          }"
          :classList="'btn btn-outline-info'"
        >
          <i class="fa text-info fa-pencil"></i> &nbsp; Edit
        </permission-button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters, mapMutations } from "vuex";
import PermissionButton from "../components/PermissionButton.vue";
/** store and route prefix for export object use */
import PageSetup from "./PageSetup";
const { route_prefix, store_prefix } = PageSetup;

export default {
  components: { PermissionButton },
  data: function () {
    return {
      /** store prefix for JSX */
      store_prefix,
      route_prefix,
    };
  },
  created: function () {
    this[`fetch_${store_prefix}`]({ id: this.$route.params.id, select_all: 1 });

    // setTimeout(() => {
    //     document.querySelector("section").style.background = "transparent"
    //     // if(this[`get_${store_prefix}`].description.includes("bg-white")) {
    //     //     document.querySelector("section").style.background-color = "transparent";
    //     // }
    // }, 1000);
  },
  methods: {
    ...mapActions([`fetch_${store_prefix}`]),
    ...mapMutations([`set_${store_prefix}`]),
    call_store: function (name, params = null) {
      this[name](params);
    },
  },
  computed: {
    ...mapGetters([`get_${store_prefix}`]),
  },
};
</script>

<style>
</style>
