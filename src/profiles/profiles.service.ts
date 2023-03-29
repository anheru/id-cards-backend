import { Injectable } from '@nestjs/common';
import { Profile } from './interfaces/profile.interface';

@Injectable()
export class ProfilesService {
  private readonly items: Profile[] = [];

  create(data: Profile) {
    this.items.push(data);
  }

  getAll(): Profile[] {
    return this.items;
  }
}
