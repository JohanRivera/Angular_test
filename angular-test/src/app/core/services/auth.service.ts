import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Observable, of, tap } from 'rxjs';
import { LoginResponse, UserLogin } from '../models/user.model';

export const TestUser: UserLogin = {
  userName: "test@test.co",
  password: "12345678"
}

@Injectable({
  providedIn: 'root'
})

export class AuthService {
  private localStorageUserName = 'AngularTestStorage';
  private fakeLoginResponse: LoginResponse = {
    // fakeAccessToken.....
    accessToken: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c',
    refreshToken: {
      id: 1,
      userId: 1,
      token: '',
      refreshCount: 2,
      expiryDate: new Date(),
    },
    tokenType: 'JWT'
  }

  constructor(private jwtService: JwtHelperService) { }

  login(loginRequest: UserLogin): Observable<LoginResponse>
  {
    if(loginRequest === TestUser)
    {
      return of(this.fakeLoginResponse).pipe(
        tap((res: LoginResponse) => {
          this.logout();
          localStorage.setItem(this.localStorageUserName, res.accessToken)
        })
      );
    }
    this.fakeLoginResponse.accessToken = ''

    return of(this.fakeLoginResponse)
  }

  getLoggedInUser() {
    const decodedToken = this.jwtService.decodeToken();
    return decodedToken.user;
  }

  logout() {
    // Removes the jwt token from the local storage, so the user gets logged out & then navigate back to the "public" routes
    localStorage.removeItem(this.localStorageUserName);
    sessionStorage.clear();
  }
}
