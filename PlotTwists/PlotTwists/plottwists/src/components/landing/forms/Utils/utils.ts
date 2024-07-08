
//TODO: CHECK user uniqueness via the username and email which should be unique across user database to avoid multiple
// accounts for a single user.

// Regex for password complexity
const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{12,}$/;

// Regex for username validation
const usernameRegex = /^[a-zA-Z0-9_-]+$/;

export const validateEmail = (value: string): string | boolean => {
    const regex = /^\S+@\S+$/i;
    if (!value.match(regex)) {
        return 'Invalid email address.';
    }
    return true;
};

export const validatePasswordComplexity = (value: string): string | boolean => {
    if (!value.match(passwordRegex)) {
        return 'Password must be at least 12 characters long, include uppercase and lowercase letters, numbers, and special characters.';
    }
    return true;
};

export const validatePasswordsMatch = (password: string, confirmPassword: string): string | boolean => {
    if (password !== confirmPassword) {
        return 'Passwords must match.';
    }
    return true;
};

export const validateUsername = (value: string): string | boolean => {
    if (!value.match(usernameRegex)) {
        return 'Username can only include alphanumeric characters, underscores, and hyphens.';
    }
    return true;
};

export const validateAge = (dob: string): string | boolean => {
    const birthday = new Date(dob);
    const today = new Date();
    let age = today.getFullYear() - birthday.getFullYear();
    const m = today.getMonth() - birthday.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthday.getDate())) {
        age--;
    }
    if (age < 13) {
        return 'You must be at least 13 years old to register.';
    }
    return true;
};
