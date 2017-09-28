/**
 * Created by raistlin on 9/28/2017.
 */
var app = new Vue({
    el : '#app',
    data : {
        playerHealth : 100,
        monsterHealth : 100,
        running : false,
        turns : []
    },
    methods : {
        start : function() {
            this.running = true;
            this.resetHealth();
            this.turns = [];
        },
        giveup : function() {
            this.running = false;
        },
        attack : function(pmin,pmax) {
            var damage = this.damage(pmin,pmax);
            this.monsterHealth -= damage;
            this.addTurn('player', damage);

            if(! this.isWin(this.monsterHealth, 'You Won')) {
                this.monsterAttack();
            }
        },
        monsterAttack : function() {
            var damage = this.damage(5,12);
            this.playerHealth -= damage;
            this.addTurn('monster', damage);

            this.isWin(this.playerHealth, 'You Lost');
        },
        heal : function() {
            this.playerHealth = Math.min(this.playerHealth + 10, 100);
            this.monsterAttack();
        },
        resetHealth : function() {
            this.playerHealth = 100;
            this.monsterHealth = 100;
        },
        addTurn : function(who, damage) {
            this.turns.unshift({
                who : who,
                damage : damage
            });
        },
        damage : function(min, max) {
            return Math.max(Math.floor(Math.random() * max) + 1, min);
        },
        isWin : function(health, msg) {
            if(health <= 0) {
                this.running = false;
                alert(msg);
                return true;
            } else {
                return false;
            }
        }
    }
});
