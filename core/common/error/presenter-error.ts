class CompletableError extends Error {
  private readonly internalError?: Error;

  constructor(message?: string, internalError?: Error) {
    super(message ?? internalError?.message ?? 'An error has occurred');
    this.name = "CompletableError";
    this.internalError = internalError;
  }
}

class RetryableError extends Error {
  private readonly internalError?: Error;
  private readonly callback?: () => void

  constructor(message?: string, internalError?: Error, callback?: () => void) {
    super(message ?? internalError?.message ?? 'An error has occurred');
    this.name = "RetryableError";
    this.internalError = internalError;
    this.callback = callback;
  }
}

type PresenterError = CompletableError | RetryableError;

export {
  type PresenterError,
  CompletableError,
  RetryableError
}
