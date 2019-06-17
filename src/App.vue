<template>
  <div id="app">
  <router-view/>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
div.titulo{
  background-color: red;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px

}

input:focus{
  border: 2px solid red;
}

.wrong{
  border: 2px solid red
}

.correct{
  border: 2px solid green
}

button{
  border-radius:  20px;
  padding-left: 2%;
  padding-right: 2%;
  padding-top: 5px;
  padding-bottom: 5px
}

input{
  border-radius: 20px;
  padding: 3px;
  padding-left: 10px;
  
}

div.login{
  text-align: center;
  margin-left: 35%;
  margin-right: 35%;
  padding-bottom: 1%;
  background-color: white;
  border-radius: 10px;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  
}

h1, h2 {
  font-weight: normal;
  text-align: center;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
