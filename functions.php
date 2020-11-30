<?php

// Defines
define( 'FL_CHILD_THEME_DIR', get_stylesheet_directory() );
define( 'FL_CHILD_THEME_URL', get_stylesheet_directory_uri() );

// Classes
require_once 'classes/class-fl-child-theme.php';

// Actions
add_action( 'wp_enqueue_scripts', 'FLChildTheme::enqueue_scripts', 1000 );

function _vive_market_flats_assets() {
    wp_enqueue_style( '_vive_market_webfonts', 'https://use.typekit.net/asj5oot.css', array(), '1.0.0', 'all' );
    wp_enqueue_style( '_vive_market_flats-admin-stylesheet', get_stylesheet_directory_uri() . '/dist/css/admin.css', array(), '1.0.0', 'all' );
    wp_enqueue_style( '_vive_market_flats-stylesheet', get_stylesheet_directory_uri() . '/dist/css/bundle.css', array(), '1.0.0', 'all' );
    wp_enqueue_script( '_gsap', 'https://cdnjs.cloudflare.com/ajax/libs/gsap/3.5.1/gsap.min.js', array(), '1.0.0', true );
    wp_enqueue_script( '_vivus', 'https://cdn.jsdelivr.net/npm/vivus@latest/dist/vivus.min.js', array(), '1.0.0', true );
    wp_enqueue_script( '_vive_market_flats-scripts', get_stylesheet_directory_uri() . '/dist/js/bundle.js', array(), '1.0.0', true );

}

function load_custom_templates() {

    // load splash page and lightbox if the builder is not open
    if ( ! isset( $_GET['fl_builder'] ) ) {
        FLBuilder::render_query( array(
            'post_type' => 'fl-builder-template',
            'p'         => 98,
        ) );
		
        FLBuilder::render_query( array(
            'post_type' => 'fl-builder-template',
            'p'         => 139
        ) );
    }  
    
}


add_action( 'customize_register', 'vive_market_customize_register' );

add_action( 'fl_before_header', 'load_custom_templates' );
add_action('wp_enqueue_scripts', '_vive_market_flats_assets', 1000 );