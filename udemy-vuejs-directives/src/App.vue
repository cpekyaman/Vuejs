<template>
    <div id="app">
        <img src="./assets/logo.png">
        <div id="custom-directives">
            <h1>Custom Directives</h1>
            <p v-highlight:background.delayed="'red'">Color this</p>
            <p v-app-highligt:background.delayed.blink="highlightData">Color this too</p>

            <button v-myEvent:click="clicked">Click Me</button>
            <div v-myEvent:mouseenter="entered" style="width: 100px; height: 100px; background-color: green"></div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                highlightData : {
                    mainColor : 'green',
                    secondColor : 'red',
                    interval : 1000,
                    delay : 2000
                }
            }
        },
        methods : {
          clicked() {
              alert('I clicked')
          },
            entered() {
              console.log("mouse entered")
            }
        },
        directives: {
            myEvent: {
              bind(el, binding, vnode) {
                  const event = binding.arg
                  el.addEventListener(event, binding.value)
              }
            },
            appHighligt: {
                bind(el, binding, vnode) {
                    let delay = 0
                    if (binding.modifiers['delayed']) {
                        delay = binding.value.delay
                    }

                    if (binding.modifiers['blink']) {
                        let mainColor = binding.value.mainColor
                        let secondColor = binding.value.secondColor
                        let currentColor = mainColor

                        setTimeout(() => {
                            setInterval(() => {
                                currentColor === secondColor ? currentColor = mainColor : currentColor = secondColor
                                if (binding.arg === 'background') {
                                    el.style.backgroundColor = currentColor
                                } else {
                                    el.style.color = currentColor
                                }
                            }, binding.value.interval)
                        }, delay)

                    } else {
                        setTimeout(() => {
                            if (binding.arg === 'background') {
                                el.style.backgroundColor = binding.value.mainColor
                            } else {
                                el.style.color = binding.value.mainColor
                            }
                        }, delay)
                    }
                }
            }
        }
    }
</script>

<style>
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        margin-top: 60px;
    }

    div {
        width: 60%;
        margin-left: auto;
        margin-right: auto;
    }

    h1, h2 {
        font-weight: normal;
    }

    ul {
        list-style-type: none;
        padding: 0;
    }

    li {
        display: inline-block;
        margin: 0 10px;
    }

    a {
        color: #42b983;
    }
</style>
