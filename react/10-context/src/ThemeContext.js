import React from 'react';

export const themes = {
	light: {
		textcolor:"#000000",
		background:"#d3d3d3"
	},
	dark:{
		textcolor:"#FFFFFF",
		background:"#595959"
	}
}

const ThemeContext = React.createContext()

ThemeContext.displayName = "ThemeContext";

export default ThemeContext;