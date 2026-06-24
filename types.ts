export type ScreenId = 'landing' | 'home' | 'send' | 'activity' | 'scan' | 'rewards' | 'profile' | 'contacts' | 'security';

export type TransactionType = 'sent' | 'received' | 'topup' | 'bill';

export interface Transaction {
  id: string;
  type: TransactionType;
  title: string;
  subtitle: string;
  amount: number;
  time: string;
  date: string; // e.g., 'Today', 'Yesterday'
}

export interface Contact {
  id: string;
  name: string;
  phone: string;
  initials: string;
  avatarColor: string;
}

export interface WalletState {
  balance: number;
  isBalanceHidden: boolean;
  transactions: Transaction[];
}
