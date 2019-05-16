import color from 'color';

export default colors = {
    primary: '#6200ee',
    accent: '#03dac4',
    background: '#f6f6f6',
    surface: '#ffffff',
    error: '#B00020',
    text: '#000000',
    disabled: color('#000000')
      .alpha(0.26)
      .rgb()
      .string(),
    placeholder: color('#000000')
      .alpha(0.54)
      .rgb()
      .string(),
    backdrop: color('#000000')
      .alpha(0.5)
      .rgb()
      .string(),
    notification: '#f50057',
  };