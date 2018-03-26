<template>
  <b-container>
    <h1>Animations</h1>
    <hr/>

    <b-row sm="12" class="border border-primary m-4 p-4">
      <b-col sm="3" class="border border-success m-2 p-2">
        <b-button variant="primary" @click="showInfo = !showInfo">Toggle Info</b-button>
        <hr/>
        <transition name="fade" appear>
          <b-alert variant="info" v-if="showInfo" show>This is some info</b-alert>
        </transition>
        <hr/>
      </b-col>

      <b-col sm="3" class="border border-success m-2 p-2">
        <b-button variant="success" @click="showWarn = !showWarn">Toggle Warning</b-button>
        <hr/>
        <transition name="slide">
          <b-alert variant="warning" v-if="showWarn" show>This is some warning</b-alert>
        </transition>
        <hr/>
      </b-col>

      <b-col sm="3" class="border border-success m-2 p-2">
        <b-button variant="danger" @click="showDanger = !showDanger">Toggle Danger</b-button>
        <hr/>
        <transition enterActiveClass="animated bounce" leaveActiveClass="animated shake">
          <b-alert variant="danger" v-if="showDanger" show>This is some danger</b-alert>
        </transition>
        <hr/>
      </b-col>
    </b-row>

    <b-row sm="12" class="border border-primary m-4 p-4">
      <b-col sm="3" class="border border-success m-2 p-2">
        <b-button variant="danger" @click="showAlternate = !showAlternate">Toggle Alternate</b-button>
        <hr/>
        <transition enterActiveClass="animated bounce" leaveActiveClass="animated shake" mode="out-in">
          <b-alert variant="danger" v-if="showAlternate" show key="danger">This is some danger</b-alert>
          <b-alert variant="success" v-else show key="success">This is some success</b-alert>
        </transition>
        <hr/>
      </b-col>

      <b-col sm="3" class="border border-success m-2 p-2">
        <b-button variant="primary" @click="load = !load">Toggle Load</b-button>
        <hr/>
        <transition
          @before-enter="beforeEnter"
          @enter="enter"
          @before-leave="beforeLeave"
          @leave="leave">
          <b-alert variant="info" v-if="load" show>This is some info</b-alert>
        </transition>
        <hr/>
      </b-col>

      <b-col sm="3" class="border border-success m-2 p-2">
        <b-button variant="primary" @click="toggleComponent">Toggle Component</b-button>
        <hr/>
        <transition name="fade" mode="out-in">
          <component :is="selected"></component>
        </transition>
        <hr/>
      </b-col>
    </b-row>

    <b-row sm="12" class="border border-primary m-4 p-4">
      <b-col sm="3" class="border border-success m-2 p-2">
        <b-button variant="primary" @click="addItem">Add Item</b-button>
        <b-list-group>
          <transition-group name="slide">
            <b-list-group-item style="cursor: pointer"
                               v-for="(number, idx) in numbers"
                               @click="removeItem(idx)"
                                :key="idx">
              {{ number }}
            </b-list-group-item>
          </transition-group>
        </b-list-group>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
  import Danger from './components/Danger.vue'
  import Success from './components/Success.vue'

  export default {
    name: 'app',
    data() {
      return {
        showInfo: true,
        showWarn: false,
        showDanger: false,
        showAlternate: true,

        load: true,
        elWidth: 100,

        selected: 'app-danger',

        numbers: [1, 2, 3, 4, 5]
      }
    },
    components: {
      appDanger: Danger,
      appSuccess: Success
    },
    methods: {
      toggleComponent() {
        if (this.selected === 'app-danger') {
          this.selected = 'app-success'
        } else {
          this.selected = 'app-danger'
        }
      },
      addItem() {
        const rand = Math.floor(Math.random() * this.numbers.length)
        this.numbers.splice(rand, 0, this.numbers.length + 1)
      },
      removeItem(index) {
        this.numbers.splice(index, 1)
      },
      beforeEnter(el) {
        el.style.width = this.elWidth + 'px'
      },
      enter(el, done) {
        let round = 1
        const interval = setInterval(() => {
          el.style.width = (this.elWidth + round * 10) + 'px'
          round++;
          if (round >= 10) {
            clearInterval(interval)
            done()
          }
        }, 20)
      },
      beforeLeave(el) {
        el.style.width = '200px'
      },
      leave(el, done) {
        let round = 1
        const interval = setInterval(() => {
          el.style.width = (this.elWidth - round * 10) + 'px'
          round++;
          if (round >= 10) {
            clearInterval(interval)
            done()
          }
        }, 20)
      }
    }
  }
</script>

<style>
  .fade-enter {
    opacity: 0;
  }

  .fade-enter-active {
    transition: opacity 1s;
  }

  .fade-leave {
    opacity: 1;
  }

  .fade-leave-active {
    transition: opacity 1s;
    opacity: 0;
  }

  .slide-enter {

  }

  .slide-enter-active {
    animation: slide-in 1s ease-out forwards;
  }

  .slide-leave {
    opacity: 1;
  }

  .slide-move {
    transition: transform 1s;
  }

  .slide-leave-active {
    animation: slide-out 1s ease-out forwards;
    position: absolute;
  }

  @keyframes slide-in {
    from {
      transform: translateY(20px);
    }
    to {
      transform: translateY(0);
    }
  }

  @keyframes slide-out {
    from {
      transform: translateY(0);
    }
    to {
      transform: translateY(20px);
    }
  }
</style>
