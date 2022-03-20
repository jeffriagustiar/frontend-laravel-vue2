<template>
    <div class="bannerC">
    <!-- Women Banner Section Begin -->
    <section class="women-banner spad">
        <div class="container-fluid">
            <div class="row">
                <div class="col-lg-12 mt-5" v-if="products.length > 0">
                    <carousel class="product-slider"  :items="3"  :nav="false"  :dots="false" :autoplay="true">

                        <div class="product-item" v-for="itemp in products" v-bind:key="itemp.id">
                            <div class="pi-pic">
                                <img v-bind:src="itemp.galleries[0] != null ? itemp.galleries[0].photo : 'img/mickey1.jpg'" height="450px" alt="" />
                                <ul>
                                    <li class="w-icon active">
                                        <a href="#"><i class="icon_bag_alt"></i></a>
                                    </li>
                                    <li class="quick-view"><router-link to="/product"><a href="#">+ Quick View</a></router-link></li>
                                </ul>
                            </div>
                            <div class="pi-text">
                                <div class="catagory-name">{{ itemp.type }}</div>
                                <router-link to="/product">
                                    <a href="#">
                                        <h5>{{ itemp.name }}</h5>
                                    </a>
                                </router-link>
                                <div class="product-price">
                                    Rp. {{ itemp.price }} 
                                    <span>Rp. {{ itemp.price }} </span>
                                </div>
                            </div>
                        </div>

                    </carousel>
                </div>
                <div class="col-lg-12" v-else>
                    <p>
                        Product terbaru belum tersedia untuk saat ini
                    </p>
                </div>
            </div>
        </div>
    </section>
    <!-- Women Banner Section End -->
    </div>
</template>

<script>
import carousel from 'vue-owl-carousel'

import axios from "axios";

export default {
  name: 'BannerC',
  components: {
    carousel
  },

  data(){
    return {
      products: []
    };
  },

  mounted(){
    axios
      // .get("https://payakumbuh.sipd.kemendagri.go.id/siap/data/user")
    //   .get("http://shayna-backend.belajarkoding.com/api/products")
      .get("http://127.0.0.1:8001/api/products")
      .then(res => (this.products = res.data.data.data))
      .catch(err => console.log(err));
  }
}
</script>