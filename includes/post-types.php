<?php

class WFSupportBuilderPostTypes {
   public static $instance;

   public function register() {
      $config = WFSupportBuilderConfig::get_instance()->get();

      foreach($config->post_types as $post_type)
      {
         $post_type_args = $this->build_post_type_args($post_type);

         register_post_type( $post_type->name, $post_type_args );

         if (isset($post_type->taxonomies))
         {
            foreach($post_type->taxonomies as $taxonomy)
            {
               $taxonomy_args = $this->build_taxonomy_args($taxonomy);

               register_taxonomy(
                  $taxonomy->name,
                  $post_type->name,
                  $taxonomy_args
               );
            }
         }

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

      $supports = $post_type_config->supports;

      $args = array(
         'labels'          => $labels,
         'supports'        => $supports,
         'public'          => true,
         'capability_type' => 'post',
         'rewrite'         => array( 'slug' => $post_type_config->slug, ), // Permalinks format
         'menu_position'   => 5,
         'menu_icon'       => ( version_compare( $GLOBALS['wp_version'], '3.8', '>=' ) ) ? 'dashicons-hammer' : false ,
         'has_archive'     => false,
         'show_in_rest'    => true,
      );

      return $args;
   }

   private function build_taxonomy_args($taxonomy_config)
   {
      $labels = array(
         'name'                       => $taxonomy_config->display_name
      );

      $args = array(
         'labels'            => $labels,
         'public'            => true,
         'show_in_nav_menus' => true,
         'show_ui'           => true,
         'show_tagcloud'     => true,
         'hierarchical'      => true,
         'rewrite'           => array( 'slug' => $taxonomy_config->name ),
         'show_admin_column' => true,
         'query_var'         => true,
         'show_in_rest'      => true,
      );

      return $args;
   }

   public function handle_save_post( $post_id )
   {
      $fields_data;

      foreach($_POST['wf_support_builder_fields'] as $key => $value)
         $fields_data[$key] = $value;

      update_post_meta(
         $post_id,
         'wf_support_builder_custom_fields',
         json_encode( $fields_data, JSON_UNESCAPED_UNICODE )
     );
   }

   public static function get_instance()
   {
      if (!isset(self::$instance) && !(self::$instance instanceof WFSupportBuilderPostTypes))
         self::$instance = new WFSupportBuilderPostTypes();

      return self::$instance;
   }
}

$post_types = WFSupportBuilderPostTypes::get_instance();
