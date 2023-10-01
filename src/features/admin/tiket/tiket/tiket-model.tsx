import { Customer } from "@domain/models/customer";
import { PaginatedData } from "@domain/models/paginated-data";
import { Ticket } from "@domain/models/ticket";
import { TicketDetail } from "@domain/models/ticket-detail";
import { useState } from "react";

export const useTIcket = () => {
  const [ticket, setTicket] = useState(
    PaginatedData.create<Ticket>({
      page: 0,
      limit: 0,
      totalRows: 0,
      data: [],
    })
  );

  return {
    ticket,
  };
};
