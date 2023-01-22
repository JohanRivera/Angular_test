export class UserLogin {
	userName: string | undefined;
	password: string | undefined;
}

export interface RefreshToken {
    id: number;
    userId: number;
    token: string;
    refreshCount: number;
    expiryDate: Date;
}  

export interface LoginResponse {
    accessToken: string;
    refreshToken: RefreshToken;
    tokenType: string;
  }