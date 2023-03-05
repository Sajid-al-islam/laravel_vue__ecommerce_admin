<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ProductStock extends Model
{
    use HasFactory;

    public function supplier() {
        return $this->hasOne(Supplier::class, 'id');
    }

    public function products() {
        return $this->hasMany(Product::class, 'id');
    }
}
