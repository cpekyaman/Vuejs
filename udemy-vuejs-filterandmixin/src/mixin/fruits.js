export const fruits = {
  data () {
    return {
      filterText: '',
      fruits : ['Apple', 'Banana', 'Melon', 'Grape', 'Mango']
    }
  },
  computed: {
    filteredFruits() {
      return this.fruits.filter((el) => {
        return el.match(this.filterText)
      })
    }
  }
}
