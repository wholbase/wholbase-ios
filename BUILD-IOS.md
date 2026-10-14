# Build Wholbase for iOS

Requires a Mac with Xcode 16+, Node 20+, pnpm, and CocoaPods. An Apple Developer account is needed to run on a real device or ship to TestFlight.

## 1. Install dependencies
The Podfile points at `node_modules/.pnpm/...`, so install with **pnpm** (not npm/yarn):

    pnpm install
    cd ios/App && pod install

## 2. Open in Xcode
Open `ios/App/App.xcworkspace` (the workspace, not the .xcodeproj).

## 3. Signing
App target > Signing & Capabilities > pick your Team.
Bundle ID is `com.wholbase.operations` (same as Android). Change it if it's taken on your account.

## 4. Run
Pick a device or simulator and press Run. Version 1.0.0, build 29.

## Before shipping to the App Store
- Background location: the `location` background mode and the "Always" usage string are already added. In App Store review notes, explain why shift-time background tracking is needed.
- Push notifications: no iOS push plugin is installed (Android uses Firebase Messaging). To enable push on iOS, add the Push Notifications capability in Xcode and a push plugin, then upload an APNs key.
- Re-sync web changes: after rebuilding the web app into `dist`, run `pnpm exec cap sync ios`.
- Home-screen name was shortened to "Wholbase" in Info.plist (CFBundleDisplayName). The long marketing name still belongs in App Store Connect.

## Free cloud build (no Mac) - GitHub Actions
1. Create a **public** GitHub repo (macOS builds are free and unlimited on public repos; private repos use a small free monthly quota).
2. Upload everything from this zip to the repo root (keep the `.github` folder).
3. Open the **Actions** tab > "Build iOS app" > Run workflow (it also runs on every push).
4. When it goes green, download `Wholbase-simulator-app` from the run page.

That artifact is a **simulator** build: it proves the project compiles, but it cannot be installed on a real iPhone. A real-device `.ipa` needs an Apple Developer account ($99/yr) for signing.
