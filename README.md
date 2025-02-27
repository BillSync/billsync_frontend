# Billsync Frontend

# Billsync Frontend

This project is an Angular-based frontend application, built using Angular CLI version 17.2.0.

## 📌 Prerequisites

Before you begin, ensure you have the following software installed:

* **Node.js:** Version 20.8.1 ([Download Node.js](https://nodejs.org/en/download/))
    * Download and install Node.js 20.8.1 from the official website.
    * Verify the installation by running `node -v` (should return v20.8.1) and `npm -v` in your terminal.
    * **Windows:**
        1.  Open System Properties: Press `Win + R`, type `sysdm.cpl`, and press Enter.
        2.  Navigate to the "Advanced" tab and click "Environment Variables."
        3.  Under "System Variables," find and select the "Path" variable, then click "Edit."
        4.  Click "New" and add the following path: `C:\Program Files\nodejs\bin`
        5.  Click "OK" to save the changes.
        6.  Restart your computer for the changes to take effect.
* **Angular CLI:** Version 17.2.0 ([Install Angular CLI](#install-angular-cli))
    * Install globally using `npm install -g @angular/cli@17.2.0`.
    * Verify with `node -v`, `npm -v`, `ts -v` (should return TypeScript 5.3.3), and `ng version`.
* **TypeScript:** Version 5.3.3 (Typically installed with Angular CLI)

### Install Angular CLI

Run `npm install -g @angular/cli@17.2.0` in your terminal.

## 🚀 Development Server

Start a local development server with `ng serve`. Open `http://localhost:4200/` in your browser. The application will reload on source file changes.

## 🏗️ Code Scaffolding

Generate components: `ng generate component component-name`.
See available schematics: `ng generate --help`.

## 🔧 Building the Project

Build for production: `ng build`. Output is in the `dist/` directory.

## ✅ Running Unit Tests

Execute unit tests: `ng test`.

## 🧪 Running End-to-End (E2E) Tests

Run E2E tests: `ng e2e`. (Note: Requires configuring an E2E testing framework.)

## 📌 Git Workflow

* Pull latest changes: `git pull origin main`.
* Push changes: `git add .`, `git commit -m "Updated frontend component"`, `git push origin main`.
