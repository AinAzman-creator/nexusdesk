<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Ticket extends Model
{
    protected $fillable = [
    'ticket_no',
    'title',
    'description',
    'category_id',
    'priority',
    'status',
    'created_by',
    'assigned_to',
    'attachment',
    'due_date',
    'resolved_at',
];

public function category(): BelongsTo
{
    return $this->belongsTo(Category::class);
}

public function creator(): BelongsTo
{
    return $this->belongsTo(User::class, 'created_by');
}

public function assignee(): BelongsTo
{
    return $this->belongsTo(User::class, 'assigned_to');
}
}
