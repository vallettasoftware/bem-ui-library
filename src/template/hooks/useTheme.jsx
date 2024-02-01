import React, {useEffect, useState} from 'react';
import ThemeContext from '../components/ThemeContext';

const useTheme = (componentName) => {
  const theme = React.useContext(ThemeContext);
  const [styles, setStyles] = useState('');

  useEffect(() => {
    import(`../../ui/components/${componentName}/${componentName}_theme_${theme}.module.scss`)
        .then(imported => setStyles(imported.default));
  }, [theme, componentName]);
  return styles;
};

export default useTheme;
