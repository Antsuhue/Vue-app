<template>
    <div class="cadastro">
      <div class="titulo_cadastro">
      <h1>Cadastro</h1>
      </div>
      <p>Nome</p>
      <input>
      <br>
      <p>Login</p>
      <input>
      <br>
      <p>Email</p>
      <input>
      <br>
      <p>Senha</p>
      <input type="password">
      <br>
      <p>Re-Senha</p>
      <input type="password">
      <br>
      <br>
      <br>
      <br>
      <router-link to="/logado" tag="button">Cadastrar-se</router-link>
      <br>
      <br>
    </div>
  
</template>

<script>
export default {

};
</script>

<style>
div.titulo_cadastro{
  background-color: red;
  padding-top: 1px;
  padding-bottom: 1px; 
  border-top-left-radius: 10px;
  border-top-right-radius: 10px

}

input:focus{
  border: 2px solid black;
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

div.cadastro{
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
  color:white;
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