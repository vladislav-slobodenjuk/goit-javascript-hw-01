import validatePassword from './js/validate-password';
console.log('valvalidatePassword :>> ', validatePassword);
console.log(validatePassword('sgsdfgs'));

// импортирование конкретной сущности, указ-й в {}
import { addUser } from './js/api-service';
console.table('addUser :>> ', addUser);

addUser('ajax');
