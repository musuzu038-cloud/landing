import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version',
};

interface ContactFormData {
  name: string;
  phone: string;
  message?: string;
}

serve(async (req) => {
  // Handle CORS preflight
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const TELEGRAM_BOT_TOKEN = Deno.env.get('TELEGRAM_BOT_TOKEN');
    const TELEGRAM_CHAT_ID = Deno.env.get('TELEGRAM_CHAT_ID');

    if (!TELEGRAM_BOT_TOKEN) {
      throw new Error('TELEGRAM_BOT_TOKEN is not configured');
    }

    if (!TELEGRAM_CHAT_ID) {
      throw new Error('TELEGRAM_CHAT_ID is not configured');
    }

    const { name, phone, message }: ContactFormData = await req.json();

    // Validate inputs
    if (!name || typeof name !== 'string' || name.trim().length === 0) {
      throw new Error('Name is required');
    }
    if (!phone || typeof phone !== 'string' || phone.trim().length === 0) {
      throw new Error('Phone is required');
    }
    if (name.length > 100 || phone.length > 50 || (message && message.length > 1000)) {
      throw new Error('Input too long');
    }

    const text = `📋 *Новая заявка с сайта*

👤 *Имя:* ${name.trim()}
📞 *Телефон:* ${phone.trim()}
${message ? `💬 *Сообщение:* ${message.trim()}` : ''}

📅 *Дата:* ${new Date().toLocaleString('ru-RU', { timeZone: 'Europe/Moscow' })}`;

    const telegramUrl = `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`;

    const response = await fetch(telegramUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        chat_id: TELEGRAM_CHAT_ID,
        text: text,
        parse_mode: 'Markdown',
      }),
    });

    const result = await response.json();

    if (!response.ok) {
      console.error('Telegram API error:', result);
      throw new Error('Failed to send message to Telegram');
    }

    return new Response(
      JSON.stringify({ success: true }),
      { 
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 200 
      }
    );
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : 'Unknown error';
    console.error('Error:', errorMessage);
    return new Response(
      JSON.stringify({ error: errorMessage }),
      {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 400 
      }
    );
  }
});
