<template>  
 <Erromensg v-if="errored"/>
  <div id="usuario" v-else>
      <div id="user">
          <ul>
            <li><img :src="avatar_url" class="imgUser"></li>
            <li><strong>{{name}}</strong></li>
            <li><span>{{nameuser}}</span></li>
            <li><img src="../../assets/organization.png" alt="empresa"><span>{{company}}</span></li>
            <li><img src="../../assets/location.png" alt="localização"><span>{{location}}</span></li>
            <li><img src="../../assets/star.png" alt="estrelas"><span>{{stars}}</span></li>
            <li><img src="../../assets/repository.png" alt="numero de repositorios"><span>{{public_repos}}</span></li>
            <li><img src="../../assets/followers.png" alt="seguidores"><span> {{followers}}</span></li>
          </ul>     
      </div>
        <Repositorio :nameuser="`${this.$route.params.nameuser}`"/>
    </div>   
</template>

<script>
/*import api from '../services/api';  */
import Repositorio from './Repositorio.vue';
import Erromensg from './Erromensg';
import axios from 'axios';

export default {
  components: { Repositorio, Erromensg },
  name: 'Usuario',  
  data(){
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
        });
     }   
}
</script>

<style scoped>

@import url('https://fonts.googleapis.com/css2?family=Rubik:ital,wght@1,300&display=swap');

.imgUser{
  width: 300px;
  height: 300px;
}#usuario{
   font-family: 'Rubik', sans-serif;
   display: flex;
}#usuario ul{
  list-style: none;
}#usuario li:nth-child(3){
  margin-bottom: 50px;
}#usuario p{
  color: #757575;
  align-items: center;
  font-size: 24px;
}#user{
  position: relative;
  width: 300px;
  height: 589px;
  float: left;
  margin-left: 28px;
  margin-right: 56px;
}#user strong{
  color: #000000;
  font-size: 36px;
} #user span{
  font-size: 24px;
  color: #757575;
}#repositories{
  position: relative;
  width: 1028px;
  height: 711px;
  margin-top: 28px;
  float: left;
  margin-right: 28px;
} #repositories h3{
  font-size: 36px;
}

#usuario:before,
#usuario:after {
    content: "";
    display: table;
} 
#usuario:after {
    clear: both;
}
#usuario {
     zoom: 1;
}

</style>
