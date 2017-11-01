import * as uuid from 'uuid4';

export function generateId() {
    return new Promise((resolve, reject) => {
        uuid((err, id) => {
            err ? reject(err) : resolve(id);
        });
    });
}
