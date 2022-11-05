/**
 * Bicycle
 * By       Lily
 * Version  1.0
 * Since    2022-10-31
 */

import Vehicle from './Vehicle'

class Bicycle extends Vehicle {
  // Cadence field
  private cadence = 0

  // getter and setter
  status(): void {
    console.log(
      `        --> Speed: ${super.getSpeed()}
        --> MaxSpeed: ${super.getMaxSpeed()}
        --> Color: ${super.getColor()}
        --> Cadence: ${this.cadence}\n`
    )
  }

  getCadence(): number {
    return this.cadence
  }

  // accelerate() method - increases the cadence
  accelerate(appliedPower: number): void {
    this.cadence = this.cadence + appliedPower
    super.setSpeed(this.cadence * 2)
  }

  // ringBell() method - prints a bell sound
  ringBell(): void {
    console.log('Ding ding!\n')
  }
}

export = Bicycle
