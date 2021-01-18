<template>
  <div id="app">
    <!--<pdf-box />-->
    <!--<formMaking></formMaking>-->
    <rfFormMake></rfFormMake>
  </div>
</template>

<script>
import PdfBox from './components/PdfBox'
import formMaking from './components/formMaking'
/*import rfFormMake from 'rf-form-maker'*/

export default {
  name: 'app',
  components: {
    PdfBox,
    formMaking,
    /*rfFormMake*/
  }
}
</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
}
#app {
  height: 100%;
  font-family: 'PingFangSC-Regular', 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background: #333;
}
  html{
    height: 100%;
  }
  body{
    height: 100%;
  }
</style>
