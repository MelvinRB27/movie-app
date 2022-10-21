<template>
  <div class="containerPageNotFound">
    <div class="ctnPNF">
      <p>Page Not Found</p>
      <div class="spinerNotFound">
        <h2>4<b>0</b>4</h2>
        <h6>ERROR</h6>
      </div>
    </div>
    <div class="linkHOME">
      <p>
        This url is not valid check or go to
        <router-link to="/">HOME</router-link>
      </p>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.spinerNotFound {
  margin: auto;
  color: #42b983;
  width: 100px;
  height: 100px;
  animation: spin 1s ease infinite;
}

.linkHOME {
  font-size: 22px;
  color: red;
}

a {
  color: #42b983;
  margin: auto;
  font-size: 20px;
}
.ctnPNF p {
  font-size: 35px;
}
.ctnPNF {
  color: #42b983;
  font-size: 20px;
  font-family: helvetica;
  font-weight: bold;
  text-transform: uppercase;
  animation-name: parpadeo;
  animation-duration: 1s;
  animation-timing-function: linear;
  animation-iteration-count: infinite;
}

@-moz-keyframes parpadeo {
  0% {
    opacity: 2;
  }
  50% {
    opacity: 0;
  }
  100% {
    opacity: 2;
  }
}

@-webkit-keyframes parpadeo {
  0% {
    opacity: 2;
  }
  50% {
    opacity: 0;
  }
  100% {
    opacity: 2;
  }
}

@keyframes parpadeo {
  0% {
    opacity: 2;
  }
  50% {
    opacity: 0;
  }
  100% {
    opacity: 2;
  }
}
</style>
