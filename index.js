const backgroundColor = '#282c35'
const foregroundColor = '#d4d4d4'
const cursorColor = '#ffffffc9'
const borderColor = '#232830'

const colors = {
  black: backgroundColor,
  red: '#E15A60',
  green: '#99C794',
  yellow: '#ffe2a9',
  blue: '#6699CC',
  magenta: '#C594C5',
  cyan: '#5FB3B3',
  white: foregroundColor,
  lightBlack: '#65737e',
  lightRed: '#E15A60',
  lightGreen: '#a3be8c',
  lightYellow: '#ffe2a9',
  lightBlue: '#6699CC',
  lightMagenta: '#C594C5',
  lightCyan: '#5FB3B3',
  lightWhite: '#D4D4D4'
}

exports.decorateConfig = config => {
  return Object.assign({}, config, {
    foregroundColor,
    backgroundColor,
    borderColor,
    colors,
    cursorColor: config.cursorColor || cursorColor,
    termCSS: `
      ${config.termCSS || ''}
      ::selection {
        background: #677696 !important
      }
    `,
    css: `
      ${config.css || ''}
      ::selection {
        background: #677696 !important
      }
    `
  })
}
