import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const { text } = await request.json();

    if (!text) {
      return NextResponse.json(
        { error: 'Text is required' },
        { status: 400 }
      );
    }

    const apiKey = process.env.GOOGLE_CLOUD_API_KEY;
    
    if (!apiKey) {
      return NextResponse.json(
        { error: 'Google Cloud API key not configured' },
        { status: 500 }
      );
    }

    const response = await fetch(
      `https://texttospeech.googleapis.com/v1/text:synthesize?key=${apiKey}`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          input: { text },
          voice: { languageCode: 'ja-JP', name: 'ja-JP-Neural2-B' },
          audioConfig: { audioEncoding: 'MP3' },
        }),
      }
    );

    if (!response.ok) {
      const errorData = await response.json();
      console.error('Google TTS API Error:', errorData);
      return NextResponse.json(
        { error: 'Failed to synthesize speech' },
        { status: response.status }
      );
    }

    const data = await response.json();
    return NextResponse.json({ audioContent: data.audioContent });
  } catch (error) {
    console.error('TTS Route Error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

