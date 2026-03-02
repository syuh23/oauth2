import { Repository } from 'typeorm';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from '../entity/user.entity';

@Injectable()
export class UserRepository extends Repository<User> {
  constructor(
    @InjectRepository(User) repo: Repository<User>) {
    super(repo.target, repo.manager, repo.queryRunner);
  }

  // 이메일로 사용자 찾기
  async findByEmail(email: string): Promise<User | null> {
    return this.findOne({ where: { email } });
  }

  // 사용자 생성
  async createUser(email: string, password: string, name: string): Promise<User> {
    const user = this.create({ email, password, name });
    return this.save(user);
  }
}