<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Models\Ticket;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Models\Category;
use Inertia\Inertia;

class TicketController extends Controller
{
    public function create()
    {
        $categories = Category::all();

        return Inertia::render('Tickets/Create', [
            'categories' => $categories,
        ]);
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'title' => 'required|string|max:255',
            'description' => 'required|string',
            'category_id' => 'required|exists:categories,id',
            'priority' => 'required',
        ]);

        Ticket::create([
            'ticket_no' => 'TKT-' . time(),
            'title' => $validated['title'],
            'description' => $validated['description'],
            'category_id' => $validated['category_id'],
            'priority' => $validated['priority'],
            'status' => 'Open',
            'created_by' => Auth::id(),
        ]);

        return redirect()->route('tickets.create');
    }

    public function index()
    {
        $tickets = Ticket::with([
            'category',
            'creator',
            'assignee'
        ])->latest()->get();

        return Inertia::render('Tickets/Index', [
            'tickets' => $tickets,
        ]);
    }
}
