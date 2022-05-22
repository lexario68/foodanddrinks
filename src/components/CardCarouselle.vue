<template>
  <router-link :to="'/phonerecette/'+reciepe.id">
    <div class="boite">
      <div
        class="imageavant"
        :style="{
          background:
            'linear-gradient(rgb(10, 10, 10, 0.8), rgba(0, 0, 0, 0)), url(' +
            reciepe.attributes.Image.data.attributes.formats.medium.url,
        }"
      ></div>
      <div id="bob">
        <div class="desc">
          <div>{{ reciepe.attributes.Name }}</div>
          <div>
            <span
              class="oui"
              v-for="coeur in Math.floor(reciepe.attributes.Rating)"
              :key="coeur"
              >🖤</span
            >
          </div>
        </div>
        <div class="pro">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi
            incidunt ducimus, voluptatem aliquam, sint sunt, quos tempore
            quaerat consequuntur harum voluptas nulla aliquid dolor beatae.
            Nesciunt autem cupiditate mollitia molestias?
          </p>
          <div>
            {{ reciepe.attributes.Duration / 60 }}' -
            {{ reciepe.attributes.Energy }} cal -
            <span
              class="oui"
              v-for="star in reciepe.attributes.Price"
              :key="star"
              >⭐</span
            >€
          </div>
        </div>
      </div>
    </div>
  </router-link>
</template>

<script>
export default {
  props: {
    reciepe: {
      type: Object,
    },
  },
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

p,
.oui {
  display: none;
}

.imageavant {
  margin-bottom: 15px;
  border-radius: 5px;
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
  padding: 0 25px 0 25px;
}

.recetteimage .pro {
  margin-left: 25px;
}

.pro {
  font-size: 12px;
  font-weight: 300;
}

@media screen and (min-width: 1200px) {
  .boite {
    margin: 0 100px 0 0;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .mainimage .imageavant {
    border-radius: 50%;
    min-width: 150px;
    width: 150px;
    height: 150px;
    transform: translateY(100px);
  }

  #bob {
    border-radius: 1em;
    padding: 100px 10px 10px 10px;
    background-color: #dedede;
    color: black;
    min-width: 250px;
    width: 250px;
  }

  .desc {
    display: flex;
    flex-direction: column;
  }

  .desc div {
    display: flex;
    margin: auto;
    font-size: 18px;
  }

  p,
  .oui {
    display: block;
  }
  .pro div {
    display: flex;
    justify-content: end;
  }
}
</style>
