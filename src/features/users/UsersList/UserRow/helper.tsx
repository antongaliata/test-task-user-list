import React, { Fragment } from "react";

export const highlightFoundText = (currentText: string, searchText: string, classNameForHighlighting: string = 'found-text'): React.ReactNode => {

	if (!searchText) return currentText;

	const partsText = currentText.split(' ');
	const partsSearchText = searchText.split(' ');

	//использую индекс, тк в любом случае будет перерисовка
	return partsText.map((text, index) => {
		for (let i = 0; i < partsSearchText.length; i++) {
			const partTextFirst = text.slice(0, partsSearchText[i].length);
			const partTextSecond = text.slice(partTextFirst.length);

			if (text.toLowerCase().startsWith(partsSearchText[i].toLowerCase())) {
				return (
					<Fragment key={index}>
						<span className={classNameForHighlighting}> {partTextFirst}</span>
						{partTextSecond}
					</Fragment>
				)
			}
		}
		return <Fragment key={index}> {text}</Fragment>
	});
};