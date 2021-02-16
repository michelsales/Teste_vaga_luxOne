<template>
  <div id="Home">
        <div class="texto_principal">
          <b>Github </b><i>Search</i>
        </div>
        <div id="formulario">
            <form method="get">
             <input type="text" id="nameuser" name="nameuser" v-model="nameuser"/><!--<button type="submit" @click="create">clique</button>-->
             <router-link tag="button" :to="`/resultado/${nameuser}`" type="submit"></router-link> 
            </form>
        </div>
  </div>
</template>
 
<script>
export default {
    name: 'Home',
    data(){
      return{
        // errors: [],
        nameuser: '',
    }
   },
  }
</script>

<style scoped>

@import url('https://fonts.googleapis.com/css2?family=Roboto+Mono:ital,wght@1,700&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Rubik:ital,wght@1,300&display=swap');

#Home{
     display: flex;
     justify-content: center; 
     align-items: center;
     flex-direction: column;
     position: absolute;
     left: 50%;
     top: 50%;
     transform: translate(-50%, -50%);
   }.texto_principal{
      flex-direction: row;
      font-size: 64px;
      } .texto_principal b{
      align-items: center;
      font-family: 'Roboto Mono', monospace;
      } .texto_principal i{
    font-family: 'Rubik', sans-serif;
  } input{
    width: 600px;
    height: 50px;
    border: 2px solid;
    font-size: 25px;
  } button{
    width: 100px;
    height: 56px;
    background-color: #000000;
    position: absolute;
    outline: none;
    background-image: url(../../assets/search.png);
    background-repeat: no-repeat;
    background-position: center;
    background-size: 20px;
  } #formulario{
    flex-direction: row;
  } 

  
</style>

w