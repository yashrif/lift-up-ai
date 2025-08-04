<div align="center">
  <img src="assets/images/logo.png" alt="LiftUP AI Logo" width="auto" height="120" />
</div>

<h1 style="text-align: center;">LiftUP AI</h1>

<p style="text-align: center; font-weight: medium;">A React Native application demonstrating comprehensive accessibility features with real-time UI adaptations.</p>

---

## 🎯 Project Overview

LiftUP AI is a mobile app that prioritizes accessibility through a comprehensive accessibility menu system. Users can customize their viewing experience with real-time text adjustments, layout modifications, and persistent settings that enhance usability for diverse needs.

---

## 🏗️ My Approach

### **1. Architecture & Code Organization**

**Component-Based Architecture:**

- **Custom Hooks**: Created `useAccessibilitySettings` for centralized state management
- **Utility Functions**: Developed `accessibilityUtils.ts` for reusable style calculations
- **Type Safety**: Comprehensive TypeScript definitions in `types/accessibility.ts`
- **Constants**: Centralized configuration in `constants/accessibility.ts`

**File Structure:**

```
app/                    # Expo Router screens
components/             # Reusable UI components
├── AccessibilityDrawer.tsx  # Modal with accessibility options
├── WelcomeScreen.tsx       # Main screen implementation
└── LoadingSpinner.tsx      # Loading state component
hooks/                  # Custom React hooks
├── useAccessibilitySettings.ts  # Accessibility state management
└── useColorScheme.ts           # Theme management
utils/                  # Utility functions
└── accessibilityUtils.ts      # Style calculation helpers
types/                  # TypeScript definitions
constants/             # App constants and configuration
```

### **2. Accessibility Implementation Strategy**

**Real-Time Style Application:**

- Dynamic style calculation using `applyAccessibilityStyles` utility
- Immediate UI updates without re-renders through optimized state management
- Flexible alignment system supporting both text and layout alignment

**Comprehensive Feature Set:**

- **Text Size**: 1.2x scaling for improved readability
- **Letter Spacing**: 5 levels (tight to extra-loose)
- **Line Height**: 5 levels (tight to widest)
- **Text Alignment**: Left, center, right with layout-aware positioning
- **Future-Ready**: Placeholder options for contrast, animations, dyslexia support

**State Management Philosophy:**

- Custom hook pattern for clean separation of concerns
- AsyncStorage integration for persistent user preferences
- Error handling with graceful fallbacks to defaults
- Loading states for better user experience

### **3. Technical Decisions**

**React Native & Expo Choice:**

- Leveraged Expo for rapid development and cross-platform compatibility
- Used Expo Router for file-based navigation
- Integrated expo-blur for modern UI effects

**Performance Optimizations:**

- `useMemo` for expensive style calculations
- `useCallback` for event handlers to prevent unnecessary re-renders
- Efficient state updates using functional updates

**UI/UX Considerations:**

- Modal-based accessibility menu for non-intrusive access
- Visual feedback with active states and icons
- Smooth animations and transitions
- Safe area handling for modern devices

---

## 🔧 Assumptions Made

### **1. Platform & Environment Assumptions**

- **Target Platforms**: iOS, Android, and Web (Expo universal app)
- **React Native Version**: 0.79.5+ with new architecture enabled
- **Development Environment**: Node.js 18+, Expo CLI, and mobile development tools

### **2. User Experience Assumptions**

- **Primary Use Case**: Educational/learning app context
- **User Needs**: Focus on text-heavy content requiring accessibility adjustments
- **Interaction Patterns**: Touch-first interface with modal-based settings
- **Persistence**: Users want settings to persist across app sessions

### **3. Accessibility Requirements Assumptions**

- **Text Accessibility**: Priority on font size, spacing, and alignment over color/contrast
- **Incremental Changes**: Users prefer cycling through options rather than sliders
- **Visual Feedback**: Clear indication of active accessibility settings
- **Reset Functionality**: Easy way to return to default settings

### **4. Technical Implementation Assumptions**

- **State Management**: Local state with AsyncStorage sufficient for accessibility settings
- **Performance**: Real-time style updates are acceptable for this use case
- **Future Extensibility**: Code structure should support additional accessibility features
- **TypeScript**: Full type safety required for maintainability

### **5. Design & Content Assumptions**

- **Color Scheme**: Light theme as primary (dark mode prepared but not implemented)
- **Content**: Static welcome screen content with dynamic styling
- **Icons**: Standard icon sets (Ionicons, Feather, MaterialCommunityIcons) for accessibility options
- **Gradients**: Aesthetic choice for modern app appearance

---

## 🚀 How to Run the Project

### **Prerequisites**

Ensure you have the following installed:

- **Node.js** (18.x or higher)
- **Yarn** (recommended package manager)
- **Expo CLI** (recommended: `yarn global add @expo/cli`)

For mobile development:

- **iOS**: Xcode 14+ (macOS only)
- **Android**: Android Studio with Android SDK 33+

### **Installation Steps**

1. **Clone the repository**

   ```bash
   git clone https://github.com/yashrif/lift-up-ai.git
   cd lift-up-ai
   ```

2. **Install dependencies**

   ```bash
   yarn install
   ```

3. **Start the development server**
   ```bash
   yarn start
   # or
   npx expo start
   ```

### **Running on Different Platforms**

**📱 Mobile Testing:**

```bash
# iOS Simulator (macOS only)
yarn ios
# or press 'i' in the terminal after starting the dev server

# Android Emulator
yarn android
# or press 'a' in the terminal after starting the dev server

# Physical Device (recommended for accessibility testing)
# Scan the QR code with Expo Go app or camera
```

**🌐 Web Testing:**

```bash
yarn web
# or press 'w' in the terminal after starting the dev server
```

### **Development Commands**

```bash
# Start development server
yarn start

# Run on specific platforms
yarn ios         # iOS simulator
yarn android     # Android emulator
yarn web         # Web browser

# Code quality
yarn lint        # ESLint checking

# Reset project (if needed)
yarn reset-project
```

### **Testing the Accessibility Features**

1. **Launch the app** on your preferred platform
2. **Tap the "Accessibility" button** in the top-left corner
3. **Explore the accessibility options:**
   - Toggle "Bigger Text" to see font size changes
   - Cycle through "Text Spacing" options
   - Try different "Text Align" settings
   - Adjust "Line Height" for readability
4. **Test persistence** by closing and reopening the app
5. **Use "Reset All"** to return to defaults

### **Project Structure Navigation**

- **Main Screen**: `app/(start)/index.tsx`
- **Accessibility Features**: `components/AccessibilityDrawer.tsx`
- **Settings Logic**: `hooks/useAccessibilitySettings.ts`
- **Style Utilities**: `utils/accessibilityUtils.ts`
- **Type Definitions**: `types/accessibility.ts`

---

## 🎨 Features Implemented

✅ **Core Requirements:**

- Accessibility button with modal drawer
- Real-time text style updates
- Text alignment (left, center, right)
- Line height adjustments (5 levels)
- Letter spacing controls (5 levels)

✅ **Bonus Features:**

- Persistent settings with AsyncStorage
- Loading states and error handling
- Smooth animations and transitions
- Text size scaling
- Reset all functionality
- TypeScript for type safety

✅ **Additional Enhancements:**

- Cross-platform compatibility (iOS, Android, Web)
- Modern UI with blur effects
- Proper safe area handling
- Performance optimizations
- Extensible architecture for future features

---

## 🔧 Tech Stack

- **Framework**: React Native 0.79.5
- **Development Platform**: Expo SDK 53
- **Language**: TypeScript
- **Navigation**: Expo Router (file-based)
- **Storage**: AsyncStorage for persistence
- **Styling**: StyleSheet with dynamic style application
- **Icons**: Expo Vector Icons (Ionicons, Feather, MaterialCommunityIcons)
- **Animations**: React Native Animated API
- **Effects**: Expo Blur for modern UI

---

## 📝 Notes

- Settings persist across app restarts using AsyncStorage
- All accessibility changes apply in real-time without page refresh
- Code is structured for easy extension with additional accessibility features
- Fully typed with TypeScript for enhanced developer experience
- Cross-platform compatible (tested on iOS, Android, and Web)
