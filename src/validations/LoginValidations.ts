function validate(input: {
    user: string;
    password: string;
}): Promise<string> {
    return new Promise((resolve, reject) => {
        if (!input.user) return reject(new Error('Debe agregar usuario.'));
        if (!input.password) return reject(new Error('Debe agregar password.'));

        return resolve('');
    });
}

export default validate