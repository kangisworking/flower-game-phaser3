import { determineColor } from "../determinants/determineColor";
import { determineFlowerShape } from "../determinants/determineFlowerShape";
import { determineStem } from "../determinants/determineStem.js";

export function addFlower(currFlower, currFlowerId, game) {
	// set position and shape
	let newFlowerSprite = game.physics.add.sprite(
		currFlower.position.x,
		currFlower.position.y,
		determineFlowerShape(currFlower.genotype)
	);
	// set color
	newFlowerSprite.setTint(determineColor(currFlower.genotype));
	// hide debug info
	newFlowerSprite.debugShowBody = false;
	// create id
	newFlowerSprite.id = currFlowerId;
	// keep on top of stem
	newFlowerSprite.depth = 1;
	// add stem
	game.add.image(
		newFlowerSprite.x,
		newFlowerSprite.y + 12,
		determineStem(currFlower.genotype)
	);

	// add the flower to the array of onscreen flowers for bee to fly to
	game.flowersOnScreen.push(newFlowerSprite);
}
