import Link from "next/link";
import React from "react";

async function getTickets() {
  const response = await fetch("http://localhost:4000/tickets");
  return response.json();
}

export default async function TicketList() {
  const tickets = await getTickets();

  return (
    <>
      {tickets.map((ticket) => {
        return (
          <div key={ticket.id} className="card my-5">
            <Link href={`/tickets/${ticket.id}`}>
              <h3>{ticket.title}</h3>
              <p>{ticket.body.slice(0, 200)}...</p>
              <div className={`pill ${ticket.priority}`}>
                {ticket.priority} priority
              </div>
            </Link>
          </div>
        );
      })}
      {tickets.length === 0 && (
        <p className="text-center">There are no any open tickets!</p>
      )}
    </>
  );
}
