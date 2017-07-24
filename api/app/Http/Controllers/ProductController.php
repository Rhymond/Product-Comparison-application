<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Storage;

class ProductController extends Controller
{
    /**
     * Create a new controller instance.
     *
     * @return array
     */
    public function index()
    {
        return $this->getProducts();
    }

    /**
     * Get product JSON data
     *
     * @return array|null
     */
    private function getProducts()
    {
        $storagePath = database_path() . '/products.json';

        if (file_exists($storagePath)) {
            return json_decode(file_get_contents($storagePath), true)['products'];
        }

        return null;
    }
}
