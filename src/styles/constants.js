/**
 * Объединяет классы Tailwind CSS с поддержкой условных классов
 * @param {...string} classes - Классы для объединения
 * @returns {string} Объединённая строка классов
 */
export const cn = (...classes) => {
  return classes.filter(Boolean).join(' ')
}

/**
 * Общие константы цветов
 */
export const COLOR = {
  PRIMARY: '#46A358',
  PRIMARY_LIGHT: '#46A3581A',
  DARK: '#3D3D3D',
  GRAY: '#FBFBFB',
  BORDER: 'rgba(70,163,89,0.2)',
}

/**
 * Общие стили кнопок
 */
export const BUTTON_STYLES = {
  iconButton: 'bg-white p-2 rounded-lg shadow-[0_4px_15px_rgba(0,0,0,0.1)] hover:bg-[#FBFBFB] transition-colors',
  primaryButton: 'bg-[#46A358] text-white px-6 py-2 rounded-md text-sm hover:bg-[#3d8e4f] transition',
}
