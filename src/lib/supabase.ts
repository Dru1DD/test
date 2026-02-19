import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  console.warn('Supabase credentials not configured. Whitelist data will not be saved.');
}

export const supabase = supabaseUrl && supabaseAnonKey ? createClient(supabaseUrl, supabaseAnonKey) : null;

export interface WhitelistEntry {
  wallet_address: string;
  email?: string;
}

export type SaveResult = 'success' | 'duplicate' | 'error';

export async function saveToWhitelist(entry: WhitelistEntry): Promise<SaveResult> {
  if (!supabase) {
    console.warn('Supabase not configured, skipping save');
    return 'error';
  }

  console.log('Saving to whitelist:', entry.wallet_address);

  try {
    const { data, error } = await supabase.from('whitelist').insert({
      wallet_address: entry.wallet_address,
      email: entry.email || null,
    });

    if (error) {
      // If duplicate wallet, return duplicate
      if (error.code === '23505') {
        console.log('Wallet already in whitelist');
        return 'duplicate';
      }
      console.error('Error saving to whitelist:', error.message, error.details, error.hint);
      return 'error';
    }

    console.log('Successfully saved to whitelist:', data);
    return 'success';
  } catch (err) {
    console.error('Error saving to whitelist:', err);
    return 'error';
  }
}
