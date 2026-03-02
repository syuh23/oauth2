import { Injectable } from '@nestjs/common';
import { UserRepository } from './user.repository';

@Injectable()
export class UserService {
  constructor(private userRepository: UserRepository) {}

  // 회원가입
  async signUp(email: string, password: string, name: string) {
    // email 중복 체크 필요... -> controller나 middleware??
    return this.userRepository.createUser(email, password, name);
  }

  // 로그인 (이메일로 사용자 찾기)
  async login(email: string) {
    return this.userRepository.findByEmail(email);
  }
}