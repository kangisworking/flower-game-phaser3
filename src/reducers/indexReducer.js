import { CHANGE_PARENT_ALLELE, ADD_FLOWER } from "../actions/indexActions";
import { combineReducers } from "redux";
import exampleState from "../exampleState";
import { determineGenotype } from "../utils/determineGenotype";
import { determineXPos, determineYPos } from "../utils/determinePosition";

export function flowers(state = exampleState, action) {
	switch (action.type) {
		case CHANGE_PARENT_ALLELE:
			const {
				parentId,
				alleleType,
				allelePosition,
				allele
			} = action.data;
			return {
				...state,
				punnett: {
					...state.punnett,
					[parentId]: {
						...state.punnett[parentId],
						genotype: {
							...state.punnett[parentId].genotype,
							[alleleType]: state.punnett[parentId].genotype[
								alleleType
							].map((item, index) => {
								if (index === allelePosition) {
									return allele;
								} else {
									return item;
								}
							})
						}
					}
				}
			};
		case ADD_FLOWER:
			const { parent1, parent2 } = action.data;
			// Better way to generate ids?
			const newId = `flower${state.allIds.length + 1}`;
			return {
				...state,
				byId: {
					...state.byId,
					[newId]: {
						genotype: determineGenotype(
							parent1.genotype,
							parent2.genotype
						),
						position: { x: determineXPos(), y: determineYPos() }
					}
				},
				allIds: [...state.allIds.concat([newId])]
			};
		default:
			return state;
	}
}

const indexReducer = combineReducers({
	flowers
});

export default indexReducer;