import { beeRotate } from "./utils/rotation";
import { beeFrameRotate } from "./utils/rotation";
export function update() {
	//  Acceleration Based Movement
	// Reset the acceleration
	// this.bee.setAcceleration(0, 0);
	// this.physics.accelerateToObject(
	// 	this.bee,
	// 	this.flowerToFlyTo,
	// 	400,
	// 	140,
	// 	140
	// );

	if (this.spritestack) {
		// change frames for sprite stack rotation
		beeFrameRotate.call(this, this.flowerToFlyTo);
	} else {
		// rotate bee towards flower
		beeRotate.call(this, this.flowerToFlyTo);
	}

	//Too Stiff
	this.bee.angle = this.physics.moveToObject(
		this.bee,
		this.flowerToFlyTo,
		1000,
		200
	);
}
// functions basically the same as accelerateToObject
// function accelerateToObject(obj1, obj2, speed) {
// 	console.log(obj1.body);
// 	if (typeof speed === "undefined") {
// 		speed = 60;
// 	}
// 	var angle = Math.atan2(obj2.y - obj1.y, obj2.x - obj1.x);
// 	//obj1.body.rotation = angle + this.math.degToRad(90); // correct angle of angry bullets (depends on the sprite used)
// 	obj1.body.acceleration.x = Math.cos(angle) * speed; // accelerateToObject
// 	obj1.body.acceleration.y = Math.sin(angle) * speed;
// }
