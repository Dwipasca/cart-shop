<?php

namespace App\Http\Controllers;

use App\Models\Products;
use Inertia\Inertia;

class ProductsController extends Controller
{
    public function index() {
        return Inertia::render('Products', [
            "products" => Products::all()
        ]);
    }
}
