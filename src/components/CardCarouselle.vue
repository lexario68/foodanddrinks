<template>
  <router-link to="/phonerecette">
    <div class="boite">
      <div class="imageavant"></div>
      <div class="desc">
        <div>Gauffre Tonic</div>
        <div>*****</div>
      </div>
      <div class="pro">10' - 95 cal - €</div>
    </div>
  </router-link>
</template>

<script>
export default {
  name: "PhotoCarouselle",
  props: {
    taille: {
      type: String,
      default: "40px",
    },
  },
  data() {
    return {
      isActive: true,
    };
  },
};
</script>

<style scoped>
a{
  text-decoration: none;
}

.boite {
  margin: 0 25px 0 0;
}

.imageavant {
  margin-bottom: 15px;
  border-radius: 5px;
  width: 250px;
  min-width: 250px;
  height: 150px;
  background-image: linear-gradient(rgb(10, 10, 10, 0.8), rgba(0, 0, 0, 0)),
    url(../assets/gauffre.jpg);
  background-size: cover;
}

.desc {
  display: flex;
  justify-content: space-between;
  font-size: 12px;
  font-weight: 700;
}
.pro {
  font-size: 12px;
  font-weight: 300;
}
</style>
