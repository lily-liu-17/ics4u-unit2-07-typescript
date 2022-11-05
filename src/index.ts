/*
 * This program is a vehicle class.
 *
 * @author  Lily Liu
 * @version 1.0
 * @since   2022-10-31
 */

import Truck from './Truck'
import Bicycle from './Bicycle'

const bmx = new Bicycle('Red', 40)

console.log('Created Bmx bike.\nStatus:\n')
bmx.status()

console.log('Set the cadense to 10\n')
bmx.accelerate(10)
bmx.status()

console.log('\nAccelerate by 15:')
bmx.accelerate(15)
bmx.status()

console.log('\nRing bell.')
bmx.ringBell()

const bigTruck = new Truck('Grey', 'HGC-3456F', 200)

console.log('Created a Truck.\nStatus:\n')
bigTruck.status()

console.log('\nAccelerating, 10 of power for ten seconds:')
bigTruck.accelerate(10, 10)
console.log('New speed: ' + String(bigTruck.getSpeed()))

console.log('\nBreaking, 10 of power for 10 sec.')
bigTruck.accelerate(10, 10)
console.log('New speed: ' + String(bigTruck.getSpeed()))

console.log('\nApplyed air pressure of 10:')
bigTruck.provideAir(10)
console.log('New speed: ' + String(bigTruck.getSpeed()))

console.log('\nDone.')
