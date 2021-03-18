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

function my_global_builder_posts( $post_ids ) {
    $post_ids[] = '360';
    $post_ids[] = '417';
    $post_ids[] = '439';
    $post_ids[] = '441';
    $post_ids[] = '443';
    $post_ids[] = '445';
    $post_ids[] = '447';
    $post_ids[] = '449';
    $post_ids[] = '451';
    $post_ids[] = '453';
    $post_ids[] = '455';
    $post_ids[] = '457';
    $post_ids[] = '459';
    return $post_ids;
  }

add_filter( 'fl_builder_global_posts', 'my_global_builder_posts' );

add_action( 'customize_register', 'vive_market_customize_register' );

add_action( 'fl_before_header', 'load_custom_templates' );
add_action('wp_enqueue_scripts', '_vive_market_flats_assets', 1000 );



add_action( 'wp_enqueue_scripts', function(){
    wp_enqueue_script( 'wp-api' );
} );
