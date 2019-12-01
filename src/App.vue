<template>
  <div class="container">
    <div class="row">
      <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
        <h1>Filters &amp; Mixins</h1>
        <hr>
        <h3>Reversed text with local filter</h3>
        <P>{{ stringOne | reverse }}</p>
        <hr>
        <h3>Count string with global filter</h3>
        <p>{{ stringTwo | countString }}</p>
        <hr>
        <h3>Repeat with computed properties</h3>
        <p>{{ reverseComputed }}</p>
        <p>{{ countStringComputed }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import{ countStringMixin } from './countStringMixin';

export default {
  data() {
    return {
      stringOne: 'This text should be reversed once the filter is applied',
      
    }
  },
  filters: {
    reverse(value) {
      return value.split("").reverse().join("");
    }
  },
  computed: {
    reverseComputed() {
      return this.stringOne.split("").reverse().join("");
    },
  },
  mixins: [countStringMixin]
}
</script>

<style>

</style>
