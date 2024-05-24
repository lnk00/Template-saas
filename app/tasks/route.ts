import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const startDate = searchParams.get("startdate");
  const endDate = searchParams.get("enddate");

  console.log({ startDate, endDate });

  return NextResponse.json({
    message: "ok",
  });
}
