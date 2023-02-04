import { NextResponse } from "next/server"

const signedInPages = []

export default function middleware(req) {
    if (signedInPages.find((page) => page === req.nextUrl.pathname)) {
        const token = req.cookies.DARWIN_ACCESS_TOKEN

        if (!token) {
            const url = req.nextUrl.clone()
            url.pathname = "/login"
            return NextResponse.rewrite(url)
        }
    }
}