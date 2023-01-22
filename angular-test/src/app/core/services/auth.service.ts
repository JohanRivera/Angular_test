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
    accessToken: 'eyJhbGciOiJIUzI1NiJ9.eyJSb2xlIjoiQWRtaW4iLCJJc3N1ZXIiOiJJc3N1ZXIiLCJVc2VybmFtZSI6InRlc3RAdGVzdC5jbyIsImV4cCI6MTcwMzIwMjkyMywiaWF0IjoxNjc0MzQ1MzIzfQ.HWYliguekh-OdZMBN9SozlE_kUGdRkPNplu7THj7NuQ',
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
    if(loginRequest.userName === TestUser.userName && loginRequest.password === TestUser.password)
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
    const decodedToken = this.jwtService.decodeToken(this.fakeLoginResponse.accessToken);
    console.log(decodedToken.Username)
    return decodedToken.Username;
  }

  logout() {
    // Removes the jwt token from the local storage, so the user gets logged out & then navigate back to the "public" routes
    localStorage.removeItem(this.localStorageUserName);
    sessionStorage.clear();
  }
}
