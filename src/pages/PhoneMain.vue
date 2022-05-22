<template>
  <div id="fond">
    <div class="pad">
      <div id="HEADER">
        <div>
          <router-link class="cacher" to="/phonemain"
            >Food & Drinks
          </router-link>
          <router-link class="cacher" to="/phonemain">Accueil </router-link>
          <router-link class="cacher" to="/phonemain">Recette</router-link>
          <router-link class="cacher" to="/phonemain">Favoris </router-link>
        </div>
        <img src="../assets/LOGO.svg" alt="Logo de Food & Drink's" />
        <div class="cacher titre">Food & Drink's</div>
        <div class="cacher subtitre">Se régaler sans culpabiliser</div>
        <PhotoProfile :class="{ petit: isActive }" />
      </div>
      <div id="BONJOUR">Bonjour {{ nom }}</div>
      <div id="SUB">Qu'allez vous cuisiner</div>
      <div id="SEARCH">Tiramisu</div>
    </div>
    <div class="gauchepad">
      <h2 id="part">En tendance</h2>
      <div class="carouselle">
        <CardCarouselle
          v-for="reciepe in reciepes"
          :key="reciepe.id"
          :reciepe="reciepe"
          :class="{ mainimage: isActive }"
        />

        <!--On repete car il faut plus que 3 recettes pour que ca rend bien-->

        <CardCarouselle
          class="cacher"
          v-for="reciepe in reciepes"
          :key="reciepe.id"
          :reciepe="reciepe"
          :class="{ mainimage: isActive }"
        />
      </div>
    </div>

    <div class="pad">
      <h2>Selon vos envis</h2>
      <div class="carouselle" id="grille">
        <CardCategorie />
        <CardCategorie />
        <CardCategorie />
        <CardCategorie class="cacher" />
        <CardCategorie class="cacher" />
        <CardCategorie class="cacher" />
        <CardCategorie class="cacher" />
        <CardCategorie class="cacher" />
        <CardCategorie class="cacher" />
      </div>
      <div id="Degage">
        <h2>Vos favoris</h2>
        <div>
          <CardFavoris
            v-for="reciepe in reciepes"
            :key="reciepe.id"
            :reciepe="reciepe"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import api from "@/plugins/axios";
import PhotoProfile from "../components/PhotoProfile.vue";
import CardCarouselle from "../components/CardCarouselle.vue";
import CardCategorie from "../components/CardCategorie.vue";
import CardFavoris from "../components/CardFavoris.vue";

export default {
  name: "PhoneMain",
  components: {
    PhotoProfile,
    CardCarouselle,
    CardCategorie,
    CardFavoris,
  },
  props: {
    nom: {
      type: String,
      default: "Evan",
    },
  },
  data() {
    return {
      isActive: true,
      reciepes: [],
    };
  },
  mounted() {
    api.get("reciepes?populate=*").then((response) => {
      this.reciepes = response.data.data;
      console.log(this.reciepes);
    });
  },
};
</script>

<style scoped>
* {
  color: white;
}

.cacher {
  display: none;
}

a {
  text-decoration: none;
}

#fond {
  background-color: #101010;
  min-height: 100vh;
}

.pad {
  padding: 25px;
}

.gauchepad {
  padding-left: 25px;
}

#HEADER {
  display: flex;
  align-items: center;
  width: 100%;
  margin-left: auto;
  margin-bottom: 25px;
}

#HEADER img {
  width: 75px;
  height: auto;
  margin: 0 auto 0 auto;
  padding-left: 11px;
}

#BONJOUR {
  font-size: 20px;
  font-weight: 700;
}
#SUB {
  font-size: 12;
  font-weight: 400;
  margin-bottom: 10px;
}
#SEARCH {
  padding: 15px;
  background-color: #dedede;
  width: 90%;
  color: #575757;
  border-radius: 25px;
  font-size: 12px;
  font-weight: 400;
  font-style: italic;
}

h2 {
  font-size: 12px;
  font-weight: 700;
}

.carouselle {
  display: flex;
  box-sizing: border-box;
  overflow: hidden;
}

@media screen and (min-width: 1200px) {
  .pad,
  .gauchepad {
    padding: 0px;
  }

  .cacher {
    display: inherit;
  }

  #HEADER {
    position: relative;
    box-sizing: border-box;
    padding: 25px;
    display: flex;
    justify-content: space-between;
    width: 100%;
    align-items: flex-start;
    height: 500px;
    background-image: linear-gradient(
        90deg,
        rgb(0, 0, 0) 0%,
        rgba(0, 0, 0, 0) 100%
      ),
      url("../assets/back.png");
    background-size: cover;
    background-repeat: no-repeat;
    background-position-y: 60%;
  }

  #HEADER img {
    position: absolute;
    top: 40%;
    left: 30%;
    width: 150px;
    height: auto;
  }

  #HEADER div:first-child {
    display: flex;
    width: 700px;
    justify-content: space-around;
    align-items: center;
  }

  #HEADER a:first-child {
    font-weight: 700;
    font-size: 25px;
  }

  #SEARCH {
    position: absolute;
    top: 25px;
    right: 200px;
    width: 35%;
  }

  #BONJOUR,
  #SUB {
    display: none;
  }

  .carouselle {
    padding-left: 100px;
  }

  h2 {
    font-size: 25px;
    margin-bottom: 50px;
    margin-top: 100px;
    padding-left: 100px;
  }

  #part {
    margin-bottom: 0px !important;
  }

  #grille {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: auto;
    width: 85%;
    margin: auto;
  }

  .titre {
    position: absolute;
    top: 45%;
    left: 43%;
    font-size: 50px;
    font-weight: 700;
  }
  .subtitre {
    position: absolute;
    top: 60%;
    left: 43%;
    font-size: 30px;
    font-weight: 700;
  }

  #Degage {
    display: none;
  }
}
</style>
