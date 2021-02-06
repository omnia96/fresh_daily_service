import { Controller, Get } from '@nestjs/common';
import {Public} from "../../auth/set-meta-data";

@Controller('home')
export class HomeController {
  @Public()
  @Get()
  home() {
    const defaultImage =
      'https://ogre.natalie.mu/media/news/comic/2018/0420/cityhunter1.jpg?imwidth=750';
    return {
      banner: [
        {
          id: 1,
          name: 'life-1',
          image:
            'https://ogre.natalie.mu/media/news/comic/2018/0420/cityhunter1.jpg?imwidth=750',
        },
        {
          id: 2,
          name: 'life-1',
          image: 'https://coamix.net/data/c720109_m.jpg',
        },
        {
          id: 3,
          name: 'life-1',
          image:
            'http://bkmkn.s3-website-ap-northeast-1.amazonaws.com/9784063845792/9784063845792_w.jpg',
        },
      ],
      category: [
        {
          id: 1,
          name: '今日热销',
          image:
            'https://icons.iconarchive.com/icons/blackvariant/button-ui-requests-12/512/MiPCSuite-icon.png',
        },
        {
          id: 2,
          name: '新鲜水果',
          image:
            'https://icons.iconarchive.com/icons/blackvariant/button-ui-requests-12/512/MiPCSuite-icon.png',
        },
        {
          id: 3,
          name: '安心蔬菜',
          image:
            'https://icons.iconarchive.com/icons/blackvariant/button-ui-requests-12/512/MiPCSuite-icon.png',
        },
        {
          id: 4,
          name: '肉禽蛋奶',
          image:
            'https://icons.iconarchive.com/icons/blackvariant/button-ui-requests-12/512/MiPCSuite-icon.png',
        },
        {
          id: 5,
          name: '海鲜水产',
          image:
            'https://icons.iconarchive.com/icons/blackvariant/button-ui-requests-12/512/MiPCSuite-icon.png',
        },
        {
          id: 6,
          name: '休闲粮油',
          image:
            'https://icons.iconarchive.com/icons/blackvariant/button-ui-requests-12/512/MiPCSuite-icon.png',
        },
        {
          id: 7,
          name: '素食烘焙',
          image:
            'https://icons.iconarchive.com/icons/blackvariant/button-ui-requests-12/512/MiPCSuite-icon.png',
        },
        {
          id: 8,
          name: '酒水饮料',
          image:
            'https://icons.iconarchive.com/icons/blackvariant/button-ui-requests-12/512/MiPCSuite-icon.png',
        },
        {
          id: 9,
          name: '美妆百货',
          image:
            'https://icons.iconarchive.com/icons/blackvariant/button-ui-requests-12/512/MiPCSuite-icon.png',
        },
        {
          id: 10,
          name: '特惠专区',
          image:
            'https://icons.iconarchive.com/icons/blackvariant/button-ui-requests-12/512/MiPCSuite-icon.png',
        },
        {
          id: 11,
          name: '特惠专区',
          image:
            'https://icons.iconarchive.com/icons/blackvariant/button-ui-requests-12/512/MiPCSuite-icon.png',
        },
      ],
      advertesPicture: defaultImage,
      shopInfo: {
        leaderImage:
          'https://ogre.natalie.mu/media/news/comic/2018/0420/cityhunter1.jpg?imwidth=750',
        leaderPhone: '18691791512',
      },
      recommend: [
        { id: 1, mallPrice: '100', price: '80', image: defaultImage },
        { id: 1, mallPrice: '100', price: '80', image: defaultImage },
        { id: 1, mallPrice: '100', price: '80', image: defaultImage },
        { id: 1, mallPrice: '100', price: '80', image: defaultImage },
        { id: 1, mallPrice: '100', price: '80', image: defaultImage },
        { id: 1, mallPrice: '100', price: '80', image: defaultImage },
      ],
    };
  }
}
