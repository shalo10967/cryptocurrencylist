CRYPTO CURRENCY APP
==========================================

Author: Juan Gabriel Martinez Bustamante

DESCRIPTION
------------------------------------------
React Native mobile application for tracking cryptocurrency prices and information in real-time.

Features:
- Track real-time cryptocurrency prices 
- Search cryptocurrencies
- View detailed crypto information
- Monitor price changes and market cap
- USD price conversion

TECHNICAL DETAILS
------------------------------------------
Technologies:
- React Native: 0.77.0
- TypeScript
- React Navigation 
- CoinLore API

Requirements:
- Node.js (version >=14)
- npm or yarn
- React Native CLI
- Xcode (iOS)
- Android Studio (Android)
- JDK 11

INSTALLATION
------------------------------------------
1. Clone repository:
  git clone [<repository-url>](https://github.com/shalo10967/cryptocurrencylist)

2. Install dependencies:
  cd crypto-currency-app
  npm install

3. iOS Setup:
  cd ios
  pod install
  cd ..

RUNNING THE APP
------------------------------------------
iOS:
1. Start Metro:
  npx react-native start

2. Run iOS:
  npx react-native run-ios

Android:
1. Start Metro:
  npx react-native start

2. Run Android:
  npx react-native run-android

PROJECT STRUCTURE
------------------------------------------
src/
 components/     - Reusable components
 screens/        - Application screens
 services/       - API services  
 utils/          - Utility functions
 types/          - TypeScript definitions

API INFORMATION
------------------------------------------
CoinLore API
Base URL: https://api.coinlore.net/api

Endpoints:
- GET /tickers - Cryptocurrency list
- GET /ticker - Single cryptocurrency details

==========================================