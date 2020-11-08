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

      $templates = WFSupportBuilderTemplates::get_instance()->get_all();

      wp_localize_script(
			'wf-support-builder-block-js',
			'wf_support_builder_global_variables',
			array(
            'post_types'             => $post_types,
            'templates'              => $templates
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
      $template_location = WFSupportBuilderTemplates::get_instance()->get_template_file($attributes['template'] . '.php');      

      if (!$template_location)
         $template_location = WFSupportBuilderTemplates::get_instance()->get_template_file('default.php');

      load_template( $template_location['path'] );

      $output_string = ob_get_contents();
      ob_end_clean();

      return !empty($output_string) ? $output_string : null;
   }

   public static function get_instance() {
      if (!isset(self::$instance) && !(self::$instance instanceof WFSupportBuilderBlocks))
         self::$instance = new WFSupportBuilderBlocks();

      return self::$instance;
   }
}

$wf_support_builder_blocks = WFSupportBuilderBlocks::get_instance();