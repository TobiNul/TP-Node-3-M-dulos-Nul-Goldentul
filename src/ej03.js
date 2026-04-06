import dayjs from 'dayjs';
import 'dayjs/locale/es.js';
dayjs.locale('es');
const now = dayjs();
const fechaActual = now.format('DD/MM/YYYY');
const horaActual = now.format('HH:m');
console.log(`La fecha actual es ${fechaActual}.`)
console.log(`La hora actual es ${horaActual}.`)