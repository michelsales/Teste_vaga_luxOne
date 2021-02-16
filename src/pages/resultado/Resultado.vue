<template>
  <div id="resultado">
    <ul>
      <li>
        <div class="container">
          <div class="texto_principal">
            <b>Github</b><i> Search</i>
          </div>
          <div id="formulario">
             <form method="get">
             <input type="text" id="nameuser" name="nameuser" v-model="nameuser"/>
             <router-link tag="button" :to="`/resultado/${nameuser}`" type="submit"></router-link> 
            </form>
          </div>
        </div>
      </li>
      <li><Usuario/></li>
    </ul>
  </div>
</template>

<script>
import Usuario from '../../components/Usuario';
import axios from 'axios';
export default {
  name: 'Resultado',
  components:{
    Usuario,
  },data(){
    return{
      nameuser: '',
      avatar_url:'',
      name: '',
      company: '',
      location: '',
      public_repos: '',
      followers:'',
      errored: false,
      }
    }, 
    created: async function(){
       console.log(this.$route.params.nameuser);
        await axios.get(`https://api.github.com/users/${this.$route.params.nameuser}`)
        .then((response) => 
        {
          console.log(response);
          this.$data.nameuser = response.data.login;
          this.$data.avatar_url = response.data.avatar_url;
          this.$data.name = response.data.name;
          this.$data.company = response.data.company;
          this.$data.location = response.data.location;
          this.$data.public_repos = response.data.public_repos;
          this.$data.followers= response.data.followers;
          this.$data.stars = response.data.stars;
        })
        .catch(error=> {console.log(error)
          this.errored = true
        }
        );
     }   
}
</script>


<style scoped>
  #resultado{
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
  }#resultado ul{
    list-style: none;
  }#resultado li:nth-child(2){
    margin-top: 28px;
  }.container{
    display: flex;
    justify-content: space-between;
    position: relative;
    margin-top: 28px;
    margin-bottom: 28px;
  }.texto_principal{
      flex-direction: row;
      font-size: 42px;
       white-space: nowrap;
       align-items: flex-start;
       align-content: flex-start;
      } .texto_principal b{
      font-family: 'Roboto Mono', monospace;
      } .texto_principal i{
      font-family: 'Rubik', sans-serif;
  }
  button{
    width: 100px;
    height: 56px;
    background-color: #000000;
    position: absolute;
    outline: none;
    background-image: url(../../../assets/search.png);
    background-repeat: no-repeat;
    background-position: center;
    background-size: 20px;
  }input{
    width: 600px;
    height: 50px;
    border: 2px solid;
    font-size: 18px;
    color: #757575;
  } #formulario{
    align-self: flex-end;
  } 
</style>