import React, { useState, useEffect } from 'react';
import useLocalStorage from './useLocalStorage.js';

const useDarkMode = () => {
	const [ isDark, setIsDark ] = useLocalStorage('true');

	useEffect(() => {
		isDark === true ? document.body.classList.add('dark-mode') : document.body.classList.remove('dark-mode');
	});
	return [ isDark, setIsDark ];
};

export default useDarkMode;
