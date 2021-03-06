import React from "react";
import PropTypes from "prop-types";

import Allele from "../Allele";
const AlleleListboxSelect = props => {
	const {
		handleOpenOptions,
		openOptions,
		currentAllele,
		selectRef,
		alleleType
	} = props;
	return (
		<div
			tabIndex="0"
			role="button"
			onClick={handleOpenOptions}
			onKeyDown={handleOpenOptions}
			aria-pressed={openOptions}
			aria-expanded={openOptions}
			className="select-allele"
			// Use the `ref` callback to store a reference to the text input DOM
			// element in an instance field
			ref={selectRef}
		>
			{currentAllele === undefined ? (
				"Select an Allele"
			) : (
				<Allele alleleName={currentAllele} alleleType={alleleType} />
			)}
		</div>
	);
};

export default AlleleListboxSelect;

AlleleListboxSelect.propTypes = {
	alleleType: PropTypes.string,
	handleOpenOptions: PropTypes.func,
	openOptions: PropTypes.bool,
	currentAllele: PropTypes.string,
	selectRef: PropTypes.object
};
