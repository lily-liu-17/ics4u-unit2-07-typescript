/**
 * Vehicle
 * By       Lily Liu
 * Version  1.0
 * Since    2022-10-31
 */

class Vehicle {
  private colour: string
  private readonly maxSpeed: number
  private speed = 0

  constructor(colour: string, maxSpeed: number) {
    this.colour = colour
    this.maxSpeed = maxSpeed
  }

  // getters and setters
  status(): void {
    console.log(
      `        --> Speed: ${this.speed}
        --> MaxSpeed: ${this.maxSpeed}
        --> Color: ${this.colour}`
    )
  }

  getColor(): string {
    return this.colour
  }

  setColor(newColour: string): void {
    this.colour = newColour
  }

  getSpeed(): number {
    return this.speed
  }

  setSpeed(speed: number): void {
    this.speed = speed
  }

  getMaxSpeed(): number {
    return this.maxSpeed
  }

  // accelerate() - increases the speed over a period of time.
  accelerate(accelerationPower: number, accelerationTime: number): void {
    this.speed = accelerationPower * accelerationTime + this.speed

    if (this.speed > this.maxSpeed) {
      this.speed = this.maxSpeed
    }
  }

  // break() - decreases the speed over a period of time.
  break(breakPower: number, breakTime: number): void {
    this.speed = this.speed - breakPower * breakTime

    if (this.speed < 0) {
      this.speed = 0
    }
  }
}

export = Vehicle
