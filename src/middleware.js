import { NextResponse } from 'next/server'
 
export function middleware(request) {
 
  const url = request.nextUrl.clone();
  const islogin = request.cookies.get('logged');
  if ((!islogin)) {
    if (request.nextUrl.pathname.startsWith('/dashboard')) {
      return NextResponse.rewrite(new URL('/', request.url))
    }
  }
  else{
    if(url.pathname === '/'){
      url.pathname == '/dashboard';
      return NextResponse.redirect(url)
    }
  }
  
  if (request.nextUrl.pathname.startsWith('/login')) {
    return NextResponse.rewrite(new URL('/', request.url))
  }
}   