<template>
  <div class="product">
    <HeaderC />
    <!-- Breadcrumb Section Begin -->
    <div class="breacrumb-section text-left">
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <div class="breadcrumb-text product-more">
              <router-link to="/"
                ><a href="#"><i class="fa fa-home"></i> Home</a></router-link
              >
              <span>Detail</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Breadcrumb Section Begin -->

    <!-- Product Shop Section Begin -->
    <section class="product-shop spad page-details">
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <div class="row">
              <div class="col-lg-6">
                <div class="product-pic-zoom">
                  <img class="product-big-img" :src="photo" alt="" />
                </div>
                <div
                  class="product-thumbs"
                  v-if="productD.galleries.length > 0"
                >
                  <carousel
                    :autoplay="false"
                    :dots="false"
                    :nav="false"
                    class="product-thumbs-track ps-slider"
                  >
                    <div
                      v-for="ss in productD.galleries"
                      :key="ss.id"
                      class="pt"
                      @click="changeImage(ss.photo)"
                      :class="ss.photo == photo ? 'active' : ''"
                    >
                      <img :src="ss.photo" alt="" />
                    </div>
                  </carousel>
                </div>

                <div class="product-thumbs" v-else>Tidak ada photo lain</div>
              </div>
              <div class="col-lg-6">
                <div class="product-details text-justify">
                  <div class="pd-title">
                    <span>{{ productD.type }}</span>
                    <h3>{{ productD.name }}</h3>
                  </div>
                  <div class="pd-desc">
                    <p v-html="productD.description"></p>
                    <h4>Rp. {{ productD.price }}</h4>
                  </div>
                  <div class="quantity">
                    <router-link to="/cart">
                      <a
                        @click="
                          saveCart(
                            productD.id,
                            productD.name,
                            productD.price,
                            productD.galleries[0] != null
                              ? productD.galleries[0].photo
                              : defaultPhoto
                          )
                        "
                        href="#"
                        class="primary-btn pd-cart"
                        >Add To Cart</a
                      >
                    </router-link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- Product Shop Section End -->
    <RBannerC />
    <FooterC />
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import HeaderC from "@/components/HeaderC.vue";
import FooterC from "@/components/FooterC.vue";
import RBannerC from "@/components/RBannerC.vue";

import carousel from "vue-owl-carousel";

import axios from "axios";

export default {
  name: "ProductView",
  defaultPhoto: "img/logo_website_shayna.png",
  components: {
    HeaderC,
    FooterC,
    RBannerC,
    carousel,
  },
  data() {
    return {
      photo: "",
      productD: [],
      cartUser: [],
    };
  },
  methods: {
    changeImage(urlImage) {
      this.photo = urlImage;
      //   console.log(this.idProduct);
    },

    setPhoto(data) {
      this.productD = data;
      //   this.photo = data.galleries[0].photo;
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
      .get("http://127.0.0.1:8001/api/products", {
        params: {
          id: this.$route.params.id,
        },
      })
      .then((res) => this.setPhoto((this.productD = res.data.data)))
      .catch((err) => console.log(err));
  },
};
</script>

<style scoped>
.product-thumbs .pt {
  margin-right: 10px;
}
</style>
