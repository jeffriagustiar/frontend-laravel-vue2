<template>
  <div class="bannerC">
    <!-- Women Banner Section Begin -->
    <section class="women-banner spad">
      <div class="container-fluid">
        <div class="row">
          <div class="col-lg-12 mt-5" v-if="products.length > 0">
            <carousel
              class="product-slider"
              :items="3"
              :nav="false"
              :dots="false"
              :autoplay="true"
              :animateIn="true"
            >
              <div
                class="product-item"
                v-for="itemp in products"
                v-bind:key="itemp.id"
              >
                <div class="pi-pic">
                  <img
                    v-bind:src="
                      itemp.galleries[0] != null
                        ? itemp.galleries[0].photo
                        : 'img/mickey1.jpg'
                    "
                    height="450px"
                    alt=""
                  />
                  <ul>
                    <li class="w-icon active">
                      <router-link to="/cart">
                        <a
                          @click="
                            saveCart(
                              itemp.id,
                              itemp.name,
                              itemp.price,
                              itemp.galleries[0] != null
                                ? itemp.galleries[0].photo
                                : defaultPhoto
                            )
                          "
                          href="#"
                          ><i class="icon_bag_alt"></i
                        ></a>
                      </router-link>
                    </li>
                    <li class="quick-view">
                      <router-link v-bind:to="'/product/' + itemp.id">
                        <a href="#">+ Quick View</a>
                      </router-link>
                    </li>
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
            <p>Product terbaru belum tersedia untuk saat ini</p>
          </div>
        </div>
      </div>
    </section>
    <!-- Women Banner Section End -->
  </div>
</template>

<script>
import carousel from "vue-owl-carousel";

import axios from "axios";

export default {
  name: "BannerC",
  defaultPhoto: "img/logo_website_shayna.png",
  components: {
    carousel,
  },

  data() {
    return {
      products: [],
      photo: "",
    };
  },

  methods: {
    setPhoto(data) {
      this.products = data;
      this.photo =
        data.galleries[0] != null ? data.galleries[0].photo : "img/mickey1.jpg";
    },

    saveCart(idProduct, nameProduct, priceProduct, photoProduct) {
      var productS = {
        id: idProduct,
        name: nameProduct,
        price: priceProduct,
        photo: photoProduct,
      };

      this.cartUser.push(productS);
      const parsed = JSON.stringify(this.cartUser);
      localStorage.setItem("cartUser", parsed);
    },
  },

  mounted() {
    if (localStorage.getItem("cartUser")) {
      try {
        this.cartUser = JSON.parse(localStorage.getItem("cartUser"));
      } catch (e) {
        localStorage.removeItem("cartUser");
      }
    }
    axios
      // .get("https://payakumbuh.sipd.kemendagri.go.id/siap/data/user")
      //   .get("http://shayna-backend.belajarkoding.com/api/products")
      .get("http://127.0.0.1:8001/api/products")
      .then((res) => (this.products = res.data.data.data))
      .catch((err) => console.log(err));
  },
};
</script>

<style scoped>
.pi-pic {
  margin-right: 10px;
}
</style>
