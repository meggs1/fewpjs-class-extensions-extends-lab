// Your code here
class Polygon {
    constructor(sides) {
        this.sides = sides
      }

    get countSides() {
        return this.sides.length
    }

    get perimeter() {
        return this.sides.reduce((a, b) => a + b, 0)
    }
}

class Triangle extends Polygon {
    get isValid() {
        let sides = this.sides
        if (this.sides.length === 3) {
            if (
              sides[0] + sides[1] >= sides[2] &&
              sides[0] + sides[2] >= sides[1] &&
              sides[1] + sides[2] >= sides[0]
            ) {
              return true
            } else {
              return false
            }
          } else {
            return false
        }
    }
}

class Square extends Polygon {
    get isValid() {
        let sides = this.sides
        if (this.countSides === 4 ) {
            if (
                sides[0] === sides[1] &&
                sides[1] === sides[2] &&
                sides[2] === sides[3] 
            ) {
            return true
            } else {
                return false
            }
        }
    }

    get area() {
        return this.sides[0] * this.sides[1]
    }
}