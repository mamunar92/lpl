import { NextResponse } from "next/server";

export async function POST(req: Request) {
    const body = await req.json();

    const payload = {
        type: "contact",
        ...body,
    };

    const formBody = new URLSearchParams(payload).toString();

    const googleRes = await fetch(
        "https://script.google.com/macros/s/AKfycbwdZ02xJG3iBTDzmweAkmFqXN0j4PZ7912cAdG05I3F2Yk-xitQs7THLqGIQv-P0Q/exec",
        {
            method: "POST",
            headers: {
                "Content-Type": "application/x-www-form-urlencoded",
            },
            body: formBody,
        }
    );

    if (!googleRes.ok) {
        return NextResponse.json(
            { success: false },
            { status: 500 }
        );
    }

    return NextResponse.json({ success: true });
}
