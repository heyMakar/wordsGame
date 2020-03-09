import axios from 'axios';
import { range, shuffle, trim } from 'lodash';

const randomRange = () => shuffle(range(2, 50))
let numbers = randomRange();

export default {
  state: {
    word: null,
    splittedWord: null,
    imgLink: null,
    wordLength: null,
    isGameEnd: false,
    isGameWin: false,
  },
  actions: {
    async getWord({ commit, dispatch }) {
      const [first] = numbers;
      const url = `https://apidir.pfdo.ru/v1/directory-program-activities/${first}`;
      const res = await axios.get(`${url}`);
      numbers = numbers.filter(n => n !== first);
      const word = await res.data;
      if(word['result_message'] === 'Полный успех') {
        commit('ADD_WORD', word);
        commit('ADD_SPLITTED_WORD', word.data.name);
        commit("ADD_IMG_LINK", word.data['img_src']);
        commit('ADD_WORD_LENGTH', trim(word.data.name).length)
      } else dispatch('getWord');
    },
    moveChar({ commit }, char) {
      commit('REMOVE_CHAR', char)
    },
    nextGame({ dispatch, commit }) {
      commit("CHANGE_GAME_STATE");
      dispatch('getWord');
    },
    newGame({ dispatch, commit }) {
      numbers = randomRange();
      commit('CHANGE_GAME_STATE');
      dispatch('getWord');
    },
    resetWord(state, word) {
      state.commit('RESET_WORD');
      state.commit('ADD_SPLITTED_WORD', word.data.name)
    }
  },
  mutations: {
    ADD_WORD(state, word) {
      state.word = word;
    },
    ADD_SPLITTED_WORD(state, word) {
      console.log(word)
      const processedWord = trim(word.toUpperCase()).split('');
      state.splittedWord = shuffle(processedWord).map(c => {
        if (c === ' ') {
          c = 'sp';
        }
        return c;
      });
    },
    ADD_IMG_LINK(state, link) {
      state.imgLink = link;
    },
    ADD_WORD_LENGTH(state, length) {
      const emptyArray = new Array(length).fill('')
      state.wordLength = emptyArray;
    },
    REMOVE_CHAR(state, data) {
      const newWord = state.splittedWord.map((c, i) => {
        if (i === data.index) {
          c = '';
        }
        return c;
      });
      state.splittedWord = newWord;
      const findIndex = state.wordLength.indexOf('')      
      state.wordLength[findIndex] = data.w
      if (state.splittedWord.every(w => w === '')) {
        state.isGameEnd = true;
        const userAnswer = state.wordLength
        const processedUserAnswer = userAnswer.map(c => {
          if (c === 'sp') {
            c = ' '
          }
          return c;
        }).join('');
        const correctAnswer = state.word.data.name.toUpperCase();
        if (processedUserAnswer === correctAnswer) {
          state.isGameWin = true;
        }
      }
    },
    CHANGE_GAME_STATE(state) {
      state.isGameEnd = false;
      state.isGameWin = false;
    },
    RESET_WORD(state) {
      state.wordLength.fill('');
    }
  },
  getters: {
    word(state) {
      return state.word;
    },
    splittedWord(state) {
      return state.splittedWord;
    },
    imgLink(state) {
      return state.imgLink
    },
    wordLength(state) {
      return state.wordLength;
    },
    isGameEnd(state) {
      return state.isGameEnd;
    },
    isGameWin(state) {
      return state.isGameWin;
    }
  },
}