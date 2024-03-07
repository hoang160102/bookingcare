<template>
  <banner-image>
    <v-container class="pa-0">
      <v-carousel>
        <v-carousel-item>
          <img class="w-100" src="../../img/home/home1.png" alt="" />
        </v-carousel-item>
        <v-carousel-item>
          <img class="w-100" src="../../img/home/home2.png" alt="" />
        </v-carousel-item>
        <v-carousel-item>
          <img class="w-100" src="../../img/home/home3.jpg" alt="" />
        </v-carousel-item>
        <v-carousel-item>
          <img class="w-100" src="../../img/home/home4.png" alt="" />
        </v-carousel-item>
      </v-carousel>
    </v-container>
  </banner-image>
  <div class="space-150"></div>
  <v-container>
    <for-user></for-user>
    <div class="space"></div>
    <comprehensive-service></comprehensive-service>
    <div class="space"></div>
    <faciliate-comprehensive></faciliate-comprehensive>
  </v-container>
  <div class="space"></div>
  <doctor-list></doctor-list>
</template>

<script>
import ForUser from "../layout/ForUser.vue";
import ComprehensiveService from "../layout/ComprehensiveService.vue";
import FaciliateComprehensive from "../layout/FaciliateComprehensive.vue";
import DoctorList from "../layout/DoctorList.vue";
export default {
  components: {
    ForUser,
    ComprehensiveService,
    FaciliateComprehensive,
    DoctorList,
  },
};
</script>

<style scoped>
.v-carousel {
  border-radius: 30px;
}

.space-150 {
  height: 150px;
}

.space {
  height: 50px;
}
</style>
