export default class JwtService {
  private static tokenName = 'token';

  public static getToken(): string | null {
    return localStorage.getItem(this.tokenName);
  }

  public static setToken(token: string): void {
    return localStorage.setItem(this.tokenName, token);
  }

  public static destroyToken(): void {
    return localStorage.removeItem(this.tokenName);
  }
}
