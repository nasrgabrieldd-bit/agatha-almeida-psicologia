import { NextResponse } from "next/server";

/**
 * Illustrative availability data, shaped exactly like what a future call to
 * the Google Calendar API (freebusy.query, or the Appointment Schedule the
 * discovery doc recommends) would need to return. Swapping the mock below
 * for a real Google Calendar read is a backend-only change: the frontend
 * calendar component only ever talks to this route.
 *
 * Working hours and the recurring Thursday 13:00 session are illustrative,
 * matching what was agreed on with the client for this prototype.
 */
const WORK_HOURS = [
  "08:00", "09:00", "10:00", "11:00", "12:00",
  "13:00", "14:00", "15:00", "16:00", "17:00",
];

const AVAILABLE_DAYS = [2, 3, 5, 8, 10, 11, 15, 17, 18, 22, 24, 25, 29];
const THURSDAYS = [3, 10, 17, 24];

function buildBookedByDay(): Record<number, string[]> {
  const bookedByDay: Record<number, string[]> = {};
  THURSDAYS.forEach((d) => {
    bookedByDay[d] = ["13:00"];
  });
  bookedByDay[2] = [...(bookedByDay[2] ?? []), "10:00"];
  bookedByDay[8] = [...(bookedByDay[8] ?? []), "09:00", "15:00"];
  bookedByDay[15] = [...(bookedByDay[15] ?? []), "11:00"];
  bookedByDay[22] = [...(bookedByDay[22] ?? []), "16:00"];
  return bookedByDay;
}

export async function GET() {
  return NextResponse.json({
    month: "Setembro 2026",
    firstWeekday: 2,
    daysInMonth: 30,
    workHours: WORK_HOURS,
    availableDays: AVAILABLE_DAYS,
    bookedByDay: buildBookedByDay(),
    illustrative: true,
  });
}
