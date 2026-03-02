import { Controller, Post, Body } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('users')
export class UserController {
  constructor(private userService: UserService) {}

  // POST /users/signup
  @Post('signup')
  async signup(@Body() body: { email: string; password: string; name: string }) {
    return this.userService.signUp(body.email, body.password, body.name);
  }

  // POST /users/login
  @Post('login')
  async login(@Body() body: { email: string }) {
    return this.userService.login(body.email);
  }
}