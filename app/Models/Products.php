<?php

namespace App\Models;



class Products
{

    private static $products = [
        [
            "id" => "1",
            "img" => "https://cdn.shopify.com/s/files/1/0895/1746/products/Vaso_01_1728x.jpg?v=1571828828",
            "price" => 52,
            "title" => "Titanium Cookset"
        ],
        [
            "id" => "2",
            "img" => "https://cdn.shopify.com/s/files/1/0895/1746/products/Vaso_01_1728x.jpg?v=1571828828",
            "price" => 62,
            "title" => "Titanium Cookset 2"
        ],
        [
            "id" => "3",
            "img" => "https://cdn.shopify.com/s/files/1/0895/1746/products/Vaso_01_1728x.jpg?v=1571828828",
            "price" => 72,
            "title" => "Titanium Cookset 3"
        ],
        [
            "id" => "4",
            "img" => "https://cdn.shopify.com/s/files/1/0895/1746/products/Vaso_01_1728x.jpg?v=1571828828",
            "price" => 82,
            "title" => "Titanium Cookset 4"
        ],
        [
            "id" => "5",
            "img" => "https://cdn.shopify.com/s/files/1/0895/1746/products/Vaso_01_1728x.jpg?v=1571828828",
            "price" => 92,
            "title" => "Titanium Cookset 5"
        ],
        [
            "id" => "6",
            "img" => "https://cdn.shopify.com/s/files/1/0895/1746/products/Vaso_01_1728x.jpg?v=1571828828",
            "price" => 102,
            "title" => "Titanium Cookset 6"
        ]
    ];

    public static function all() {
        return collect(self::$products) ;
    }
    
}
