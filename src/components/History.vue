<template>
  <div>
    <md-toolbar class="md-primary md-dense d-flex justify-content-center" md-elevation="0">
      <div class="title">Журнал</div>
    </md-toolbar>
    <md-content class="content">
      <div v-for="(item, index) in historyList" :key="index">{{item}}</div>
    </md-content>
  </div>
</template>

//<div v-for="(item, index) in historyList" :key="index">{{item}}</div>
<script>
import { mapGetters } from "vuex";

export default {
  name: "History",
  computed: {
    ...mapGetters("history", ["historyList"])
  }
};
</script>

<style scoped>
.title {
  padding: 15px;
  font-size: 38px;
}

.content {
  height: calc(100vh - 53px);
  padding: 15px;
  text-align: left;
  font-size: 16px;
}
</style>