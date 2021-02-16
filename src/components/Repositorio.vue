<template>
  <div id="usuario">
    <div id="repositories">
      <ul v-for="repository in repositorios" :key="repository.id">
        <li>
          <strong>{{ repository.name }}</strong>
        </li>
        <li>
          <p>{{repository.description}}</p>
        </li>
        <li>
          <img src="../../assets/star.png" /><span>{{
            repository.stargazers_count
          }}</span>
        </li>
        <hr />
      </ul>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "Repositorio",
  props: ["nameuser"],
  data() {
    return {
      repositorios: '',
    };
  },
  created: async function() {
    console.log(this.nameuser);
    function compare(a, b) {
      if (a.stargazers_count > b.stargazers_count)
        return -1;
      if (a.stargazers_count < b.stargazers_count)
        return 1;
      return 0;
    }
    await axios
      .get(`https://api.github.com/users/${this.nameuser}/repos`)
      .then((response) => {
        console.log(response);
        this.$data.repositorios = response.data.sort(compare);
      })
      .catch((error) => console.log(error));
  },
};

 
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Rubik:ital,wght@1,300&display=swap");

#repositories ul {
  list-style: none;
}
#user {
  position: relative;
  width: 300px;
  height: 589px;
  float: left;
  margin-left: 28px;
  margin-right: 56px;
}
#user strong {
  color: #000000;
  font-size: 36px;
}
#user span {
  font-size: 24px;
  color: #757575;
}
#repositories {
  position: relative;
  width: 1028px;
  height: 711px;
  margin-top: 28px;
  float: left;
  margin-right: 28px;
}
#repositories strong {
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
