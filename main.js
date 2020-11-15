Vue.component('form-item', {
  template: `
    <li>
      <input :type="text">
      <input :type="selectedOption"
        <select v-model="selectedOption">
          <option disabled value="">Select type of input</option>
          <option v-for="optionType in optionTypes">{{ optionType }}</option>
        </select>
        <button @click="$emit('remove')">Delete</button>
      </li>`,
  
  data() {
    return {
      optionTypes: ['text', 'password', 'radio', 'checkbox', 'hidden', 'button', 'submit', 'reset', 'file', 'image'],
      selectedOption: ''
    }
  } 
})

new Vue({
  el: '#form-list',
  data: {
    items: [],
    itemId: 0
  },
  methods: {
    addNewItem () {
      this.items.push({id: this.itemId++});
    }
  }
})
