<?php 

class WFSupportBuilderPostTypes {
   public static $instance;

   public function register() {
      $config = WFSupportBuilderConfig::get_instance()->get();

      foreach($config->post_types as $post_type)
      {
         $post_type_args = $this->build_post_type_args($post_type);

         register_post_type( $post_type->name, $post_type_args );

         global $wp_rewrite;
         $wp_rewrite->flush_rules( true );
      }     
   }

   private function build_post_type_args($post_type_config)
   {
      $labels = array(
         'name'                  => $post_type_config->name,
         'menu_name'             => $post_type_config->display_name
      );

      $supports = array();

      $args = array(
         'labels'          => $labels,
         'supports'        => $supports,
         'public'          => true,
         'capability_type' => 'post',
         'rewrite'         => array( 'slug' => $post_type_config->slug, ), // Permalinks format
         'menu_position'   => 5,
         'menu_icon'       => ( version_compare( $GLOBALS['wp_version'], '3.8', '>=' ) ) ? 'dashicons-hammer' : false ,
         'has_archive'     => true,
         'show_in_rest'    => true,
      );

      return $args;
   }

   public static function get_instance()
   {
      if (!isset(self::$instance) && !(self::$instance instanceof WFSupportBuilderPostTypes))
         self::$instance = new WFSupportBuilderPostTypes();

      return self::$instance;
   }
}

$post_types = WFSupportBuilderPostTypes::get_instance();