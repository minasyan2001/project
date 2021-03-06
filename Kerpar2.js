var LivingCreature = require("./LivingCreature.js")
module.exports =  class Kerpar2 extends LivingCreature {
    constructor(x, y) {
        super(x, y)
        this.energy = 13;
        this.directions = [
            [this.x - 1, this.y - 1],
            [this.x, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y],
            [this.x + 1, this.y],
            [this.x - 1, this.y + 1],
            [this.x, this.y + 1],
            [this.x + 1, this.y + 1],

            [this.x - 2, this.y - 2],
            [this.x - 1, this.y - 2],
            [this.x, this.y - 2],
            [this.x + 1, this.y - 2],
            [this.x + 2, this.y - 2],
            [this.x - 2, this.y],
            [this.x + 2, this.y],
            [this.x - 2, this.y + 1],
            [this.x - 2, this.y + 2],
            [this.x - 1, this.y + 2],
            [this.x + 1, this.y + 2],
            [this.x, this.y + 2],
            [this.x + 2, this.y + 2],
            [this.x + 2, this.y + 1],
            [this.x + 2, this.y - 1],
            [this.x -2, this.y - 1]

        ]

    }


    getNewDirections() {
        this.directions = [
            [this.x - 1, this.y - 1],
            [this.x, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y],
            [this.x + 1, this.y],
            [this.x - 1, this.y + 1],
            [this.x, this.y + 1],
            [this.x + 1, this.y + 1]

        ]
    }

    chooseCell(character) {
        this.getNewDirections()
        return super.chooseCell(character);


    }

    mult() {
       // var empty = random(this.chooseCell(0))
       var arr=this.chooseCell(0);
       var empty = arr[Math.floor(Math.random()*arr.length)];

        if (empty && this.energy > 15) {
            var newX = empty[0]
            var newY = empty[1]
            matrix[newY][newX] = 5
            var kp2 = new Kerpar2(newX, newY)
            kerpar2Arr.push(kp2)
        }
    }

    move() {
      //  var empty = random(this.chooseCell(0))
      var arr=this.chooseCell(0);
      var empty = arr[Math.floor(Math.random()*arr.length)];


        this.energy--;
        if (empty) {
            var newX = empty[0]
            var newY = empty[1]
            matrix[newY][newX] = 5
            matrix[this.y][this.x] = 0

            this.x = newX
            this.y = newY
        }

    }

    eat() {
      //  var food = random(this.chooseCell(4))
      var arr=this.chooseCell(4);
      var arr=this.chooseCell(1);
      var food = arr[Math.floor(Math.random()*arr.length)];

      if (weather == "garun" && weather == "dzmer"){
        if (food) {
            var newX = food[0]
            var newY = food[1]
            matrix[newY][newX] = 5
            matrix[this.y][this.x] = 0

            for (var i in kerpar1Arr) {
                if (kerpar1Arr[i].x == newX && kerpar1Arr[i].y == newY) {
                    kerpar1Arr.splice(i, 1)
                }
            }

            this.x = newX
            this.y = newY
            this.energy += 2
            mardakeryKerav ++;
        }
    }
    else  if (weather == "amar" && weather == "ashun"){
        if (food) {
            var newX = food[0]
            var newY = food[1]
            matrix[newY][newX] = 5
            matrix[this.y][this.x] = 0

            for (var i in grassArr) {
                if (grassArr[i].x == newX && grassArr[i].y == newY) {
                    grassArr.splice(i, 1)
                }
            }

            this.x = newX
            this.y = newY
            this.energy += 2
            mardakeryKerav ++;
        }
    }
}



    die() {
        
        if (this.energy <= 0) {
            matrix[this.y][this.x] = 0
            for (var i in kerpar2Arr) {
                if (kerpar2Arr[i].x == this.x && kerpar2Arr[i].y == this.y) {
                    kerpar2Arr.splice(i, 1)
                }
            }
        }

    }
}


