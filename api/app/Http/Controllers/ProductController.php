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
        $products = $this->getProducts();

        // Update products
        foreach ($products as &$product) {
//            $product['img'] = 'img/' . $product['img'];
        }

        return $products;
    }

    public function image(Request $request, $image)
    {
        $imagePath = resource_path() . '/images/' . $image;

        if (!file_exists($imagePath)) {
            abort(404);
        }

        $file = file_get_contents($imagePath);
        return response($file, 200)->header('Content-Type', 'image/png');
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
