<template>
  <div id="fond">
    <div class="brand">
      <h1>Food & Drink's</h1>
      <img src="../assets/LOGO.svg" alt="Logo de Food & Drink's" />
    </div>
    <div class="cacher">Se régaler sans culpabiliser</div>
    <div id="interface">
      <h2>Bienvenue</h2>
      <router-link to="/phoneconnexion" class="orange">S'INSCRIRE</router-link>
      <div class="trait">
        <hr />
        Vous avez déjà un compte ?
        <hr />
      </div>
      <router-link to="/phoneconnexion" class="blanc">SE CONNECTER</router-link>
    </div>
  </div>
</template>

<script></script>

<style scoped>

h1,
h2 {
  color: white;
  font-weight: 700;
  margin: 0px;
}

h2 {
  margin-bottom: 50px;
}

.cacher{
  display: none;
}

#fond {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-image: linear-gradient(
      0deg,
      rgb(0, 0, 0) 0%,
      rgba(0, 0, 0, 0) 100%
    ),
    url("../assets/burger.jpg");
  background-size: auto;
  background-repeat: repeat-x;
  background-position-x: 24%;
}

.brand {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 100px;
}

#interface {
  margin-top: 150px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

a {
  text-decoration: none;
  text-align: center;
  padding: 10px 0 10px 0;
  width: 275px;
  border-radius: 25px;
  font-weight: 700;
  font-size: 18px;
}

.orange {
  background: #ec9631;
  color: white;
}

.blanc {
  background: #ffffff;
  color: #101010;
}

hr {
  margin: 0 10px 0 10px;
  width: 35px;
  height: 1px;
  border: none;
  background-color: white;
}

.trait {
  margin: 25px;
  display: flex;
  color: white;
  font-size: 12px;
  align-items: center;
}


@media screen and (min-width: 1200px){

#fond {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-image: linear-gradient(
      0deg,
      rgb(0, 0, 0) 0%,
      rgba(0, 0, 0, 0) 100%
    ),
    url("../assets/back.png");
  background-size: cover;
  background-repeat: no-repeat;
}

.brand {
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
  justify-content: center;
  padding-top: 100px;
}

h1{
  font-size: 90px;
}

.cacher{
  display:inherit;
  color:white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 40px;
  font-weight: 700;
  margin-left:150px;
}


.orange {
  background: #ec9631;
  color: white;
    padding: 20px 0 20px 20px;
  width: 500px;
}

.blanc {
  background: #ffffff;
  color: #101010;
    padding: 20px 0 20px 20px;
  width: 500px;
}

}


</style>
