const onboarding_screens = [
  {
    id: 1,
    backgroundImage: require('../assets/images/background_01.png'),
    bannerImage: require('../assets/images/favourite_food.png'),
    title: 'Choose a Favourite Food',
    description:
      'When you oder Eat Steet, we’ll hook you up with exclusive coupon, specials and rewards',
  },
  {
    id: 2,
    backgroundImage: require('../assets/images/background_02.png'),
    bannerImage: require('../assets/images/hot_delivery.png'),
    title: 'Hot Delivery to Home',
    description:
      'We make food ordering fasr, simple and free-no matter if you order online or cash',
  },
  {
    id: 3,
    backgroundImage: require('../assets/images/background_01.png'),
    bannerImage: require('../assets/images/great_food.png'),
    title: 'Receive the Great Food',
    description:
      'You’ll receive the great food within a hour. And get free delivery credits for every order.',
  },
];

const keywords = {
  next: 'Next',
  skip: 'Skip',
  started: 'Let’s Get Started',
  LetsSignIn: 'Let’s Sign You In',
  Welcome: 'Welcome back, you’ve been missed',
  invalid: 'Invalid',
  error_msg: 'must be 8 characters',
  Save: 'Save Me',
  Password: 'Forgot Password?',
  SignIn: 'Sign In',
  Account: 'Don’t have an account?',
  SignUp: 'Sign Up',
  Facebook: 'Continue With Facebook',
  Google: 'Continue With Google',
  Getting_Started: 'Getting Started',
  Create: 'Create an account to continue!',
  Already_Account: 'Already have an account?',
  OTP: 'OTP Authentication',
  Authentication:
    'An authentication code has been sent to abhishek.garg@successive.tech',
  Code: 'Didn’t receive code?',
  Resend: 'Resend (59s)',
  Continue: 'Continue',
  By_Signing_up: 'By signing up, you agree to our.',
  Term: 'Terms and Conditions',
  Password_Recovery: 'Password Recovery',
  Please: 'Please enter your email address to recover your password',
  Send_Email: 'Send Email',
  Home: 'HOME',
  Delivery_To: 'DELIVERY TO',
  Address: 'E-Block Budh Vihar, Noida',
  Popular: 'Popular Near You',
  Show_All: 'Show All',
  Calories: 'Calories',
  Recommended: 'Recommended',
  Filter: 'Filter You Search',
  Distance: 'Distance',
  Delivery_Time: 'Delivery Time',
  Pricing_Range: 'Pricing Range',
  Ratings: 'Ratings',
  Tags: 'Tags',
  Apply_Filters: 'Apply Filters',
  Details: 'DETAILS',
  Hamburger: 'Hamburger',
  rating: '4.5',
  min: '30 Mins',
  Free_Shipping: 'Free shipping',
  Sizes: 'Sizes:',
  name: 'Alex',
  KM: '1.2 KM away from you',
  Buy_Now: 'Buy Now',
  My_Cart: 'MY CART',
  Place: 'Place your Order',
  SubTotal: 'Subotal',
  Shipping_fee: 'Shipping fee',
  total: 'Total',
  My_Cards: 'MY CARDS',
  Add_new_card: 'Add new card',
  Add: 'Add',
  Add_New_Card: 'ADD NEW CARD',
  card_No: '1234123412341234',
  Date: '10/25',
  Card_Number: 'Card Number',
  CardHolder_Name: 'CardHolder Name',
  Expiry_Date: 'Expiry Date',
  CVV: 'CVV',
  Remember: 'Remember this card details',
  Add_Card: 'Add Card',
  Checkout: 'CHECKOUT',
  Delivery_Address: 'Delivery Address',
  Add_Coupon: 'Add Coupon',
  Congratulations: 'Congratulations!',
  Payment_was: 'Payment was successfully made!',
  Done: 'Done',
  View_your_profile: 'View your profile',
  Delivery_Status: 'DELIVERY STATUS',
  Estimated: 'Estimated Delivery',
  Delivery_Date: '12 Sept 2020 / 12:30PM',
  Track_Order: 'Track Order',
  ID: 'NY021SNI',
  MyCoupon: 'MY COUPON',
  Available: 'Available',
  Used: 'Used',
  Notification: 'NOTIFICATION',
  Settings: 'SETTINGS',
  CHNAGE_PASSWORD: 'CHANGE PASSWORD',
  Change_Password: 'Change Password',
  MY_ORDERS: 'MY ORDERS',
  History: 'History',
  Upcoming: 'Upcoming',
  Order_Delivered: 'Order Delivered',
  Order_Cancelled: 'Order Cancelled',
  Re_Order: 'Re-Order',
  Rate: 'Rate',
  Cancel: 'Cancel',
  RIDER_REVIEW: 'RIDER REVIEW',
  Delivery_Man: 'Delivery Man',
  Please_rate: 'Please Rate Delivery Service',
  Add_Tips: 'Add Tips',
  Submit_Review: 'Submit Review',
  MY_ACCOUNT: 'MY ACCOUNT',
  Edit: 'Edit',
  Camera: 'Camera',
  Gallery: 'Gallery',
  Abhishek_Garg: 'Hello Alex!',
  Filter_List: 'Filtered List :',
  Reset_Filter: 'Reset Filter',
  NOT_FOUND: 'Not Found',
  Result_FOUND: 'Search Found',
};

const screens = {
  main_layout: 'MainLayout',
  home: 'Home',
  search: 'Search',
  cart: 'Cart',
  favourite: 'Favourite',
  notification: 'Notification',
  my_wallet: 'My Wallet',
};

const bottom_tabs = [
  {
    id: 0,
    label: screens.home,
  },
  {
    id: 1,
    label: screens.search,
  },
  {
    id: 2,
    label: screens.cart,
  },
  {
    id: 3,
    label: screens.favourite,
  },
  {
    id: 4,
    label: screens.notification,
  },
];

const delivery_time = [
  {
    id: 1,
    label: '10 Mins',
  },
  {
    id: 2,
    label: '20 Mins',
  },
  {
    id: 3,
    label: '30 Mins',
  },
];

const ratings = [
  {
    id: 1,
    label: 1,
  },
  {
    id: 2,
    label: 2,
  },
  {
    id: 3,
    label: 3,
  },
  {
    id: 4,
    label: 4,
  },
  {
    id: 5,
    label: 5,
  },
];

const tags = [
  {
    id: 1,
    label: 'Burger',
  },
  {
    id: 2,
    label: 'Fast Food',
  },
  {
    id: 3,
    label: 'Pizza',
  },
  {
    id: 4,
    label: 'Asian',
  },
  {
    id: 5,
    label: 'Dessert',
  },
  {
    id: 6,
    label: 'Breakfast',
  },
  {
    id: 7,
    label: 'Vegetable',
  },
  {
    id: 8,
    label: 'Taccos',
  },
];

const track_order_status = [
  {
    id: 1,
    title: 'Order Confirmed',
    sub_title: 'Your order has been received',
    tick: true,
  },
  {
    id: 2,
    title: 'Order Prepared',
    sub_title: 'Your order has been prepared',
    tick: false,
  },
  {
    id: 3,
    title: 'Delivery in Progress',
    sub_title: 'Hang on! Your food is on the way',
    tick: false,
  },
  {
    id: 4,
    title: 'Delivered',
    sub_title: 'Enjoy your meal!',
    tick: false,
  },
  {
    id: 5,
    title: 'Rate Us',
    sub_title: 'Help us improve our service',
    tick: false,
  },
];

const GOOGLE_MAP_API_KEY = '';

export default {
  onboarding_screens,
  screens,
  bottom_tabs,
  delivery_time,
  ratings,
  tags,
  track_order_status,
  GOOGLE_MAP_API_KEY,
  keywords,
};
