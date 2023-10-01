import { Customer } from "@domain/models/customer";
import { PaginatedData } from "@domain/models/paginated-data";
import { Ticket } from "@domain/models/ticket";
import { TicketDetail } from "@domain/models/ticket-detail";
import { LayoutContext } from "@features/admin/admin-layout/layout-context";
import { useContext, useEffect, useState } from "react";

export const useTIcket = () => {
  const { data, change } = useContext(LayoutContext);
  const [ticket, setTicket] = useState(
    PaginatedData.create<Ticket>({
      page: 0,
      limit: 0,
      totalRows: 0,
      data: [],
    })
  );
  useEffect(() => {
    change("Tickets");
  }, []);
  return {
    ticket,
  };
};
