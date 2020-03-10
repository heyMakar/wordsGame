<template>
  <div class='table'>
    Таблица результатов
    <table>
      <tr>
        <th @click="sort('id')">Номер</th>
        <th @click="sort('word')">Правильные ответы</th>
      </tr>
      <tr v-for="value in getRequestedWords" :key="value.id">
        <td>{{ value.id }}</td>
        <td>{{ value.word }}</td>
      </tr>
    </table>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

const sortInDirection = (arr, value, direction = 'asc') => {
  if (direction === 'asc') {
    return arr.sort((a, b) => a[value] > b[value] ? 1 : b[value] > a[value] ? -1 : 0);
  }
  return arr.sort((a, b) => a[value] > b[value] ? -1 : b[value] > a[value] ? 1 : 0);
}

export default {
  data() {
    return {
      currentSortDirection: 'asc'
    }
  },
  computed: { 
    ...mapGetters(['isGameQuit', 'getRequestedWords']),
  },
  methods: {
    ...mapActions(['newGame']),
    sort(value) {
      if(this.currentSortDirection === 'asc') {
        this.currentSortDirection = 'desc';
        return sortInDirection(this.getRequestedWords, value)
      }
      this.currentSortDirection = 'asc';
      return sortInDirection(this.getRequestedWords, value, 'desc');
    }
  }

}
</script>

<style scoped>
table {
  border: 1px solid black;
  margin-left: auto;
  margin-right: auto;
}

.table {
  margin-top: 70px;
}

td {
  border: 1px solid black;
}

.number {
  width: 1px;
}
</style>