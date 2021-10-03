import Joi from 'joi'; //экспорт библиотеки Joi для валидации

console.log('Joi :>> ', Joi);

// создание схемы валидации
const passSchema = Joi.string().min(4).max(10);

export default function validatePassword(password) {
  return passSchema.validate(password);
  // значение пароля передается как аргумент в функцию валидации к схеме
}
