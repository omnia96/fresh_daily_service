import { Controller, Get } from '@nestjs/common';

@Controller('life')
export class LifeController {
  @Get()
  getBanner() {
    return [
      { id: 1, name: 'life-1', image: '' },
      { id: 2, name: 'life-1', image: '' },
      { id: 3, name: 'life-1', image: '' },
    ];
  }
}
