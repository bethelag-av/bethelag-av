import { NextResponse } from 'next/server';

export function GET() {
  return NextResponse.redirect(
    'https://sites.google.com/view/bethel-av-open-house-2023/home'
  );
}
