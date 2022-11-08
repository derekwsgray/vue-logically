<script>
import Vue from 'vue';
// Uncomment import and local "components" registration if library is not registered globally.
// import { If, Else } from '@/entry.esm';

export default Vue.extend({
  name: 'ServeDev',
  // components: {
  //  If, Else
  // }
  data() {
    return {
      isFoo: false,
      isBar: false,
      myList: ['a', 'b', 'c']
    }
  }
});
</script>

<template>
  <div id="app">
    <h2>Vue Logically</h2>

    <hr />
    isFoo = {{isFoo}} and isBar = {{isBar}}
    <h3>The 'true' flag:</h3>
    <If v-if="isFoo">
      <p>Foo is true!</p>
    </If>
    <ElseIf v-else-if="isBar">
      <p>Bar is true!</p>
    </ElseIf>
    <Else v-else>
      <p>Neither Foo nor Bar is true</p>
    </Else>

    <hr />
    <h3>My List:</h3>
    <ul>
      <For v-for="item of myList">
        <li>{{ item }}</li>
      </For>
    </ul>
  </div>
</template>
