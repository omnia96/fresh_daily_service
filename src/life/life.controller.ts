import { Controller, Get } from '@nestjs/common';

@Controller('life')
export class LifeController {
  @Get()
  getBanner() {
    return [
      {
        id: 1,
        name: 'life-1',
        image:
          'https://ogre.natalie.mu/media/news/comic/2018/0420/cityhunter1.jpg?imwidth=750',
      },
      { id: 2, name: 'life-1', image: 'https://coamix.net/data/c720109_m.jpg' },
      {
        id: 3,
        name: 'life-1',
        image:
          'http://bkmkn.s3-website-ap-northeast-1.amazonaws.com/9784063845792/9784063845792_w.jpg',
      },
    ];
  }
}
