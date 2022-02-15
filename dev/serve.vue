<script>
import Vue from 'vue';
// Uncomment import and local "components" registration if library is not registered globally.
// import { VueLogicallySample } from '@/entry.esm';

export default Vue.extend({
  name: 'ServeDev',
  // components: {
  //  VueLogicallySample,
  // }
  data() {
    return {
      isFoo: true,
      isBar: false,
      myList: ['a', 'b', 'c']
    }
  }
});
</script>

<template>
  <div id="app">
    Vue Logically
    <if v-if="isFoo">
      <h1>Foo</h1>
    </if>
    <else-if v-else-if="isBar">
      <h1>Bar</h1>
    </else-if>
    <else v-else>
      <h1>Neither Foo nor Bar</h1>
    </else>

    <ul>
      <for v-for="item of myList">
        <li>{{ item }}</li>
      </for>
    </ul>
  </div>
</template>
