import { Profile } from './interfaces/profile.interface';
import { Body, Controller, Get, Post } from '@nestjs/common';
import { ProfilesService } from './profiles.service';
import { CreateProfileDto } from './dto/create-profile.dto';

@Controller('profiles')
export class ProfilesController {
  constructor(private readonly profilesService: ProfilesService) { }

  @Post()
  async create(@Body() data: CreateProfileDto) {
    this.profilesService.create(data);
  }

  @Get()
  async getAll(): Promise<Profile[]> {
    return this.profilesService.getAll();
  }
}
