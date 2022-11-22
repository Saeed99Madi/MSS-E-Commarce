class CustomError extends Error {
  status: number;
  isCustomError = true;

  constructor(status: number, message: string) {
    super(message);
    this.status = status;
  }
}

export default CustomError;

export const isCustomError = (err: unknown): err is CustomError => {
  return (err as CustomError).isCustomError ?? false;
};
