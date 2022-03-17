<template>
  <div class="about">

    <div class="product-item" v-for="iu in users" v-bind:key="iu.id">
      {{ iu.id }}
      {{ datas }}
    </div>

    <div class="row" v-if="users.length > 0">
      <h1>This is an about page</h1>
    </div>

    <div class="row" v-else>
      <h1>Data Kosong</h1>
    </div>

  </div>
</template>

<script>
import axios from "axios";

export default {
  setup() {
    //
  },

  data(){
    return {
      users: []
    };
  },

  mounted(){
    // axios({
    //   method : 'post',
    //   url : 'http://localhost:8080/siap/login',
    //   data : {
    //     _token : '0admiZnofc6opPyjygFoNLLaA5uUzTtRFGC9iymV',
    //     idDaerah : '193',
    //     namaDaerah : 'Kota Payakumbuh',
    //     password : 'payakumbuh',
    //     tahunanggaran : '2022',
    //     userName : 'KEPALA BKD TAPD'
    //   },
    //   headers : {
    //     'Access-Control-Allow-Origin' : '*',
    //     // Cookie : '_ga=GA1.1.1138807877.1645537255; siap_session=WvCPMDV5LcXBhfrOzaVRreYiz0tSQHr7bRhlgJIF; dtCookie=v_4_srv_3_sn_B4F7D5432B5A1C10A6D269BC9E23BEF2_perc_100000_ol_0_mul_1_app-3Aea7c4b59f27d43eb_1_rcs-3Acss_1; _ga_83N8TMMLK7=GS1.1.1646313387.3.1.1646313409.0',
    //     // Host : 'payakumbuh.sipd.kemendagri.go.id'
    //   }
    // })
    // .then((response) => {
    //     console.log(response);
    //   },
    //     (error)=>{console.log(error);
    //   });

    axios
      .get("http://payakumbuh.sipd.kemendagri.go.id/siap/data/user"
      ,{
          headers: {
            // Accept : 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9',
            // Connection : 'keep-alive',
            // Cookie : '_ga=GA1.1.1138807877.1645537255; siap_session=WvCPMDV5LcXBhfrOzaVRreYiz0tSQHr7bRhlgJIF; dtCookie=v_4_srv_3_sn_B4F7D5432B5A1C10A6D269BC9E23BEF2_perc_100000_ol_0_mul_1_app-3Aea7c4b59f27d43eb_1_rcs-3Acss_1; _ga_83N8TMMLK7=GS1.1.1646313387.3.1.1646313409.0',
            // Host : 'payakumbuh.sipd.kemendagri.go.id',
            'Access-Control-Allow-Origin' : '*',
            'Access-Control-Allow-Headers' : '*',
            'Access-Control-Allow-Credentials': true,
            'Access-Control-Allow-Methods': 'POST, GET, OPTIONS, DELETE',

            }
        }
      )
      // .get("http://shayna-backend.belajarkoding.com/api/products")
      .then(res => (this.users = res.data))
      .catch(err => console.log(err));
  }
}
</script>
