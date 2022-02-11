import icons from './icons';

const myProfile = {
  name: 'ByProgrammers',
  profile_image: require('../assets/images/profile.png'),
  address: 'No. 88, Jln Padungan, Kuching',
};

const categories = [
  {
    id: 1,
    name: 'Fast Food',
    icon: require('../assets/icons/burger.png'),
  },
  {
    id: 2,
    name: 'Fruit Item',
    icon: require('../assets/icons/cherry.png'),
  },
  {
    id: 3,
    name: 'Rice Item',
    icon: require('../assets/icons/rice.png'),
  },
];

const menu = [
  {
    id: 1,
    name: 'Hamburger',
    description: 'Chicken patty hamburger',
    categories: 1,
    price: '$15.99',
    calories: 78,
    isFavourite: true,
    image: require('../assets/images/hamburger.png'),
  },

  {
    id: 2,
    name: 'Hot Tacos',
    description: 'Mexican tortilla & tacos',
    categories: 2,
    price: '$10.99',
    calories: 78,
    isFavourite: false,
    image: require('../assets/images/hot_tacos.png'),
  },

  {
    id: 3,
    name: 'Veg Biryani',
    description: 'A popular rice & Vegetable.',
    categories: 3,
    price: '$10.99',
    calories: 78,
    isFavourite: true,
    image: require('../assets/images/veg_biryani.png'),
  },

  {
    id: 4,
    name: 'Wrap Sandwich',
    description: 'Grilled vegetables sandwich',
    categories: 4,
    price: '$10.99',
    calories: 78,
    isFavourite: true,
    image: require('../assets/images/wrap_sandwich.png'),
  },
];

const hamburger = {
  id: 1,
  name: 'Hamburger',
  description: 'Chicken patty hamburger',
  categories: [1, 2],
  price: '$15.99',
  calories: 78,
  isFavourite: true,
  image: require('../assets/images/hamburger.png'),
};

const hotTacos = {
  id: 2,
  name: 'Hot Tacos',
  description: 'Mexican tortilla & tacos',
  categories: [1, 3],
  price: '$10.99',
  calories: 78,
  isFavourite: false,
  image: require('../assets/images/hot_tacos.png'),
};

const vegBiryani = {
  id: 3,
  name: 'Veg Biryani',
  description:
    'A popular spice and vegetables mixed favoured rice dish which is typically prepared by layering the biryani gravy and basmati rice in flat bottom vessel.',
  categories: [1, 2, 3],
  price: '$10.99',
  calories: 78,
  isFavourite: true,
  image: require('../assets/images/veg_biryani.png'),
};

const wrapSandwich = {
  id: 4,
  name: 'Wrap Sandwich',
  description: 'Grilled vegetables sandwich',
  categories: [1, 2],
  price: '$10.99',
  calories: 78,
  isFavourite: true,
  image: require('../assets/images/wrap_sandwich.png'),
};

const sizes = [
  {
    id: 1,
    label: '12"',
  },
  {
    id: 2,
    label: '14"',
  },
  {
    id: 3,
    label: '16"',
  },
  {
    id: 4,
    label: '18"',
  },
];

const myCart = [
  {
    ...hamburger,
    qty: 1,
  },
  {
    ...hotTacos,
    qty: 1,
  },
  {
    ...vegBiryani,
    qty: 1,
  },
];

const myCards = [
  {
    id: 1,
    name: 'Master Card',
    icon: require('../assets/icons/mastercard.png'),
    card_no: '1234',
  },
  {
    id: 2,
    name: 'Google Pay',
    icon: require('../assets/icons/google.png'),
    card_no: '1234',
  },
];

const allCards = [
  {
    id: 1,
    name: 'Apple Pay',
    icon: require('../assets/icons/apple.png'),
  },
  {
    id: 2,
    name: 'Visa',
    icon: require('../assets/icons/visa.png'),
  },
  {
    id: 3,
    name: 'PayPal',
    icon: require('../assets/icons/paypal.png'),
  },
  {
    id: 4,
    name: 'Google Pay',
    icon: require('../assets/icons/google.png'),
  },
  {
    id: 5,
    name: 'Master Card',
    icon: require('../assets/icons/mastercard.png'),
  },
];

const drawer = [
  {
    name: 'Home',
    navigation: 'Home',
    icon: icons.home,
  },
  {
    name: 'My Wallet',
    navigation: '',
    icon: icons.wallet,
  },
  {
    name: 'Notification',
    navigation: 'Notification',
    icon: icons.notification,
  },
  {
    name: 'Favourite',
    navigation: '',
    icon: icons.favourite,
  },
  {
    name: 'Track Your Order',
    navigation: 'Delivery',
    icon: icons.location,
  },
  {
    name: 'Coupons',
    navigation: 'Coupon',
    icon: icons.coupon,
  },
  {
    name: 'Settings',
    navigation: '',
    icon: icons.setting,
  },
  {
    name: 'Invite a Friend',
    navigation: '',
    icon: icons.profile,
  },
  {
    name: 'Help Center',
    navigation: '',
    icon: icons.help,
  },
  {
    name: 'Logout',
    navigation: '',
    icon: icons.logout,
  },
];

const Notification = [
  {
    icon: icons.notification,
    name: 'Notifications',
    description: 'You will receive daily updates',
  },
  {
    icon: icons.notification,
    name: 'Promotional Notifications',
    description: 'You will receive daily updates',
  },
];

const available_coupon = [
  {
    name: 'Burgur King',
    discount: '20%',
    valid: 'Valid until 01 Jan 2022',
    icon: icons.burgur_king,
  },
  {
    name: 'KFC',
    discount: '10%',
    valid: 'Valid until 01 Jan 2022',
    icon: icons.kfc,
  },
  {
    name: 'Pizza Hut',
    discount: '35%',
    valid: 'Valid until 01 Feb 2022',
    icon: icons.pizza_hut,
  },
  {
    name: 'Starbucks',
    discount: '15%',
    valid: 'Valid until 01 Feb 2022',
    icon: icons.starbucks,
  },
  {
    name: 'Domino’s Pizza',
    discount: '30%',
    valid: 'Valid until 01 Feb 2022',
    icon: icons.dominos,
  },
];

const used_coupon = [
  {
    name: 'Burgur King',
    discount: '20%',
    valid: 'Valid until 01 Jan 2022',
    icon: icons.burgur_king,
  },
  {
    name: 'Starbucks',
    discount: '15%',
    valid: 'Valid until 01 Feb 2022',
    icon: icons.starbucks,
  },
];

const fromLocs = [
  {
    latitude: 1.5347282806345879,
    longitude: 110.35632207358996,
  },
  {
    latitude: 1.556306570595712,
    longitude: 110.35504616746915,
  },
  {
    latitude: 1.5238753474714375,
    longitude: 110.34261833833622,
  },
  {
    latitude: 1.5578068150528928,
    longitude: 110.35482523764315,
  },
  {
    latitude: 1.558050496260768,
    longitude: 110.34743759630511,
  },
  {
    latitude: 1.5573478487252896,
    longitude: 110.35568783282145,
  },
];

export default {
  vegBiryani,
  hamburger,
  myProfile,
  categories,
  menu,
  sizes,
  myCart,
  myCards,
  allCards,
  drawer,
  Notification,
  available_coupon,
  used_coupon,
  fromLocs,
};
