import { type Attendee, type User, type Event } from "@prisma/client";
import { type ColumnDef } from "@tanstack/react-table";
import { format } from "date-fns";
import Link from "next/link";
import { fullEventId } from "../../../utils/event";
import { ExternalLink } from "lucide-react";

export const columns: ColumnDef<
  Event & { host: User; attendees: Attendee[] }
>[] = [
  {
    accessorKey: "title",
    header: "Title",
    cell: (info) => info.getValue(),
  },
  {
    accessorKey: "dateTime",
    header: "Date",
    accessorFn: (row) => format(row.dateTime, "LLLL do, H:mm"),
  },
  {
    accessorKey: "place",
    header: "Place",
  },
  {
    accessorKey: "host.name",
    header: "Host",
    cell: (info) => info.getValue(),
  },
  {
    accessorKey: "attendees.length",
    header: "Attendees",
    accessorFn: (row) => row.attendees.length,
  },
  {
    accessorKey: "attendees.status.going",
    header: "Going",
    accessorFn: (row) =>
      row.attendees.filter((a) => a.status === "GOING").length,
  },
  {
    accessorKey: "attendees.status.notGoing",
    header: "Not going",
    accessorFn: (row) =>
      row.attendees.filter((a) => a.status === "NOT_GOING").length,
  },
  {
    accessorKey: "attendees.status.maybe",
    header: "Maybe",
    accessorFn: (row) =>
      row.attendees.filter((a) => a.status === "MAYBE").length,
  },
  {
    accessorKey: "publicId",
    header: "Link",
    accessorFn: (row) => row,
    cell: (info) => {
      const event = info.getValue<
        Event & { host: User; attendees: Attendee[] }
      >();
      return (
        <Link href={`/events/${fullEventId(event)}`}>
          <ExternalLink />
        </Link>
      );
    },
  },
];
