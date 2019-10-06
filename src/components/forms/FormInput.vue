<template>
  <div class="input-container">
    <input-label v-if="labelText" v-bind:label-text="labelText" />

    <input
      v-if="['text', 'number', 'button', 'password'].indexOf(type) > -1"
      v-bind:type="type"
      v-bind:placeholder="placeholder"
      v-bind:value="value"
      v-on:input="$emit('input', $event.target.value)"
      v-mask="{mask: mask, tokens: tokens }"
      :class="className" />



    <input
      v-if="type === 'date'"
      v-bind:placeholder="placeholder"
      v-bind:value="value"
      v-on:input="$emit('input', $event.target.value)"
      v-on:click="isDatePickerVisible = true"
      @click.prevent='click'
      type="date" />

    <date-picker
      v-if="isDatePickerVisible"
      v-on:gotDate="gotDate"
      v-on:cancelPick="cancelDatePick" />



    <select
      v-if="type === 'select'"
      v-bind:value="value"
      v-bind:placeholder="placeholder"
      v-on:input="$emit('input', $event.target.value)"
      :class="className" >

      <option selected="selected" disabled="disabled" value="" v-if="placeholder">{{ placeholder }}</option>

      <option
        v-for="(selectOption, selectValue) in selectOptions"
        :value="selectValue" >
        {{ selectOption }}
      </option>

    </select>

  </div>
</template>

<script>
import InputLabel from './InputLabel'

export default {
  name: 'FormInput',
  components: {InputLabel},
  props: {
    type: {
      type: String,
      default: "text"
    },
    labelText: {
      type: String,
      default: ""
    },
    placeholder: {
      type: String,
      default: ""
    },
    value: {},
    className: {
      type: String,
      default: ""
    },
    mask: {
      type: String,
      default: "ZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZ"
    },
    selectOptions: {
      type: Object,
      default: function () { return {} }
    }
  },
  computed: {
    tokens() {
      return {
        'Z': {pattern: /(.*)/},
        '#': {pattern: /\d/},
        'X': {pattern: /[0-9a-zA-Zа-яА-Я]/, transform: v => v.toLocaleUpperCase()},
        'S': {pattern: /[a-zA-Zа-яА-Я]/ },
        'A': {pattern: /[a-zA-Zа-яА-Я]/, transform: v => v.toLocaleUpperCase()},
        'a': {pattern: /[a-zA-Zа-яА-Я]/, transform: v => v.toLocaleLowerCase()},
        '!': {escape: true}
      };
    }
  },
}
</script>

<style scoped lang="stylus">
  .input-container
    display inline-block
    width 100%

  input[type=text], input[type=password], input[type=date], input[type=number], select
    background white
    height 40px
    padding-left 10px
    border 1px solid gray

  input[type=date]
    padding-top 10px;

  input[type=button]
    height 40px
    background-color #FF473A
    border 0
    color white
    padding 8px 20px

  input, select
    width 100%
    margin 10px 0
    display inline-block

    &.condensed
      margin 0.5px 0
      border 0

    &.secondary
      background transparent
      color white
      border 1px solid white
      font-weight 700

    &.small
      width auto
      height 40px

    &.blue
      color #040F31
      border 1px solid #040F31
      font-weight 700

    &.bg-blue
      background #040f31
      color white
</style>
