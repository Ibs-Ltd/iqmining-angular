export const AppConfig = {
  
  endpoints: {
    login: 'auth/login',
    register: 'auth/register',
    verifyUser: 'auth/verify',
    forgotPassword: 'auth/forgot-password',
    resetPassword: 'auth/reset-password',
    packages: 'packages',
    rootPackages: 'packages/root-packages?contractYear=',
    purchasePackage: 'packages/purchase-package',
    createTransaction: 'transaction/create-transaction',
    myPackages: 'packages/my-packages',
    withdraw: 'withdraw-amount',
    getWithdraw: 'withdraw-amount',
    myProfile: 'auth/me',
    changePassword: 'auth/change-password',
    updateUser: 'users/update-user',
    uploadFile: 'file/upload-file',
    dashboard: 'dashboard',
    hashRate: 'dashboard/total-hash-rate?packageName=',
    adminUsers: 'admin/users',
    adminWithdraw: 'admin/withdraw-amount/complete-withdraw-history',
    adminPurchase: 'admin/purchased-packages',
    updateWithdraw: 'admin/withdraw-amount/update-status',
    createContact: 'customer-support',
    updateContact: 'admin/customer-support',
    getConcerns: 'admin/customer-support'
  },
  hashRates: {
    'SHA-256': 19.31,
    'SHA-256 Pro': 16.73,
    'SHA-256 BCH': 17.25,
    'Ethereum': 0.000068
  }
}