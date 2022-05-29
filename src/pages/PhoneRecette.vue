<template>
  <div id="fond">
    <div class="pad">
      <div id="HEADER">
        <router-link class="degage" to="/phonemain">
          <img src="../assets/return.svg" alt="fleche retout" class="return" />
        </router-link>
        <div>
          <router-link class="cacher" to="/phonemain"
            >Food & Drinks
          </router-link>
          <router-link class="cacher" to="/phonemain">Accueil </router-link>
          <router-link class="cacher" to="/phonemain">Recette</router-link>
          <router-link class="cacher" to="/phonemain">Favoris </router-link>
        </div>
        <img
          class="degage"
          src="../assets/LOGO.svg"
          alt="Logo de Food & Drink's"
        />
        <PhotoProfile class="degage" :class="{ petit: isActive }" />
        <PhotoProfile class="cacher" :class="{ moyen: isActive }" />
      </div>
      <div id="SEARCH">Tiramisu</div>
    </div>

    <div
      class="ImageCover"
      :style="{
        background:
          'linear-gradient(rgba(10, 10, 10, 0.8), rgba(10, 10, 10, 0.5)),url(' +
          imageII,
      }"
    >
      <div id="NOTE" class="cacher">
        <span v-for="coeur in Math.floor(reciepes.Rating)" :key="coeur"
          >🤍</span
        >
      </div>
      <h1 class="cacher" id="NOM">{{ reciepes.Name }}</h1>

      <div
        class="cacher"
        id="DETAILS"
        style="font-style: italic; font-size: 12px"
      >
        {{ reciepes.Duration / 60 }}' - {{ reciepes.Energy }} cal -
        <span class="oui" v-for="star in reciepes.Price" :key="star">⭐</span>€
      </div>
    </div>

    <div class="pad padOrdi">
      <div class="ligne espace">
        <h1 class="degage">{{ reciepes.Name }}</h1>
        <div class="degage">
          <span v-for="coeur in Math.floor(reciepes.Rating)" :key="coeur"
            >🤍</span
          >
        </div>
      </div>
      <div class="degage" style="font-style: italic; font-size: 12px">
        {{ reciepes.Duration / 60 }}' - {{ reciepes.Energy }} cal -
        <span class="oui" v-for="star in reciepes.Price" :key="star">⭐</span>€
      </div>

      <div class="biographie">
        <PhotoProfile class="degage" :class="{ petit: isActive }" />
        <PhotoProfile class="cacher" :class="{ moyen: isActive }" />
        <p>
          Ca serait quand meme vraiment cool si l'api donnait un petit
          commentaire de la part de l'auteur de la recette sur sa propre
          recette.
        </p>
      </div>
      <section>
        <div class="card">
          <div class="ligne">
            <h2>Ingrédients</h2>
            <div class="ptt">Pour 2 personnes</div>
          </div>

          <ul id="example1">
            <li v-for="item in reciepes.Ingredients" :key="item">
              {{ item.name }} <span>{{ item.quantity }}</span>
            </li>
          </ul>
        </div>

        <div>
          <h2>Recette</h2>

          <ul id="example2">
            <li v-for="(item2, index) in reciepes.Steps" :key="item2">
              <h3>Etape {{ index + 1 }}</h3>
              {{ item2 }}
            </li>
          </ul>
        </div>
      </section>

      <div class="ligne centre" style='margin-bottom:50px;'>
        <PhotoProfile class="degage" :class="{ petit: isActive }" />
        <PhotoProfile class="cacher" :class="{ moyen: isActive }" />
        <div style="margin-left: 20px; font-weight:700">Recette proposé par XXXXXX</div>
      </div>

      <hr />

      <h2 class="centre">Votre avis nous intéresse</h2>
      <div class="centre">🖤🖤🖤🖤🖤</div>

      <div class="ligne" style="margin-left:200px;">
        <PhotoProfile class="degage" :class="{ petit: isActive }" />
        <PhotoProfile class="cacher" :class="{ moyen: isActive }" />
        <div class="ptt">Commentaire</div>
      </div>
    </div>
  </div>
</template>

<script>
import api from "@/plugins/axios";
import PhotoProfile from "../components/PhotoProfile.vue";

export default {
  name: "PhoneRecette",
  components: {
    PhotoProfile,
  },

  computed: {
    currentItem() {
      return this.$route.params.id;
    },
  },

  data() {
    return {
      isActive: true,
      reciepes: [],
    };
  },

  mounted() {
    api
      .get("reciepes/" + this.$route.params.id + "?populate=*")
      .then((response) => {
        this.reciepes = response.data.data.attributes;
        this.imageII = this.reciepes.Image.data.attributes.formats.medium.url;
        //console.log(this.reciepes);
        console.log(this.reciepes.Steps);
      });
  },
};
</script>

<style scoped>
* {
  color: white;
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

.centre {
  justify-content: center;
  display: flex;
}

.ptt {
  margin-left: 20px;
  font-style: italic;
  font-size: 12px;
}

#HEADER {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin-left: auto;
}

#HEADER > img {
  width: 75px;
  height: auto;
}
#HEADER img:nth-child(2) {
  margin: 0 auto 0 auto;
}

.ligne {
  display: flex;
  align-items: center;
}

.espace {
  justify-content: space-between;
}

h1,
h2 {
  font-size: 18px;
  font-weight: 700;
}

h3 {
  font-size: 12px;
  font-weight: 700;
  font-style: normal;
}

.biographie {
  display: flex;
  font-weight: 300;
  font-style: italic;
  font-size: 12px;
  align-items: center;
  justify-content: space-between;
}

.biographie > p {
  width: 80%;
}

.ImageCover {
  height: 200px;
  width: 100%;
  background-size: cover;
  position: relative;
}

#example1 li {
  list-style: none;
  font-size: 12px;
  font-weight: 500;
  margin-bottom: 10px;
  display: flex;
}

#example1 li span {
  font-weight: 300 !important;
  margin-left: auto;
}

#example2 li {
  font-size: 12px;
  font-weight: 300;
  font-style: italic;
  margin-bottom: 50px;
}

.cacher {
  display: none;
}

@media screen and (min-width: 1200px) {

.cacher {
    display: inherit;
  }

  .degage {
    display: none;
  }

  h2 {
    font-size: 25px;
  }

  .padOrdi {
    margin: 0 100px 0 100px;
  }

  #SEARCH {
    position: absolute;
    top: 25px;
    right: 200px;
    width: 35%;
    padding: 15px;
    background-color: #dedede;
    color: #575757;
    border-radius: 25px;
    font-size: 12px;
    font-weight: 400;
    font-style: italic;
  }

  #HEADER {
    position: relative;
    box-sizing: border-box;
    display: flex;
    justify-content: space-between;
    width: 100%;
    align-items: flex-start;
  }

  #HEADER div:nth-child(2) {
    display: flex;
    width: 700px;
    justify-content: space-around;
    align-items: center;
  }

  #HEADER a:first-child {
    font-weight: 700;
    font-size: 25px;
  }

  .ImageCover {
    height: 450px;
    width: 100%;
    background-size: cover;
    position: relative;
  }

  #NOTE,
  #NOM,
  #DETAILS {
    position: absolute;
    display: flex;
    width: 100%;
    justify-content: center;
  }
  #NOTE {
    font-size: 40px;
    top: 50%;
  }
  #NOM {
    font-size: 90px;
    top: 10%;
  }
  #DETAILS {
    font-size: 25px !important;
    bottom: 10%;
  }

  .biographie {
    margin: 0 30% 0 30%;
  }

  #example2 li,
  #example2 h3 {
    font-size: 18px;
  }

  .card h2,
  .card li,
  .card div,
  .card li span {
    color: black;
  }

  .card {
    background-color: #dedede;
    border-radius: 20px;
    padding: 20px;
    width: 400px;
    height: fit-content;
  }

  section {
    display: flex;
    flex-direction: row-reverse;
    margin:100px 0 100px 0;
  }
  hr{
    width:30%;
    border:none;
    background-color: white;
    height: 2px;
  }
}
</style>
