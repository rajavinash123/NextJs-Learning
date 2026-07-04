// import next from "next";
// import { NextResponse } from "next/server";

// export function middleware(request){
//    console.log("about pages middleware")
//    request.NextResponse.next()
// }

// //spacific routes per run


// export const config={
//     matcher:["/contact"]
// }


import { NextResponse } from "next/server";

//if visite http://localhost:3000 then it automatically redriect /about

export function middleware(request) {
  return NextResponse.redirect(new URL("/about", request.url));
}