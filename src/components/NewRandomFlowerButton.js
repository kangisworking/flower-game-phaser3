import React from "react";
import { connect } from "react-redux";
import { addFlower } from "../actions/indexActions";
import { getRandomColor } from "../utils/colors";

import "../css/btn.css";

function mapStateToProps({ flowers }) {
	return {
		flowers
	};
}

class NewFlowerButton extends React.Component {
	handleSubmit = () => {
		const { dispatch } = this.props;
		const info = {
			parent1: {
				genotype: {
					color: [getRandomColor(), getRandomColor()],
					shape: ["square", "round"]
				},
				position: { x: 0, y: 0 }
			},
			parent2: {
				genotype: {
					color: [getRandomColor(), getRandomColor()],
					shape: ["triangle", "pentagon"]
				},
				position: { x: 0, y: 0 }
			}
		};
		dispatch(addFlower(info));
	};
	render() {
		return (
			<button class="btn btn-primary" onClick={this.handleSubmit}>
				New Random Flower
			</button>
		);
	}
}

export default connect(mapStateToProps)(NewFlowerButton);
