<?php

class WFSupportBuilderBlocks {
   public static $instance;

   public function enqueue_list_block_assets()
   {
      $deps = array(
         'wp-blocks',
         'wp-i18n',
         'wp-editor'
      );

      $js_url = WF_SUPPORT_BUILDER_URL . '/frontend/dist/blocks.build.js';

      wp_enqueue_script(
         'wf-support-builder-block-js',
         $js_url,
         $deps,
         true
      );

      $config = WFSupportBuilderConfig::get_instance()->get();
      $post_types = $config->post_types;

      wp_localize_script(
			'wf-support-builder-block-js',
			'wf_support_builder_global_variables',
			array(
				'post_types'             => $post_types,
			)
		);
   }

   public function register_block()
   {
      $attributes = array(
         'id' => array(
            'type' => 'number',
            'default' => 0
         ),
         'className' => array(
            'type' => 'string'
         ),
         'template' => array(
            'type' => 'string'
         ),
         'postTypeId' => array(
            'type' => 'string'
         )
      );

      register_block_type(
         'wf-support-builder/list', array(
            'attributes' => $attributes,
            'render_callback' => array( $this, 'render_block' ),
         )
      );
   }

   public function render_block( $attributes ) {
      $items = WFSupportBuilderStore::get_instance()->get_all($attributes['postTypeId']);

      if (!isset($attributes['template']))
         $attributes['template'] = $attributes['postTypeId'];

      ob_start();
      set_query_var($attributes['postTypeId'], $items);
      $template_location = $this->get_template_file($attributes['template'] . '.php');      

      if (!$template_location)
         $template_location = $this->get_template_file('default.php');

      load_template( $template_location['path'] );

      $output_string = ob_get_contents();
      ob_end_clean();

      return !empty($output_string) ? $output_string : null;
   }

   private function get_template_file($filename) {
      $located = false;

      $possible_locations = $this->get_locations();

      foreach ( $possible_locations as $location ) {
         $path = trailingslashit( $location['path'] );
         if ( file_exists( $path . $filename ) ) {
            $located = array(
               'path' => $path . $filename,
               'url'  => trailingslashit( $location['url'] ) . $filename
            );
            break;
         }
      }

      return $located;
   }

   protected function get_locations() {
      $locations = array(
         10  => array(
            'path' => trailingslashit( get_template_directory() ) . 'templates/' . WF_SUPPORT_BUILDER_SLUG,
            'url'  => trailingslashit( get_template_directory_uri() ) . 'templates/' . WF_SUPPORT_BUILDER_SLUG 
         ),
         1000 => array(
            'path' => trailingslashit( WF_SUPPORT_BUILDER_PATH ) . 'templates',
            'url'  => trailingslashit( WF_SUPPORT_BUILDER_URL ) . 'templates'
         )
      );

      if ( is_child_theme() ) {
         $locations[1] = array(
            'path' => trailingslashit( get_stylesheet_directory() ) . 'templates/' . WF_SUPPORT_BUILDER_SLUG,
            'url'  => trailingslashit( get_stylesheet_directory_uri() ) . 'templates/' . WF_SUPPORT_BUILDER_SLUG 
         );
      }

      ksort( $locations, SORT_NUMERIC );

      return $locations;
   }

   public static function get_instance() {
      if (!isset(self::$instance) && !(self::$instance instanceof WFSupportBuilderBlocks))
         self::$instance = new WFSupportBuilderBlocks();

      return self::$instance;
   }
}

$wf_support_builder_blocks = WFSupportBuilderBlocks::get_instance();