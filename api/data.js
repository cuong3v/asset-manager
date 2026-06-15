const { createClient } = require('@supabase/supabase-js');

const SUPABASE_URL = process.env.SUPABASE_URL;
const SUPABASE_KEY = process.env.SUPABASE_SERVICE_KEY;
const APP_PASSWORD = process.env.APP_PASSWORD || 'Cuong321@';
const ROW_ID = 'main';

const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);

module.exports = async (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, x-app-password');

  if (req.method === 'OPTIONS') return res.status(200).end();

  // Xác thực password
  const pwd = req.headers['x-app-password'];
  if (pwd !== APP_PASSWORD) {
    return res.status(401).json({ error: 'Sai mật khẩu' });
  }

  // GET: đọc dữ liệu
  if (req.method === 'GET') {
    const { data, error } = await supabase
      .from('asset_data')
      .select('payload')
      .eq('id', ROW_ID)
      .single();

    if (error && error.code !== 'PGRST116') {
      return res.status(500).json({ error: error.message });
    }
    return res.status(200).json(data ? data.payload : null);
  }

  // POST: ghi dữ liệu
  if (req.method === 'POST') {
    const payload = req.body;
    const { error } = await supabase
      .from('asset_data')
      .upsert({ id: ROW_ID, payload, updated_at: new Date().toISOString() });

    if (error) return res.status(500).json({ error: error.message });
    return res.status(200).json({ ok: true });
  }

  return res.status(405).json({ error: 'Method not allowed' });
};
