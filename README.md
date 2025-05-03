# Modern Auth

![Modern Auth Banner](public/images/auth-hero-bg.webp)

**Modern Auth** is a sophisticated, production-ready authentication system built with Next.js 15, MongoDB, and TypeScript. It offers a complete authentication solution with a beautiful UI, dark/light theme support, and modern component architecture. Our goal is to create a COMMERCIAL GRADE Next.js template for all your authentication needs.

[![TypeScript](https://img.shields.io/badge/TypeScript-5.8.3-blue.svg)](https://www.typescriptlang.org/)
[![Next.js](https://img.shields.io/badge/Next.js-15.3.1-black.svg)](https://nextjs.org/)
[![MongoDB](https://img.shields.io/badge/MongoDB-8.x-green.svg)](https://www.mongodb.com/)
[![Tailwind](https://img.shields.io/badge/Tailwind-4.0-38bdf8.svg)](https://tailwindcss.com/)
[![License](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## 🔗 Demo

Check out the live demo: [Modern Auth Demo](https://modern-auth-five.vercel.app/)

## ✨ Features

> **Demo Mode**: Enable demo mode by setting `DEMO=true` in your environment variables to disable registration and profile editing. Perfect for showcasing your app without worrying about database modifications.

### 🔐 Authentication & Security
- **Secure Authentication** with JWT and NextAuth.js
- **Passwordless Login** options
- **Social Authentication** support (GitHub, Google, Instagram)
- **Two-Factor Authentication** (2FA)
- **Password Strength Validation**
- **Secure Password Reset** flow
- **Account Verification** via email
- **CSRF Protection** and advanced security measures
- **Rate Limiting** to prevent brute force attacks

### 👤 User Management
- **User Profiles** with customizable fields
- **Role-Based Authorization**
- **Email Verification**
- **Account Management** (update profile, change password)
- **Session Management** with device tracking
- **GDPR-Compliant** user data handling
- **Account Deletion** capabilities
- **Team Management** with custom permissions
- **User Invitations** system

### 🎨 UI/UX & Theming
- **Fully Responsive Design** for all devices and screen sizes
- **Dark/Light/System Theme** with seamless transitions
- **Theming System** with CSS variables
- **Accessible Components** following WAI-ARIA guidelines
- **Animated Transitions** for smooth user experience
- **Theme Persistence** via localStorage
- **Mobile-First** responsive design
- **RTL Support** for languages like Arabic and Hebrew
- **Custom Navbar Components** for better navigation

### 🛠️ Developer Experience
- **TypeScript** for type safety and better DX
- **Modern Component Architecture** with composition patterns
- **Reusable UI Components** for rapid development
- **SEO Optimization** with Next.js metadata
- **Environment Variable Management**
- **API Routes** with proper error handling
- **Comprehensive Documentation**
- **Automatic Dark Mode** with system preference detection
- **Toast Notifications** for user feedback
- **Localization Support** for multiple languages

## 🚀 Quick Start

### Prerequisites
- Node.js 18.17 or later
- MongoDB Atlas account (free tier available)

### MongoDB Atlas Setup
1. Sign up for a free MongoDB Atlas account at [https://www.mongodb.com/cloud/atlas/register](https://www.mongodb.com/cloud/atlas/register)
2. Create a new project
3. Build a database (select the FREE tier)
4. Create a database user with read/write permissions
5. Configure network access (Add IP address or allow access from anywhere for development)
6. Get your connection string from "Connect" > "Connect your application"
7. Replace `<password>` in the connection string with your database user's password

### Installation

1. Clone the repository:
```bash
git clone https://github.com/your-username/modern-auth.git
cd modern-auth
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
Create a `.env.local` file in the root directory (you can copy from `.env.example`):
```
# MongoDB Connection
MONGODB_URI=mongodb+srv://<username>:<password>@<cluster>.mongodb.net/<database>?retryWrites=true&w=majority

# NextAuth.js
NEXTAUTH_SECRET=your_secure_secret_key
NEXTAUTH_URL=http://localhost:3000

# Email (optional)
EMAIL_SERVER=smtp://user:pass@host:port
EMAIL_FROM=noreply@yourdomain.com

# OAuth Providers (optional)
GITHUB_ID=your_github_client_id
GITHUB_SECRET=your_github_client_secret
GOOGLE_ID=your_google_client_id
GOOGLE_SECRET=your_google_client_secret
INSTAGRAM_CLIENT_ID=your_instagram_client_id
INSTAGRAM_CLIENT_SECRET=your_instagram_client_secret

# Demo Mode (optional)
# Set to "true" to activate demo mode which disables registration and profile editing
DEMO=false
```

4. Run the development server:
```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000) to see the application.

## 📂 Project Structure

```
modern-auth/
├─ app/                   # Next.js 15 App Router
│  ├─ (marketing)/        # Marketing pages
│  ├─ api/                # API routes including auth
│  ├─ auth/               # Authentication pages
│  ├─ dashboard/          # User dashboard
│  ├─ profile/            # User profile
│  ├─ security/           # Security settings
│  ├─ social-login/       # Social login options
│  ├─ user-management/    # User and team management
│  ├─ custom-components/  # Demo of custom components
│  ├─ localization/       # Localization examples
│  ├─ rtl-support/        # RTL layout support
│  ├─ toast-demo/         # Toast notification demos
├─ components/            # UI components
│  ├─ auth/               # Authentication components
│  ├─ common/             # Shared UI components
│  ├─ dashboard/          # Dashboard components
│  ├─ sections/           # Layout sections
│  ├─ ui/                 # UI primitives
├─ context/               # React Context providers
│  ├─ app/                # App-wide providers
│  ├─ auth/               # Auth context
│  ├─ theme/              # Theme context
│  ├─ demo/               # Demo mode context
├─ lib/                   # Utilities and helpers
│  ├─ auth/               # Auth utilities
│  ├─ db/                 # Database connection & models
│  ├─ utils/              # General utilities
├─ public/                # Static assets
├─ types/                 # TypeScript types
```

## 🔑 Key Components

### 🧩 UI Components
- **Button** - Versatile button component with multiple variants, sizes, and loading states
- **Input** - Form input with validation and theming support
- **PasswordInput** - Secure password input with strength indicator
- **ThemedLink** - Theme-aware navigation component
- **Navbar** - Responsive navigation with dropdown support
- **ThemedDropdown** - Themeable dropdown menu
- **ThemedPreElement** - Theme-aware code block for documentation
- **Toast** - Customizable toast notifications
- **Tabs** - Accessible tabbed interface
- **Icon** - Unified icon system

### 🌐 Context Providers
- **ThemeProvider** - Manages theme state with system preference detection
- **AuthProvider** - Handles authentication state and user sessions
- **DemoProvider** - Provides demo mode features with toast notifications
- **AppProvider** - Combines all providers for easy setup

## 💻 Technologies Used

- **[Next.js 15](https://nextjs.org/)** - React framework with App Router
- **[NextAuth.js](https://next-auth.js.org/)** - Complete authentication solution
- **[MongoDB](https://www.mongodb.com/)** - Flexible and scalable database
- **[Mongoose](https://mongoosejs.com/)** - Elegant MongoDB object modeling
- **[Tailwind CSS 4](https://tailwindcss.com/)** - Utility-first CSS framework
- **[TypeScript](https://www.typescriptlang.org/)** - Type-safe JavaScript
- **[Zod](https://zod.dev/)** - TypeScript-first schema validation
- **[React Hook Form](https://react-hook-form.com/)** - Performant form handling
- **[Lucide React](https://lucide.dev/)** - Beautiful icon set
- **[Radix UI](https://www.radix-ui.com/)** - Accessible UI primitives

## 🎭 Theme System

Modern Auth implements a sophisticated theming system with:

- **CSS Variables** for consistent styling across components
- **Dark/Light Mode Toggle** in the navigation bar
- **System Preference Detection** for automatic theme selection
- **Persistent Preferences** stored in localStorage
- **Hydration-Safe Implementation** to prevent flashes of incorrect theme
- **Seamless Transitions** between themes

The theme system is designed to be easily customizable for your brand colors and style preferences.

## 🛡️ Security Features

- **Secure Password Hashing** using bcrypt with appropriate salt rounds
- **JWT Authentication** with secure HTTP-only cookies
- **CSRF Protection** through anti-CSRF tokens
- **XSS Prevention** with content security policies
- **Rate Limiting** on authentication endpoints
- **Input Validation** both client-side and server-side
- **Account Lockout** after multiple failed attempts
- **Secure Password Reset** with time-limited tokens
- **Security Audit Tools** for monitoring

## 📚 Documentation

### Production Checklist

Before deploying to production, make sure to check the following:

#### Pre-Deployment Checks
- Run linting: `npm run lint:fix`
- Run type checking: `npm run type-check` 
- Test build: `npm run build`
- Verify all dependencies are up-to-date and secure: `npm audit`
- Configure environment variables (See Environment Variables section)
- Configure MongoDB Atlas database

#### Security Checks
- Ensure security headers are configured in middleware.ts
- Verify CORS policies are properly set up
- Configure Content Security Policy (CSP)
- Implement rate limiting for sensitive endpoints
- Protect all API endpoints appropriately
- Use secure JWT secrets (not hardcoded)
- Ensure password handling is secure (bcrypt)
- Use TLS/SSL for database connections

#### Authentication System
- Test user registration flow
- Verify login functionality
- Test password reset functionality
- Configure and test email verification
- Ensure session management is secure

#### Deployment Process
1. Configure environment variables on Vercel
   - `MONGODB_URI` = Your MongoDB Atlas connection string
   - `NEXTAUTH_SECRET` = Securely generated random string (e.g., using `openssl rand -base64 32`)
   - `NEXTAUTH_URL` = Your production URL

2. Deploy to Vercel using GitHub integration or CLI
   ```bash
   vercel --prod
   ```

3. Verify deployment by testing all core functionality

#### Post-Deployment
- Set up monitoring and error tracking
- Implement analytics
- Create a backup strategy for your database
- Set up automated testing for CI/CD

### TypeScript Implementation

The codebase uses TypeScript throughout with the following best practices:

- Strong typing for all components and functions
- Type-safe form handling with React Hook Form and Zod
- Proper interfaces for all component props
- Specialized form components with clear type boundaries
- Type-safe API response handling
- Elimination of type casting and "any" types

### Component Architecture

- Clean separation between UI and logic
- Reusable components with proper TypeScript interfaces
- Theme-aware components that adapt to light/dark modes
- Accessible components following WAI-ARIA guidelines

## 🗺️ Development Roadmap

### Completed Features ✅
- [x] Initial release with core authentication ⭐
- [x] Dark/light theme support ⭐
- [x] Advanced Navbar component with dropdowns ⭐
- [x] ComingSoon page template ⭐
- [x] Error pages (404, 500, etc.) ⭐
- [x] Custom UI components library ⭐
- [x] Demo mode for showcasing ⭐
- [x] Basic permission system ⭐
- [x] Toast notifications ⭐
- [x] Theming system with CSS variables ⭐
- [x] Responsive design for all devices ⭐
- [x] API routes with proper error handling ⭐
- [x] Password reset flow ⭐
- [x] User profile management ⭐

### Coming Soon 🚀
- [ ] User Invitations (100 ⭐ required)
- [ ] Google Sign In (120 ⭐ required)
- [ ] GitHub Sign In (140 ⭐ required)
- [ ] Multi-Factor Authentication (MFA) (150 ⭐ required)
- [ ] RTL Support (150 ⭐ required)
- [ ] Facebook/Instagram Sign In (160 ⭐ required)
- [ ] Create Team (160 ⭐ required)
- [ ] User Roles Management (170 ⭐ required)
- [ ] Teams Management (180 ⭐ required)
- [ ] Internationalization (Multi-language) (180 ⭐ required)
- [ ] Team Permissions (190 ⭐ required)
- [ ] Permissions Management (200 ⭐ required)
- [ ] Social Authentication Integration (200 ⭐ required)
- [ ] Security Audit Log (250 ⭐ required)
- [ ] Advanced Analytics Dashboard (300 ⭐ required)

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 👨‍💻 Author

Created with ❤️ by [George Khananaev](https://github.com/georgekhananaev)

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🚀 Deployment

### Deploying to Vercel (Free)

Modern Auth can be easily deployed to Vercel with a few simple steps:

1. Create a [Vercel account](https://vercel.com/signup) for free
2. Install the Vercel CLI (optional):
   ```bash
   npm install -g vercel
   ```
3. Deploy directly from the repository:
   - Fork this repository to your GitHub account
   - Connect your GitHub account to Vercel
   - Import your repository in the Vercel dashboard
   - Add your environment variables in the Vercel project settings
   - Deploy with a single click

   OR

4. Deploy from your local machine:
   ```bash
   vercel
   ```

5. Your application will be deployed with a unique URL and can be assigned a custom domain in your Vercel dashboard.

**Note:** Make sure to configure the following environment variables in your Vercel project:
- `MONGODB_URI` - Your MongoDB Atlas connection string
- `NEXTAUTH_SECRET` - A secure random string for JWT signing
- `NEXTAUTH_URL` - Your deployment URL (Vercel will set this automatically for production)
- `DEMO` - Set to "true" if you want to enable demo mode (disables registration and profile editing)
- Any other environment variables your application needs

### Production Considerations

- For production deployments, make sure to set `NEXTAUTH_URL` to your production domain
- Configure your MongoDB Atlas database's Network Access to allow connections from your Vercel deployment IPs
- Consider adding authentication providers like Google or GitHub for enhanced user experience

## 🙏 Acknowledgements

- [Next.js team](https://nextjs.org/) for the amazing framework
- [Vercel](https://vercel.com/) for the free hosting platform
- [MongoDB Atlas](https://www.mongodb.com/atlas/database) for the free database tier
- All the open-source contributors whose libraries have made this project possible