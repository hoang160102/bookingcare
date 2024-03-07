<template>
  <banner-image>
    <img class="w-100" src="../../img/hospital/hospita.png" alt="" />
  </banner-image>
  <div class="space"></div>
  <v-container>
    <for-user></for-user>
    <div class="space"></div>
    <faciliate-comprehensive></faciliate-comprehensive>
  </v-container>
  <div class="space"></div>
  <doctor-list></doctor-list>
</template>

<script>
import FaciliateComprehensive from "../layout/FaciliateComprehensive.vue";
import ForUser from "../layout/ForUser.vue";
import DoctorList from "../layout/DoctorList.vue";
export default {
  components: {
    ForUser,
    FaciliateComprehensive,
    DoctorList,
  },
};
</script>

<style scoped>
.w-100 {
  border-radius: 30px;
}

.space {
  height: 150px;
}
</style>
