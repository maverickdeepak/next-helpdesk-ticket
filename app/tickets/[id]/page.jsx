import Link from "next/link";
import React from "react";

async function getTickets(id) {
  const response = await fetch("http://localhost:4000/tickets/" + id, {
    next: {
      revalidate: 60,
    },
  });
  return response.json();
}

async function TicketDetails({ params }) {
  const ticket = await getTickets(params.id);
  return (
    <main>
      <nav>
        <h2>Ticket Details</h2>
      </nav>
      <div className="card">
        <h3>{ticket.title}</h3>
        <small>created by: {ticket.user_email}</small>
        <p>{ticket.body}</p>
        <div className={`pill ${ticket.priority}`}>
          {ticket.priority} priority
        </div>
      </div>
      <Link href={`/tickets`}>
        <button className="btn-secondary">Go Back</button>
      </Link>
    </main>
  );
}

export default TicketDetails;
