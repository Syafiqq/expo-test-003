class InvalidSessionError extends Error {
  constructor() {
    super('Invalid session');
    this.name = "AuthError";
  }
}

class InvalidCredentialsError extends Error {
  constructor() {
    super('Invalid credentials');
    this.name = "AuthError";
  }
}

type AuthError = InvalidSessionError | InvalidCredentialsError;

export {
  type AuthError,
  InvalidSessionError,
  InvalidCredentialsError
}
