import { zfill, numberFormat, formatoFecha, formatoHora, fechaToNumber, ToRGB, getMes } from '../index';

test('Pruebas', () => {
  const data = '2023-03-05 12:20:00'
  expect(formatoFecha(data)).toBe('05/03/2023');
  expect(formatoHora(data)).toBe('12:20:00 PM');
  expect(fechaToNumber(data)).toBe(20230305122000);
  expect(numberFormat(1520.523)).toBe('1.520,52');
  expect(zfill(1)).toBe('000001');
  expect(getMes(2)).toBe('FEBRERO');
  expect(JSON.stringify(ToRGB('#00000000'))).toBe(JSON.stringify({ r: 0, g: 0, b: 0, a: 0 }));
  // expect(portapapeles('data')).toBe('data');

});
