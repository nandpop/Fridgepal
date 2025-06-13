# FridgePal

![FridgePal Logo](/public/fridgapp-logo-1.png)

FridgePal is a comprehensive solution for efficient fridge management, helping users track inventory, manage shopping lists, and monitor food consumption. The project consists of both a web application and a mobile app (Expo-based), providing a seamless experience across different platforms.

## 🌟 Features

- **Inventory Management**: Track all items in your fridge with expiration dates
- **Shopping List**: Create and manage your to-buy list
- **Family Sharing**: Share your fridge inventory with family members
- **Usage Statistics**: Monitor monthly spending and consumption patterns
- **Multi-platform**: Available as both web application and mobile app
- **User Authentication**: Secure sign-in functionality
- **Checkout Process**: Integrated checkout with multiple delivery service options (Zepto, Blinkit)
- **Activity Tracking**: Monitor inventory changes and shopping activities

## 🏗️ Project Structure

### Web Application (`/src`)

- `src/components/ui/` – Reusable UI components (Button, Card, Input, etc.)
- `src/lib/` – Shared utilities and helper functions
- `src/screens/` – Main application screens:
  - `Homepage/` – Dashboard with statistics and overview
  - `Inventory/` – Fridge inventory management
  - `ToBuy/` – Shopping list management
  - `Activity/` – Activity tracking and notifications
  - `Profile/` – User profile management
  - `SignIn/` – User authentication
  - `Checkout/` – Checkout process for shopping

### Mobile Application (`/FridgePalExpo`)

- `app/` – Main application screens using Expo Router
- `components/` – Reusable UI components
- `assets/` – Images, fonts, and other static assets
- `constants/` – Application constants and theme settings
- `hooks/` – Custom React hooks

## 🚀 Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn
- For mobile: Expo CLI

### Web Application Setup

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start the development server:
   ```bash
   npm run dev
   ```

3. Open your browser and navigate to `http://localhost:5173` (or the port shown in your terminal)

### Mobile Application Setup

1. Navigate to the Expo directory:
   ```bash
   cd FridgePalExpo
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the Expo development server:
   ```bash
   npx start
   ```

4. Use the Expo Go app on your device to scan the QR code, or run on an emulator/simulator:
   ```bash
   # For Android
   npm run android
   
   # For iOS
   npm run ios
   
   # For web
   npm run web
   ```

## 💻 Technology Stack

### Web Application

- **Framework**: React 18
- **Build Tool**: Vite
- **UI Components**: Shadcn UI with Radix UI primitives
- **Styling**: Tailwind CSS
- **Routing**: React Router DOM

### Mobile Application

- **Framework**: React Native with Expo
- **Routing**: Expo Router
- **Navigation**: React Navigation
- **UI Components**: Expo components and custom UI

## 📱 Application Screens

### Web Application

- **Sign In**: User authentication screen
- **Homepage**: Dashboard with inventory statistics, family members, monthly spending chart, and items list
- **Inventory**: Detailed view of fridge inventory
- **To Buy**: Shopping list management
- **Activity**: Activity tracking and notifications
- **Profile**: User profile management
- **Checkout**: Checkout process for shopping

### Mobile Application

- **Home**: Main dashboard
- **Explore**: Explore features and functionality

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 📞 Contact

For any questions or suggestions, please open an issue in the repository.

---

*FridgePal - Your smart fridge companion for efficient food management!*
