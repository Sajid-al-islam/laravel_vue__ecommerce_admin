<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ProductStock extends Model
{
    use HasFactory;

    public function supplier() {
        return $this->hasOne(Supplier::class, 'supplier_id');
    }

    public function prodcuts() {
        return $this->hasMany(Product::class, 'product_id');
    }
}
