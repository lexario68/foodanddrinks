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
  name: "CardCarouselle",
};
</script>

<style scoped>
a {
  text-decoration: none;
}

.boite {
  margin: 0 25px 0 0;
}

.imageavant {
  margin-bottom: 15px;
  border-radius: 5px;
  background-image: linear-gradient(rgb(10, 10, 10, 0.8), rgba(0, 0, 0, 0)),
    url(../assets/gauffre.jpg);
  background-size: cover;
}

.mainimage .imageavant {
  width: 250px;
  min-width: 250px;
  height: 150px;
}

.recetteimage .imageavant {
  width: 100vw;
  min-width: 100vw;
  height: 200px;
}

.desc {
  display: flex;
  justify-content: space-between;
  font-weight: 700;
}

.mainimage .desc {
  font-size: 12px;
}
.recetteimage .desc {
  font-size: 18px;
  padding:0 25px 0 25px;
}

.recetteimage .pro{
  margin-left:25px;
}

.pro {
  font-size: 12px;
  font-weight: 300;
}
</style>
