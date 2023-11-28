<template>
  <card-item v-for="item in items" :offer="item" :key="item.id" />
</template>

<script>
import axiosInstance from "@/auth";
import CardItem from "@/components/CardItem.vue";

export default {
  components: { CardItem },
  data: () => ({
    items: [],
    //
  }),
  mounted() {
    console.log(`the component is now mounted.`);
    this.loadOffers();
  },
  methods: {
    async loadOffers() {
      axiosInstance
        .get("http://localhost:8000/api/offers")
        .then((response) => {
          // Handle the successful response here
          console.log("Offers:", response.data);
          this.items = response.data;
        })
        .catch((error) => {
          // Handle errors here
          console.error("Error:", error);
        });
    },
  },
};
</script>
@/utils/auth
