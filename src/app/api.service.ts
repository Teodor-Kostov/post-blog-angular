import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment.development';
import { Post, Theme, CreatePostDto, UpdatePostDto, CreateThemeDto, UpdateThemeDto, User, LoginRequest, RegisterRequest, EditProfileRequest } from './types';

interface ThemeApi {
  getThemes(): Observable<Theme[]>;
  getTheme(id: string): Observable<Theme>;
  createTheme(theme: CreateThemeDto): Observable<Theme>;
  updateTheme(id: string, theme: UpdateThemeDto): Observable<Theme>;
  deleteTheme(id: string): Observable<void>;
}

interface PostApi {
  getPosts(): Observable<Post[]>;
  getPost(id: string): Observable<Post>;
  createPost(post: CreatePostDto): Observable<Post>;
  updatePost(id: string, post: UpdatePostDto): Observable<Post>;
  deletePost(id: string): Observable<void>;
}

interface UserApi {
  login(data: LoginRequest): Observable<User>;
  register(data: RegisterRequest): Observable<User>;
  logout(): Observable<void>;
  getProfile(): Observable<User>;
  updateProfile(data: EditProfileRequest): Observable<User>;
}

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}


  themeApi: ThemeApi = {
    getThemes: () => this.http.get<Theme[]>(`${this.apiUrl}/themes`),
    getTheme: (id: string) => this.http.get<Theme>(`${this.apiUrl}/themes/${id}`),
    createTheme: (theme: CreateThemeDto) => this.http.post<Theme>(`${this.apiUrl}/themes`, theme),
    updateTheme: (id: string, theme: UpdateThemeDto) => this.http.put<Theme>(`${this.apiUrl}/themes/${id}`, theme),
    deleteTheme: (id: string) => this.http.delete<void>(`${this.apiUrl}/themes/${id}`)
  };


  postApi: PostApi = {
    getPosts: (limit?: number) =>
  this.http.get<Post[]>(
    `${this.apiUrl}/posts${limit != null ? `?limit=${limit}` : ''}`
  ),
    getPost: (id: string) => this.http.get<Post>(`${this.apiUrl}/posts/${id}`),
    createPost: (post: CreatePostDto) => this.http.post<Post>(`${this.apiUrl}/posts`, post),
    updatePost: (id: string, post: UpdatePostDto) => this.http.put<Post>(`${this.apiUrl}/posts/${id}`, post),
    deletePost: (id: string) => this.http.delete<void>(`${this.apiUrl}/posts/${id}`)
  };

  userApi: UserApi = {
    login: (data: LoginRequest) => this.http.post<User>(
      `${this.apiUrl}/login`,
      data,
      { withCredentials: true }
    ),
    register: (data: RegisterRequest) => this.http.post<User>(
      `${this.apiUrl}/register`,
      data,
      { withCredentials: true }
    ),
    logout: () => this.http.post<void>(
      `${this.apiUrl}/logout`,
      {},
      { withCredentials: true }
    ),
    getProfile: () => this.http.get<User>(
      `${this.apiUrl}/users/profile`,
      { withCredentials: true }
    ),
    updateProfile: (data: EditProfileRequest) => this.http.put<User>(
      `${this.apiUrl}/users/profile`,
      data,
      { withCredentials: true }
    )
  };
}
