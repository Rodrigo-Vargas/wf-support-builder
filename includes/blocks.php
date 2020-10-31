<?php

class WFSupportBuilderBlocks {
   public static $instance;

   public function enqueue_assets()
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
   }

   public function register_server_render_blocks()
   {
      register_block_type(
         'wf-support-builder/list', array(
         'attributes' => array(
            'id' => array(
               'type' => 'number',
               'default' => 0
            ),
            'className' => array(
               'type' => 'string'
            ),
            'template' => array(
               'type' => 'string',
               'default' => 'default'
            ),
            'postType' => array(
               'type' => 'string',
               'default' => 'post'
            )
         ),
         'render_callback' => array( $this, 'render_block' ),
      ));
   }

   public function render_block( $attributes ) {
      return 'Hello World!'
   }

   public static function get_instance() {
      if (!isset(self::$instance) && !(self::$instance instanceof WFSupportBuilderBlocks))
         self::$instance = new WFSupportBuilderBlocks();

      return self::$instance;
   }
}

$wf_services_blocks = WFSupportBuilderBlocks::get_instance();