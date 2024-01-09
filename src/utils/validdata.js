

export function checkvaliddata(email,password) {
        const checkemail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email);
        const checkpassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@.#$!%*?&^])[A-Za-z\d@.#$!%*?&]{8,15}$/.test(password);

        if(!checkemail) return 'Your Email is not valid';
        if(!checkpassword) return "Your password is not valid";

        return null;
};