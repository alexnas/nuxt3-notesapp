import { createClient } from '@supabase/supabase-js';
const supabaseKey = import.meta.env?.VITE_SUPABASE_KEY || '';
const supabaseUrl = import.meta.env?.VITE_SUPABASE_URL || '';

const useSupabase = () => {
  const supabase = createClient(supabaseUrl, supabaseKey);
  return { supabase };
};

export default useSupabase;
